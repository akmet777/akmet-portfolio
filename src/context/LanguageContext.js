"use client";

import { createContext, useContext, useCallback, useMemo, useState } from "react";

const LanguageContext = createContext(null);

// Helper to get initial language safely (prevents hydration mismatch)
function getInitialLanguage() {
  if (typeof window === "undefined") {
    return "mn"; // Default to Mongolian for SSR
  }
  try {
    const stored = window.localStorage.getItem("portfolio-language");
    return stored === "en" || stored === "mn" ? stored : "mn";
  } catch {
    return "mn";
  }
}

export function LanguageProvider({ children }) {
  // Initialize with function to read from localStorage immediately
  const [language, setLanguage] = useState(() => getInitialLanguage());

  const switchLanguage = useCallback((lang) => {
    setLanguage(lang);
    try {
      if (typeof window !== "undefined") {
        window.localStorage.setItem("portfolio-language", lang);
      }
    } catch (error) {
      console.warn("Failed to save language preference:", error);
    }
  }, []);

  const toggleLanguage = useCallback(() => {
    switchLanguage(language === "en" ? "mn" : "en");
  }, [language, switchLanguage]);

  const value = useMemo(
    () => ({
      language,
      toggleLanguage,
      switchLanguage,
    }),
    [language, toggleLanguage, switchLanguage]
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};

