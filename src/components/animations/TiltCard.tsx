import { useRef, useState, ReactNode } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

interface TiltCardProps { children: ReactNode; className?: string; tiltAmount?: number; perspective?: number; scale?: number; glareOpacity?: number; }

const TiltCard = ({ children, className = "", tiltAmount = 15, perspective = 1000, scale = 1.02, glareOpacity = 0.2 }: TiltCardProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], [tiltAmount, -tiltAmount]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], [-tiltAmount, tiltAmount]);
  const glareX = useTransform(mouseXSpring, [-0.5, 0.5], ["0%", "100%"]);
  const glareY = useTransform(mouseYSpring, [-0.5, 0.5], ["0%", "100%"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  return (
    <motion.div ref={ref} className={`relative ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => { setIsHovered(false); x.set(0); y.set(0); }}
      style={{ perspective, transformStyle: "preserve-3d" }}
      animate={{ scale: isHovered ? scale : 1 }}
      transition={{ scale: { duration: 0.2 } }}>
      <motion.div style={{ rotateX, rotateY, transformStyle: "preserve-3d" }} className="w-full h-full">
        {children}
        <motion.div className="absolute inset-0 pointer-events-none rounded-[inherit] overflow-hidden"
          style={{ opacity: isHovered ? glareOpacity : 0 }}>
          <motion.div className="absolute w-[200%] h-[200%]"
            style={{ background: "radial-gradient(circle at center, rgba(255,255,255,0.8) 0%, transparent 50%)", left: glareX, top: glareY, transform: "translate(-50%, -50%)" }} />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default TiltCard;
