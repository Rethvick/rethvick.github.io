import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Projects = () => {
  const projects = [
    {
      title: "Retrieval Augmented Generation (RAG) System",
      description: "Built a ChatGPT wrapper to inject dynamic geographic context, achieving 90% precision and improving response accuracy by 35%.",
      technologies: ["ChatGPT API", "ElasticSearch", "Flask", "React.js", "NumPy", "NLP"],
      highlights: [
        "Indexed 10,000+ documents using Elasticsearch",
        "Generated augmented prompts via cosine-vector similarity",
        "Boosted retrieval efficiency by 40%",
        "Reduced API response time from 1.2s to 600ms"
      ],
        links: [
            { label: "Github", url: "https://github.com/Rethvick/RetrievalAugmentedGeneration" },
        ],
      gradient: "from-cyan-500 to-blue-500"

    },
    {
      title: "LLMCommitAgent - Agentic AI Commit Generator",
      description: "Led a 3-member team to build an agentic AI that converts multi-file diffs into standardized Conventional Commit messages.",
      technologies: ["CI/CD", "Git Hooks", "OpenRouter", "Python"],
      highlights: [
        "Owned architecture, model selection, and CI/CD integration",
        "Implemented compact pipeline: diff analysis → intent routing → commit synthesis",
        "Validated on 100+ complex diffs",
        "Reduced manual commit writing by 70%"
      ],
        links: [
            { label: "Github", url: "https://github.com/Rethvick/LLMCommitAgent" },
        ],
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "BIEN Research Platforms",
      description: "Suite of 5 production research platforms serving 40,000+ researchers worldwide with biodiversity and geospatial data.",
      technologies: ["Next.js", "Node.js", "PostgreSQL", "PostGIS", "Mapbox", "React.js"],
      highlights: [
        "biendata.org - Main biodiversity data portal",
        "tnrs.biendata.org - Taxonomic name resolution",
        "gnrs.biendata.org - Geographic name resolution",
        "Integrated 50+ global datasets",
        "Eliminated 35% of data inconsistencies"
      ],
      gradient: "from-green-500 to-emerald-500",
      links: [
        { label: "BIEN Data", url: "https://biendata.org" },
        { label: "TNRS", url: "https://tnrs.biendata.org" },
        { label: "GNRS", url: "https://gnrs.biendata.org" },
        { label: "NSR", url: "https://nsr.biendata.org" },
        { label: "GVS", url: "https://gvs.biendata.org" },
      ]
    }
  ];

  return (
    <section id="projects" className="py-20 relative overflow-hidden particles-bg">
      <div className="absolute inset-0 gradient-animated opacity-10"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 animate-text-reveal">
            Featured <span className="gradient-text-animated">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full animate-bounce-slow"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group glass-strong rounded-2xl overflow-hidden hover:scale-[1.02] transition-all duration-500 hover:shadow-2xl glow-pulse"
            >
              <div className={`h-2 bg-gradient-to-r ${project.gradient} animate-gradient-flow`}></div>
              
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-primary mb-2">Key Achievements:</h4>
                  <ul className="space-y-2">
                    {project.highlights.map((highlight, i) => (
                      <li key={i} className="flex gap-2 text-sm text-muted-foreground">
                        <span className="text-primary mt-0.5">▹</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs bg-primary/10 text-primary rounded-full border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {project.links && (
                  <div className="flex flex-wrap gap-3">
                    {project.links.map((link, i) => (
                      <Button
                        key={i}
                        asChild
                        variant="outline"
                        size="sm"
                        className="glass border-primary/50 hover:bg-primary/10 hover:border-primary transition-all duration-300"
                      >
                        <a href={link.url} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          {link.label}
                        </a>
                      </Button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
