import React, { createContext, useContext, useState, useEffect } from "react";

type ThemeMode = "light" | "dark";

type ColorThemeContextType = {
  themeMode: ThemeMode;
  toggleThemeMode: () => void;
};

const ColorThemeContext = createContext<ColorThemeContextType | undefined>(
  undefined
);

export const useColorTheme = () => {
  const context = useContext(ColorThemeContext);
  if (!context) {
    throw new Error("useColorTheme must be used within a ColorThemeProvider");
  }
  return context;
};

export const ColorThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [themeMode, setThemeMode] = useState<ThemeMode>(
    typeof window !== "undefined" &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light"
  );

  useEffect(() => {
    const root = document.documentElement;

    if (themeMode === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [themeMode]);

  const toggleThemeMode = () => {
    setThemeMode((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ColorThemeContext.Provider value={{ themeMode, toggleThemeMode }}>
      {children}
    </ColorThemeContext.Provider>
  );
};
