import { createContext, useContext, useState, ReactNode } from "react";
import { Lang, content } from "@/i18n/content";

type LanguageContextType = {
  lang: Lang;
  toggleLang: () => void;
  t: typeof content["en"];
};

const LanguageContext = createContext<LanguageContextType | null>(null);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Lang>("ko");
  const toggleLang = () => setLang((l) => (l === "en" ? "ko" : "en"));
  return (
    <LanguageContext.Provider value={{ lang, toggleLang, t: content[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLang = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLang must be used within LanguageProvider");
  return ctx;
};
