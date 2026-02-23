import BreadcrumbSchema from "@/app/components/seo/BreadcrumbSchema";
import FaqSchema from "@/app/components/seo/faq/FaqSchema";
import ServiceSchema from "@/app/components/seo/ServiceSchema";
import CategoryContent from "@/app/components/ui/category/CategoryContent";
import { categoryContent } from "@/app/lib/services/categoryContent";
import { CategoryKey } from "@/app/lib/services/types";
import { Metadata } from "next";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{
    category: CategoryKey;
  }>;
};

export function generateStaticParams() {
  return Object.keys(categoryContent).map((category) => ({
    category,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = await params;
  const data = categoryContent[category];

  if (!data) {
    return {
      title: "Tratamiento no encontrado | VOOS Estética",
    };
  }

  const baseUrl = "https://voosestetica.com.ar";

  return {
    title: data.seo.title,
    description: data.seo.description,

    alternates: {
      canonical: `${baseUrl}/tratamientos/${category}`,
    },

    openGraph: {
      title: data.seo.title,
      description: data.seo.description,
      url: `${baseUrl}/tratamientos/${category}`,
      siteName: "VOOS Estética",
      locale: "es_AR",
      type: "website",
      images: [
        {
          url: `${baseUrl}${data.heroImage}`,
          width: 1200,
          height: 630,
          alt: data.seo.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: data.seo.title,
      description: data.seo.description,
      images: [`${baseUrl}${data.heroImage}`],
    },
  };
}

export default async function CatagoryPage({ params }: Props) {
  const { category } = await params;
  const data = categoryContent[category];

  if (!data) notFound();

  return (
    <>
      <CategoryContent data={data} category={category} />
      {data.faqs && <FaqSchema faqs={data.faqs} />}
      <BreadcrumbSchema category={category} />

      <ServiceSchema
        name={`${data.seo.title} en Córdoba`}
        description={data.seo.description}
        url={`https://voosestetica.com.ar/tratamientos/${category}`}
      />
    </>
  );
}
