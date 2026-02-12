import { desc } from "framer-motion/client";
import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://voosestetica.com.ar"),
  title: {
    default: "VOOS Estética Integral | Córdoba",
    template: "%s | VOOS Estética Integral",
  },
  description:
    "VOOS Estética es un centro de estética en Córdoba Capital especializado en tratamientos faciales, corporales y bienestar holístico con atención personalizada y profesionales calificados.",

  keywords: [
    "centro de estética en Córdoba",
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
    title: "VOOS Estética Integral | Centro de estética en Córdoba",
    description:
      "Estética holística que combina técnicas ancestrales con tecnología moderna para tu bienestar integral en Córdoba Capital.",
    images: [
      {
        url: "og-image.webp",
        width: 1200,
        height: 630,
        alt: "VOOS Estética Integral - Centro de Estética en Córdoba",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "VOOS Estética Integral | Córdoba",
    description:
      "VOOS Estética es un centro de estética en Córdoba Capital especializado en tratamientos faciales, corporales y bienestar holístico",
    images: ["/og-image.webp"],
  },
};
