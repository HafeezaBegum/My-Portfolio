import React from "react";
import Section, { Reveal } from "./Section";
import skillsData from "../data/skillsData";

// Every category visible at once: recruiters scan, they don't click tabs.
const Skills = () => (
  <Section
    id="skills"
    alt
   
    title="Skills"
    subtitle="The languages, frameworks and platforms I work with, grouped by what they're for."
  >
    <div className="skills-board">
      {skillsData.map((c) => (
        <Reveal key={c.category} className="card skill-group">
          <h3 className="skill-group-title">{c.category}</h3>
          <ul className="skill-chips">
            {c.skills.map((s) => (
              <li key={s.name} className="skill-chip">
                {s.icon && (
                  <img
                    src={s.icon}
                    alt=""
                    loading="lazy"
                    onError={(e) => (e.currentTarget.style.display = "none")}
                  />
                )}
                {s.name}
              </li>
            ))}
          </ul>
        </Reveal>
      ))}
    </div>
  </Section>
);

export default Skills;
