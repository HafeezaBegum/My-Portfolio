// "Ask my portfolio" engine: structured answers plus BM25 retrieval over the
// portfolio data, running entirely in the browser.
import { buildChunks } from "../data/knowledge";
import { educationAnswer, skillAnswer, topicAnswer } from "./smartAnswers";

const STOP = new Set(
  "a an the and or of to in on for with at by from is are was were be been do does did has have had what which who whom whose how why when where can could would should will about tell me her she hers you your my i it its this that these those any some there their them as into than then so if not no yes please more much many most also just give show list".split(
    " "
  )
);

// Light query expansion so natural questions hit the right chunks.
const SYNONYMS = {
  job: ["experience", "work", "role"],
  work: ["experience", "job"],
  worked: ["experience"],
  study: ["education", "degree"],
  studied: ["education", "degree"],
  school: ["education", "university"],
  college: ["education", "university"],
  gpa: ["cgpa"],
  llm: ["llms", "gpt", "bert", "language"],
  llms: ["llm", "gpt", "bert"],
  ai: ["llm", "machine", "learning", "bert"],
  ml: ["machine", "learning"],
  gpu: ["gpus", "hpc", "distributed"],
  distributed: ["hpc", "multi", "gpu"],
  pipeline: ["pipelines", "etl"],
  pipelines: ["pipeline", "etl"],
  etl: ["pipelines", "airflow", "elt"],
  stack: ["skills", "technologies"],
  tech: ["skills", "technologies"],
  hire: ["contact", "available"],
  email: ["contact"],
  reach: ["contact"],
  cert: ["certifications"],
  certs: ["certifications"],
  certified: ["certifications"],
  nlp: ["bert", "language", "nlp"],
  cloud: ["aws", "docker", "kubernetes"],
};

// Tiny suffix stemmer so "trained" matches "train" and "pipelines" matches "pipeline".
const stem = (t) => {
  if (t.length > 5 && t.endsWith("ing")) return t.slice(0, -3);
  if (t.length > 4 && t.endsWith("ed")) return t.slice(0, -2);
  if (t.length > 3 && t.endsWith("s") && !t.endsWith("ss")) return t.slice(0, -1);
  return t;
};

const rawTokens = (s) =>
  s
    .toLowerCase()
    .replace(/[^a-z0-9+#./\s-]/g, " ")
    .split(/[\s/-]+/)
    .map((t) => t.replace(/^\.+|\.+$/g, ""))
    .filter((t) => t && !STOP.has(t));

const tokenize = (s) => rawTokens(s).map(stem);

let index;
function getIndex() {
  if (index) return index;
  const chunks = buildChunks();
  const docs = chunks.map((c) => {
    const toks = tokenize(`${c.title} ${c.title} ${c.keywords || ""} ${c.text}`);
    const tf = {};
    toks.forEach((t) => (tf[t] = (tf[t] || 0) + 1));
    return { chunk: c, tf, len: toks.length };
  });
  const df = {};
  docs.forEach((d) => Object.keys(d.tf).forEach((t) => (df[t] = (df[t] || 0) + 1)));
  const avgLen = docs.reduce((s, d) => s + d.len, 0) / docs.length;
  index = { docs, df, avgLen, N: docs.length };
  return index;
}

export function search(query, k = 3) {
  const { docs, df, avgLen, N } = getIndex();
  const raw = rawTokens(query);
  const base = raw.map(stem);
  const terms = [...new Set(raw.flatMap((t) => [t, ...(SYNONYMS[t] || [])]).map(stem))];
  const k1 = 1.4;
  const b = 0.75;
  return docs
    .map((d) => {
      let score = 0;
      terms.forEach((t) => {
        const f = d.tf[t];
        if (!f) return;
        const idf = Math.log(1 + (N - df[t] + 0.5) / (df[t] + 0.5));
        const w = base.includes(t) ? 1 : 0.5; // expanded terms count less
        score += w * idf * ((f * (k1 + 1)) / (f + k1 * (1 - b + (b * d.len) / avgLen)));
      });
      return { chunk: d.chunk, score };
    })
    .filter((r) => r.score > 0.8)
    .sort((a, b) => b.score - a.score)
    .slice(0, k);
}

// Picks the sentences from a chunk that best match the question.
function bestSentences(text, query, n = 2) {
  const q = new Set(tokenize(query));
  // Split on sentence enders followed by whitespace, so "96.4%" or "Node.js" stay intact.
  const sentences = text.split(/(?<=[.!?])\s+(?=[A-Z(])/);
  return sentences
    .map((s, i) => ({ s: s.trim(), i, hits: tokenize(s).filter((t) => q.has(t)).length }))
    .sort((a, b) => b.hits - a.hits || a.i - b.i)
    .slice(0, n)
    .sort((a, b) => a.i - b.i)
    .map((x) => x.s)
    .join(" ");
}

const SMALL_TALK = [
  {
    re: /^\s*(hi|hello|hey|hii+|good (morning|afternoon|evening))\b[\s!.?]*$/i,
    text: "Hi! Ask me about Hafeeza's experience, projects, skills, education or how to contact her.",
  },
  {
    re: /^\s*(thanks|thank you|thx|ty|great|cool|nice|ok(ay)?)\b[\s!.?]*$/i,
    text: "You're welcome! Anything else you'd like to know about Hafeeza's work?",
  },
];

export function answerLocally(question) {
  const talk = SMALL_TALK.find((t) => t.re.test(question));
  if (talk) return { text: talk.text, sources: [] };
  // Questions about the assistant itself go straight to search ("how did she build you?").
  const aboutAssistant =
    /\b(build|built|train|trained|make|made|create|created|program|programmed|power|powered|work|works)\s+(you|yourself)\b|\b(who|what) are you\b|\bthis (assistant|bot|chat)/i;
  if (!aboutAssistant.test(question)) {
    const smart = skillAnswer(question) || educationAnswer(question) || topicAnswer(question);
    if (smart) return smart;
  }
  // Keep runner-up matches only when they're nearly as relevant as the best one.
  const found = search(question);
  const results = found.filter((r, i) => i === 0 || r.score >= found[0].score * 0.6);
  if (!results.length) {
    return {
      text:
        "I couldn't find that in Hafeeza's portfolio. Try asking about her experience, projects, LLM work, distributed training, skills, education or how to get in touch.",
      sources: [],
    };
  }
  const parts = results.map(
    ({ chunk }, i) => `**${chunk.title}**: ${bestSentences(chunk.text, question, i === 0 ? 3 : 2)}`
  );
  return {
    text: parts.join("\n\n"),
    sources: results.map(({ chunk }) => ({ title: chunk.title, section: chunk.section })),
  };
}

// history: [{role: "user"|"assistant", content: string}]
export async function ask(history) {
  return answerLocally(history[history.length - 1].content);
}
