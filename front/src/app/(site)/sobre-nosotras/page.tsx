import { Metadata } from "next";
import AboutContent from "./sections/AboutContent";
import ContactSection from "./sections/ContacSection";

export const metadata: Metadata = {
  title: "Sobre VOOS Estética | Centro de Estética en Córdoba Capital",
  description:
    "Conocé la filosofía de VOOS Estética Integral, centro de estética en Córdoba Capital. Un enfoque holístico que combina naturalidad, equilibrio y excelencia profesional.",
  alternates: {
    canonical: "/sobre-nosotras",
  },
  openGraph: {
    title:
      "Sobre VOOS Estética Integral | Centro de Estética en Córdoba Capital",
    description:
      "Descubrí nuestra filosofía de trabajo basada en naturalidad, equilibrio y excelencia en cada tratamiento en Córdoba Capital.",
    url: "/sobre-nosotras",
    type: "article",
    locale: "es_AR",
    images: [
      {
        url: "/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Equipo de VOOS Estética",
      },
    ],
  },
};

export default function SobreNosotrasPage() {
  return (
    <>
      <AboutContent />
      <ContactSection />
    </>
  );
}
