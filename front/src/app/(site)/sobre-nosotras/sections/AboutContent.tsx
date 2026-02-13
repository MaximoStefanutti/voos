import FeatureItem from "@/app/components/ui/featurecards/FeatureItem";
import InfoCard from "@/app/components/ui/servicecard/InfoCard";
import { EmojiEvents, Person, WatchLater } from "@mui/icons-material";
import Image from "next/image";

export default function AboutContent() {
  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-6">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-light text-white mb-2">
            Centro de estética en Córdoba
          </h1>
          <p className="text-[#f0d4a8]/80 text-lg">
            VOOS Estética es un centro de estética en Córdoba Capital
            especializado en tratamientos faciales, corporales y bienestar
            integral.
          </p>
          <h2 className="sr-only">
            Tratamientos faciales y corporales en Córdoba Capital
          </h2>
        </header>

        {/* Historia y fotos */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">
          <div>
            <h2 className="text-3xl text-white mb-6">Nuestra Historia</h2>
            <div className="space-y-4 text-gray-300">
              <p>
                VOOS Estética nace en Córdoba Capital de la pasión por el
                bienestar integral y la belleza natural. Creamos un espacio
                donde cada persona puede acceder a tratamientos facialies y
                corporales personalizados, combinando tecnología moderna con
                técnicas especializadas
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
          <div className="relative">
            <div className="relative w-full max-w-lg mx-auto h-[500px] rounded-lg overflow-hidden">
              <Image
                src="/image/sobre-nosotras/interior-estetica.webp"
                alt="Centro de estética VOOS en Córdoba Capital"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="w-full h-auto object-contain"
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
              description="Equipo profesional en estética facial y corporal en Córdoba, con formación continua y atención personalizada."
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
      </div>
    </div>
  );
}
