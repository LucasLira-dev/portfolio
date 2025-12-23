export default function About() {
  return (
    <section id="sobre" className="min-h-screen flex items-center md:ml-64 px-4 md:px-8 py-20">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-5xl font-bold mb-12 text-[#e8eaed]">Sobre Mim</h2>
          <div className="space-y-6 text-lg text-[#a8aeb5] leading-relaxed">
            <p className="animate-fade-in-up">
              Sou um desenvolvedor apaixonado por criar soluções web modernas e eficientes. Tenho experiência sólida em desenvolvimento front-end com React e Next.js, e conhecimentos em back-end com NestJS. Atualmente estou expandindo minhas habilidades aprendendo sobre criação de agentes de IA com Langchain/Langgraph usando Python.
            </p>
            <p className="animate-fade-in-up">
              Minha jornada na programação me levou a dominar tecnologias como HTML, CSS, JavaScript, React, Next.js e Tailwind CSS. Estou sempre em busca de novos desafios e oportunidades para crescer profissionalmente, especialmente em projetos que envolvam arquiteturas modernas e boas práticas de desenvolvimento.
            </p>
            <p className="text-[#e8eaed] font-semibold mt-8">
              📍 Localização: Ceará, Brasil
            </p>
          </div>
        </div>
      </section>
  );
}
