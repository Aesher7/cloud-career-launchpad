import { motion } from "framer-motion";
import { Cloud, Server, Code, Container } from "lucide-react";

const skills = [
  {
    icon: Cloud,
    title: "Cloud Platforms",
    items: ["AWS EC2", "S3", "Lambda", "RDS", "VPC", "IAM"],
  },
  {
    icon: Server,
    title: "Infrastructure as Code",
    items: ["Terraform", "CloudFormation"],
  },
  {
    icon: Code,
    title: "Programming",
    items: ["Python", "JavaScript", "React"],
  },
  {
    icon: Container,
    title: "DevOps",
    items: ["Docker", "Git", "CI/CD"],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 bg-surface">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-primary mb-12 text-center">Skills</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              className="bg-card border border-border rounded-lg p-6 hover:shadow-lg hover:border-cloud/30 transition-all"
            >
              <skill.icon className="w-8 h-8 text-cloud mb-4" />
              <h3 className="text-lg font-semibold text-primary mb-3">{skill.title}</h3>
              <div className="flex flex-wrap gap-2">
                {skill.items.map((item) => (
                  <span
                    key={item}
                    className="px-2.5 py-1 text-xs font-medium bg-secondary text-secondary-foreground rounded-md"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
