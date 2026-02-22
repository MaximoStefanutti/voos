import { FaqItem } from "@/types/faq/faq";

export interface Section {
  title: string;
  content: string;
}

export interface CategoryData {
  seo: {
    title: string;
    description: string;
  };
  heroImage: string;
  intro: string;
  sections: Section[];
  benefits: string[];
  faqs?: FaqItem[];
}

export type CategoryKey =
  | "masajes"
  | "facial"
  | "corporal"
  | "depilacion"
  | "terapia-energetica";

export interface Service {
  id: number;
  slug: string;
  name: string;
  description: string;
  category: CategoryKey;
  image: string;
}

export type CategoryContent = Record<CategoryKey, CategoryData>;
