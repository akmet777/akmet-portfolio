// components/Layout/Footer.js
"use client";

import { motion } from "framer-motion";
import { useLanguage } from "../../context/LanguageContext";

const footerCopy = {
  en: {
    title: "Temuulen Norovpel",
    subtitle: "Full-Stack & Mobile App Developer",
    rights: "© 2024 Temuulen Norovpel. All rights reserved.",
    socials: ["GitHub", "LinkedIn", "Twitter"],
  },
  mn: {
    title: "Тэмүүлэн Норовпэл",
    subtitle: "Full-Stack болон гар утасны хөгжүүлэгч",
    rights: "© 2024 Тэмүүлэн Норовпэл. Бүх эрх хуулиар хамгаалагдсан.",
    socials: ["GitHub", "LinkedIn", "Twitter"],
  },
};

export default function Footer() {
  const { language } = useLanguage();
  const copy = footerCopy[language];

  return (
    <footer className="bg-gray-900 bg-opacity-50 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="mb-4 md:mb-0 text-center md:text-left"
          >
            <h3 className="text-xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              {copy.title}
            </h3>
            <p className="text-gray-400">{copy.subtitle}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex space-x-6"
          >
            {copy.socials.map((social) => (
              <motion.a
                key={social}
                href="#"
                whileHover={{ scale: 1.2, y: -2 }}
                className="text-gray-400 hover:text-white transition-colors"
              >
                {social}
              </motion.a>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-center mt-8 pt-8 border-t border-gray-800"
        >
          <p className="text-gray-400">{copy.rights}</p>
        </motion.div>
      </div>
    </footer>
  );
}
