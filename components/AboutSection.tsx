"use client"

import { Badge } from "@/components/ui/badge"

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
                        Desarrollador backend especializado en crear soluciones robustas y escalables con tecnologías modernas.
                    </p>
                </div>

                <div className="max-w-4xl mx-auto">
                    <div className="grid md:grid-cols-3 gap-8 items-center">
                        <div className="md:col-span-2">
                            <h3 className="text-2xl font-semibold mb-4">Mi historia</h3>
                            <p className="text-gray-600 dark:text-gray-300 mb-6">
                                Soy un desarrollador backend con experiencia en TypeScript, Java y Python. Me especializo en
                                crear APIs robustas y sistemas escalables utilizando tecnologías como NestJS, TypeORM y bases
                                de datos relacionales y NoSQL.
                            </p>
                            <p className="text-gray-600 dark:text-gray-300 mb-6">
                                Mi enfoque se centra en escribir código limpio, implementar mejores prácticas y crear
                                arquitecturas que puedan crecer con las necesidades del negocio. Tengo experiencia desplegando
                                aplicaciones en AWS y manejando infraestructura con Docker.
                            </p>
                            <p className="text-gray-600 dark:text-gray-300">
                                Me apasiona resolver problemas complejos y colaborar en equipos multidisciplinarios para
                                entregar soluciones de alta calidad.
                            </p>
                        </div>

                        <div className="space-y-4">
                            <div className="p-6 rounded-lg bg-white dark:bg-gray-800 shadow-sm text-center">
                                <div className="text-3xl font-bold text-teal-500 dark:text-teal-400 mb-1">3+</div>
                                <div className="text-gray-600 dark:text-gray-300">Años de experiencia</div>
                            </div>
                            <div className="p-6 rounded-lg bg-white dark:bg-gray-800 shadow-sm text-center">
                                <div className="text-3xl font-bold text-indigo-500 dark:text-indigo-400 mb-1">15+</div>
                                <div className="text-gray-600 dark:text-gray-300">Proyectos completados</div>
                            </div>
                            <div className="p-6 rounded-lg bg-white dark:bg-gray-800 shadow-sm text-center">
                                <div className="text-3xl font-bold text-orange-500 dark:text-orange-400 mb-1">5+</div>
                                <div className="text-gray-600 dark:text-gray-300">Tecnologías dominadas</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
