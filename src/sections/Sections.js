import React, {useState} from "react";
import projectsData from "../data/projectsData";
import skillsData from "../data/skillsData";
import experienceData from "../data/experienceData";
import certificationsData from "../data/certificationsData";
import { FaLinkedin, FaGithub, FaEnvelope, FaArrowRight, FaPhone, FaExternalLinkAlt } from "react-icons/fa"; // Import social icons
import myPhoto from "../assets/my-picture.jpg";
import caseLogo from "../assets/case-logo.png"; 
import bmsLogo from "../assets/bms-logo.png"; 
import "../styles/education.css"; 

const ProjectDescription = ({ text, maxLength }) => {
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => setIsReadMore(!isReadMore);

  if (text.length <= maxLength) {
    return <p className="card-text mb-3 description-text">{text}</p>;
  }

  return (
    <p className="card-text mb-3 description-text">
      {isReadMore ? `${text.slice(0, maxLength)}...` : text}
      <span onClick={toggleReadMore} className="text-primary fw-bold ms-1" style={{ cursor: 'pointer' }}>
        {isReadMore ? "Read More" : " Show Less"}
      </span>
    </p>
  );
};

const Sections = () => {
  return (
<div className="container mt-5 pt-5 main-content-container">
      {/* Home Section */}
      <section id="home" className="d-flex align-items-center justify-content-between py-0.9 mb-1 gap-3">
        {/* Left Side: Introduction */}
        <div className="text-start">
          <h1 className="fw-bold display-5" style={{ fontFamily: "'Poppins', sans-serif", color: "#000" }}>
            Hi, I'm <span style={{ fontWeight: "bold" }}>Hafeeza Begum</span>
          </h1>
          <p className="description-text mt-3 text-justify">
            Welcome to my portfolio! I am a dedicated technologist with a robust background in 
            Software Engineering, Artificial Intelligence, Machine Learning, and Data Engineering.
            Leveraging my expertise in advanced algorithm optimization and scalable backend systems, 
            I architect and deploy intelligent solutions that transform complex data into actionable insights. 
            My passion lies in building AI-driven applications with robust, scalable architectures and 
            a keen focus on performance optimization, consistently tackling intricate problems with cutting-edge technology. 
            Explore my projects to see how I deliver impactful, data-driven innovations. 
            Let's connect to discuss opportunities in software development, AI/ML, and data science!
          </p>

          {/* Social Icons */}
          <div className="mt-3">
            <a href="https://www.linkedin.com/in/hafeezabegum/" target="_blank" rel="noopener noreferrer" className="me-3">
              <FaLinkedin size={30} color="#0077B5" />
            </a>
            <a href="https://github.com/HafeezaBegum" target="_blank" rel="noopener noreferrer" className="me-3">
              <FaGithub size={30} color="#000" />
            </a>
            <a href="mailto:hxd314@case.edu" target="_blank" rel="noopener noreferrer">
              <FaEnvelope size={30} color="#D44638" />
            </a>
          </div>
        </div>

        {/* Right Side: Profile Picture */}
        <div>
          <img src={myPhoto} alt="Hafeeza Begum Dudekula"
               className="shadow-lg ms-4"
               style={{ width: "220px", height: "220px", objectFit: "cover", borderRadius: "50%", display: "block" }} />
        </div>

      </section>

      {/* Education Section */}
      <section id="education" className="p-5 bg-light rounded shadow mb-4">
        <h2 className="text-center mb-4">Education</h2>
        <div className="row g-4 justify-content-center"> 

          {/* Case Western Reserve University Card */}
          <div className="col-12">
            <div className="card h-100 shadow bg-white p-4 hover-shadow-lg transition-300ms">
              <div className="d-flex align-items-start mb-3" style={{ textAlign: "justify" }}>
                <a href="https://case.edu" target="_blank" rel="noopener noreferrer">
                  <img
                    src={caseLogo}
                    alt="Case Logo"
                    className="me-3 university-logo-hover"
                    style={{ width: "60px", height: "60px", objectFit: "contain", flexShrink: 0 }}
                  />
                </a>
                <div>
                  <h4 className="university-name mb-1" >
                    <a
                      href="https://case.edu"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="university-link"
                    >
                      Case Western Reserve University <FaArrowRight className="arrow-icon" />
                    </a>
                  </h4>
                  <p className="mb-1"><strong>Master of Science in Computer Science</strong></p>
                  <p style={{ fontSize: "0.85rem" }}>2023 – 2025 | CGPA: 3.6 / 4</p>
                  <p className="relevant-coursework description-text">
                    <strong>Relevant Coursework:</strong> Artificial Intelligence, Machine Learning on Graphs, AI: Probabilistic Graphical Models, Data Privacy, Database Systems, Computer Security, Software Engineering, High Performance Data & Computing, Designing High-Performant Systems for AI, Data Science Systems
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* BMS College of Engineering Card */}
          <div className="col-12">
            <div className="card h-100 shadow bg-white p-4 hover-shadow-lg transition-300ms">
              <div className="d-flex align-items-start mb-3" style={{ textAlign: "justify" }}>
                <a href="https://www.bmsce.ac.in" target="_blank" rel="noopener noreferrer">
                  <img
                    src={bmsLogo}
                    alt="BMS Logo"
                    className="me-3 university-logo-hover"
                    style={{ width: "60px", height: "60px", objectFit: "contain", flexShrink: 0 }}
                  />
                </a>
                <div>
                  <h4 className="university-name mb-1" >
                    <a
                      href="https://www.bmsce.ac.in"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="university-link"
                    >
                      BMS College of Engineering <FaArrowRight className="arrow-icon" />
                    </a>
                  </h4>
                  <p className="mb-1"><strong>Bachelor of Engineering in Electronics and Communication</strong></p>
                  <p style={{ fontSize: "0.85rem" }}>2019 – 2023 | CGPA: 9.0 / 10</p>
                  <p className="relevant-coursework description-text">
                    <strong>Relevant Coursework:</strong> C Programming, Object-Oriented Programming using C++, Python, Data Structures and Algorithms, Machine Learning, Digital Signal Processing, Linear Algebra, Computer Communication Networks, Network Security & Cryptography, Embedded System Design, Microcontrollers, Internet of Things (IoT), Project Management and Finance
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="p-5 rounded shadow mb-4">
        <h2 className="text-center">Skills</h2>
        {skillsData.map((category, index) => (
          <div key={index} className="bg-white p-4 rounded shadow mb-4">
            <h3 className="mb-3">{category.category}</h3>
            <div className="d-flex flex-wrap">
              {category.skills.map((skill, idx) => (
                <div key={idx} className="text-center d-flex flex-column align-items-center" style={{ width: "70px", minHeight: "90px", margin: "5px"}}>
                 <img src={skill.icon} alt={skill.name} style={{ width: "35px", height: "35px", objectFit: "contain" }} />
                 <p className="mt-2 mb-0" style={{ fontSize: "0.85rem", lineHeight: "1.2", textAlign: "center" }}>{skill.name}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* Projects Section */}
      <section id="projects" className="p-5 bg-light rounded shadow mb-4">
        <h2 className="text-center mb-4">Projects</h2>
        <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-3 g-4">
          {projectsData.map((project, index) => (
            <div key={index} className="col">
              <div className="card h-100 shadow bg-white p-0 hover-shadow-lg transition-300ms"> 
                {/* Project Title with Background Image */}
                <div
                  className="project-title-area text-white d-flex align-items-center justify-content-center p-3" 
                  style={{
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${project.backgroundImage})`, 
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    minHeight: '180px', 
                    borderRadius: '0.25rem 0.25rem 0 0', 
                  }}
                >
                  <h5 className="card-title fw-bold text-center mb-0" style={{ color: 'white' }}>{project.title}</h5> 
                </div>

                <div className="card-body d-flex flex-column pt-3"> 
                  {/* Read More/Less Description */}
                  <ProjectDescription text={project.description} maxLength={200} />

                  <div className="mt-auto pt-1">
                    <div className="mb-3">
                      {project.technologies.map((tech, idx) => (
                        <span key={idx} className="badge bg-info text-dark rounded-pill me-1 mb-1">{tech}</span>
                      ))}
                    </div>
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn btn-dark btn-sm me-2 mb-2">
                      <FaGithub className="me-1" /> View on GitHub
                    </a>
                    {project.demo && (
                      <a href={project.demo} target="_blank" rel="noopener noreferrer" className="btn btn-outline-primary btn-sm">
                        <FaExternalLinkAlt className="me-1" /> Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="p-5 bg-light rounded shadow mb-4">
        <h2 className="text-center mb-4">Experience</h2>
        <div className="row">
          {experienceData.map((exp, index) => (
            <div key={index} className="col-md-4 mb-4">
              <div className="card shadow h-100 bg-white">
                <div className="card-body">
                  {/* Company + Logo */}
                  <div className="d-flex align-items-center mb-2">
                    <img
                      src={exp.logo}
                      alt={`${exp.company} Logo`}
                      style={{ width: "40px", height: "40px", objectFit: "contain" }}
                      className="me-3"
                    />
                    <h5 className="mb-0">
                      <a
                        href={exp.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary text-decoration-none"
                      >
                        {exp.company}
                      </a>
                    </h5>
                  </div>

                  <div className="ms-1">
                    <p className="fw-bold mb-1">{exp.title}</p>
                    <p style={{ fontSize: "0.85rem" }}>
                      {exp.duration}
                    </p>

                    {/* Added Technologies */}
                    {exp.technologies && exp.technologies.length > 0 && (
                      <div className="mb-3">
                        {exp.technologies.map((tech, techIdx) => (
                          <span key={techIdx} className="badge bg-secondary text-white me-1 mb-1">{tech}</span>
                        ))}
                      </div>
                    )}

                    <ProjectDescription text={exp.description} maxLength={250} />

                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="p-5 rounded shadow mb-4 bg-light"> 
        <h2 className="text-center mb-4">Certifications</h2>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
          {certificationsData.map((cert, idx) => (
            <div key={idx} className="col">
              <a href={cert.link} target="_blank" rel="noopener noreferrer" className="text-decoration-none text-dark d-block h-100"> 
                <div className="card h-100 border-0 shadow bg-white text-center p-3 hover-shadow-lg transition-300ms">
                  <div className="d-flex justify-content-center align-items-center" style={{ height: "72px", marginBottom: "15px" }}>
                    <img
                      src={cert.icon}
                      alt={cert.title}
                      style={{ maxWidth: "90%", maxHeight: "100%", objectFit: "contain" }}
                    />
                  </div>
                  <div className="card-body d-flex flex-column justify-content-center p-0"> 
                      <h6 className="fw-semibold mb-0" style={{ fontSize: "0.95rem" }}>{cert.title}</h6>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </section>


      {/* Contact Section */}
      <section id="contact" className="p-5 rounded shadow mb-4 bg-light">
        <h2 className="text-center mb-4 display-5 fw-bold">Get in Touch</h2>
        <p className="text-center mb-4" style={{ fontSize: "1rem" }}>
          I would love to hear from you! Whether it is to collaborate on a project, a job opportunity or
          just to have a chat, feel free to drop a message!
        </p>

        <div className="row justify-content-center">
          {/* Left Column: Contact Form */}
          <div className="col-lg-6 col-md-8 mb-1">
            <div className="card p-4 shadow-sm h-100 card-text">
              <form action="https://formspree.io/f/mjkrdkgw" method="POST">
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Name</label>
                  <input type="text" className="form-control" id="name" name="name" placeholder="Enter your name" required />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input type="email" className="form-control" id="email" name="_replyto" placeholder="Enter your email" required />
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label">Message</label>
                  <textarea className="form-control" id="message" name="message" rows="5" placeholder="Enter your message" required></textarea>
                </div>
                <button type="submit" className="btn btn-success btn-md w-100">Let's talk</button>
              </form>
            </div>
          </div>

          {/* Right Column: Contact Info */}
          <div className="col-lg-4 col-md-8 mb-4">
            <div className="d-flex flex-column justify-content-center h-100">
              {/* Phone Number */}
              <div className="card p-2 shadow-sm mb-4 text-center">
                <a href="tel:+12164827650" className="text-decoration-none text-dark">
                  <FaPhone size={18} className="me-2" /> +1 216-482-7650
                </a>
              </div>

              {/* Email ID */}
              <div className="card p-2 shadow-sm text-center">
                <a href="mailto:hxd314@case.edu" className="text-decoration-none text-dark">
                  <FaEnvelope size={18} className="me-2" /> hxd314@case.edu
                </a>
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
};


export default Sections;
