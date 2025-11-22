// components/Layout/Footer.js
"use client";

import { motion } from "framer-motion";
import { useLanguage } from "../../context/LanguageContext";
import { FaGithub, FaFacebook } from "react-icons/fa";

const footerCopy = {
  en: {
    title: "Temuulen Norovpel",
    subtitle: "Full-Stack & Mobile App Developer",
    rights: "© 2025 Temuulen Norovpel. All rights reserved.",
    socials: [
      { name: "GitHub", icon: <FaGithub />, url: "https://github.com/" },
      { name: "Facebook", icon: <FaFacebook />, url: "https://facebook.com/" },
    ],
  },
  mn: {
    title: "Тэмүүлэн Норовпэл",
    subtitle: "Full-Stack болон гар утасны хөгжүүлэгч",
    rights: "© 2025 Тэмүүлэн Норовпэл. Бүх эрх хуулиар хамгаалагдсан.",
    socials: [
      { name: "GitHub", icon: <FaGithub />, url: "https://github.com/akmet777" },
      { name: "Facebook", icon: <FaFacebook />, url: "https://www.facebook.com/mamoru.endo.108/" },
    ],
  },
};

export default function Footer() {
  const { language } = useLanguage();
  const copy = footerCopy[language];

  return (
    <footer className="relative bg-gray-950 border-t border-gray-800/50 overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-600/10 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-600/10 blur-3xl rounded-full"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Name & Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="mb-6 md:mb-0 text-center md:text-left"
          >
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              {copy.title}
            </h3>
            <p className="text-gray-400 text-sm">{copy.subtitle}</p>
          </motion.div>

          {/* Social Icons */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex space-x-6"
          >
            {copy.socials.map((social) => (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                whileHover={{ scale: 1.3, y: -3 }}
                className="text-gray-400 hover:text-white transition-all text-2xl"
              >
                {social.icon}
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-center mt-10 pt-6 border-t border-gray-800/50"
        >
          <p className="text-gray-500 text-sm">{copy.rights}</p>
        </motion.div>
      </div>
    </footer>
  );
}
