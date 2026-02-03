"use client";

import FeatureCard from "@/app/components/ui/featurecards/FeatureCard";
import { Favorite, Spa, Star } from "@mui/icons-material";

export default function WelcomeSection() {
  return (
    <section className="py-16 px-6">
      <div className="container mx-auto">
        <h1 className="text-4xl md:text-5xl text-center font-light text-white mb-4">
          Bienvenidos a <span className="text-[#f0d4a8]">VOOS Estética</span>
        </h1>
        <p className="text-[#f0d4a8] text-center text-base md:text-lg max-w-x1 mx-auto">
          Un espacio pensado para tu bienestar y belleza integral
        </p>
        <div className="flex justify-center items-center gap-6 mt-8">
          <FeatureCard
            icon={<Spa sx={{ fontSize: 32, color: "#f0d4a8" }} />}
            title="Bienestar Interior"
            description="Cuiddamos el equilibrio entre cuerpo y mente."
          />
          <FeatureCard
            icon={<Star sx={{ fontSize: 32, color: "#f0d4a8" }} />}
            title="Bienestar Interior"
            description="Cuiddamos el equilibrio entre cuerpo y mente."
          />
          <FeatureCard
            icon={<Favorite sx={{ fontSize: 32, color: "#f0d4a8" }} />}
            title="Bienestar Interior"
            description="Cuiddamos el equilibrio entre cuerpo y mente."
          />
        </div>
      </div>
    </section>
  );
}
