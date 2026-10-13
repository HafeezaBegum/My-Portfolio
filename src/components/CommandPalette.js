import React, { useEffect, useMemo, useRef, useState } from "react";
import { FiSearch, FiHash, FiFolder, FiMoon, FiCopy, FiMessageCircle } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { NAV_ITEMS } from "./Navbar";
import profile from "../data/profile";
import projectsData from "../data/projectsData";

const go = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

const CommandPalette = ({ open, onClose, actions }) => {
  const [q, setQ] = useState("");
  const [sel, setSel] = useState(0);
  const inputRef = useRef(null);

  const items = useMemo(
    () => [
      ...[...NAV_ITEMS, { id: "certificates", label: "Certificates" }, { id: "contact", label: "Contact" }].map((n) => ({
        group: "Go to",
        label: n.label,
        icon: <FiHash />,
        run: () => go(n.id),
      })),
      ...projectsData.map((p) => ({
        group: "Projects",
        label: p.title,
        icon: <FiFolder />,
        hint: p.metric,
        run: () => actions.openProject(p),
      })),
      { group: "Actions", label: "Ask my AI assistant", icon: <FiMessageCircle />, run: actions.openChat },
      { group: "Actions", label: "Toggle light / dark theme", icon: <FiMoon />, run: actions.toggleTheme },
      { group: "Actions", label: "Copy email address", icon: <FiCopy />, hint: profile.email, run: actions.copyEmail },
      { group: "Links", label: "GitHub", icon: <FaGithub />, run: () => window.open(profile.links.github, "_blank", "noopener") },
      { group: "Links", label: "LinkedIn", icon: <FaLinkedin />, run: () => window.open(profile.links.linkedin, "_blank", "noopener") },
    ],
    [actions]
  );

  const filtered = useMemo(() => {
    const s = q.trim().toLowerCase();
    return s ? items.filter((i) => `${i.label} ${i.group} ${i.hint || ""}`.toLowerCase().includes(s)) : items;
  }, [q, items]);

  useEffect(() => {
    if (open) {
      setQ("");
      setSel(0);
      setTimeout(() => inputRef.current?.focus(), 0);
    }
  }, [open]);

  useEffect(() => setSel(0), [q]);

  if (!open) return null;

  const choose = (item) => {
    onClose();
    item?.run();
  };

  const onKeyDown = (e) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSel((s) => Math.min(s + 1, filtered.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSel((s) => Math.max(s - 1, 0));
    } else if (e.key === "Enter") {
      e.preventDefault();
      choose(filtered[sel]);
    } else if (e.key === "Escape") {
      onClose();
    }
  };

  let lastGroup = null;
  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="card cmdk" role="dialog" aria-modal="true" aria-label="Command palette" onClick={(e) => e.stopPropagation()}>
        <div className="cmdk-input">
          <FiSearch aria-hidden="true" />
          <input
            ref={inputRef}
            value={q}
            onChange={(e) => setQ(e.target.value)}
            onKeyDown={onKeyDown}
            placeholder="Jump to a section, project or action…"
            role="combobox"
            aria-expanded="true"
            aria-controls="cmdk-list"
            aria-activedescendant={filtered[sel] ? `cmdk-${sel}` : undefined}
          />
          <span className="kbd">Esc</span>
        </div>
        <ul className="cmdk-list" id="cmdk-list" role="listbox">
          {filtered.length === 0 && <li className="empty-state">No results</li>}
          {filtered.map((item, i) => {
            const header = item.group !== lastGroup ? item.group : null;
            lastGroup = item.group;
            return (
              <React.Fragment key={`${item.group}-${item.label}`}>
                {header && <li className="cmdk-group" role="presentation">{header}</li>}
                <li
                  id={`cmdk-${i}`}
                  role="option"
                  aria-selected={i === sel}
                  className="cmdk-item"
                  onMouseMove={() => setSel(i)}
                  onClick={() => choose(item)}
                >
                  {item.icon}
                  <span>{item.label}</span>
                  {item.hint && <span className="hint">{item.hint}</span>}
                </li>
              </React.Fragment>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default CommandPalette;
