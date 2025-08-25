import { getDataFromLocal, setDataInLocal } from "./localStorage";

// src/theme.ts
export type Theme = "light" | "dark";

export function setTheme(theme: Theme) {
  document.documentElement.classList.toggle("dark", theme === "dark");
  setDataInLocal("theme", theme);
}

export function getTheme(): Theme {
  return getDataFromLocal("theme") === "dark" ? "dark" : "light";
}

export function toggleTheme(): Theme {
  const next = getTheme() === "dark" ? "light" : "dark";
  setTheme(next);
  return next;
}
