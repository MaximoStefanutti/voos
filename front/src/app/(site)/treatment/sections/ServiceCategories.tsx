"use client";

interface Category {
  id: string;
  name: string;
}

interface Props {
  categories: Category[];
  activeCategory: string;
  onChange: (category: string) => void;
}

export default function ServicesCategories({
  categories,
  activeCategory,
  onChange,
}: Props) {
  return (
    <div className="flex flex-wrap justify-center mb-12">
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => onChange(category.id)}
          className={`px-4 py-2 mr-2 mb-2 rounded-full text-sm transition-colors ${
            activeCategory === category.id
              ? "bg-[#0a3635] text-[#f0d4a8]"
              : "bg-black/20 text-white hover:bg-[#0a3635]/30"
          }`}
        >
          {category.name}
        </button>
      ))}
    </div>
  );
}
