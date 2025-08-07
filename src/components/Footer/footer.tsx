import Link from "next/link";
import { FiGithub } from "react-icons/fi";
import { FiLinkedin } from "react-icons/fi";
import { MdOutlineMail } from "react-icons/md";

export default function Footer(){
    return(
        <footer
        className="bg-[rgba(30,41,59,0.3)] w-full p-4 text-center text-[var(--foreground)]">
            <article
            className="flex flex-col mt-4">
                <div
                className="md:flex md:justify-between md:items-center md:p-2">
                    <div>
                        <h3
                        className="text-2xl text-[var(--primary)] font-semibold mb-2">
                            Lucas Mendes
                        </h3>
                        <p
                        className="text-lg text-[var(--muted-foreground)] mb-4">
                            Desenvolvedor Web
                        </p>
                        </div>
                    <div>
                        <div
                        className="flex justify-center gap-4 mb-2 text-[var(--muted-foreground)] text-[18px]">
                            <Link
                            href={"https://github.com/LucasLira-dev"}
                            target="_blank">
                                <FiGithub className="hover:text-[var(--primary)] transition-colors duration-200" />
                            </Link>
                            <Link
                            href={"https://www.linkedin.com/in/lucas-mendess"}
                            target="_blank">
                                <FiLinkedin className="hover:text-[var(--primary)] transition-colors duration-200" />
                            </Link>
                            <Link
                            href={"mailto:lucasmndes.dev@gmail.com"}
                            target="_blank">
                                <MdOutlineMail className="hover:text-[var(--primary)] transition-colors duration-200" />
                            </Link>
                        </div>
                    </div>
                </div>
                 <div className="border-t border-[var(--border)] mt-2 pt-8 pb-2 text-center text-sm text-[var(--muted-foreground)]">
                    © {new Date().getFullYear()} Lucas Mendes. Todos os direitos reservados.
                 </div>
            </article>
        </footer>
    )
}