"use client"

import { motion, AnimatePresence } from "framer-motion"
import { ChevronRight } from "lucide-react"
import { navItems } from "@/lib/data"

interface MobileMenuProps {
    mobileMenuOpen: boolean
    setMobileMenuOpen: (open: boolean) => void
}

export function MobileMenu({ mobileMenuOpen, setMobileMenuOpen }: MobileMenuProps) {
    return (
        <AnimatePresence>
            {mobileMenuOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="fixed inset-0 z-40 bg-white dark:bg-[#0f172a] pt-16"
                >
                    <nav className="container mx-auto px-4 py-8 flex flex-col gap-4">
                        {navItems.map((item) => (
                            <a
                                key={item.id}
                                href={`#${item.id}`}
                                className="flex items-center justify-between p-4 rounded-lg border border-gray-200 dark:border-gray-800"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                <div className="flex items-center gap-3">
                                    <div className="p-2 rounded-md bg-gray-100 dark:bg-gray-800">{item.icon}</div>
                                    <span className="font-medium">{item.label}</span>
                                </div>
                                <ChevronRight size={20} className="text-gray-400" />
                            </a>
                        ))}
                    </nav>
                </motion.div>
            )}
        </AnimatePresence>
    )
}
