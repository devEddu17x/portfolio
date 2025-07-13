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
        title: "Movie Reservation System",
        description: "API robusta tanto para operaciones administrativas como de cara al cliente, con funciones que incluyen autenticación segura, reserva temporal de asientos y procesamiento de pagos a través de PayPal",
        technologies: ["NestJS", "TypeORM", "Postgres", "Docker"],
        image: "/projects/movie-reservation-system.png?height=200&width=350",
        github: "https://github.com/devEddu17x/movie-reservation-system",
        demo: "#",
    },
    {
        title: "Aprendizaje Estadístico en Fútbol",
        description: "Proyecto de análisis estadístico centrado en el procesamiento y visualización de datos de fútbol para realizar predicciones de resultados entre encuentros en la LaLiga. Proporciona una API REST",
        technologies: ["Python", "PyWebView", "Pandas"],
        image: "/placeholder.svg?height=200&width=350",
        github: "https://github.com/devEddu17x/statistical-learning-football-project",
        demo: "#",
    },
    {
        title: "MCP Aprendizaje Estadístico en Fútbol",
        description: "MCP que permite la interacción de un cliente LLM (ChatGPT, VSCode) con el proyecto Aprendizaje Estadístico en Fútbol",
        technologies: ["ModelContextProtocol SDK", "Typescript"],
        image: "/placeholder.svg?height=200&width=350",
        github: "https://github.com/devEddu17x/mcp-statistical-learning-football",
        demo: "#",
    },
]

export const education = [
    {
        period: "En curso",
        title: "Ingenieria de Sistemas e Inteligencia Artificial",
        institution: "Universidad Privada Antenor Orrego",
        description: "Formación en desarrollo de software, tecnologías de la información e inteligencia artificial, con énfasis en gestión, desarrollo y liderazgo de servicios tecnológicos. ",
    }
]
