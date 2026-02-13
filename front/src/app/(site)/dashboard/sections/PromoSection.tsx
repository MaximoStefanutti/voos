"use client";

import RevealOnScroll from "@/app/components/ui/animation/RevealOnScroll";
import { env } from "@/app/config/env";
import { promos } from "@/app/helpers/services/promoServices";
import { getWhatsAppLink } from "@/app/helpers/whatsapp/whatsapp";
import { useIsDesktop } from "@/app/hook/useIsDesktop";
import Image from "next/image";

export default function PromoSection() {
  const isDesktop = useIsDesktop();

  return (
    <section className={`px-6 ${isDesktop ? "py-20" : "py-12"}`}>
      <h2 className="sr-only">
        {" "}
        Promociones en tratamientos estéticos en Córdoba
      </h2>

      <div className="container mx-auto space-y-10">
        {promos.map((promo, index) => {
          const whatsappLink = getWhatsAppLink(
            env.whatsappPhone,
            promo.message,
          );
          return (
            <div
              key={index}
              className={`bg-black/30 rounded-xl p-8 flex flex-col md:flex-row items-center gap-8 ${
                index % 2! == 0 ? "md:flex-row-reverse" : ""
              }
              }`}
            >
              {/* texto */}
              <div className="md:w-1/2 text-center md:text-left">
                <RevealOnScroll>
                  <h3
                    className={`font-light text-[#f0d4a8] mb-2 ${
                      isDesktop ? "text-4xl" : "text-3xl"
                    }`}
                  >
                    {promo.title}
                  </h3>
                </RevealOnScroll>

                <RevealOnScroll delay={isDesktop ? 150 : 100}>
                  <p className="text-white mb-6">{promo.description}</p>
                </RevealOnScroll>

                <RevealOnScroll delay={isDesktop ? 300 : 200}>
                  <div className="flex justify-center md:justify-start">
                    <button
                      onClick={() =>
                        window.open(
                          whatsappLink,
                          "_blank",
                          "noopener noreferrer",
                        )
                      }
                      className="px-8 py-3 bg-[#0a3635] text-[#f0d4a8] rounded-full hover:bg-[#0a3635]/80 transition-colors"
                      aria-label="Botón de reserva de promoción VOOS Estética Integral en Córdoba"
                    >
                      Reservar ahora
                    </button>
                  </div>
                </RevealOnScroll>
              </div>

              {/* imagen */}
              <div className="md:w-1/2 w-full">
                <RevealOnScroll
                  delay={isDesktop ? 200 : 150}
                  direction={index % 2 === 0 ? "right" : "left"}
                >
                  <div className="relative w-full aspect-[4/3] overflow-hidden rounded-xl">
                    <Image
                      src={`/${promo.image}`}
                      alt={`Promoción ${promo.title} en VOOS Estética Córdoba`}
                      fill
                      className="object-cover"
                      sizes="(min-width: 768px) 50vw, 100vw"
                      priority={index === 0}
                    />
                  </div>
                </RevealOnScroll>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
