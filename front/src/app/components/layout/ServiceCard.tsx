"use client";

import { getWhatsAppLink } from "@/app/helpers/whatsapp/whatsapp";
import { WhatsApp } from "@mui/icons-material";
import { env } from "@/app/config/env";

interface ServiceProps {
  id?: number;
  name: string;
  description: string;
  category?: string;
  image: string;
}

export default function ServiceCard({
  name,
  description,
  image,
}: ServiceProps) {
  const phone = env.whatsappPhone;

  const message = `Hola! 
  Quiero reservar un tratamiento:
  servicio: ${name}

  Entiendo que la duración y el valor se definen según cada persona.
  Quedo atento/a a su respuesta, desde ya muchas gracias.`;

  const whatsappLink = getWhatsAppLink(phone, message);

  return (
    <div className="bg-black/20 backdrop-blur-sm rounded-xl overflow-hidden group">
      <div className="h-60 overflow-hidden relative">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#0a3635] text-[#f0d4a8] px-4 py-2 rounded-full text-sm"
          >
            <WhatsApp fontSize="small" />
            Reservar Ahora
          </a>
        </div>
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl text-white">{name}</h3>
        </div>
        <p className="text-gray-300 text-sm mb-3">{description}</p>
      </div>
    </div>
  );
}
