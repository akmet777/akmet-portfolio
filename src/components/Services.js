// components/Services.js
"use client";
import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";

const servicesCopy = {
  en: {
    heading: { lead: "My ", accent: "Services" },
    includeLabel: "Includes:",
    quoteCta: "Get Quote",
    consultingTitle: "Consulting Services",
    consultingDesc:
      "Hourly consulting for technical advice, code reviews, and project planning",
    consultingCta: "Schedule Consultation",
    cards: [
      {
        title: "Custom Landing Pages + CMS",
        description:
          "Professional landing pages with custom content management system",
        price: "500K–1.5M₮",
        features: [
          "Next.js + MongoDB",
          "SEO Optimized",
          "Mobile Responsive",
          "Admin Panel",
        ],
        gradient: "from-blue-500 to-cyan-500",
      },
      {
        title: "E-commerce Website",
        description: "Complete online store with payment integration",
        price: "1.5–3M₮",
        features: [
          "Product Management",
          "Shopping Cart",
          "Payment Gateway",
          "Order System",
        ],
        gradient: "from-purple-500 to-pink-500",
      },
      {
        title: "Mobile Apps",
        description: "Cross-platform mobile applications",
        price: "2M–10M₮",
        features: [
          "Flutter Development",
          "Firebase Integration",
          "App Store Deployment",
          "UI/UX Design",
        ],
        gradient: "from-green-500 to-teal-400",
      },
      {
        title: "Custom Business Software",
        description: "Tailored solutions for your business needs",
        price: "Custom Quote",
        features: [
          "Web Applications",
          "Automation Tools",
          "Dashboards",
          "API Integration",
        ],
        gradient: "from-orange-500 to-red-500",
      },
    ],
  },
  mn: {
    heading: { lead: "Миний ", accent: "үйлчилгээ" },
    includeLabel: "Багцад:",
    quoteCta: "Үнэ авах",
    consultingTitle: "Зөвлөгөөний үйлчилгээ",
    consultingDesc:
      "Техникийн зөвлөгөө, кодын хяналт, төслийн төлөвлөлтийн цагийн үйлчилгээ",
    consultingCta: "Зөвлөгөө товлох",
    cards: [
      {
        title: "Лэндинг + CMS хөгжүүлэлт",
        description:
          "Мэргэжлийн лэндинг хуудсыг захиалгат контент менежменттэй",
        price: "500K–1.5M₮",
        features: [
          "Next.js + MongoDB",
          "SEO оновчлол",
          "Мобайл тохирсон дизайн",
          "Админ самбар",
        ],
        gradient: "from-blue-500 to-cyan-500",
      },
      {
        title: "E-commerce вэбсайт",
        description: "Төлбөрийн системтэй бүрэн онлайн дэлгүүр",
        price: "1.5–3M₮",
        features: [
          "Бүтээгдэхүүний удирдлага",
          "Сагс, захиалгын урсгал",
          "Төлбөрийн холболт",
          "Захиалгын хяналт",
        ],
        gradient: "from-purple-500 to-pink-500",
      },
      {
        title: "Мобайл апп",
        description: "Кросс-платформ гар утасны апп хөгжүүлэлт",
        price: "2M–10M₮",
        features: [
          "Flutter хөгжүүлэлт",
          "Firebase интеграци",
          "Апп сторд байршуулалт",
          "UI/UX дизайн",
        ],
        gradient: "from-green-500 to-teal-400",
      },
      {
        title: "Бизнесийн тусгай систем",
        description: "Танай хэрэглээнд нийцсэн дижитал шийдэл",
        price: "Захиалгат үнэ",
        features: [
          "Вэб аппликейшн",
          "Автоматжуулалтын хэрэгсэл",
          "Тайлан, самбар",
          "API интеграци",
        ],
        gradient: "from-orange-500 to-red-500",
      },
    ],
  },
};

export default function Services() {
  const { language } = useLanguage();
  const copy = servicesCopy[language];

  return (
    <section id="services" className="py-20 px-4 bg-gray-900 bg-opacity-50">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16"
        >
          {copy.heading.lead}
          <span className="text-purple-400">{copy.heading.accent}</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {copy.cards.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ scale: 1.02 }}
              className={`bg-gradient-to-br ${service.gradient} rounded-2xl p-1`}
            >
              <div className="bg-black rounded-2xl p-6 h-full">
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>

                <div className="mb-6">
                  <h4 className="font-semibold mb-3 text-lg">
                    {copy.includeLabel}
                  </h4>
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li
                        key={`${service.title}-${feature}`}
                        className="text-gray-300 flex items-center"
                      >
                        <span className="text-green-400 mr-2">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold">{service.price}</span>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-3 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 transition-colors shadow-lg shadow-blue-500/5"
                  >
                    {copy.quoteCta}
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-center mt-12 p-8 rounded-2xl bg-slate-900/80 border border-white/10 shadow-2xl shadow-purple-500/10 backdrop-blur-2xl"
        >
          <h3 className="text-2xl font-bold mb-4">{copy.consultingTitle}</h3>
          <p className="text-gray-300 mb-6">{copy.consultingDesc}</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full font-semibold"
          >
            {copy.consultingCta}
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
