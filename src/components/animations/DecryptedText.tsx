import { useEffect, useState, useRef, useCallback } from "react";
import { motion } from "framer-motion";

interface DecryptedTextProps {
  text: string;
  speed?: number;
  maxIterations?: number;
  sequential?: boolean;
  revealDirection?: "start" | "end" | "center";
  characters?: string;
  className?: string;
  parentClassName?: string;
  encryptedClassName?: string;
  animateOn?: "view" | "hover";
}

const DecryptedText = ({
  text, speed = 50, maxIterations = 10, sequential = false,
  revealDirection = "start",
  characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*",
  className = "", parentClassName = "", encryptedClassName = "text-primary",
  animateOn = "view",
}: DecryptedTextProps) => {
  const [displayText, setDisplayText] = useState(text);
  const [isAnimating, setIsAnimating] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const containerRef = useRef<HTMLSpanElement>(null);
  const animationRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const getRandomChar = useCallback(() =>
    characters[Math.floor(Math.random() * characters.length)], [characters]);

  const animate = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    let iteration = 0;
    const textArray = text.split("");
    const revealedIndices = new Set<number>();
    const getNextIndex = () => {
      const unrevealed = textArray.map((_, i) => i).filter((i) => !revealedIndices.has(i));
      if (unrevealed.length === 0) return -1;
      if (revealDirection === "start") return Math.min(...unrevealed);
      if (revealDirection === "end") return Math.max(...unrevealed);
      const mid = Math.floor(textArray.length / 2);
      return unrevealed.reduce((c, u) => Math.abs(u - mid) < Math.abs(c - mid) ? u : c, unrevealed[0]);
    };
    const step = () => {
      if (sequential) {
        const nextIndex = getNextIndex();
        if (nextIndex !== -1 && iteration >= maxIterations) { revealedIndices.add(nextIndex); iteration = 0; }
      }
      setDisplayText(textArray.map((char, index) => {
        if (char === " ") return " ";
        if (revealedIndices.has(index)) return char;
        if (!sequential && iteration >= maxIterations * (index / textArray.length + 0.5)) { revealedIndices.add(index); return char; }
        return getRandomChar();
      }).join(""));
      iteration++;
      if (revealedIndices.size < textArray.filter((c) => c !== " ").length) animationRef.current = setTimeout(step, speed);
      else { setDisplayText(text); setIsAnimating(false); setHasAnimated(true); }
    };
    step();
  }, [text, speed, maxIterations, sequential, revealDirection, getRandomChar, isAnimating]);

  useEffect(() => {
    if (animateOn === "view" && !hasAnimated) {
      const observer = new IntersectionObserver(
        (entries) => { if (entries[0].isIntersecting) { animate(); observer.disconnect(); } },
        { threshold: 0.1 }
      );
      if (containerRef.current) observer.observe(containerRef.current);
      return () => observer.disconnect();
    }
  }, [animateOn, hasAnimated, animate]);

  useEffect(() => {
    if (animateOn === "hover" && isHovering && !isAnimating) animate();
  }, [animateOn, isHovering, isAnimating, animate]);

  useEffect(() => { return () => { if (animationRef.current) clearTimeout(animationRef.current); }; }, []);

  return (
    <motion.span ref={containerRef} className={`inline-block ${parentClassName}`}
      onMouseEnter={() => animateOn === "hover" && (setIsHovering(true), setHasAnimated(false))}
      onMouseLeave={() => animateOn === "hover" && setIsHovering(false)}
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
      {displayText.split("").map((char, index) => (
        <span key={index} className={`${className} ${char !== text[index] && isAnimating ? encryptedClassName : ""}`}>
          {char}
        </span>
      ))}
    </motion.span>
  );
};

export default DecryptedText;
