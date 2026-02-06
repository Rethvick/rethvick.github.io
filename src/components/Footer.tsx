import { motion } from "framer-motion";
import { Heart, ArrowUp, Github, Linkedin, Mail } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="py-8 border-t border-border/50 relative">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <motion.p className="text-muted-foreground text-sm"
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            &copy; {currentYear} Rethvick Sriram Yugendra Babu. All rights reserved.
          </motion.p>
          <div className="flex items-center gap-4">
            {[
              { icon: Github, href: "https://github.com/rethvick" },
              { icon: Linkedin, href: "https://linkedin.com/in/rethvick" },
              { icon: Mail, href: "mailto:rethvickofficial@gmail.com" },
            ].map((link, i) => (
              <motion.a key={i} href={link.href} target={link.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors"
                whileHover={{ scale: 1.2, y: -2 }}>
                <link.icon className="w-4 h-4" />
              </motion.a>
            ))}
          </div>
          <motion.p className="text-muted-foreground text-sm flex items-center gap-2"
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            Built with <Heart className="w-4 h-4 text-primary fill-primary" /> using React & TypeScript
          </motion.p>
        </div>
      </div>
      <motion.button onClick={scrollToTop}
        className="absolute right-6 -top-5 p-3 glass rounded-full hover:glow-primary transition-all hover:scale-110"
        whileHover={{ y: -3 }} whileTap={{ scale: 0.9 }} aria-label="Scroll to top">
        <ArrowUp className="w-4 h-4 text-primary" />
      </motion.button>
    </footer>
  );
};
