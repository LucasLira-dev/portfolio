
import './globals.css'


import Menu from '@/components/Menu/menu';
import Header from '@/components/Header/header';
import About from '@/components/About/about';
import Skills from '@/components/Skills/skills';
import { Projects } from '@/components/Projects/projects';
import Contatos from '@/components/Contatos/contatos';
import Footer from '@/components/Footer/footer';

export default function Home() {


  return (
    <main
    className="h-full w-full flex flex-col ">
      <Menu
      />
      <Header/>
      <About/>
      <Skills/>
      <Projects/>
      <Contatos/>
      <Footer/>
    </main>
  );
} 
