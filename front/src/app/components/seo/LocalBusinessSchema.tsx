export default function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "HealthAndBeautyBusiness",
    "@id": "https://voos-eight.vercel.app//#business",
    name: "VOOS Estética Integral",
    url: "https://voos-eight.vercel.app/",
    logo: "https://voos-eight.vercel.app//logo-blanco.png",
    image: "https://voos-eight.vercel.app//og-image.jpg",
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
      latitude: -31.4393,
      longitude: -64.1258,
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

    areaServed: {
      "@type": "AdministrativeArea",
      name: "Córdoba Capital",
    },

    hasMap: "https://www.google.com/maps/search/?api=1&query=-31.4393,-64.1258",

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
