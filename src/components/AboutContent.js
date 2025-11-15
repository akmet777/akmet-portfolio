"use client";
import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";

const aboutPageCopy = {
  en: {
    heading: { lead: "About ", accent: "Me" },
    paragraphs: [
      "I'm Temuulen Norovpel, a passionate full-stack and mobile developer from Mongolia with a strong focus on creating digital solutions that make a real impact.",
      "My journey in technology started with a curiosity about how things work, which quickly evolved into a passion for building products that solve real-world problems. I believe in the power of clean code, user-centered design, and continuous learning.",
      "When I'm not coding, you'll find me pushing my limits at the gym, learning new piano pieces, or exploring the latest trends in technology. Discipline in physical training and creative expression through music directly translates to better problem-solving skills and innovative thinking in my work.",
    ],
    philosophy: {
      title: "My Philosophy",
      items: [
        "Write code that's clean, maintainable, and scalable",
        "Focus on user experience above all else",
        "Continuous learning and skill development",
        "Discipline and consistency in all endeavors",
      ],
    },
    beyond: {
      title: "Beyond Coding",
      items: [
        "🏋️ Gym Rat - Training 5x/week for 2+ years",
        "🎹 Piano Learner - Currently studying music theory",
        "📚 Lifelong Learner - Always exploring new technologies",
        "🌱 Personal Growth - Focused on continuous improvement",
      ],
    },
  },
  mn: {
    heading: { lead: "Миний тухай ", accent: "" },
    paragraphs: [
      "Би бол бодит нөлөө үзүүлэх дижитал шийдлүүдийг бүтээхэд дуртай, Монгол улсын full-stack болон гар утасны хөгжүүлэгч Тэмүүлэн.",
      "Технологийн аялал маань зүйлс хэрхэн ажилладгийг сонирхсоноор эхэлж, бодит асуудлыг шийддэг бүтээгдэхүүн бүтээх хүсэл тэмүүлэл болон хувирсан. Цэвэр код, хэрэглэгч төвтэй дизайн, тасралтгүй суралцах зарчимд би итгэдэг.",
      "Код бичихээс завтай үедээ би жимд бэлтгэл хийж, төгөлдөр хуурт шинэ бүтээл сурч, технологийн чиг хандлагыг судалдаг. Биеийн дасгал ба хөгжмийн бүтээлч байдал нь асуудал шийдэх чадварыг маань улам сайжруулдаг гэж үздэг.",
    ],
    philosophy: {
      title: "Миний зарчим",
      items: [
        "Цэвэр, засварлахад хялбар, өргөтгөх боломжтой код бичих",
        "Хэрэглэгчийн туршлагыг хамгийн түрүүнд тавих",
        "Тасралтгүй суралцаж ур чадвараа хөгжүүлэх",
        "Дэг журам, тууштай байдал бүх ажилд хэрэгтэй",
      ],
    },
    beyond: {
      title: "Кодноос цааш",
      items: [
        "🏋️ 7 хоногт 5 удаа бэлтгэл хийдэг",
        "🎹 Төгөлдөр хуур, хөгжмийн онол суралцаж байна",
        "📚 Шинэ технологи, чиг хандлагыг байнга судална",
        "🌱 Өөрийгөө хөгжүүлэх, өсөх сэтгэлгээтэй",
      ],
    },
  },
};

export default function AboutContent() {
  const { language } = useLanguage();
  const copy = aboutPageCopy[language];

  return (
    <div className="pt-32 pb-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-6xl font-bold text-center mb-8"
        >
          {copy.heading.lead}
          <span className="text-blue-400">{copy.heading.accent}</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="rounded-2xl p-8 bg-slate-900/80 border border-white/10 shadow-2xl shadow-blue-500/10 backdrop-blur-2xl"
        >
          {copy.paragraphs.map((paragraph) => (
            <p
              key={paragraph}
              className="text-lg text-gray-300 leading-relaxed mb-6 last:mb-0"
            >
              {paragraph}
            </p>
          ))}

          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <div>
              <h3 className="text-2xl font-bold mb-4">
                {copy.philosophy.title}
              </h3>
              <ul className="space-y-3 text-gray-300">
                {copy.philosophy.items.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4">{copy.beyond.title}</h3>
              <ul className="space-y-3 text-gray-300">
                {copy.beyond.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
