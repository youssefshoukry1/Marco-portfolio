"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <section className="h-screen w-full bg-gradient-to-br from-[#1f1f1f] via-[#2b2b2b] to-[#3a3a3a] flex justify-center items-center flex-col lg:flex-row gap-14 px-6">
      
      {/* صورة */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="relative w-44 h-44 sm:w-64 sm:h-64 lg:w-80 lg:h-80 rounded-full border-4 border-gray-500/30 shadow-[0_0_40px_rgba(255,255,255,0.15)]"
      >
        <Image
          className="rounded-full object-cover shadow-2xl shadow-black/50"
          src="/marco.webp"
          alt="My Photo"
          fill
          sizes="(max-width: 768px) 176px, (max-width: 1200px) 256px, 320px"
        />
      </motion.div>

      {/* النص */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="relative flex justify-center items-center flex-col text-center"
      >
        <h1 className="lg:text-5xl text-3xl text-gray-100 font-bold tracking-wide">
          Marco Zakaria{" "}
          <span className="text-[#a3e4ff]">Photograph</span>
        </h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="lg:text-2xl text-lg mt-3 text-gray-300"
        >
          Food & Products & Advertising
        </motion.p>

        {/* خط موجي متصل + رايح جاي */}
        <motion.div className="absolute -bottom-7 left-1/2 -translate-x-1/2 w-[280px] h-[25px] overflow-hidden rounded-full">
          <motion.div
            animate={{
              x: ["0%", "-50%", "0%"],
              opacity: [0.7, 1, 0.7],
            }}
            transition={{
              repeat: Infinity,
              duration: 6,
              ease: "easeInOut",
            }}
            className="w-[600px] h-full"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='25' viewBox='0 0 200 25'><path d='M0 12 Q 25 0 50 12 T 100 12 T 150 12 T 200 12' stroke='%23a3e4ff' stroke-width='1.8' fill='transparent' stroke-linecap='round'/></svg>\")",
              backgroundRepeat: "repeat-x",
              filter: "drop-shadow(0 0 6px rgba(163,228,255,0.8))",
            }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
