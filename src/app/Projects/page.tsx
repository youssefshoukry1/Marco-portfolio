"use client";
import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import Image from "next/image";
import { motion } from "framer-motion";

const projects = [
  { img: "/img (1).webp" }, { img: "/img (2).webp" },
  { img: "/img (3).webp" }, { img: "/img (4).webp" },
  { img: "/img (5).webp" }, { img: "/img (6).webp" },
  { img: "/img (7).webp" }, { img: "/img (8).webp" },
  { img: "/img (9).webp" }, { img: "/img (10).webp" },
  { img: "/img (11).webp" }, { img: "/img (12).webp" },
  { img: "/img (13).webp" }, { img: "/img (14).webp" },
  { img: "/img (15).webp" }, { img: "/img (16).webp" },
  { img: "/img (17).webp" },
];

export default function Projects() {
  return (
    <section
      id="Projects"
      className="relative min-h-screen w-full flex flex-col justify-center items-center overflow-hidden bg-[#0f0f0f]"
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
          className="absolute w-80 h-80 rounded-full blur-3xl bg-gradient-to-br from-cyan-400/20 to-blue-500/10 mix-blend-screen"
          animate={{ x: [0, 120, -120, 0], y: [0, -100, 80, 0], scale: [1, 1.15, 0.9, 1] }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          style={{ top: "10%", left: "15%" }}
        />
        <motion.div
          className="absolute w-96 h-96 rounded-full blur-3xl bg-gradient-to-tr from-purple-400/15 to-pink-400/10 mix-blend-screen"
          animate={{ x: [0, -140, 100, 0], y: [0, 90, -100, 0], scale: [1, 1.2, 0.85, 1] }}
          transition={{ duration: 28, repeat: Infinity, ease: "easeInOut" }}
          style={{ bottom: "5%", right: "8%" }}
        />
        <motion.div
          className="absolute w-64 h-64 rounded-full blur-2xl bg-gradient-to-bl from-cyan-300/15 to-teal-400/10 mix-blend-screen"
          animate={{ x: [0, 70, -70, 0], y: [0, -60, 60, 0], scale: [1, 1.1, 0.9, 1] }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
          style={{ bottom: "15%", left: "18%" }}
        />
      </div>

      {/* العنوان */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-bold text-white mb-10 tracking-wide z-10"
      >
        Projects
      </motion.h2>

      {/* Swiper */}
  <Swiper
  grabCursor
  speed={700}
  modules={[Pagination, Navigation]}
  breakpoints={{
    320: { slidesPerView: 1.2, spaceBetween: -55 },  // ✅ صورة أساسية + جزء من اللي بعدها
    480: { slidesPerView: 1.3, spaceBetween: -55 }, // ✅ صورة أكبر + جزء من اللي بعدها
    768: { slidesPerView: 2, spaceBetween: -55 },
    1024: { slidesPerView: 2, spaceBetween: 30 },
    1280: { slidesPerView: 2, spaceBetween: 40 },
  }}
  centeredSlides={true}
  coverflowEffect={{
    stretch: 30,
    depth: 600,
    modifier: 1.5,
    slideShadows: true,
  }}
  pagination={{ clickable: true, dynamicBullets: true }}
  navigation={{ enabled: true }}
  className="w-full max-w-6xl z-10"
>

        {projects.map((card, index) => (
          <SwiperSlide key={index}>
          <motion.div
  initial={{ opacity: 0, scale: 0.85 }}
  whileInView={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.4, delay: index * 0.1, ease: "easeOut" }}
  viewport={{ once: true }}
  className="relative w-[260px] h-[320px] sm:w-[300px] sm:h-[360px] md:w-[420px] md:h-[480px] mx-auto flex items-center justify-center rounded-2xl"
>
  <Image
    src={card.img}
    alt={`Project ${index}`}
fill
    className="object-contain w-full h-full rounded-2xl"
  />
</motion.div>

          </SwiperSlide>
        ))}
      </Swiper>

      {/* CSS arrows للموبايل */}
      <style jsx global>{`
        @media (max-width: 768px) {
          .swiper-button-prev,
          .swiper-button-next {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
}
