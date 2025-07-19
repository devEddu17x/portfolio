import { ReactNode } from "react"

export interface NavItem {
    id: string
    label: string
    icon: ReactNode
}

export interface SkillItem {
    name: string
    icon: ReactNode
    level: string
    type?: string
}

export interface SkillCategory {
    category: string
    items: SkillItem[]
}

export interface Project {
    title: string
    description: string
    technologies: string[]
    image: string
    github: string
    demo: string
}

export interface Education {
    period: string
    title: string
    institution: string
    description: string
}

export interface HeroSection {
    badge: string
    greeting: string
    name: string
    description: string
    archComment: string
    viewProjectsButton: string
    downloadCvButton: string
    socialLinks: {
        github: string
        linkedin: string
        email: string
    }
}

export interface AboutSection {
    badge: string
    title: string
    subtitle: string
    story: {
        title: string
        paragraphs: string[]
    }
    stats: {
        years: {
            number: string
            label: string
        }
        technologies: {
            number: string
            label: string
        }
        commits: {
            number: string
            label: string
        }
    }
}

export interface SkillsSection {
    badge: string
    title: string
    subtitle: string
}

export interface ProjectsSection {
    badge: string
    title: string
    subtitle: string
    viewMoreButton: string
}

export interface EducationSection {
    badge: string
    title: string
    subtitle: string
}

export interface ContactSection {
    badge: string
    title: string
    subtitle: string
    form: {
        nameLabel: string
        namePlaceholder: string
        emailLabel: string
        emailPlaceholder: string
        subjectLabel: string
        subjectPlaceholder: string
        messageLabel: string
        messagePlaceholder: string
        submitButton: string
        submittingButton: string
    }
    contactInfo: {
        title: string
        description: string
    }
    socialLinks: {
        title: string
        github: string
        linkedin: string
        email: string
    }
    messages: {
        success: string
        error: string
        connectionError: string
    }
}

export interface FooterSection {
    name: string
    copyright: string
    socialLinks: {
        github: string
        linkedin: string
        email: string
    }
}

export interface PortfolioData {
    navItems: NavItem[]
    skills: SkillCategory[]
    projects: Project[]
    education: Education[]
    hero: HeroSection
    about: AboutSection
    skillsSection: SkillsSection
    projectsSection: ProjectsSection
    educationSection: EducationSection
    contact: ContactSection
    footer: FooterSection
}
