import { Metadata } from "next";
import ServicesSection from "./sections/ServiceSection";

export const metadata: Metadata = {
  title: "Tratamientos Estéticos en Córdoba Capital | HIFU, Masajes y Faciales",
  description:
    "Descubrí nuestros tratamientos estéticos en Córdoba Capital: HIFU, masajes relajantes, radiofrecuencia, depilación definitiva, limpieza facial y mas. Atención personalizada y turnos por WhatsApp.",
  alternates: {
    canonical: "/tratamientos",
  },
  openGraph: {
    title: "Tratamientos estéticos en Córdoba Capital | VOOS Estética",
    description:
      "HIFU, masajes, radiofrecuencia y tratamientos faciales y coporales en Córdoba Capital. Reservá tu turno online",
    url: "/tratamientos",
    type: "website",
    locale: "es_AR",
    images: [
      {
        url: "/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Tratamientos estéticos en Córdoba Capital - VOOS",
      },
    ],
  },
};

export default function TreatmentsPage() {
  return (
    <main className="min-h-screen">
      <ServicesSection />
    </main>
  );
}
