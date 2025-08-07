"use client";

import { FiLayout } from "react-icons/fi";
import { LuServer } from "react-icons/lu";
import { FaCode } from "react-icons/fa6";
import { CiGlobe } from "react-icons/ci";

import { TiHtml5 } from "react-icons/ti";
import {
  FaCss3Alt,
  FaGitAlt,
  FaGithub,
  FaNodeJs,
  FaReact,
  FaPuzzlePiece,
  FaJsSquare,
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";

import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";

import { SiNestjs } from "react-icons/si";

import { VscVscode } from "react-icons/vsc";
import { DiNpm } from "react-icons/di";

import { MdOutlineDesignServices, MdSpeed } from "react-icons/md";

import { motion } from "framer-motion";

const skills = [
  {
    title: "Front-End",
    icon: <FiLayout />,
    abilities: [
      { name: "HTML", icon: <TiHtml5 /> },
      { name: "CSS", icon: <FaCss3Alt /> },
      { name: "JavaScript", icon: <IoLogoJavascript /> },
      { name: "React", icon: <FaReact /> },
      { name: "Next.js", icon: <RiNextjsFill /> },
      { name: "Tailwind CSS", icon: <RiTailwindCssFill /> },
    ],
  },
  {
    title: "Back-End",
    icon: <LuServer />,
    abilities: [
      { name: "Node.js", icon: <FaNodeJs /> },
      { name: "Express", icon: <FaNodeJs /> },
      { name: "NestJS", icon: <SiNestjs /> },
    ],
  },
  {
    title: "Ferramentas",
    icon: <FaCode />,
    abilities: [
      { name: "Git", icon: <FaGitAlt /> },
      { name: "GitHub", icon: <FaGithub /> },
      { name: "VScode", icon: <VscVscode /> },
      { name: "Npm", icon: <DiNpm /> },
    ],
  },
  {
    title: "Conceitos",
    icon: <CiGlobe />,
    abilities: [
      {
        name: "Responsive Design",
        icon: <MdOutlineDesignServices />,
      },
      {
        name: "Component Architecture",
        icon: <FaPuzzlePiece />,
      },
      {
        name: "Modern JavaScript",
        icon: <FaJsSquare />,
      },
      {
        name: "Web Performance",
        icon: <MdSpeed />,
      },
    ],
  },
];

export default function Skills() {
  return (
    <div 
    className="flex flex-col items-center justify-center p-2 bg-[var(--background)]"
    id="habilidades">
      <h2 className="text-4xl text-white font-bold mt-10 mb-6">
        Minhas Habilidades
      </h2>
      <div className="w-20 h-1 bg-[var(--primary)] mx-auto mb-6"></div>

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7 }}
        className="w-full flex items-center justify-center p-3 sm:p-5 lg:p-10 xl:p-12 2xl:p-14"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6 sm:gap-8 w-full justify-center items-center">
          {skills.map((skill) => (
            <div
              key={skill.title}
              className="bg-[var(--card)] rounded-lg h-full min-w-[330px] sm:w-[340px] md:w-[360px] lg:w-[400px] xl:w-[350px] 2xl:w-[350px] gap-2 p-6"
            >
              <div className="inline-block mr-2 text-[var(--primary)] text-[30px] mb-4">
                {skill.icon}
              </div>
              <h3 className="text-2xl text-[var(--card-foreground)] text-center font-semibold mb-4">
                {skill.title}
              </h3>
              <ul className="list-inside list-none p-2 flex flex-col gap-4 text-lg text-white font-semibold max-w">
                {skill.abilities.map((ability) => (
                  <li
                    className="flex items-center gap-2"
                    key={ability.icon.type.name}
                  >
                    {ability.icon}
                    {ability.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
