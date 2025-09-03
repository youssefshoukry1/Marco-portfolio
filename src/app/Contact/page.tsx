"use client";
import React from "react";
import { FaInstagram, FaWhatsapp, FaFacebook } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

export default function Contact() {
  return (
    <section
      id="Contact"
      className="relative min-h-screen w-full flex justify-center items-center px-6 py-16 bg-[#0f0f0f] overflow-hidden"
    >
      {/* 🔹 الخلفية */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(circle at 15% 20%, rgba(0,120,255,0.15), transparent 60%),
            radial-gradient(circle at 85% 75%, rgba(128,0,255,0.15), transparent 65%),
            radial-gradient(circle at 30% 85%, rgba(163,228,255,0.1), transparent 70%)
          `,
          backgroundColor: "#0f0f0f",
        }}
      />

      {/* المحتوى */}
      <div className="relative grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl w-full z-10">
        
        {/* العمود الأول: الفورم */}
        <form className="bg-[#0d0d0d]/80 border border-[#1f1f1f] rounded-2xl p-10 flex flex-col gap-6 shadow-[0_0_25px_rgba(0,255,255,0.15)]">
          <h2 className="text-3xl font-bold text-cyan-300 mb-4">Send a Message</h2>

          <input
            type="text"
            placeholder="Your Name"
            className="p-3 rounded-md bg-black border-2 border-cyan-400/40 text-gray-100 focus:outline-none focus:border-cyan-400 focus:shadow-[0_0_10px_rgba(0,255,255,0.4)] transition"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="p-3 rounded-md bg-black border-2 border-purple-400/40 text-gray-100 focus:outline-none focus:border-purple-400 focus:shadow-[0_0_10px_rgba(200,0,255,0.4)] transition"
          />

          <textarea
            rows={5}
            placeholder="Your Message"
            className="p-3 rounded-md bg-black border-2 border-blue-400/40 text-gray-100 focus:outline-none focus:border-blue-400 focus:shadow-[0_0_10px_rgba(0,120,255,0.4)] transition"
          />

          <button
            type="submit"
            className="mt-2 py-3 rounded-lg bg-gradient-to-r from-cyan-400 to-purple-500 text-white font-bold text-lg tracking-wide shadow-[0_0_15px_rgba(0,255,255,0.5)] hover:scale-105 transition-transform"
          >
            Send Message
          </button>
        </form>

        {/* العمود التاني: معلومات التواصل */}
        <div className="flex flex-col justify-center gap-8 text-gray-200">
          <h2 className="text-3xl font-bold text-[#a3e4ff]">Contact Me</h2>
          <p className="text-gray-400 leading-relaxed">
            {"I'm "}open for collaboration, freelance projects, or just a friendly chat.
            Feel free to reach out through the form or connect with me directly on social media.
          </p>

          {/* السوشيال ميديا */}
          <div className="flex gap-6 text-3xl">
            <a
              href="https://www.instagram.com/marco_zakaria_photography"
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
              href="https://www.facebook.com/marko.migo"
              target="_blank"
              className="text-blue-400 hover:scale-110 transition-transform"
            >
              <FaFacebook />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
