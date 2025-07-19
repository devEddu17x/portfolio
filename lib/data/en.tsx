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

export const enData: PortfolioData = {
    navItems: [
        { id: "home", label: "Home", icon: <Code size={18} /> },
        { id: "about", label: "About Me", icon: <User size={18} /> },
        { id: "skills", label: "Skills", icon: <Cpu size={18} /> },
        { id: "projects", label: "Projects", icon: <Briefcase size={18} /> },
        { id: "education", label: "Education", icon: <GraduationCap size={18} /> },
        { id: "contact", label: "Contact", icon: <Mail size={18} /> },
    ],

    skills: [
        {
            category: "Languages",
            items: [
                { name: "TypeScript", icon: <SiTypescript className="text-blue-600" />, level: "Advanced" },
                { name: "Java", icon: <FaJava className="text-red-500" />, level: "Intermediate" },
                { name: "Python", icon: <FaPython className="text-yellow-500" />, level: "Intermediate" },
            ]
        },
        {
            category: "Databases",
            items: [
                { name: "MySQL", icon: <SiMysql className="text-blue-600" />, level: "Advanced", type: "SQL" },
                { name: "PostgreSQL", icon: <BiLogoPostgresql className="text-blue-500" />, level: "Intermediate", type: "SQL" },
                { name: "Oracle", icon: <GrOracle className="text-red-600" />, level: "Intermediate", type: "SQL" },
                { name: "MongoDB", icon: <SiMongodb className="text-green-500" />, level: "Intermediate", type: "NoSQL" },
            ]
        },
        {
            category: "Frameworks & Libraries",
            items: [
                { name: "NestJS", icon: <SiNestjs className="text-red-500" />, level: "Advanced" },
                { name: "TypeORM", icon: <SiTypeorm className="text-orange-500" />, level: "Advanced" },
            ]
        },
        {
            category: "Tools & Platforms",
            items: [
                { name: "Docker", icon: <FaDocker className="text-blue-500" />, level: "Advanced" },
                { name: "AWS", icon: <FaAws className="text-orange-500" />, level: "Beginner" },
                { name: "Cloudflare", icon: <FaCloudflare className="text-orange-400" />, level: "Beginner" },
                { name: "Nginx", icon: <SiNginx className="text-green-600" />, level: "Beginner" },
            ]
        }
    ],

    projects: [
        {
            title: "Movie Reservation System",
            description: "Robust API for both administrative and customer-facing operations, featuring secure authentication, temporary seat reservation, and payment processing via PayPal",
            technologies: ["NestJS", "TypeORM", "Postgres", "Docker"],
            image: "/projects/movie-reservation-system.png?height=200&width=350",
            github: "https://github.com/devEddu17x/movie-reservation-system",
            demo: "#",
        },
        {
            title: "Statistical Learning in Football",
            description: "Statistical analysis project focused on processing and visualizing football data to predict match outcomes in LaLiga. Provides a REST API",
            technologies: ["Python", "PyWebView", "Pandas"],
            image: "/projects/statistical-learning.png?height=200&width=350",
            github: "https://github.com/devEddu17x/statistical-learning-football-project",
            demo: "#",
        },
        {
            title: "MCP Statistical Learning in Football",
            description: "MCP that enables the interaction of an LLM client (ChatGPT, VSCode) with the Statistical Learning in Football project",
            technologies: ["ModelContextProtocol SDK", "Typescript"],
            image: "/projects/mcp.png?height=200&width=350",
            github: "https://github.com/devEddu17x/mcp-statistical-learning-football",
            demo: "#",
        },
    ],

    education: [
        {
            period: "Ongoing",
            title: "Systems Engineering and Artificial Intelligence",
            institution: "Universidad Privada Antenor Orrego",
            description: "Training in software development, information technologies, and artificial intelligence, with an emphasis on management, development, and leadership of technology services.",
        }
    ],

    hero: {
        badge: "Backend Developer",
        greeting: "Hi! I'm",
        name: "Eddu",
        description: "Specialized in building robust APIs and scalable systems with NestJS.",
        archComment: "I use Arch btw",
        viewProjectsButton: "View Projects",
        downloadCvButton: "View CV",
        contactButton: "Contact",
        socialLinks: {
            github: "https://github.com/devEddu17x",
            linkedin: "https://linkedin.com/in/eduardodevts",
            email: "mailto:contact@edducode.me"
        }
    },

    about: {
        badge: "About Me",
        title: "Get to Know Me",
        subtitle: "Backend developer specialized in creating robust and scalable solutions with modern technologies.",
        story: {
            title: "My Story",
            paragraphs: [
                "I am a backend developer experienced in TypeScript. I specialize in building robust APIs and scalable systems using technologies like NestJS, TypeORM, and relational and NoSQL databases.",
                "My focus is on writing clean code, implementing best practices, and designing architectures that can grow with business needs. I have deployed on EC2 and use Docker in all my developments to orchestrate databases and backend services.",
                "In my free time, I enjoy fine-tuning database configurations, adjusting variables in MySQL, and experimenting with replicas to improve performance and fault tolerance."
            ]
        },
        stats: {
            years: {
                number: "3+",
                label: "Years Coding"
            },
            technologies: {
                number: "10+",
                label: "Technologies Mastered"
            },
            commits: {
                number: "600+",
                label: "GitHub Commits"
            }
        }
    },

    skillsSection: {
        badge: "Skills",
        title: "My Technical Skills",
        subtitle: "Technologies and tools I master to build robust and scalable solutions."
    },

    projectsSection: {
        badge: "Projects",
        title: "My Recent Work",
        subtitle: "Here is a selection of projects I've worked on recently.",
        viewMoreButton: "View More Projects"
    },

    educationSection: {
        badge: "Education",
        title: "My Academic Background",
        subtitle: "My educational background and professional training."
    },

    contact: {
        badge: "Contact",
        title: "Let's Talk?",
        subtitle: "Interested in working together or have any questions?",
        form: {
            nameLabel: "Name",
            namePlaceholder: "Your Name",
            emailLabel: "Email",
            emailPlaceholder: "you@example.com",
            subjectLabel: "Subject",
            subjectPlaceholder: "Subject of the message",
            messageLabel: "Message",
            messagePlaceholder: "Write your message here...",
            submitButton: "Send Message",
            submittingButton: "Sending..."
        },
        contactInfo: {
            title: "Contact Information",
            description: "Fill out the form and I'll get back to you as soon as possible."
        },
        socialLinks: {
            title: "Social Links",
            github: "https://github.com/devEddu17x",
            linkedin: "https://linkedin.com/in/eduardodevts",
            email: "mailto:contact@edducode.me"
        },
        messages: {
            success: "Message sent successfully!",
            error: "Error sending message",
            connectionError: "Connection Error"
        }
    },

    footer: {
        name: "Eddu",
        copyright: "All rights reserved.",
        socialLinks: {
            github: "https://github.com/devEddu17x",
            linkedin: "https://linkedin.com/in/eduardodevts",
            email: "mailto:contact@edducode.me"
        }
    }
};
