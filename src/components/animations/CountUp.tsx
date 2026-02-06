import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

interface CountUpProps {
  end: number;
  start?: number;
  duration?: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
  separator?: string;
}

const CountUp = ({
  end, start = 0, duration = 2, decimals = 0,
  prefix = "", suffix = "", className = "", separator = ",",
}: CountUpProps) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const [count, setCount] = useState(start);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    if (!isInView || hasStarted) return;
    setHasStarted(true);
    const startTime = Date.now();
    const durationMs = duration * 1000;
    const easeOutExpo = (t: number) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t));
    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / durationMs, 1);
      const currentValue = start + (end - start) * easeOutExpo(progress);
      setCount(currentValue);
      if (progress < 1) requestAnimationFrame(animate);
      else setCount(end);
    };
    requestAnimationFrame(animate);
  }, [isInView, end, start, duration, hasStarted]);

  const formatNumber = (num: number) => {
    const fixed = num.toFixed(decimals);
    const [intPart, decPart] = fixed.split(".");
    const withSep = intPart.replace(/\B(?=(\d{3})+(?!\d))/g, separator);
    return decPart ? `${withSep}.${decPart}` : withSep;
  };

  return (
    <motion.span ref={ref} className={className}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5 }}>
      {prefix}{formatNumber(count)}{suffix}
    </motion.span>
  );
};

export default CountUp;
