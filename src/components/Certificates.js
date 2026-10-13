import React from "react";
import { FiExternalLink } from "react-icons/fi";
import Section, { Reveal } from "./Section";
import { img } from "../assets/images";
import certificationsData from "../data/certificationsData";

const Certificates = () => (
  <Section id="certificates" title="Certificates">
    <div className="cert-grid">
      {certificationsData.map((c) => (
        <Reveal key={c.link}>
          <a className="card cert-card" href={c.link} target="_blank" rel="noopener noreferrer">
            <span className="logo-box">
              <img src={img(c.icon)} alt="" loading="lazy" />
            </span>
            <span style={{ flex: 1 }}>
              <span className="cert-title" style={{ display: "block" }}>
                {c.title}
              </span>
              <span className="cert-issuer">{c.issuer}</span>
            </span>
            <FiExternalLink style={{ color: "var(--text-muted)", flexShrink: 0 }} aria-hidden="true" />
          </a>
        </Reveal>
      ))}
    </div>
  </Section>
);

export default Certificates;
