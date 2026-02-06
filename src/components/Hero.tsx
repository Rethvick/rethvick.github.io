import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Github, Linkedin, Mail, Phone, ArrowDown, Download } from "lucide-react";
import { GradientText, TypingText, MagneticButton } from "@/components/animations";
import heroPortrait from "@/assets/hero-portrait.jpg";

export const Hero = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const yParallax = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const opacityFade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const titles = [
    "AI & ML Software Engineer",
    "Full-Stack Developer",
    "GenAI/RAG Specialist",
    "Data Engineering Lead",
  ];

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const socialLinks = [
    { href: "https://github.com/rethvick", icon: Github, label: "GitHub" },
    { href: "https://linkedin.com/in/rethvick", icon: Linkedin, label: "LinkedIn" },
    { href: "mailto:rethvickofficial@gmail.com", icon: Mail, label: "Email" },
    { href: "tel:+15202048244", icon: Phone, label: "Phone" },
  ];

  const floatingBadges = [
    { text: "GenAI/RAG", delay: 0 },
    { text: "Full-Stack", delay: 0.2 },
    { text: "LLMs & MLOps", delay: 0.4 },
    { text: "134K+ Users", delay: 0.6 },
  ];

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <motion.div style={{ y: yParallax, opacity: opacityFade }} className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-2"
            >
              <motion.p
                className="text-primary text-lg font-medium"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                Hi there, I'm
              </motion.p>
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <GradientText text="Rethvick Sriram" className="text-5xl lg:text-7xl font-bold" />
                <br />
                <motion.span
                  className="text-foreground"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  Yugendra Babu
                </motion.span>
              </h1>
            </motion.div>

            <motion.div
              className="h-16"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              <TypingText
                texts={titles}
                className="text-2xl lg:text-3xl text-muted-foreground font-medium"
                typingSpeed={80}
                deletingSpeed={40}
                pauseTime={2000}
              />
            </motion.div>

            <motion.p
              className="text-lg text-muted-foreground max-w-xl leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.6 }}
            >
              AI & Machine Learning Software Engineer with a Master's in Computer Science. 
              Building scalable <span className="text-primary font-semibold">AI Infrastructure</span> and{" "}
              <span className="text-primary font-semibold">MLOps pipelines</span> for{" "}
              <span className="text-primary font-semibold">134,000+ users</span>. Deploying production-grade 
              Generative AI solutions and Large Language Models.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1 }}
            >
              {/* Download Resume Button */}
              <MagneticButton strength={0.3}>
                <a
                  href="https://drive.google.com/file/d/1l97iXV8jhB45ICQ9URAyQRf0mP6sD3mt/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center h-11 px-7 text-sm font-semibold rounded-lg border border-primary/40 text-foreground bg-white/5 hover:bg-primary/10 hover:border-primary transition-all hover:scale-[1.03] backdrop-blur-sm gap-2"
                >
                  <Download className="w-4 h-4" />
                  Download Resume
                </a>
              </MagneticButton>

              {/* View My Work Button (Now Transparent) */}
              <MagneticButton strength={0.3}>
                <button
                  onClick={() => scrollToSection("projects")}
                  className="inline-flex items-center justify-center h-11 px-7 text-sm font-semibold rounded-lg border border-primary/40 text-foreground bg-white/5 hover:bg-primary/10 hover:border-primary transition-all hover:scale-[1.03] backdrop-blur-sm"
                >
                  View My Work
                </button>
              </MagneticButton>
              
              {/* Contact Me Button */}
              <MagneticButton strength={0.3}>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="inline-flex items-center justify-center h-11 px-7 text-sm font-semibold rounded-lg border border-primary/40 text-foreground bg-white/5 hover:bg-primary/10 hover:border-primary transition-all hover:scale-[1.03] backdrop-blur-sm"
                >
                  Contact Me
                </button>
              </MagneticButton>
            </motion.div>

            <motion.div
              className="flex gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.3 }}
            >
              {socialLinks.map((link, i) => (
                <MagneticButton key={i} strength={0.4}>
                  <a
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-12 h-12 p-3 glass rounded-full hover:bg-primary/20 transition-all hover:scale-110"
                    aria-label={link.label}
                  >
                    <link.icon className="w-5 h-5" />
                  </a>
                </MagneticButton>
              ))}
            </motion.div>
          </div>

          {/* Right Content - Portrait with animated rings */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8, type: "spring" }}
          >
            <div className="relative w-full max-w-lg mx-auto">
              {/* Animated rings */}
              <motion.div
                className="absolute inset-[-20px] rounded-full border-2 border-primary/20"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className="absolute inset-[-40px] rounded-full border border-accent/10"
                animate={{ rotate: -360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              />

              {/* Glow */}
              <div className="absolute inset-0 rounded-full bg-primary/15 blur-2xl" />

              {/* Portrait */}
              <div className="relative rounded-full overflow-hidden border-4 border-primary/40 shadow-2xl shadow-primary/20 hover:border-primary/60 transition-colors duration-500">
                <img
                  src={heroPortrait}
                  alt="Rethvick Sriram Yugendra Babu"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Floating badges */}
              {floatingBadges.map((badge, i) => {
                const positions = [
                  "top-0 -right-4",
                  "-left-4 top-1/4",
                  "-right-8 bottom-1/4",
                  "-left-2 bottom-8",
                ];
                return (
                  <motion.div
                    key={i}
                    className={`absolute ${positions[i]} px-3 py-1.5 glass rounded-full text-xs font-medium text-primary border border-primary/30`}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1 + badge.delay, type: "spring" }}
                    whileHover={{ scale: 1.1 }}
                  >
                    {badge.text}
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ArrowDown className="w-6 h-6 text-primary" />
        </motion.div>
      </motion.div>
    </section>
  );
};