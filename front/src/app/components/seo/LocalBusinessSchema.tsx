export default function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "HealthAndBeautyBusiness",
    "@id": "https://www.voosestetica.com.ar/#business",
    name: "VOOS Estética Integral",
    url: "https://www.voosestetica.com.ar",
    logo: "https://www.voosestetica.com.ar/logo-blanco.png",
    image: "https://www.voosestetica.com.ar/og-image.jpg",
    description:
      "Centro de estética integral en Córdoba Capital especializado en tratamientos faciales, corporales y bienestar holístico",
    telephone: "+5493515128427",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Barrio Empalme, Chamical 2610",
      addressLocality: "Córdoba",
      addressRegion: "Córdoba",
      postalCode: "5000",
      addressCountry: "AR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -31.4167,
      longitude: -64.1833,
    },
    openingHoursSpecification: [
      {
        "@type": "openingHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "09:00",
        closes: "20:00",
      },
    ],
    sameAs: [
      "https://www.instagram.com/voosestetica",
      "https://wa.me/5493515128427",
    ],
    priceRange: "$$",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
