"use client"

import { useState, useEffect } from "react"

export function usePortfolio() {
  const [activeSection, setActiveSection] = useState("home")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme')
      if (savedTheme) {
        return savedTheme === 'dark'
      }
      return true
    }
    return true
  })

  // Cambiar tema claro/oscuro
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark")
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove("dark")
      localStorage.setItem('theme', 'light')
    }
  }, [darkMode])

  // Cambiar sección activa basado en scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section")
      const scrollPosition = window.scrollY + 100

      sections.forEach((section) => {
        const sectionTop = section.offsetTop
        const sectionHeight = section.offsetHeight

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(section.id)
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return {
    activeSection,
    setActiveSection,
    mobileMenuOpen,
    setMobileMenuOpen,
    darkMode,
    setDarkMode,
  }
}
