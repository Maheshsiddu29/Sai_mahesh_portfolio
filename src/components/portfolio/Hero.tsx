import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="container mx-auto text-center animate-fade-in">
        <div className="mb-8">
          <h1 className="text-6xl md:text-8xl font-bold mb-4 text-gradient">
            Sai Mahesh Sure
          </h1>
          <p className="text-2xl md:text-3xl text-foreground/80 mb-6">
            Staff Smart Contract Engineer & XR Solutions Architect
          </p>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Specializing in blockchain security, full-stack development, and immersive experiences
          </p>
        </div>

        <div className="flex gap-4 justify-center mb-12">
          <Button
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="glass-strong hover-lift px-8 py-6 text-lg"
          >
            Get In Touch
          </Button>
          <Button
            onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
            variant="outline"
            className="glass hover-lift px-8 py-6 text-lg border-primary/50 hover:border-primary"
          >
            View Projects
          </Button>
        </div>

        <button
          onClick={scrollToAbout}
          className="animate-float text-primary/60 hover:text-primary transition-colors"
          aria-label="Scroll to about section"
        >
          <ArrowDown size={32} />
        </button>
      </div>
    </section>
  );
};
