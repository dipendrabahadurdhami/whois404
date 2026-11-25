import { useSyncExternalStore } from "react";

const root = document.documentElement;
const listeners = new Set();

export const isDark = () => root.classList.contains("dark");
export const savedTheme = () => {
  try { return localStorage.getItem("theme"); } catch (e) { return null; }
};
// Visitor's local time decides the default: light 06:00-17:59, dark otherwise.
export const autoTheme = () => {
  const h = new Date().getHours();
  return h >= 6 && h < 18 ? "light" : "dark";
};

export function setTheme(theme, manual = true) {
  root.classList.toggle("dark", theme === "dark");
  if (manual) {
    try { localStorage.setItem("theme", theme); } catch (e) {}
  }
  listeners.forEach((l) => l());
}

export const toggleTheme = () => setTheme(isDark() ? "light" : "dark");

const subscribe = (l) => {
  listeners.add(l);
  return () => listeners.delete(l);
};
export const useDark = () => useSyncExternalStore(subscribe, isDark);

// Until the visitor picks a theme, follow their clock while the page stays open.
export function watchAutoTheme() {
  const id = setInterval(() => {
    if (!savedTheme()) setTheme(autoTheme(), false);
  }, 60000);
  return () => clearInterval(id);
}
