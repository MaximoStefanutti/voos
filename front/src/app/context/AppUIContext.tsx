"use client";

import { createContext, useContext, useState } from "react";
import { AppUIContextProps } from "./type";

const AppUIContext = createContext<AppUIContextProps | null>(null);

export function AppUIProvider({ children }: { children: React.ReactNode }) {
  const [splashFinished, steSplashFinished] = useState(false);

  const finishSplash = () => steSplashFinished(true);

  const value: AppUIContextProps = {
    splashFinished,
    finishSplash,
  };

  return (
    <AppUIContext.Provider value={value}>{children}</AppUIContext.Provider>
  );
}

export function useAppUI() {
  const context = useContext(AppUIContext);
  if (!context) {
    throw new Error("UseAppUI must be used inseide AppUIProvider");
  }
  return context;
}
