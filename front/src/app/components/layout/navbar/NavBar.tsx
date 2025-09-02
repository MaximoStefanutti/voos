// NavBar.tsx
"use client";

import Image from "next/image";
import React from "react";

type Section = "home" | "about" | "service";

interface NavbarProps {
  activeSection: Section;
  setActiveSection: (section: Section) => void;
}

export function NavBar({ activeSection, setActiveSection }: NavbarProps) {
  return (
    <nav className="fixed top-0 w-full bg-black/50 backdrop-blur-sm z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="relative w-44 h-16 cursor-pointer">
          <Image
            src="logo.svg"
            alt="Logo VOOS"
            fill
            style={{ objectFit: "contain" }}
            priority
          />
        </div>
        <ul className="flex space-x-6">
          <li>
            <button
              onClick={() => setActiveSection("home")}
              className={`${
                activeSection === "home" ? "text-[#f0d4a8]" : "text-white"
              } hover:text-[#f0d4a8] transition-colors`}
            >
              Inicio
            </button>
          </li>
          <li>
            <button
              onClick={() => setActiveSection("about")}
              className={`${
                activeSection === "about" ? "text-[#f0d4a8]" : "text-white"
              } hover:text-[#f0d4a8] transition-colors`}
            >
              Nosotros
            </button>
          </li>
          <li>
            <button
              onClick={() => setActiveSection("service")}
              className={`${
                activeSection === "service" ? "text-[#f0d4a8]" : "text-white"
              } hover:text-[#f0d4a8] transition-colors`}
            >
              Tratamientos
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
