"use client";

import { env } from "@/app/config/env";
import { getWhatsAppLink } from "@/app/helpers/whatsapp/whatsapp";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import Image from "next/image";
import { useEffect, useState } from "react";

type Slide = {
  image: string;
  title: string;
  description: string;
};

export function Carousel() {
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  const slides: Slide[] = [
    {
      image: "image/carousel/hero.webp",
      title: "VOOS",
      description: "Tu mejor versión",
    },
    {
      image: "image/carousel/hifu-promo-hero.webp",
      title: "Promoción Especial",
      description:
        "💘 Día de los Enamorados. Regala rejuvenecimiento 2x1 en HIFU Facial",
    },
    {
      image: "image/carousel/masajes-hero.webp",
      title: "Bienestar y Armonía",
      description: "Descubre nuestros tratamientos holísticos",
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

  const whastappLink = getWhatsAppLink(
    env.whatsappPhone,
    "¡Hola! Me gustaría reservar la promoción de masajes",
  );

  return (
    <div className="relative h-[70vh] md:h-[80vh] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? "opacity-100 z-10" : "opacity-0 1-0"
          }`}
        >
          {/*Imagen Optimizada */}
          <div className="absolute inset-0 bg-cover bg-center">
            <Image
              src={`/${slide.image}`}
              alt={slide.title}
              fill
              priority={index === 0}
              fetchPriority="high"
              sizes="100vw"
              className="object-cover"
            />
            {/*Overlay Oscuro */}
            <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
          </div>

          {/*Contenido */}
          <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-6">
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-wide text-white mb-4">
              {slide.title}
            </h2>
            <p className="text-lg md:text-xl lg:text-2x1 text-[#f0d4a8] max-w-2x1">
              {slide.description}
            </p>
            {index === 1 && (
              <a
                href={whastappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 px-8 py-3 bg-[#0a3635] text-[#f0d4a8] rounded-full hover:bg-[#0a3635]/80 transition-colors"
              >
                Reservar Ahora
              </a>
            )}
          </div>
        </div>
      ))}

      {/* Iconos MUI como botones con Tailwind */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 z-20 flex -translate-y-1/2 items-center jutify-center rounded-full bg-black/30 p-2 transition-colors hover:bg-black/50"
        aria-label="paginación lado izquierdo"
      >
        <ChevronLeft className="text-3xl text-[#f0d4a8]" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 z-20 flex -translate-y-1/2 items-center jutify-center rounded-full bg-black/30 p-2 transition-colors hover:bg-black/50"
        aria-label="paginación lado derecho"
      >
        <ChevronRight className="text-3xl text-[#f0d4a8]" />
      </button>

      {/* Paginación */}
      <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 z-10 gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-5 w-5 rounded-full transition-colors ${
              index === currentSlide ? "bg-[#f0d4a8]" : "bg-white/50"
            }`}
            aria-label="indicación de paginación"
          />
        ))}
      </div>
    </div>
  );
}
