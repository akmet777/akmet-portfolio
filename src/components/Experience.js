// components/Experience.js
"use client";

import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";

const experienceCopy = {
  en: {
    heading: { lead: "Work ", accent: "Experience" },
    roles: [
      {
        role: "Software Developer",
        company: "TanuSoft",
        period: "2025",
        description: [
          "Built landing pages and internal tools using Next.js",
          "Created custom admin panels for clients",
          "Improved performance and UI/UX",
          "Collaborated with a small engineering team",
        ],
      },
      {
        role: "Mobile App Developer",
        company: "Freelance",
        period: "2024",
        description: [
          "Developed Flutter applications for various clients",
          "Built Memo Chat — a personal AI-powered chat/journal app",
          "Implemented Firebase integration",
          "Published apps on Play Store",
          "Worked with REST APIs and state management",
        ],
      },
      {
        role: "Web Developer",
        company: "Freelance",
        period: "2022–2023",
        description: [
          "Created responsive websites using React/Next.js",
          "Implemented modern UI/UX designs",
          "Deployed applications on various platforms",
          "Collaborated with designers and clients",
        ],
      },
    ],
  },
  mn: {
    heading: { lead: "Ажлын ", accent: "туршлага" },
    roles: [
      {
        role: "Програм хангамжийн инженер",
        company: "Танусофт",
        period: "2025",
        description: [
          "Next.js-ээр лэндинг болон дотоод хэрэгсэл хөгжүүлсэн",
          "Захиалагч бүрт зориулсан админ самбар бүтээсэн",
          "Гүйцэтгэл, UI/UX-ийг тасралтгүй сайжруулсан",
          "Жижиг инженерийн багтай нягт хамтран ажилласан",
        ],
      },
      {
        role: "Мобайл апп хөгжүүлэгч",
        company: "Фриланс",
        period: "2023–2024",
        description: [
          "Flutter аппуудыг олон төрлийн захиалагчдад бүтээсэн",
          "Memo Chat — хувийн AI чат/тэмдэглэл хөтлөх аппыг бүтээсэн",
          "Firebase интеграци, нотификаци, аналитикийг хэрэгжүүлсэн",
          "Play Store-д апп байршуулж, шинэчлэлт гаргасан",
          "REST API болон state management ашигласан",
        ],
      },
      {
        role: "Вэб хөгжүүлэгч",
        company: "Фриланс",
        period: "2022–2023",
        description: [
          "React/Next.js ашиглан responsive вэбсайтууд бүтээсэн",
          "Орчин үеийн UI/UX дизайн хэрэгжүүлсэн",
          "Төслүүдийг олон төрлийн платформ дээр байршуулсан",
          "Дизайнер, захиалагчидтай ойр хамтарсан",
        ],
      },
    ],
  },
};

export default function Experience() {
  const { language } = useLanguage();
  const copy = experienceCopy[language];

  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16"
        >
          {copy.heading.lead}
          <span className="text-blue-400">{copy.heading.accent}</span>
        </motion.h2>

        <div className="space-y-8">
          {copy.roles.map((exp, index) => (
            <motion.div
              key={`${exp.role}-${language}`}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
              className="rounded-2xl p-6 bg-slate-900/75 border border-white/10 shadow-2xl shadow-blue-500/10 backdrop-blur-2xl"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4 gap-4">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-1">{exp.role}</h3>
                  <p className="text-gray-400 text-lg">{exp.company}</p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-px w-8 bg-gradient-to-r from-transparent to-blue-500/50 hidden md:block"></div>
                  <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg blur-sm group-hover:blur-md transition-all duration-300"></div>
                    <span className="relative inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/30 text-blue-300 rounded-lg font-semibold text-sm backdrop-blur-sm">
                      <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      {exp.period}
                    </span>
                  </div>
                </div>
              </div>
              <ul className="space-y-2">
                {exp.description.map((item) => (
                  <li key={item} className="text-gray-300 flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
// components/Experience.js
