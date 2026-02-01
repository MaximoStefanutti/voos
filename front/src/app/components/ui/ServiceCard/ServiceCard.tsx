"use client";
import React from "react";
import { WhatsAppBot } from "../WhatsApp/WhatsAppBot";

interface ServiceProps {
  id?: number;
  name: string;
  description: string;
  duration: number;
  price: number;
  category?: string;
  image: string;
}

export function ServiceCard({
  name,
  description,
  duration,
  price,
  image,
}: ServiceProps) {
  return (
    <div className="bg-black/20 backdrop-blur-sm rounded-xl overflow-hidden group">
      <div className="h-60 overflow-hidden relative">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
          <button className="bg-[#0a3635] text-[#f0d4a8] px-4 py-2 rounded-full text-sm">
            Reservar Ahora
          </button>
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
