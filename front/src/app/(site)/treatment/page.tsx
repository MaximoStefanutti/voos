"use client";
import { useState } from "react";
import { services } from "@/app/helpers/services/serviceData";
import ServiceCard from "@/app/components/ui/serviceCard/ServiceCard";

interface CategoryProps {
  id: string;
  name: string;
}

export default function ServicesSection() {
  const [activeCategory, setActiveCategory] = useState<string>("todos");

  const categories: CategoryProps[] = [
    { id: "todos", name: "Todos" },
    { id: "facial", name: "Faciales" },
    { id: "corporal", name: "Corporales" },
    { id: "masajes", name: "Masajes" },
  ];

  const filteredServices =
    activeCategory === "todos"
      ? services
      : services.filter((service) => service.category === activeCategory);

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-6">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-light text-white mb-2">
            Nuestros Tratamientos
          </h1>
          <p className="text-[#f0d4a8]/80 text-lg">
            Descubre nuestra amplia gama de servicios para tu bienestar
          </p>
        </header>

        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="flex flex-wrap justify-center mb-4 md:mb-0">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 mr-2 mb-2 rounded-full text-sm transition-colors ${
                  activeCategory === category.id
                    ? "bg-[#0a3635] text-[#f0d4a8]"
                    : "bg-black/20 text-white hover:bg-[#0a3635]/30"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* <div className="relative w-full md:w-auto">
            <input
              type="text"
              placeholder="Buscar tratamiento..."
              className="bg-black/20 text-white rounded-full pl-10 pr-4 py-2 w-full md:w-64 focus:outline-none focus:ring-1 focus:ring-[#f0d4a8]/50"
            />
            <Search
              sx={{ fontSize: 18, color: "gray" }}
              className="absolute left-3 top-1/2 transform -translate-y-1/2"
            />
          </div> */}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => (
            <ServiceCard key={service.id} {...service} />
          ))}
        </div>
      </div>
    </div>
  );
}
