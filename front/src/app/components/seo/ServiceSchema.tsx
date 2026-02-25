import { address } from "framer-motion/client";

interface Props {
  name: string;
  description: string;
  url: string;
}

export default function ServiceSchema({ name, description, url }: Props) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${url}#service`,
    name,
    description,
    url,

    mainEntityOfPage: {
      "@id": url,
    },

    provider: {
      "@id": "https://voosestetica.com.ar/#business",
    },

    areaServed: {
      "@type": "AdministrativeArea",
      name: "Córdoba Capital",
    },

    availableChannel: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Córdoba",
        addressRegion: "Córdoba",
        addressCountry: "AR",
      },
    },

    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      priceCurrency: "ARS",
      url: url,
    },
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
