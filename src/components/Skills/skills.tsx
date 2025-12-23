
const skills = {
  frontend: [
    "HTML", "CSS", "JavaScript", "React", "Next.js", "Tailwind CSS"
  ],
  backend: [
    "Node.js", "Express", "NestJS"
  ],
  tools: [
    "Git", "GitHub", "VScode", "Npm"
  ],
  concepts: [
    "Responsive Design", "Component Architecture", "Modern JavaScript", "Web Performance"
  ]
};

export default function SkillsS() {
  return (
    <section id="habilidades" className="min-h-screen flex items-center text-center lg:ml-64 px-4 lg:px-8 py-20">
      <div className="max-w-4xl mx-auto w-full">
        <h2 className="text-5xl font-bold mb-12 text-[#e8eaed]">Habilidades</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Front-End */}
          <div className="bg-[#1a1f26] border border-[#2a3038] rounded-lg p-6 hover:border-[#00d4ff] transition-all duration-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-[#00d4ff] flex items-center justify-center text-[#0f1419] font-bold">
                F
              </div>
              <h3 className="text-2xl font-bold text-[#e8eaed]">Front-End</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {skills.frontend.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-[#252d36] text-[#00d4ff] rounded-full text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Back-End */}
          <div className="bg-[#1a1f26] border border-[#2a3038] rounded-lg p-6 hover:border-[#1e88e5] transition-all duration-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-[#1e88e5] flex items-center justify-center text-[#e8eaed] font-bold">
                B
              </div>
              <h3 className="text-2xl font-bold text-[#e8eaed]">Back-End</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {skills.backend.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-[#252d36] text-[#1e88e5] rounded-full text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Ferramentas */}
          <div className="bg-[#1a1f26] border border-[#2a3038] rounded-lg p-6 hover:border-[#00d4ff] transition-all duration-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-[#00d4ff] flex items-center justify-center text-[#0f1419] font-bold">
                T
              </div>
              <h3 className="text-2xl font-bold text-[#e8eaed]">Ferramentas</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {skills.tools.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-[#252d36] text-[#00d4ff] rounded-full text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Conceitos */}
          <div className="bg-[#1a1f26] border border-[#2a3038] rounded-lg p-6 hover:border-[#1e88e5] transition-all duration-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-[#1e88e5] flex items-center justify-center text-[#e8eaed] font-bold">
                C
              </div>
              <h3 className="text-2xl font-bold text-[#e8eaed]">Conceitos</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {skills.concepts.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-[#252d36] text-[#1e88e5] rounded-full text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
