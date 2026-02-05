"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { navLinkClass } from "@/app/helpers/navigation/navLinkClass";
import { NavLinks } from "@/app/config/navbar.config";

export function NavbarLinks() {
  const pathname = usePathname();

  return (
    <ul className="hidden md:flex items center gap-2 bg-[#0a3635] px-4 py-2 rounded-full ">
      {NavLinks.map((link) => {
        const isActive = pathname === link.href;

        return (
          <li key={link.href}>
            <Link href={link.href} className={navLinkClass(isActive)}>
              {link.label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
