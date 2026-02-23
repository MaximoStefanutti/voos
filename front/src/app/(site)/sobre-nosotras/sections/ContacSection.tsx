"use client";

import RevealOnScroll from "@/app/components/ui/animation/RevealOnScroll";
import MapEmbed from "@/app/components/ui/map/MapEmbed";
import { contact, schedules, socials } from "@/app/config/contac.config";
import { env } from "@/app/config/env";
import { getWhatsAppLink } from "@/app/helpers/whatsapp/whatsapp";
import { Map } from "@mui/icons-material";
import { a } from "framer-motion/client";

export default function ContactSection() {
  const whatsappLink = getWhatsAppLink(
    env.whatsappPhone,
    "¡Hola! Me gustaría obtener más información sobre los tratamientos que poseen.",
  );

  return (
    <section className="text-center">
      <h2 className="text-3xl text-white mb-4">
        Contacto | Centro de Estética en Córdoba Capital
      </h2>
      <p className="text-[#f0d4a8] mb-8">
        Visitá nuestro centro de estética en Córdoba Capital y comenzá tu
        experiencia de bienestar integral. Estamos en Barrio Empalme, ofreciendo
        tratamientos faciales y corporales personalizados en un espacio cálido y
        profesional
      </p>
      <div className="bg-black/20 backdrop-blur-s rounded-xl p-8 max-w-2xl mx-auto mb-12">
        <h3 className="text-[#f0d4a8] font-medium mb-4">
          Información de contacto y ubicación
        </h3>
        <address className="not-italic space-y-6">
          {contact.map((item, index) => {
            const Icon = item.icon;

            return (
              <div key={index} className="flex items-center gap-3 text-white">
                <Icon sx={{ color: "#f0d4a8" }} />

                {item.href ? (
                  <a
                    href={item.href}
                    className="hover:text-[#f0d4a8] transition-colors"
                  >
                    {item.text}
                  </a>
                ) : (
                  <span>{item.text}</span>
                )}
              </div>
            );
          })}
        </address>

        <div className="bordder-t border-white/10 pt-4 mt-4 space-y-2">
          <h3 className="text-[#f0d4a8] font-medium">Horarios de atención</h3>
          {schedules.map((item, index) => {
            const Icon = item.icon;

            return (
              <div key={index} className="flex items-center gap-3 text-white">
                <Icon sx={{ color: "#f0d4a8" }} />
                <span>{item.text}</span>
              </div>
            );
          })}
        </div>

        <div className="border-t border-white/10 pt-6">
          <h3 className="text-[#f0d4a8] font-medium mb-4">Seguinos en redes</h3>

          {socials.map((social, index) => {
            const Icon = social.icon;

            return (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white hover:text-[#f0d4a8] transition-colors"
              >
                <Icon sx={{ color: "#f0d4a8" }} />
                <span>{social.label}</span>
              </a>
            );
          })}
        </div>
        <div className="mt-6">
          <button
            onClick={() => window.open(whatsappLink, "_blank")}
            className="px-8 py-3 bg-[#0a3635] text-[#f0d4a8] rounded-full hover:bg-[#0a3635]/80 transition-colors"
          >
            Reservar turno por WhatsApp
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
