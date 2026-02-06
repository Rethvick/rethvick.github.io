import { motion } from "framer-motion";
import { Users, Award, Briefcase, Code } from "lucide-react";
import { DecryptedText, SpotlightCard, TiltCard, CountUp } from "@/components/animations";

export const About = () => {
  const stats = [
    { icon: Users, value: 134000, suffix: "+", label: "Global Researchers" },
    { icon: Briefcase, value: 5, suffix: "+", label: "Research Platforms" },
    { icon: Code, value: 50, suffix: "+", label: "Datasets Integrated" },
    { icon: Award, value: 3.7, suffix: "/4.0", label: "GPA", decimals: 1 },
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <DecryptedText text="About Me" speed={60} className="text-4xl lg:text-5xl font-bold" revealDirection="start" />
          </h2>
          <motion.div className="w-20 h-1 bg-primary mx-auto rounded-full"
            initial={{ width: 0 }} whileInView={{ width: 80 }} viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }} />
        </div>

        <div className="max-w-4xl mx-auto mb-16">
          <SpotlightCard className="glass-strong rounded-2xl p-8 lg:p-12" spotlightColor="rgba(0, 212, 255, 0.08)">
            <motion.p className="text-lg text-muted-foreground leading-relaxed mb-6"
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.6 }}>
              <span className="text-primary font-semibold">AI & Machine Learning Software Engineer</span> with a Master's 
              in Computer Science, demonstrating success in building scalable{" "}
              <span className="text-primary font-semibold">AI Infrastructure</span> and{" "}
              <span className="text-primary font-semibold">MLOps pipelines</span> for 134,000+ users.
            </motion.p>
            <motion.p className="text-lg text-muted-foreground leading-relaxed mb-6"
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.6 }}>
              Technical Leader proficient in deploying production-grade{" "}
              <span className="text-primary font-semibold">Generative AI solutions</span>,{" "}
              <span className="text-primary font-semibold">Large Language Models (LLMs)</span>, and high-velocity 
              Data Engineering workflows. Skilled in translating complex research needs into resilient software architectures.
            </motion.p>
            <motion.p className="text-lg text-muted-foreground leading-relaxed"
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}>
              Committed to implementing autonomous agents and RAG systems that maximize operational performance,
              cutting latency by <span className="text-primary font-semibold">50%</span> via advanced vector search and database tuning.
            </motion.p>
          </SpotlightCard>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <TiltCard key={index} className="cursor-default" tiltAmount={10} scale={1.05}>
              <SpotlightCard className="glass-strong rounded-xl p-6 text-center h-full" spotlightColor="rgba(0, 212, 255, 0.1)">
                <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }} transition={{ delay: index * 0.1, duration: 0.5 }}>
                  <stat.icon className="w-8 h-8 mx-auto mb-4 text-primary" />
                  <div className="text-3xl font-bold gradient-text-animated mb-2">
                    <CountUp end={stat.value} suffix={stat.suffix} decimals={stat.decimals || 0} duration={2.5} separator="," />
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              </SpotlightCard>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
};
