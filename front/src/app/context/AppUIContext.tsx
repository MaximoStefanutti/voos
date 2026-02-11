"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { AppUIContextProps } from "./type";

const AppUIContext = createContext<AppUIContextProps | null>(null);

export function AppUIProvider({ children }: { children: React.ReactNode }) {
  const [splashFinished, setsplashFinished] = useState(false);

  useEffect(() => {
    const hasSeenSplash = sessionStorage.getItem("voos_splash_seen");
    if (hasSeenSplash) {
      setsplashFinished;
    }
  }, []);

  const finishSplash = () => {
    sessionStorage.setItem("voos_splash_seen", "true");
    setsplashFinished(true);
  };

  return (
    <AppUIContext.Provider value={{ splashFinished, finishSplash }}>
      {children}
    </AppUIContext.Provider>
  );
}
export function useAppUI() {
  const context = useContext(AppUIContext);
  if (!context) {
    throw new Error("useAppUI must be used inside AppUIProvaider");
  }
  return context;
}
