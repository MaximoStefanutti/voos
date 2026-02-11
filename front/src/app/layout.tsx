import type { Metadata } from "next";
import "./globals.css";
import { AppUIProvider } from "./context/AppUIContext";
import { Analytics } from "@vercel/analytics/next";
import LocalBusinessSchema from "./components/seo/LocalBusinessSchema";
import FaqSchema from "./components/seo/FaqSchema";
import { url } from "inspector";

export const metadata: Metadata = {
  metadataBase: new URL("https://voos-eight.vercel.app/"),
  title: {
    default: "VOOS Estética Integral | Córdoba",
    template: "%s | VOOS Estética Integral",
  },
  description:
    "VOOS Estética es un centro de estética en Córdoba Capital especializado en tratamientos faciales, corporales y bienestar holístico con atención personalizada y profesionales calificados.",

  openGraph: {
    type: "website",
    locale: "es_AR",
    url: "https://voos-eight.vercel.app/",
    siteName: "VOOS Estética Integral",
    title: "VOOS Estética Integral | Córdoba",
    description:
      "Tratamientos faciales y corporales personalizados en Córdoba Capital. Bienestar, estética y cuidado integral.",
    images: [
      {
        url: "logo.svg",
        width: 1200,
        height: 630,
        alt: "VOOS Estética Integral - Centro de Estética en Córdoba",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "VOOS Estética Integral | Córdoba",
    description:
      "VOOS Estética es un centro de estética en Córdoba Capital especializado en tratamientos faciales, corporales y bienestar holístico",
  },

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
        <FaqSchema />
        <AppUIProvider>{children}</AppUIProvider>
        <Analytics />
      </body>
    </html>
  );
}
