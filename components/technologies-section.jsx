import { FaPython, FaJava, FaReact, FaFigma } from "react-icons/fa"
import {
  SiPostgresql,
  SiSqlite,
  SiDjango,
  SiSpringboot,
  SiNextdotjs,
  SiSupabase,
  SiOpenai,
  SiJavascript,
  SiVuedotjs,
  SiTailwindcss,
  SiMongodb,
} from "react-icons/si"

const TechnologiesSection = ({ language }) => {
  const texts = {
    es: {
      title: "Tecnologías que manejamos",
      description:
        "Un conjunto diverso de herramientas y tecnologías que utilizamos para crear experiencias digitales excepcionales y soluciones robustas.",
    },
    en: {
      title: "Technologies we handle",
      description:
        "A diverse set of tools and technologies we use to create exceptional digital experiences and robust solutions.",
    },
  }

  const t = texts[language]

  const technologies = [
    { name: "Python", icon: <FaPython />, color: "text-yellow-500" },
    { name: "Java", icon: <FaJava />, color: "text-red-600" },
    { name: "PostgreSQL", icon: <SiPostgresql />, color: "text-blue-600" },
    { name: "SQLite", icon: <SiSqlite />, color: "text-gray-600" },
    { name: "React js", icon: <FaReact />, color: "text-cyan-500" },
    { name: "Django", icon: <SiDjango />, color: "text-green-700" },
    { name: "Springboot", icon: <SiSpringboot />, color: "text-green-600" },
    { name: "Next Js", icon: <SiNextdotjs />, color: "text-black dark:text-white" },
    { name: "Supabase", icon: <SiSupabase />, color: "text-green-500" },
    { name: "Open AI api", icon: <SiOpenai />, color: "text-purple-600" },
    { name: "Javascript", icon: <SiJavascript />, color: "text-yellow-500" },
    { name: "Vue js", icon: <SiVuedotjs />, color: "text-green-500" },
    { name: "TailwindCSS", icon: <SiTailwindcss />, color: "text-sky-500" },
    { name: "Figma", icon: <FaFigma />, color: "text-purple-500" },
    { name: "mongoDB", icon: <SiMongodb />, color: "text-green-600" },
  ]

  return (
    <section id="ofrecemos" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Título y descripción */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
            {t.title}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            {t.description}
          </p>
        </div>

        {/* Grid de tecnologías */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:bg-gradient-to-r hover:from-gray-50 hover:to-gray-100 dark:hover:from-gray-800 dark:hover:to-gray-700"
            >
              <div
                className={`text-5xl mb-4 ${tech.color} transition-transform duration-300 group-hover:rotate-12`}
              >
                {tech.icon}
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white text-center text-sm uppercase tracking-wide">
                {tech.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TechnologiesSection
