import { Calendar, MapPin, ExternalLink } from "lucide-react";

export const Experience = () => {
  const experiences = [
    {
      title: "Scientific Research Assistant (Full-Stack Developer)",
      company: "University of Arizona - BIEN Enquist Lab",
      location: "Tucson, AZ",
      period: "JAN 2024 - AUG 2025",
      achievements: [
        "Designed and engineered 5 research platforms (biendata.org, tnrs.biendata.org, gnrs.biendata.org, nsr.biendata.org, gvs.biendata.org) serving 40,000+ researchers worldwide",
        "Optimized web solutions using Node.js, React.js, Next.js, PostgreSQL, PostGIS, Mapbox, and R packages",
        "Pioneered BIEN 3 schema architecture, integrating 50+ global datasets of herbarium specimens",
        "Orchestrated ETL pipelines eliminating 35% of data inconsistencies and improving workflow efficiency",
        "Contributed to 1 academic publication currently under review"
      ],
      links: [
        { label: "biendata.org", url: "https://biendata.org" },
        { label: "tnrs.biendata.org", url: "https://tnrs.biendata.org" },
          { label: "gnrs.biendata.org", url: "https://gnrs.biendata.org" },
          { label: "nsr.biendata.org", url: "https://nsr.biendata.org" },
          { label: "gvs.biendata.org", url: "https://gvs.biendata.org" }
      ]
    }
  ];

  const education = [
    {
      degree: "Master of Science in Computer Science",
      school: "University Of Arizona",
      location: "Tucson, Arizona",
      period: "AUG 2023 - AUG 2025",
      gpa: "3.7/4.0",
      courses: [
        "Principles Of Machine Learning",
        "Design and Analysis of Algorithms",
        "Advanced Data Visualization",
        "Computer Security",
        "Text Retrieval and Web Search",
        "Computer Vision",
        "Advanced Topics in AI"
      ]
    },
    {
      degree: "Bachelor of Technology in Computer Science",
      school: "SRM Institute Of Science And Technology",
      location: "Chennai, India",
      period: "AUG 2019 - MAY 2023",
      gpa: "9.16/10",
      courses: [
        "Data Structures and Algorithms",
        "Artificial Intelligence",
        "Machine Learning",
        "Deep Learning",
        "Image Processing",
        "Cloud Computing"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-card/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            My <span className="gradient-text">Journey</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        {/* Work Experience */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold mb-8 text-center">Work Experience</h3>
          <div className="max-w-4xl mx-auto">
            {experiences.map((exp, index) => (
              <div key={index} className="relative pl-8 pb-12 border-l-2 border-primary/30">
                <div className="absolute left-0 top-0 w-4 h-4 rounded-full bg-primary transform -translate-x-[9px] animate-pulse"></div>
                <div className="glass rounded-xl p-6 lg:p-8 hover:scale-[1.02] transition-transform duration-300">
                  <h4 className="text-2xl font-bold text-foreground mb-2">{exp.title}</h4>
                  <div className="flex flex-wrap gap-4 mb-4 text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Briefcase className="w-4 h-4 text-primary" />
                      <span>{exp.company}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-primary" />
                      <span>{exp.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-primary" />
                      <span>{exp.period}</span>
                    </div>
                  </div>
                  <ul className="space-y-3 mb-4">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex gap-3 text-muted-foreground">
                        <span className="text-primary mt-1">▹</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                  {exp.links && (
                    <div className="flex flex-wrap gap-3">
                      {exp.links.map((link, i) => (
                        <a
                          key={i}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-sm text-primary hover:underline"
                        >
                          <ExternalLink className="w-4 h-4" />
                          {link.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div>
          <h3 className="text-3xl font-bold mb-8 text-center">Education</h3>
          <div className="max-w-4xl mx-auto space-y-8">
            {education.map((edu, index) => (
              <div key={index} className="glass rounded-xl p-6 lg:p-8 hover:scale-[1.02] transition-transform duration-300">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                  <div>
                    <h4 className="text-2xl font-bold text-foreground mb-2">{edu.degree}</h4>
                    <p className="text-xl text-primary mb-2">{edu.school}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-muted-foreground">{edu.period}</p>
                    <p className="text-lg font-semibold gradient-text">{edu.gpa}</p>
                    <p className="text-sm text-muted-foreground">{edu.location}</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {edu.courses.map((course, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs bg-primary/10 text-primary rounded-full border border-primary/20"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Briefcase = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
  </svg>
);
