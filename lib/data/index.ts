import { PortfolioData } from "./types"
import { esData } from "./es"

export type Language = "es"

const dataMap: Record<Language, PortfolioData> = {
    es: esData,
}

export function getPortfolioData(language: Language = "es"): PortfolioData {
    return dataMap[language] || dataMap.es
}

// Exportaciones para compatibilidad con el código existente
export const navItems = esData.navItems
export const skills = esData.skills
export const projects = esData.projects
export const education = esData.education

// Re-exportar tipos
export type * from "./types"
