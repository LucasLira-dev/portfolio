import { Code2, Server, Wrench, Lightbulb } from "lucide-react";

const skillsData = [
  {
    category: "Front-End",
    icon: Code2,
    skills: ["HTML", "CSS", "JavaScript", "React", "Next.js", "Tailwind CSS"],
  },
  {
    category: "Back-End",
    icon: Server,
    skills: ["Node.js", "Express", "NestJS"],
  },
  {
    category: "Ferramentas",
    icon: Wrench,
    skills: ["Git", "GitHub", "VScode", "Npm"],
  },
  {
    category: "Conceitos",
    icon: Lightbulb,
    skills: ["Responsive Design", "Component Architecture", "Modern JavaScript", "Web Performance"],
  },
];

export default function SkillsS() {
  return (
    <section id="habilidades" className="py-20 bg-slate-900/20">
      <div className="container mx-auto px-4 ">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-[var(--foreground)]">
          Minhas Habilidades
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {skillsData.map((skillGroup) => {
            const Icon = skillGroup.icon;
            return (
              <div
                key={skillGroup.category}
                className="p-6 bg-background border border-border rounded-lg hover:border-cyan-500/50 transition-colors"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Icon className="w-6 h-6 text-cyan-500" />
                  <h3 className="text-xl font-bold text-[var(--foreground)]">
                    {skillGroup.category}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {skillGroup.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-cyan-500/10 text-cyan-400 rounded-full text-sm font-medium border border-cyan-500/20"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
