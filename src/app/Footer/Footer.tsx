"use client";
import React from "react";

export default function Footer() {
  return (
    <footer className="w-full bg-[#0a0f1f] border-t border-cyan-400/20 py-6 ">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between text-gray-400 text-sm">
        
        {/* النص */}
        <p className="text-center sm:text-left">
          © {new Date().getFullYear()} All Rights Reserved.
        </p>

        {/* المطور */}
        <p className="text-center sm:text-right mt-2 sm:mt-0">
          Developed by <span className="text-cyan-400 font-medium">Youssef Shoukry</span> |{" "}
          <a
            href="https://wa.me/201204470794"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-300 transition-colors"
          >
            01204470794
          </a>
        </p>
      </div>
    </footer>
  );
}
