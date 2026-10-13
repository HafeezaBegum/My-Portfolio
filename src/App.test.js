import { render, screen } from "@testing-library/react";
import App from "./App";
import { answerLocally, search } from "./lib/assistant";
import { analyzeFit } from "./lib/jobFit";

beforeAll(() => {
  window.matchMedia =
    window.matchMedia ||
    ((q) => ({ matches: false, media: q, addEventListener() {}, removeEventListener() {} }));
  window.IntersectionObserver = class {
    observe() {}
    disconnect() {}
  };
  window.scrollTo = () => {};
  HTMLCanvasElement.prototype.getContext = () => ({
    setTransform() {},
    clearRect() {},
    beginPath() {},
    moveTo() {},
    lineTo() {},
    stroke() {},
    arc() {},
    fill() {},
  });
});

test("renders the hero and main sections", () => {
  render(<App />);
  expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(/Hafeeza Begum/);
  ["Experience", "Projects", "Skills", "Check my fit for your role", "Education"].forEach((t) =>
    expect(screen.getByRole("heading", { name: t })).toBeInTheDocument()
  );
});

test("assistant retrieves relevant chunks", () => {
  expect(search("BERT song lyrics")[0].chunk.title).toMatch(/Song Classification/);
  expect(search("how do I contact her email")[0].chunk.id).toBe("contact");
  expect(search("where did she study")[0].chunk.type).toBe("education");
  expect(answerLocally("zzzz qqqq").sources).toHaveLength(0);
  expect(search("how did she build you, how did she train you")[0].chunk.id).toBe("assistant");
  expect(search("who is she? give me a summary")[0].chunk.id).toBe("about");
  expect(answerLocally("hi").text).toMatch(/Ask me about/);
  expect(answerLocally("thanks!").sources).toHaveLength(0);
});

test("assistant answers recruiter questions from portfolio data", () => {
  expect(answerLocally("What LLM work has she done?").text).toMatch(/AI Researcher, Case Western/);
  expect(answerLocally("Does she know Kafka?").text).toMatch(/Yes, Kafka/);
  expect(answerLocally("Has she used Spark?").text).toMatch(/Yes, PySpark/);
  expect(answerLocally("Can you tell me if she knows Scala?").text).toMatch(/isn't listed/);
  expect(answerLocally("where did she study").text).toMatch(/Master of Science in Computer Science/);
});

test("job fit separates matches from gaps", () => {
  const r = analyzeFit("Need Python, SQL, PostgreSQL, Docker and Scala experience.");
  const matched = r.matched.map((m) => m.skill);
  expect(matched).toEqual(expect.arrayContaining(["Python", "SQL", "PostgreSQL", "Docker"]));
  expect(r.missing).toContain("Scala");
  expect(r.score).toBe(80);
});
