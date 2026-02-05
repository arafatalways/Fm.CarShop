import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Send,
  User,
  Mail,
  MessageSquare,
  Sparkles,
  MapPin,
} from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("🚀 Message Sent! I will get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="my-container relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 dark:from-gray-900 dark:via-black dark:to-gray-900 text-gray-700 dark:text-gray-300 transition-all duration-500 my-14">
      {/* Background Glow Effects */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[400px] h-[400px] bg-purple-500/20 dark:bg-purple-600/10 rounded-full blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[400px] h-[400px] bg-indigo-500/20 dark:bg-indigo-600/10 rounded-full blur-[100px] animate-pulse"></div>
      </div>

      <div className="max-w-7xl w-full grid lg:grid-cols-2 gap-16 items-center z-10">
        {/* Left Side: Professional Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <div>
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 dark:bg-indigo-500/20 text-indigo-600 dark:text-indigo-400 text-sm font-bold uppercase tracking-widest mb-6 border border-indigo-500/20"
            >
              <Sparkles size={16} /> Let's Collaborate
            </motion.div>

            <h2 className="text-4xl font-black text-gray-900 dark:text-white leading-[1.1] mb-6">
              Got an Idea? <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500">
                Let's Chat.
              </span>
            </h2>

            <p className="text-gray-600 dark:text-gray-400 text-lg md:text-lg max-w-lg leading-relaxed">
              I’m currently available for freelance work and full-time
              opportunities. Whether you have a project in mind or just want to
              say hi, my inbox is always open!
            </p>
          </div>

          {/* Contact Details */}
          <div className="space-y-6">
            <div className="flex items-center gap-5 group">
              <div className="w-12 h-12 flex items-center justify-center rounded-2xl bg-white dark:bg-white/5 shadow-lg border border-gray-200 dark:border-white/10 group-hover:border-indigo-500 transition-colors">
                <Mail className="text-indigo-500" size={24} />
              </div>
              <div>
                <p className="text-sm font-bold text-gray-400 uppercase tracking-tighter">
                  Email Me
                </p>
                <p className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                  developer.arafatalways@gmail.com
                </p>
              </div>
            </div>

            <div className="flex items-center gap-5 group">
              <div className="w-12 h-12 flex items-center justify-center rounded-2xl bg-white dark:bg-white/5 shadow-lg border border-gray-200 dark:border-white/10 group-hover:border-indigo-500 transition-colors">
                <MapPin className="text-indigo-500" size={24} />
              </div>
              <div>
                <p className="text-sm font-bold text-gray-400 uppercase tracking-tighter">
                  Location
                </p>
                <p className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                  Dhaka, Bangladesh
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Side: Glassmorphism Contact Form */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="relative group"
        >
          {/* Subtle outer glow on hover */}
          <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-[2.5rem] blur opacity-10 group-hover:opacity-30 transition duration-1000"></div>

          <div className="relative bg-white/60 dark:bg-white/5 backdrop-blur-2xl border border-white dark:border-white/10 p-8 md:p-12 rounded-lg shadow-sm">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 gap-6">
                {/* Name Input */}
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 dark:text-gray-300 ml-1 flex items-center gap-2">
                    <User size={14} className="text-indigo-500" /> Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-gray-100/50 dark:bg-black/20 border border-gray-300 dark:border-white/10 rounded-2xl px-5 py-4 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/40 transition-all placeholder:text-gray-400"
                    placeholder="John Doe"
                  />
                </div>

                {/* Email Input */}
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 dark:text-gray-300 ml-1 flex items-center gap-2">
                    <Mail size={14} className="text-indigo-500" /> Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-gray-100/50 dark:bg-black/20 border border-gray-300 dark:border-white/10 rounded-2xl px-5 py-4 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/40 transition-all placeholder:text-gray-400"
                    placeholder="john@example.com"
                  />
                </div>

                {/* Message Input */}
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 dark:text-gray-300 ml-1 flex items-center gap-2">
                    <MessageSquare size={14} className="text-indigo-500" />{" "}
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full bg-gray-100/50 dark:bg-black/20 border border-gray-300 dark:border-white/10 rounded-2xl px-5 py-4 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/40 transition-all placeholder:text-gray-400 resize-none"
                    placeholder="How can I help you today?"
                  ></textarea>
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.03, translateY: -2 }}
                whileTap={{ scale: 0.97 }}
                type="submit"
                className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 py-2.5 rounded-md text-white font-bold text-lg shadow-[0_10px_30px_rgba(79,70,229,0.3)] flex items-center justify-center gap-3 group transition-all"
              >
                Send Message
                <Send
                  size={20}
                  className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                />
              </motion.button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
