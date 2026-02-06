import { useRef, useState, ReactNode } from "react";
import { motion } from "framer-motion";

interface SpotlightCardProps { children: ReactNode; className?: string; spotlightColor?: string; spotlightSize?: number; }

const SpotlightCard = ({ children, className = "", spotlightColor = "rgba(0, 212, 255, 0.15)", spotlightSize = 400 }: SpotlightCardProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <motion.div ref={ref} className={`relative overflow-hidden ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}
      initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }} transition={{ duration: 0.5 }}>
      <motion.div className="absolute pointer-events-none"
        style={{ width: spotlightSize, height: spotlightSize,
          left: position.x - spotlightSize / 2, top: position.y - spotlightSize / 2,
          background: `radial-gradient(circle, ${spotlightColor} 0%, transparent 70%)` }}
        animate={{ opacity: isHovered ? 1 : 0 }} transition={{ duration: 0.2 }} />
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
};

export default SpotlightCard;
