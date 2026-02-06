"use client";

import { footerServices } from "@/app/config/footer.config";
import { scrollToTop } from "@/app/helpers/scroll/scrollToTop";
import Link from "next/link";

export function FooterService() {
  return (
    <div>
      <h3 className="text-[#f0d4a8] font-medium text-sm mb-3 uppercase tracking-wide">
        Tratamientos
      </h3>

      <ul className="space-y-2">
        {footerServices.map((service) => (
          <li
            key={service.href}
            className="flex items-start gap-2 text-gray-400 text-sm leading-relaxed"
          >
            <Link
              href={service.href}
              onClick={() => scrollToTop(600)}
              className="text-gray-300 hover:text-voss-gold transition-colors"
            >
              {service.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
