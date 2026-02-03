"use client";

import { CarouselSection } from "./sections/CarouselSection";
import FeaturedServicesSection from "./sections/FeaturedServicesSection";
import PromoSection from "./sections/PromoSection";
import WelcomeSection from "./sections/WelcomeSection";

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
