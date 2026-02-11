import "./globals.css";
import { metadata } from "./metadata";
import { AppUIProvider } from "./context/AppUIContext";
import { Analytics } from "@vercel/analytics/next";
import LocalBusinessSchema from "./components/seo/LocalBusinessSchema";
import FaqSchema from "./components/seo/FaqSchema";

export { metadata };

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
