import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import ColorBends from "@/components/animations/ColorBends";
import { GradientText } from "@/components/animations";

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });
  return <motion.div className="fixed top-0 left-0 right-0 h-1 gradient-primary origin-left z-[60]" style={{ scaleX }} />;
};

const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
  useEffect(() => { const t = setTimeout(onComplete, 2200); return () => clearTimeout(t); }, [onComplete]);
  return (
    <motion.div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background"
      exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
      <motion.div initial={{ scale: 0.5, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, type: "spring" }}>
        <GradientText text="RS" className="text-8xl font-bold" />
      </motion.div>
      <motion.div className="mt-8 h-1 w-48 rounded-full overflow-hidden bg-muted"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
        <motion.div className="h-full gradient-primary rounded-full"
          initial={{ width: 0 }} animate={{ width: "100%" }}
          transition={{ delay: 0.6, duration: 1.4, ease: "easeInOut" }} />
      </motion.div>
      <motion.p className="mt-4 text-muted-foreground text-sm"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}>
        Loading experience...
      </motion.p>
    </motion.div>
  );
};

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  return (
    <div className="min-h-screen bg-background relative">
      <AnimatePresence mode="wait">
        {isLoading && <LoadingScreen key="loading" onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>

      <div className="fixed inset-0 z-0">
        <ColorBends
          colors={["#ff3c00", "#ff8800", "#ffdd00", "#00ff88", "#00aaff", "#7c3aed", "#ff44aa"]}
          speed={0.2} noise={0.05} rotation={45} scale={1} frequency={1}
          warpStrength={1} mouseInfluence={1} parallax={0.5} transparent={false} />
        <div className="absolute inset-0 bg-background/40" />
      </div>

      {!isLoading && (
        <motion.div className="relative z-10" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
          <ScrollProgress />
          <Navigation />
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Skills />
          <Contact />
          <Footer />
        </motion.div>
      )}
    </div>
  );
};

export default Index;
