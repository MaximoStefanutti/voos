"use client";
import React from "react";
import { EmojiEvents, Person, WatchLater } from "@mui/icons-material";

export function AboutSection() {
  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-6">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-light text-white mb-2">Sobre VOOS</h1>
          <p className="text-[#f0d4a8]/80 text-lg">
            Conoce nuestra filosofía y lo que nos hace diferentes
          </p>
        </header>

        {/* Historia y fotos */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">
          <div>
            <h2 className="text-3xl text-white mb-6">Nuestra Historia</h2>
            <div className="space-y-4 text-gray-300">
              <p>
                VOOS nace de la pasión por el bienestar integral y la belleza
                natural. Fundada con la visión de crear un espacio donde cada
                persona pueda encontrar su mejor versión, combinando técnicas
                ancestrales con tecnología de vanguardia.
              </p>
              <p>
                Nuestro nombre, VOOS, representa el vuelo hacia una mejor
                versión de uno mismo, un viaje de transformación y
                descubrimiento personal que acompañamos con dedicación y
                profesionalismo.
              </p>
              <p>
                Desde nuestros inicios, nos hemos comprometido con la excelencia
                en cada tratamiento, creando experiencias personalizadas que
                nutren tanto el cuerpo como el espíritu.
              </p>
            </div>
          </div>
          <div className="relative h-80 lg:h-auto">
            <div className="absolute w-3/4 h-3/4 top-0 right-0 rounded-lg overflow-hidden">
              <img
                src="https://uploadthingy.s3.us-west-1.amazonaws.com/8ssFAZhHfrQn3x42BRn8Af/fondo.png"
                alt="VOOS Ambiente"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute w-2/3 h-2/3 bottom-0 left-0 rounded-lg overflow-hidden border-4 border-[#0a3635] shadow-xl">
              <img
                src="https://uploadthingy.s3.us-west-1.amazonaws.com/wfNhAFUXwHjD3X6ogVgL1W/image.png"
                alt="VOOS Filosofía"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Filosofía */}
        <div className="bg-[#0a3635]/20 rounded-xl p-8 mb-16">
          <h2 className="text-3xl text-white text-center mb-10">
            Nuestra Filosofía
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureItem
              title="Naturalidad"
              description="Potenciamos tu belleza natural sin artificios innecesarios. Creemos en realzar lo que ya existe en ti."
            />
            <FeatureItem
              title="Equilibrio"
              description="Buscamos la armonía entre belleza exterior y bienestar interior. Un enfoque holístico para tu bienestar."
            />
            <FeatureItem
              title="Excelencia"
              description="Nos comprometemos con la calidad en cada tratamiento y servicio. Tu satisfacción es nuestra prioridad."
            />
          </div>
        </div>

        {/* Por qué elegirnos */}
        <div className="text-center mb-16">
          <h2 className="text-3xl text-white mb-8">¿Por qué elegirnos?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <InfoCard
              icon={<Person sx={{ fontSize: 40, color: "#f0d4a8" }} />}
              title="Profesionales Calificados"
              description="Nuestro equipo está formado por expertos con amplia experiencia y formación continua en las últimas técnicas."
            />
            <InfoCard
              icon={<EmojiEvents sx={{ fontSize: 40, color: "#f0d4a8" }} />}
              title="Productos Premium"
              description="Utilizamos solo productos de la más alta calidad, naturales y respetuosos con tu piel y el medio ambiente."
            />
            <InfoCard
              icon={<WatchLater sx={{ fontSize: 40, color: "#f0d4a8" }} />}
              title="Atención Personalizada"
              description="Cada tratamiento se adapta a tus necesidades específicas, creando una experiencia única y efectiva."
            />
          </div>
        </div>

        {/* Visítanos */}
        <div className="text-center">
          <h2 className="text-3xl text-white mb-4">Visítanos</h2>
          <p className="text-[#f0d4a8] mb-8">
            Te esperamos para comenzar tu viaje hacia tu mejor versión
          </p>
          <div className="bg-black/20 backdrop-blur-sm rounded-xl p-6 max-w-xl mx-auto">
            <p className="text-white mb-2">B° Empalme, calle Chamical 2610</p>
            <p className="text-white mb-4">Córdoba, Argentina.</p>
            <p className="text-white mb-2">Tel: (351) 156-xxx-xx</p>
            <p className="text-white">Email: contacto@voos.com</p>
            <div className="mt-6">
              <button className="px-8 py-3 bg-[#0a3635] text-[#f0d4a8] rounded-full hover:bg-[#0a3635]/80 transition-colors">
                Contáctanos
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Componentes reutilizables
function FeatureItem({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="text-center">
      <div className="bg-[#0a3635]/50 p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
        <SpaIcon />
      </div>
      <h3 className="text-xl text-white mb-3">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  );
}

function InfoCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="bg-black/20 backdrop-blur-sm rounded-xl p-6">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl text-white mb-3">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  );
}

// Icono de ejemplo para filosofía
function SpaIcon() {
  return <EmojiEvents sx={{ fontSize: 32, color: "#f0d4a8" }} />;
}
