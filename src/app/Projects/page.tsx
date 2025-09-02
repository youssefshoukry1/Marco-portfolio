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
  { img: "/img (18).webp" },
  { img: "/img (19).webp" }, 
  { img: "/img (9).webp" },
  { img: "/img (16).webp" },
  { img: "/img (1).webp" },
    { img: "/img (15).webp" }, 
      { img: "/img (12).webp" },
        { img: "/img (13).webp" }, 
          { img: "/img (2).webp" },
            { img: "/img (11).webp" }, 
              { img: "/img (8).webp" },

];



export default function Projects() {
  return (
    <section
      id="Projects"
      className="relative min-h-screen w-full flex flex-col justify-center items-center overflow-hidden bg-[#0f0f0f]"
    >
  
         {/* خلفية متحركة */}
      <motion.div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(120deg, rgba(0,200,180,0.08), rgba(163,228,255,0.05), rgba(180,0,255,0.08))",
          backgroundSize: "300% 300%",
        }}
        animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
        transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* فقاعات متحركة */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute w-72 h-72 rounded-full blur-3xl 
          bg-gradient-to-br from-cyan-300/25 to-blue-500/20 mix-blend-screen"
          animate={{ x: [0, 120, -100, 0], y: [0, -80, 60, 0], scale: [1, 1.1, 0.9, 1] }}
          transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
          style={{ top: "12%", left: "20%" }}
        />
        <motion.div
          className="absolute w-96 h-96 rounded-full blur-3xl 
          bg-gradient-to-tr from-purple-400/20 to-cyan-300/15 mix-blend-screen"
          animate={{ x: [0, -140, 100, 0], y: [0, 100, -90, 0], scale: [1, 1.15, 0.85, 1] }}
          transition={{ duration: 28, repeat: Infinity, ease: "easeInOut" }}
          style={{ bottom: "10%", right: "10%" }}
        />

      </div>


      {/* العنوان */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-extrabold mb-12 tracking-wide z-10 bg-gradient-to-r from-violet-400 via-cyan-300 to-blue-400 bg-clip-text text-transparent"
      >
        Projects
      </motion.h2>

      {/* Swiper */}
      <Swiper
      
        grabCursor
        speed={600}
        modules={[Pagination, Navigation]}
        breakpoints={{
          320: { slidesPerView: 1.2, spaceBetween: -30 },
          480: { slidesPerView: 1.3, spaceBetween: -30 },
          768: { slidesPerView: 2, spaceBetween: -30 },
          1024: { slidesPerView: 2, spaceBetween: 30 },
          1280: { slidesPerView: 2, spaceBetween: 40 },
        }}
        centeredSlides={true}
        pagination={{ clickable: true, dynamicBullets: true }}
        navigation={{ enabled: true }}
        className="w-full max-w-6xl z-10"
      >
        {projects.map((card, index) => (
          <SwiperSlide key={index}>
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.4,
                delay: index * 0.1,
                ease: "easeOut",
              }}
              viewport={{ once: true }}
              className="relative group w-[250px] h-[310px] sm:w-[300px] sm:h-[360px] md:w-[420px] md:h-[480px] mx-auto flex items-center justify-center rounded-2xl overflow-hidden border border-transparent transition-all duration-500"
            >
            <Image
  src={card.img}
  alt={`Project ${index}`}
  width={270}
  height={420}
   priority={index < 2} 
  className="object-contain rounded-2xl transition-transform duration-500 group-hover:scale-105"
/>

            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>

      
      {/* تخصيص Pagination + Navigation */}
      <style jsx global>{`
        /* Pagination */
        .swiper-pagination-bullet {
          background: linear-gradient(
            135deg,
            rgba(139, 92, 246, 0.6),
            rgba(34, 211, 238, 0.6)
          );
          opacity: 0.5;
          width: 10px;
          height: 10px;
          transition: all 0.3s ease;
        }
        .swiper-pagination-bullet-active {
          opacity: 1;
          width: 14px;
          height: 14px;
          background: linear-gradient(
            135deg,
            rgba(139, 92, 246, 1),
            rgba(34, 211, 238, 1)
          );
          box-shadow: 0 0 10px rgba(139, 92, 246, 0.7);
        }

        /* Navigation arrows */
        .swiper-button-next,
        .swiper-button-prev {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(10px);
          box-shadow: 0 0 15px rgba(139, 92, 246, 0.4);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
          top: 50%;
          transform: translateY(-50%);
        }

        .swiper-button-next:hover,
        .swiper-button-prev:hover {
          background: linear-gradient(
            135deg,
            rgba(139, 92, 246, 0.8),
            rgba(34, 211, 238, 0.8)
          );
          box-shadow: 0 0 20px rgba(34, 211, 238, 0.6);
          scale: 1.1;
        }

        /* تغيير الأيقونات (الـ arrows) */
        .swiper-button-next::after,
        .swiper-button-prev::after {
          font-size: 20px;
          font-weight: bold;
          color: #fff;
        }

        /* نحركهم بره الصور */
        .swiper-button-prev {
          left: 0px;
        }
        .swiper-button-next {
          right: 0px;
        }

        /* إخفاء الأسهم في الموبايل */
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
