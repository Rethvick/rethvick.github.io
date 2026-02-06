import { motion } from "framer-motion";

interface GradientTextProps {
  text: string;
  className?: string;
  from?: string;
  via?: string;
  to?: string;
}

const GradientText = ({
  text, className = "",
  from = "hsl(175, 85%, 50%)", via = "hsl(200, 95%, 55%)", to = "hsl(285, 85%, 60%)",
}: GradientTextProps) => (
  <motion.span
    className={`inline-block ${className}`}
    style={{
      background: `linear-gradient(135deg, ${from}, ${via}, ${to})`,
      WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
      backgroundClip: "text", backgroundSize: "200% auto",
    }}
    animate={{ backgroundPosition: ["0% center", "200% center"] }}
    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
  >
    {text}
  </motion.span>
);

export default GradientText;
