export type ServiceCategory =
  | "masajes"
  | "facial"
  | "corporal"
  | "depilación"
  | "terapia energética";

export interface ServiceProps {
  id: number;
  name: string;
  description: string;
  category: ServiceCategory;
  image: string;
}

export const services: ServiceProps[] = [
  {
    id: 1,
    name: "Masaje Relajante",
    description:
      "Un masaje suave para aliviar el estrés y la tensión muscular.",
    category: "masajes",
    image: "masajes.png",
  },
  {
    id: 2,
    name: "Facial Rejuvenecedor",
    description: "Tratamiento facial que hidrata y revitaliza la piel.",
    category: "facial",
    image: "facial.jpg",
  },

  {
    id: 3,
    name: "Manicura y Pedicura",
    description: "Cuidado completo de manos y pies con esmalte premium.",
    category: "corporal",
    image: "manicura.jpg",
  },
  {
    id: 4,
    name: "Depilación Definitiva",
    description: "Elimina el vello no deseado. Resultados duraderos.",
    category: "depilación",
    image: "depilación.jpg",
  },
  {
    id: 5,
    name: "HIFU corporal",
    description:
      "Reafirma y tensa la piel del abdomen, brazos, glúteos y piernas sin cirugía.",
    category: "corporal",
    image: "hifu-corporal.jpg",
  },
  {
    id: 6,
    name: "HIFU",
    description:
      "Rejuvenece la piel desde capas profundas con un efecto lifting sin cirugía.",
    category: "facial",
    image: "hifu.jpg",
  },
  {
    id: 7,
    name: "Vela terapia",
    description: "Reducción de Celulitis y Moldeo Corporal sin Cirugía.",
    category: "corporal",
    image: "vela.jpg",
  },
  {
    id: 8,
    name: "Radiofrecuencia Fraccionada",
    description:
      "Estimula el colágeno, mejora arrugas, textura y firmeza del rostro sin dañar la superficie cutánea.",
    category: "facial",
    image: "radiofrecuencia.jpg",
  },
  {
    id: 9,
    name: "Botas de Presoterapia",
    description:
      "Drenaje linfático mecánico que mejora la circulación, elimina líquidos y ayuda a combatir la celulitis.",
    category: "corporal",
    image: "presoterapia.jpg",
  },
  {
    id: 10,
    name: " Liposonix",
    description:
      "Ultrasonido focalizado de alta intensidad para eliminar grasa localizada y definir el contorno corporal.",
    category: "corporal",
    image: "liposonix.jpg",
  },
  {
    id: 11,
    name: " Diseño de Cejas y Realce de Pestañas",
    description: "Diseño y cuidado de cejas y pestañas.",
    category: "facial",
    image: "cejas.jpg",
  },

  {
    id: 12,
    name: "Péndulo hebreo",
    description:
      "Tratamiento de tererapia energétiva para equilibrar el cuerpo y la mente.",
    category: "terapia energética",
    image: "pendulo.jpg",
  },

  {
    id: 13,
    name: "Botox",
    description:
      "Tratamiento para reducir arrugas faciales mediante inyecciones de toxina botulínica.",
    category: "facial",
    image: "botox.jpg",
  },

  {
    id: 14,
    name: "Reiki",
    description:
      "Terapia energética que promueve la relajación y el equilibrio emocional a través de la imposición de manos.",
    category: "terapia energética",
    image: "reiki.jpg",
  },

  {
    id: 15,
    name: "Maderoterapia",
    description:
      "Técnica de masaje que utiliza herramientas de madera para estimular la circulación y tonificar el cuerpo.",
    category: "masajes",
    image: "maderoterapia.jpg",
  },

  {
    id: 16,
    name: "Limpieza Facial",
    description:
      "Limpieza profunda para eliminar impurezas y revitalizar la piel del rostro.",
    category: "facial",
    image: "limpieza-facial.jpg",
  },
];
