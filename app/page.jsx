"use client"

import { useState } from "react"
import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import ContactSection from "@/components/contact-section"
import TechnologiesSection from "@/components/technologies-section"
import ServicesSection from "@/components/services-section"
import WhatsAppButton from "@/components/whatsapp-button"

export default function Home() {
  const [language, setLanguage] = useState("es")

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background">
        <Header language={language} setLanguage={setLanguage} />
        <main>
          <HeroSection language={language} />
          <ContactSection language={language} />
          <TechnologiesSection language={language} />
          <ServicesSection language={language} />
        </main>
        <WhatsAppButton language={language} />
      </div>
    </ThemeProvider>
  )
}
