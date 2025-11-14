// components/Achievements.js
"use client";
import { motion } from "framer-motion";

export default function Achievements() {
  const achievements = [
    {
      title: "4th Place in National AI Hackathon",
      description: "Competed against top developers nationwide",
      year: "2024",
      icon: "🏆",
    },
    {
      title: "Multiple Hackathon Wins",
      description: "Won several national-level hackathons",
      year: "2023-2024",
      icon: "🚀",
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
    {
      title: "Nest Education Full Scholarship",
      description: "Full scholarship for IT education",
      year: "2022",
      icon: "🎓",
    },
  ];

  return (
    <section id="achievements" className="py-20 px-4 bg-gray-900 bg-opacity-50">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16"
        >
          My <span className="text-yellow-400">Achievements</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="rounded-2xl p-6 bg-slate-900/80 border border-white/10 shadow-2xl shadow-yellow-500/10 backdrop-blur-2xl"
            >
              <div className="text-4xl mb-4">{achievement.icon}</div>
              <h3 className="text-xl font-bold mb-2">{achievement.title}</h3>
              <p className="text-gray-300 mb-4">{achievement.description}</p>
              <span className="inline-block px-3 py-1 bg-blue-500 bg-opacity-20 text-blue-400 rounded-full text-sm">
                {achievement.year}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
