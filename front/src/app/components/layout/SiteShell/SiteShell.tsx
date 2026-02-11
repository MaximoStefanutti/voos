"use client";

import { useAppUI } from "@/app/context/AppUIContext";
import SplashText from "@/app/components/ui/text/SpalshText";
import { NavBar } from "../navbar/NavBar";
import { WhatsAppBot } from "../../ui/whatsapp/WhatsAppBot";
import { Footer } from "../footer/Footer";

export function SiteShell({ children }: { children: React.ReactNode }) {
  const { splashFinished, finishSplash } = useAppUI();

  if (!splashFinished) {
    return <SplashText text="VOOS Estética" onFinish={finishSplash} />;
  }
  return (
    <div className="flex flex-col min-h-screen bg-gray-900">
      <NavBar />
      <main className="flex-grow">{children}</main>
      <Footer />
      <WhatsAppBot />

      {!splashFinished && splashFinished !== null && (
        <SplashText text="VOOS Estética" onFinish={finishSplash} />
      )}
    </div>
  );
}
