export default function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": ["HealthAndBeautyBusiness", "BeautySalon"],
    "@id": "https://voosestetica.com.ar/#business",
    name: "VOOS Estética Integral",
    url: "https://voosestetica.com.ar",
    logo: {
      "@type": "ImageObject",
      url: "https://voosestetica.com.ar/logo-blanco.png",
    },
    image: {
      "@type": "ImageObject",
      url: "https://voosestetica.com.ar/og-image.webp",
    },

    description:
      "Centro de estética en Córdoba Capital especializado en masajes relajantes, HIFU, radiofrecuencia, depilación definitiva y tratamientos faciales y corporales",

    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+5493515128427",
      contactType: "customer service",
      areaServed: "AR",
      availableLanguage: ["Spanish"],
    },

    address: {
      "@type": "PostalAddress",
      streetAddress: "Barrio Empalme, Chamical 2610",
      addressLocality: "Córdoba Capital",
      addressRegion: "Córdoba",
      postalCode: "5000",
      addressCountry: "AR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -31.4393,
      longitude: -64.1258,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "20:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "09:00",
        closes: "20:00",
      },
    ],

    areaServed: {
      "@type": "AdministrativeArea",
      name: "Córdoba Capital",
    },

    hasMap: "https://www.google.com/maps/search/?api=1&query=-31.4393,-64.1258",

    sameAs: [
      "https://www.instagram.com/voos_estetica",
      "https://wa.me/5493515128427",
    ],

    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Tratamientos Estéticos",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Hifu Facial y Corporal",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Masajes Relajantes",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "RadioFrecuencia",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Depilación Definitiva",
          },
        },
      ],
    },
    priceRange: "$$",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
