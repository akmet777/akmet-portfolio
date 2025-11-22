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
        "🏋️ Gym Rat - Training 4x/week for 2+ years",
        "🎹 Piano Learner - Currently studying music theory",
        "📚 Lifelong Learner - Always exploring new technologies",
        "🌱 Personal Growth - Focused on continuous improvement",
      ],
    },
  },
  mn: {
    heading: { lead: "Миний тухай ", accent: "" },
    paragraphs: [
      "Намайг Норовпэлийн Тэмүүлэн гэдэг. Би бодит үнэ цэнэ бүтээх дижитал шийдэл гаргах чин хүсэлтэй, Монголын Full-Stack болон гар утасны аппликейшн хөгжүүлэгч юм.",
      "Техник технологи хэрхэн ажилладгийг сонирхох сониуч зан маань намайг энэ салбарт хөтөлж, улмаар хүмүүсийн өдөр тутмын амьдралд тулгамддаг асуудлыг шийдэх бүтээгдэхүүн хөгжүүлэх хүсэл тэмүүлэл болсон юм. Би цэвэр код, хэрэглэгч төвтэй дизайн, мөн тасралтгүй суралцах зарчмыг баримталдаг.",
      "Ажлынхаа хажуугаар би фитнессээр хичээллэж, төгөлдөр хуур тоглож, технологийн шинэ чиг хандлагыг судлах дуртай. Спортоор олж авсан сахилга бат, хөгжмөөс мэдэрдэг бүтээлч сэтгэлгээ маань ажилдаа хандах хандлага, асуудал шийдвэрлэх чадварт минь эерэгээр нөлөөлдөг.",
    ],
    philosophy: {
      title: "Миний баримталдаг зарчим",
      items: [
        "Цэвэр, ойлгомжтой, өргөтгөх боломжтой код бичих",
        "Хэрэглэгчийн туршлагыг (UX) эн тэргүүнд тавих",
        "Тасралтгүй суралцаж, ур чадвараа тогтмол ахиулах",
        "Ажил, амьдралын бүхий л зүйлд сахилга баттай, тууштай байх",
      ],
    },
    beyond: {
      title: "Кодноос цааш",
      items: [
        "🏋️ Спортлог амьдрал - Сүүлийн 2 жил тасралтгүй 7 хоногт 4 удаа бэлтгэл хийж байна",
        "🎹 Хөгжим сонирхогч - Төгөлдөр хуур, хөгжмийн онолд суралцаж буй",
        "📚 Мөнхийн суралцагч - Шинэ технологи, трендийг цаг алдалгүй судалдаг",
        "🌱 Хувь хүний хөгжил - Өчигдрөөс илүү өнөөдрийг бүтээхийн төлөө",
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
