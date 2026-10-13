import React from "react";
import { useReveal } from "../hooks";

export const Reveal = ({ as: Tag = "div", className = "", children, ...rest }) => {
  const ref = useReveal();
  return (
    <Tag ref={ref} className={`reveal ${className}`} {...rest}>
      {children}
    </Tag>
  );
};

const Section = ({ id, title, subtitle, alt, children }) => (
  <section id={id} className={`section ${alt ? "section-alt" : ""}`} aria-labelledby={`${id}-title`}>
    <div className="container">
      <Reveal className="section-head">
        <h2 id={`${id}-title`} className="section-title">
          {title}
        </h2>
        {subtitle && <p className="section-sub">{subtitle}</p>}
      </Reveal>
      {children}
    </div>
  </section>
);

export default Section;
