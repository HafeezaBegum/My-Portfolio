import React from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const NAVBAR_HEIGHT_OFFSET = -50; 

  return (
    <nav className="navbar navbar-expand-lg fixed-top navbar-custom-grey">
      <div className="container">
        <Link to="home" smooth duration={300} className="navbar-brand btn btn-link" offset={NAVBAR_HEIGHT_OFFSET}> 
            My Portfolio
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
                <Link activeClass="active" to="home" smooth duration={300} className="nav-link" offset={NAVBAR_HEIGHT_OFFSET}>Home</Link> 
            </li>
            <li className="nav-item">
                <Link activeClass="active" to="education" smooth duration={300} className="nav-link" offset={NAVBAR_HEIGHT_OFFSET}>Education</Link>
            </li>
            <li className="nav-item">
                <Link activeClass="active" to="skills" smooth duration={300} className="nav-link" offset={NAVBAR_HEIGHT_OFFSET}>Skills</Link> 
            </li>
            <li className="nav-item">
                <Link activeClass="active" to="projects" smooth duration={300} className="nav-link" offset={NAVBAR_HEIGHT_OFFSET}>Projects</Link> 
            </li>
            <li className="nav-item">
                <Link activeClass="active" to="experience" smooth duration={300} className="nav-link" offset={NAVBAR_HEIGHT_OFFSET}>Experience</Link> 
            </li>
            <li className="nav-item">
                <Link activeClass="active" to="certifications" smooth duration={300} className="nav-link" offset={NAVBAR_HEIGHT_OFFSET}>Certifications</Link> 
            </li>
            <li className="nav-item">
                <a
                    href="https://drive.google.com/file/d/13v9oy3FQn6SSkeclABWhR34CiXrHR0s_/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="nav-link"
                >
                    Resume
                </a>
            </li>
            <li className="nav-item">
                <Link activeClass="active" to="contact" smooth duration={300} className="nav-link" offset={NAVBAR_HEIGHT_OFFSET}>Contact</Link> 
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;