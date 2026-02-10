import type { Metadata } from "next";
import "./globals.css";
import { AppUIProvider } from "./context/AppUIContext";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  title: "VOOS Estética",
  description: "Centro de estética integral",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        <title>Voos Estética</title>
      </head>
      <body>
        <AppUIProvider>{children}</AppUIProvider>
        <Analytics />
      </body>
    </html>
  );
}
