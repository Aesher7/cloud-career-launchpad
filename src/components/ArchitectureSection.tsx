import { useState } from "react";
import { motion } from "framer-motion";
import { Network, Upload, ImageIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

const ArchitectureSection = () => {
  const [diagrams, setDiagrams] = useState<{ name: string; url: string }[]>([]);

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;
    Array.from(files).forEach((file) => {
      const url = URL.createObjectURL(file);
      setDiagrams((prev) => [...prev, { name: file.name, url }]);
    });
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-primary mb-4 text-center">
            Architecture Diagrams
          </h2>
          <p className="text-muted-foreground text-center mb-10 max-w-xl mx-auto">
            AWS system architecture designs and cloud infrastructure diagrams
          </p>

          {diagrams.length > 0 && (
            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              {diagrams.map((d, i) => (
                <div key={i} className="bg-card border border-border rounded-lg overflow-hidden">
                  <img src={d.url} alt={d.name} className="w-full h-64 object-contain bg-surface p-4" />
                  <div className="p-3 border-t border-border">
                    <p className="text-sm font-medium text-foreground truncate">{d.name}</p>
                  </div>
                </div>
              ))}
            </div>
          )}

          <div className="border-2 border-dashed border-border rounded-xl p-12 text-center bg-surface">
            {diagrams.length === 0 && (
              <div className="mb-6">
                <Network className="w-12 h-12 text-muted-foreground mx-auto mb-3" />
                <p className="text-muted-foreground">
                  Upload your AWS architecture diagrams here
                </p>
              </div>
            )}
            <label>
              <input
                type="file"
                accept="image/*"
                multiple
                onChange={handleUpload}
                className="hidden"
              />
              <Button asChild variant="outline" className="border-primary text-primary hover:bg-secondary cursor-pointer">
                <span>
                  <Upload className="w-4 h-4 mr-2" />
                  Upload Diagram
                </span>
              </Button>
            </label>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ArchitectureSection;
