"use client"

import { Mail, Github, Linkedin, Code } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function ContactSection() {
    return (
        <section id="contact" className="py-20">
            <div className="container mx-auto px-4">
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <Badge className="mb-4 bg-teal-500/10 text-teal-500 dark:bg-teal-400/10 dark:text-teal-400">
                        Contacto
                    </Badge>
                    <h2 className="text-3xl font-bold mb-4">¿Hablamos?</h2>
                    <p className="text-gray-600 dark:text-gray-300">
                        ¿Interesado en trabajar juntos o tienes alguna pregunta?
                    </p>
                </div>

                <div className="max-w-5xl mx-auto">
                    <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 overflow-hidden">
                        <div className="grid md:grid-cols-5">
                            <div className="md:col-span-2 bg-gradient-to-br from-teal-500 to-indigo-500 p-8 text-white">
                                <h3 className="text-2xl font-semibold mb-6">Información de contacto</h3>
                                <p className="mb-8 opacity-90">
                                    Completa el formulario y me pondré en contacto contigo lo antes posible.
                                </p>

                                <div className="space-y-6">
                                    <a
                                        href="mailto:eduarjma@gmail.com"
                                        className="flex items-center gap-4 hover:bg-white/10 p-2 rounded-lg transition-colors"
                                    >
                                        <div className="p-2 rounded-full bg-white/20">
                                            <Mail size={20} />
                                        </div>
                                        <span>eduarjma@gmail.com</span>
                                    </a>
                                    <a
                                        href="https://github.com/devEddu17x"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-4 hover:bg-white/10 p-2 rounded-lg transition-colors"
                                    >
                                        <div className="p-2 rounded-full bg-white/20">
                                            <Github size={20} />
                                        </div>
                                        <span>github.com/devEddu17x</span>
                                    </a>
                                    <a
                                        href="https://linkedin.com/in/eduardodevts"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-4 hover:bg-white/10 p-2 rounded-lg transition-colors"
                                    >
                                        <div className="p-2 rounded-full bg-white/20">
                                            <Linkedin size={20} />
                                        </div>
                                        <span>linkedin.com/in/eduardodevts</span>
                                    </a>
                                </div>

                                <div className="absolute bottom-8 left-8 right-8 opacity-10">
                                    <Code size={180} />
                                </div>
                            </div>

                            <div className="md:col-span-3 p-8">
                                <form className="space-y-6">
                                    <div className="grid grid-cols-2 gap-6">
                                        <div>
                                            <label
                                                htmlFor="name"
                                                className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300"
                                            >
                                                Nombre
                                            </label>
                                            <input
                                                type="text"
                                                id="name"
                                                className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-teal-500 dark:focus:ring-teal-400"
                                            />
                                        </div>
                                        <div>
                                            <label
                                                htmlFor="email"
                                                className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300"
                                            >
                                                Email
                                            </label>
                                            <input
                                                type="email"
                                                id="email"
                                                className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-teal-500 dark:focus:ring-teal-400"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label
                                            htmlFor="subject"
                                            className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300"
                                        >
                                            Asunto
                                        </label>
                                        <input
                                            type="text"
                                            id="subject"
                                            className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-teal-500 dark:focus:ring-teal-400"
                                        />
                                    </div>
                                    <div>
                                        <label
                                            htmlFor="message"
                                            className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300"
                                        >
                                            Mensaje
                                        </label>
                                        <textarea
                                            id="message"
                                            rows={5}
                                            className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-teal-500 dark:focus:ring-teal-400"
                                        />
                                    </div>
                                    <Button className="w-full bg-gradient-to-r from-teal-500 to-indigo-500 hover:from-teal-600 hover:to-indigo-600 text-white border-0">
                                        Enviar mensaje
                                    </Button>
                                </form>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
        </section>
    )
}
