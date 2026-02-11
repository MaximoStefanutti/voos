"use client";

import RevealOnSroll from "@/app/components/ui/animation/RevealOnScroll";
import { env } from "@/app/config/env";
import { getWhatsAppLink } from "@/app/helpers/whatsapp/whatsapp";
import { useIsDesktop } from "@/app/hook/useIsDesktop";

export default function PromoSection() {
  const whatsappLink = getWhatsAppLink(
    env.whatsappPhone,
    "¡Hola! Quiero reservar la promoción especial.",
  );
  const isDesktop = useIsDesktop();

  return (
    <section className={`px-6 ${isDesktop ? "py-20" : "py-12"}`}>
      <h2 className="sr-only">
        Promociones en tratamientos estéticos en Córdoba
      </h2>

      <div className="container mx-auto">
        <div className="bg-black/30 rounded-xl p-8 flex flex-col md:flex-row items-center gap-8">
          {/*TEXTO */}
          <div className="md:w-1/2 text-center md:text-left">
            <RevealOnSroll>
              <h3
                className={`font-light text-white mb-2 ${
                  isDesktop ? "text-4xl" : "text-3xl"
                }`}
              >
                Promoción especial en tratamientos estéticos
              </h3>
            </RevealOnSroll>

            <RevealOnSroll delay={isDesktop ? 150 : 100}>
              <p className="text-[#f0d4a8] mb-6 text-center">
                Paquete de bienestar completo.
              </p>
            </RevealOnSroll>

            <RevealOnSroll delay={isDesktop ? 300 : 200}>
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

          <div className="md:w-1/2 w-full">
            <RevealOnSroll delay={isDesktop ? 200 : 150}>
              <img
                src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Promoción Especial centro de estética VOOS en Córdoba Capital"
                className="rounded-lg w-full h-64 object-cover"
              />
            </RevealOnSroll>
          </div>
        </div>
      </div>
    </section>
  );
}
