import { Moon, Sun } from "lucide-react";
import { useThemeStore } from "../store/themeStore";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useThemeStore();

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className="
        relative inline-flex items-center justify-center
        h-9 w-9 rounded-lg
        border border-border-light dark:border-border-dark
        bg-surface-light dark:bg-surface-dark
        text-text-primary-light dark:text-text-primary-dark

        hover:bg-accent-light/10 dark:hover:bg-accent-dark/10
        active:scale-95

        focus:outline-none focus:ring-2
        focus:ring-accent-light dark:focus:ring-accent-dark
        focus:ring-offset-2
        focus:ring-offset-bg-light dark:focus:ring-offset-bg-dark

        transition-all duration-200
      "
    >
      {theme === "light" ? (
        <Moon size={18} className="opacity-90" />
      ) : (
        <Sun size={18} className="opacity-90" />
      )}
    </button>
  );
}


export default ThemeToggle;