import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Healthcare Security with ZKP",
    period: "Feb 2025 – May 2025",
    description: "Zero-Knowledge Proof-based authentication system for healthcare records with advanced security features.",
    highlights: [
      "Reduced identified breach risks by 40%",
      "15% faster response under peak loads",
      "99.98% simulated uptime with 2K+ concurrent users",
    ],
    tags: ["Zero-Knowledge Proofs", "Healthcare", "Security", "Blockchain"],
  },
  {
    title: "Medi Vault",
    period: "Mar 2024 – May 2024",
    description: "Polygon-based dApp for secure medical record processing and exchange.",
    highlights: [
      "30% enhanced security and compliance",
      "40% reduction in gas costs",
      "500K+ daily transactions",
      "Confirmations accelerated from 45 to 12 seconds",
    ],
    tags: ["Polygon", "Healthcare", "Smart Contracts", "dApp"],
  },
  {
    title: "Ethereum Healthcare System",
    period: "Feb 2019 – Jun 2019",
    description: "Blockchain system for healthcare record management with university innovation award.",
    highlights: [
      "70% shorter record retrieval",
      "99.9% data integrity verification",
      "85% faster authentication",
      "$25K annual cost reduction per provider",
    ],
    tags: ["Ethereum", "Healthcare", "Blockchain", "Innovation"],
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-gradient">
          Featured Projects
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="glass p-6 rounded-2xl hover-lift animate-fade-in group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-4">
                <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-gradient transition-all">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground">{project.period}</p>
              </div>
              
              <p className="text-foreground/80 mb-4 leading-relaxed">
                {project.description}
              </p>

              <div className="space-y-2 mb-4">
                {project.highlights.map((highlight, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <span className="text-accent mt-1 flex-shrink-0">✓</span>
                    <span className="text-sm text-foreground/70">{highlight}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full border border-primary/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
