"use client";

import React, { useState } from "react";
import { Dashboard } from "./pages/dashboard/page";
import { AboutSection } from "./pages/about/page";
import { ServicesSection } from "./pages/treatment/page";
import { NavBar } from "./components/layout/navbar/NavBar";
import { Footer } from "./components/layout/footer/footer";
import SplashText from "./components/ui/text/SpalshText";

type Section = "home" | "about" | "service";

export default function HomePage() {
  const [activeSection, setActiveSection] = useState<Section>("home");
  const [showSplash, setShowSplash] = useState(true); // corregido nombre

  const renderSection = () => {
    switch (activeSection) {
      case "home":
        return <Dashboard />;
      case "about":
        return <AboutSection />;
      case "service":
        return <ServicesSection />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <>
      {showSplash && (
        <SplashText
          text="VOOS"
          duration={2500}
          onFinish={() => setShowSplash(false)}
        />
      )}

      {!showSplash && (
        <div className="flex flex-col min-h-screen bg-gray-900">
          {/* Navbar */}
          <NavBar
            activeSection={activeSection}
            setActiveSection={setActiveSection}
          />

          {/* Contenido principal */}
          <main className="flex-grow">
            <section id={activeSection}>{renderSection()}</section>
          </main>

          {/* Footer */}
          <Footer />
        </div>
      )}
    </>
  );
}
