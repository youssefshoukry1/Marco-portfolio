"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaInstagram, FaWhatsapp, FaFacebook } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

export default function Contact() {
  return (
    <section
      id="Contact"
      className="relative min-h-screen w-full flex flex-col justify-center items-center px-6 py-16 bg-[#0f0f0f] overflow-hidden"
    >
      {/* 🔹 خلفية متدرجة + فقاعات */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(120deg, rgba(0,120,255,0.1), rgba(163,228,255,0.05), rgba(128,0,255,0.1))",
          backgroundSize: "300% 300%",
        }}
        animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
        transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute w-72 h-72 rounded-full blur-3xl bg-gradient-to-br from-cyan-400/20 to-blue-500/10 mix-blend-screen"
          animate={{ x: [0, 100, -100, 0], y: [0, -80, 60, 0], scale: [1, 1.1, 0.9, 1] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          style={{ top: "15%", left: "15%" }}
        />
        <motion.div
          className="absolute w-96 h-96 rounded-full blur-3xl bg-gradient-to-tr from-purple-400/15 to-pink-400/10 mix-blend-screen"
          animate={{ x: [0, -120, 80, 0], y: [0, 70, -90, 0], scale: [1, 1.15, 0.85, 1] }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
          style={{ bottom: "10%", right: "10%" }}
        />
        <motion.div
          className="absolute w-60 h-60 rounded-full blur-2xl bg-gradient-to-bl from-cyan-300/15 to-teal-400/10 mix-blend-screen"
          animate={{ x: [0, 60, -60, 0], y: [0, -50, 50, 0], scale: [1, 1.1, 0.9, 1] }}
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
          rows={4}
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
        <a
          href="https://www.instagram.com/marco_zakaria_photography?igsh=MTVibG93MzJ2dDZ6NQ%3D%3D&utm_source=qr"
          target="_blank"
          className="text-pink-400 hover:scale-110 transition-transform"
        >
          <FaInstagram />
        </a>
        <a
          href="mailto:marcozakaria141@gmail.com"
          className="text-red-400 hover:scale-110 transition-transform"
        >
          <SiGmail />
        </a>
        <a
          href="https://wa.me/+201284504065"
          target="_blank"
          className="text-green-400 hover:scale-110 transition-transform"
        >
          <FaWhatsapp />
        </a>
        <a
          href="https://www.facebook.com/marko.migo?mibextid=ZbWKwL"
          target="_blank"
          className="text-blue-400 hover:scale-110 transition-transform"
        >
          <FaFacebook />
        </a>
      </motion.div>
    </section>
  );
}
