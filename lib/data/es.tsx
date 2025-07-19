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
import { PortfolioData } from "./types"

export const esData: PortfolioData = {
    navItems: [
        { id: "home", label: "Inicio", icon: <Code size={18} /> },
        { id: "about", label: "Sobre mí", icon: <User size={18} /> },
        { id: "skills", label: "Habilidades", icon: <Cpu size={18} /> },
        { id: "projects", label: "Proyectos", icon: <Briefcase size={18} /> },
        { id: "education", label: "Educación", icon: <GraduationCap size={18} /> },
        { id: "contact", label: "Contacto", icon: <Mail size={18} /> },
    ],

    skills: [
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
    ],

    projects: [
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
            image: "/projects/statistical-learning.png?height=200&width=350",
            github: "https://github.com/devEddu17x/statistical-learning-football-project",
            demo: "#",
        },
        {
            title: "MCP Aprendizaje Estadístico en Fútbol",
            description: "MCP que permite la interacción de un cliente LLM (ChatGPT, VSCode) con el proyecto Aprendizaje Estadístico en Fútbol",
            technologies: ["ModelContextProtocol SDK", "Typescript"],
            image: "/projects/mcp.png?height=200&width=350",
            github: "https://github.com/devEddu17x/mcp-statistical-learning-football",
            demo: "#",
        },
    ],

    education: [
        {
            period: "En curso",
            title: "Ingenieria de Sistemas e Inteligencia Artificial",
            institution: "Universidad Privada Antenor Orrego",
            description: "Formación en desarrollo de software, tecnologías de la información e inteligencia artificial, con énfasis en gestión, desarrollo y liderazgo de servicios tecnológicos. ",
        }
    ],

    hero: {
        badge: "Desarrollador Backend",
        greeting: "¡Hola! soy",
        name: "Eddu",
        description: "Especializado en crear APIs robustas y sistemas escalables con NestJS.",
        archComment: "I use Arch btw",
        viewProjectsButton: "Ver proyectos",
        downloadCvButton: "Ver CV",
        socialLinks: {
            github: "https://github.com/devEddu17x",
            linkedin: "https://linkedin.com/in/eduardodevts",
            email: "mailto:contact@edducode.me"
        }
    },

    about: {
        badge: "Sobre mí",
        title: "Conóceme mejor",
        subtitle: "Desarrollador backend especializado en crear soluciones robustas y escalables con tecnologías modernas.",
        story: {
            title: "Mi historia",
            paragraphs: [
                "Soy un desarrollador backend con experiencia en TypeScript. Me especializo en crear APIs robustas y sistemas escalables utilizando tecnologías como NestJS, TypeORM y bases de datos relacionales y NoSQL.",
                "Mi enfoque se centra en escribir código limpio, implementar mejores prácticas y crear arquitecturas que puedan crecer con las necesidades del negocio. He desplegado en EC2 y uso Docker en todos mis desarrollos para orquestar bases de datos y servicios backend.",
                "En mis tiempos libres disfruto afinar configuraciones de bases de datos, ajustar variables en MySQL y experimentar con réplicas para mejorar el rendimiento y la tolerancia a fallos."
            ]
        },
        stats: {
            years: {
                number: "3+",
                label: "Años programando"
            },
            technologies: {
                number: "10+",
                label: "Tecnologías dominadas"
            },
            commits: {
                number: "600+",
                label: "Commits en GitHub"
            }
        }
    },

    skillsSection: {
        badge: "Habilidades",
        title: "Mis habilidades técnicas",
        subtitle: "Tecnologías y herramientas que domino para crear soluciones robustas y escalables."
    },

    projectsSection: {
        badge: "Proyectos",
        title: "Mi trabajo reciente",
        subtitle: "Aquí hay una selección de proyectos en los que he trabajado recientemente.",
        viewMoreButton: "Ver más proyectos"
    },

    educationSection: {
        badge: "Educación",
        title: "Mi formación académica",
        subtitle: "Mi trayectoria educativa y formación profesional."
    },

    contact: {
        badge: "Contacto",
        title: "¿Hablamos?",
        subtitle: "¿Interesado en trabajar juntos o tienes alguna pregunta?",
        form: {
            nameLabel: "Nombre",
            namePlaceholder: "Tu nombre",
            emailLabel: "Email",
            emailPlaceholder: "tu@email.com",
            subjectLabel: "Asunto",
            subjectPlaceholder: "Asunto del mensaje",
            messageLabel: "Mensaje",
            messagePlaceholder: "Escribe tu mensaje aquí...",
            submitButton: "Enviar mensaje",
            submittingButton: "Enviando..."
        },
        contactInfo: {
            title: "Información de contacto",
            description: "Completa el formulario y me pondré en contacto contigo lo antes posible."
        },
        socialLinks: {
            title: "Redes sociales",
            github: "https://github.com/devEddu17x",
            linkedin: "https://linkedin.com/in/eduardodevts",
            email: "mailto:contact@edducode.me"
        },
        messages: {
            success: "Mensaje enviado correctamente!",
            error: "Error al enviar el mensaje",
            connectionError: "Error de conexión"
        }
    },

    footer: {
        name: "Eddu",
        copyright: "Todos los derechos reservados.",
        socialLinks: {
            github: "https://github.com/devEddu17x",
            linkedin: "https://linkedin.com/in/eduardodevts",
            email: "mailto:contact@edducode.me"
        }
    }
}
