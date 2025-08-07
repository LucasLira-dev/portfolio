'use client';

import { TypeAnimation } from 'react-type-animation';
import { FiGithub } from "react-icons/fi";
import { FiLinkedin } from "react-icons/fi";
import { MdOutlineMail } from "react-icons/md";
import { FaArrowDown } from "react-icons/fa";
import Link from "next/link";

export default function Header () {
    return (
      <header
      className="flex flex-col items-center justify-center p-2 mt-14 lg:mt-0  bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-700/20 to-transparent min-h-screen"
      id="inicio">
        <div
        className="flex flex-col items-center justify-center">
        <h1
        className="text-[var(--foreground)] text-4xl font-bold mb-4 lg:text-6xl"> 
            Olá, eu sou o Lucas
         </h1>

        {/* <p
        className="text-[var(--muted-foreground)] text-[20px] max-w-2xl text-center lg:text-[24px]">
            Desenvolvedor Front-end, apaixonado por tecnologia e sempre em busca de novos desafios.
        </p> */}
        <TypeAnimation
            sequence={[
              'Desenvolvedor Front-end',
              1500,
              'Apaixonado por tecnologia',
              1500,
              'Sempre em busca de novos desafios',
              1500,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="text-[var(--muted-foreground)] text-[20px] max-w-2xl text-center lg:text-[24px]"
          />

        <div
        className="flex gap-4 mt-6 mb-8">  
            <a
            href="#contatos"
            className="bg-[var(--primary)] text-[var(--primary-foreground)] px-4 py-2 rounded-md hover:bg-[#bdb8b8] transition-all duration-300 ease-in-out cursor-pointer">
                Entre em contato
            </a>
            <a
            href="#projetos"
            className="bg-[var(--background)] text-[var(--foreground)] border-[var(--border)] px-4 py-2 rounded-md hover:bg-[var(--accent)] hover:text-[var(--accent-foreground)] transition-all duration-300 ease-in-out cursor-pointer">
                Ver projetos
            </a>
        </div>

        <div
        className="flex gap-4 text-[var(--foreground)] text-[22px] mt-4 cursor-pointer">
           <Link 
           className="p-3 hover:bg-[var(--accent)] transition-all cursor-pointer"
           href="https://github.com/LucasLira-dev"
           target="_blank">
                <FiGithub size={22} />
           </Link>
            <Link 
            className="p-3 hover:bg-[var(--accent)] transition-all cursor-pointer"
            href="https://www.linkedin.com/in/lucas-mendess"
            target="_blank">
                <FiLinkedin size={22} />
            </Link>
            <Link 
            className="p-3 hover:bg-[var(--accent)] transition-all cursor-pointer"
            href="mailto:lucasmndes.dev@gmail.com"
            target="_blank">
                <MdOutlineMail size={22} />
            </Link>
        </div>

        <div
        className="mt-15 text-[var(--foreground)] p-3 hover:bg-[var(--accent)] transition-all animate-bounce cursor-pointer"
        onClick={()=> {
            const section = document.getElementById("sobre");
            if (section) {
                section.scrollIntoView({ behavior: "smooth" });
            }
        }}>
            <FaArrowDown
            size={22}
            />
        </div>
        </div>
      </header>       
    )
}