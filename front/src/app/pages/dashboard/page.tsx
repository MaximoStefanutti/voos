import React from "react";
import { Favorite, Star, Spa } from "@mui/icons-material";
import { Carousel } from "@/app/components/ui/carousel/carousel";

interface ServiceProps {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
}

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function Dashboard() {
  return (
    <div className="flex flex-col">
      {/* Carousel al inicio */}
      <section className="relative">
        <Carousel />
      </section>

      {/* Sección de Bienvenida */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <h2 className="text-3xl text-center font-light text-white mb-12">
            Bienvenidos a <span className="text-[#f0d4a8]">VOOS</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Spa sx={{ fontSize: 32, color: "#f0d4a8" }} />}
              title="Bienestar Interior"
              description="Cuida el interior tanto como el exterior, porque todo es uno. Nuestros tratamientos buscan el equilibrio perfecto."
            />
            <FeatureCard
              icon={<Star sx={{ fontSize: 32, color: "#f0d4a8" }} />}
              title="Tecnología Avanzada"
              description="Poseemos equipos de última generación para ofrecerte los mejores resultados en todos nuestros tratamientos."
            />
            <FeatureCard
              icon={<Favorite sx={{ fontSize: 32, color: "#f0d4a8" }} />}
              title="Atención Personalizada"
              description="Enfoque personalizado para que te lleves una experiencia hermosa y adaptada a tus necesidades específicas."
            />
          </div>
        </div>
      </section>

      {/* Sección de Tratamientos */}
      <section className="py-16 px-6 bg-[#0a3635]/30">
        <div className="container mx-auto">
          <h2 className="text-3xl text-center font-light text-white mb-4">
            Nuestros Tratamientos Destacados
          </h2>
          <p className="text-center text-[#f0d4a8] mb-12">
            Descubre lo que VOOS tiene para ti
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredServices.map((service) => (
              <ServiceCard key={service.id} {...service} />
            ))}
          </div>
          <div className="text-center mt-10">
            <button className="px-8 py-3 bg-[#0a3635] text-[#f0d4a8] rounded-full hover:bg-[#0a3635]/80 transition-colors">
              Ver Todos los Tratamientos
            </button>
          </div>
        </div>
      </section>

      {/* Promoción Especial */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <div className="bg-black/30 rounded-xl p-8 flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-6 md:mb-0 md:pr-8">
              <h2 className="text-3xl font-light text-white mb-4">
                Promoción Especial
              </h2>
              <p className="text-[#f0d4a8] text-xl mb-4">
                Paquete de Bienestar Completo
              </p>
              <p className="text-gray-300 mb-6">
                Disfruta de nuestro paquete especial que incluye masaje
                relajante, facial rejuvenecedor y exfoliación corporal por un
                precio especial.
              </p>
              <div className="flex items-center">
                <span className="text-gray-400 line-through mr-3">$180</span>
                <span className="text-white text-2xl">$140</span>
              </div>
              <button className="mt-4 px-6 py-2 bg-[#0a3635] text-[#f0d4a8] rounded-full hover:bg-[#0a3635]/80 transition-colors">
                Reservar Ahora
              </button>
            </div>
            <div className="md:w-1/2">
              <img
                src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Promoción Especial"
                className="rounded-lg w-full h-64 object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// FeatureCard y ServiceCard quedan igual

function FeatureCard({ icon, title, description }: FeatureProps) {
  return (
    <div className="bg-black/20 backdrop-blur-sm rounded-xl p-6 flex flex-col items-center text-center transition-transform hover:transform hover:scale-105">
      <div className="bg-[#0a3635]/50 p-4 rounded-full mb-4">{icon}</div>
      <h3 className="text-xl text-white mb-3">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  );
}

function ServiceCard({ name, description, image, price }: ServiceProps) {
  return (
    <div className="bg-black/20 backdrop-blur-sm rounded-xl overflow-hidden">
      <div className="h-48 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform hover:scale-110"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl text-white mb-2">{name}</h3>
        <p className="text-gray-300 text-sm mb-4">{description}</p>
        <div className="flex justify-between items-center">
          <span className="text-[#f0d4a8]">${price}</span>
          <button className="px-4 py-1 bg-[#0a3635] text-[#f0d4a8] rounded-full text-sm hover:bg-[#0a3635]/80 transition-colors">
            Ver más
          </button>
        </div>
      </div>
    </div>
  );
}

const featuredServices: ServiceProps[] = [
  {
    id: 1,
    name: "Masaje Relajante",
    description:
      "Un masaje suave para aliviar el estrés y la tensión muscular.",
    price: 65,
    image:
      "https://images.unsplash.com/photo-1600334129128-685c5582fd35?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 2,
    name: "Facial Rejuvenecedor",
    description: "Tratamiento facial que hidrata y revitaliza la piel.",
    price: 55,
    image:
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 3,
    name: "Tratamiento Anti-edad",
    description: "Reduce líneas finas y mejora la elasticidad de la piel.",
    price: 85,
    image:
      "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
];
