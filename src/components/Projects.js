// components/Projects.js
"use client";
import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    {
      title: "E-commerce Platform + Custom Admin",
      description:
        "Full-stack e-commerce solution with admin dashboard, product management, and order system",
      tech: ["Next.js", "Firebase", "Tailwind", "Stripe"],
      status: "Working Product",
      role: "Full Stack Developer",
      image: "/images/ecommerce.jpg",
      gradient: "from-blue-500 to-purple-600",
    },
    {
      title: "Woman SOS App",
      description:
        "Emergency mobile app with location sharing and quick alert system",
      tech: ["Flutter", "Firebase", "Google Maps API"],
      status: "Hackathon Project",
      role: "Mobile Developer",
      image: "/images/sos-app.jpg",
      gradient: "from-red-500 to-pink-500",
    },
    {
      title: "Level Up Today",
      description:
        "Habit and goal tracking mobile app with daily streaks and progress dashboard",
      tech: ["Flutter", "Firebase", "Provider"],
      status: "In Development",
      role: "Full Stack Developer",
      image: "/images/habit-tracker.jpg",
      gradient: "from-green-500 to-teal-400",
    },
    {
      title: "IoT Smart Home System",
      description: "Mini IoT project for home automation and monitoring",
      tech: ["Arduino", "Node.js", "React"],
      status: "Completed",
      role: "IoT Developer",
      image: "/images/iot.jpg",
      gradient: "from-orange-500 to-yellow-500",
    },
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16"
        >
          Featured <span className="text-green-400">Projects</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
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
                    Role: {project.role}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
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
                    View Demo
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 py-2 rounded-lg text-center border border-white/10 bg-white/10 hover:bg-white/20 transition-colors"
                  >
                    GitHub
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
