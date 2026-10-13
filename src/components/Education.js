import React from "react";
import Section, { Reveal } from "./Section";
import { img } from "../assets/images";
import educationData from "../data/educationData";

const Education = () => (
  <Section id="education" alt title="Education">
    <div className="two-col">
      {educationData.map((e) => (
        <Reveal key={e.school} className="card edu-card">
          <div className="edu-head">
            <a className="logo-box" href={e.link} target="_blank" rel="noopener noreferrer" aria-label={e.school}>
              <img src={img(e.logo)} alt="" loading="lazy" />
            </a>
            <div>
              <h3 className="tl-title">{e.degree}</h3>
              <a href={e.link} target="_blank" rel="noopener noreferrer" className="tl-company">
                {e.school}
              </a>
            </div>
          </div>
          <div className="chip-row">
            <span className="chip chip-accent">{e.duration}</span>
            <span className="chip chip-accent">{e.grade}</span>
          </div>
          <div>
            <div className="eyebrow" style={{ marginBottom: 8 }}>
              Relevant coursework
            </div>
            <div className="chip-row">
              {e.coursework.map((c) => (
                <span key={c} className="chip">
                  {c}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  </Section>
);

export default Education;
