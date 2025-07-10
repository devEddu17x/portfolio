"use client"

import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { skills } from "@/lib/data"

export function AboutSection() {
    return (
        <section id="about" className="py-20 bg-gray-100 dark:bg-gray-900/50">
            <div className="container mx-auto px-4">
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <Badge className="mb-4 bg-teal-500/10 text-teal-500 dark:bg-teal-400/10 dark:text-teal-400">
                        Sobre mí
                    </Badge>
                    <h2 className="text-3xl font-bold mb-4">Conóceme mejor</h2>
                    <p className="text-gray-600 dark:text-gray-300">
                        Soy un desarrollador web junior con pasión por aprender nuevas tecnologías y crear soluciones
                        innovadoras.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h3 className="text-2xl font-semibold mb-4">Mi historia</h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-6">
                            Soy un desarrollador web junior con pasión por aprender nuevas tecnologías y crear soluciones
                            innovadoras. Mi objetivo es combinar diseño y funcionalidad para crear experiencias de usuario
                            excepcionales.
                        </p>
                        <p className="text-gray-600 dark:text-gray-300 mb-6">
                            Actualmente estoy enfocado en el desarrollo frontend con React, pero también tengo experiencia con
                            Node.js y bases de datos. Me encanta resolver problemas y colaborar en equipos multidisciplinarios.
                        </p>

                        <div className="grid grid-cols-2 gap-4 mt-8">
                            <div className="p-4 rounded-lg bg-white dark:bg-gray-800 shadow-sm">
                                <div className="text-3xl font-bold text-teal-500 dark:text-teal-400 mb-1">2+</div>
                                <div className="text-gray-600 dark:text-gray-300">Años de experiencia</div>
                            </div>
                            <div className="p-4 rounded-lg bg-white dark:bg-gray-800 shadow-sm">
                                <div className="text-3xl font-bold text-indigo-500 dark:text-indigo-400 mb-1">10+</div>
                                <div className="text-gray-600 dark:text-gray-300">Proyectos completados</div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-2xl font-semibold mb-6">Mis habilidades</h3>
                        <Tabs defaultValue="Frontend" className="w-full">
                            <TabsList className="grid grid-cols-3 mb-6">
                                {skills.map((skill) => (
                                    <TabsTrigger key={skill.category} value={skill.category}>
                                        {skill.category}
                                    </TabsTrigger>
                                ))}
                            </TabsList>

                            {skills.map((skill) => (
                                <TabsContent key={skill.category} value={skill.category} className="mt-0">
                                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                                        {skill.items.map((item) => (
                                            <div
                                                key={item}
                                                className="p-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 flex items-center gap-2"
                                            >
                                                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-teal-500 to-indigo-500"></div>
                                                <span>{item}</span>
                                            </div>
                                        ))}
                                    </div>
                                </TabsContent>
                            ))}
                        </Tabs>
                    </div>
                </div>
            </div>
        </section>
    )
}
