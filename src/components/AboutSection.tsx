import { motion } from "framer-motion";
import { Cloud, Server, Code, Workflow } from "lucide-react";

const focusAreas = [
  { icon: Cloud, text: "AWS core services: EC2, S3, Lambda, RDS, VPC, IAM" },
  { icon: Server, text: "Infrastructure as Code: Terraform, CloudFormation" },
  { icon: Workflow, text: "Automation, DevOps practices, and CI/CD pipelines" },
  { icon: Code, text: "Serverless and containerized applications" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-primary mb-8 text-center">About Me</h2>

          <div className="space-y-4 text-foreground leading-relaxed text-base">
            <p>
              Computer Science graduate and master's student concentrating in Artificial Intelligence and Machine Learning, now transitioning into cloud engineering. My background includes hands-on experience in software development, front-end frameworks, and backend integration with Python, React.js, and TensorFlow.
            </p>
            <p>
              I am actively pursuing the AWS Solutions Architect Professional Certificate to build expertise in designing secure, scalable, and cost-efficient cloud solutions. My focus areas include:
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 mt-6 mb-6">
            {focusAreas.map((area, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                className="flex items-start gap-3 p-4 rounded-lg bg-surface border border-border"
              >
                <area.icon className="w-5 h-5 text-cloud mt-0.5 shrink-0" />
                <span className="text-sm text-foreground">{area.text}</span>
              </motion.div>
            ))}
          </div>

          <p className="text-foreground leading-relaxed text-base">
            I bring problem solving, collaboration, and data driven optimization from both my software and solar engineering experience. My goal involves applying these skills in cloud environments to modernize systems and deliver business value.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
