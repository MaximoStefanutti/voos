"use client";

import { Menu } from "@mui/icons-material";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { NavbarLinks } from "./NavbarLink";
import { NavbarMobile } from "./NavbarMobile";

export function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <nav
      className="fixed top-0 left-0 w-full z-50 backdrop-blur "
      aria-label="Navegación principal"
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* LOGO */}
        <Link href="/" className="relative w-44 h-16">
          <Image
            src="/image/logo/logo-blanco-50.png"
            alt="VOOS Estética Integral en Córdoba Capital"
            fill
            className="object-contain"
            priority
          />
        </Link>

        {/* DESKTOP LINKS*/}
        <NavbarLinks />

        {/* MOBILE BUTTON*/}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-[#f0d4a8]"
          aria-label="Abrir menú"
          aria-expanded={open}
          aria-controls="mobile-navigation"
        >
          <Menu />
        </button>
      </div>

      {/* MOBILE MENÚ*/}

      <NavbarMobile open={open} onClose={() => setOpen(false)} />
    </nav>
  );
}
