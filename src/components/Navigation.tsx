import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Home, User, Briefcase, FolderOpen, Cpu, Mail } from "lucide-react";

const navItems = [
  { label: "Home", href: "#home", icon: Home },
  { label: "About", href: "#about", icon: User },
  { label: "Experience", href: "#experience", icon: Briefcase },
  { label: "Projects", href: "#projects", icon: FolderOpen },
  { label: "Skills", href: "#skills", icon: Cpu },
  { label: "Contact", href: "#contact", icon: Mail },
];

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      const sections = navItems.map((item) => item.href.replace("#", ""));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.getBoundingClientRect().top <= 150) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      {/* Desktop Floating Dock */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, type: "spring", stiffness: 100 }}
        className={`fixed top-5 left-1/2 -translate-x-1/2 z-50 hidden md:flex items-center gap-1 px-3 py-2.5 rounded-2xl border border-white/10 transition-all duration-300 ${
          isScrolled
            ? "bg-background/80 backdrop-blur-xl shadow-xl shadow-black/30"
            : "bg-background/70 backdrop-blur-xl shadow-lg shadow-black/20"
        }`}
      >
        {navItems.map((item) => {
          const isActive = activeSection === item.href.replace("#", "");
          const isHovered = hoveredItem === item.label;
          return (
            <div key={item.label} className="relative">
              <motion.button
                onClick={() => scrollToSection(item.href)}
                onMouseEnter={() => setHoveredItem(item.label)}
                onMouseLeave={() => setHoveredItem(null)}
                className={`relative p-3 rounded-xl transition-all duration-200 ${
                  isActive
                    ? "text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute inset-0 rounded-xl gradient-primary"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <span className="relative z-10">
                  <item.icon className="w-[18px] h-[18px]" />
                </span>
              </motion.button>
              {/* Tooltip */}
              <AnimatePresence>
                {isHovered && (
                  <motion.div
                    initial={{ opacity: 0, y: 4, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 4, scale: 0.9 }}
                    transition={{ duration: 0.15 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-2.5 px-3 py-1.5 rounded-lg bg-background/90 backdrop-blur-lg border border-white/10 shadow-lg text-xs font-medium text-foreground whitespace-nowrap pointer-events-none"
                  >
                    {item.label}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
        <div className="w-px h-5 bg-white/10 mx-1.5" />
        <button
          className="px-5 py-2 text-xs font-bold rounded-xl gradient-primary text-primary-foreground hover:opacity-90 hover:shadow-md hover:shadow-primary/20 transition-all"
          onClick={() => scrollToSection("#contact")}
        >
          Let's Talk
        </button>
      </motion.nav>

      {/* Mobile Navigation */}
      <nav className="md:hidden fixed top-0 left-0 right-0 z-50">
        <div
          className={`flex items-center justify-between px-4 h-16 transition-all duration-300 ${
            isScrolled ? "glass shadow-lg" : "bg-transparent"
          }`}
        >
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("#home");
            }}
            className="text-2xl font-bold gradient-text hover:opacity-80 transition-opacity"
          >
            RS
          </a>
          <button
            className="p-2 text-foreground hover:text-primary transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="glass overflow-hidden"
            >
              <div className="flex flex-col gap-2 p-4">
                {navItems.map((item, i) => {
                  const isActive = activeSection === item.href.replace("#", "");
                  return (
                    <motion.a
                      key={item.label}
                      href={item.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection(item.href);
                      }}
                      className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all font-medium ${
                        isActive
                          ? "gradient-primary text-primary-foreground"
                          : "text-muted-foreground hover:text-foreground hover:bg-primary/10"
                      }`}
                    >
                      <item.icon className="w-5 h-5" />
                      {item.label}
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};
