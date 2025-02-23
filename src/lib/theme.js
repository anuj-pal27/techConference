import { writable } from 'svelte/store';
import { browser } from '$app/environment'; 

const prefersDark = browser && window.matchMedia("(prefers-color-scheme: dark)").matches;
const storedTheme = browser ? localStorage.getItem("theme") : null;

export const darkMode = writable(storedTheme ? storedTheme === "dark" : prefersDark);

export function toggleDarkMode() {
  darkMode.update(value => {
    if (browser) {
      const newTheme = !value;
      localStorage.setItem("theme", newTheme ? "dark" : "light");
      document.documentElement.classList.toggle("dark", newTheme);
      return newTheme;
    }
    return value;
  });
}
