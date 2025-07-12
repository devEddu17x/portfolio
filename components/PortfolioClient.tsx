"use client"

import { useEffect, useState } from "react"
import { usePortfolio } from "@/hooks/usePortfolio"
import { Header } from "@/components/Header"
import { MobileMenu } from "@/components/MobileMenu"
import { HeroSection } from "@/components/HeroSection"
import { AboutSection } from "@/components/AboutSection"
import { SkillsSection } from "@/components/SkillsSection"
import { ProjectsSection } from "@/components/ProjectsSection"
import { EducationSection } from "@/components/EducationSection"
import { ContactSection } from "@/components/ContactSection"
import { Footer } from "@/components/Footer"

export function PortfolioClient() {
    const [isHydrated, setIsHydrated] = useState(false)
    const {
        activeSection,
        mobileMenuOpen,
        setMobileMenuOpen,
    } = usePortfolio()

    useEffect(() => {
        setIsHydrated(true)
    }, [])

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-[#0f172a] text-gray-900 dark:text-gray-100 font-sans transition-colors duration-300">
            <Header
                activeSection={activeSection}
                mobileMenuOpen={mobileMenuOpen}
                setMobileMenuOpen={setMobileMenuOpen}
            />

            <MobileMenu
                mobileMenuOpen={mobileMenuOpen}
                setMobileMenuOpen={setMobileMenuOpen}
            />

            <main className="pt-16">
                <HeroSection />
                <AboutSection />
                <SkillsSection />
                <ProjectsSection />
                <EducationSection />
                <ContactSection />
            </main>

            <Footer />
        </div>
    )
}
