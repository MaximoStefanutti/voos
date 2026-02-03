"use client";

import { Close, Menu } from "@mui/icons-material";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export function NavBar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const navLinkClass = (path: string) => {
    const isActive = pathname === path;

    return `
      px-4 py-2
      rounded-full
      text-sm font-medium
      trasition-colors duration-300
      ${
        isActive
          ? "bg-[#f0d4a8] text-[#0a3635]"
          : "text-[#f0d4a8] hover:bg-[#f0d4a8]/20 hover:text-white"
      }
    `;
  };
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg:[#0a3635]/90 backdrop-blur">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* LOGO */}
        <Link href="/" className="relative w-44 h-16">
          <Image
            src="/logo.svg"
            alt="Logo VOSS"
            fill
            className="object-contain"
            priority
          />
        </Link>

        {/* DESKTOP LINKS */}
        <ul className="hidden md:flex items-center gap-2 bg-[#0a3635] px-4 py-2 rounded-full">
          <li>
            <Link href="/" className={navLinkClass("/")}>
              Inicio
            </Link>
          </li>
          <li>
            <Link href="/about" className={navLinkClass("/about")}>
              Nosotros
            </Link>
          </li>
          <li>
            <Link href="/treatment" className={navLinkClass("/treatment")}>
              Tratamientos
            </Link>
          </li>
        </ul>

        {/*MOBILE BUTTON */}
        <button
          className="md:hidden text-[#f0d4a8]"
          onClick={() => setOpen(!open)}
          aria-label="Abrir menú"
        >
          {open ? <Close /> : <Menu />}
        </button>
      </div>

      {/*MOBILE MENU*/}
      {open && (
        <div className="md:hidden bg-[#0a3635] px-6 pb-6">
          <ul
            className="
          flex flex-col gpa-3 mt-4"
          >
            <li>
              <Link
                href="/"
                className={navLinkClass("/")}
                onClick={() => setOpen(false)}
              >
                Inicio
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className={navLinkClass("/about")}
                onClick={() => setOpen(false)}
              >
                Nosotros
              </Link>
            </li>
            <li>
              <Link
                href="/treatment"
                className={navLinkClass("/treatment")}
                onClick={() => setOpen(false)}
              >
                Tratamientos
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
