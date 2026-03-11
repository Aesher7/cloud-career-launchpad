import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const GitHubSection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto text-center gradient-navy rounded-xl p-10"
        >
          <Github className="w-12 h-12 text-primary-foreground mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-primary-foreground mb-3">
            Explore My Work on GitHub
          </h2>
          <p className="text-primary-foreground/70 mb-6">
            Browse my repositories, contributions, and open-source projects
          </p>
          <Button
            asChild
            size="lg"
            variant="secondary"
            className="bg-background text-primary hover:bg-secondary"
          >
            <a href="https://github.com/Aesher7" target="_blank" rel="noopener noreferrer">
              <ExternalLink className="w-4 h-4 mr-2" />
              github.com/Aesher7
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default GitHubSection;
