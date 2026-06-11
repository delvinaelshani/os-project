import { createContext, useContext } from "react";

export type ThemeMode = "light" | "dark";

export interface ThemeContextValues {
  theme: ThemeMode;
  toggleTheme: () => void;
  setTheme: (theme: ThemeMode) => void;
}

export const ThemeContext = createContext<ThemeContextValues>({
  theme: "light",
  toggleTheme: () => {},
  setTheme: () => {},
});

export const useThemeContext = () => useContext(ThemeContext);
