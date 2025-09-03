"use client";
import React from "react";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="relative w-full bg-[#0a0f1f] border-t border-cyan-400/20 py-7  overflow-hidden">
      {/* 🔹 فقاعة خفيفة متحركة */}
      <motion.div
        className="absolute w-40 h-40 rounded-full blur-3xl bg-gradient-to-br from-cyan-400/20 to-blue-500/10 mix-blend-screen"
        animate={{ x: [0, 50, -50, 0], y: [0, -30, 30, 0], scale: [1, 1.1, 0.9, 1] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        style={{ top: "-10%", right: "-10%" }}
      />

      <div className="relative max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between text-gray-400 text-sm">
        {/* النص */}
        <p className="text-center sm:text-left">
          © {new Date().getFullYear()} All Rights Reserved.
        </p>

        {/* المطور */}
        <p className="text-center sm:text-right mt-2 sm:mt-0">
          Developed by{" "}
          <span className="text-cyan-400 font-medium">Youssef Shoukry</span> |{" "}
          <a
            href="https://wa.me/201204470794"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            01204470794
          </a>
        </p>
      </div>
    </footer>
  );
}
