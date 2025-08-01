"use client"

import { ArrowRight, Github, Linkedin, Mail, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { getPortfolioData } from "@/lib/data"
import { useLanguage } from "@/hooks/useLanguageContext"

export function HeroSection() {
    const { language } = useLanguage()
    const data = getPortfolioData(language)
    const { hero } = data

    // URL dinámica del CV según el idioma
    const cvUrl = language === "es"
        ? "https://cdn.edducode.me/CV-ES.pdf"
        : "https://cdn.edducode.me/CV-En.pdf"

    // Nombre del archivo para download
    const cvFileName = language === "es" ? "CV-ES.pdf" : "CV-En.pdf"

    const scrollToProjects = () => {
        const projectsSection = document.getElementById('projects')
        if (projectsSection) {
            projectsSection.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return (
        <section id="home" className="min-h-screen flex items-center py-20 relative">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="order-2 md:order-1">
                        <Badge className="mb-4 bg-teal-500/10 text-teal-500 dark:bg-teal-400/10 dark:text-teal-400 hover:bg-teal-500/20 dark:hover:bg-teal-400/20">
                            {hero.badge}
                        </Badge>
                        <h1 className="text-4xl md:text-6xl font-bold mb-4">
                            {hero.greeting}{" "}
                            <span className="bg-gradient-to-r from-teal-500 to-indigo-500 bg-clip-text text-transparent">
                                {hero.name}
                            </span>
                        </h1>
                        <p className="text-xl text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                            {hero.description}
                        </p>
                        <p className="text-sm text-gray-500 dark:text-gray-400 italic mb-8">
                            {hero.archComment}
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Button
                                onClick={scrollToProjects}
                                className="bg-gradient-to-r from-teal-500 to-indigo-500 hover:from-teal-600 hover:to-indigo-600 text-white border-0"
                            >
                                {hero.viewProjectsButton} <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                            <Button
                                asChild
                                variant="outline"
                                className="bg-gray-50 dark:bg-gray-800 border-gray-300 dark:border-gray-600 hover:bg-gray-200 dark:hover:bg-gray-900 hover:scale-105 transition-all duration-200"
                            >
                                <a
                                    href={cvUrl}
                                    target="_blank" rel="noopener noreferrer"
                                    download={cvFileName}
                                    className="flex items-center"
                                >
                                    <Download className="mr-2 h-4 w-4" />
                                    {hero.downloadCvButton}
                                </a>
                            </Button>
                        </div>

                        <div className="mt-12 flex gap-4">
                            <a
                                href={hero.socialLinks.github}
                                target="_blank" rel="noopener noreferrer"
                                className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:text-teal-500 dark:hover:text-teal-400 transition-colors"
                            >
                                <Github size={20} />
                            </a>
                            <a
                                href={hero.socialLinks.linkedin}
                                target="_blank" rel="noopener noreferrer"
                                className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:text-teal-500 dark:hover:text-teal-400 transition-colors"
                            >
                                <Linkedin size={20} />
                            </a>
                            <a
                                href={hero.socialLinks.email}
                                target="_blank" rel="noopener noreferrer"
                                className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:text-teal-500 dark:hover:text-teal-400 transition-colors"
                            >
                                <Mail size={20} />
                            </a>
                        </div>
                    </div>

                    <div className="order-1 md:order-2 flex justify-center">
                        <div className="relative">
                            {/* Fondo con gradiente suave */}
                            <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-indigo-500 rounded-full blur-xl opacity-30 animate-pulse"></div>

                            {/* Contenedor principal con gradiente */}
                            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden bg-gradient-to-br from-teal-500 to-indigo-500 p-1">
                                <div className="w-full h-full rounded-full overflow-hidden bg-white dark:bg-gray-900">
                                    <img
                                        src="/me.webp"
                                        alt="Eduardo Díaz - Desarrollador Backend"
                                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                        onError={(e) => {
                                            e.currentTarget.src = "/placeholder-user.jpg"
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>                </div>
            </div>

            {/* Elementos decorativos <> - Solo visible en desktop */}
            <div className="hidden md:block absolute bottom-44 right-8 md:bottom-20 md:left-32 md:right-auto opacity-25 text-8xl md:text-9xl lg:text-[10rem] font-mono text-teal-500 select-none pointer-events-none">
                &lt;&gt;
            </div>
        </section>
    )
}
