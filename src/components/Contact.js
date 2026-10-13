import React, { useState } from "react";
import { FiMail, FiCopy, FiSend } from "react-icons/fi";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import Section, { Reveal } from "./Section";
import profile from "../data/profile";

const Contact = ({ copyEmail }) => {
  const [status, setStatus] = useState("idle"); // idle | sending | ok | err

  const onSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("sending");
    try {
      const res = await fetch(profile.formspree, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });
      if (!res.ok) throw new Error();
      form.reset();
      setStatus("ok");
    } catch {
      setStatus("err");
    }
  };

  return (
    <Section
      id="contact"
     
      title="Get in touch"
      subtitle="I'd love to hear from you, whether it's about a job opportunity, a project or just a chat."
    >
      <div className="contact-grid">
        <Reveal className="card contact-info">
          <div className="contact-row">
            <FiMail />
            <a className="grow" href={`mailto:${profile.email}`}>
              {profile.email}
            </a>
            <button className="icon-btn" onClick={copyEmail} aria-label="Copy email address">
              <FiCopy />
            </button>
          </div>
          <a className="contact-row" href={profile.links.linkedin} target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
            <span className="grow">linkedin.com/in/hafeezabegum</span>
          </a>
          <a className="contact-row" href={profile.links.github} target="_blank" rel="noopener noreferrer">
            <FaGithub />
            <span className="grow">github.com/HafeezaBegum</span>
          </a>
        </Reveal>

        <Reveal as="form" className="card contact-form" onSubmit={onSubmit}>
          <div>
            <label htmlFor="name">Name</label>
            <input className="field" id="name" name="name" autoComplete="name" required />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input className="field" type="email" id="email" name="_replyto" autoComplete="email" required />
          </div>
          <div>
            <label htmlFor="message">Message</label>
            <textarea className="field" id="message" name="message" rows={5} required />
          </div>
          <label className="check-row">
            <input type="checkbox" name="resume_request" value="Yes, please send your resume" />
            <span>Please send me your resume</span>
          </label>
          {/* Honeypot for bots; Formspree drops submissions that fill it. */}
          <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" style={{ display: "none" }} />
          <button className="btn btn-primary" type="submit" disabled={status === "sending"} style={{ justifyContent: "center" }}>
            <FiSend /> {status === "sending" ? "Sending…" : "Send message"}
          </button>
          {status === "ok" && <div className="form-status ok" role="status">Thanks! Your message is on its way. I'll get back to you soon.</div>}
          {status === "err" && (
            <div className="form-status err" role="alert">
              Something went wrong. Please email me directly at {profile.email}.
            </div>
          )}
        </Reveal>
      </div>
    </Section>
  );
};

export default Contact;
