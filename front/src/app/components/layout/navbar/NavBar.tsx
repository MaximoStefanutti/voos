"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function NavBar() {
  const pathname = usePathname();

  const linkClass = (path: string) =>
    pathname === path
      ? "text~[#f0d4a8]"
      : "text-white hover:text~[#f0d4a8] transition-colors";

  return (
    <nav className="fixed top-0 w-full bg-black/ backdrop-blur-sm z-50">
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

        {/* LINKS */}
        <ul className="flex space-x-6">
          <li>
            <Link href="/" className={linkClass("/")}>
              Inicio
            </Link>
          </li>
          <li>
            <Link href="/about" className={linkClass("/about")}>
              Nosotros
            </Link>
          </li>
          <li>
            <Link href="/treatment" className={linkClass("/treatment")}>
              Tratamientos
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
