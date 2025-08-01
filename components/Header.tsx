"use client"

import { Button } from "@/components/ui/button"
import { getPortfolioData } from "@/lib/data"
import { useLanguage } from "@/hooks/useLanguageContext"
import { LanguageSelector } from "@/components/LanguageSelector"

interface HeaderProps {
    activeSection: string
}

export function Header({ activeSection }: HeaderProps) {
    const { language } = useLanguage()
    const data = getPortfolioData(language)
    const { navItems, hero } = data

    const scrollToContact = () => {
        const contactSection = document.getElementById('contact')
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-[#0f172a]/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
            <div className="container mx-auto px-4 flex justify-between items-center h-16">
                <div className="flex items-center gap-2">
                    <div className="w-10 h-10 overflow-hidden group relative">
                        <img
                            src="/arch.webp"
                            alt="Arch Linux Logo"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <span className="font-bold text-xl">Eddu</span>
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-1">
                    {navItems.map((item) => (
                        <a
                            key={item.id}
                            href={`#${item.id}`}
                            className={`px-4 py-2 rounded-md transition-colors ${activeSection === item.id
                                ? "bg-gray-100 dark:bg-gray-800 text-teal-500 dark:text-teal-400"
                                : "hover:bg-gray-100 dark:hover:bg-gray-800/50"
                                }`}
                        >
                            {item.label}
                        </a>
                    ))}
                </nav>

                {/* Desktop Actions */}
                <div className="hidden md:flex items-center gap-3">
                    <LanguageSelector />
                    <Button
                        onClick={scrollToContact}
                        className="bg-gradient-to-r from-teal-500 to-indigo-500 hover:from-teal-600 hover:to-indigo-600 text-white border-0"
                    >
                        {hero.contactButton}
                    </Button>
                </div>

                {/* Mobile Language Selector */}
                <div className="md:hidden">
                    <LanguageSelector />
                </div>
            </div>
        </header>
    )
}
