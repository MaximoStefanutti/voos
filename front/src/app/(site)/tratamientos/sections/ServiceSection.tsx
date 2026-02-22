import {
  formatCategoryLabel,
  getAllServices,
  getServiceCategories,
} from "@/app/lib/services/helpers";
import ServicesHeader from "./ServicesHeader";
import ServicesGrid from "./ServiceGrid";
import { Category } from "@/app/lib/services/serviceCategories";
import ServicesCategories from "./ServiceCategories";

export default function ServicesSection() {
  const services = getAllServices();

  const categories: Category[] = [
    { id: "todos", name: "Todos" },
    ...getServiceCategories().map((cat) => ({
      id: cat,
      name: formatCategoryLabel(cat),
    })),
  ];

  return (
    <section className="pt-24 pb-16">
      <div className="container mx-auto px-6">
        <ServicesHeader />

        <ServicesCategories categories={categories} currentCategory="todos" />

        <ServicesGrid service={services} />
      </div>
    </section>
  );
}
