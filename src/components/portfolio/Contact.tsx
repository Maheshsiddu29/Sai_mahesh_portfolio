import { Mail, MapPin, Linkedin, Download, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export const Contact = () => {
  const { elementRef, isVisible } = useScrollReveal();

  return (
    <section id="contact" className="py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-gradient animate-fade-in">
          Get In Touch
        </h2>
        
        <div
          ref={elementRef}
          className={`glass p-8 md:p-12 rounded-2xl transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <p className="text-xl text-center text-foreground/90 mb-8">
            Interested in collaborating on blockchain or XR projects? Let's connect!
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <a
              href="mailto:saimaheshsure29@gmail.com"
              className="glass-strong p-6 rounded-xl hover-lift flex items-center gap-4 group"
            >
              <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                <Mail className="text-primary" size={24} />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Email</p>
                <p className="text-foreground font-medium">saimaheshsure29@gmail.com</p>
              </div>
            </a>

            <div className="glass-strong p-6 rounded-xl flex items-center gap-4">
              <div className="p-3 bg-secondary/10 rounded-lg">
                <Phone className="text-secondary" size={24} />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Phone</p>
                <p className="text-foreground font-medium">413-210-0159</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <Button
              asChild
              className="glass-strong hover-lift px-8 py-6 text-lg group"
            >
              <a
                href="https://www.linkedin.com/in/saimaheshsure"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Linkedin size={20} />
                <span>LinkedIn Profile</span>
              </a>
            </Button>
            
            <Button
              asChild
              variant="outline"
              className="glass hover-lift px-8 py-6 text-lg border-primary/50 hover:border-primary group"
            >
              <a
                href="mailto:saimaheshsure29@gmail.com"
                className="flex items-center gap-2"
              >
                <Mail size={20} />
                <span>Send Email</span>
              </a>
            </Button>
          </div>

          <div className="mt-6 flex justify-center">
            <Button
              asChild
              variant="outline"
              className="glass-strong hover-lift px-8 py-6 text-lg border-accent/50 hover:border-accent group"
            >
              <a
                href="/Sai_Mahesh_Sure_Resume.pdf"
                download="Sai_Mahesh_Sure_Resume.pdf"
                className="flex items-center gap-2"
              >
                <Download size={20} className="group-hover:animate-bounce" />
                <span>Download Resume</span>
              </a>
            </Button>
          </div>
        </div>

        <footer className="mt-16 text-center text-muted-foreground">
          <p className="mb-2">© 2025 Sai Mahesh Sure. All rights reserved.</p>
          <p className="text-sm">Built with React, TypeScript, and Tailwind CSS</p>
        </footer>
      </div>
    </section>
  );
};
