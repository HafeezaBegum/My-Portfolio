import React, { useEffect, useRef, useState } from "react";
import { FiMessageCircle, FiSend, FiX, FiZap } from "react-icons/fi";
import { ask } from "../lib/assistant";
import profile from "../data/profile";

const SUGGESTIONS = [
  "What LLM work has she done?",
  "Tell me about distributed training",
  "What's her data engineering stack?",
  "Does she know PySpark and Kafka?",
  "How can I contact her?",
];

// Renders **bold** and line breaks without pulling in a markdown library.
export const Rich = ({ text }) =>
  text.split(/(\*\*[^*]+\*\*)/g).map((part, i) =>
    part.startsWith("**") && part.endsWith("**") ? <strong key={i}>{part.slice(2, -2)}</strong> : part
  );

const ChatWidget = ({ open, setOpen }) => {
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content: `Hi! Ask me about ${profile.name.split(" ")[0]}'s experience, projects or skills.`,
    },
  ]);
  const [input, setInput] = useState("");
  const [busy, setBusy] = useState(false);
  const logRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    logRef.current?.scrollTo({ top: logRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, busy]);

  useEffect(() => {
    if (open) inputRef.current?.focus();
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    if (open) document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, setOpen]);

  const send = async (text) => {
    const q = text.trim();
    if (!q || busy) return;
    const history = [...messages, { role: "user", content: q }];
    setMessages(history);
    setInput("");
    setBusy(true);
    // Only real turns go to the model; the greeting is UI chrome.
    const res = await ask(history.slice(1).map(({ role, content }) => ({ role, content })));
    setMessages((m) => [...m, { role: "assistant", content: res.text, sources: res.sources }]);
    setBusy(false);
  };

  return (
    <>
      {open && (
        <div className="card chat-panel" role="dialog" aria-label="Portfolio assistant">
          <div className="chat-header">
            <span className="badge-icon">
              <FiZap />
            </span>
            <div style={{ flex: 1 }}>
              <strong style={{ fontSize: "0.95rem" }}>Ask my portfolio</strong>
              <div className="mode">
                Answers from my portfolio
              </div>
            </div>
            <button className="icon-btn" onClick={() => setOpen(false)} aria-label="Close assistant">
              <FiX />
            </button>
          </div>

          <div className="chat-log" ref={logRef} aria-live="polite">
            {messages.map((m, i) => (
              <div key={i} className={`msg ${m.role === "user" ? "user" : "bot"}`}>
                <Rich text={m.content} />
                {m.sources?.length > 0 && (
                  <div className="msg-sources">
                    {m.sources.map((s) => (
                      <a key={s.title} href={`#${s.section}`} className="chip" onClick={() => window.innerWidth < 520 && setOpen(false)}>
                        ↗ {s.title.length > 34 ? `${s.title.slice(0, 34)}…` : s.title}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
            {busy && (
              <div className="msg bot typing" aria-label="Thinking">
                <span />
                <span />
                <span />
              </div>
            )}
            {messages.length === 1 && (
              <div className="suggestions">
                {SUGGESTIONS.map((s) => (
                  <button key={s} onClick={() => send(s)}>
                    {s}
                  </button>
                ))}
              </div>
            )}
          </div>

          <form
            className="chat-form"
            onSubmit={(e) => {
              e.preventDefault();
              send(input);
            }}
          >
            <input
              ref={inputRef}
              className="field"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about projects, skills…"
              maxLength={500}
              aria-label="Your question"
            />
            <button className="icon-btn" type="submit" disabled={busy} aria-label="Send">
              <FiSend />
            </button>
          </form>
        </div>
      )}

      <button className="chat-fab" onClick={() => setOpen(!open)} aria-expanded={open} aria-label="Ask my portfolio assistant">
        {open ? <FiX /> : <FiMessageCircle />}
        <span className="fab-label">{open ? "Close" : "Ask my portfolio"}</span>
      </button>
    </>
  );
};

export default ChatWidget;
