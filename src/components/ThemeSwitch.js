"use client";
import { useThemeContext } from "@/context/theme-context";

const ThemeSwitch = () => {
  const { theme, setTheme } = useThemeContext();

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="flex items-center justify-center rounded-full w-8 h-8 bg-transparent border border-gray-400 dark:border-gray-600"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? "☀️" : "🌙"}
    </button>
  );
};

export default ThemeSwitch;