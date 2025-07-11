"use client"

import { motion } from "framer-motion"
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export function HeroSection() {
    const scrollToProjects = () => {
        const projectsSection = document.getElementById('projects')
        if (projectsSection) {
            projectsSection.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return (
        <section id="home" className="min-h-screen flex items-center py-20">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="order-2 md:order-1"
                    >
                        <Badge className="mb-4 bg-teal-500/10 text-teal-500 dark:bg-teal-400/10 dark:text-teal-400 hover:bg-teal-500/20 dark:hover:bg-teal-400/20">
                            Desarrollador Backend
                        </Badge>
                        <h1 className="text-4xl md:text-6xl font-bold mb-4">
                            Hola, soy{" "}
                            <span className="bg-gradient-to-r from-teal-500 to-indigo-500 bg-clip-text text-transparent">
                                Eddu
                            </span>
                        </h1>
                        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                            Especializado en crear APIs robustas y sistemas escalables con NestJS.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Button
                                onClick={scrollToProjects}
                                className="bg-gradient-to-r from-teal-500 to-indigo-500 hover:from-teal-600 hover:to-indigo-600 text-white border-0"
                            >
                                Ver proyectos <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                            {/* <Button variant="outline" className="border-gray-300 dark:border-gray-700">
                                Descargar CV
                            </Button> */}
                        </div>

                        <div className="mt-12 flex gap-4">
                            <a
                                href="https://github.com/devEddu17x"
                                target="_blank" rel="noopener noreferrer"
                                className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:text-teal-500 dark:hover:text-teal-400 transition-colors"
                            >
                                <Github size={20} />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/eduardodevts/"
                                target="_blank" rel="noopener noreferrer"
                                className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:text-teal-500 dark:hover:text-teal-400 transition-colors"
                            >
                                <Linkedin size={20} />
                            </a>
                            <a
                                href="mailto:eduarjma@gmail.com?subject=Contacto%20desde%20Portfolio"
                                target="_blank" rel="noopener noreferrer"
                                className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:text-teal-500 dark:hover:text-teal-400 transition-colors"
                            >
                                <Mail size={20} />
                            </a>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="order-1 md:order-2 flex justify-center"
                    >
                        <div className="relative">
                            {/* Fondo con gradiente suave */}
                            <div className="w-72 h-72 md:w-88 md:h-88 rounded-full bg-gradient-to-br from-teal-500/20 via-indigo-500/20 to-purple-500/20 blur-2xl absolute -inset-8"></div>

                            {/* Anillo decorativo exterior */}
                            <div className="w-68 h-68 md:w-84 md:h-84 rounded-full border border-teal-500/30 absolute -inset-2 animate-spin" style={{ animationDuration: '20s' }}></div>

                            {/* Contenedor principal con gradiente */}
                            <div className="relative p-1 rounded-full bg-gradient-to-br from-teal-500 via-indigo-500 to-purple-500">
                                <div className="w-64 h-64 md:w-80 md:h-80 rounded-full border-4 border-white dark:border-gray-900 overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900">
                                    <img
                                        src="/me.png"
                                        alt="Eddu - Desarrollador Backend"
                                        className="w-full h-full object-cover hover:scale-110 transition-all duration-500 ease-in-out"
                                    />
                                </div>
                            </div>
                            {/* 
                            Puntos decorativos
                            <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-teal-400 rounded-full animate-pulse"></div>
                            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-indigo-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                            <div className="absolute top-1/2 -left-2 transform -translate-y-1/2 w-1.5 h-1.5 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
                            <div className="absolute top-1/2 -right-2 transform -translate-y-1/2 w-1.5 h-1.5 bg-teal-300 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div> */}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
