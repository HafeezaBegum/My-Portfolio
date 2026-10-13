import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import profile from "../data/profile";

const Footer = () => (
  <footer className="footer">
    <div className="container footer-inner">
      <span>
        © {new Date().getFullYear()} {profile.fullName} · Built with React
      </span>
      <div className="hero-socials" style={{ marginTop: 0 }}>
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
    </div>
  </footer>
);

export default Footer;
