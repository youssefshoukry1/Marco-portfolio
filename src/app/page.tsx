"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Projects from "./Projects/page";
import Contact from "./Contact/page";
import { FaInstagram, FaWhatsapp, FaFacebook } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

export default function Home() {
  return (
    <>
      <section
        id="Home"
        className="relative h-screen w-full flex justify-center items-center flex-col lg:flex-row gap-14 px-6 overflow-hidden 
        bg-[#0f0f0f]"
      >
        {/* 🔹 خلفية متحركة (gradient cinematic) */}
        <motion.div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(120deg, rgba(0,120,255,0.15), rgba(163,228,255,0.1), rgba(128,0,255,0.15))",
            backgroundSize: "300% 300%",
          }}
          animate={{
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute w-40 h-40 sm:w-56 sm:h-56 lg:w-80 lg:h-80 rounded-full blur-3xl 
            bg-gradient-to-br from-cyan-400/30 to-blue-500/20 mix-blend-screen"
            animate={{
              x: [0, 120, -120, 0],
              y: [0, -100, 80, 0],
              scale: [1, 1.15, 0.9, 1],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{ top: "10%", left: "15%" }}
          />

          <motion.div
            className="absolute w-48 h-48 sm:w-64 sm:h-64 lg:w-96 lg:h-96 rounded-full blur-3xl 
            bg-gradient-to-tr from-purple-400/25 to-blue-300/15 mix-blend-screen"
            animate={{
              x: [0, -140, 100, 0],
              y: [0, 90, -100, 0],
              scale: [1, 1.2, 0.85, 1],
            }}
            transition={{
              duration: 28,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{ bottom: "5%", right: "8%" }}
          />

          <motion.div
            className="absolute  w-48 h-48 sm:w-64 sm:h-64 lg:w-64 lg:h-6 rounded-full blur-2xl 
            bg-gradient-to-bl from-cyan-300/20 to-teal-400/15 mix-blend-screen"
            animate={{
              x: [0, 70, -70, 0],
              y: [0, -60, 60, 0],
              scale: [1, 1.1, 0.9, 1],
            }}
            transition={{
              duration: 22,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{ bottom: "15%", left: "18%" }}
          />
        </div>

{/* صورة مع شادو محسّن */}
<motion.div
  initial={{ opacity: 0, scale: 0.85 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 1 }}
  className="relative w-44 h-44 sm:w-64 sm:h-64 lg:w-80 lg:h-80 
  rounded-full border-4 border-gray-500/30 
  shadow-[0_0_60px_rgba(0,0,0,0.5)] z-10 overflow-hidden"
>
  <Image
    className="rounded-full object-cover shadow-2xl shadow-black/60"
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
          className="relative flex justify-center items-center flex-col text-center z-10"
        >
<h1 className="lg:text-5xl text-3xl text-gray-100 font-bold tracking-wide flex flex-wrap justify-center">
  {"Hey, "} {/* ثابت */}
  {Array.from("I'm Marco Zakaria").map((char, index) => (
    <motion.span
      key={index}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        delay: index * 0.11, // سرعة الكتابة
        duration: 0.6,
      }}
      className="text-[#a3e4ff] inline-block"
    >
      {char === " " ? "\u00A0" : char} {/* عشان المسافات تبان */}
    </motion.span>
  ))}

</h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="lg:text-2xl text-lg mt-3 text-gray-300"
          >
            Professional Photographer | Food · Products · Advertising
          </motion.p>

          {/* خط موجي */}
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
                filter:
                  "drop-shadow(0 0 6px rgba(163,228,255,0.8))",
              }}
            />
          </motion.div>


{/* السوشيال ميديا بشكل أفضل */}
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1, delay: 0.6 }}
  className="flex gap-8 mt-8 justify-center z-10"
>
  {[{
    icon: <FaInstagram />,
    color: "text-pink-400",
    link: "https://www.instagram.com/marco_zakaria_photography?igsh=MTVibG93MzJ2dDZ6NQ%3D%3D&utm_source=qr"
  },{
    icon: <SiGmail />,
    color: "text-red-400",
    link: "mailto:marcozakaria141@gmail.com"
  },{
    icon: <FaWhatsapp />,
    color: "text-green-400",
    link: "https://wa.me/+201284504065"
  },{
    icon: <FaFacebook />,
    color: "text-blue-400",
    link: "https://www.facebook.com/marko.migo?mibextid=ZbWKwL"
  }].map((item, idx) => (
    <a
      key={idx}
      href={item.link}
      target="_blank"
      className={`${item.color} p-3 bg-white/10 rounded-full shadow-lg hover:scale-125 transition-transform duration-300 hover:shadow-[0_0_15px_rgba(255,255,255,0.7)]`}
    >
      {item.icon}
    </a>
  ))}
</motion.div>

        </motion.div>
      </section>

      <Projects />
      <Contact />
    </>
  );
}
