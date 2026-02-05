"use client";

import { footerLinks } from "@/app/config/footer.config";
import Link from "next/link";

export function FooterLinks() {
  return (
    <div>
      <h3 className="text-[#f0d4a8] font-medium text-lg mb-4">Enlaces</h3>
      <ul className="space-y-2">
        {footerLinks.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-gray-300 hover:text-white transition"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
