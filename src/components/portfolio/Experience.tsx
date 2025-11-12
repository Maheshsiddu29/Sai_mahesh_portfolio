import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    title: "Senior Blockchain & XR Developer",
    company: "Cognizant - Retail India",
    period: "Feb 2022 – Jan 2024",
    achievements: [
      "Architected and deployed a Polygon-based blockchain supply chain tracking system, achieving a 30% reduction in product expiry through enhanced real-time traceability",
      "Constructed a Unity3D collaboration platform utilized by over 2,000 monthly users, decreasing issue resolution time by 25% and eliminating 45% of support tickets",
      "Engineered Mixed Reality dashboards to monitor 150+ assets, increasing asset utilization by 20% and enabling 35% faster maintenance response, generating $85K in annual savings",
    ],
  },
  {
    title: "Blockchain & AR/VR Developer",
    company: "Cognizant - India",
    period: "Dec 2021 – Feb 2022",
    achievements: [
      "Pioneered an Ethereum/Polygon-based tracking system improving transaction reliability to 99.8% and reducing verification time by 65%, mitigating an estimated $500K in annual product losses",
      "Developed an automotive AR application that boosted customer engagement by 35% and increased showroom conversion rates by 28% across 12 vehicle models",
      "Created a navigation system integrated with Microsoft Dynamics 365, decreasing wayfinding time by 40% and enhancing satisfaction scores by 32%",
    ],
  },
  {
    title: "Program Analyst Trainee",
    company: "Cognizant - India",
    period: "Dec 2020 – Dec 2021",
    achievements: [
      "Mastered full-stack development (.NET Core, SQL, C#), ranking in the top 10% of 120 trainees and developing internal tools adopted by over 75 colleagues",
      "Built a blockchain verification prototype, compressing document processing from 3 days to 10 minutes, demonstrating strong problem-solving capabilities",
    ],
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="py-20 px-6">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-gradient">
          Experience
        </h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="glass p-8 rounded-2xl hover-lift animate-slide-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div className="flex items-start gap-3 mb-4 md:mb-0">
                  <Briefcase className="text-primary mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">{exp.title}</h3>
                    <p className="text-lg text-primary">{exp.company}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Calendar size={16} />
                  <span className="text-sm">{exp.period}</span>
                </div>
              </div>
              <ul className="space-y-3 ml-9">
                {exp.achievements.map((achievement, i) => (
                  <li key={i} className="text-foreground/80 leading-relaxed flex gap-3">
                    <span className="text-accent mt-1.5 flex-shrink-0">•</span>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
