import { ArrowDown, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-6 pt-20 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
      </div>

      <div className="container mx-auto text-center relative z-10">
        <div className="mb-8 animate-fade-in">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="text-primary animate-pulse" size={24} />
            <span className="text-sm text-primary uppercase tracking-wider">Portfolio</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-bold mb-4 text-gradient animate-fade-in">
            Sai Mahesh Sure
          </h1>
          <p className="text-2xl md:text-3xl text-foreground/80 mb-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Staff Smart Contract Engineer & XR Solutions Architect
          </p>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.4s" }}>
            Specializing in blockchain security, full-stack development, and immersive experiences
          </p>
        </div>

        <div className="flex gap-4 justify-center mb-12 animate-fade-in" style={{ animationDelay: "0.6s" }}>
          <Button
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="glass-strong hover-lift px-8 py-6 text-lg glow"
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
