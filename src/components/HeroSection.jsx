"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const HeroSection = ({ language }) => {
  const texts = {
    es: {
      title: "Impulsa tu negocio con una página web profesional",
      description:
        "Creamos sitios web únicos, rápidos y totalmente adaptados a tus necesidades. Haz que tu marca destaque en internet y atrae más clientes con un diseño profesional.",
    },
    en: {
      title: "Boost your business with a professional website",
      description:
        "We create unique, fast websites fully tailored to your needs. Make your brand stand out online and attract more customers with professional design.",
    },
  }

  const t = texts[language]

  const images = [
    import.meta.env.BASE_URL + "Captura 1.png",
    import.meta.env.BASE_URL + "Captura 2.png",
    import.meta.env.BASE_URL + "Captura 3.png",
    import.meta.env.BASE_URL + "Captura 4.png",
    import.meta.env.BASE_URL + "Captura 5.png",
    import.meta.env.BASE_URL + "Captura 6.png",
    import.meta.env.BASE_URL + "Captura 7.png",
  ]
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1))
    }, 4000)
    return () => clearInterval(timer)
  }, [images.length])

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  }

  const nextSlide = () => {
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1))
  }

  return (
    <section
      id="inicio"
      className="relative bg-white dark:bg-gray-900 pt-20 pb-10 lg:pb-14 overflow-hidden"
    >
      {/* Fondos suaves */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50/50 via-white to-blue-50/30 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.05),transparent_50%)] dark:bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent_50%)]"></div>

      {/* Contenido */}
      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        {/* Texto */}
        <div className="text-left space-y-6">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
            {t.title}
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            {t.description}
          </p>
        </div>

        {/* Carrusel */}
        <div className="relative ">
          <div className="relative w-full h-72 md:h-80 lg:h-96 overflow-hidden rounded-xl shadow-xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
            <img
              src={images[current] || "/placeholder.svg"}
              alt={`Proyecto ${current + 1}`}
              className="max-w-full max-h-full object-contain transition-all duration-700 ease-in-out"
            />

            {/* Botones navegación */}
            <button
              onClick={prevSlide}
              className="absolute top-1/2 left-3 -translate-y-1/2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-2 rounded-full shadow-md hover:bg-white dark:hover:bg-gray-800 hover:scale-105 transition-all duration-200"
            >
              <ChevronLeft className="w-4 h-4 text-gray-700 dark:text-gray-300" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute top-1/2 right-3 -translate-y-1/2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-2 rounded-full shadow-md hover:bg-white dark:hover:bg-gray-800 hover:scale-105 transition-all duration-200"
            >
              <ChevronRight className="w-4 h-4 text-gray-700 dark:text-gray-300" />
            </button>

            {/* Indicadores */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    current === index
                      ? "bg-blue-500 scale-125"
                      : "bg-white/60 hover:bg-white/80"
                  }`}
                  onClick={() => setCurrent(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
