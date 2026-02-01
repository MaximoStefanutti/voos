"use client";

import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import React, { useEffect, useState } from "react";

type Slide = {
  image: string;
  title: string;
  description: string;
};

export function Carousel() {
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  const slides: Slide[] = [
    {
      image: "fondo.png",
      title: "VOOS",
      description: "Tu mejor versión",
    },
    {
      image: "masajes-con-piedras-calientes.png",
      title: "Bienestar y Armonía",
      description: "Descubre nuestros tratamientos holísticos",
    },
    {
      image: "",
      title: "Promoción Especial",
      description: "20% de descuento en tu primer masaje",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const nextSlide = () =>
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  const prevSlide = () =>
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  return (
    <div className="relative h-screen overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
          </div>
          <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
            <h2 className="text-5xl md:text-7xl font-light text-white mb-4">
              {slide.title}
            </h2>
            <p className="text-xl md:text-2xl text-[#f0d4a8]">
              {slide.description}
            </p>
            {index === 2 && (
              <button className="mt-8 px-8 py-3 bg-[#0a3635] text-[#f0d4a8] rounded-full hover:bg-[#0a3635]/80 transition-colors">
                <a href="#">Reservar Ahora</a>
              </button>
            )}
          </div>
        </div>
      ))}

      {/* Iconos MUI como botones con Tailwind */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/30 text-white hover:bg-black/50 transition-colors z-10 flex items-center justify-center"
      >
        <ChevronLeft className="text-3xl text-[#f0d4a8]" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/30 text-white hover:bg-black/50 transition-colors z-10 flex items-center justify-center"
      >
        <ChevronRight className="text-3xl text-[#f0d4a8]" />
      </button>

      {/* Paginación */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentSlide ? "bg-[#f0d4a8]" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
