import { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface NavigationProps {
  activeSection?: string;
}

export default function Navigation({ activeSection }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: 'inicio', label: 'Início' },
    { id: 'sobre', label: 'Sobre' },
    { id: 'habilidades', label: 'Habilidades' },
    { id: 'projetos', label: 'Projetos' },
    { id: 'contatos', label: 'Contatos' },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden lg:fixed lg:left-0 lg:top-0 lg:h-screen lg:w-64 lg:flex lg:flex-col lg:bg-gradient-to-b lg:from-[#1a1f26] lg:to-[#0f1419] lg:border-r lg:border-[#2a3038] lg:p-8 lg:z-40">
        <div className="mb-12">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-[#00d4ff] to-[#1e88e5] bg-clip-text text-transparent">
            Lucas
          </h1>
          <p className="text-sm text-[#a8aeb5] mt-1">Desenvolvedor Web</p>
        </div>

        <div className="flex-1 flex flex-col gap-6">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`text-left px-4 py-2 rounded-lg transition-all duration-300 ${
                activeSection === item.id
                  ? 'bg-[#00d4ff] text-[#0f1419] font-semibold'
                  : 'text-[#e8eaed] hover:text-[#00d4ff] hover:bg-[#252d36]'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="flex gap-4 pt-8 border-t border-[#2a3038]">
          <a
            href="https://github.com/LucasLira-dev"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-lg bg-[#252d36] hover:bg-[#00d4ff] hover:text-[#0f1419] flex items-center justify-center transition-all duration-300 group"
            title="GitHub"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </a>
          <a
            href="https://linkedin.com/in/lucas-mendess"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-lg bg-[#252d36] hover:bg-[#00d4ff] hover:text-[#0f1419] flex items-center justify-center transition-all duration-300"
            title="LinkedIn"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.722-2.004 1.418-.103.249-.129.597-.129.946v5.441h-3.554s.05-8.81 0-9.728h3.554v1.375c.427-.659 1.191-1.598 2.897-1.598 2.117 0 3.704 1.385 3.704 4.362v5.589zM5.337 8.855c-1.144 0-1.915-.759-1.915-1.71 0-.955.771-1.71 1.958-1.71 1.187 0 1.914.755 1.939 1.71 0 .951-.752 1.71-1.982 1.71zm1.581 11.597H3.715V9.724h3.203v10.728zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
            </svg>
          </a>
          <a
            href="mailto:lucasmndes.dev@gmail.com"
            className="w-10 h-10 rounded-lg bg-[#252d36] hover:bg-[#00d4ff] hover:text-[#0f1419] flex items-center justify-center transition-all duration-300"
            title="Email"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </a>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <div className="lg:hidden fixed top-0 left-0 right-0 bg-[#1a1f26] border-b border-[#2a3038] px-4 py-4 z-50 flex justify-between items-center">
        <h1 className="text-xl font-bold bg-gradient-to-r from-[#00d4ff] to-[#1e88e5] bg-clip-text text-transparent">
          Lucas
        </h1>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 hover:bg-[#252d36] rounded-lg transition-colors text-[#e8eaed]"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden fixed top-16 left-0 right-0 bg-[#1a1f26] border-b border-[#2a3038] p-4 z-40 space-y-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="w-full text-left px-4 py-2 rounded-lg text-[#e8eaed] hover:bg-[#252d36] hover:text-[#00d4ff] transition-all duration-300"
            >
              {item.label}
            </button>
          ))}
        </div>
      )}

      {/* Spacer for desktop */}
      <div className="hidden lg:block lg:w-64" />
    </>
  );
}
