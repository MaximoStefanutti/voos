"use client";

import { footerContact } from "@/app/config/footer.config";
import { MapContainer } from "../../ui/map/MapConteiner";
import RevealOnSroll from "../../ui/animation/RevealOnScroll";

export function FooterContact() {
  return (
    <div>
      <h3 className="text-[#f0d4a8] font-medium text-sm mb-3 uppercase tracking-wide">
        Contacto
      </h3>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-1">
        <ul className="space-y-2">
          {footerContact.map(({ icon: Icon, text }) => (
            <li
              key={text}
              className="flex items-start gap-2 text-gray-400 text-sm leading-relaxed"
            >
              <Icon
                fontSize="small"
                className="text-[#f0d4a8] mt-0.5 shrink-0"
              />
              <span>{text}</span>
            </li>
          ))}
        </ul>
        <div className="md:pl-9 flex justify-center md:justify-end mt-4 md:mt-0">
          <div className="w-full max-w-[220px] h-[160px] overflow-hidden rounded-lg border border-white/10">
            <RevealOnSroll>
              <MapContainer />
            </RevealOnSroll>
          </div>
        </div>
      </div>
    </div>
  );
}
