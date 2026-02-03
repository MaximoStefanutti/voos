export interface ServiceProps {
  id: number;
  name: string;
  description: string;
  image: string;
}

export const featuredServices: ServiceProps[] = [
  {
    id: 1,
    name: "Masaje Relajante",
    description:
      "Un masaje suave para aliviar el estrés y la tensión muscular.",

    image:
      "https://images.unsplash.com/photo-1600334129128-685c5582fd35?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 2,
    name: "Facial Rejuvenecedor",
    description: "Tratamiento facial que hidrata y revitaliza la piel.",

    image:
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 3,
    name: "Tratamiento Anti-edad",
    description: "Reduce líneas finas y mejora la elasticidad de la piel.",
    image:
      "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
];
