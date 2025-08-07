"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <div 
    className="flex flex-col items-center justify-center p-8 bg-[rgba(30,41,59,0.3)]"
    id="sobre">
      <h1 className="text-4xl text-white font-bold mb-4 mt-10">Sobre Mim</h1>
      <div className="w-20 h-1 bg-[var(--primary)] mx-auto mb-5"></div>
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7 }}
      >
        <p className="text-lg text-white font-semibold max-w-2xl text-center mb-6">
          Sou um desenvolvedor apaixonado por criar soluções web modernas e
          eficientes. Tenho experiência sólida em desenvolvimento front-end com
          React e Next.js, e conhecimentos em back-end com Node.js. Atualmente
          estou expandindo minhas habilidades aprendendo NestJS para
          desenvolvimento de APIs mais robustas.
        </p>
        <p className="text-lg text-white font-semibold max-w-2xl text-center mb-10">
          Minha jornada na programação me levou a dominar tecnologias como HTML,
          CSS, JavaScript, React, Next.js e Tailwind CSS. Estou sempre em busca
          de novos desafios e oportunidades para crescer profissionalmente,
          especialmente em projetos que envolvam arquiteturas modernas e boas
          práticas de desenvolvimento.
        </p>
      </motion.div>
    </div>
  );
}
