import { useRef, useState, ReactNode } from "react";
import { motion } from "framer-motion";

interface MagneticButtonProps { children: ReactNode; className?: string; strength?: number; }

const MagneticButton = ({ children, className = "", strength = 0.3 }: MagneticButtonProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    setPos({
      x: (e.clientX - rect.left - rect.width / 2) * strength,
      y: (e.clientY - rect.top - rect.height / 2) * strength,
    });
  };

  return (
    <motion.div ref={ref} className={`inline-block ${className}`}
      onMouseMove={handleMouseMove} onMouseLeave={() => setPos({ x: 0, y: 0 })}
      animate={{ x: pos.x, y: pos.y }} transition={{ type: "spring", stiffness: 300, damping: 20 }}>
      {children}
    </motion.div>
  );
};

export default MagneticButton;
