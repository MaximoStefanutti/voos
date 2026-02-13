"use client";

import RevealOnScroll from "@/app/components/ui/animation/RevealOnScroll";
import ServiceCard from "@/app/components/ui/servicecard/ServiceCard";
import { ServiceProps } from "@/app/helpers/services/featuredServices";

interface Props {
  service: ServiceProps[];
  enableAnimations: boolean;
}

export default function ServicesGrid({ service, enableAnimations }: Props) {
  const AnimatedService = 5;
  const startAnimation = Math.max(service.length - AnimatedService, 0);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {service.map((item, index) => {
        const shouldAnimate = enableAnimations && index >= startAnimation;

        return shouldAnimate ? (
          <RevealOnScroll key={item.id} delay={(index - startAnimation) * 0.1}>
            <ServiceCard {...item} />
          </RevealOnScroll>
        ) : (
          <ServiceCard key={item.id} {...item} />
        );
      })}
    </div>
  );
}
