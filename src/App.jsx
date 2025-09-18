"use client"

import { useState } from "react"
import Header from "./components/Header"
import HeroSection from "./components/HeroSection"
import ContactSection from "./components/ContactSection"
import TechnologiesSection from "./components/TechnologiesSection"
import ServicesSection from "./components/ServicesSection"
import WhatsAppButton from "./components/WhatsAppButton"

function App() {
  const [darkMode, setDarkMode] = useState(false)
  const [language, setLanguage] = useState("es")

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
    document.documentElement.classList.toggle("dark")
  }

  const toggleLanguage = () => {
    setLanguage(language === "es" ? "en" : "es")
  }

  return (
    <div className={`min-h-screen bg-app-gradient text-white ${darkMode ? "dark" : ""}`}>
      <Header darkMode={darkMode} language={language} toggleDarkMode={toggleDarkMode} toggleLanguage={toggleLanguage} />
      <main>
        <HeroSection language={language} />
        <TechnologiesSection language={language} />
        <ServicesSection language={language} />
        <ContactSection language={language} />
        
      </main>
      <WhatsAppButton language={language} />
    </div>
  )
}

export default App
