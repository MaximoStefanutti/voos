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
    <nav className="fixed top-0 left-0 w-full z-50 bg:[#0a3635]/90 backdrop-blur">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* LOGO */}
        <Link href="/" className="relative w-44 h-16">
          <Image
            src="/logo blanco 50.png"
            alt="Logo VOSS"
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
          className="md:hidden text-[#f0d48]"
          aria-label="Abrir menú"
        >
          <Menu />
        </button>
      </div>

      {/* MOBILE MENÚ*/}

      <NavbarMobile open={open} onClose={() => setOpen(false)} />
    </nav>
  );
}
