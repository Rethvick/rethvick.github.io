import { motion } from "framer-motion";

interface Logo { name: string; icon: string; }

const LogoCloud = ({ logos, className = "", speed = 30 }: { logos: Logo[]; className?: string; speed?: number }) => {
  const duplicated = [...logos, ...logos];
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10" />
      <motion.div className="flex gap-8 items-center"
        animate={{ x: [0, -50 * logos.length] }}
        transition={{ x: { duration: speed, repeat: Infinity, ease: "linear" } }}>
        {duplicated.map((logo, i) => (
          <motion.div key={i}
            className="flex-shrink-0 flex items-center gap-3 px-6 py-3 rounded-xl bg-card/50 backdrop-blur-sm border border-primary/10 hover:border-primary/30 transition-colors group"
            whileHover={{ scale: 1.05, y: -5 }}>
            <span className="text-2xl">{logo.icon}</span>
            <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors whitespace-nowrap">{logo.name}</span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default LogoCloud;
