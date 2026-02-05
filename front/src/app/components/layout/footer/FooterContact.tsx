"use client";

import { footerContact } from "@/app/config/footer.config";
import MapEmbed from "../../ui/map/MapEmbed";

export function FooterContact() {
  return (
    <div>
      <h3 className="text-[#f0d4a8] font-medium text-lg mb-4">Contacto</h3>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-1">
        <ul className="space-y-3">
          {footerContact.map(({ icon: Icon, text }) => (
            <li key={text} className="flex items-start gap-2 text-gray-300">
              <Icon fontSize="small" className="text-[#f0d4a8] mt-0.5" />
              <span>{text}</span>
            </li>
          ))}
        </ul>
        <div className="md:pl-9">
          <MapEmbed />
        </div>
      </div>
    </div>
  );
}
