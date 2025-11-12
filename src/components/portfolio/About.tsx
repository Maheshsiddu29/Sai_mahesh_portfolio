import { useScrollReveal } from "@/hooks/useScrollReveal";

export const About = () => {
  const { elementRef, isVisible } = useScrollReveal();

  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-gradient">
          About Me
        </h2>
        <div
          ref={elementRef}
          className={`glass p-8 md:p-12 rounded-2xl hover-lift transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <p className="text-lg md:text-xl text-foreground/90 leading-relaxed mb-6">
            A results-oriented Staff Smart Contract Engineer and XR Solutions Architect specializing in blockchain security and full-stack development.
          </p>
          <p className="text-lg md:text-xl text-foreground/90 leading-relaxed mb-6">
            Proven ability to design and deploy innovative decentralized solutions, enhancing traceability, user engagement, and operational efficiency.
          </p>
          <p className="text-lg md:text-xl text-foreground/90 leading-relaxed">
            Expertise in smart contract optimization, secure decentralized applications, and immersive platform development, consistently delivering measurable business value and cost savings through advanced cryptography and problem-solving.
          </p>
          
          <div className="mt-8 pt-8 border-t border-border">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Location</p>
                <p className="text-foreground">Amherst, MA</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">Education</p>
                <p className="text-foreground">M.S. Computer Science - UMass Amherst</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
