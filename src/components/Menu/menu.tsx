'use client'

import '../../app/globals.css';

import { IoCloseSharp } from "react-icons/io5";
import { LuMenu } from "react-icons/lu";
import { motion, AnimatePresence } from "framer-motion";

import { useState } from 'react';

const menuItems = [
  { href: "#inicio", label: "Inicio" },
  { href: "#sobre", label: "Sobre" },
  { href: "#habilidades", label: "Habilidades" },
  { href: "#projetos", label: "Projetos" },
  { href: "#contatos", label: "Contatos" },
];


export default function Menu() {

  const [openMenu, setOpenMenu] = useState(false)

    // Função para scroll suave
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const id = href.replace('#', '');
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setOpenMenu(false); // Fecha o menu mobile após clicar
    }
  };

  return (
    <>
      <div
        className=" fixed bg-[#0A0A0B]/80 text-[var(--foreground)] w-full flex justify-end md:hidden z-50"
        onClick={() => setOpenMenu(!openMenu)}
      >
        {
          openMenu 
          ? <IoCloseSharp 
              className="inline-block p-2 mx-4 my-2 cursor-pointer hover:bg-[#353535] rounded-md transition-all duration-300 ease-in-out"
              size={38} 
            />
          : <LuMenu 
              className="inline-block p-2 mx-4 my-2 cursor-pointer hover:bg-[#353535] rounded-md transition-all duration-300 ease-in-out"
              size={38} 
            />
        }
      </div>

        <AnimatePresence>
        {openMenu && (
          <motion.ul
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="text-white fixed top-13 right-0 z-50 w-full min-h-[300px] bg-[#0A0A0B]/80 flex flex-col gap-6 text-[16px] font-semibold p-8 cursor-pointer md:hidden"
          >
            {menuItems.map((item, idx) => (
              <motion.li
                key={item.href}
                initial={{ opacity: 0, x: -15 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -15 }}
                transition={{ duration: 0.2, delay: idx * 0.04 }}
              >
                <a
                  href={item.href}
                  className="cursor-pointer hover:text-[var(--ring)] transition"
                  onClick={(e) => handleScroll(e, item.href)}
                >
                  {item.label}
                </a>
              </motion.li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>

      <ul className="hidden md:flex gap-8 text-[var(--foreground)] text-[16px] font-semibold justify-end w-full py-4 px-8">
        {menuItems.map((item) => (
          <li key={item.href} className="cursor-pointer hover:text-[var(--ring)] transition">
            <a href={item.href} className="cursor-pointer hover:text-[var(--ring)] transition"
            onClick={(e) => handleScroll(e, item.href)}>
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </>
  );
} 
