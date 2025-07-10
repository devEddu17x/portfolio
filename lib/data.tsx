import {
    Code,
    User,
    Briefcase,
    GraduationCap,
    Mail,
} from "lucide-react"

export const navItems = [
    { id: "home", label: "Inicio", icon: <Code size={18} /> },
    { id: "about", label: "Sobre mí", icon: <User size={18} /> },
    { id: "projects", label: "Proyectos", icon: <Briefcase size={18} /> },
    { id: "education", label: "Educación", icon: <GraduationCap size={18} /> },
    { id: "contact", label: "Contacto", icon: <Mail size={18} /> },
]

export const skills = [
    { category: "Frontend", items: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"] },
    { category: "Backend", items: ["Node.js", "Express", "MongoDB", "SQL"] },
    { category: "Herramientas", items: ["Git", "GitHub", "VS Code", "Figma", "Responsive Design"] },
]

export const projects = [
    {
        title: "E-commerce App",
        description: "Una aplicación de comercio electrónico con carrito de compras y pasarela de pago.",
        technologies: ["React", "Node.js", "MongoDB"],
        image: "/placeholder.svg?height=200&width=350",
        github: "#",
        demo: "#",
    },
    {
        title: "Task Manager",
        description: "Aplicación para gestionar tareas diarias con funcionalidad de arrastrar y soltar.",
        technologies: ["JavaScript", "HTML", "CSS"],
        image: "/placeholder.svg?height=200&width=350",
        github: "#",
        demo: "#",
    },
    {
        title: "Weather App",
        description: "Aplicación que muestra el clima actual y pronóstico utilizando una API externa.",
        technologies: ["React", "API REST", "Tailwind CSS"],
        image: "/placeholder.svg?height=200&width=350",
        github: "#",
        demo: "#",
    },
]

export const education = [
    {
        period: "2020 - 2023",
        title: "Grado en Desarrollo Web",
        institution: "Universidad Ejemplo",
        description: "Estudios centrados en desarrollo web, programación y diseño de interfaces.",
    },
    {
        period: "2023",
        title: "Bootcamp de Desarrollo Frontend",
        institution: "Academia Código",
        description: "Formación intensiva en React, JavaScript moderno y desarrollo de aplicaciones web.",
    },
    {
        period: "En curso",
        title: "Certificación en UX/UI Design",
        institution: "Plataforma Online",
        description: "Aprendiendo principios de diseño de experiencia de usuario e interfaces.",
    },
]
