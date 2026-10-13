import React, { useCallback, useEffect, useMemo, useState } from "react";
import { FiArrowUp } from "react-icons/fi";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Projects, { ProjectModal } from "./components/Projects";
import Skills from "./components/Skills";
import AILab from "./components/AILab";
import Education from "./components/Education";
import Certificates from "./components/Certificates";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ChatWidget from "./components/ChatWidget";
import CommandPalette from "./components/CommandPalette";
import { useScrollY, useTheme } from "./hooks";
import profile from "./data/profile";

const App = () => {
  const [theme, toggleTheme] = useTheme();
  const [paletteOpen, setPaletteOpen] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);
  const [project, setProject] = useState(null);
  const [toast, setToast] = useState("");
  const y = useScrollY();
  const docH = typeof document !== "undefined" ? document.documentElement.scrollHeight - window.innerHeight : 1;
  const progress = docH > 0 ? Math.min(1, y / docH) : 0;

  useEffect(() => {
    const onKey = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setPaletteOpen((o) => !o);
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    if (!toast) return;
    const t = setTimeout(() => setToast(""), 2200);
    return () => clearTimeout(t);
  }, [toast]);

  const copyEmail = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setToast("Email copied to clipboard");
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  }, []);

  const openChat = useCallback(() => setChatOpen(true), []);
  const closeProject = useCallback(() => setProject(null), []);

  const actions = useMemo(
    () => ({ openProject: setProject, openChat, toggleTheme, copyEmail }),
    [openChat, toggleTheme, copyEmail]
  );

  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <div className="scroll-progress" style={{ transform: `scaleX(${progress})` }} aria-hidden="true" />
      <Navbar theme={theme} onToggleTheme={toggleTheme} onOpenPalette={() => setPaletteOpen(true)} />

      <main id="main">
        <Hero onOpenChat={openChat} />
        <Experience />
        <Education />
        <Projects openProject={setProject} />
        <Skills />
        <Certificates />
        <AILab onOpenChat={openChat} />
        <Contact copyEmail={copyEmail} />
      </main>
      <Footer />

      <button
        className={`icon-btn to-top ${y > 800 ? "show" : ""}`}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Back to top"
      >
        <FiArrowUp />
      </button>

      <ChatWidget open={chatOpen} setOpen={setChatOpen} />
      <CommandPalette open={paletteOpen} onClose={() => setPaletteOpen(false)} actions={actions} />
      {project && <ProjectModal project={project} onClose={closeProject} />}
      {toast && (
        <div className="toast" role="status">
          {toast}
        </div>
      )}
    </>
  );
};

export default App;
