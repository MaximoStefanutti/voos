import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tratamientos Masajes | VOOS Estética",
  description: "Descubri nuestros tratamientos de masajes en VOOS Estética",
};

export default function massagesPage() {
  return (
    <section className="pt-24 pb-16">
      <div className="container mx-auto px-6">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-light text-white mb-2">Masajes</h1>
          <p className="text-[#f0d4a8]/80 text-lg">
            Próximamente informacón detallada sobre nuestros tratamientos
          </p>
        </header>
      </div>
    </section>
  );
}
