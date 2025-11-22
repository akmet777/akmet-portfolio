// components/About.js
"use client";
import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";

const aboutCopy = {
  en: {
    heading: { lead: "About ", accent: "Me" },
    badge: "Who I Am",
    intro:
      "I'm Temuulen, a full-stack and mobile developer from Mongolia. I specialize in building modern web applications, mobile apps, and custom business software using Next.js, Node.js, Express, Flutter, MongoDB, Firebase, and Tailwind.",
    passion:
      "I love solving real problems, creating products people actually use, and delivering clean, scalable applications.",
    stats: [
      { number: "2+", text: "Years Mobile Development Experience" },
      { number: "1+", text: "Years Full-Stack Experience" },
      { number: "10+", text: "Projects Completed" },
      { number: "4+", text: "Hackathon Wins" },
    ],
  },
  mn: {
    heading: { lead: "Миний ", accent: "тухай" },
    badge: "Товч танилцуулга",
    intro:
      "Намайг Тэмүүлэн гэдэг. Би орчин үеийн вэб болон мобайл технологи ашиглан бизнесийн цогц шийдэл боловсруулдаг Full-Stack хөгжүүлэгч. Next.js, Node.js, Express, Flutter, MongoDB, Firebase болон Tailwind зэрэг технологиудыг ашиглан хэрэглэгчийн шаардлагад нийцсэн бүтээгдэхүүн хөгжүүлдэг.",
    passion:
      "Хэрэглэгчдэд бодит үнэ цэн өгөх, асуудал шийдвэрлэсэн бүтээгдэхүүн урлах нь миний гол зорилго. Цэвэр код, найдвартай ажиллагаа, системээ тогтмол сайжруулах боломжийг би үргэлж чухалчилдаг.",
    stats: [
      { number: "2+", text: "Жил: Мобайл хөгжүүлэлт" },
      { number: "1+", text: "Жил: Full-Stack хөгжүүлэлт" },
      { number: "10+", text: "Бүрэн дуусгасан төсөл" },
      { number: "4+", text: "Хакатоны шагнал" },
    ],
  },
};

export default function About() {
  const { language } = useLanguage();
  const copy = aboutCopy[language];

  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16"
        >
          {copy.heading.lead}
          <span className="text-blue-400">{copy.heading.accent}</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-1">
              <div className="bg-black rounded-2xl p-8 h-full">
                <h3 className="text-2xl font-bold mb-4">{copy.badge}</h3>
                <p className="text-gray-300 leading-relaxed">{copy.intro}</p>
                <p className="text-gray-300 leading-relaxed mt-4">
                  {copy.passion}
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {copy.stats.map((stat, index) => (
              <motion.div
                key={stat.text}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center space-x-4 p-4 rounded-xl bg-slate-900/70 border border-white/10 shadow-xl shadow-blue-500/5 backdrop-blur-xl"
              >
                <div className="text-2xl font-bold text-blue-400">
                  {stat.number}
                </div>
                <div className="text-gray-300">{stat.text}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
