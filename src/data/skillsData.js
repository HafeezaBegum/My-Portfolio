const skillsData = [
  {
    category: "Programming & Scripting Languages",
    skills: [
      { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
      { name: "C++", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
      { name: "C", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" },
      { name: "Embedded C", icon: "https://cdn-icons-png.flaticon.com/512/1130/1130153.png" },
      { name: "SQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
      { name: "MATLAB", icon: "https://upload.wikimedia.org/wikipedia/commons/2/21/Matlab_Logo.png" }
    ]
  },
  {
    category: "AI, ML & Deep Learning Frameworks",
    skills: [
      { name: "TensorFlow", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
      { name: "Keras", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/keras/keras-original.svg" },
      { name: "PyTorch", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg" },
      { name: "Scikit-learn", icon: "https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg" },
      { name: "XGBoost", icon: "https://upload.wikimedia.org/wikipedia/commons/6/69/XGBoost_logo.png" },
      { name: "SHAP", icon: "https://raw.githubusercontent.com/slundberg/shap/master/docs/artwork/shap_logo.png" },
      { name: "imbalanced-learn", icon: "https://imbalanced-learn.org/stable/_static/logo_wide.png" }
    ]
  },
  {
    category: "Data Science & Analytics",
    skills: [
      { name: "NumPy", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg" },
      { name: "Pandas", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg" },
      { name: "Matplotlib", icon: "https://upload.wikimedia.org/wikipedia/commons/8/84/Matplotlib_icon.svg" },
      { name: "Seaborn", icon: "https://seaborn.pydata.org/_static/logo-wide-lightbg.svg" },
      { name: "Tableau", icon: "https://upload.wikimedia.org/wikipedia/commons/4/4b/Tableau_Logo.png" },
      { name: "Power BI", icon: "https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg" }
    ]
  },
  {
    category: "Natural Language Processing & Graph ML",
    skills: [
      { name: "LLM", icon: "https://cdn-icons-png.flaticon.com/512/1055/1055687.png" },
      { name: "BERT", icon: "https://cdn-icons-png.flaticon.com/512/4149/4149640.png" },
      { name: "Hugging Face Transformers", icon: "https://huggingface.co/front/assets/huggingface_logo-noborder.svg" },
      { name: "OpenCV", icon: "https://upload.wikimedia.org/wikipedia/commons/3/32/OpenCV_Logo_with_text_svg_version.svg" },
      { name: "NetworkX", icon: "https://networkx.org/_static/networkx_logo.svg" },
      { name: "PyTorch Geometric", icon: "https://raw.githubusercontent.com/pyg-team/pyg_sphinx_theme/master/pyg_sphinx_theme/static/img/pyg_logo.png" }
    ]
  },
  {
    category: "Web & App Development",
    skills: [
      { name: "React.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
      { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
      { name: "Express.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
      { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
      { name: "Flask", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg" },
      { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
      { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
      { name: "Bootstrap", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" }
    ]
  },
  {
    category: "Development Tools & Platforms",
    skills: [
      { name: "Git Actions", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
      { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
      { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
      { name: "Jupyter", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg" },
      { name: "Google Colab", icon: "https://colab.research.google.com/img/colab_favicon_256px.png" },
      { name: "Formspree", icon: "https://avatars.githubusercontent.com/u/13142323?s=200&v=4" },
      { name: "GitHub Pages", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" }
    ]
  },
  {
    category: "Cloud, Optimization & Deployment",
    skills: [
      { name: "AWS", icon: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" },
      { name: "CUDA", icon: "https://cdn-icons-png.flaticon.com/512/906/906334.png" },
      { name: "GPU Optimization", icon: "https://cdn-icons-png.flaticon.com/512/4701/4701920.png" },
      { name: "CI/CD", icon: "https://cdn-icons-png.flaticon.com/512/2621/2621058.png" },
      { name: "Simulink", icon: "https://cdn-icons-png.flaticon.com/512/3022/3022636.png" },
      { name: "Data Structures & Algorithms", icon: "https://cdn-icons-png.flaticon.com/512/1397/1397898.png" }
    ]
  }
];

export default skillsData;
