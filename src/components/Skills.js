// components/Skills.js
"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";

// Mapping of skills to their logo URLs (using Simple Icons CDN)
const skillLogos = {
  "Next.js": "https://cdn.simpleicons.org/nextdotjs/000000",
  "React": "https://cdn.simpleicons.org/react/61DAFB",
  "Tailwind CSS": "https://cdn.simpleicons.org/tailwindcss/38B2AC",
  "HTML/CSS/JS": "https://cdn.simpleicons.org/html5/E34F26",
  "TypeScript": "https://cdn.simpleicons.org/typescript/3178C6",
  "Node.js": "https://cdn.simpleicons.org/nodedotjs/339933",
  "Express.js": "https://cdn.simpleicons.org/express/000000",
  "MongoDB": "https://cdn.simpleicons.org/mongodb/47A248",
  "Firebase": "https://cdn.simpleicons.org/firebase/FFCA28",
  "Flutter": "https://cdn.simpleicons.org/flutter/02569B",
  "Dart": "https://cdn.simpleicons.org/dart/0175C2",
  "UI/UX Design": "https://cdn.simpleicons.org/figma/F24E1E",
  "UI/UX": "https://cdn.simpleicons.org/figma/F24E1E",
  "UI/UX дизайн": "https://cdn.simpleicons.org/figma/F24E1E",
};

// Skills that should NOT have logos (text-only)
const textOnlySkills = [
  "REST API",
  "Authentication",
  "Firebase Integration",
  "Firebase интеграци",
  "Real-time Apps",
  "IoT Basics",
  "IoT үндэс",
  "Project Management",
  "Төслийн менежмент",
  "Deployment",
];

const skillsCopy = {
  en: {
    heading: { lead: "My ", accent: "Skills" },
    categories: {
      frontend: {
        title: "Frontend Development",
        skills: ["Next.js", "React", "Tailwind CSS", "HTML/CSS/JS", "TypeScript"],
        color: "from-blue-500 to-cyan-500",
      },
      backend: {
        title: "Backend Development",
        skills: [
          "Node.js",
          "Express.js",
          "REST API",
          "MongoDB",
          "Firebase",
          "Authentication",
        ],
        color: "from-green-500 to-emerald-500",
      },
      mobile: {
        title: "Mobile Development",
        skills: [
          "Flutter",
          "Dart",
          "Firebase Integration",
          "Real-time Apps",
          "UI/UX",
        ],
        color: "from-purple-500 to-pink-500",
      },
      other: {
        title: "Other Skills",
        skills: [
          "UI/UX Design",
          "IoT Basics",
          "Project Management",
          "Deployment",
        ],
        color: "from-orange-500 to-red-500",
      },
    },
  },
  mn: {
    heading: { lead: "Миний ", accent: "ур чадвар" },
    categories: {
      frontend: {
        title: "Frontend хөгжүүлэлт",
        skills: ["Next.js", "React", "Tailwind CSS", "HTML/CSS/JS", "TypeScript"],
        color: "from-blue-500 to-cyan-500",
      },
      backend: {
        title: "Backend хөгжүүлэлт",
        skills: [
          "Node.js",
          "Express.js",
          "REST API",
          "MongoDB",
          "Firebase",
          "Authentication",
        ],
        color: "from-green-500 to-emerald-500",
      },
      mobile: {
        title: "Гар утасны хөгжүүлэлт",
        skills: [
          "Flutter",
          "Dart",
          "Firebase интеграци",
          "Real-time Apps",
          "UI/UX",
        ],
        color: "from-purple-500 to-pink-500",
      },
      other: {
        title: "Бусад чадвар",
        skills: [
          "UI/UX дизайн",
          "IoT үндэс",
          "Төслийн менежмент",
          "Deployment",
        ],
        color: "from-orange-500 to-red-500",
      },
    },
  },
};

export default function Skills() {
  const { language } = useLanguage();
  const copy = skillsCopy[language];
  const [activeCategory, setActiveCategory] = useState("frontend");

  return (
    <section id="skills" className="py-20 px-4 bg-gray-900 bg-opacity-50">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16"
        >
          {copy.heading.lead}
          <span className="text-purple-400">{copy.heading.accent}</span>
        </motion.h2>

        {/* Category Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {Object.keys(copy.categories).map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full font-semibold transition-all ${
                activeCategory === category
                  ? `bg-gradient-to-r ${copy.categories[category].color} text-white shadow-lg`
                  : "text-gray-300 bg-slate-900/60 hover:bg-slate-800/80 border border-white/5 shadow-lg shadow-purple-500/5"
              }`}
            >
              {copy.categories[category].title}
            </motion.button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4"
        >
          {copy.categories[activeCategory].skills.map((skill, index) => {
            const hasLogo = skillLogos[skill] && !textOnlySkills.includes(skill);
            const logoUrl = skillLogos[skill];

            return (
              <motion.div
                key={skill}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className={`bg-gradient-to-br ${copy.categories[activeCategory].color} rounded-xl p-1`}
              >
                <div className="bg-black rounded-xl p-4 text-center hover:bg-gray-900 transition-colors h-full flex flex-col items-center justify-center min-h-[120px]">
                  {hasLogo ? (
                    <>
                      <div className="mb-3 flex items-center justify-center h-14 w-14 bg-white/5 rounded-lg p-2 relative">
                        <img
                          src={logoUrl}
                          alt={skill}
                          className="w-full h-full object-contain"
                          style={{ filter: 'brightness(0) invert(1)' }}
                          onError={(e) => {
                            // Fallback if image fails to load
                            e.target.style.display = 'none';
                            const fallback = e.target.nextElementSibling;
                            if (fallback) fallback.style.display = 'flex';
                          }}
                        />
                        <div className="hidden absolute inset-0 items-center justify-center text-xl font-bold text-white">
                          {skill.split(' ').map(w => w[0]).join('').substring(0, 2)}
                        </div>
                      </div>
                      <div className="text-xs md:text-sm font-semibold leading-tight px-1">{skill}</div>
                    </>
                  ) : (
                    <div className="text-sm md:text-base font-semibold px-2">{skill}</div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
