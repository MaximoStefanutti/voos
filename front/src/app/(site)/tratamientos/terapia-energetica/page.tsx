import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terapia Energética | VOOS Estética",
  description:
    "Descubri nuestros tratamientos de terapia energética en VOOS Estética",
};

export default function energyTherapyPage() {
  return (
    <section className="pt-24 pb-16">
      <div className="container mx-auto px-6">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-light text-white mb-2">
            Terapia Energétiva
          </h1>
          <p className="text-[#f0d4a8]/80 text-lg">
            Próximamente informacón detallada sobre nuestros tratamientos
          </p>
        </header>
      </div>
    </section>
  );
}
