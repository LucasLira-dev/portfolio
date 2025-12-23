'use client';

import Image from "next/image";
import Link from "next/link";
import { useState } from "react"

import { FiGithub, FiExternalLink } from "react-icons/fi";

const myProjects = [
    {
        title: "TipMeUnderground",
        description: "PLataforma de exposição de redes sociais, onde o usuário pode adicionar suas redes sociais e receber doações.",
        image: "/tipme.png",
        demoLink: "https://tipmeunderground.vercel.app/",
        codeLink: "https://github.com/LucasLira-dev/tipmeunderground",
        tecnologies: ["NextJs", "Tailwind CSS", "NestJs", "TypeOrm"]
    },
    {
        title: "EnglishTalkAI",
        description: "Plataforma de aprendizado de inglês com IA, onde o usuário pode praticar conversação em inglês com um assistente virtual alimentado por IA.",
        image: "/englishTalkAI.png",
        demoLink: "https://english-talk-ai.vercel.app/",
        codeLink: "https://github.com/LucasLira-dev/englishTalkAI",
        tecnologies: ["NextJs", "Tailwind CSS", "NestJs", "TypeOrm"]
    },
    {
      title: "AI-Agents-hub",
      description: "5 agentes de IA diferentes que executam tarefas distintas, como realizar pesquisas na web, gerar diagrama, analisar gastos financeiros e muito mais.",
      image: "/aiAgentHub.png",
      demoLink: "https://ai-agent-hub-self.vercel.app/",
      codeLink: "https://github.com/LucasLira-dev/ai-agent-hub",
      tecnologies: ["TypeScript", "NextJs", "Tailwind CSS", "Vercel AI SDK"]
    },
    {
        title: "Codenotes",
        description: "Aplicação de anotações focada em desenvolvedores, onde o usuário pode salvar suas anotações junto com trechos de código e sua respectiva linguagem.",
        image: "/codenotes.png",
        demoLink: "https://codenotes-wheat.vercel.app/",
        codeLink: "https://github.com/LucasLira-dev/codenotes",
        tecnologies: ["NextJs", "Tailwind CSS", "NestJs", "PostgreSQL"]
    },
    {
        title: "youCourse",
        description: "Projeto que visa facilitar o aprendizado de programação, apresentando cursos gratuitos que estão disponíveis no YouTube.",
        image: "/youCourse.png",   
        demoLink: "https://youcourse-ivory.vercel.app/",
        codeLink: "https://github.com/LucasLira-dev/youcourse.",
        tecnologies: ["React", "Tailwind CSS"]
    },
    {
        title: "TechNews",
        description: "Projeto de notícias sobre tecnologia, onde o usuário pode ler as últimas notícias do mundo da tecnologia.",
        image: "/techNews.png",
        demoLink: "https://lucaslira-dev.github.io/LucasTech/",
        codeLink: "https://github.com/LucasLira-dev/LucasTech",
        tecnologies: ["HTML", "CSS", "JavaScript"]
    }
]

export const Projects = () => {

    const [showAll, setShowAll] = useState(false);
    const displayedProjects = showAll ? myProjects : myProjects.slice(0, 3); //corta os projetos para exibir apenas os 3 primeiros se showAll for false


    return(
      <section id="projetos" className="min-h-screen flex items-center md:ml-64 px-4 md:px-8 py-20">
        <div className="max-w-4xl mx-auto w-full">
          <h2 className="text-5xl font-bold mb-12 text-[#e8eaed]">Meus Projetos</h2>

          <div className="grid md:grid-cols-2 gap-6">
            {displayedProjects.map((project, index) => (
              <div
                key={index}
                className="bg-[#1a1f26] border border-[#2a3038] rounded-lg overflow-hidden hover:border-[#00d4ff] transition-all duration-300 group"
              >
                <div className="relative h-40 bg-gradient-to-br from-[#252d36] to-[#1a1f26] overflow-hidden">
                  <Image
                    width={400}
                    height={160}
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a1f26] to-transparent" />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#e8eaed] mb-2">{project.title}</h3>
                  <p className="text-[#a8aeb5] text-sm mb-4">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tecnologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-[#252d36] text-[#00d4ff] rounded text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <Link
                      target="_blank"
                      rel="noopener noreferrer"
                      href={project.codeLink}
                      className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-[#252d36] text-[#e8eaed] rounded hover:bg-[#00d4ff] hover:text-[#0f1419] transition-all duration-300 text-sm font-medium"
                    >
                      <FiGithub size={16} /> GitHub
                    </Link>
                    <Link
                      target="_blank"
                      rel="noopener noreferrer"
                      href={project.demoLink}
                      className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-[#00d4ff] text-[#0f1419] rounded hover:shadow-lg hover:shadow-[#00d4ff]/50 transition-all duration-300 text-sm font-medium"
                    >
                      <FiExternalLink size={16} /> Demo
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <button 
            className="px-8 py-3 border-2 border-[#1e88e5] text-[#1e88e5] font-semibold rounded-lg hover:bg-[#1e88e5] hover:text-[#0f1419] transition-all duration-300"
            onClick={() => setShowAll(!showAll)}
            >
              Carregar mais projetos
            </button>
          </div>
        </div>
      </section>
    )
}
