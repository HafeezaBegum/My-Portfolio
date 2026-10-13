import React, { useEffect, useState } from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FiArrowRight, FiMail, FiCpu, FiDatabase, FiMessageCircle } from "react-icons/fi";
import NetworkCanvas from "./NetworkCanvas";
import { Reveal } from "./Section";
import { usePrefersReducedMotion } from "../hooks";
import profile from "../data/profile";

function useTypewriter(words) {
  const reduced = usePrefersReducedMotion();
  const [i, setI] = useState(0);
  const [text, setText] = useState(reduced ? words[0] : "");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (reduced) return;
    const word = words[i % words.length];
    let delay = deleting ? 40 : 75;
    if (!deleting && text === word) delay = 1600;
    if (deleting && text === "") delay = 300;
    const t = setTimeout(() => {
      if (!deleting && text === word) setDeleting(true);
      else if (deleting && text === "") {
        setDeleting(false);
        setI((n) => n + 1);
      } else setText(word.slice(0, text.length + (deleting ? -1 : 1)));
    }, delay);
    return () => clearTimeout(t);
  }, [text, deleting, i, words, reduced]);

  return text;
}

const Hero = ({ onOpenChat }) => {
  const role = useTypewriter(profile.roles);

  return (
    <section id="home" className="hero">
      <NetworkCanvas />
      <div className="hero-glow" />
      <div className="container">
        <div className="hero-grid">
          <Reveal>
            <div className="status-pill">
              <span className="status-dot" />
              {profile.availability}
            </div>
            <h1 className="hero-title">
              Hi, I'm <span className="grad-text">{profile.name}</span>
            </h1>
            <p className="hero-role" aria-label={profile.roles.join(", ")}>
              <span aria-hidden="true">
                &gt; {role}
                <span className="caret" />
              </span>
            </p>
            <p className="hero-bio">{profile.shortBio}</p>

            <div className="hero-ctas">
              <a href="#projects" className="btn btn-primary">
                See my work <FiArrowRight />
              </a>
              <button className="btn" onClick={onOpenChat}>
                <FiMessageCircle /> Ask my AI assistant
              </button>
            </div>

            <div className="hero-socials">
              <a className="icon-btn" href={profile.links.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FaLinkedin />
              </a>
              <a className="icon-btn" href={profile.links.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <FaGithub />
              </a>
              <a className="icon-btn" href={`mailto:${profile.email}`} aria-label="Email">
                <FiMail />
              </a>
            </div>
          </Reveal>

          <Reveal className="hero-visual" aria-hidden="true">
            <div className="code-card">
              <div className="code-bar">
                <span />
                <span />
                <span />
                <em>pipeline.py</em>
              </div>
              <pre className="mono">
                <code>
                  <i className="c-com"># simple ETL flow{"\n"}</i>
                  <b className="c-kw">pipeline</b> = ({"\n"}
                  {"    "}ingest(<s className="c-str">"events"</s>){"\n"}
                  {"    "}.transform(sql_models){"\n"}
                  {"    "}.validate(quality_checks){"\n"}
                  {"    "}.serve(<s className="c-str">"ml_features"</s>, <s className="c-str">"llm_rag"</s>){"\n"}
                  ){"\n"}
                  {"\n"}
                  <b className="c-kw">pipeline</b>.run()
                </code>
              </pre>
            </div>
            <div className="hero-badge b1">
              <span className="badge-icon">
                <FiDatabase />
              </span>
              <div>
                <strong>Python · SQL · Azure</strong>
                <span>Data pipelines</span>
              </div>
            </div>
            <div className="hero-badge b2">
              <span className="badge-icon">
                <FiCpu />
              </span>
              <div>
                <strong>LLMs · Multi-GPU</strong>
                <span>AI research</span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Hero;
