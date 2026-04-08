"use client";

import { createContext, useContext, useState } from "react";

type LangType = "en" | "bn";

type LangContextType = {
  lang: LangType;
  setLang: (lang: LangType) => void;
};

const LangContext = createContext<LangContextType | null>(null);

export const LangProvider = ({ children }: { children: React.ReactNode }) => {
  const [lang, setLang] = useState<LangType>("en");

  return (
    <LangContext.Provider value={{ lang, setLang }}>
      {children}
    </LangContext.Provider>
  );
};

export const useLang = () => {
  const context = useContext(LangContext);
  if (!context) {
    throw new Error("useLang must be used within LangProvider");
  }
  return context;
};