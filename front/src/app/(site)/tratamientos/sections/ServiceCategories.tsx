import { ServiceCategory } from "@/app/lib/services/types";
import Link from "next/link";

type FilterCategory = "todos" | ServiceCategory;

export interface Category {
  id: FilterCategory;
  name: string;
}

interface Props {
  categories: Category[];
  curretCategory?: FilterCategory;
}

export default function ServicesCategories({
  categories,
  curretCategory,
}: Props) {
  return (
    <nav>
      <div
        className="flex flex-wrap justify-center mb-12"
        aria-label="Categorías de tratamientos"
      >
        {categories.map((category) => {
          const href =
            category.id === "todos"
              ? "/tratamientos"
              : `/tratamientos/${category.id}`;

          const isActive = curretCategory === category.id;

          return (
            <Link
              key={category.id}
              href={href}
              aria-current={isActive ? "page" : undefined}
              className={`px-4 py-2 rounded-full text-sm transition-colors ${
                isActive
                  ? "bg-[#0a3635] text-[#f0d4a8]"
                  : "bg-black/20 text-white hover:bg-[#0a3635]/30"
              }`}
            >
              {category.name}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
