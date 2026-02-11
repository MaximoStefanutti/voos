import { Metadata } from "next";
import ServicesSection from "./sections/ServiceSection";

export const metadata: Metadata = {
  title: "Tratamientos estéticos en Córdoba",
  description:
    "explorá nuestros tratamientos faciales y corporales en Córdoba Capital. Servicios personalizados orientados a tu bienestar integral",
  alternates: {
    canonical: "/treatment",
  },
  openGraph: {
    title: "Tratamientos estéticos en Córdoba | VOOS",
    description:
      "Servicios estéticos personalizados, bienestar integral y atención profesional en VOOS Estética.",
    url: "/treatment",
    siteName: "VOOS Estética Integral",
    locale: "es_AR",
    type: "website",
  },
};

export default function TreatmentsPage() {
  return (
    <main className="min-h-screen">
      <ServicesSection />
    </main>
  );
}
