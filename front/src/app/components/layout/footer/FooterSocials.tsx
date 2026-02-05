"use client";

import { footerSocials } from "@/app/config/footer.config";

export function FooterSocials() {
  return (
    <div className="flex gap-4 mt.4">
      {footerSocials.map(({ icon: Icon, href, label }) => (
        <a
          key={label}
          href={href}
          aria-label={label}
          className="text-gray-300 hover:text-[#f0d4a8] trasition"
        >
          <Icon fontSize="medium" />
        </a>
      ))}
    </div>
  );
}
