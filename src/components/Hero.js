// components/Hero.js
"use client";
import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
import Image from "next/image";

const heroCopy = {
  en: {
    name: "Temuulen Norovpel",
    role: "Full-Stack & Mobile App Developer",
    tagline: "Turning ideas into real products—Web, Mobile, and Automation.",
    primaryCta: "Hire Me",
    secondaryCta: "View My Projects",
    greeting: "Hi, I'm",
  },
  mn: {
    name: "Тэмүүлэн Норовпэл",
    role: "Full-Stack болон Мобайл апп хөгжүүлэгч",
    tagline: "Вэб, мобайл болон автоматжуулалтын шийдлээр таны санааг бодит бүтээгдэхүүн болгоно.",
    primaryCta: "Хамтран ажиллах",
    secondaryCta: "Төслүүдийг үзэх",
    greeting: "Сайн уу, би бол",
  },
};

export default function Hero() {
  const { language } = useLanguage();
  const copy = heroCopy[language];

  // Check if portrait image exists, fallback to gradient placeholder
  const hasPortrait = true; // Set to false if no image is available
  const portraitPath = "/portrait.jpg"; // Change this to your image filename

  return (
    <section className="min-h-screen flex items-center justify-center px-4 pt-20 pb-20 relative overflow-hidden max-w-full">
      {/* Animated background gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none max-w-full">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-20 left-10 w-48 h-48 md:w-72 md:h-72 bg-blue-500/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-20 right-10 w-64 h-64 md:w-96 md:h-96 bg-purple-500/20 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10 px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content Section */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-block mb-4"
            >
              <span className="text-blue-400 font-semibold text-lg">
                {copy.greeting}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight"
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 animate-gradient">
                {copy.name}
              </span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mb-6"
            >
              <h2 className="text-2xl md:text-3xl lg:text-4xl text-gray-300 font-semibold mb-3">
                {copy.role}
              </h2>
              <div className="flex items-center justify-center lg:justify-start gap-2 flex-wrap">
                <span className="px-3 py-1 bg-blue-500/10 border border-blue-500/30 rounded-full text-sm text-blue-300">
                  Next.js
                </span>
                <span className="px-3 py-1 bg-purple-500/10 border border-purple-500/30 rounded-full text-sm text-purple-300">
                  React
                </span>
                <span className="px-3 py-1 bg-green-500/10 border border-green-500/30 rounded-full text-sm text-green-300">
                  Flutter
                </span>
              </div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-lg md:text-xl text-gray-400 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed"
            >
              {copy.tagline}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full font-semibold text-lg shadow-lg shadow-blue-500/50 hover:shadow-xl hover:shadow-blue-500/60 transition-all"
              >
                {copy.primaryCta}
              </motion.a>

              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-white/20 rounded-full font-semibold text-lg hover:border-white/40 hover:bg-white/5 transition-all backdrop-blur-sm"
              >
                {copy.secondaryCta}
              </motion.a>
            </motion.div>

            {/* Social Links or Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
              className="mt-12 flex items-center justify-center lg:justify-start gap-6"
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400">10+</div>
                <div className="text-sm text-gray-400">Projects</div>
              </div>
              <div className="h-8 w-px bg-gray-700"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-400">2+</div>
                <div className="text-sm text-gray-400">Years</div>
              </div>
              <div className="h-8 w-px bg-gray-700"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-pink-400">4+</div>
                <div className="text-sm text-gray-400">Awards</div>
              </div>
            </motion.div>
          </div>

          {/* Portrait Image Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-md">
              {/* Glow effect behind image */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-full blur-3xl transform scale-110"></div>
              
              {/* Image container with gradient border */}
              <div className="relative rounded-full p-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
                <div className="relative rounded-full overflow-hidden bg-black">
                  {hasPortrait ? (
                    <Image
                      src={portraitPath}
                      alt={copy.name}
                      width={500}
                      height={500}
                      className="w-full h-auto object-cover aspect-square"
                      priority
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextElementSibling.style.display = 'block';
                      }}
                    />
                  ) : null}
                  {/* Fallback gradient placeholder if image doesn't exist */}
                  <div
                    className={`w-full aspect-square bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 flex items-center justify-center ${hasPortrait ? 'hidden' : ''}`}
                  >
                    <div className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                      {copy.name.split(' ').map(n => n[0]).join('')}
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating decorative elements */}
              <motion.div
                animate={{ rotate: 360, y: [0, -20, 0] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -top-4 -right-4 w-20 h-20 border-2 border-blue-500/30 rounded-full"
              />
              <motion.div
                animate={{ rotate: -360, y: [0, 20, 0] }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute -bottom-4 -left-4 w-16 h-16 border-2 border-purple-500/30 rounded-full"
              />
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden lg:block"
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-white/50 rounded-full mt-2"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
