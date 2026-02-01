import React from "react";
import Image from "next/image";
import {
  Email,
  Facebook,
  Instagram,
  Map,
  Phone,
  WhatsApp,
} from "@mui/icons-material";

export function Footer() {
  return (
    <footer className="bg-[#0a3635]/90 text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo y descripción */}
          <div className="md:col-span-1">
            <Image
              src="logo.svg"
              alt="VOOS Logo"
              width={150}
              height={50}
              className="mb-4"
            />
            <p className="text-sm text-gray-300 mb-4">
              VOOS - Tu mejor versión. Estética holística que combina técnicas
              ancestrales con tecnología moderna para tu bienestar.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-[#f0d4a8]">
                <Instagram fontSize="medium" />
              </a>
              <a href="#" className="text-gray-300 hover:text-[#f0d4a8]">
                <Facebook fontSize="medium" />
              </a>
              <a href="#" className="text-gray-300 hover:text-[#f0d4a8]">
                <WhatsApp fontSize="medium" />
              </a>
            </div>
          </div>

          {/* Servicios */}
          <div>
            <h3 className="text-[#f0d4a8] font-medium mb-4">Servicios</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Faciales
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Masajes
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Tratamientos Corporales
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Terapias Holísticas
                </a>
              </li>
            </ul>
          </div>

          {/* Enlaces */}
          <div>
            <h3 className="text-[#f0d4a8] font-medium mb-4">Enlaces</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Sobre Nosotros
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Servicios
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="text-[#f0d4a8] font-medium mb-4">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Map fontSize="small" className="mr-2 text-[#f0d4a8] mt-0.5" />
                <span className="text-gray-300">
                  Córdoba, Argentina. B° Empalme, calle Chamical 2610
                </span>
              </li>
              <li className="flex items-center">
                <Phone fontSize="small" className="mr-2 text-[#f0d4a8]" />
                <span className="text-gray-300">(351) 156-xxx-xx</span>
              </li>
              <li className="flex items-center">
                <Email fontSize="small" className="mr-2 text-[#f0d4a8]" />
                <span className="text-gray-300">contacto@voos.com</span>
              </li>
              <li className="flex items-center">
                <Instagram fontSize="small" className="mr-2 text-[#f0d4a8]" />
                <span className="text-gray-300">estetica_voos</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer inferior */}
        <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400 mb-4 md:mb-0">
            © {new Date().getFullYear()} VOOS. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
