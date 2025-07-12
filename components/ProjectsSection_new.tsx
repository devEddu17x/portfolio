"use client"

import { Github, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { projects } from "@/lib/data"

export function ProjectsSection() {
    return (
        <section id="projects" className="py-20">
            <div className="container mx-auto px-4">
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <Badge className="mb-4 bg-teal-500/10 text-teal-500 dark:bg-teal-400/10 dark:text-teal-400">
                        Proyectos
                    </Badge>
                    <h2 className="text-3xl font-bold mb-4">Mi trabajo reciente</h2>
                    <p className="text-gray-600 dark:text-gray-300">
                        Aquí hay una selección de proyectos en los que he trabajado recientemente.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div key={index} className="group">
                            <Card className="h-full hover:shadow-lg transition-shadow duration-300 border-gray-200 dark:border-gray-800">
                                <CardContent className="p-6">
                                    <div className="flex items-start justify-between mb-4">
                                        <div className="p-2 bg-teal-500/10 dark:bg-teal-400/10 rounded-lg">
                                            <div className="h-6 w-6 bg-teal-500 dark:bg-teal-400 rounded"></div>
                                        </div>
                                        <div className="flex gap-2">
                                            {project.github && (
                                                <Button
                                                    variant="ghost"
                                                    size="icon"
                                                    className="h-8 w-8 text-gray-600 dark:text-gray-300 hover:text-teal-500 dark:hover:text-teal-400"
                                                    onClick={() => window.open(project.github, '_blank')}
                                                >
                                                    <Github size={16} />
                                                </Button>
                                            )}
                                            {project.demo && (
                                                <Button
                                                    variant="ghost"
                                                    size="icon"
                                                    className="h-8 w-8 text-gray-600 dark:text-gray-300 hover:text-teal-500 dark:hover:text-teal-400"
                                                    onClick={() => window.open(project.demo, '_blank')}
                                                >
                                                    <ExternalLink size={16} />
                                                </Button>
                                            )}
                                        </div>
                                    </div>
                                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                                    <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed">
                                        {project.description}
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {project.technologies.map((tech, techIndex) => (
                                            <Badge
                                                key={techIndex}
                                                variant="secondary"
                                                className="text-xs bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
                                            >
                                                {tech}
                                            </Badge>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-16">
                    <Button
                        variant="outline"
                        onClick={() => window.open('https://github.com/devEddu17x', '_blank')}
                        className="border-gray-300 dark:border-gray-700 hover:border-teal-500 dark:hover:border-teal-400"
                    >
                        Ver más proyectos
                    </Button>
                </div>
            </div>
        </section>
    )
}
