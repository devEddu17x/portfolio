"use client"

import { useState, useEffect, createContext, useContext, ReactNode } from "react"
import { Language } from "@/lib/data"

interface LanguageContextType {
    language: Language
    setLanguage: (lang: Language) => void
    toggleLanguage: () => void
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

interface LanguageProviderProps {
    children: ReactNode
}

export function LanguageProvider({ children }: LanguageProviderProps) {
    const [language, setLanguageState] = useState<Language>("es")

    useEffect(() => {
        // Cargar idioma guardado del localStorage
        const savedLanguage = localStorage.getItem("portfolio-language") as Language
        if (savedLanguage && (savedLanguage === "es" || savedLanguage === "en")) {
            setLanguageState(savedLanguage)
        }
    }, [])

    const setLanguage = (lang: Language) => {
        setLanguageState(lang)
        localStorage.setItem("portfolio-language", lang)
    }

    const toggleLanguage = () => {
        const newLanguage = language === "es" ? "en" : "es"
        setLanguage(newLanguage)
    }

    return (
        <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage }}>
            {children}
        </LanguageContext.Provider>
    )
}

export function useLanguage() {
    const context = useContext(LanguageContext)
    if (context === undefined) {
        throw new Error("useLanguage must be used within a LanguageProvider")
    }
    return context
}
