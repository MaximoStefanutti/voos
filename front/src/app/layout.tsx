import type { Metadata } from "next";
import "./globals.css";
import { AppUIProvider } from "./context/AppUIContext";
import { Analytics } from "@vercel/analytics/next";
import LocalBusinessSchema from "./components/seo/LocalBusinessSchema";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.voosestetica.com.ar"),
  title: {
    default: "Centro de estética en Córdoba | VOOS Estética integral",
    template: "%s | VOOS Estética Integral",
  },
  description:
    "VOOS Estética es un centro de estética en Córdoba Capital especializado en tratamientos faciales, corporales y bienestar integral. Atención personalizada y profesionales calificados.",
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>
        <LocalBusinessSchema />
        <AppUIProvider>{children}</AppUIProvider>
        <Analytics />
      </body>
    </html>
  );
}
