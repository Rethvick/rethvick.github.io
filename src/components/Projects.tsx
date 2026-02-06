import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { DecryptedText, SpotlightCard, TiltCard, CountUp } from "@/components/animations";

export const Projects = () => {
  const projects = [
    {
      title: "Enterprise RAG System (GenAI)",
      description: "Constructed a production-ready Retrieval-Augmented Generation system using LangChain and OpenAI for domain-specific query resolution.",
      technologies: ["Python", "LangChain", "Elasticsearch", "OpenAI", "Flask", "React.js"],
      highlights: [
        { text: "Achieved", num: 0.90, suffix: " precision", rest: " (+35% improvement) in domain-specific query resolution", decimals: 2 },
        { text: "Implemented hybrid search on", num: 10000, suffix: "+ documents", rest: ", reducing context retrieval latency from 1.2s to 600ms" },
        { text: "Launched a scalable Flask backend with React frontend for seamless interaction" },
      ],
      links: [{ label: "Code", url: "https://github.com/Rethvick/RetrievalAugmentedGeneration" }],
      gradient: "from-cyan-500 to-blue-500",
    },
    {
      title: "LLMCommit Agent (Autonomous AI DevOps)",
      description: "Devised an autonomous AI Agent integrated into CI/CD pipelines to automatically generate semantic commit messages and documentation.",
      technologies: ["Python", "LLMs", "Git Internals", "CI/CD"],
      highlights: [
        { text: "Integrated into CI/CD pipelines to automatically generate semantic commit messages from code diffs" },
        { text: "Minimized manual documentation overhead by", num: 70, suffix: "%" },
        { text: "Processing", num: 100, suffix: "+ commits", rest: " daily with high accuracy across the engineering team" },
      ],
      links: [{ label: "Code", url: "https://github.com/Rethvick/LLMCommitAgent" }],
      gradient: "from-purple-500 to-pink-500",
    },
    {
      title: "BIEN Research Platforms",
      description: "Suite of 5 production research platforms serving global researchers with biodiversity, geospatial data, and predictive modeling.",
      technologies: ["Next.js", "Node.js", "PostgreSQL", "PostGIS", "Mapbox", "React.js"],
      highlights: [
        { text: "Serving", num: 134000, suffix: "+ researchers", rest: " globally with 99.9% uptime" },
        { text: "Integrated", num: 50, suffix: "+ heterogeneous global datasets", rest: " into a unified Knowledge Graph" },
        { text: "Achieved", num: 40, suffix: "% reduction in latency", rest: " via vector-based indexing strategies" },
      ],
      gradient: "from-green-500 to-emerald-500",
      links: [
        { label: "BIEN Data", url: "https://biendata.org" },
        { label: "TNRS", url: "https://tnrs.biendata.org" },
        { label: "GNRS", url: "https://gnrs.biendata.org" },
        { label: "NSR", url: "https://nsr.biendata.org" },
        { label: "GVS", url: "https://gvs.biendata.org" },
      ],
    },
  ];

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <DecryptedText text="Featured Projects" speed={60} className="text-4xl lg:text-5xl font-bold" revealDirection="start" />
          </h2>
          <motion.div className="w-20 h-1 bg-primary mx-auto rounded-full"
            initial={{ width: 0 }} whileInView={{ width: 80 }} viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }} />
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div key={index} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: index * 0.15, duration: 0.6 }}>
              <TiltCard className="h-full" tiltAmount={8} scale={1.02}>
                <SpotlightCard className="glass-strong rounded-2xl overflow-hidden h-full" spotlightColor="rgba(0, 212, 255, 0.1)">
                  <div className={`h-2 bg-gradient-to-r ${project.gradient}`} />
                  <div className="p-8">
                    <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">{project.description}</p>
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-primary mb-2">Key Achievements:</h4>
                      <ul className="space-y-2">
                        {project.highlights.map((h, i) => (
                          <li key={i} className="flex gap-2 text-sm text-muted-foreground">
                            <span className="text-primary mt-0.5 flex-shrink-0">▹</span>
                            <span>
                              {h.num !== undefined ? (
                                <>
                                  {h.text}{" "}
                                  <span className="text-primary font-semibold">
                                    <CountUp end={h.num} duration={2} separator="," decimals={h.decimals || 0} />{h.suffix}
                                  </span>
                                  {h.rest}
                                </>
                              ) : h.text}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech, i) => (
                        <span key={i} className="px-3 py-1 text-xs bg-primary/10 text-primary rounded-full border border-primary/20">{tech}</span>
                      ))}
                    </div>
                    {project.links && (
                      <div className="flex flex-wrap gap-3 relative z-50">
                        {project.links.map((link, i) => (
                          <a key={i} href={link.url} target="_blank" rel="noopener noreferrer"
                            onClick={(e) => { e.stopPropagation(); window.open(link.url, '_blank', 'noopener,noreferrer'); }}
                            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg border border-primary/30 text-primary hover:bg-primary/10 hover:border-primary transition-all duration-300 cursor-pointer pointer-events-auto">
                            <ExternalLink className="w-4 h-4" />{link.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                </SpotlightCard>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
