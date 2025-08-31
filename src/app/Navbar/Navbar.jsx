"use client";
import React, { useEffect, useState } from "react";
import { motion as Motion } from "framer-motion";

export default function Navbar() {
  const navItem = [
    { name: "Home", id: "Home" },
    { name: "Projects", id: "Projects" },
    { name: "Contact", id: "Contact" },
  ];

  const [active, setActive] = useState("Home");

  useEffect(() => {
    const handleScroll = () => {
      navItem.forEach(({ id }) => {
        const section = document.getElementById(id);
        if (section) {
          const top = section.offsetTop - 100;
          const bottom = top + section.offsetHeight;
          if (window.scrollY >= top && window.scrollY < bottom) {
            setActive(id);
          }
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // نفس تأثير الـHome
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { 
        staggerChildren: 0.15,
        duration: 0.8,
        ease: "easeOut"
      } 
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-[#1a1c24]/80 shadow-lg border-b border-cyan-400/20">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-center items-center">
        <Motion.ul
          className="flex gap-6 sm:gap-10 tracking-wide"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {navItem.map(({ name, id }) => (
            <Motion.button
              key={id}
              variants={itemVariants}
              className={`relative group text-gray-300 lg:text-lg text-sm font-medium cursor-pointer 
                transition-colors duration-300 ${
                  active === id ? "text-cyan-400" : "hover:text-cyan-300"
                }`}
              onClick={() => scrollToSection(id)}
            >
              {name}
              <span
                className={`absolute left-0 -bottom-1 w-0 h-[2px] bg-gradient-to-r from-cyan-400 to-teal-400 
                  transition-all duration-300 ${
                    active === id ? "w-full" : "group-hover:w-full"
                  }`}
              ></span>
            </Motion.button>
          ))}
        </Motion.ul>
      </div>
    </nav>
  );
}
