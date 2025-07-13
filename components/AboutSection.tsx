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
                                Soy un desarrollador backend con experiencia en TypeScript. Me especializo en
                                crear APIs robustas y sistemas escalables utilizando tecnologías como NestJS, TypeORM y bases
                                de datos relacionales y NoSQL.
                            </p>
                            <p className="text-gray-600 dark:text-gray-300 mb-6">
                                Mi enfoque se centra en escribir código limpio, implementar mejores prácticas y crear
                                arquitecturas que puedan crecer con las necesidades del negocio. He desplegado en EC2
                                y uso Docker en todos mis desarrollos para orquestar bases de datos y servicios backend.
                            </p>
                            <p className="text-gray-600 dark:text-gray-300">
                                En mis tiempos libres disfruto afinar configuraciones de bases de datos,
                                ajustar variables en MySQL y experimentar con réplicas para mejorar el rendimiento
                                y la tolerancia a fallos.
                            </p>
                        </div>

                        <div className="space-y-4">
                            <div className="p-6 rounded-lg bg-white dark:bg-gray-800 shadow-sm text-center">
                                <div className="text-3xl font-bold text-teal-500 dark:text-teal-400 mb-1">2+</div>
                                <div className="text-gray-600 dark:text-gray-300">Años programando</div>
                            </div>
                            <div className="p-6 rounded-lg bg-white dark:bg-gray-800 shadow-sm text-center">
                                <div className="text-3xl font-bold text-indigo-500 dark:text-indigo-400 mb-1">10+</div>
                                <div className="text-gray-600 dark:text-gray-300">Tecnologías dominadas</div>
                            </div>
                            <div className="p-6 rounded-lg bg-white dark:bg-gray-800 shadow-sm text-center">
                                <div className="text-3xl font-bold text-orange-500 dark:text-orange-400 mb-1">600+</div>
                                <div className="text-gray-600 dark:text-gray-300">Commits realizados</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
