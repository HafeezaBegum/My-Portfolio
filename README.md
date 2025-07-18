# Interactive Personal Portfolio

This is a responsive and visually elegant portfolio website built with **React**. It showcases my educational background, technical skills, projects, experience, and certifications, aimed at highlighting my expertise in **AI, Machine Learning, Data Engineering, and Software Development**.

🚀 **Live Demo**: [https://hafeezabegum.github.io/My-Portfolio](https://hafeezabegum.github.io/My-Portfolio)

---

## 📌 Features

- Single-page application with smooth navigation
- Responsive design for desktop and mobile
- Modular sections: About, Education, Skills, Projects, Experience, Certifications, Contact
- Interactive hover effects and transitions
- Project descriptions with “Read More” toggle
- Easy-to-update structure using JSON-based data
- Deployed via GitHub Pages

---

## Tech Stack

- **Frontend**: React, Bootstrap, Custom CSS
- **Icons**: React Icons
- **Deployment**: GitHub Pages
- **Tooling**: `gh-pages`, `npm`

---

## Getting Started Locally

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

### Steps

```bash
git clone https://github.com/HafeezaBegum/My-Portfolio.git
cd my-portfolio
npm install
npm start
```

Visit http://localhost:3000 in your browser to see the app.

### 🚀 Deployment on GitHub Pages
This portfolio is deployed using GitHub Pages via the gh-pages package.

#### Build and Deploy
```bash
npm run build
npm run deploy
```
Make sure your package.json includes:
```bash
"homepage": "https://yourGithubUsername.github.io/My-Portfolio",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}
```
Once pushed, the site will be live at the URL specified in the homepage field.
