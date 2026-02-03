interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function FeatureCard({
  icon,
  title,
  description,
}: FeatureCardProps) {
  return (
    <div className="bg-black/20 backdrop-blur-sm rounded-xl p-6 flex flex-col items-center text-center transition-transform hover:transform hover:scale-105">
      <div className="bg-[#0a3635]/50 p-4 rounded-full mb-4">{icon}</div>
      <h3 className="text-xl text-white mb-3">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  );
}
