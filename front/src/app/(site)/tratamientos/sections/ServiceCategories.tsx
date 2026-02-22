import { Category, FilterCategory } from "@/app/lib/services/serviceCategories";
import Link from "next/link";

interface Props {
  categories: Category[];
  currentCategory?: FilterCategory;
}

export default function ServicesCategories({
  categories,
  currentCategory,
}: Props) {
  return (
    <nav aria-label="Categorías de tratamientos">
      <div className="flex flex-wrap justify-center mb-12">
        {categories.map((category) => {
          const href =
            category.id === "todos"
              ? "/tratamientos"
              : `/tratamientos/${category.id}`;

          const isActive = currentCategory === category.id;

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
