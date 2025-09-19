import { MessageCircle } from "lucide-react"

const WhatsAppButton = ({ language }) => {
  const texts = {
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

  const t = texts[language]

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">{t.title}</h2>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-2">{t.subtitle}</p>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">{t.description}</p>

        <a
          href="https://wa.me/+593997811592"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center space-x-3 bg-green-500 hover:bg-green-600 text-white font-semibold py-4 px-8 rounded-lg transition-colors duration-300 text-lg"
        >
          <MessageCircle size={24} />
          <span>{t.button}</span>
        </a>
      </div>
    </section>
  )
}

export default WhatsAppButton
