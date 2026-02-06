"use client";

import { footerServices } from "@/app/config/footer.config";
import { scrollToTop } from "@/app/helpers/scroll/scrollToTop";
import Link from "next/link";

export function FooterService() {
  return (
    <div>
      <h3 className="text-[#f0d4a8] font-medium text-lg mb-4">Tratamientos</h3>

      <ul className="space-y-2">
        {footerServices.map((service) => (
          <li key={service.href}>
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
