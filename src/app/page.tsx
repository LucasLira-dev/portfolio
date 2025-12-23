'use client';

import './globals.css'
import About from '@/components/About/about';
import Skills from '@/components/Skills/skills';
import { Projects } from '@/components/Projects/projects';
import Contatos from '@/components/Contatos/contatos';
import Footer from '@/components/Footer/footer';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Navigation from '@/components/Navigation/navigation';
import { useEffect, useState } from 'react';

export default function Home() {

  const [activeSection, setActiveSection] = useState('inicio');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['inicio', 'sobre', 'habilidades', 'projetos', 'contatos'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main
    className="h-full w-full flex flex-col ">
      <Navigation activeSection={activeSection} />
      <section
        id="inicio"
        className="min-h-screen flex items-center justify-center lg:ml-64 px-4 lg:px-8 relative overflow-hidden"
      >
        <div className="absolute inset-0 opacity-10">
          <Image
            src="/hero-background.png"
            alt="background"
            className="w-full h-full object-cover"
            fill
          />
        </div>

        <div className="relative z-10 max-w-2xl mx-auto text-center lg:text-left">
          <div className="animate-fade-in-up">
            <p className="text-[#00d4ff] font-semibold text-lg mb-4">Olá, eu sou</p>
            <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-[#e8eaed] to-[#a8aeb5] bg-clip-text text-transparent">
              Lucas Mendes
            </h1>
            <p className="text-2xl md:text-3xl text-[#a8aeb5] mb-8">
              Desenvolvedor Front-end apaixonado por criar soluções web modernas
            </p>
            <div className="flex gap-4 justify-center lg:justify-start">
              <button
                onClick={() => document.getElementById('projetos')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-3 bg-[#00d4ff] text-[#0f1419] font-semibold rounded-lg hover:shadow-lg hover:shadow-[#00d4ff]/50 transition-all duration-300 flex items-center gap-2"
              >
                Ver projetos <ArrowRight size={20} />
              </button>
              <button
                onClick={() => document.getElementById('contatos')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-3 border-2 border-[#1e88e5] text-[#1e88e5] font-semibold rounded-lg hover:bg-[#1e88e5] hover:text-[#0f1419] transition-all duration-300"
              >
                Entre em contato
              </button>
            </div>
          </div>
        </div>
      </section>
      <About/>
      <Skills/>
      <Projects/>
      <Contatos/>
      <Footer/>
    </main>
  );
} 
