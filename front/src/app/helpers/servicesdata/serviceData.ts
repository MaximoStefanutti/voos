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
    image: "masajes.png",
  },
  {
    id: 2,
    name: "Facial Rejuvenecedor",
    description: "Tratamiento facial que hidrata y revitaliza la piel.",
    duration: 45,
    price: 55,
    category: "facial",
    image: "facial.jpg",
  },

  {
    id: 3,
    name: "Manicura y Pedicura",
    description: "Cuidado completo de manos y pies con esmalte premium.",
    duration: 90,
    price: 45,
    category: "corporal",
    image: "manicura.jpg",
  },
  {
    id: 4,
    name: "Depilación Definitiva",
    description: "Elimina el vello no deseado. Resultados duraderos.",
    duration: 75,
    price: 85,
    category: "depilación",
    image: "depilación.jpg",
  },
  {
    id: 5,
    name: "HIFU corporal",
    description:
      "Reafirma y tensa la piel del abdomen, brazos, glúteos y piernas sin cirugía.",
    duration: 60,
    price: 75,
    category: "corporal",
    image: "hifu-corporal.jpg",
  },
  {
    id: 6,
    name: "HIFU",
    description:
      "Rejuvenece la piel desde capas profundas con un efecto lifting sin cirugía.",
    duration: 60,
    price: 75,
    category: "facial",
    image: "hifu.jpg",
  },
  {
    id: 7,
    name: "Vela terapia",
    description: "Reducción de Celulitis y Moldeo Corporal sin Cirugía.",
    duration: 45,
    price: 60,
    category: "corporal",
    image: "vela.jpg",
  },
  {
    id: 8,
    name: "Readiofrecuencia Fraccionada",
    description:
      "Estimula el colágeno, mejora arrugas, textura y firmeza del rostro sin dañar la superficie cutánea.",
    duration: 60,
    price: 70,
    category: "facial",
    image: "radiofrecuencia.jpg",
  },
  {
    id: 9,
    name: "Botas de Presoterapia",
    description:
      "Drenaje linfático mecánico que mejora la circulación, elimina líquidos y ayuda a combatir la celulitis.",
    duration: 50,
    price: 65,
    category: "corporal",
    image: "botas.jpg",
  },
  {
    id: 10,
    name: " Liposonix",
    description:
      "Ultrasonido focalizado de alta intensidad para eliminar grasa localizada y definir el contorno corporal.",
    duration: 80,
    price: 90,
    category: "corporal",
    image: "liposonix.jpg",
  },
  {
    id: 11,
    name: " Diseño de Cejas y Realce de Pestañas",
    description: "Diseño y cuidado de cejas y pestañas.",
    duration: 80,
    price: 90,
    category: "facial",
    image: "cejas.jpg",
  },
];
