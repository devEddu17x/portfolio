"use client"

import { Github, Linkedin, Mail } from "lucide-react"
import { getPortfolioData } from "@/lib/data"
import { useLanguage } from "@/hooks/useLanguageContext"

export function Footer() {
    const { language } = useLanguage()
    const data = getPortfolioData(language)
    const { footer } = data

    return (
        <footer className="py-8 border-t border-gray-200 dark:border-gray-800">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="flex items-center gap-2 mb-4 md:mb-0">
                        <div className="w-10 h-10 overflow-hidden group relative">
                            <img
                                src="/arch.webp"
                                alt="Arch Linux Logo"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <span className="font-bold">{footer.name}</span>
                    </div>

                    <div className="text-gray-500 dark:text-gray-400 text-sm">
                        © {new Date().getFullYear()} {footer.name}. {footer.copyright}
                    </div>

                    <div className="flex gap-4 mt-4 md:mt-0">
                        <a
                            href={footer.socialLinks.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-500 dark:text-gray-400 hover:text-teal-500 dark:hover:text-teal-400 transition-colors"
                        >
                            <Github size={18} />
                        </a>
                        <a
                            href={footer.socialLinks.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-500 dark:text-gray-400 hover:text-teal-500 dark:hover:text-teal-400 transition-colors"
                        >
                            <Linkedin size={18} />
                        </a>
                        <a
                            href={footer.socialLinks.email}
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
