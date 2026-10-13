# Hafeeza Begum | Portfolio

A fast, data-driven React portfolio for a Data Engineer / ML Engineer, with built-in AI tools for recruiters.

🚀 **Live**: [hafeezabegum.github.io/My-Portfolio](https://hafeezabegum.github.io/My-Portfolio)

## Features

- **Ask my portfolio**: a chat assistant that answers questions about my experience and links to the section each answer came from.
  It recognises common recruiter questions (skills, experience, education) and falls back to BM25 search, all in the browser.
- **Job-fit analyzer**: paste a job description to see matched skills (with evidence from roles and projects) and gaps.
- **Command palette** (`Ctrl/⌘ + K`) to jump to any section or project, copy my email, or switch theme.
- Light / dark themes (follows the system setting, remembered per visitor, no flash on load).
- Animated "data graph" hero, typewriter roles, scroll progress, and scroll-reveal animations (all respect *reduced motion*).
- Filterable and searchable projects with detail modals, an experience timeline, and tabbed skills.
- Contact form via Formspree with inline success and error states, plus spam honeypot.
- SEO and social meta tags, JSON-LD `Person` schema, accessible landmarks, focus states and keyboard support.

## Editing content

All content lives in plain data files under [`src/data`](src/data). Edit them and the site and the assistant
update together:

| File | What it holds |
| --- | --- |
| `profile.js` | Name, roles, bio, links, contact |
| `experienceData.js` | Roles, dates, technologies |
| `projectsData.js` | Projects, categories, headline metric, links |
| `skillsData.js` | Skill categories and icons |
| `educationData.js`, `certificationsData.js` | Education and certifications |

Images are referenced by key and mapped in [`src/assets/images.js`](src/assets/images.js).

## Run locally

```bash
npm install
npm start
```

Open http://localhost:3000/My-Portfolio. Run tests with `npm test`.

## Deploy (GitHub Pages)

```bash
npm run deploy
```

## Tech

React 19 · custom CSS design system · react-icons · Formspree · GitHub Pages
