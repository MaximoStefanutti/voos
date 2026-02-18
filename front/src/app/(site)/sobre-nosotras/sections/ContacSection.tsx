"use client";

import RevealOnScroll from "@/app/components/ui/animation/RevealOnScroll";
import MapEmbed from "@/app/components/ui/map/MapEmbed";
import { env } from "@/app/config/env";
import { getWhatsAppLink } from "@/app/helpers/whatsapp/whatsapp";

export default function ContactSection() {
  const whatsappLink = getWhatsAppLink(
    env.whatsappPhone,
    "¡Hola! Me gustaría obtener mas información sobre los tratamientos que poseen.",
  );

  return (
    <section className="text-center">
      <h2 className="text-3xl text-white mb-4">Visítanos</h2>
      <p className="text-[#f0d4a8] mb-8">
        Te esperamos para comenzar tu viaje hacia tu mejor versión.
      </p>
      <div className="bg-black/20 backdrop-blur-sm rounded-xl p-6 max-w-xl mx-auto">
        <p className="text-white mb-2">Barrio Empalme - Chamical 2610</p>
        <p className="text-white mb-4">Córdoba Capital, Argentina.</p>
        <p className="text-white mb-2">Tel: (+54) 9 351-512-8427</p>
        <p className="text-white">Email: cesteticavoos@gmail.com</p>
        <p className="text-white">Instagram: estetica_voos</p>
        <p className="text-white">Facebook: estetica voos</p>
        <div className="mt-6">
          <button
            onClick={() => window.open(whatsappLink, "_blank")}
            className="px-8 py-3 bg-[#0a3635] text-[#f0d4a8] rounded-full hover:bg-[#0a3635]/80 transition-colors"
          >
            Contáctanos
          </button>
        </div>
      </div>
      <div className="lg-5:pl-10 animate-fade-in">
        <RevealOnScroll delay={300}>
          <MapEmbed />
        </RevealOnScroll>
      </div>
    </section>
  );
}
