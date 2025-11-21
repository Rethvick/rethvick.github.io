import { Users, Award, Briefcase, Code } from "lucide-react";

export const About = () => {
  const stats = [
    { icon: Users, value: "40,000+", label: "Users Reached" },
    { icon: Briefcase, value: "5+", label: "Production Apps" },
    { icon: Code, value: "15+", label: "Technologies" },
    { icon: Award, value: "3.7/4.0", label: "GPA" },
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden particles-bg">
      <div className="absolute inset-0 gradient-animated opacity-5"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 animate-text-reveal">
            About <span className="gradient-text-animated">Me</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full animate-bounce-slow"></div>
        </div>

        <div className="max-w-4xl mx-auto mb-16 animate-fade-in">
          <div className="glass-strong rounded-2xl p-8 lg:p-12 hover:scale-[1.01] transition-all duration-500">
            <p className="text-lg text-muted-foreground leading-relaxed mb-6 animate-text-reveal">
              I'm a <span className="text-primary font-semibold">Master's student in Computer Science</span> at 
              the University of Arizona with a passion for building scalable full-stack applications and 
              cutting-edge AI solutions.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6 animate-text-reveal">
              Worked as a <span className="text-primary font-semibold">Scientific Research Assistant</span> at
              the BIEN Lab, where I've designed and engineered 5 research-oriented platforms serving 
              over 40,000 researchers worldwide. My work focuses on GenAI/RAG systems, machine learning, 
              and geospatial data pipelines.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed animate-text-reveal">
              I thrive on solving complex technical challenges and turning innovative ideas into production-ready solutions. I'm always eager to push the boundaries of what's possible with technology.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="glass-strong rounded-xl p-6 text-center hover:scale-105 transition-all duration-500 hover:glow-primary animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <stat.icon className="w-8 h-8 mx-auto mb-4 text-primary animate-bounce-slow" />
              <div className="text-3xl font-bold gradient-text-animated mb-2">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
