import React from "react";
import Section, { Reveal } from "./Section";
import { img } from "../assets/images";
import experienceData from "../data/experienceData";

const ExperienceItem = ({ exp }) => {
  return (
    <Reveal className={`tl-item ${exp.current ? "current" : ""}`}>
      <span className="tl-dot" />
      <div className="card tl-card">
        <div className="tl-head">
          {exp.logo ? (
            <a className="logo-box" href={exp.link} target="_blank" rel="noopener noreferrer" aria-label={exp.company}>
              <img src={img(exp.logo)} alt="" loading="lazy" />
            </a>
          ) : (
            <span className="logo-box logo-initial" aria-hidden="true">
              {exp.company[0]}
            </span>
          )}
          <div>
            <h3 className="tl-title">{exp.title}</h3>
            <div className="tl-company">{exp.company}</div>
          </div>
          <div className="tl-meta">
            <span className={`chip ${exp.current ? "chip-accent" : ""}`}>{exp.duration}</span>
          </div>
        </div>

        {exp.summary && <p className="tl-summary">{exp.summary}</p>}

        <div className="chip-row tl-tech">
          {exp.technologies.map((t) => (
            <span key={t} className="chip">
              {t}
            </span>
          ))}
        </div>
      </div>
    </Reveal>
  );
};

const Experience = () => (
  <Section
    id="experience"
   
    title="Experience"
    subtitle="My roles so far, from AI research to data engineering, most recent first"
  >
    <div className="timeline">
      {experienceData.map((exp) => (
        <ExperienceItem key={`${exp.company}-${exp.duration}`} exp={exp} />
      ))}
    </div>
  </Section>
);

export default Experience;
