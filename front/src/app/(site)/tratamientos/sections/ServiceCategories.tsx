"use client";

import { ServiceCategory } from "@/app/lib/services/types";

type FilterCategory = "todos" | ServiceCategory;

export interface Category {
  id: FilterCategory;
  name: string;
}

interface Props {
  categories: Category[];
  activeCategory: string;
  onChange: (category: FilterCategory) => void;
}

export default function ServicesCategories({
  categories,
  activeCategory,
  onChange,
}: Props) {
  return (
    <nav>
      <div
        className="flex flex-wrap justify-center mb-12"
        aria-label="Categorías de tratamientos"
      >
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => onChange(category.id)}
            aria-current={activeCategory === category.id ? "true" : undefined}
            className={`px-4 py-2 rounded-full text-sm transition-colors ${
              activeCategory === category.id
                ? "bg-[#0a3635] text-[#f0d4a8]"
                : "bg-black/20 text-white hover:bg-[#0a3635]/30"
            }`}
          >
            {category.name}
          </button>
        ))}
      </div>
    </nav>
  );
}
