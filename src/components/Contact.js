// components/Contact.js
"use client";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16"
        >
          Get In <span className="text-blue-400">Touch</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold mb-6">Let's Work Together</h3>

              <div className="space-y-4">
                <div className="flex items-center space-x-4 p-4 rounded-xl bg-slate-900/70 border border-white/10 shadow-xl shadow-blue-500/5 backdrop-blur-xl">
                <div className="text-2xl">📧</div>
                <div>
                  <p className="font-semibold">Email</p>
                  <p className="text-gray-300">temuulen@example.com</p>
                </div>
              </div>

                <div className="flex items-center space-x-4 p-4 rounded-xl bg-slate-900/70 border border-white/10 shadow-xl shadow-blue-500/5 backdrop-blur-xl">
                <div className="text-2xl">📍</div>
                <div>
                  <p className="font-semibold">Location</p>
                  <p className="text-gray-300">Ulaanbaatar, Mongolia</p>
                </div>
              </div>

                <div className="flex items-center space-x-4 p-4 rounded-xl bg-slate-900/70 border border-white/10 shadow-xl shadow-blue-500/5 backdrop-blur-xl">
                <div className="text-2xl">💼</div>
                <div>
                  <p className="font-semibold">Availability</p>
                  <p className="text-gray-300">Open for new projects</p>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <h4 className="font-semibold mb-4">Response Time</h4>
              <p className="text-gray-300">
                I typically respond to emails within 24 hours. For urgent
                matters, feel free to connect with me on social media.
              </p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-white/10 bg-slate-900/60 placeholder:text-gray-500 focus:border-blue-400 focus:ring-2 focus:ring-blue-500/40 focus:outline-none transition-colors"
                  placeholder="Your Name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-white/10 bg-slate-900/60 placeholder:text-gray-500 focus:border-blue-400 focus:ring-2 focus:ring-blue-500/40 focus:outline-none transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-medium text-gray-300 mb-2"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-white/10 bg-slate-900/60 placeholder:text-gray-500 focus:border-blue-400 focus:ring-2 focus:ring-blue-500/40 focus:outline-none transition-colors"
                placeholder="Project Inquiry"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-300 mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="6"
                className="w-full px-4 py-3 rounded-lg border border-white/10 bg-slate-900/60 placeholder:text-gray-500 focus:border-blue-400 focus:ring-2 focus:ring-blue-500/40 focus:outline-none transition-colors resize-none"
                placeholder="Tell me about your project..."
              />
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full py-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg font-semibold text-lg"
            >
              Send Message
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
