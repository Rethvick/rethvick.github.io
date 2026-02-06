import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Code, Database, Cloud, Wrench, Brain, Globe } from "lucide-react";
import { DecryptedText, SpotlightCard, LogoCloud, CountUp } from "@/components/animations";

const AnimatedBar = ({ level, delay }: { level: number; delay: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div ref={ref} className="h-2 bg-muted rounded-full overflow-hidden">
      <motion.div className="h-full gradient-primary rounded-full"
        initial={{ width: 0 }} animate={isInView ? { width: `${level}%` } : {}}
        transition={{ delay, duration: 1, ease: "easeOut" }} />
    </div>
  );
};

export const Skills = () => {
  const skillCategories = [
    {
      title: "AI & Machine Learning",
      icon: Brain,
      skills: [
        { name: "LLMs (GPT-4, Llama 2)", level: 95 },
        { name: "RAG / LangChain", level: 95 },
        { name: "PyTorch / TensorFlow", level: 90 },
        { name: "Computer Vision / NLP", level: 85 },
        { name: "Prompt Engineering", level: 90 },
        { name: "Model Fine-tuning", level: 85 },
      ],
    },
    {
      title: "Languages & Frameworks",
      icon: Code,
      skills: [
        { name: "Python (Advanced)", level: 95 },
        { name: "TypeScript / JavaScript", level: 90 },
        { name: "React.js / Next.js", level: 95 },
        { name: "FastAPI / Flask", level: 90 },
        { name: "Node.js / Express.js", level: 90 },
        { name: "C++ / Go / Rust / Java", level: 80 },
      ],
    },
    {
      title: "Data Engineering",
      icon: Database,
      skills: [
        { name: "PostgreSQL / PostGIS", level: 95 },
        { name: "Elasticsearch / Redis", level: 90 },
        { name: "ETL / Apache Airflow", level: 85 },
        { name: "Kafka / Spark", level: 80 },
        { name: "MongoDB", level: 85 },
        { name: "Vector DBs (Pinecone)", level: 85 },
      ],
    },
    {
      title: "Cloud & DevOps",
      icon: Cloud,
      skills: [
        { name: "AWS (SageMaker, Lambda)", level: 90 },
        { name: "Docker / Kubernetes", level: 85 },
        { name: "CI/CD (GitHub Actions)", level: 90 },
        { name: "Azure", level: 80 },
        { name: "Terraform", level: 80 },
        { name: "Linux", level: 90 },
      ],
    },
  ];

  const techLogos = [
    { name: "Python", icon: "🐍" }, { name: "React", icon: "⚛️" }, { name: "LangChain", icon: "🔗" },
    { name: "PostgreSQL", icon: "🐘" }, { name: "PyTorch", icon: "🔥" }, { name: "Docker", icon: "🐳" },
    { name: "AWS", icon: "☁️" }, { name: "TypeScript", icon: "📘" }, { name: "Next.js", icon: "▲" },
    { name: "Kubernetes", icon: "⎈" }, { name: "Git", icon: "📦" }, { name: "Linux", icon: "🐧" },
  ];

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <DecryptedText text="Technical Skills" speed={60} className="text-4xl lg:text-5xl font-bold" revealDirection="start" />
          </h2>
          <motion.div className="w-20 h-1 bg-primary mx-auto rounded-full"
            initial={{ width: 0 }} whileInView={{ width: 80 }} viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }} />
        </div>

        <div className="mb-12"><LogoCloud logos={techLogos} speed={25} className="py-4" /></div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <motion.div key={index} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: index * 0.1, duration: 0.5 }}>
              <SpotlightCard className="glass-strong rounded-2xl p-8 h-full" spotlightColor="rgba(0, 212, 255, 0.08)">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 rounded-lg bg-primary/10"><category.icon className="w-6 h-6 text-primary" /></div>
                  <h3 className="text-2xl font-bold">{category.title}</h3>
                </div>
                <div className="space-y-5">
                  {category.skills.map((skill, i) => (
                    <div key={i} className="group">
                      <div className="flex justify-between mb-2">
                        <span className="font-medium text-foreground group-hover:text-primary transition-colors">{skill.name}</span>
                        <span className="text-sm text-primary font-semibold"><CountUp end={skill.level} duration={1.5} suffix="%" /></span>
                      </div>
                      <AnimatedBar level={skill.level} delay={0.3 + i * 0.1} />
                    </div>
                  ))}
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>

        <motion.div className="mt-12 max-w-4xl mx-auto" initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }}>
          <SpotlightCard className="glass-strong rounded-2xl p-8" spotlightColor="rgba(0, 212, 255, 0.06)">
            <h3 className="text-2xl font-bold mb-6 text-center gradient-text-animated">Additional Expertise</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                "Generative AI", "RAG Systems", "Autonomous Agents", "MLOps",
                "Natural Language Processing", "Computer Vision", "Deep Learning",
                "Data Visualization", "Geospatial Analysis", "ETL Pipelines",
                "API Development", "Agile/Scrum", "CI/CD", "Data Analytics",
              ].map((skill, index) => (
                <motion.span key={index}
                  className="px-4 py-2 text-sm bg-primary/10 text-primary rounded-full border border-primary/20 hover:bg-primary/20 transition-all cursor-default"
                  initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }} transition={{ delay: 0.5 + index * 0.03 }}
                  whileHover={{ scale: 1.1, y: -3 }}>
                  {skill}
                </motion.span>
              ))}
            </div>
          </SpotlightCard>
        </motion.div>
      </div>
    </section>
  );
};
