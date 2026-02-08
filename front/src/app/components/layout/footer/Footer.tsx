"use client";

import Image from "next/image";
import { FooterSocials } from "./FooterSocials";
import { FooterLinks } from "./FooterLinks";
import { FooterContact } from "./FooterContact";
import { FooterService } from "./FooterServices";
import { Copyright } from "@mui/icons-material";

export function Footer() {
  return (
    <footer className="bg-[#0a3635]/90 text-white">
      <div className="container mx-auto px-11 py-3">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
          <div className="lg:col-span1">
            <Image
              src="/logo blanco.png"
              alt="VOOS Logo"
              width={140}
              height={60}
              className="mb-4"
            />
            <p className="text-xs text-gray-300 mb-4 leading-relaxed">
              VOOS - tu mejor versión. Estetíca holística que combina técnicas
              ancestrales con tecnología moderna para tu bienestar.
            </p>
            <FooterSocials />
          </div>

          <FooterService />

          <FooterLinks />

          <FooterContact />
        </div>

        <div className="border-t border-white/10">
          <div className="container mx-auto px-6 py-4 flex intems-center justify-center text-sm text-gray-400">
            <Copyright fontSize="inherit" />
            {new Date().getFullYear()} VOSS. Todos los derechos reservados.
          </div>
        </div>
      </div>
    </footer>
  );
}
