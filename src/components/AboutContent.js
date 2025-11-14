"use client";
import { motion } from 'framer-motion';

export default function AboutContent() {
  return (
    <div className="pt-32 pb-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-6xl font-bold text-center mb-8"
        >
          About <span className="text-blue-400">Me</span>
        </motion.h1>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="rounded-2xl p-8 bg-slate-900/80 border border-white/10 shadow-2xl shadow-blue-500/10 backdrop-blur-2xl"
        >
          <p className="text-lg text-gray-300 leading-relaxed mb-6">
            I'm Temuulen Norovpel, a passionate full-stack and mobile developer from Mongolia 
            with a strong focus on creating digital solutions that make a real impact.
          </p>
          
          <p className="text-lg text-gray-300 leading-relaxed mb-6">
            My journey in technology started with a curiosity about how things work, which 
            quickly evolved into a passion for building products that solve real-world problems. 
            I believe in the power of clean code, user-centered design, and continuous learning.
          </p>
          
          <p className="text-lg text-gray-300 leading-relaxed mb-6">
            When I'm not coding, you'll find me pushing my limits at the gym, learning new 
            piano pieces, or exploring the latest trends in technology. I believe that 
            discipline in physical training and creative expression through music directly 
            translates to better problem-solving skills and innovative thinking in my work.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <div>
              <h3 className="text-2xl font-bold mb-4">My Philosophy</h3>
              <ul className="space-y-3 text-gray-300">
                <li>• Write code that's clean, maintainable, and scalable</li>
                <li>• Focus on user experience above all else</li>
                <li>• Continuous learning and skill development</li>
                <li>• Discipline and consistency in all endeavors</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-4">Beyond Coding</h3>
              <ul className="space-y-3 text-gray-300">
                <li>🏋️ Gym Rat - Training 5x/week for 2+ years</li>
                <li>🎹 Piano Learner - Currently studying music theory</li>
                <li>📚 Lifelong Learner - Always exploring new technologies</li>
                <li>🌱 Personal Growth - Focused on continuous improvement</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

