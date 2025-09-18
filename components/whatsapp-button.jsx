"use client"

import { MessageCircle, ArrowUp } from "lucide-react"
import { Button } from "@/components/ui/button"

const translations = {
  es: {
    title: "Contáctanos por WhatsApp",
    subtitle: "¿Prefieres una conversación más directa?",
    description: "Escríbeme por WhatsApp y hablemos sobre tu proyecto en tiempo real.",
    button: "Abrir WhatsApp",
  },
  en: {
    title: "Contact us via WhatsApp",
    subtitle: "Do you prefer a more direct conversation?",
    description: "Write to me on WhatsApp and let's talk about your project in real time.",
    button: "Open WhatsApp",
  },
}

export default function WhatsAppButton({ language }) {
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
    <>
      {/* WhatsApp Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-foreground mb-2">{t.title}</h2>
          <p className="text-lg text-muted-foreground mb-2">{t.subtitle}</p>
          <p className="text-muted-foreground mb-8">{t.description}</p>

          <Button
            onClick={handleWhatsAppClick}
            className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 text-lg"
            size="lg"
          >
            <MessageCircle className="h-5 w-5 mr-2" />
            {t.button}
          </Button>
        </div>
      </section>

      {/* Floating Scroll to Top Button */}
      <Button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 w-12 h-12 rounded-full shadow-lg bg-muted hover:bg-muted/80 text-muted-foreground hover:text-foreground z-50"
        size="sm"
      >
        <ArrowUp className="h-5 w-5" />
      </Button>
    </>
  )
}
