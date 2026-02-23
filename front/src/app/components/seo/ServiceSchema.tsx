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
    provider: {
      "@type": "LocalBusiness",
      name: "VOOS Estética Integral",
      url: "https://voosestetica.com.ar",
    },
    areaServerd: {
      "@type": "AdministativeArea",
      name: "Córdoba Cpaital",
    },
    availlableChannel: {
      "@type": "Place",
      adddres: {
        "@type": "PostalAddress",
        adddresLocality: "Córdoba",
        addressRegion: "Córdoba",
        addressCountry: "AR",
      },
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
