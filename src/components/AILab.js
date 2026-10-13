import React, { useState } from "react";
import { FiTarget, FiMessageCircle, FiCheck, FiMinus } from "react-icons/fi";
import Section, { Reveal } from "./Section";
import { analyzeFit } from "../lib/jobFit";

const SAMPLE_JD =
  "We're hiring a Data Engineer to build and maintain ETL pipelines in Python and SQL, orchestrate workflows with Airflow, process large datasets with Spark, deploy services with Docker and Kubernetes on AWS, and support ML teams working with LLMs. Experience with Snowflake or dbt is a plus.";

const AILab = ({ onOpenChat }) => {
  const [jd, setJd] = useState("");
  const [result, setResult] = useState(null);

  const run = (text = jd) => {
    if (!text.trim()) return;
    setResult(analyzeFit(text));
  };

  return (
    <Section
      id="ai"
      alt
     
      title="Check my fit for your role"
      subtitle="Paste a job description to see which skills match, or ask a question about my work."
    >
      <div className="ai-panel">
        <Reveal className="card ai-card">
          <h3>
            <span className="badge-icon">
              <FiTarget />
            </span>
            Job-fit analyzer
          </h3>
          <textarea
            className="field"
            rows={7}
            value={jd}
            onChange={(e) => setJd(e.target.value)}
            placeholder="Paste a job description here…"
            aria-label="Job description"
            maxLength={8000}
          />
          <div className="hero-ctas" style={{ marginTop: 0 }}>
            <button className="btn btn-primary" onClick={() => run()} disabled={!jd.trim()}>
              Analyze fit
            </button>
            <button
              className="btn"
              onClick={() => {
                setJd(SAMPLE_JD);
                run(SAMPLE_JD);
              }}
            >
              Try a sample JD
            </button>
          </div>
          <p className="ai-note">
            Runs entirely in your browser. Nothing you paste leaves this page.
          </p>
        </Reveal>

        <Reveal className="card ai-card" aria-live="polite">
          {!result ? (
            <>
              <h3>
                <span className="badge-icon">
                  <FiMessageCircle />
                </span>
                Ask my portfolio
              </h3>
              <p style={{ color: "var(--text-muted)" }}>
                Ask a question about my work and get an answer with a link to the related section. For example: “What
                LLM work has she done?” or “Does she know PySpark?”
              </p>
              <div>
                <button className="btn btn-primary" onClick={onOpenChat}>
                  <FiMessageCircle /> Open the assistant
                </button>
              </div>
              <p className="ai-note">
                Answers come from the content of this site.
              </p>
            </>
          ) : result.asked.length === 0 ? (
            <p style={{ color: "var(--text-muted)" }}>
              I couldn't spot any specific technologies in that description. Try pasting the requirements section.
            </p>
          ) : (
            <>
              <div className="fit-score">
                <div className="fit-ring" style={{ "--p": result.score }}>
                  <span>{result.score}%</span>
                </div>
                <div>
                  <strong>
                    {result.matched.length} of {result.asked.length} requested skills matched
                  </strong>
                  <p className="ai-note">Based on technologies named in the job description.</p>
                </div>
              </div>

              <ul className="fit-list">
                {result.matched.map((m) => (
                  <li key={m.skill}>
                    <FiCheck style={{ color: "var(--ok)", flexShrink: 0, marginTop: 4 }} />
                    <span>
                      <strong>{m.skill}</strong>
                      {m.evidence.length > 0 && <span className="ev"> · {m.evidence.join(" · ")}</span>}
                    </span>
                  </li>
                ))}
                {result.missing.map((s) => (
                  <li key={s}>
                    <FiMinus style={{ color: "var(--warn)", flexShrink: 0, marginTop: 4 }} />
                    <span>
                      <strong>{s}</strong> <span className="ev">· not listed on my portfolio</span>
                    </span>
                  </li>
                ))}
              </ul>

            </>
          )}
        </Reveal>
      </div>
    </Section>
  );
};

export default AILab;
