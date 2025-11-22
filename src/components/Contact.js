// components/Contact.js
"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import emailjs from "@emailjs/browser";

const contactCopy = {
  en: {
    heading: { lead: "Get In ", accent: "Touch" },
    subtitle: "Let's Work Together",
    responseTitle: "Response Time",
    responseText:
      "I typically respond to emails within 24 hours. For urgent matters, feel free to connect with me on social media.",
    cards: [
      { icon: "📧", label: "Email", value: "norovpeltemuulen@gmail.com" },
      { icon: "📍", label: "Location", value: "Ulaanbaatar, Mongolia" },
      { icon: "💼", label: "Availability", value: "Open for new projects" },
    ],
    form: {
      name: "Name",
      email: "Email",
      subject: "Subject",
      message: "Message",
      placeholders: {
        name: "Your Name",
        email: "your.email@example.com",
        subject: "Project Inquiry",
        message: "Tell me about your project...",
      },
      submit: "Send Message",
      sending: "Sending...",
      success: "Message sent successfully!",
      error: "Failed to send message. Please try again.",
      errorDetails: "Error details:",
    },
  },
  mn: {
    heading: { lead: "Надтай ", accent: "холбоо барих" },
    subtitle: "Хамтарч ажиллая",
    responseTitle: "Хариу өгөх хугацаа",
    responseText:
      "И-мэйлд ихэвчлэн 24 цагийн дотор хариу өгдөг. Яаралтай бол сошиал сувгаар холбогдоорой.",
    cards: [
      { icon: "📧", label: "Имэйл", value: "norovpeltemuulen@gmail.com" },
      { icon: "📍", label: "Байршил", value: "Улаанбаатар, Монгол" },
      { icon: "💼", label: "Статус", value: "Шинэ төслүүдэд нээлттэй" },
    ],
    form: {
      name: "Нэр",
      email: "Имэйл",
      subject: "Гарчиг",
      message: "Мессеж",
      placeholders: {
        name: "Таны нэр",
        email: "Таны имэйл хаяг",
        subject: "Төслийн санал",
        message: "Төслийнхөө талаар бичээрэй...",
      },
      submit: "Мессеж илгээх",
      sending: "Илгээж байна...",
      success: "Мессеж амжилттай илгээгдлээ!",
      error: "Мессеж илгээхэд алдаа гарлаа. Дахин оролдоно уу.",
      errorDetails: "Алдааны мэдээлэл:",
    },
  },
};

export default function Contact() {
  const { language } = useLanguage();
  const copy = contactCopy[language];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    // Clear status when user starts typing
    if (submitStatus) setSubmitStatus(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // EmailJS configuration
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID; 
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

      // Check if credentials are set
      if (!serviceId || !templateId || !publicKey) {
        throw new Error("EmailJS credentials not configured. Please check your .env.local file.");
      }

      // Send email using EmailJS
      // Include recipient email as template parameter (some services require this)
      const templateParams = {
        to_email: "norovpeltemuulen@gmail.com", // Recipient email
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        reply_to: formData.email, // This allows you to reply directly to the sender
      };

      console.log("Sending email with:", { 
        serviceId, 
        templateId, 
        publicKey: publicKey?.substring(0, 10) + "...",
        templateParams 
      });

      const result = await emailjs.send(
        serviceId,
        templateId,
        templateParams,
        publicKey
      );

      console.log("EmailJS result:", result);

      // Success
      if (result.status === 200 || result.text === "OK") {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
        
        // Clear success message after 5 seconds
        setTimeout(() => setSubmitStatus(null), 5000);
      } else {
        throw new Error(`EmailJS returned status: ${result.status}`);
      }
    } catch (error) {
      console.error("Email sending error:", error);
      console.error("Error details:", {
        message: error.message,
        text: error.text,
        status: error.status,
        fullError: JSON.stringify(error, Object.getOwnPropertyNames(error))
      });
      
      // Extract error message
      let detailedError = copy.form.error;
      if (error.message) {
        detailedError = error.message;
      } else if (error.text) {
        detailedError = error.text;
      } else if (typeof error === 'string') {
        detailedError = error;
      } else {
        detailedError = "Unknown error. Check console for details.";
      }
      
      setErrorMessage(detailedError);
      setSubmitStatus("error");
      
      // Clear error message after 8 seconds
      setTimeout(() => {
        setSubmitStatus(null);
        setErrorMessage("");
      }, 8000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16"
        >
          {copy.heading.lead}
          <span className="text-blue-400">{copy.heading.accent}</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold mb-6">{copy.subtitle}</h3>

            <div className="space-y-4">
              {copy.cards.map((card) => (
                <div
                  key={card.label}
                  className="flex items-center space-x-4 p-4 rounded-xl bg-slate-900/70 border border-white/10 shadow-xl shadow-blue-500/5 backdrop-blur-xl"
                >
                  <div className="text-2xl">{card.icon}</div>
                  <div>
                    <p className="font-semibold">{card.label}</p>
                    <p className="text-gray-300">{card.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-6">
              <h4 className="font-semibold mb-4">{copy.responseTitle}</h4>
              <p className="text-gray-300">{copy.responseText}</p>
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
                  {copy.form.name}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-white/10 bg-slate-900/60 placeholder:text-gray-500 focus:border-blue-400 focus:ring-2 focus:ring-blue-500/40 focus:outline-none transition-colors"
                  placeholder={copy.form.placeholders.name}
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  {copy.form.email}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-white/10 bg-slate-900/60 placeholder:text-gray-500 focus:border-blue-400 focus:ring-2 focus:ring-blue-500/40 focus:outline-none transition-colors"
                  placeholder={copy.form.placeholders.email}
                />
              </div>
            </div>

            <div>
                <label
                htmlFor="subject"
                className="block text-sm font-medium text-gray-300 mb-2"
              >
                  {copy.form.subject}
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-white/10 bg-slate-900/60 placeholder:text-gray-500 focus:border-blue-400 focus:ring-2 focus:ring-blue-500/40 focus:outline-none transition-colors"
                placeholder={copy.form.placeholders.subject}
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-300 mb-2"
              >
                {copy.form.message}
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="6"
                className="w-full px-4 py-3 rounded-lg border border-white/10 bg-slate-900/60 placeholder:text-gray-500 focus:border-blue-400 focus:ring-2 focus:ring-blue-500/40 focus:outline-none transition-colors resize-none"
                placeholder={copy.form.placeholders.message}
              />
            </div>

            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={!isSubmitting ? { scale: 1.05 } : {}}
              whileTap={!isSubmitting ? { scale: 0.95 } : {}}
              className={`w-full py-4 rounded-lg font-semibold text-lg transition-all ${
                isSubmitting
                  ? "bg-gray-600 cursor-not-allowed opacity-70"
                  : "bg-gradient-to-r from-blue-500 to-purple-500 hover:shadow-lg hover:shadow-blue-500/50"
              }`}
            >
              {isSubmitting ? copy.form.sending : copy.form.submit}
            </motion.button>

            {/* Status Messages */}
            {submitStatus === "success" && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 rounded-lg bg-green-500/20 border border-green-500/50 text-green-400"
              >
                ✓ {copy.form.success}
              </motion.div>
            )}

            {submitStatus === "error" && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 rounded-lg bg-red-500/20 border border-red-500/50 text-red-400 space-y-2"
              >
                <div className="font-semibold">✗ {copy.form.error}</div>
                {errorMessage && (
                  <div className="text-sm text-red-300/80 mt-2">
                    {copy.form.errorDetails} {errorMessage}
                  </div>
                )}
                <div className="text-xs text-red-300/60 mt-2">
                  Make sure your EmailJS credentials are set in .env.local file.
                </div>
              </motion.div>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}
