import React, { useEffect, useMemo, useRef, useState } from "react";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink, FiSearch, FiX } from "react-icons/fi";
import Section, { Reveal } from "./Section";
import { img } from "../assets/images";
import projectsData from "../data/projectsData";

const ALL = "All";
const CATEGORIES = [ALL, ...new Set(projectsData.flatMap((p) => p.categories))];

export const ProjectModal = ({ project, onClose }) => {
  const closeRef = useRef(null);

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    const prevFocus = document.activeElement;
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
      prevFocus?.focus?.();
    };
  }, [onClose]);

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div
        className="card modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
        onClick={(e) => e.stopPropagation()}
      >
        <button ref={closeRef} className="icon-btn modal-close" onClick={onClose} aria-label="Close">
          <FiX />
        </button>
        <div className="modal-hero">
          <img src={img(project.image)} alt="" />
        </div>
        <div className="modal-body">
          <div className="chip-row">
            <span className="chip chip-accent">{project.metric}</span>
            {project.categories.map((c) => (
              <span key={c} className="chip">
                {c}
              </span>
            ))}
          </div>
          <h3 id="project-modal-title" className="section-title" style={{ fontSize: "1.6rem" }}>
            {project.title}
          </h3>
          <p style={{ color: "var(--text-muted)" }}>{project.description}</p>
          <div>
            <div className="eyebrow" style={{ marginBottom: 8 }}>
              Built with
            </div>
            <div className="chip-row">
              {project.technologies.map((t) => (
                <span key={t} className="chip">
                  {t}
                </span>
              ))}
            </div>
          </div>
          <div className="hero-ctas" style={{ marginTop: 6 }}>
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              <FaGithub /> View code
            </a>
            {project.demo && (
              <a href={project.demo} target="_blank" rel="noopener noreferrer" className="btn">
                <FiExternalLink /> Live demo
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const Projects = ({ openProject }) => {
  const [category, setCategory] = useState(ALL);
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return projectsData.filter(
      (p) =>
        (category === ALL || p.categories.includes(category)) &&
        (!q ||
          `${p.title} ${p.summary} ${p.technologies.join(" ")} ${p.categories.join(" ")}`
            .toLowerCase()
            .includes(q))
    );
  }, [category, query]);

  return (
    <Section
      id="projects"
     
      title="Projects"
      subtitle="Few projects I’ve worked on, from machine learning and NLP to full-stack apps. Click a card to read more."
    >
      <Reveal className="toolbar">
        <div className="chip-row" role="group" aria-label="Filter projects by category">
          {CATEGORIES.map((c) => (
            <button key={c} className="filter-chip" aria-pressed={category === c} onClick={() => setCategory(c)}>
              {c}
            </button>
          ))}
        </div>
        <label className="search-input">
          <FiSearch aria-hidden="true" />
          <span className="sr-only">Search projects</span>
          <input
            type="search"
            placeholder="Search by tech, e.g. BERT"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </label>
      </Reveal>

      {filtered.length ? (
        <div className="projects-grid">
          {filtered.map((p) => (
            <Reveal key={p.title}>
              <article className="card project-card">
                <button className="project-open" onClick={() => openProject(p)} aria-label={`Open details for ${p.title}`}>
                  <div className="project-thumb">
                    <img src={img(p.image)} alt="" loading="lazy" />
                    <span className="project-metric">{p.metric}</span>
                    {p.featured && <span className="featured-tag">Featured</span>}
                  </div>
                  <div className="project-body">
                    <h3 className="project-title">{p.title}</h3>
                    <p className="project-summary">{p.summary}</p>
                    <div className="chip-row">
                      {p.technologies.slice(0, 4).map((t) => (
                        <span key={t} className="chip">
                          {t}
                        </span>
                      ))}
                      {p.technologies.length > 4 && <span className="chip">+{p.technologies.length - 4}</span>}
                    </div>
                  </div>
                </button>
                <div className="project-actions">
                  <a href={p.github} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-primary">
                    <FaGithub /> View code
                  </a>
                  {p.demo && (
                    <a href={p.demo} target="_blank" rel="noopener noreferrer" className="btn btn-sm">
                      <FiExternalLink /> Live demo
                    </a>
                  )}
                  <button className="btn btn-sm project-details" onClick={() => openProject(p)}>
                    Details
                  </button>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      ) : (
        <div className="card empty-state">No projects match “{query}”. Try another keyword.</div>
      )}
    </Section>
  );
};

export default Projects;
