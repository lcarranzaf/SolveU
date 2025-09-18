"use client"

import { useState } from "react"
import { Sun, Moon, Globe, Menu, X } from "lucide-react"

const Header = ({ darkMode, language, toggleDarkMode, toggleLanguage }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const texts = {
    es: {
      brand: "SolveU",
      home: "Inicio",
      about: "Ofrecemos",
      contact: "Contáctanos",
    },
    en: {
      brand: "SolveU",
      home: "Home",
      about: "About",
      contact: "Contact us",
    },
  }

  const t = texts[language]

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const headerHeight = 80 // Altura del header fijo
      const elementPosition = element.offsetTop - headerHeight

      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      })
    }
    setIsMobileMenuOpen(false) // Cerrar menú móvil después del click
  }

  return (
    <header className="fixed top-0 w-full bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm shadow-lg border-b border-gray-200/20 dark:border-gray-700/20 z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <h1
              onClick={() => scrollToSection("home")}
              className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent hover:scale-105 transition-transform duration-200 cursor-pointer"
            >
              {t.brand}
            </h1>
          </div>

          <nav className="hidden md:block">
            <div className="flex items-center space-x-1">
              {[
                { text: t.home, section: "home" },
                { text: t.about, section: "ofrecemos" },
                { text: t.contact, section: "contact" },
              ].map((item, index) => (
                <button
                  key={index}
                  onClick={() => scrollToSection(item.section)}
                  className="relative px-4 py-2 text-gray-700 dark:text-gray-200 font-medium rounded-lg transition-all duration-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 group"
                >
                  {item.text}
                  <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 group-hover:w-3/4 transform -translate-x-1/2"></span>
                </button>
              ))}
            </div>
          </nav>

          <div className="flex items-center space-x-2">
            {/* Language toggle with improved design */}
            <button
              onClick={toggleLanguage}
              className="flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-200 bg-gray-100/80 dark:bg-gray-800/80 hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-200 hover:scale-105"
            >
              <Globe size={16} />
              <span className="hidden sm:inline">{language.toUpperCase()}</span>
            </button>

            {/* Dark mode toggle with improved design */}
            <button
              onClick={toggleDarkMode}
              className="p-2.5 rounded-lg bg-gray-100/80 dark:bg-gray-800/80 text-gray-700 dark:text-gray-200 hover:bg-yellow-100 dark:hover:bg-yellow-900/30 hover:text-yellow-600 dark:hover:text-yellow-400 transition-all duration-200 hover:scale-105 hover:rotate-12"
            >
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            {/* Mobile menu button */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden p-2.5 rounded-lg bg-gray-100/80 dark:bg-gray-800/80 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-200"
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"} overflow-hidden`}
        >
          <div className="py-4 space-y-2 border-t border-gray-200/20 dark:border-gray-700/20">
            {[
              { text: t.home, section: "home" },
              { text: t.about, section: "ofrecemos" },
              { text: t.contact, section: "contact" },
            ].map((item, index) => (
              <button
                key={index}
                onClick={() => scrollToSection(item.section)}
                className="block w-full text-left px-4 py-3 text-gray-700 dark:text-gray-200 font-medium rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-200 hover:translate-x-2"
              >
                {item.text}
              </button>
            ))}
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
