"use client";

import { useAppUI } from "@/app/context/AppUIContext";
import SplashText from "../../ui/text/SpalshText";
import { NavBar } from "../navbar/NavBar";
import { Footer } from "../footer/footer";
import { WhatsAppBot } from "../../ui/WhatsApp/WhatsAppBot";

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
    </div>
  );
}
