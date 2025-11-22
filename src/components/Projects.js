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
        demoUrl: "https://tsetseg-client.vercel.app/",
        repoUrl: "https://github.com/temuulen/ecommerce-platform",
      },
      {
        title: "TayoAi - AI Portrait & Social App",
        description:
          "A next-gen social platform powered by Stable Diffusion. Generates unique AI portraits from user inputs and features a full social ecosystem with secure authentication and community feeds.",
        tech: ["Flutter", "Stable Diffusion", "Node.js", "Firebase Auth"],
        status: "MVP / Personal Project",
        role: "Full Stack Developer",
        gradient: "from-violet-600 to-indigo-500",
        demoUrl: "https://github.com/akmet0802/TayoAi.git",
        repoUrl: "https://github.com/akmet0802/TayoAi.git",
      },
      {
        title: "Level Up Today",
        description:
          "Habit and goal tracking mobile app with daily streaks and progress dashboard",
        tech: ["Flutter", "Firebase", "Provider"],
        status: "In Development",
        role: "Full Stack Developer",
        gradient: "from-green-500 to-teal-400",
        demoUrl: "https://github.com/akmet777/level_up_today",
        repoUrl: "https://github.com/akmet777/level_up_today",
      },
      {
        title: "Closer - Couples Connection Backend API",
        description:
          "Secure backend API for a couples' connection app, featuring JWT authentication, daily questions, mood tracking, and a shared memory feed. Built for long-distance relationships.",
        tech: ["Node.js", "Express.js", "MongoDB", "JWT", "Nodemailer"],
        status: "Completed",
        role: "Backend Developer",
        gradient: "from-fuchsia-500 to-indigo-600",
        demoUrl: "https://github.com/akmet777/Closer_backend",
        repoUrl: "https://github.com/akmet777/Closer_backend",
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
        demoUrl: "https://tsetseg-client.vercel.app/",
        repoUrl: "https://github.com/temuulen/ecommerce-platform",
      },
      {
        title: "TayoAi - AI Хөрөг & Сошиал Апп",
        description:
          "Stable Diffusion модел ашиглан хиймэл оюун ухаанаар зураг бүтээж, бусадтай хуваалцах боломжтой сошиал платформ. Хэрэглэгчийн бүртгэл, нууцлал болон 'Feed' хэсгийг бүрэн шийдсэн.",
        tech: ["Flutter", "Stable Diffusion", "Node.js", "Firebase Auth"],
        status: "MVP / Хувийн төсөл",
        role: "Full Stack хөгжүүлэгч",
        gradient: "from-violet-600 to-indigo-500",
        demoUrl: "https://github.com/akmet0802/TayoAi.git",
        repoUrl: "https://github.com/akmet0802/TayoAi.git",
      },
      {
        title: "Level Up Today",
        description:
          "Зорилго болон зуршлын хяналттай, өдөр тутмын статистик, ахицын самбартай мобайл апп",
        tech: ["Flutter", "Firebase", "Provider"],
        status: "Хөгжүүлэлт үргэлжилж байна",
        role: "Full Stack хөгжүүлэгч",
        gradient: "from-green-500 to-teal-400",
        demoUrl: "https://github.com/akmet777/level_up_today",
        repoUrl: "https://github.com/akmet777/level_up_today",
      },
      {
        title: "Closer - Хосуудын холбоо API",
        description:
          "Холын зайн харилцааг бэхжүүлэх зорилготой хосуудын апп-д зориулсан аюулгүй, бат бөх backend API. JWT нэвтрэлт, өдөр тутмын асуулт, сэтгэл санаа хянах, дурсамжийн сантай.",
        tech: ["Node.js", "Express.js", "MongoDB", "JWT", "Nodemailer"],
        status: "Дууссан",
        role: "Backend хөгжүүлэгч",
        gradient: "from-fuchsia-500 to-indigo-600",
        demoUrl: "https://github.com/akmet777/Closer_backend",
        repoUrl: "https://github.com/akmet777/Closer_backend",
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
                  <motion.a
                    whileHover={{ scale: project.demoUrl ? 1.05 : 1 }}
                    whileTap={{ scale: project.demoUrl ? 0.95 : 1 }}
                    href={project.demoUrl || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => {
                      if (!project.demoUrl) e.preventDefault();
                    }}
                    aria-disabled={!project.demoUrl}
                    className={`flex-1 py-2 rounded-lg text-center border border-white/10 transition-colors ${
                      project.demoUrl
                        ? "bg-white/5 hover:bg-white/10"
                        : "bg-white/5 opacity-50 cursor-not-allowed pointer-events-none"
                    }`}
                  >
                    {copy.buttons.demo}
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: project.repoUrl ? 1.05 : 1 }}
                    whileTap={{ scale: project.repoUrl ? 0.95 : 1 }}
                    href={project.repoUrl || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => {
                      if (!project.repoUrl) e.preventDefault();
                    }}
                    aria-disabled={!project.repoUrl}
                    className={`flex-1 py-2 rounded-lg text-center border border-white/10 transition-colors ${
                      project.repoUrl
                        ? "bg-white/10 hover:bg-white/20"
                        : "bg-white/10 opacity-50 cursor-not-allowed pointer-events-none"
                    }`}
                  >
                    {copy.buttons.repo}
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
