"use client";

import RevealOnSroll from "@/app/components/ui/animation/RevealOnScroll";
import { env } from "@/app/config/env";
import { getWhatsAppLink } from "@/app/helpers/whatsapp/whatsapp";

export default function PromoSection() {
  const whatsappLink = getWhatsAppLink(
    env.whatsappPhone,
    "¡Hola! Quiero reservar la promoción especial.",
  );

  return (
    <section className="py-16 px-6">
      <div className="container mx-auto">
        <div className="bg-black/30 rounded-x1 p-8 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-6 md:mb-0">
            <RevealOnSroll>
              <h2 className="text-3xl md:text-3xl text-center font-light text-white mb-1">
                Promoción Especial
              </h2>
            </RevealOnSroll>

            <RevealOnSroll delay={150}>
              <p className="text-[#f0d4a8 mb-6 text-center">
                Paquete de bienestar completo.
              </p>
            </RevealOnSroll>

            <RevealOnSroll delay={300}>
              <div className="flex justify-center">
                <button
                  onClick={() => window.open(whatsappLink, "_blank")}
                  className="px-8 py-3 bg-[#0a3635] text-[#f0d4a8] rounded-full hover:bg-[#0a3635]/80 transition-colors"
                >
                  Reservar ahora
                </button>
              </div>
            </RevealOnSroll>
          </div>

          <div>
            <RevealOnSroll delay={200}>
              <img
                src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Promoción Especial"
                className="rounded-lg w-full h-64 object-cover"
              />
            </RevealOnSroll>
          </div>
        </div>
      </div>
    </section>
  );
}
