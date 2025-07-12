"use client"

import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { navItems } from "@/lib/data"

interface HeaderProps {
    activeSection: string
    mobileMenuOpen: boolean
    setMobileMenuOpen: (open: boolean) => void
}

export function Header({
    activeSection,
    mobileMenuOpen,
    setMobileMenuOpen
}: HeaderProps) {
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
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-teal-400 to-indigo-500 flex items-center justify-center text-white font-bold">
                        E
                    </div>
                    <span className="font-bold text-xl hidden sm:block">Eddu</span>
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

                <div className="flex items-center gap-2">
                    <Button
                        variant="ghost"
                        size="icon"
                        className="md:hidden rounded-full"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </Button>

                    <Button
                        onClick={scrollToContact}
                        className="hidden md:flex bg-gradient-to-r from-teal-500 to-indigo-500 hover:from-teal-600 hover:to-indigo-600 text-white border-0"
                    >
                        Contactar
                    </Button>
                </div>
            </div>
        </header>
    )
}
