"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { getPortfolioData } from "@/lib/data"

export function SkillsSection() {
    const data = getPortfolioData("es")
    const { skills, skillsSection } = data

    return (
        <section id="skills" className="py-20">
            <div className="container mx-auto px-4">
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <Badge className="mb-4 bg-teal-500/10 text-teal-500 dark:bg-teal-400/10 dark:text-teal-400">
                        {skillsSection.badge}
                    </Badge>
                    <h2 className="text-3xl font-bold mb-4">{skillsSection.title}</h2>
                    <p className="text-gray-600 dark:text-gray-300">
                        {skillsSection.subtitle}
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {skills.map((skillCategory, categoryIndex) => (
                        <Card key={categoryIndex} className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
                            <CardContent className="p-6">
                                <h3 className="text-xl font-semibold mb-6 text-center">{skillCategory.category}</h3>
                                <div className="space-y-4">
                                    {skillCategory.items.map((skill, skillIndex) => (
                                        <div key={skillIndex} className="flex items-center gap-3 p-3 rounded-lg bg-gray-50 dark:bg-gray-700/50 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                                            <div className="text-2xl">
                                                {skill.icon}
                                            </div>
                                            <div className="flex-1">
                                                <div className="font-medium text-sm">{skill.name}</div>
                                                <div className="text-xs text-gray-500 dark:text-gray-400">
                                                    {skill.level}
                                                    {'type' in skill && skill.type && (
                                                        <span className="ml-2 px-1.5 py-0.5 bg-gray-200 dark:bg-gray-600 rounded text-xs">
                                                            {skill.type}
                                                        </span>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}
