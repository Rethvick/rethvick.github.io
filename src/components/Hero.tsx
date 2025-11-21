import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Phone, ArrowDown } from "lucide-react";
import heroPortrait from "@/assets/hero-portrait.jpg";
import heroBg from "@/assets/hero-bg.jpg";

export const Hero = () => {
  const [textIndex, setTextIndex] = useState(0);
  const titles = [
    "Full-Stack Developer",
      "AI Engineer",
    "ML Engineer",
    "Research Assistant"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % titles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden particles-bg"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(6, 11, 20, 0.92), rgba(6, 11, 20, 0.96)), url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/30 rounded-full blur-3xl animate-float glow-primary"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/25 rounded-full blur-3xl animate-float-delayed glow-secondary"></div>
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-accent/20 rounded-full blur-3xl animate-float"></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="animate-slide-right space-y-6">
            <div className="space-y-2">
              <p className="text-primary text-lg font-medium animate-text-reveal">Hi there, I'm</p>
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight animate-text-reveal">
                <span className="gradient-text-animated">Rethvick Sriram</span>
                <br />
                <span className="text-foreground">Yugendra Babu</span>
              </h1>
            </div>
            
            <div className="h-16 animate-fade-in-delayed">
              <h2 className="text-2xl lg:text-3xl text-muted-foreground font-medium transition-all duration-500">
                {titles[textIndex]}
              </h2>
            </div>

            <p className="text-lg text-muted-foreground max-w-xl animate-fade-in-delayed">
              MS Computer Science candidate and full-stack engineer specializing in GenAI/RAG systems, 
              Machine Learning, and geospatial data pipelines. Building production platforms used by 
              <span className="text-primary font-semibold"> 40,000+ researchers worldwide</span>.
            </p>

            <div className="flex flex-wrap gap-4 animate-fade-in-delayed">
              <Button 
                size="lg" 
                className="gradient-primary hover:opacity-90 transition-all hover:scale-105 hover:glow-primary"
                onClick={() => scrollToSection('projects')}
              >
                View My Work
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="glass border-primary/50 hover:bg-primary/10 hover:scale-105 transition-all"
                onClick={() => scrollToSection('contact')}
              >
                Contact Me
              </Button>
            </div>

            <div className="flex gap-4 animate-fade-in-delayed">
              <a 
                href="https://github.com/rethvick" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 glass rounded-full hover:bg-primary/20 transition-all hover:scale-110"
              >
                <Github className="w-5 h-5" />
              </a>
              <a 
                href="https://linkedin.com/in/rethvick" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 glass rounded-full hover:bg-primary/20 transition-all hover:scale-110"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="mailto:rethvickofficial@gmail.com"
                className="p-3 glass rounded-full hover:bg-primary/20 transition-all hover:scale-110"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a 
                href="tel:+15202048244"
                className="p-3 glass rounded-full hover:bg-primary/20 transition-all hover:scale-110"
              >
                <Phone className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="relative animate-scale-in">
            <div className="relative w-full max-w-lg mx-auto">
              {/* Glowing border effect */}
              <div className="absolute inset-0 gradient-animated rounded-full blur-2xl opacity-40 animate-pulse"></div>
              <div className="relative rounded-full overflow-hidden border-4 border-primary/40 shadow-2xl hover:border-primary/60 transition-all duration-500">
                <img 
                  src={heroPortrait} 
                  alt="Rethvick Sriram Yugendra Babu" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-primary" />
        </div>
      </div>
    </section>
  );
};
