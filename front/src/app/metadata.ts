import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://voosestetica.com.ar"),
  title: {
    default:
      "Centro de estética en Córdoba Capital | Masajes, HIFU y Tratamientos Faciales",
    template: "%s | VOOS Estética Integral",
  },
  description:
    "Centro de estética en Córdoba Capital especializado en masajes relajantes, HIFU, radiofrecuencia, depilación definitiva y tratamientos faciales y corporales. Atención personalizada y tunos por WhatsApp.",
  keywords: [
    "centro de estética en Córdoba",
    "masajes en Córdoba",
    "HIFU en Córdoba",
    "radiofrecuencia en Córdoba",
    "depilación definitiva en Córdoba",
    "tratamientos faciales Córdoba",
    "tratamientos corporales Córdoba",
    "estética integral Córdoba",
  ],

  authors: [{ name: "VOOS Estética Integral" }],
  creator: "VOOS Estética Integral",
  publisher: "VOOS Estética Integral",

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    type: "website",
    locale: "es_AR",
    url: "https://voosestetica.com.ar",
    siteName: "VOOS Estética Integral",
    title: "Centro de estética en Córdoba Capital | VOOS Estética Integral",
    description:
      "Masajes, HIFU, radiofrecuencia y tratamientos faciales y corporales en Córdoba Capital. Reeservá tu turno por Whatsapp y viví la experiencia VOOS Estética Integral.",
    images: [
      {
        url: "image/logo/og-image.webp",
        width: 1200,
        height: 630,
        alt: "VOOS Estética Integral - Centro de Estética en Córdoba",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Centro de estética en Córdoba Capital | VOOS Estética Integral",
    description:
      "Especialistas en tratamientos faciales, corporales y bienestar integral en Córdoba Capital.",
    images: ["image/logo/og-image.webp"],
  },
};
