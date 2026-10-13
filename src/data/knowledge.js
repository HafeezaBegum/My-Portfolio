// Turns the portfolio data into retrievable text chunks.
// Used by the in-browser assistant (src/lib/assistant.js).
import profile from "./profile.js";
import projectsData from "./projectsData.js";
import experienceData from "./experienceData.js";
import educationData from "./educationData.js";
import skillsData from "./skillsData.js";
import certificationsData from "./certificationsData.js";

export function buildChunks() {
  const chunks = [];

  chunks.push({
    id: "about",
    type: "about",
    title: `About ${profile.name}`,
    section: "home",
    keywords: "who about summary background introduce yourself overview profile",
    text: profile.about,
  });

  chunks.push({
    id: "assistant",
    type: "assistant",
    title: "How this assistant works",
    section: "ai",
    keywords:
      "you assistant chatbot bot built build made create created train trained training model work works yourself technology powered",
    text:
      `${profile.name.split(" ")[0]} built this assistant as part of her portfolio. ` +
      "It isn't a trained model: it recognises common questions (skills, experience, education) and builds answers from her portfolio data, and for anything else it uses BM25, a classic search-ranking algorithm, to find and quote the best-matching parts of her portfolio, entirely in your browser with no server. " +
      "It's built with React and JavaScript.",
  });

  chunks.push({
    id: "contact",
    type: "contact",
    title: "Contact & availability",
    section: "contact",
    keywords: "contact email hire hiring reach connect available open work linkedin github",
    text: `Email: ${profile.email}. LinkedIn: ${profile.links.linkedin} GitHub: ${profile.links.github} ${profile.availability}.`,
  });

  experienceData.forEach((e, i) => {
    chunks.push({
      id: `exp-${i}`,
      type: "experience",
      title: `${e.title} at ${e.company} (${e.duration})`,
      section: "experience",
      keywords: "experience work job role employment",
      text: `${e.title} at ${e.company}, ${e.duration}. ${e.summary || ""} Technologies: ${e.technologies.join(", ")}.`,
    });
  });

  projectsData.forEach((p, i) => {
    chunks.push({
      id: `proj-${i}`,
      type: "project",
      title: p.title,
      section: "projects",
      link: p.github,
      keywords: `project ${p.metric} ${p.categories.join(" ")}`,
      text: `${p.description} Technologies: ${p.technologies.join(", ")}.`,
    });
  });

  educationData.forEach((e, i) => {
    chunks.push({
      id: `edu-${i}`,
      type: "education",
      title: `${e.degree}, ${e.school}`,
      section: "education",
      keywords: "education degree university study studied school college gpa",
      text: `${e.degree} at ${e.school}, ${e.duration}, ${e.grade}. Coursework: ${e.coursework.join(", ")}.`,
    });
  });

  skillsData.forEach((c, i) => {
    chunks.push({
      id: `skill-${i}`,
      type: "skills",
      title: c.category,
      section: "skills",
      keywords: "skills tools tech stack technologies",
      text: `${c.category}: ${c.skills.map((s) => s.name).join(", ")}.`,
    });
  });

  chunks.push({
    id: "certs",
    type: "certifications",
    title: "Certificates",
    section: "certificates",
    keywords: "certifications certificates courses certified",
    text: `${certificationsData
      .map((c) => `${c.title} (${c.issuer})`)
      .join(", ")}.`,
  });

  return chunks;
}


export function allSkillNames() {
  const names = new Set();
  skillsData.forEach((c) => c.skills.forEach((s) => names.add(s.name)));
  experienceData.forEach((e) => e.technologies.forEach((t) => names.add(t)));
  projectsData.forEach((p) => p.technologies.forEach((t) => names.add(t)));
  return [...names];
}
