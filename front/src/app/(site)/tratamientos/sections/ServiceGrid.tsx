"use client";

import RevealOnScroll from "@/app/components/ui/animation/RevealOnScroll";
import ServiceCard from "@/app/components/ui/servicecard/ServiceCard";
import { useIsDesktop } from "@/app/hook/useIsDesktop";
import { Service } from "@/app/lib/services/types";

interface Props {
  service: Service[];
}

export default function ServicesGrid({ service }: Props) {
  const isDesktop = useIsDesktop();

  const AnimatedService = 5;
  const startAnimation = Math.max(service.length - AnimatedService, 0);

  return (
    <div className="grid grid-cols-1 md:gird-cols-2 lg:grid-cols-3 gap-8">
      {service.map((item, index) => {
        const shouldAnimate = isDesktop && index >= startAnimation;

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
