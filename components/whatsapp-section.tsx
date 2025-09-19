"use client"

import { MessageCircle, ArrowUp } from "lucide-react"
import { Button } from "@/components/ui/button"

interface WhatsAppSectionProps {
  language: "es" | "en"
}

const translations = {
  es: {
    title: "Contáctanos por WhatsApp",
    subtitle: "¿Prefieres una conversación más directa?",
    description: "Escríbeme por WhatsApp y hablemos sobre tu proyecto en tiempo real.",
    buttonText: "Abrir WhatsApp",
  },
  en: {
    title: "Contact us via WhatsApp",
    subtitle: "Do you prefer a more direct conversation?",
    description: "Write to me on WhatsApp and let's talk about your project in real time.",
    buttonText: "Open WhatsApp",
  },
}

export default function WhatsAppSection({ language }: WhatsAppSectionProps) {
  const t = translations[language]

  const handleWhatsAppClick = () => {
    const message =
      language === "es"
        ? "Hola! Me interesa conocer más sobre sus servicios de desarrollo web."
        : "Hello! I'm interested in learning more about your web development services."

    const whatsappUrl = `https://wa.me/1234567890?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <section id="contact" className="py-20 bg-muted relative">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{t.title}</h2>
        <h3 className="text-xl text-muted-foreground mb-4">{t.subtitle}</h3>
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">{t.description}</p>

        <Button onClick={handleWhatsAppClick} className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 text-lg">
          <MessageCircle className="w-5 h-5 mr-2" />
          {t.buttonText}
        </Button>
      </div>

      {/* Scroll to top button */}
      <Button
        onClick={scrollToTop}
        variant="outline"
        size="sm"
        className="fixed bottom-6 right-6 rounded-full p-3 shadow-lg bg-transparent"
      >
        <ArrowUp className="w-4 h-4" />
      </Button>
    </section>
  )
}
