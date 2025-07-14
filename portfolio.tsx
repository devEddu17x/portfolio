"use client"

import { usePortfolio } from "@/hooks/usePortfolio"
import { Header } from "@/components/Header"
import { MobileBottomNav } from "@/components/MobileBottomNav"
import { HeroSection } from "@/components/HeroSection"
import { AboutSection } from "@/components/AboutSection"
import { SkillsSection } from "@/components/SkillsSection"
import { ProjectsSection } from "@/components/ProjectsSection"
import { EducationSection } from "@/components/EducationSection"
import { ContactSection } from "@/components/ContactSection"
import { Footer } from "@/components/Footer"

export default function Portfolio() {
  const {
    activeSection,
    setActiveSection,
  } = usePortfolio()

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-800 to-purple-900/30 text-gray-100 font-sans">

      {/* Contenido principal */}
      <div className="relative z-10">
        <Header
          activeSection={activeSection}
        />

        <main className="pt-16 pb-16 md:pb-0">
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <EducationSection />
          <ContactSection />
        </main>

        <Footer />

        {/* Mobile Bottom Navigation */}
        <MobileBottomNav activeSection={activeSection} />
      </div>
    </div>

  )
}
