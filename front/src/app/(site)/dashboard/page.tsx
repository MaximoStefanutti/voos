import { Metadata } from "next";
import { CarouselSection } from "./sections/CarouselSection";
import FeaturedServicesSection from "./sections/FeaturedServicesSection";
import PromoSection from "./sections/PromoSection";
import WelcomeSection from "./sections/WelcomeSection";
import FaqSchema from "@/app/components/seo/FaqSchema";
import FaqSection from "./sections/FaqSection";

export const metadata: Metadata = {
  title:
    "Centro de estética en Córdoba | Masajes, HIFU y Tratamientos Faciales",
  description:
    "Centro de estética en Córdoba Capital especializado en masajes relajantes, HIFU, radiofrecuencia, depilación definitiva y tratamientos faciales y corporales. Reservá tu turno por WhatsApp.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Centro de estética en Córdoba | VOOS Estética Integral ",
    description:
      "Masajes, HIFU, radiofrecuenia y tratamientos faciales en Córdoba Capital. Atención personalizada y turnos online.",
    url: "/",
    type: "website",
    locale: "es_AR",
    images: [
      {
        url: "image/logo/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Centro de Estética VOOS en Córdoba Capital",
      },
    ],
  },
};

export default function DashboardPage() {
  return (
    <>
      <CarouselSection />
      <WelcomeSection />
      <FeaturedServicesSection />
      <PromoSection />
      <FaqSection />
      <FaqSchema />
    </>
  );
}
