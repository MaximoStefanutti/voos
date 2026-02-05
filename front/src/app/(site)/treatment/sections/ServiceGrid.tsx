"use client";

import ServiceCard from "@/app/components/ui/servicecard/ServiceCard";

interface Props {
  services: any[];
}

export default function ServicesGrid({ services }: Props) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {services.map((services) => (
        <ServiceCard key={services.id} {...services} />
      ))}
    </div>
  );
}
