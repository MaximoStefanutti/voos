import { formatCategoryLabel, getServiceCategories } from "./helpers";
import { CategoryKey } from "./types";

export type FilterCategory = "todos" | CategoryKey;

export interface Category {
  id: FilterCategory;
  name: string;
}

export function buildServiceCategories(): Category[] {
  const categories = getServiceCategories();
  return [
    { id: "todos", name: "Todos" },
    ...categories.map((category) => ({
      id: category,
      name: formatCategoryLabel(category),
    })),
  ];
}
