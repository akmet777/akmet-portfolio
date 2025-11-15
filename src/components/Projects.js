// components/Projects.js
"use client";

import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
const projectsCopy = {
  en: {
    heading: { lead: "Featured ", accent: "Projects" },
    roleLabel: "Role",
    buttons: { demo: "View Demo", repo: "GitHub" },
    cards: [
      {
        title: "E-commerce Platform + Custom Admin",
        description:
          "Full-stack e-commerce solution with admin dashboard, product management, and order system",
        tech: ["Next.js", "Firebase", "Tailwind", "Stripe"],
        status: "Working Product",
        role: "Full Stack Developer",
        gradient: "from-blue-500 to-purple-600",
      },
      {
        title: "Woman SOS App",
        description:
          "Emergency mobile app with location sharing and quick alert system",
        tech: ["Flutter", "Firebase", "Google Maps API"],
        status: "Hackathon Project",
        role: "Mobile Developer",
        gradient: "from-red-500 to-pink-500",
      },
      {
        title: "Level Up Today",
        description:
          "Habit and goal tracking mobile app with daily streaks and progress dashboard",
        tech: ["Flutter", "Firebase", "Provider"],
        status: "In Development",
        role: "Full Stack Developer",
        gradient: "from-green-500 to-teal-400",
      },
      {
        title: "IoT Smart Home System",
        description: "Mini IoT project for home automation and monitoring",
        tech: ["Arduino", "Node.js", "React"],
        status: "Completed",
        role: "IoT Developer",
        gradient: "from-orange-500 to-yellow-500",
      },
    ],
  },
  mn: {
    heading: { lead: "Шилдэг ", accent: "төсөл" },
    roleLabel: "Үүрэг",
    buttons: { demo: "Демо үзэх", repo: "GitHub" },
    cards: [
      {
        title: "E-commerce платформ + админ систем",
        description:
          "Админ самбар, бүтээгдэхүүн болон захиалгын удирдлагатай иж бүрэн e-commerce шийдэл",
        tech: ["Next.js", "Firebase", "Tailwind", "Stripe"],
        status: "Ажиллаж буй бүтээгдэхүүн",
        role: "Full Stack хөгжүүлэгч",
        gradient: "from-blue-500 to-purple-600",
      },
      {
        title: "Woman SOS апп",
        description:
          "Байршил хуваалцах, яаралтай дохио илгээх боломжтой хамгаалалтын мобайл апп",
        tech: ["Flutter", "Firebase", "Google Maps API"],
        status: "Хакатоны төсөл",
        role: "Мобайл хөгжүүлэгч",
        gradient: "from-red-500 to-pink-500",
      },
      {
        title: "Level Up Today",
        description:
          "Зорилго болон зуршлын хяналттай, өдөр тутмын статистик, ахицын самбартай мобайл апп",
        tech: ["Flutter", "Firebase", "Provider"],
        status: "Хөгжүүлэлт үргэлжилж байна",
        role: "Full Stack хөгжүүлэгч",
        gradient: "from-green-500 to-teal-400",
      },
      {
        title: "IoT Ухаалаг гэрийн систем",
        description:
          "Гэрийн автоматжуулалт болон хяналтын зориулалттай жижиг оврын IoT туршилтын систем",
        tech: ["Arduino", "Node.js", "React"],
        status: "Дууссан",
        role: "IoT хөгжүүлэгч",
        gradient: "from-orange-500 to-yellow-500",
      },
    ],
  },
};


export default function Projects() {
  const { language } = useLanguage();
  const copy = projectsCopy[language];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16"
        >
          {copy.heading.lead}
          <span className="text-green-400">{copy.heading.accent}</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {copy.cards.map((project, index) => (
            <motion.div
              key={`${project.title}-${language}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className={`bg-gradient-to-br ${project.gradient} rounded-2xl p-1 cursor-pointer`}
            >
              <div className="bg-black rounded-2xl p-6 h-full">
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full mb-2 border border-white/10 bg-white/5">
                    {project.status}
                  </span>
                  <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <p className="text-sm text-gray-400 mb-4">
                    {copy.roleLabel}: {project.role}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={`${project.title}-${tech}`}
                      className="px-3 py-1 rounded-full text-sm border border-white/10 bg-white/5"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 py-2 rounded-lg text-center border border-white/10 bg-white/5 hover:bg-white/10 transition-colors"
                  >
                    {copy.buttons.demo}
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 py-2 rounded-lg text-center border border-white/10 bg-white/10 hover:bg-white/20 transition-colors"
                  >
                    {copy.buttons.repo}
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
