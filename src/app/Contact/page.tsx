"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaInstagram, FaWhatsapp, FaFacebook } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative min-h-screen w-full flex flex-col justify-center items-center px-6 py-16 bg-gradient-to-br from-[#1f1f1f] via-[#2b2b2b] to-[#3a3a3a] overflow-hidden"
    >
      {/* خلفية متحركة (فقاعات) */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute w-72 h-72 bg-cyan-400/20 rounded-full blur-3xl"
          animate={{ x: [0, 100, -100, 0], y: [0, -80, 60, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          style={{ top: "15%", left: "15%" }}
        />
        <motion.div
          className="absolute w-96 h-96 bg-gray-400/15 rounded-full blur-3xl"
          animate={{ x: [0, -120, 80, 0], y: [0, 70, -90, 0] }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
          style={{ bottom: "10%", right: "10%" }}
        />
        <motion.div
          className="absolute w-60 h-60 bg-cyan-300/10 rounded-full blur-2xl"
          animate={{ x: [0, 60, -60, 0], y: [0, -50, 50, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          style={{ bottom: "20%", left: "20%" }}
        />
      </div>

      {/* العنوان */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl md:text-5xl font-bold text-gray-100 mb-10 z-10"
      >
        Contact <span className="text-[#a3e4ff]">Me</span>
      </motion.h2>

      {/* الفورم */}
      <motion.form
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="w-full max-w-xl bg-black/30 backdrop-blur-md rounded-2xl shadow-[0_0_25px_rgba(163,228,255,0.25)] p-8 flex flex-col gap-5 z-10"
      >
        <input
          type="text"
          placeholder="Your Name"
          className="p-3 rounded-lg bg-gray-800/50 border border-gray-600 text-gray-100 focus:outline-none focus:border-cyan-400"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="p-3 rounded-lg bg-gray-800/50 border border-gray-600 text-gray-100 focus:outline-none focus:border-cyan-400"
        />
        <textarea
          placeholder="Your Message"
          rows="4"
          className="p-3 rounded-lg bg-gray-800/50 border border-gray-600 text-gray-100 focus:outline-none focus:border-cyan-400"
        />
        <button
          type="submit"
          className="bg-gradient-to-r from-cyan-400 to-blue-500 text-white py-3 rounded-lg font-semibold shadow-lg hover:scale-105 transition-transform"
        >
          Send Message
        </button>
      </motion.form>

      {/* السوشيال ميديا */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="flex gap-6 mt-8 text-2xl z-10"
      >
        <a href="https://instagram.com" target="_blank" className="text-pink-400 hover:scale-110 transition-transform">
          <FaInstagram />
        </a>
        <a href="mailto:example@gmail.com" className="text-red-400 hover:scale-110 transition-transform">
          <SiGmail />
        </a>
        <a href="https://wa.me/201204470794" target="_blank" className="text-green-400 hover:scale-110 transition-transform">
          <FaWhatsapp />
        </a>
        <a href="https://facebook.com" target="_blank" className="text-blue-400 hover:scale-110 transition-transform">
          <FaFacebook />
        </a>
      </motion.div>
    </section>
  );
}
