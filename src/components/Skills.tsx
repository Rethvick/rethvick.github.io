import { Code, Database, Cloud, Wrench } from "lucide-react";

export const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      skills: [
        { name: "Python", level: 95 },
        { name: "JavaScript/TypeScript", level: 90 },
          { name: "Java", level: 85 },
        { name: "C++", level: 85 },
        { name: "SQL", level: 90 },
        { name: "R", level: 80 },
      ]
    },
    {
      title: "Frameworks & Libraries",
      icon: Wrench,
      skills: [
        { name: "React.js/Next.js", level: 95 },
        { name: "Node.js/Express.js", level: 90 },
        { name: "TensorFlow/Keras", level: 85 },
        { name: "Flask", level: 85 },
        { name: "Vue.js", level: 80 },
        { name: "OpenCV", level: 80 },
      ]
    },
    {
      title: "Databases & Tools",
      icon: Database,
      skills: [
        { name: "PostgreSQL/PostGIS", level: 95 },
        { name: "ElasticSearch", level: 85 },
        { name: "MongoDB", level: 80 },
        { name: "MySQL", level: 85 },
        { name: "Docker", level: 85 },
        { name: "Git", level: 95 },
      ]
    },
    {
      title: "Cloud & Technologies",
      icon: Cloud,
      skills: [
        { name: "AWS", level: 85 },
        { name: "Azure", level: 80 },
        { name: "Mapbox/QGIS", level: 90 },
        { name: "D3.js", level: 85 },
        { name: "PyTorch", level: 90 },
        { name: "Linux", level: 90 },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-card/30 relative overflow-hidden particles-bg">
      <div className="absolute inset-0 gradient-animated opacity-5"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 animate-text-reveal">
            Technical <span className="gradient-text-animated">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full animate-bounce-slow"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="glass-strong rounded-2xl p-8 hover:scale-[1.02] transition-all duration-500 hover:glow-primary animate-fade-in"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-lg bg-primary/10 animate-bounce-slow">
                  <category.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold">{category.title}</h3>
              </div>

              <div className="space-y-5">
                {category.skills.map((skill, i) => (
                  <div key={i} className="group">
                    <div className="flex justify-between mb-2">
                      <span className="font-medium text-foreground group-hover:text-primary transition-colors">
                        {skill.name}
                      </span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div
                        className="h-full gradient-primary rounded-full transition-all duration-1000 ease-out hover:glow-primary"
                        style={{
                          width: `${skill.level}%`,
                          animation: "slide-right 1s ease-out"
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills */}
        <div className="mt-12 max-w-4xl mx-auto animate-fade-in">
          <div className="glass-strong rounded-2xl p-8 hover:scale-[1.01] transition-all duration-500">
            <h3 className="text-2xl font-bold mb-6 text-center gradient-text-animated">Additional Expertise</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                "Machine Learning", "Deep Learning", "Natural Language Processing",
                "Computer Vision", "GenAI/RAG Systems", "Data Visualization",
                "ETL Pipelines", "Geospatial Analysis", "API Development",
                "Agile/Scrum", "CI/CD", "Web Scraping", "Data Analytics"
              ].map((skill, index) => (
                <span
                  key={index}
                  className="px-4 py-2 text-sm bg-primary/10 text-primary rounded-full border border-primary/20 hover:bg-primary/20 hover:scale-110 transition-all cursor-default animate-fade-in"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
