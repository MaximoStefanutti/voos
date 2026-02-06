"use client";

import ServiceCard from "@/app/components/ui/servicecard/ServiceCard";
import { ServiceProps } from "@/app/helpers/services/featuredServices";

interface Props {
  service: ServiceProps[];
}

export default function ServicesGrid({ service }: Props) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {service.map((service) => (
        <ServiceCard key={service.id} {...service} />
      ))}
    </div>
  );
}
