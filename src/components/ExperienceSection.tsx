import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    role: "Cloud Engineering (Transitioning)",
    company: "Self-Directed & Coursework",
    period: "2024 – Present",
    description:
      "Building cloud infrastructure projects on AWS. Studying for AWS Solutions Architect Professional certification. Practicing Terraform, CI/CD pipelines, and serverless architectures.",
  },
  {
    role: "Software Development Experience",
    company: "Academic & Project-Based",
    period: "2022 – 2024",
    description:
      "Developed full-stack applications using Python, React.js, and TensorFlow. Built REST APIs, integrated databases, and deployed front-end interfaces. Applied machine learning models in real-world projects.",
  },
  {
    role: "Solar Engineering Experience",
    company: "Industry",
    period: "Prior",
    description:
      "Brought data-driven optimization, problem-solving, and cross-functional collaboration to engineering projects. Applied analytical skills to system design and performance analysis.",
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 bg-surface">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-3xl font-bold text-primary mb-12 text-center">
          Professional Experience
        </h2>
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-border hidden sm:block" />

          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.4 }}
                className="relative flex gap-4 sm:gap-6"
              >
                <div className="relative z-10 w-12 h-12 rounded-full gradient-navy flex items-center justify-center shrink-0">
                  <Briefcase className="w-5 h-5 text-primary-foreground" />
                </div>
                <div className="bg-card border border-border rounded-lg p-5 flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2 gap-1">
                    <h3 className="text-base font-semibold text-primary">{exp.role}</h3>
                    <span className="text-xs font-mono text-muted-foreground">{exp.period}</span>
                  </div>
                  <p className="text-sm font-medium text-cloud mb-2">{exp.company}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{exp.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
