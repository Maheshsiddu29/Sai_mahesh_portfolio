const skillCategories = [
  {
    category: "Blockchain & Smart Contracts",
    skills: ["Solidity", "Ethereum", "Polygon", "Zero-Knowledge Proofs", "Smart Contract Security", "Web3.js", "Hardhat", "Truffle"],
  },
  {
    category: "Programming Languages",
    skills: ["JavaScript/TypeScript", "Python", "Rust", "C#", "SQL", "Go"],
  },
  {
    category: "XR Development",
    skills: ["Unity3D", "AR/VR", "Mixed Reality", "Microsoft Dynamics 365", "Spatial Computing"],
  },
  {
    category: "Full-Stack Development",
    skills: [".NET Core", "React", "Node.js", "PostgreSQL", "MongoDB", "Redis", "Docker", "Kubernetes"],
  },
  {
    category: "Cloud & DevOps",
    skills: ["AWS", "Azure", "GCP", "CI/CD", "Terraform", "Jenkins", "GitHub Actions"],
  },
  {
    category: "Security & Cryptography",
    skills: ["ZKP", "Encryption", "Smart Contract Auditing", "Penetration Testing", "OWASP"],
  },
];

export const Skills = () => {
  return (
    <section id="skills" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-gradient">
          Skills & Technologies
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="glass p-6 rounded-2xl hover-lift animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="text-xl font-bold text-primary mb-4">{category.category}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 bg-muted/50 text-foreground text-sm rounded-lg border border-border/50 hover:border-primary/50 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 glass p-8 rounded-2xl text-center">
          <h3 className="text-2xl font-bold text-gradient mb-4">Honors & Awards</h3>
          <div className="grid md:grid-cols-3 gap-4 mt-6">
            <div className="p-4">
              <p className="text-foreground font-semibold">Best Innovation Project</p>
              <p className="text-sm text-muted-foreground">Healthcare Blockchain Solution</p>
            </div>
            <div className="p-4">
              <p className="text-foreground font-semibold">IFET Accelerated Career Track</p>
              <p className="text-sm text-muted-foreground">Top Performer Recognition</p>
            </div>
            <div className="p-4">
              <p className="text-foreground font-semibold">University Innovation Award</p>
              <p className="text-sm text-muted-foreground">85% faster authentication solution</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
