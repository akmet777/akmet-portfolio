// components/Experience.js
"use client";
import { motion } from "framer-motion";

export default function Experience() {
  const experiences = [
    {
      role: "Software Developer",
      company: "Your Company Name",
      period: "2024–2025",
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
      period: "2023–2024",
      description: [
        "Developed Flutter applications for various clients",
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
  ];

  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16"
        >
          Work <span className="text-blue-400">Experience</span>
        </motion.h2>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.role}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
              className="rounded-2xl p-6 bg-slate-900/75 border border-white/10 shadow-2xl shadow-blue-500/10 backdrop-blur-2xl"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold">{exp.role}</h3>
                  <p className="text-gray-400 text-lg">{exp.company}</p>
                </div>
                <span className="inline-block px-4 py-2 bg-blue-500 bg-opacity-20 text-blue-400 rounded-full mt-2 md:mt-0">
                  {exp.period}
                </span>
              </div>
              <ul className="space-y-2">
                {exp.description.map((item, idx) => (
                  <li key={idx} className="text-gray-300 flex items-start">
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
