// Ordered by relevance for Data Engineering + AI/ML roles.
// `icon` is optional; skills without one render as plain chips.
const DEV = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons";

const skillsData = [
  {
    category: "Languages",
    skills: [
      { name: "Python", icon: `${DEV}/python/python-original.svg` },
      { name: "SQL", icon: `${DEV}/azuresqldatabase/azuresqldatabase-original.svg` },
      { name: "Java", icon: `${DEV}/java/java-original.svg` },
      { name: "JavaScript", icon: `${DEV}/javascript/javascript-original.svg` },
      { name: "C++", icon: `${DEV}/cplusplus/cplusplus-original.svg` },
      { name: "C", icon: `${DEV}/c/c-original.svg` },
      { name: "MATLAB / Simulink", icon: `${DEV}/matlab/matlab-original.svg` },
    ],
  },
  {
    category: "Data Engineering & Databases",
    skills: [
      { name: "ETL/ELT Pipelines" },
      { name: "PySpark", icon: `${DEV}/apachespark/apachespark-original.svg` },
      { name: "Apache Airflow", icon: `${DEV}/apacheairflow/apacheairflow-original.svg` },
      { name: "Kafka", icon: `${DEV}/apachekafka/apachekafka-original.svg` },
      { name: "dbt" },
      { name: "Snowflake" },
      { name: "Data Modeling" },
      { name: "Databricks", icon: `${DEV}/databricks/databricks-original.svg` },
      { name: "PostgreSQL", icon: `${DEV}/postgresql/postgresql-original.svg` },
      { name: "Pandas", icon: `${DEV}/pandas/pandas-original.svg` },
      { name: "NumPy", icon: `${DEV}/numpy/numpy-original.svg` },
      { name: "MongoDB", icon: `${DEV}/mongodb/mongodb-original.svg` },
    ],
  },
  {
    category: "Cloud & DevOps",
    skills: [
      { name: "Azure", icon: `${DEV}/azure/azure-original.svg` },
      { name: "AWS", icon: `${DEV}/amazonwebservices/amazonwebservices-plain-wordmark.svg` },
      { name: "Docker", icon: `${DEV}/docker/docker-original.svg` },
      { name: "Kubernetes", icon: `${DEV}/kubernetes/kubernetes-original.svg` },
      { name: "Terraform", icon: `${DEV}/terraform/terraform-original.svg` },
      { name: "GitHub Actions", icon: `${DEV}/githubactions/githubactions-original.svg` },
      { name: "CI/CD" },
      { name: "Git & GitHub", icon: `${DEV}/git/git-original.svg` },
    ],
  },
  {
    category: "Machine Learning",
    skills: [
      { name: "PyTorch", icon: `${DEV}/pytorch/pytorch-original.svg` },
      { name: "TensorFlow", icon: `${DEV}/tensorflow/tensorflow-original.svg` },
      { name: "Keras", icon: `${DEV}/keras/keras-original.svg` },
      { name: "Scikit-learn", icon: `${DEV}/scikitlearn/scikitlearn-original.svg` },
      { name: "XGBoost" },
      { name: "SHAP" },
      { name: "imbalanced-learn" },
      { name: "MLflow" },
      { name: "Weights & Biases" },
    ],
  },
  {
    category: "LLMs, NLP & Graph ML",
    skills: [
      { name: "LLMs" },
      { name: "RAG" },
      { name: "FAISS / Vector Search" },
      { name: "LoRA / PEFT Fine-tuning" },
      { name: "BERT" },
      { name: "Hugging Face Transformers" },
      { name: "NetworkX" },
      { name: "PyTorch Geometric" },
      { name: "OpenCV", icon: `${DEV}/opencv/opencv-original.svg` },
    ],
  },
  {
    category: "AI Tools & Agentic AI",
    skills: [
      { name: "Agentic AI" },
      { name: "LangChain" },
      { name: "LangGraph" },
      { name: "LlamaIndex" },
      { name: "MCP (Model Context Protocol)" },
      { name: "Claude Code" },
      { name: "Claude" },
      { name: "Gemini" },
      { name: "OpenAI API" },
      { name: "GitHub Copilot", icon: `${DEV}/github/github-original.svg` },
      { name: "Cursor" },
      { name: "Prompt Engineering" },
    ],
  },
  {
    category: "HPC & GPU Computing",
    skills: [
      { name: "Multi-GPU Training" },
      { name: "HPC Clusters" },
      { name: "CUDA" },
    ],
  },
  {
    category: "Analytics & Visualization",
    skills: [
      { name: "Matplotlib", icon: `${DEV}/matplotlib/matplotlib-original.svg` },
      { name: "Seaborn" },
      { name: "Tableau" },
      { name: "Power BI" },
      { name: "Jupyter", icon: `${DEV}/jupyter/jupyter-original.svg` },
    ],
  },
  {
    category: "Web & APIs",
    skills: [
      { name: "React.js", icon: `${DEV}/react/react-original.svg` },
      { name: "Next.js", icon: `${DEV}/nextjs/nextjs-original.svg` },
      { name: "Node.js", icon: `${DEV}/nodejs/nodejs-original.svg` },
      { name: "Express.js" },
      { name: "FastAPI", icon: `${DEV}/fastapi/fastapi-original.svg` },
      { name: "Flask", icon: `${DEV}/flask/flask-original.svg` },
      { name: "HTML & CSS", icon: `${DEV}/html5/html5-original.svg` },
    ],
  },
];

export default skillsData;
