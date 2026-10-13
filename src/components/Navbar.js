import React, { useState } from "react";
import { FiMoon, FiSun, FiMenu, FiX, FiSearch, FiMail } from "react-icons/fi";
import { useActiveSection, useScrollY } from "../hooks";
import profile from "../data/profile";

export const NAV_ITEMS = [
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "ai", label: "AI Lab" },
];

const IDS = ["home", ...NAV_ITEMS.map((n) => n.id), "certificates", "contact"];
const isMac = typeof navigator !== "undefined" && /Mac|iPhone|iPad/.test(navigator.platform);

const Navbar = ({ theme, onToggleTheme, onOpenPalette }) => {
  const [open, setOpen] = useState(false);
  const scrolled = useScrollY() > 12;
  const active = useActiveSection(IDS);
  const initials = profile.name
    .split(" ")
    .map((w) => w[0])
    .join("");

  return (
    <header className={`nav ${scrolled || open ? "scrolled" : ""}`}>
      <nav className="container nav-inner" aria-label="Primary">
        <a href="#home" className="brand" onClick={() => setOpen(false)}>
          <span className="brand-mark">{initials}</span>
          <span>{profile.name}</span>
        </a>

        <ul className={`nav-links ${open ? "open" : ""}`}>
          {NAV_ITEMS.map((n) => (
            <li key={n.id}>
              <a
                href={`#${n.id}`}
                className={active === n.id ? "active" : ""}
                aria-current={active === n.id ? "true" : undefined}
                onClick={() => setOpen(false)}
              >
                {n.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="nav-actions">
          <a href="#contact" className={`btn btn-primary btn-sm nav-cta ${active === "contact" ? "active" : ""}`} onClick={() => setOpen(false)}>
            <FiMail aria-hidden="true" /> <span>Contact</span>
          </a>
          <button className="cmdk-trigger" onClick={onOpenPalette} aria-label="Open command palette">
            <FiSearch />
            <span className="cmdk-label">Search</span>
            <span className="kbd">{isMac ? "⌘" : "Ctrl"} K</span>
          </button>
          <button
            className="icon-btn"
            onClick={onToggleTheme}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
          >
            {theme === "dark" ? <FiSun /> : <FiMoon />}
          </button>
          <button
            className="icon-btn menu-btn"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
