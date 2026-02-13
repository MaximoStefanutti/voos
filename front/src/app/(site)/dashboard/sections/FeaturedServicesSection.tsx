"use client";

import ServiceCard from "@/app/components/ui/servicecard/ServiceCard";
import { featuredServices } from "@/app/helpers/services/featuredServices";
import Link from "next/link";

export default function FeaturedServicesSection() {
  return (
    <section className="py-16 px-6 bg-[#0a3635]/30">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-3xl text-center font-light text-white mb-1">
          Nuestros Tratamientos Destacados
        </h2>
        <p className="text-[#f0d4a8] text-center text-base md:text-lg max-w-xl mx-auto mb-8">
          Tratamientos faciales, corporales y de bienestar realizados por
          profesionales en estética en Córdoba Capital
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredServices.map((service) => (
            <ServiceCard key={service.id} {...service} />
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/tratamientos"
            className="px-8 py-3 bg-[#0a3635] text-[#f0d4a8] rounded-full hover:bg-[#0a3635]/80"
          >
            Ver todos
          </Link>
        </div>
      </div>
    </section>
  );
}
