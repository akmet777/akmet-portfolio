// components/Achievements.js
"use client";

import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
const achievementsCopy = {
  en: {
    heading: { lead: "My ", accent: "Achievements" },
    cards: [
      {
        title: "1st Place – HackaTeen National Hackathon",
        description: "Won Mongolia’s biggest high-school hackathon",
        year: "2023",
        icon: "⚡",
      },
      {
        title: "4th Place in National AI Hackathon",
        description: "Competed against top developers nationwide",
        year: "2024",
        icon: "🏆",
      },
      {
        title: "Cisco Cybersecurity Essentials Certificate",
        description: "Completed foundational cybersecurity training",
        year: "2023",
        icon: "🛡️",
      },
      {
        title: "Google Project Management Certificate",
        description: "Completed professional project management course",
        year: "2024",
        icon: "📊",
      },
      {
        title: "Web Developer Competence Certificate",
        description: "Certified web development skills",
        year: "2023",
        icon: "💻",
      },
      {
        title: "Best Student of the Capital",
        description: "Awarded for academic excellence",
        year: "2022",
        icon: "⭐",
      },
    ],
  },
  mn: {
    heading: { lead: "Миний ", accent: "амжилт" },
    cards: [
      {
        title: "HackaTeen улсын хакатон – 1-р байр",
        description: "Монголын хамгийн том ахлах ангийн хакатонд түрүүлсэн",
        year: "2023",
        icon: "⚡",
      },
      {
        title: "Үндэсний AI хакатон – 4-р байр",
        description: "Улсын шилдэг хөгжүүлэгчидтэй өрсөлдсөн",
        year: "2024",
        icon: "🏆",
      },
      {
        title: "Cisco Cybersecurity Essentials сертификат",
        description: "Кибер аюулгүй байдлын үндсэн сургалтыг дүүргэсэн",
        year: "2023",
        icon: "🛡️",
      },
      {
        title: "Google Project Management сертификат",
        description: "Мэргэжлийн төслийн менежментийн курсыг дүүргэсэн",
        year: "2024",
        icon: "📊",
      },
      {
        title: "Web Developer Competence гэрчилгээ",
        description: "Вэб хөгжүүлэлтийн ур чадвараа албан ёсоор баталгаажуулсан",
        year: "2023",
        icon: "💻",
      },
      {
        title: "Нийслэлийн шилдэг сурагч",
        description: "Сургалтын өндөр амжилтаар шагнуулсан",
        year: "2022",
        icon: "⭐",
      },
    ],
  },
};

export default function Achievements() {
  const { language } = useLanguage();
  const copy = achievementsCopy[language];

  return (
    <section id="achievements" className="py-20 px-4 bg-gray-900 bg-opacity-50">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16"
        >
          {copy.heading.lead}
          <span className="text-yellow-400">{copy.heading.accent}</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {copy.cards.map((achievement, index) => (
            <motion.div
              key={`${achievement.title}-${language}`}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="rounded-2xl p-6 bg-slate-900/80 border border-white/10 shadow-2xl shadow-yellow-500/10 backdrop-blur-2xl"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="text-4xl">{achievement.icon}</div>
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-lg blur-sm group-hover:blur-md transition-all duration-300"></div>
                  <span className="relative inline-flex items-center gap-1.5 px-3 py-1.5 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-500/30 text-yellow-300 rounded-lg font-semibold text-xs backdrop-blur-sm">
                    <svg className="w-3.5 h-3.5 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    {achievement.year}
                  </span>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">{achievement.title}</h3>
              <p className="text-gray-300">{achievement.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
