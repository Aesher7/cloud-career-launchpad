import { motion } from "framer-motion";
import { Github, Globe, Server, Cloud } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "AWS Static Website Deployment",
    description: "Deployed a fully hosted static website using S3, CloudFront, and Route53 for global content delivery with custom domain.",
    tech: ["S3", "CloudFront", "Route53"],
    icon: Globe,
    github: "#",
  },
  {
    title: "Serverless Application",
    description: "Built a serverless REST API with Lambda functions, API Gateway, and DynamoDB for scalable backend processing.",
    tech: ["Lambda", "API Gateway", "DynamoDB"],
    icon: Cloud,
    github: "#",
  },
  {
    title: "Infrastructure Automation",
    description: "Provisioned complete AWS infrastructure using Terraform modules with state management and environment isolation.",
    tech: ["Terraform", "AWS", "IaC"],
    icon: Server,
    github: "#",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 bg-surface">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-primary mb-12 text-center">Projects</h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              className="bg-card border border-border rounded-lg p-6 flex flex-col hover:shadow-lg hover:border-cloud/30 transition-all"
            >
              <project.icon className="w-8 h-8 text-cloud mb-4" />
              <h3 className="text-lg font-semibold text-primary mb-2">{project.title}</h3>
              <p className="text-sm text-muted-foreground mb-4 flex-1">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="px-2 py-0.5 text-xs font-mono bg-secondary text-secondary-foreground rounded"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <Button asChild variant="outline" size="sm" className="w-fit border-primary text-primary hover:bg-secondary">
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4 mr-2" />
                  View on GitHub
                </a>
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
