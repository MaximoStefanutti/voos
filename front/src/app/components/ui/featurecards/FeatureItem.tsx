import { AutoAwesome, EmojiEvents } from "@mui/icons-material";

export default function FeatureItem({
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

// Icono de ejemplo para filosofía
function SpaIcon() {
  return <EmojiEvents sx={{ fontSize: 32, color: "#f0d4a8" }} />;
}

export function BenefitItems({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="text-center">
      <div className="bg-[#0a3635]/50 p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
        <AutoAwesome />
      </div>
      <h3 className="text-xl text-white mb-3">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  );
}
