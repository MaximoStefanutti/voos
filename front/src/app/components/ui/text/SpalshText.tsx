import { useEffect, useState } from "react";
import GradientText from "./GradientText";
import { useAppUI } from "@/app/context/AppUIContext";

interface SplashTextProps {
  text: string;
  duration?: number; // duración en ms antes de redirigir
  onFinish?: () => void; // callback para redirigir
}

export default function SplashText({
  text,
  duration = 2000,
  onFinish,
}: SplashTextProps) {
  const [visible, setVisible] = useState(true);
  const { finishSplash } = useAppUI();

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);

      finishSplash();

      if (onFinish) onFinish();
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, finishSplash, onFinish]);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 z-[9999]">
      <GradientText
        colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
        animationSpeed={3}
        showBorder={false}
        className="text-5xl md:text-7xl"
      >
        {text}
      </GradientText>
    </div>
  );
}
