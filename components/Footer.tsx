"use client"

import { Github, Linkedin, Mail } from "lucide-react"

export function Footer() {
    return (
        <footer className="py-8 border-t border-gray-200 dark:border-gray-800">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="flex items-center gap-2 mb-4 md:mb-0">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-teal-400 to-indigo-500 flex items-center justify-center text-white font-bold text-xs">
                            TN
                        </div>
                        <span className="font-bold">Eddu</span>
                    </div>

                    <div className="text-gray-500 dark:text-gray-400 text-sm">
                        © {new Date().getFullYear()} Eddu. Todos los derechos reservados.
                    </div>

                    <div className="flex gap-4 mt-4 md:mt-0">
                        <a
                            href="https://github.com/devEddu17x"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-500 dark:text-gray-400 hover:text-teal-500 dark:hover:text-teal-400 transition-colors"
                        >
                            <Github size={18} />
                        </a>
                        <a
                            href="https://linkedin.com/in/eduardodevts"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-500 dark:text-gray-400 hover:text-teal-500 dark:hover:text-teal-400 transition-colors"
                        >
                            <Linkedin size={18} />
                        </a>
                        <a
                            href="mailto:eduarjma@gmail.com"
                            className="text-gray-500 dark:text-gray-400 hover:text-teal-500 dark:hover:text-teal-400 transition-colors"
                        >
                            <Mail size={18} />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}
