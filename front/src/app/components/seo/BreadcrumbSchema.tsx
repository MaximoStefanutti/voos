import { formatCategoryLabel } from "@/app/lib/services/helpers";
import { CategoryKey } from "@/app/lib/services/types";

interface Props {
  category: CategoryKey;
}

export default function BreadcrumbSchema({ category }: Props) {
  const baseUrl = "https://voosestetica.com.ar";
  const categoryLabel = formatCategoryLabel(category);

  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemsListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Inicio",
        item: baseUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Tratamientos",
        item: `${baseUrl}/tratamientos`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: categoryLabel,
        item: `${baseUrl}/tratamientos/${category}`,
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
      }}
    />
  );
}
