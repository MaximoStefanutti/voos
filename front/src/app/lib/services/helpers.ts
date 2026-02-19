import { services } from "./data";
import { Service, ServiceCategory } from "./types";

export function getAllServices(): Service[] {
  return services;
}

export function getServicesByCategory(category: ServiceCategory) {
  return services.filter((service) => service.category === category);
}

export function getServicebySlug(slug: string) {
  return services.find((service) => service.slug === slug);
}

export function getServiceCategories(): ServiceCategory[] {
  return Array.from(new Set(services.map((service) => service.category)));
}

export function formatCategoryLabel(category: ServiceCategory): string {
  const lables: Record<ServiceCategory, string> = {
    masajes: "Masajes",
    facial: "Facial",
    corporal: "Corporal",
    depilacion: "Depilación",
    "terapia-energetica": "Terapia Energética",
  };
  return lables[category];
}
