import { motion } from "framer-motion";
import { Calendar, MapPin, ExternalLink, GraduationCap, Building2, BookOpen } from "lucide-react";
import { DecryptedText, SpotlightCard, CountUp } from "@/components/animations";

export const Experience = () => {
  const experiences = [
    {
      title: "Software Engineer (Full-Stack Developer) - Research Assistant",
      company: "University of Arizona (Enquist Lab)",
      location: "Tucson, AZ",
      period: "Jan 2024 – Dec 2025",
      achievements: [
        { text: "Spearheaded the backend and data architecture for", num: 5, suffix: " major research platforms", rest: ", serving", num2: 134000, suffix2: "+ global researchers", rest2: " with 99.9% uptime" },
        { text: "Developed high-throughput RESTful inference APIs handling massive geospatial datasets, utilizing async processing for real-time model queries" },
        { text: "Overhauled critical query paths and implemented vector-based indexing strategies, achieving a", num: 40, suffix: "% reduction in latency" },
        { text: "Established robust ETL pipelines integrating", num: 50, suffix: "+ heterogeneous global datasets", rest: " into a unified Knowledge Graph" },
        { text: "Implemented automated Python-based testing suites, resolving", num: 35, suffix: "% of data inconsistencies", rest: " pre-deployment" },
      ],
      links: [
        { label: "BIEN", url: "https://biendata.org" },
        { label: "TNRS", url: "https://tnrs.biendata.org" },
        { label: "GNRS", url: "https://gnrs.biendata.org" },
        { label: "NSR", url: "https://nsr.biendata.org" },
        { label: "GVS", url: "https://gvs.biendata.org" },
      ],
    },
  ];

  const publications = [
    {
      title: "OpenRange: Species Maps",
      type: "R Package (CRAN)",
      year: "2025",
      description: "Authored core functionality for accessing species range maps, optimizing core C++ extensions to handle millions of coordinate points efficiently.",
    },
    {
      title: "GVS: Geo Validation",
      type: "R Package (CRAN)",
      year: "2024",
      description: "Formulated algorithms to validate geospatial coordinates in large datasets, enabling rapid validation for scientific research.",
    },
  ];

  const education = [
    {
      degree: "Master of Science in Computer Science",
      school: "University of Arizona",
      location: "Tucson, Arizona",
      period: "Aug 2023 – Aug 2025",
      gpa: 3.7,
      gpaMax: "/4.0",
      courses: [
        "Principles Of Machine Learning", "Design and Analysis of Algorithms",
        "Advanced Data Visualization", "Computer Security",
        "Text Retrieval and Web Search", "Computer Vision", "Advanced Topics in AI",
      ],
    },
    {
      degree: "Bachelor of Technology in CS & Business Systems",
      school: "SRM Institute of Science and Technology",
      location: "Chennai, India",
      period: "Aug 2019 – May 2023",
      gpa: 9.16,
      gpaMax: "/10",
      courses: [
        "Data Structures and Algorithms", "Artificial Intelligence",
        "Machine Learning", "Deep Learning", "Image Processing", "Cloud Computing",
      ],
    },
  ];

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <DecryptedText text="My Journey" speed={60} className="text-4xl lg:text-5xl font-bold" revealDirection="start" />
          </h2>
          <motion.div className="w-20 h-1 bg-primary mx-auto rounded-full"
            initial={{ width: 0 }} whileInView={{ width: 80 }} viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }} />
        </div>

        {/* Work Experience */}
        <div className="mb-20">
          <motion.h3 className="text-3xl font-bold mb-8 text-center flex items-center justify-center gap-3"
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <Building2 className="w-7 h-7 text-primary" /> Work Experience
          </motion.h3>
          <div className="max-w-4xl mx-auto">
            {experiences.map((exp, index) => (
              <motion.div key={index} className="relative pl-8 pb-12 border-l-2 border-primary/30"
                initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                transition={{ duration: 0.6 }}>
                <div className="absolute left-0 top-0 w-4 h-4 rounded-full gradient-primary transform -translate-x-[9px]" />
                <SpotlightCard className="glass rounded-xl p-6 lg:p-8" spotlightColor="rgba(0, 212, 255, 0.08)">
                  <h4 className="text-2xl font-bold text-foreground mb-2">{exp.title}</h4>
                  <div className="flex flex-wrap gap-4 mb-4 text-muted-foreground">
                    <div className="flex items-center gap-2"><Building2 className="w-4 h-4 text-primary" /><span>{exp.company}</span></div>
                    <div className="flex items-center gap-2"><MapPin className="w-4 h-4 text-primary" /><span>{exp.location}</span></div>
                    <div className="flex items-center gap-2"><Calendar className="w-4 h-4 text-primary" /><span>{exp.period}</span></div>
                  </div>
                  <ul className="space-y-3 mb-4">
                    {exp.achievements.map((a, i) => (
                      <motion.li key={i} className="flex gap-3 text-muted-foreground"
                        initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                        <span className="text-primary mt-1 flex-shrink-0">▹</span>
                        <span>
                          {a.num !== undefined ? (
                            <>
                              {a.text}{" "}
                              <span className="text-primary font-semibold"><CountUp end={a.num} duration={2} separator="," />{a.suffix}</span>
                              {a.num2 !== undefined ? (
                                <>{a.rest}{" "}<span className="text-primary font-semibold"><CountUp end={a.num2} duration={2.5} separator="," />{a.suffix2}</span>{a.rest2}</>
                              ) : a.rest}
                            </>
                          ) : a.text}
                        </span>
                      </motion.li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-3">
                    {exp.links.map((link, i) => (
                      <motion.a key={i} href={link.url} target="_blank" rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm text-primary hover:underline hover:text-primary/80 transition-colors"
                        whileHover={{ x: 3 }}>
                        <ExternalLink className="w-4 h-4" />{link.label}
                      </motion.a>
                    ))}
                  </div>
                </SpotlightCard>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Publications */}
        <div className="mb-20">
          <motion.h3 className="text-3xl font-bold mb-8 text-center flex items-center justify-center gap-3"
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <BookOpen className="w-7 h-7 text-primary" /> Open Source & Publications
          </motion.h3>
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
            {publications.map((pub, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: index * 0.15 }}>
                <SpotlightCard className="glass rounded-xl p-6 h-full" spotlightColor="rgba(0, 212, 255, 0.08)">
                  <div className="flex items-start justify-between mb-3">
                    <h4 className="text-xl font-bold text-foreground">{pub.title}</h4>
                    <span className="text-primary text-sm font-semibold">{pub.year}</span>
                  </div>
                  <p className="text-sm text-primary mb-3">{pub.type}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">{pub.description}</p>
                </SpotlightCard>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div>
          <motion.h3 className="text-3xl font-bold mb-8 text-center flex items-center justify-center gap-3"
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <GraduationCap className="w-7 h-7 text-primary" /> Education
          </motion.h3>
          <div className="max-w-4xl mx-auto space-y-8">
            {education.map((edu, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: index * 0.15 }}>
                <SpotlightCard className="glass rounded-xl p-6 lg:p-8" spotlightColor="rgba(0, 212, 255, 0.08)">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                    <div>
                      <h4 className="text-2xl font-bold text-foreground mb-2">{edu.degree}</h4>
                      <p className="text-xl text-primary mb-2">{edu.school}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-muted-foreground">{edu.period}</p>
                      <p className="text-lg font-semibold gradient-text">
                        <CountUp end={edu.gpa} decimals={edu.gpa % 1 !== 0 ? 2 : 0} duration={2} suffix={edu.gpaMax} />
                      </p>
                      <p className="text-sm text-muted-foreground">{edu.location}</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {edu.courses.map((course, i) => (
                      <motion.span key={i} className="px-3 py-1 text-xs bg-primary/10 text-primary rounded-full border border-primary/20"
                        initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }} transition={{ delay: 0.3 + i * 0.05 }}>
                        {course}
                      </motion.span>
                    ))}
                  </div>
                </SpotlightCard>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
