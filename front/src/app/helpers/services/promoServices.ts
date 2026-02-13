export type Promo = {
  title: string;
  description: string;
  image: string;
  message: string;
};

export const promos: Promo[] = [
  {
    title: "2x1 en HIFU Facial",
    description:
      "Celebrá el Día de los Enamorados con un tratamiento premium de rejuvenecimiento.",
    image: "image/promo/hifu-promo.webp",
    message: "¡Hola! Me gustaría reservar la promoción 2x1 HIFU Facial",
  },

  {
    title: "2x1 en Limpieza Facial",
    description:
      "Regalá bienestar y luminosidad con nuestra limpieza facial profunda en este Día de los Enamorados.",
    image: "image/promo/facial-promo.webp",
    message: "¡Hola! Me gustaría reservar la promoción 2x1 Limpieza Facial",
  },
];
