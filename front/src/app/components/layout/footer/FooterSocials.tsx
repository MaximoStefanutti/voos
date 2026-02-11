"use client";

import { env } from "@/app/config/env";
import { footerSocials } from "@/app/config/footer.config";
import { getWhatsAppLink } from "@/app/helpers/whatsapp/whatsapp";

export function FooterSocials() {
  const whatsappLink = getWhatsAppLink(
    env.whatsappPhone,
    "¡Hola! Me gustaría obtener mas información sobre los tratamientos que poseen.",
  );

  return (
    <nav aria-label="Redes Sociales" className="flex gap-4 mt-4">
      {footerSocials.map(({ icon: Icon, href, label }) => {
        const finalHref = href === "whatsapp" ? whatsappLink : href;
        return (
          <a
            key={label}
            href={finalHref}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="
            text-gray-300
            hover:text-[#f0d4a8]
            transition-colors
            focus-visible:ring-2
            focus-visible:ring-[#f0d4a8]
            focus-visible:ring-offset-2
            focus-visible:ring-offset-[#0a3635]"
          >
            <Icon fontSize="medium" />
          </a>
        );
      })}
    </nav>
  );
}
