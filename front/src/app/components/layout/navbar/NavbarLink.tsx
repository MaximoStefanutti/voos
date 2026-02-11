"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { navLinkClass } from "@/app/helpers/navigation/navLinkClass";
import { NavLinks } from "@/app/config/navbar.config";

export function NavbarLinks() {
  const pathname = usePathname();

  return (
    <ul className="hidden md:flex items-center gap-2]">
      {NavLinks.map((link) => {
        const isActive = pathname === link.href;

        return (
          <li
            key={link.href}
            className={navLinkClass(isActive)}
            aria-current={isActive ? "page" : undefined}
          >
            <Link
              href={link.href}
              aria-label={link.ariaLabel}
              className={navLinkClass(isActive)}
            >
              {link.label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
