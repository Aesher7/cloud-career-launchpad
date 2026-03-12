import { motion } from "framer-motion";
import { ArrowDown, Award, Mail, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 gradient-cloud opacity-50" />
      <div className="absolute top-20 right-10 w-72 h-72 bg-cloud/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary text-secondary-foreground text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-success rounded-full animate-pulse" />
            Open to opportunities
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-primary mb-4">
            Aspiring Cloud Engineer
          </h1>

          <p className="text-lg sm:text-xl text-muted-foreground font-medium mb-2">
            Computer Science Graduate · AI &amp; ML Master's Student
          </p>

          <p className="text-base sm:text-lg text-cloud font-semibold mb-8">
            Building secure and scalable systems on AWS
          </p>

          <div className="flex flex-wrap justify-center gap-3 mb-6">
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-navy-light">
              <a href="#projects">View Projects</a>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-primary text-primary hover:bg-secondary">
              <a href="#certifications">
                <Award className="w-4 h-4 mr-2" />
                View AWS Certification
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-primary text-primary hover:bg-secondary">
              <a href="#contact">
                <Mail className="w-4 h-4 mr-2" />
                Contact
              </a>
            </Button>
          </div>

          <Button asChild variant="ghost" size="sm" className="text-muted-foreground hover:text-primary">
            <a href="/Andre_Resume2026.pdf" download>
              <Download className="w-4 h-4 mr-2" />
              Download Resume
            </a>
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="flex justify-center mt-12"
        >
          <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
            <ArrowDown className="w-5 h-5 animate-bounce" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
