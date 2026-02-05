"use client";

import { services } from "@/app/helpers/services/serviceData";
import { useState } from "react";
import ServicesHeader from "./ServicesHeader";
import ServicesCategories from "./ServiceCategories";
import ServicesGrid from "./ServiceGrid";

export default function ServicesSection() {
  const [activeCategory, setActiveCategory] = useState("todos");

  const filterdServices =
    activeCategory === "todos"
      ? services
      : services.filter((service) => service.category === activeCategory);

  return (
    <section className="pt-24 pb-16">
      <div className="container mx-auto px-6">
        <ServicesHeader />

        <ServicesCategories
          activeCategory={activeCategory}
          onChange={setActiveCategory}
        />

        <ServicesGrid services={filterdServices} />
      </div>
    </section>
  );
}
