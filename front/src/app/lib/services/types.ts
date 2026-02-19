export type ServiceCategory =
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
  category: ServiceCategory;
  image: string;
}
