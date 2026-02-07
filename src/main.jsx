import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import { useThemeStore } from "./store/themeStore";
import { SearchProvider } from "./context/SearchContext";

function ThemeProvider({ children }) {
  const theme = useThemeStore((s) => s.theme);

  React.useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  return children;
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ThemeProvider>
      <SearchProvider>
        <App />
      </SearchProvider>
    </ThemeProvider>
  </BrowserRouter>
);
