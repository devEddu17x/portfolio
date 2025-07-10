import {
    Code,
    User,
    Briefcase,
    GraduationCap,
    Mail,
    Cpu,
} from "lucide-react"
import {
    SiTypescript,
    SiMysql,
    SiMongodb,
    SiNestjs,
    SiTypeorm,
    SiNginx
} from "react-icons/si"
import {
    FaJava,
    FaPython,
    FaAws,
    FaCloudflare,
    FaDocker
} from "react-icons/fa"
import {
    BiLogoPostgresql
} from "react-icons/bi"
import {
    GrOracle
} from "react-icons/gr"

export const navItems = [
    { id: "home", label: "Inicio", icon: <Code size={18} /> },
    { id: "about", label: "Sobre mí", icon: <User size={18} /> },
    { id: "skills", label: "Habilidades", icon: <Cpu size={18} /> },
    { id: "projects", label: "Proyectos", icon: <Briefcase size={18} /> },
    { id: "education", label: "Educación", icon: <GraduationCap size={18} /> },
    { id: "contact", label: "Contacto", icon: <Mail size={18} /> },
]

export const skills = [
    {
        category: "Lenguajes",
        items: [
            { name: "TypeScript", icon: <SiTypescript className="text-blue-600" />, level: "Avanzado" },
            { name: "Java", icon: <FaJava className="text-red-500" />, level: "Intermedio" },
            { name: "Python", icon: <FaPython className="text-yellow-500" />, level: "Intermedio" },
        ]
    },
    {
        category: "Bases de Datos",
        items: [
            { name: "MySQL", icon: <SiMysql className="text-blue-600" />, level: "Avanzado", type: "SQL" },
            { name: "PostgreSQL", icon: <BiLogoPostgresql className="text-blue-500" />, level: "Intermedio", type: "SQL" },
            { name: "Oracle", icon: <GrOracle className="text-red-600" />, level: "Intermedio", type: "SQL" },
            { name: "MongoDB", icon: <SiMongodb className="text-green-500" />, level: "Intermedio", type: "NoSQL" },
        ]
    },
    {
        category: "Frameworks y Librerías",
        items: [
            { name: "NestJS", icon: <SiNestjs className="text-red-500" />, level: "Avanzado" },
            { name: "TypeORM", icon: <SiTypeorm className="text-orange-500" />, level: "Avanzado" },
        ]
    },
    {
        category: "Herramientas y Plataformas",
        items: [
            { name: "Docker", icon: <FaDocker className="text-blue-500" />, level: "Avanzado" },
            { name: "AWS", icon: <FaAws className="text-orange-500" />, level: "Iniciando" },
            { name: "Cloudflare", icon: <FaCloudflare className="text-orange-400" />, level: "Iniciando" },
            { name: "Nginx", icon: <SiNginx className="text-green-600" />, level: "Iniciando" },
        ]
    }
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
