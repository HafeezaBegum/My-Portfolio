// Structured answers for the questions recruiters ask most, built only from
// what the portfolio data already shows (no new claims).
import experienceData from "../data/experienceData";
import projectsData from "../data/projectsData";
import skillsData from "../data/skillsData";
import educationData from "../data/educationData";
import { matchSkills } from "./jobFit";

const FIRST = "Hafeeza";

const TOPICS = [
  {
    label: "LLM & NLP work",
    ask: /\b(llms?|large language|gen ?ai|generative|nlp|rag|bert|gpt|transformers?|agentic|agents?|langchain|chatbots?)\b/i,
    tech: /llm|rag|bert|transformer|hugging|nlp|langchain|langgraph|llamaindex|agentic|claude|openai|gemini|mcp|lora|faiss|prompt/i,
    categories: ["LLMs, NLP & Graph ML", "AI Tools & Agentic AI"],
  },
  {
    label: "data engineering work",
    ask: /\b(data engineer(ing)?|etl|elt|pipelines?|data platforms?|warehous\w*|lakehouse|data stack)\b/i,
    tech: /etl|elt|spark|airflow|kafka|dbt|snowflake|databricks|postgres|sql|data model|excel/i,
    categories: ["Data Engineering & Databases"],
  },
  {
    label: "distributed training & HPC work",
    ask: /\b(distributed|multi-?gpus?|gpus?|hpc|cuda|parallel|clusters?)\b/i,
    tech: /hpc|gpu|cuda|distributed/i,
    categories: ["HPC & GPU Computing"],
  },
  {
    label: "machine learning work",
    ask: /\b(machine learning|ml|deep learning|models?|classification|classifiers?|fraud|recommendation)\b/i,
    tech: /machine learning|pytorch|tensorflow|keras|scikit|xgboost|shap|mlflow|imbalanced|graph/i,
    categories: ["Machine Learning"],
  },
  {
    label: "cloud & DevOps work",
    ask: /\b(cloud|azure|aws|devops|deploy(ment|ed)?|ci\/?cd|infrastructure)\b/i,
    tech: /azure|aws|docker|kubernetes|terraform|ci\/cd|github actions/i,
    categories: ["Cloud & DevOps"],
  },
];

const SKILL_INTENT =
  /\b(know|knows|use[ds]?|using|experience (with|in)|worked with|work with|familiar|proficient|skilled|expert|comfortable|does she have|can she)\b/i;

const roleName = (e) => `${e.title}, ${e.company.split(",")[0]}`;
const dedupe = (arr) => [...new Map(arr.map((s) => [s.title + s.section, s])).values()];

// Every skill name on the site, plus simple variants ("FAISS / Vector Search" -> "FAISS", "Vector Search").
const SKILL_INDEX = (() => {
  const entries = [];
  const add = (name, category) => {
    const variants = name
      .split(/\s*\/\s*|\s*&\s*|\s*\(|\)/)
      .concat(name)
      .map((v) => v.trim())
      .filter((v) => v.length >= 2);
    entries.push({ name, category, variants: [...new Set(variants)] });
  };
  skillsData.forEach((c) => c.skills.forEach((s) => add(s.name, c.category)));
  experienceData.forEach((e) => e.technologies.forEach((t) => add(t, null)));
  return entries;
})();

const escapeRe = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
const mentions = (text, term) =>
  new RegExp(`(^|[^a-z0-9+#])${escapeRe(term.toLowerCase())}(?=$|[^a-z0-9+#])`).test(text);

function whereUsed(name) {
  const lower = name.toLowerCase();
  const roles = experienceData.filter((e) => e.technologies.some((t) => t.toLowerCase() === lower)).map(roleName);
  const projects = projectsData.filter((p) => p.technologies.some((t) => t.toLowerCase() === lower)).map((p) => p.title);
  return { roles, projects };
}

export function skillAnswer(question) {
  if (!SKILL_INTENT.test(question)) return null;
  const q = ` ${question.toLowerCase()} `;

  const direct = [];
  SKILL_INDEX.forEach((s) => {
    if (s.variants.some((v) => mentions(q, v)) && !direct.some((d) => d.name.toLowerCase() === s.name.toLowerCase())) {
      direct.push(s);
    }
  });
  // Prefer the categorised (Skills section) entry when a name appears twice.
  const named = direct.filter((d) => d.category || !direct.some((o) => o.category && o.name.toLowerCase() === d.name.toLowerCase()));
  // Aliases (e.g. "spark" -> PySpark) that the named matches don't already cover.
  const covered = new Set(matchSkills(named.map((d) => d.name).join(" , ")).map((m) => m.skill));
  const alias = [];
  matchSkills(question).forEach((m) => {
    if (covered.has(m.skill)) return;
    const entry = SKILL_INDEX.find((s) => s.category && s.name.toLowerCase() === m.skill.toLowerCase());
    if (entry) {
      if (!named.includes(entry)) named.push(entry);
    } else alias.push(m);
  });
  if (!named.length && !alias.length) return null;

  const lines = [];
  const sources = [];
  named.slice(0, 4).forEach((s) => {
    const { roles, projects } = whereUsed(s.name);
    const parts = [];
    if (s.category) parts.push(`listed under ${s.category} in her skills`);
    if (roles.length) parts.push(`used in her role as ${roles.join(" and ")}`);
    if (projects.length) parts.push(`used in ${projects.slice(0, 2).join(" and ")}`);
    lines.push(`**Yes, ${s.name}**: ${parts.join("; ")}.`);
    if (s.category) sources.push({ title: "Skills", section: "skills" });
    if (roles.length) sources.push({ title: "Experience", section: "experience" });
    if (projects.length) sources.push({ title: "Projects", section: "projects" });
  });
  alias.slice(0, 4).forEach((m) => {
    if (m.have) {
      lines.push(`**Yes, ${m.skill}**${m.evidence.length ? `: see ${m.evidence.join("; ")}` : ""}.`);
      sources.push({ title: "Skills", section: "skills" });
    } else {
      lines.push(
        `**${m.skill}** isn't listed on ${FIRST}'s portfolio yet. You can ask her directly about it via the contact form.`
      );
      sources.push({ title: "Contact", section: "contact" });
    }
  });
  return { text: lines.join("\n\n"), sources: dedupe(sources) };
}

const EDUCATION_ASK = /\b(stud(y|ied)|education|degrees?|universit(y|ies)|college|school|masters?|bachelors?|gpa|cgpa|graduat\w*|coursework)\b/i;

export function educationAnswer(question) {
  if (!EDUCATION_ASK.test(question)) return null;
  const lines = [`**${FIRST}'s education**`];
  educationData.forEach((e) => lines.push(`• ${e.degree}, ${e.school} (${e.duration}), ${e.grade}`));
  if (/coursework|courses|subjects/i.test(question)) {
    educationData.forEach((e) => lines.push(`\n${e.school} coursework: ${e.coursework.join(", ")}`));
  }
  return { text: lines.join("\n"), sources: [{ title: "Education", section: "education" }] };
}

export function topicAnswer(question) {
  const topic = TOPICS.find((t) => t.ask.test(question));
  if (!topic) return null;

  const roles = experienceData
    .map((e) => ({ e, tech: e.technologies.filter((t) => topic.tech.test(t)) }))
    .filter((r) => r.tech.length);
  const projects = projectsData.filter(
    (p) => p.technologies.some((t) => topic.tech.test(t)) || p.categories.some((c) => topic.tech.test(c))
  );
  const categoryTools = skillsData
    .filter((c) => topic.categories.includes(c.category))
    .flatMap((c) => c.skills.map((s) => s.name));
  const onTopic = categoryTools.filter((t) => topic.tech.test(t));
  const tools = onTopic.length ? onTopic : categoryTools;
  if (!roles.length && !projects.length && !tools.length) return null;

  const lines = [`**${FIRST}'s ${topic.label}**`];
  if (roles.length) {
    lines.push("Roles:");
    roles.forEach(({ e, tech }) => lines.push(`• ${roleName(e)} (${e.duration}): ${tech.join(", ")}`));
  }
  if (projects.length) {
    lines.push("Projects:");
    projects.slice(0, 4).forEach((p) => lines.push(`• ${p.title}: ${p.metric}`));
  }
  if (tools.length) {
    const shown = tools.slice(0, 10);
    lines.push(`Tools: ${shown.join(", ")}${tools.length > shown.length ? ", and more" : ""}`);
  }

  const sources = [];
  if (roles.length) sources.push({ title: "Experience", section: "experience" });
  if (projects.length) sources.push({ title: "Projects", section: "projects" });
  if (tools.length) sources.push({ title: "Skills", section: "skills" });
  return { text: lines.join("\n"), sources };
}
