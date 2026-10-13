// Local job-description matcher: finds which skills a JD asks for, which ones
// Hafeeza has (with evidence from projects/experience), and which are gaps.
import projectsData from "../data/projectsData";
import experienceData from "../data/experienceData";
import certificationsData from "../data/certificationsData";
import skillsData from "../data/skillsData";
import { allSkillNames } from "../data/knowledge";

// canonical name -> regex aliases (word-boundary matched, case-insensitive)
const ALIASES = {
  Python: ["python"],
  SQL: ["sql", "t-sql", "pl/sql"],
  PySpark: ["pyspark", "spark", "apache spark"],
  "Apache Airflow": ["airflow", "apache airflow"],
  "ETL/ELT": ["etl", "elt", "data pipelines?", "data ingestion"],
  PostgreSQL: ["postgres", "postgresql"],
  Docker: ["docker", "containers?", "containeri[sz]ation"],
  Kubernetes: ["kubernetes", "k8s"],
  FastAPI: ["fastapi", "rest apis?", "apis"],
  MLflow: ["mlflow", "mlops"],
  LLMs: ["llms?", "large language models?", "generative ai", "genai", "gpt", "transformers?"],
  BERT: ["bert"],
  "Hugging Face Transformers": ["hugging ?face"],
  TensorFlow: ["tensorflow"],
  PyTorch: ["pytorch", "torch"],
  Keras: ["keras"],
  "Scikit-learn": ["scikit-learn", "sklearn", "scikit learn"],
  XGBoost: ["xgboost"],
  Pandas: ["pandas"],
  NumPy: ["numpy"],
  HPC: ["hpc", "high[- ]performance computing", "distributed (training|computing|systems)", "multi-gpu", "gpus?"],
  CUDA: ["cuda"],
  NLP: ["nlp", "natural language processing"],
  "Machine Learning": ["machine learning", "ml models?"],
  "Deep Learning": ["deep learning", "neural networks?", "cnn"],
  "Graph ML": ["graph neural networks?", "gnns?", "graph ml", "networkx"],
  AWS: ["aws", "amazon web services", "s3", "ec2"],
  "CI/CD": ["ci/cd", "github actions", "continuous integration"],
  Git: ["git", "github"],
  Tableau: ["tableau"],
  "Power BI": ["power ?bi"],
  "Data Visualization": ["data visuali[sz]ation", "matplotlib", "seaborn", "dashboards?"],
  "React.js": ["react", "react\\.js", "reactjs"],
  "Node.js": ["node", "node\\.js", "nodejs"],
  MongoDB: ["mongodb", "mongo"],
  Java: ["java"],
  "C++": ["c\\+\\+"],
  JavaScript: ["javascript", "js"],
  MATLAB: ["matlab", "simulink"],
  Agile: ["agile", "scrum"],
  // Common asks that are not (yet) in the portfolio, so they show up as gaps.
  Azure: ["azure"],
  GCP: ["gcp", "google cloud", "bigquery"],
  Snowflake: ["snowflake"],
  Databricks: ["databricks"],
  dbt: ["dbt"],
  Kafka: ["kafka", "kinesis", "pub/sub"],
  Terraform: ["terraform", "infrastructure as code"],
  Scala: ["scala"],
  Go: ["golang"],
  "Data Warehousing": ["data warehous(e|ing)", "redshift", "dimensional model(l)?ing", "star schema"],
  "Vector Databases": ["vector (db|databases?|stores?)", "pinecone", "faiss", "weaviate", "pgvector"],
  RAG: ["rag", "retrieval[- ]augmented"],
  "Agentic AI": ["agentic( ai)?", "ai agents?", "llm agents?", "multi-agent"],
  "AI Coding Assistants": ["claude code", "copilot", "cursor"],
  "Prompt Engineering": ["prompt engineering", "prompting"],
  "LLM APIs": ["openai( api)?", "claude", "anthropic", "gemini"],
  // Common asks to surface as gaps until they're on the portfolio.
  "LLM Frameworks": ["langchain", "langgraph", "llamaindex"],
  MCP: ["model context protocol", "mcp"],
  "Fine-tuning (LoRA)": ["lora", "qlora", "peft"],
};

const compiled = Object.entries(ALIASES).map(([name, aliases]) => ({
  name,
  re: new RegExp(`(^|[^a-z0-9+])(${aliases.join("|")})(?=$|[^a-z0-9+])`, "i"),
}));

// A skill only counts as "have" if the portfolio itself shows it somewhere,
// so the analyzer can never claim more than the site does.
const PORTFOLIO_TEXT = [
  ...skillsData.flatMap((c) => c.skills.map((sk) => sk.name)),
  ...experienceData.flatMap((e) => e.technologies),
  ...projectsData.flatMap((p) => [...p.technologies, p.description]),
  ...certificationsData.map((c) => c.title),
].join(" | ");

const HAVE = new Set(compiled.filter((c) => c.re.test(` ${PORTFOLIO_TEXT} `)).map((c) => c.name));

function evidenceFor(skill) {
  const re = compiled.find((c) => c.name === skill)?.re;
  if (!re) return [];
  const hits = [];
  experienceData.forEach((e) => {
    if (re.test(e.technologies.join(" ")))
      hits.push(`${e.title} @ ${e.company.split(",")[0]}`);
  });
  projectsData.forEach((p) => {
    if (re.test(`${p.technologies.join(" ")} ${p.description}`)) hits.push(p.title);
  });
  certificationsData.forEach((c) => {
    if (re.test(c.title)) hits.push(`${c.title} (certification)`);
  });
  return hits.slice(0, 3);
}

// Known skills mentioned in free text, with whether the portfolio shows them.
export function matchSkills(text) {
  const t = ` ${text.toLowerCase()} `;
  return compiled
    .filter((c) => c.re.test(t))
    .map((c) => ({ skill: c.name, have: HAVE.has(c.name), evidence: evidenceFor(c.name) }));
}

export function analyzeFit(jd) {
  const text = ` ${jd.toLowerCase()} `;
  const asked = compiled.filter((c) => c.re.test(text)).map((c) => c.name);
  const matched = asked
    .filter((s) => HAVE.has(s))
    .map((s) => ({ skill: s, evidence: evidenceFor(s) }));
  const missing = asked.filter((s) => !HAVE.has(s));
  const score = asked.length ? Math.round((matched.length / asked.length) * 100) : 0;
  return { asked, matched, missing, score, totalKnownSkills: allSkillNames().length };
}
