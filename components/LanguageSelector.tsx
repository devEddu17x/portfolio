"use client"

import { Globe, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useLanguage } from "@/hooks/useLanguageContext"

const languages = {
    es: {
        label: "Español",
        flag: "🇪🇸",
        short: "ES"
    },
    en: {
        label: "English",
        flag: "🇺🇸",
        short: "EN"
    }
}

export function LanguageSelector() {
    const { language, setLanguage } = useLanguage()
    const currentLang = languages[language]

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button
                    variant="outline"
                    size="sm"
                    className="hidden md:flex items-center gap-2 bg-white/50 dark:bg-gray-800/50 border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                >
                    <Globe size={16} className="text-gray-600 dark:text-gray-400" />
                    <span className="text-sm font-medium">{currentLang.short}</span>
                    <ChevronDown size={14} className="text-gray-600 dark:text-gray-400" />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
                align="end"
                className="min-w-[140px] bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700"
            >
                {Object.entries(languages).map(([key, lang]) => (
                    <DropdownMenuItem
                        key={key}
                        onClick={() => setLanguage(key as "es" | "en")}
                        className={`flex items-center gap-3 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 ${language === key ? "bg-teal-50 dark:bg-teal-900/20 text-teal-600 dark:text-teal-400" : ""
                            }`}
                    >
                        <span className="text-lg">{lang.flag}</span>
                        <span className="text-sm font-medium">{lang.label}</span>
                        {language === key && (
                            <div className="ml-auto w-2 h-2 rounded-full bg-teal-500" />
                        )}
                    </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
