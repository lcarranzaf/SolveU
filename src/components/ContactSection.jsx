"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import emailjs from "emailjs-com"

const ContactSection = ({ language }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "",
    message: "",
  })
  const [status, setStatus] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const texts = {
    es: {
      projectTitle: "¿Tienes un proyecto en mente?",
      projectDescription:
        "Cuéntanos sobre tu idea y trabajemos juntos para hacerla realidad. Estamos aquí para ayudarte a crear soluciones digitales excepcionales.",
      leftTitle: "Hablemos de tu proyecto",
      leftDescription:
        "Ya sea que necesites una aplicación web completa, una página web moderna, o ayuda con tareas específicas de programación, estoy aquí para ayudarte a alcanzar tus objetivos digitales.",
      whyChoose: "¿Por qué elegirnos?",
      feature1: "Respuesta rápida en menos de 24 horas",
      feature2: "Código limpio y bien documentado",
      feature3: "Soporte post-entrega incluido",
      feature4: "Precios competitivos y transparentes",
      rightTitle: "Envíanos un mensaje",
      fullName: "Nombre completo",
      fullNamePlaceholder: "Tu nombre",
      email: "Email",
      emailPlaceholder: "tu@email.com",
      projectType: "Tipo de proyecto",
      projectTypePlaceholder: "Selecciona el tipo de proyecto",
      webApp: "Aplicación web completa",
      website: "Página web",
      programming: "Tareas de programación",
      other: "Otro",
      message: "Mensaje",
      messagePlaceholder:
        "Cuéntanos sobre tu proyecto, objetivos, timeline y cualquier detalle que consideres importante...",
      sendButton: "Enviar mensaje",
      sending: "Enviando...",
      successMessage: "✅ Mensaje enviado con éxito. Te contactaremos pronto.",
      errorMessage: "❌ Error al enviar mensaje. Inténtalo de nuevo.",
    },
    en: {
      projectTitle: "Do you have a project in mind?",
      projectDescription:
        "Tell us about your idea and let's work together to make it a reality. We are here to help you create exceptional digital solutions.",
      leftTitle: "Let's talk about your project",
      leftDescription:
        "Whether you need a complete web application, a modern website, or help with specific programming tasks, I'm here to help you achieve your digital goals.",
      whyChoose: "Why choose us?",
      feature1: "Quick response in less than 24 hours",
      feature2: "Clean and well-documented code",
      feature3: "Post-delivery support included",
      feature4: "Competitive and transparent pricing",
      rightTitle: "Send us a message",
      fullName: "Full name",
      fullNamePlaceholder: "Your name",
      email: "Email",
      emailPlaceholder: "your@email.com",
      projectType: "Project type",
      projectTypePlaceholder: "Select project type",
      webApp: "Complete web application",
      website: "Website",
      programming: "Programming tasks",
      other: "Other",
      message: "Message",
      messagePlaceholder: "Tell us about your project, objectives, timeline and any details you consider important...",
      sendButton: "Send message",
      sending: "Sending...",
      successMessage: "✅ Message sent successfully. We'll contact you soon.",
      errorMessage: "❌ Error sending message. Please try again.",
    },
  }

  const t = texts[language]

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    setStatus("")

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID || "service_ko4ga6s", // Replace with your actual service ID
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "template_ll8ad0e", // Replace with your actual template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          project_type: formData.projectType,
          message: formData.message,
          to_name: "SolveU Team",
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "cvy_byhDfbDl6A706", // Replace with your actual public key
      )

      setStatus(t.successMessage)
      setFormData({
        name: "",
        email: "",
        projectType: "",
        message: "",
      })
    } catch (error) {
      console.error("EmailJS Error:", error)
      setStatus(t.errorMessage)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">{t.projectTitle}</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">{t.projectDescription}</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column */}
          <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{t.leftTitle}</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-8">{t.leftDescription}</p>

            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">{t.whyChoose}</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-gray-600 dark:text-gray-300">{t.feature1}</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-gray-600 dark:text-gray-300">{t.feature2}</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-gray-600 dark:text-gray-300">{t.feature3}</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-gray-600 dark:text-gray-300">{t.feature4}</span>
              </li>
            </ul>
          </div>

          {/* Right Column - Form */}
          <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">{t.rightTitle}</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">{t.fullName}</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder={t.fullNamePlaceholder}
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">{t.email}</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder={t.emailPlaceholder}
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  {t.projectType}
                </label>
                <div className="relative">
                  <select
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white appearance-none"
                  >
                    <option value="">{t.projectTypePlaceholder}</option>
                    <option value="web-app">{t.webApp}</option>
                    <option value="website">{t.website}</option>
                    <option value="programming">{t.programming}</option>
                    <option value="other">{t.other}</option>
                  </select>
                  <ChevronDown
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none"
                    size={20}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">{t.message}</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder={t.messagePlaceholder}
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-3 px-6 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-medium rounded-md transition-colors duration-200 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                {isLoading ? t.sending : t.sendButton}
              </button>

              {status && (
                <div
                  className={`text-center p-3 rounded-md ${
                    status.includes("✅")
                      ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                      : "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
                  }`}
                >
                  {status}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
