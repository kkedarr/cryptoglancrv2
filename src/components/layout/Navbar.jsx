import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import ThemeToggle from "../ThemeToggle";
import logo from "../../assets/images/cryptoglancrlogo.png";
import { useSearch } from "../../context/SearchContext";


const navItems = [
  { path: "/", label: "Home" },
  { path: "/dashboard", label: "Dashboard" },
  { path: "/favorites", label: "Favorites" },
  { path: "/news", label: "News" },
];



const Navbar = () => {
  const { query, setQuery } = useSearch();
  const [open, setOpen] = useState(false);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [open]);

  // ESC closes drawer
  useEffect(() => {
    const handleEsc = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <>
      {/* ===== Desktop Navbar ===== */}
      <header className="sticky top-0 z-40 backdrop-blur bg-surface-light/80 dark:bg-surface-dark/80 border-b border-border-light dark:border-border-dark transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

          {/* Logo */}
          <NavLink
            to="/"
            className="flex items-center gap-2.5 select-none"
          >
            <img
              src={logo}
              alt="CryptoGlancr"
              className="h-8 w-8 md:h-9 md:w-9 object-contain"
            />
            <span className="text-[15px] md:text-[16px] font-semibold tracking-tight text-text-primary-light dark:text-text-primary-dark">
              Crypto
              <span className="text-accent-light dark:text-accent-dark">
                Glancr
              </span>
            </span>
          </NavLink>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-8 text-sm">
            {navItems.map(({ path, label }) => (
              <NavLink
                key={path}
                to={path}
                className={({ isActive }) =>
                  `relative font-medium transition ${
                    isActive
                      ? "text-text-primary-light dark:text-text-primary-dark after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-full after:bg-accent-light dark:after:bg-accent-dark after:rounded-full"
                      : "text-text-secondary-light dark:text-text-secondary-dark hover:text-text-primary-light dark:hover:text-text-primary-dark"
                  }`
                }
              >
                {label}
              </NavLink>
            ))}
          </nav>

          {/* Right Controls */}
          <div className="flex items-center gap-3">

            {/* Search */}
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search coins..."
              className="
                hidden md:block w-56 rounded-md px-3 py-1.5 text-sm outline-none
                bg-surface-light dark:bg-surface-dark
                border border-border-light dark:border-border-dark
                text-text-primary-light dark:text-text-primary-dark
                placeholder:text-text-secondary-light dark:placeholder:text-text-secondary-dark
                focus:ring-2 focus:ring-accent-light dark:focus:ring-accent-dark
                transition
              "
            />



            <ThemeToggle />

            {/* Mobile Toggle */}
            <button
              onClick={() => setOpen((v) => !v)}
              className="
                md:hidden p-2 rounded-md
                border border-border-light dark:border-border-dark
                text-text-primary-light dark:text-text-primary-dark
                hover:bg-black/5 dark:hover:bg-white/10
                transition
              "
              aria-label="Toggle menu"
              aria-expanded={open}
            >
              <Menu size={20} />
            </button>
          </div>
        </div>
      </header>

      {/* ===== Overlay ===== */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-40 bg-black/40 dark:bg-black/60 backdrop-blur-sm"
        />
      )}

      {/* ===== Mobile Drawer ===== */}
      <aside
        role="dialog"
        aria-modal="true"
        className={`
          fixed top-0 right-0 z-50 h-full w-52
          bg-surface-light dark:bg-surface-dark
          border-l border-border-light dark:border-border-dark
          transform transition-transform duration-300 ease-out
          ${open ? "translate-x-0" : "translate-x-full"}
        `}
      >
        {/* Header */}
        <div className="h-16 px-4 flex items-center justify-between border-b border-border-light dark:border-border-dark">
          <span className="font-semibold text-text-primary-light dark:text-text-primary-dark">
            Menu
          </span>

          <button
            onClick={() => setOpen(false)}
            className="
              p-2 rounded-md
              text-text-primary-light dark:text-text-primary-dark
              hover:bg-black/5 dark:hover:bg-white/10
              transition
            "
            aria-label="Close menu"
          >
            <X size={20} />
          </button>
        </div>

        {/* Content */}
        <div className="p-5 flex flex-col gap-5">

          {/* Mobile Search */}
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search coins..."
            className="
              w-full rounded-md px-3 py-2 text-sm outline-none
              bg-surface-light dark:bg-surface-dark
              border border-border-light dark:border-border-dark
              text-text-primary-light dark:text-text-primary-dark
              placeholder:text-text-secondary-light dark:placeholder:text-text-secondary-dark
              focus:ring-2 focus:ring-accent-light dark:focus:ring-accent-dark
              transition
            "
          />



          {/* Links */}
          <nav className="flex flex-col gap-1">
            {navItems.map(({ path, label }) => (
              <NavLink
                key={path}
                to={path}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `px-3 py-2.5 rounded-md text-sm font-medium transition ${
                    isActive
                      ? "bg-accent-light/15 dark:bg-accent-dark/15 text-text-primary-light dark:text-text-primary-dark"
                      : "text-text-secondary-light dark:text-text-secondary-dark hover:bg-black/5 dark:hover:bg-white/10"
                  }`
                }
              >
                {label}
              </NavLink>
            ))}
          </nav>
        </div>
      </aside>
    </>
  );
};

export default Navbar;
