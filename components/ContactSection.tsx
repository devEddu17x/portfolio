"use client"

import { useState } from "react"
import { Mail, Github, Linkedin, Send, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function ContactSection() {
    const [formData, setFormData] = useState({
        nombre: '',
        email: '',
        asunto: '',
        mensaje: ''
    })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error', message: string } | null>(null)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)
        setSubmitStatus(null)

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            })

            const result = await response.json()

            if (response.ok) {
                setSubmitStatus({ type: 'success', message: 'Mensaje enviado correctamente!' })
                setFormData({ nombre: '', email: '', asunto: '', mensaje: '' })
            } else {
                setSubmitStatus({ type: 'error', message: result.error || 'Error al enviar el mensaje' })
            }
        } catch (error) {
            setSubmitStatus({ type: 'error', message: 'Error de conexión' })
        } finally {
            setIsSubmitting(false)
        }
    }
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
                            </div>

                            <div className="md:col-span-3 p-8">
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    {submitStatus && (
                                        <div className={`p-4 rounded-md ${submitStatus.type === 'success'
                                            ? 'bg-green-50 dark:bg-green-900/20 text-green-800 dark:text-green-300 border border-green-200 dark:border-green-800'
                                            : 'bg-red-50 dark:bg-red-900/20 text-red-800 dark:text-red-300 border border-red-200 dark:border-red-800'
                                            }`}>
                                            {submitStatus.message}
                                        </div>
                                    )}

                                    <div className="grid grid-cols-2 gap-6">
                                        <div>
                                            <label
                                                htmlFor="nombre"
                                                className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300"
                                            >
                                                Nombre
                                            </label>
                                            <input
                                                type="text"
                                                id="nombre"
                                                name="nombre"
                                                value={formData.nombre}
                                                onChange={handleChange}
                                                required
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
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-teal-500 dark:focus:ring-teal-400"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label
                                            htmlFor="asunto"
                                            className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300"
                                        >
                                            Asunto
                                        </label>
                                        <input
                                            type="text"
                                            id="asunto"
                                            name="asunto"
                                            value={formData.asunto}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-teal-500 dark:focus:ring-teal-400"
                                        />
                                    </div>
                                    <div>
                                        <label
                                            htmlFor="mensaje"
                                            className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300"
                                        >
                                            Mensaje
                                        </label>
                                        <textarea
                                            id="mensaje"
                                            name="mensaje"
                                            rows={5}
                                            value={formData.mensaje}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-teal-500 dark:focus:ring-teal-400"
                                        />
                                    </div>
                                    <Button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full bg-gradient-to-r from-teal-500 to-indigo-500 hover:from-teal-600 hover:to-indigo-600 text-white border-0 disabled:opacity-50"
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                                Enviando...
                                            </>
                                        ) : (
                                            <>
                                                <Send className="mr-2 h-4 w-4" />
                                                Enviar mensaje
                                            </>
                                        )}
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
