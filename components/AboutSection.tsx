"use client"

import { Badge } from "@/components/ui/badge"
import { getPortfolioData } from "@/lib/data"
import { useLanguage } from "@/hooks/useLanguageContext"

export function AboutSection() {
    const { language } = useLanguage()
    const data = getPortfolioData(language)
    const { about } = data

    return (
        <section id="about" className="py-20 bg-gray-100 dark:bg-gray-900/50">
            <div className="container mx-auto px-4">
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <Badge className="mb-4 bg-teal-500/10 text-teal-500 dark:bg-teal-400/10 dark:text-teal-400">
                        {about.badge}
                    </Badge>
                    <h2 className="text-3xl font-bold mb-4">{about.title}</h2>
                    <p className="text-gray-600 dark:text-gray-300">
                        {about.subtitle}
                    </p>
                </div>

                <div className="max-w-4xl mx-auto">
                    <div className="grid md:grid-cols-3 gap-8 items-center">
                        <div className="md:col-span-2">
                            <h3 className="text-2xl font-semibold mb-4">{about.story.title}</h3>
                            {about.story.paragraphs.map((paragraph, index) => (
                                <p key={index} className="text-gray-600 dark:text-gray-300 mb-6">
                                    {paragraph}
                                </p>
                            ))}
                        </div>

                        <div className="space-y-4">
                            <div className="p-6 rounded-lg bg-white dark:bg-gray-800 shadow-sm text-center">
                                <div className="text-3xl font-bold text-teal-500 dark:text-teal-400 mb-1">{about.stats.years.number}</div>
                                <div className="text-gray-600 dark:text-gray-300">{about.stats.years.label}</div>
                            </div>
                            <div className="p-6 rounded-lg bg-white dark:bg-gray-800 shadow-sm text-center">
                                <div className="text-3xl font-bold text-indigo-500 dark:text-indigo-400 mb-1">{about.stats.technologies.number}</div>
                                <div className="text-gray-600 dark:text-gray-300">{about.stats.technologies.label}</div>
                            </div>
                            <div className="p-6 rounded-lg bg-white dark:bg-gray-800 shadow-sm text-center">
                                <div className="text-3xl font-bold text-orange-500 dark:text-orange-400 mb-1">{about.stats.commits.number}</div>
                                <div className="text-gray-600 dark:text-gray-300">{about.stats.commits.label}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
