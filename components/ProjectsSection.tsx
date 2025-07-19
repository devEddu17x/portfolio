"use client"

import { Github, ExternalLink, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { getPortfolioData } from "@/lib/data"

export function ProjectsSection() {
    const data = getPortfolioData("es")
    const { projects, projectsSection } = data

    return (
        <section id="projects" className="py-20">
            <div className="container mx-auto px-4">
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <Badge className="mb-4 bg-teal-500/10 text-teal-500 dark:bg-teal-400/10 dark:text-teal-400">
                        {projectsSection.badge}
                    </Badge>
                    <h2 className="text-3xl font-bold mb-4">{projectsSection.title}</h2>
                    <p className="text-gray-600 dark:text-gray-300">
                        {projectsSection.subtitle}
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div key={index} className="group">
                            <Card className="overflow-hidden h-full bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow">
                                <div className="relative">
                                    <img
                                        src={project.image || "/placeholder.svg"}
                                        alt={project.title}
                                        className="w-full h-48 object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-between p-4">
                                        <div className="flex gap-3">
                                            {project.github && (
                                                <a
                                                    href={project.github}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="p-2 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-colors"
                                                >
                                                    <Github size={18} className="text-white" />
                                                </a>
                                            )}
                                            {project.demo && (
                                                <a
                                                    href={project.demo}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="p-2 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-colors"
                                                >
                                                    <ExternalLink size={18} className="text-white" />
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </div>
                                <CardContent className="p-6">
                                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                                    <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                                    <div className="flex flex-wrap gap-2">
                                        {project.technologies.map((tech, techIndex) => (
                                            <Badge
                                                key={techIndex}
                                                variant="outline"
                                                className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 border-0"
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

                <div className="text-center mt-12">
                    <Button
                        variant="outline"
                        onClick={() => window.open('https://github.com/devEddu17x', '_blank')}
                        className="bg-gradient-to-r from-teal-500 to-indigo-500 hover:from-teal-600 hover:to-indigo-600 text-white border-0 px-8 py-3"
                    >
                        {projectsSection.viewMoreButton} <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                </div>
            </div>
        </section>
    )
}
