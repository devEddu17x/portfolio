"use client"

import { useState, useEffect } from "react"
import { Sun, Moon } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"

export function ThemeToggle() {
    const [mounted, setMounted] = useState(false)
    const { theme, setTheme } = useTheme()

    useEffect(() => {
        setMounted(true)
    }, [])

    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark')
    }

    return (
        <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="rounded-full"
            suppressHydrationWarning
        >
            {mounted && theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
        </Button>
    )
}
