import { services } from "./data";
import { Service, CategoryKey } from "./types";

export function getAllServices(): Service[] {
  return services;
}

export function getServicesByCategory(category: CategoryKey) {
  return services.filter((service) => service.category === category);
}

export function getServicebySlug(slug: string) {
  return services.find((service) => service.slug === slug);
}

export function getServiceCategories(): CategoryKey[] {
  return Array.from(new Set(services.map((service) => service.category)));
}

export function formatCategoryLabel(category: CategoryKey): string {
  const lables: Record<CategoryKey, string> = {
    masajes: "Masajes",
    facial: "Facial",
    corporal: "Corporal",
    depilacion: "Depilación",
    "terapia-energetica": "Terapia Energética",
  };
  return lables[category];
}
