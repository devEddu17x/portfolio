"use client"

import { navItems } from "@/lib/data"

interface MobileBottomNavProps {
    activeSection: string
}

export function MobileBottomNav({ activeSection }: MobileBottomNavProps) {
    return (
        <nav className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-white/95 dark:bg-[#0f172a]/95 backdrop-blur-md border-t border-gray-200 dark:border-gray-800">
            <div className="grid grid-cols-6 h-16">
                {navItems.map((item) => (
                    <a
                        key={item.id}
                        href={`#${item.id}`}
                        className={`flex flex-col items-center justify-center gap-1 transition-colors ${activeSection === item.id
                                ? "text-teal-500 dark:text-teal-400 bg-teal-50 dark:bg-teal-900/20"
                                : "text-gray-600 dark:text-gray-400 hover:text-teal-500 dark:hover:text-teal-400"
                            }`}
                    >
                        <div className="text-sm">
                            {item.icon}
                        </div>
                        <span className="text-xs font-medium leading-none">
                            {item.label}
                        </span>
                    </a>
                ))}
            </div>
        </nav>
    )
}
