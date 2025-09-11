'use client';

import { motion } from "framer-motion";
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
        title: "youCourse",
        description: "Projeto que visa facilitar o aprendizado de programação, apresentando cursos gratuitos que estão disponíveis no YouTube.",
        image: "/youCourse.png",   
        demoLink: "https://youcourse-ivory.vercel.app/",
        codeLink: "https://github.com/LucasLira-dev/youcourse.",
        tecnologies: ["React", "Tailwind CSS", "HTML", "CSS"]
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
        title: "Spotify",
        description: "Recriando a interface do Spotify, com responsividade e funcionalidades básicas.",
        image: "/spotify.png",
        demoLink: "https://lucaslira-dev.github.io/spotify/",
        codeLink: "https://github.com/LucasLira-dev/spotify",
        tecnologies: ["HTML", "CSS", "JavaScript"]
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
        <section
        className="flex flex-col items-center justify-center p-2 md:p-4 bg-[rgba(30,41,59,0.3)] w-full "
        id="projetos">
            <h2
            className="text-4xl text-white font-bold mt-10 mb-6">
                Meus Projetos
            </h2>
            <div className="w-20 h-1 bg-[var(--primary)] mx-auto mb-6"></div>
            <p
            className="text-[var(--muted-foreground)] text-[20px] max-w-2xl text-center mb-6">
                Aqui estão alguns dos projetos que desenvolvi. Cada um representa diferentes habilidades e tecnologias que domino.
            </p>

            <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="w-full flex items-center p-3"
            >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3 gap-8 justify-center rounded-lg border-[var(--border)] shadow-lg w-full">
          {displayedProjects.map((project) => (
            <div
              key={project.title}
             className="bg-[var(--card)] border-2 border-[var(--border)] rounded-lg sm:w-[355px] md:w-[330px] lg:w-[390px] xl:w-[400px] 2xl:w-[440px] w-full min-w-[320px] min-h-[440px] gap-2 flex flex-col overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="relative h-[210px] w-full overflow-hidden">
                <Image
                  src={project.image}
                  width={420}
                  height={200}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                  style={{
                    width: '100%',
                    height: '200px',
                    objectFit: 'cover'
                  }}
                />           
            </div>
              <h3 className="text-2xl text-[var(--card-foreground)] font-semibold pl-4 w-full">
                {project.title}
              </h3>
               <p className="text-[var(--muted-foreground)] text-md px-4 w-full">
                {project.description}
              </p>
              <ul className="list-inside list-none flex flex-wrap gap-3 text-lg text-white font-semibold text-[12px] w-full p-4">
                {project.tecnologies && project.tecnologies.map((tecnology) => (
                  <li
                    className="flex items-center gap-2 bg-[#27272A] rounded-lg px-3 py-1 hover:bg-[var(--primary)] hover:text-[var(--primary-foreground)] transition-colors duration-300"
                    key={tecnology}
                  >
                    {tecnology}
                  </li>
                ))}
              </ul>

              <div className="flex gap-2 p-4 font-semibold text-md w-full">
                <Link href={project.codeLink} target="_blank"
                  className=" text-white border-1 border-[var(--border)] flex items-center gap-3 px-3 py-1 rounded-lg hover:bg-[#27272A] transition-colors duration-300">
                    <FiGithub className="text-md" />
                    Github
                </Link>
                <Link href={project.demoLink} target="_blank"
                  className="bg-[var(--primary)] text-black flex items-center gap-3 px-3 py-1 rounded-lg border-1 hover:bg-[#fafafa] hover:opacity-90 hover:text-[#1a1a1b] transition-colors duration-300">
                    <FiExternalLink className="text-md" />
                    Demo
                </Link>
              </div>

            </div>
          ))}
        </div>
      </motion.div>
       <button
          className="bg-[var(--card)] text-white font-semibold flex items-center gap-3 px-8 py-2 rounded-md border-1 border-[var(--accent)] hover:bg-[rgba(30,41,59,0.3)] hover:opacity-90 hover:text-[var(--primary)] transition-colors duration-300 justify-center cursor-pointer mt-6 mb-10"
          onClick={() => setShowAll(!showAll)}>
            { showAll ? "Carregar menos projetos" : "Carregar mais projetos" }
          </button>
        </section>
    )
}