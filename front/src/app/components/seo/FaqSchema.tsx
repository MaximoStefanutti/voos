export default function FaqSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿Que tratamientos ofrece VOOS Estética Integral?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "En VOOS Estética Integral ofrecemos tratamientos faciales, corporales y bienestar holístico personalizados según las necesidades de cada paciente.",
        },
      },
      {
        "@type": "Question",
        name: "¿Es necesario solicitar turno previo?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Si, trabajamos con turnos programados para brindar una atención personalizada. Podés solicitar tu turno por WhatsApp o Instagram.",
        },
      },
      {
        "@type": "Question",
        name: "¿Atienden hombres y mujeres?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Si, nuestros tratamientos están diseñados tanto para mujeres como para hombres.",
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
