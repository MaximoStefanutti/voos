"use client";

import {
  formatCategoryLabel,
  getServicesByCategory,
} from "@/app/lib/services/helpers";
import { CategoryData, CategoryKey } from "@/app/lib/services/types";
import Image from "next/image";
import FeatureItem, { BenefitItems } from "../featurecards/FeatureItem";
import HomeFaqSection from "@/app/components/ui/faq/HomeFaqSection";
import ServicesCategories from "@/app/(site)/tratamientos/sections/ServiceCategories";
import { buildServiceCategories } from "@/app/lib/services/serviceCategories";
import RevealOnScroll from "../animation/RevealOnScroll";
import { useIsDesktop } from "@/app/hook/useIsDesktop";

interface Props {
  data: CategoryData;
  category: CategoryKey;
}

export default function CategoryContent({ data, category }: Props) {
  const services = getServicesByCategory(category);
  const categories = buildServiceCategories();
  const isDesktop = useIsDesktop();

  return (
    <section className="pt-32 pb-20">
      <ServicesCategories categories={categories} currentCategory={category} />
      <div className="max-w-6xl mx-auto px-6">
        {/*Header*/}
        <header className="text-center mb-16">
          <h1 className="text-4xl md:text5xl font-ligth text-white mb-6 tracking-wide uppercase">
            {formatCategoryLabel(category)}
          </h1>

          <div className="w-24 h-[2px] bg-[#C6A45A] mx-auto mb-6" />

          <p className="text-[#f0d4a8]/80 text-lg max-w-3xl mx-auto">
            {data.intro}
          </p>
        </header>

        {/*contenido + imagen */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 mb-24 items-center">
          <div>
            <h2 className="text-3xl text-white mb-8">
              Sobre nuestros tratamientos
            </h2>

            <div className="space-y-8 text-gray-300">
              {data.sections.map((section, i) => (
                <div key={i}>
                  <h3 className="text-xl text-[#C6A45A] mb-3">
                    {section.title}
                  </h3>
                  <p className="leading-relaxed">{section.content}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <RevealOnScroll delay={isDesktop ? 200 : 150} direction={"right"}>
              <div className="relative w-full h-[500px] rounded-lg overflow-hidden shadow-xl">
                <Image
                  src={data.heroImage}
                  alt={data.seo.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                  aria-label="imagen de cada categoría de tratamientos de VOOS Estéstica"
                />
              </div>
            </RevealOnScroll>
          </div>
        </div>

        {/* servicios de la categoría */}

        <div className="mb-24">
          <RevealOnScroll delay={isDesktop ? 300 : 200}>
            <h2 className="text-xl text-white text-center mb-12">
              Servicios disponibles
            </h2>
          </RevealOnScroll>

          <RevealOnScroll delay={isDesktop ? 300 : 200}>
            <div
              className="grid gap-10 justify-items-center
                [grid-template-columns:repeat(auto-fit,minmax(280px,320px))]"
            >
              {services.map((service) => (
                <FeatureItem
                  key={service.id}
                  title={service.name}
                  description={service.description}
                />
              ))}
            </div>
          </RevealOnScroll>
        </div>

        {/* beneficios */}
        <RevealOnScroll delay={isDesktop ? 150 : 100} direction={"down"}>
          <div className="bg-[#0a3635]/20 rounded-xl p-10 mb-24">
            <h2 className="text-3xl text-white text-center mb-12">
              Beneficios
            </h2>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {data.benefits.map((benefit, index) => (
                <BenefitItems
                  key={index}
                  title={benefit}
                  description="
              "
                />
              ))}
            </div>
          </div>
        </RevealOnScroll>
      </div>
      {/* FAQs reutilizando componente animado */}
      {data.faqs && <HomeFaqSection faqs={data.faqs} />}
    </section>
  );
}
