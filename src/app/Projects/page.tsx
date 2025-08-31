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
  { img: "/img (1).webp" },
  { img: "/img (2).webp" },
  { img: "/img (3).webp" },
  { img: "/img (4).webp" },
  { img: "/img (5).webp" },
  { img: "/img (6).webp" },
  { img: "/img (7).webp" },
  { img: "/img (8).webp" },
  { img: "/img (9).webp" },
  { img: "/img (10).webp" },
  { img: "/img (11).webp" },
  { img: "/img (12).webp" },
  { img: "/img (13).webp" },
  { img: "/img (14).webp" },
  { img: "/img (15).webp" },
  { img: "/img (16).webp" },
  { img: "/img (17).webp" },
];

export default function Projects() {
  return (
    <section className="relative min-h-screen w-full flex flex-col justify-center items-center overflow-hidden bg-gradient-to-br from-[#1f1f1f] via-[#2b2b2b] to-[#3a3a3a]">
      
      {/* خلفية متحركة (فقاعات) */}
      <div className="absolute inset-0 overflow-hidden">
        {/* فقاعة 1 */}
        <motion.div
          className="absolute w-72 h-72 bg-cyan-400/20 rounded-full blur-3xl"
          animate={{
            x: [0, 100, -100, 0],
            y: [0, -80, 60, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{ top: "10%", left: "15%" }}
        />
        {/* فقاعة 2 */}
        <motion.div
          className="absolute w-96 h-96 bg-gray-400/15 rounded-full blur-3xl"
          animate={{
            x: [0, -120, 80, 0],
            y: [0, 70, -90, 0],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{ bottom: "10%", right: "10%" }}
        />
        {/* فقاعة 3 */}
        <motion.div
          className="absolute w-60 h-60 bg-cyan-300/10 rounded-full blur-2xl"
          animate={{
            x: [0, 60, -60, 0],
            y: [0, -50, 50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{ bottom: "20%", left: "20%" }}
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
        modules={[Pagination, Navigation]}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={1} 
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
              className="relative w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] md:w-[400px] md:h-[400px] mx-auto rounded-2xl overflow-hidden 
                        border border-white/20 backdrop-blur-md 
                        shadow-[0_8px_30px_rgba(0,0,0,0.3)] 
                        hover:shadow-[0_8px_40px_rgba(0,0,0,0.5)] 
                        transition-all duration-500 flex items-center justify-center bg-white/10 z-10"
            >
              <Image
                src={card.img}
                alt={`Project ${index}`}
                fill
                className="object-contain"
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
