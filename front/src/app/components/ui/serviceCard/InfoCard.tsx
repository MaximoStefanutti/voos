export default function InfoCard({
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
