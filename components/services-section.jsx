import { Globe, Code, Wrench } from "lucide-react"
import { motion } from "framer-motion"

const ServicesSection = ({ language }) => {
  const texts = {
    es: {
      title: "Nuestros servicios",
      subtitle:
        "Ofrecemos soluciones modernas y escalables para impulsar tu negocio digital.",
      service1: {
        title: "Aplicación web completa",
        description:
          "Desarrollo de aplicaciones web robustas y escalables con tecnologías modernas. Desde la arquitectura hasta la implementación, creo soluciones completas que impulsan tu negocio.",
        includes: "Incluye:",
        features: [
          "Frontend & Backend",
          "Base de datos",
          "Autenticación",
          "API REST",
          "Responsive Design",
        ],
      },
      service2: {
        title: "Páginas web",
        description:
          "Diseño y desarrollo de sitios web profesionales, landing pages y portfolios. Optimizados para SEO y con diseño responsive que se adapta a cualquier dispositivo.",
        includes: "Incluye:",
        features: [
          "Diseño Responsive",
          "SEO Optimizado",
          "Carga Rápida",
          "CMS Integrado",
          "Analytics",
        ],
      },
      service3: {
        title: "Tareas de programación",
        description:
          "Soluciones específicas para tus necesidades técnicas. Desde automatización de procesos hasta integración de APIs y optimización de código existente.",
        includes: "Incluye:",
        features: [
          "Automatización",
          "Integración APIs",
          "Optimización",
          "Debugging",
          "Consultoría",
        ],
      },
    },
    en: {
      title: "Our services",
      subtitle:
        "We offer modern and scalable solutions to boost your digital business..",
      service1: {
        title: "Complete web application",
        description:
          "Development of robust and scalable web applications with modern technologies. From architecture to implementation, I create complete solutions that drive your business.",
        includes: "Includes:",
        features: [
          "Frontend & Backend",
          "Database",
          "Authentication",
          "REST API",
          "Responsive Design",
        ],
      },
      service2: {
        title: "Web pages",
        description:
          "Design and development of professional websites, landing pages and portfolios. Optimized for SEO and with responsive design that adapts to any device.",
        includes: "Includes:",
        features: [
          "Responsive Design",
          "SEO Optimized",
          "Fast Loading",
          "Integrated CMS",
          "Analytics",
        ],
      },
      service3: {
        title: "Programming tasks",
        description:
          "Specific solutions for your technical needs. From process automation to API integration and existing code optimization.",
        includes: "Includes:",
        features: [
          "Automation",
          "API Integration",
          "Optimization",
          "Debugging",
          "Consulting",
        ],
      },
    },
  }

  const t = texts[language]

  const services = [
    {
      icon: <Globe className="w-12 h-12 text-blue-500" />,
      ...t.service1,
    },
    {
      icon: <Code className="w-12 h-12 text-blue-500" />,
      ...t.service2,
    },
    {
      icon: <Wrench className="w-12 h-12 text-blue-500" />,
      ...t.service3,
    },
  ]

  return (
    <section
      id="ofrecemos"
      className="relative py-20 bg-gradient-to-br from-blue-100 via-white to-blue-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900"
    >
      {/* Fondo blur decorativo */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 top-20 left-10 animate-pulse"></div>
        <div className="absolute w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 bottom-20 right-10 animate-pulse"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Título */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white mb-4 drop-shadow-md">
            {t.title}
          </h2>
          <p className="text-gray-700 dark:text-gray-400 text-sm sm:text-base max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        {/* Tarjetas */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="backdrop-blur-xl bg-white/40 dark:bg-gray-800/40 border border-white/20 dark:border-gray-700/30 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              {/* Icono */}
              <div className="flex justify-center mb-6">{service.icon}</div>

              {/* Título */}
              <h3 className="text-xl font-bold text-blue-600 dark:text-blue-400 mb-4 text-center">
                {service.title}
              </h3>

              {/* Descripción */}
              <p className="text-gray-700 dark:text-gray-300 mb-6 text-sm leading-relaxed text-center">
                {service.description}
              </p>

              {/* Lista */}
              <div className="text-left">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                  {service.includes}
                </h4>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center text-gray-700 dark:text-gray-300 text-sm"
                    >
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicesSection
