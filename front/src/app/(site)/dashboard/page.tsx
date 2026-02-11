import { Metadata } from "next";
import { CarouselSection } from "./sections/CarouselSection";
import FeaturedServicesSection from "./sections/FeaturedServicesSection";
import PromoSection from "./sections/PromoSection";
import WelcomeSection from "./sections/WelcomeSection";

export const metadata: Metadata = {
  title: "Centro de estética en Córdoba | VOOS Estética integral",
  description:
    "VOOS Estética es un centro de estética en Córdoba Capital especializado en tratamientos faciales, corporales y bienestar integral. Atención personalizada y profesionales calificados.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "VOOS Estética Integral | Centro de estética en Córdoba",
    description:
      "Descubrí tratamientos faciales, corporales y bienestar integral con atención personalizada en Córdoba.",
    url: "/",
    siteName: "VOOS Estética Integral",
    locale: "es_AR",
    type: "website",
  },
};

export default function DashboardPage() {
  return (
    <>
      <CarouselSection />
      <WelcomeSection />
      <FeaturedServicesSection />
      <PromoSection />
    </>
  );
}
