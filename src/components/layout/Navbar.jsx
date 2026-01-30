import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import ThemeToggle from "../ThemeToggle";
import logo from "../../assets/images/cryptoglancrlogo.png";

const linkBase =
  "relative transition font-medium hover:text-text-primary-light dark:hover:text-text-primary-dark";

const activeLink =
  "text-text-primary-light dark:text-text-primary-dark after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-full after:bg-accent-light dark:after:bg-accent-dark after:rounded-full";

const inactiveLink =
  "text-text-secondary-light dark:text-text-secondary-dark";

const navItems = [
  { path: "/", label: "Home" },
  { path: "/dashboard", label: "Dashboard" },
  { path: "/favorites", label: "Favorites" },
  { path: "/news", label: "News" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* ===== Desktop Navbar ===== */}
      <header className="sticky top-0 z-40 backdrop-blur bg-surface-light/80 dark:bg-surface-dark/80 border-b border-border-light dark:border-border-dark">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

          {/* Logo */}
          {/* Brand */}
          <div className="flex items-center gap-2.5 select-none">
            <img
              src={logo}
              alt="CryptoGlance"
              className="
                h-8 w-8 md:h-9 md:w-9
                object-contain
              "
            />

            <span
              className="
                text-[15px] md:text-[16px]
                font-semibold
                tracking-tight
                text-text-primary-light dark:text-text-primary-dark
              "
            >
              Crypto
              <span className="text-accent-light dark:text-accent-dark">
                Glancr
              </span>
            </span>
          </div>


          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-8 text-sm">
            {navItems.map(({ path, label }) => (
              <NavLink
                key={path}
                to={path}
                className={({ isActive }) =>
                  `${linkBase} ${isActive ? activeLink : inactiveLink}`
                }
              >
                {label}
              </NavLink>
            ))}
          </nav>

          {/* Right Controls */}
          <div className="flex items-center gap-3">

            {/* Search (desktop only) */}
            <input
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

            {/* Mobile Menu Button */}
            <button
              onClick={() => setOpen(true)}
              className="md:hidden p-2 rounded-md border border-border-light dark:border-border-dark"
              aria-label="Open menu"
            >
              <Menu size={20} />
            </button>
          </div>
        </div>
      </header>

      {/* ===== Mobile Overlay ===== */}
      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        />
      )}

      {/* ===== Mobile Drawer ===== */}
      <aside
        className={`
          fixed top-0 right-0 z-50 h-full w-42
          bg-surface-light dark:bg-surface-dark
          border-l border-border-light dark:border-border-dark
          transform transition-transform duration-300 ease-in-out
          ${open ? "translate-x-0" : "translate-x-full"}
        `}
      >
        {/* Drawer Header */}
        <div className="h-16 px-4 flex items-center justify-between border-b border-border-light dark:border-border-dark">
          <span className="font-semibold text-primary-light dark:text-primary-dark">
            Menu
          </span>

          <button
            onClick={() => setOpen(false)}
            className="p-2 rounded-md hover:bg-black/5 dark:hover:bg-white/10"
            aria-label="Close menu"
          >
            <X size={20} />
          </button>
        </div>

        {/* Drawer Content */}
        <div className="p-4 flex flex-col gap-4">

          {/* Mobile Search */}
          <input
            placeholder="Search coins..."
            className="
              w-full rounded-md px-3 py-2 text-sm outline-none
              bg-surface-light dark:bg-surface-dark
              border border-border-light dark:border-border-dark
              text-text-primary-light dark:text-text-primary-dark
              placeholder:text-text-secondary-light dark:placeholder:text-text-secondary-dark
              focus:ring-2 focus:ring-accent-light dark:focus:ring-accent-dark
            "
          />

          {/* Nav Links */}
          <nav className="flex flex-col gap-2">
            {navItems.map(({ path, label }) => (
              <NavLink
                key={path}
                to={path}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `
                    px-3 py-2 rounded-md text-sm font-medium transition
                    ${
                      isActive
                        ? "bg-accent-light/10 text-primary-light dark:bg-accent-dark/10 dark:text-primary-dark"
                        : "text-text-secondary-light dark:text-text-secondary-dark hover:bg-black/5 dark:hover:bg-white/10"
                    }
                  `
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
