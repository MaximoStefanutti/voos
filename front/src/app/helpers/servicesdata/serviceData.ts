export interface ServiceProps {
  id: number;
  name: string;
  description: string;
  duration: number;
  price: number;
  category: string;
  image: string;
}

export const services: ServiceProps[] = [
  {
    id: 1,
    name: "Masaje Relajante",
    description:
      "Un masaje suave para aliviar el estrés y la tensión muscular.",
    duration: 60,
    price: 65,
    category: "masajes",
    image:
      "https://images.unsplash.com/photo-1600334129128-685c5582fd35?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 2,
    name: "Facial Rejuvenecedor",
    description: "Tratamiento facial que hidrata y revitaliza la piel.",
    duration: 45,
    price: 55,
    category: "facial",
    image:
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },

  {
    id: 3,
    name: "Manicura y Pedicura",
    description: "Cuidado completo de manos y pies con esmalte premium.",
    duration: 90,
    price: 45,
    category: "corporal",
    image:
      "https://images.unsplash.com/photo-1610992015732-2449b76344bc?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 4,
    name: "Tratamiento Anti-edad",
    description: "Reduce líneas finas y mejora la elasticidad de la piel.",
    duration: 75,
    price: 85,
    category: "facial",
    image:
      "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 5,
    name: "Masaje Terapéutico",
    description: "Masaje profundo para aliviar dolores musculares crónicos.",
    duration: 60,
    price: 75,
    category: "masajes",
    image:
      "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 6,
    name: "Exfoliación Corporal",
    description:
      "Elimina células muertas y revitaliza la piel de todo el cuerpo.",
    duration: 45,
    price: 60,
    category: "corporal",
    image:
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 7,
    name: "Limpieza Facial Profunda",
    description: "Purifica y desintoxica la piel eliminando impurezas.",
    duration: 60,
    price: 70,
    category: "facial",
    image:
      "https://images.unsplash.com/photo-1596178060810-72f53ce9a65c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 8,
    name: "Tratamiento Hidratante",
    description: "Hidratación intensiva para pieles secas y deshidratadas.",
    duration: 50,
    price: 65,
    category: "facial",
    image:
      "https://images.unsplash.com/photo-1598971639058-a4275cc93c9a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 9,
    name: "Masaje de Piedras Calientes",
    description: "Relaja profundamente los músculos con piedras volcánicas.",
    duration: 80,
    price: 90,
    category: "masajes",
    image:
      "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
];
