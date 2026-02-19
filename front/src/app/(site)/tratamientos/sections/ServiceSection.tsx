"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useMemo, useState } from "react";

import ServicesHeader from "./ServicesHeader";
import ServicesCategories, { Category } from "./ServiceCategories";
import ServicesGrid from "./ServiceGrid";

import { useIsDesktop } from "@/app/hook/useIsDesktop";

import { ServiceCategory } from "@/app/lib/services/types";
import {
  formatCategoryLabel,
  getAllServices,
  getServiceCategories,
  getServicesByCategory,
} from "@/app/lib/services/helpers";

type FilterCategory = "todos" | ServiceCategory;

export default function ServicesSection() {
  const searchParams = useSearchParams();
  const categoryFromURl = searchParams.get("category") as FilterCategory | null;
  const [activeCategory, setActiveCategory] = useState<FilterCategory>(
    categoryFromURl ?? "todos",
  );

  const isDesktop = useIsDesktop();

  //sincroniza la URL con el estado.
  useEffect(() => {
    if (categoryFromURl) {
      setActiveCategory(categoryFromURl);
    }
  }, [categoryFromURl]);

  const categories: Category[] = useMemo(() => {
    const domainCategories = getServiceCategories();

    return [
      { id: "todos", name: "Todos" },
      ...domainCategories.map((cat) => ({
        id: cat,
        name: formatCategoryLabel(cat),
      })),
    ];
  }, []);

  const filteredServices = useMemo(() => {
    if (activeCategory === "todos") {
      return getAllServices();
    }

    return getServicesByCategory(activeCategory);
  }, [activeCategory]);

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
