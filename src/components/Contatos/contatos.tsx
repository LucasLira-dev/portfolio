'use client'

import { FiGithub, FiLinkedin } from "react-icons/fi";
import { MdOutlineMail } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";

import { motion } from "framer-motion";
import Link from "next/link";

const contacts = [
    {
        icon: <MdOutlineMail />,
        title: "Email",
        contactLink: "mailto:lucasmndes.dev@gmail.com",
        arroba: "lucasmndes.dev@gmail.com",
        buttonMessage: "Enviar Email",
    },
    {
        icon: <FiGithub />,
        title: "GitHub",
        contactLink: "https://github.com/LucasLira-dev",
        arroba: "@LucasLira-dev",
        buttonMessage: "Ver perfil",
    },
    {
        icon: <FiLinkedin />,
        title: "LinkedIn",
        contactLink: "https://www.linkedin.com/in/lucas-mendess",
        arroba: "linkedin.com/in/lucas-mendess",
        buttonMessage: "Visitar LinkedIn",
    }

]

//grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3 gap-6 sm:gap-8 w-full justify-center items-center

export default function Contatos() {
    return(
        <section
        className="flex flex-col items-center justify-center p-2 md:p-4 bg-[var(--background)] w-full "
        id="contatos">
            <h2
            className="text-4xl text-white font-bold mt-10 mb-6">
                Entre em contato
            </h2>
            <div className="w-20 h-1 bg-[var(--primary)] mx-auto mb-6"></div>
            <p
            className="text-[var(--muted-foreground)] text-[20px] max-w-2xl text-center mb-4">
                Tem um projeto em mente ou quer conversar sobre desenvolvimento? Entre em contato através dos canais abaixo.
            </p>

            <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="w-full flex items-center justify-center p-3 sm:p-5 lg:p-10 xl:p-12 2xl:p-14"
            >
            <div className="flex flex-col flex-wrap sm:flex-row lg:flex-row xl:flex-row 2xl:flex-row gap-6 sm:gap-8 w-full justify-center items-center">
                {contacts.map((contact) => (
                    <div
                    key={contact.title}
                    className="bg-[var(--card)] rounded-lg h-full min-w-[330px] sm:w-[340px] md:w-[360px] lg:w-[400px] xl:w-[350px] 2xl:w-[350px] gap-2 p-6 flex flex-col justify-center items-center border-1 border-[var(--border)] shadow-lg hover:shadow-xl transition-shadow duration-300"
                    >
                        <div className="inline-block mr-2 text-[var(--primary)] text-[30px] mb-4">
                            {contact.icon}
                        </div>
                        <h3 className="text-2xl text-[var(--card-foreground)] text-center font-semibold mb-4">
                            {contact.title}
                        </h3>
                        <p className="text-[var(--muted-foreground)] text-md px-4">
                            {contact.arroba}
                        </p>
                        <Link
                        className="text-white flex items-center gap-3 px-4 py-1 rounded-lg border-1 border-[var(--border)] hover:bg-cyan-500/10 hover:text-cyan-400 transition-colors duration-300 justify-center"
                        href={contact.contactLink}
                        target="_blank"
                        >
                            {contact.buttonMessage}
                        </Link>
                    </div>
                ))}
            </div>
            </motion.div>
            <div
            className="flex items-center gap-3 mt-2 mb-12 p-6 bg-[var(--card)] rounded-lg border-1 border-[var(--border)] shadow-lg hover:shadow-xl transition-shadow duration-300 min-w-[200px]"> 
                <IoLocationOutline size={24} className="inline-block mr-2 text-[var(--primary)]" />
                <div
                className="flex flex-col text-[var(--card-foreground)]">
                    <p
                    className="text-[20px] font-semibold mb-1">
                        Localização
                    </p>
                    <p
                    className="text-[var(--muted-foreground)] text-md">
                        Ceará, Brasil
                    </p>
                </div>
            </div>
        </section>
    )
}