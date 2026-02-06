import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface TypingTextProps {
  texts: string[];
  className?: string;
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseTime?: number;
}

const TypingText = ({
  texts, className = "", typingSpeed = 80, deletingSpeed = 40, pauseTime = 2000,
}: TypingTextProps) => {
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = texts[textIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (charIndex < currentText.length) setCharIndex((p) => p + 1);
        else setTimeout(() => setIsDeleting(true), pauseTime);
      } else {
        if (charIndex > 0) setCharIndex((p) => p - 1);
        else { setIsDeleting(false); setTextIndex((p) => (p + 1) % texts.length); }
      }
    }, isDeleting ? deletingSpeed : typingSpeed);
    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, textIndex, texts, typingSpeed, deletingSpeed, pauseTime]);

  return (
    <span className={className}>
      {texts[textIndex].substring(0, charIndex)}
      <motion.span animate={{ opacity: [1, 0] }} transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
        className="inline-block w-[3px] h-[1em] bg-primary ml-1 align-middle" />
    </span>
  );
};

export default TypingText;
