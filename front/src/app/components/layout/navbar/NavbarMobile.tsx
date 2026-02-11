"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { navLinkClass } from "@/app/helpers/navigation/navLinkClass";
import { NavLinks } from "@/app/config/navbar.config";
import { useEffect } from "react";

interface Props {
  open: boolean;
  onClose: () => void;
}

export function NavbarMobile({ open, onClose }: Props) {
  const pathname = usePathname();

  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <>
      <div
        className="fixed inset-0 bg-black/40 z-30 md:hidden"
        onClick={onClose}
        aria-hidden="true"
      />

      {/*mobile nav*/}
      <nav
        className="md:hidden absolute top-full left-0 w-full bg[#0a3635] border-t border-white/10 <-40"
        aria-label="Navegación principal"
      >
        <ul className="flex flex-col gap-2 p-4 pt-2" role="menu">
          {NavLinks.map((link) => {
            const isActive = pathname === link.href;

            return (
              <li key={link.href} role="none">
                <Link
                  href={link.href}
                  onClick={onClose}
                  role="menuitem"
                  className={navLinkClass(isActive, "text-base w-full block")}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}
