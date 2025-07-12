"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { education } from "@/lib/data"

export function EducationSection() {
    return (
        <section id="education" className="py-20 bg-gray-100 dark:bg-gray-900/50">
            <div className="container mx-auto px-4">
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <Badge className="mb-4 bg-teal-500/10 text-teal-500 dark:bg-teal-400/10 dark:text-teal-400">
                        Educación
                    </Badge>
                    <h2 className="text-3xl font-bold mb-4">Mi formación académica</h2>
                    <p className="text-gray-600 dark:text-gray-300">Mi trayectoria educativa y formación profesional.</p>
                </div>

                <div className="max-w-4xl mx-auto">
                    {education.map((item, index) => (
                        <div
                            key={index}
                            className="flex gap-6 mb-12 last:mb-0"
                        >
                            <div className="hidden sm:block pt-1">
                                <div className="w-12 h-12 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 flex items-center justify-center shadow-sm">
                                    <div className="w-3 h-3 rounded-full bg-gradient-to-r from-teal-500 to-indigo-500"></div>
                                </div>
                                {index !== education.length - 1 && (
                                    <div className="w-0.5 h-full bg-gray-200 dark:bg-gray-700 ml-6 mt-2"></div>
                                )}
                            </div>

                            <Card className="flex-1 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
                                <CardContent className="p-6">
                                    <Badge className="mb-2 bg-indigo-500/10 text-indigo-500 dark:bg-indigo-400/10 dark:text-indigo-400">
                                        {item.period}
                                    </Badge>
                                    <h3 className="text-xl font-semibold mb-1">{item.title}</h3>
                                    <p className="text-gray-500 dark:text-gray-400 mb-4">{item.institution}</p>
                                    <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
                                </CardContent>
                            </Card>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
