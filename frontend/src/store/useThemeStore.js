import { create } from "zustand";

// Get the saved theme from localStorage or use a default
const getInitialTheme = () => {
  const savedTheme = localStorage.getItem("chat-theme");
  if (savedTheme) {
    // Apply the theme to the HTML element on initial load
    document.documentElement.setAttribute('data-theme', savedTheme);
    return savedTheme;
  }
  // Default theme
  const defaultTheme = "coffee";
  document.documentElement.setAttribute('data-theme', defaultTheme);
  return defaultTheme;
};

export const useThemeStore = create((set) => ({
  theme: getInitialTheme(),
  setTheme: (theme) => {
    localStorage.setItem("chat-theme", theme);
    document.documentElement.setAttribute('data-theme', theme);
    set({ theme });
  },
}));
