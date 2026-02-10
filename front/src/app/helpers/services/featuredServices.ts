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

    image: "masajes.png",
  },

  {
    id: 2,
    name: "Reiki",
    description:
      "Terapia energética que promueve la relajación y el equilibrio emocional.",
    image: "reiki.jpg",
  },

  {
    id: 3,
    name: "Facial Rejuvenecedor",
    description: "Reduce líneas finas y mejora la elasticidad de la piel.",
    image: "facial.jpg",
  },
];
