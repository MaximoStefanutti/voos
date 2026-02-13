"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import ServicesHeader from "./ServicesHeader";
import ServicesCategories from "./ServiceCategories";
import ServicesGrid from "./ServiceGrid";
import { useIsDesktop } from "@/app/hook/useIsDesktop";
import { services } from "@/app/helpers/services/serviceData";

export default function ServicesSection() {
  const searchParams = useSearchParams();
  const categoryFromURl = searchParams.get("category");
  const [activeCategory, setActiveCategory] = useState(
    categoryFromURl ?? "todos",
  );
  const isDesktop = useIsDesktop();

  //sincroniza la URL con el estado.
  useEffect(() => {
    if (categoryFromURl) {
      setActiveCategory(categoryFromURl);
    }
  }, [categoryFromURl]);

  const categories = useMemo(() => {
    const uniqueCategories = Array.from(
      new Set(services.map((service) => service.category)),
    );

    return [
      { id: "todos", name: "Todos" },
      ...uniqueCategories.map((cat) => ({
        id: cat,
        name: cat.charAt(0).toUpperCase() + cat.slice(1),
      })),
    ];
  }, []);

  const filteredServices =
    activeCategory === "todos"
      ? services
      : services.filter((service) => service.category === activeCategory);

  return (
    <section className="pt-24 pb-16">
      <div className="container mx-auto px-6">
        <ServicesHeader />

        <ServicesCategories
          categories={categories}
          activeCategory={activeCategory}
          onChange={setActiveCategory}
        />

        <ServicesGrid
          key={activeCategory}
          service={filteredServices}
          enableAnimations={isDesktop}
        />
      </div>
    </section>
  );
}
