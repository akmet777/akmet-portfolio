// components/Skills.js
"use client";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState("frontend");

  const skills = {
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
  };

  return (
    <section id="skills" className="py-20 px-4 bg-gray-900 bg-opacity-50">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16"
        >
          My <span className="text-purple-400">Skills</span>
        </motion.h2>

        {/* Category Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {Object.keys(skills).map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full font-semibold transition-all ${
                activeCategory === category
                  ? `bg-gradient-to-r ${skills[category].color} text-white shadow-lg`
                  : "text-gray-300 bg-slate-900/60 hover:bg-slate-800/80 border border-white/5 shadow-lg shadow-purple-500/5"
              }`}
            >
              {skills[category].title}
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
          {skills[activeCategory].skills.map((skill, index) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`bg-gradient-to-br ${skills[activeCategory].color} rounded-xl p-1`}
            >
              <div className="bg-black rounded-xl p-4 text-center hover:bg-gray-900 transition-colors">
                <div className="text-lg font-semibold">{skill}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
