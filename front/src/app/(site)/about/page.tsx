import { Metadata } from "next";
import AboutContent from "./sections/AboutContent";
import ContactSection from "./sections/ContacSection";

export const metadata: Metadata = {
  title: "Sobre nosotras",
  description:
    "Conocé la filosofía de VOOS Estética Integral. Un enfoque holístico que combina naturalidad, equilibrio y excelencia en cada tratamiento.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "Sobre VOOS Estética Integral",
    description:
      "Nuestra filosofía de trabajo se basa en la naturalidad, el equilibrio y la excelencia profesional.",
    url: "/about",
    siteName: "VOOS Estética Integral",
    locale: "es_AR",
    type: "article",
  },
};

export default function AboutPage() {
  return (
    <>
      <AboutContent />
      <ContactSection />
    </>
  );
}
