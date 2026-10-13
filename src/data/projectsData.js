// `image` is a key into src/assets/images.js
// `categories` drive the filter chips in the Projects section.
const projectsData = [
  {
    title: "LyriSense: Thematic Song Classification using BERT & Distributed NLP",
    image: "music",
    featured: true,
    categories: ["NLP & LLMs", "HPC"],
    metric: "94% val. accuracy",
    summary:
      "Classifies 28K song lyrics into 7 themes using BERT, trained on multiple GPUs on an HPC cluster.",
    description:
      "Built a classifier that sorts 28,362 song lyrics (1950–2019) into 7 themes such as Sadness, Violence and Romantic, using BERT embeddings with dense layers on top. Validation accuracy rose from 90.0% after the first epoch to 94.0% after the third. Scaled training with TensorFlow's MultiWorkerMirroredStrategy on 2 GPUs on CWRU's Pioneer HPC cluster, synchronizing gradients via all-reduce. The NLP pipeline covered cleaning, de-duplication, WordPiece tokenization, attention masks and 128-token sequences, and class imbalance was handled with over- and undersampling, dropout and early stopping. Built for the High Performance Data & Computing course at CWRU.",
    technologies: ["Python", "TensorFlow", "BERT", "Hugging Face Transformers", "NLP", "HPC", "Multi-GPU Training"],
    github: "https://github.com/HafeezaBegum/Thematic-Song-Classification-using-BERT-Distributed-NLP",
  },
  {
    title: "High-Performance CNN for Real-Time Traffic Sign Recognition",
    image: "cnn",
    featured: true,
    categories: ["Machine Learning", "HPC"],
    metric: "~45% faster training",
    summary:
      "Traffic sign recognition CNN, compared across single-GPU, multi-GPU and multi-node training.",
    description:
      "Designed and implemented a Convolutional Neural Network (CNN) to perform real-time traffic sign recognition using the GTSRB dataset. The project evaluated three training strategies (Single-GPU, Multi-GPU, and Multi-Node Distributed Training) on an HPC cluster with NVIDIA GPUs. Leveraged TensorFlow's MirroredStrategy and MultiWorkerMirroredStrategy to scale training across GPUs and compute nodes. Achieved over 94% test accuracy while reducing training time by ~45% from single-GPU to multi-node setup. Focused on system efficiency, distributed coordination, performance tuning, and generalization stability.",
    technologies: ["Python", "TensorFlow", "Keras", "SLURM", "HPC", "NVIDIA L40S GPUs", "Matplotlib"],
    github: "https://github.com/HafeezaBegum/High-Performance-CNN-for-Real-Time-Traffic-Sign-Recognition",
  },
  {
    title: "Machine Learning Pipeline for Robust Fraud Detection",
    image: "fraud",
    featured: true,
    categories: ["Machine Learning", "Data Engineering"],
    metric: "SHAP + Flask app",
    summary:
      "Credit card fraud detection with several ML models, SHAP explanations and a Flask app for predictions.",
    description:
      "Developed a robust machine learning pipeline for credit card fraud detection, encompassing comprehensive exploratory data analysis (EDA), duplicate record elimination, and missing value imputation. Critically addressed severe class imbalance through SMOTE oversampling to enhance model generalization. Engineered, trained, and compared Logistic Regression, Random Forest (tuned with GridSearchCV), XGBoost and a Keras deep learning model, selecting the best model by ROC AUC alongside confusion matrices and classification reports. Used SHAP (SHapley Additive exPlanations) to explain predictions and rank the features driving fraud risk, and deployed the final model in a Flask web app that scores transactions entered by users.",
    technologies: ["Python", "Scikit-learn", "XGBoost", "Keras", "SHAP", "imbalanced-learn", "Flask", "Pandas", "NumPy", "Matplotlib"],
    github: "https://github.com/HafeezaBegum/Machine-Learning-Pipeline-for-Robust-Fraud-Detection",
  },
  {
    title: "Co-Purchasing Analysis and Recommendation System",
    image: "recommendation",
    categories: ["Machine Learning", "Graph ML"],
    metric: "96.4% link-prediction accuracy",
    summary:
      "Analyzed Amazon co-purchase data (548K products) for communities, book recommendations and link prediction.",
    description:
      "Explored product recommendations and link prediction using graph-based methods on the SNAP Amazon co-purchase dataset (548,552 products, 1,788,725 co-purchase links). Utilized network analysis to examine structural characteristics like degree centrality, betweenness centrality, and clustering coefficient. Employed community detection algorithms, specifically Girvan-Newman and Louvain, to identify clusters of frequently co-purchased products and derive insights into customer behavior. Developed a book recommendation system based on Jaccard similarity and co-purchase patterns. Louvain community detection reached a modularity of 0.79, versus 0.21 for Girvan-Newman. For link prediction, compared a Graph Neural Network (SAGEConv) with Logistic Regression, Decision Tree, Random Forest and SVM: Random Forest performed best at 96.4% accuracy and 0.948 ROC AUC, while the GNN struggled with the sparse graph.",
    technologies: ["Python", "NetworkX", "Pandas", "PyTorch Geometric", "Scikit-learn"],
    github: "https://github.com/HafeezaBegum/Co-Purchasing-Analysis-and-Recommendation-System",
  },
  {
    title: "Spartan Budget",
    image: "budget",
    categories: ["Web"],
    metric: "Full-stack app",
    summary:
      "Student budgeting app with expense categories, shared bills with email notifications and savings goals.",
    description:
      "A budget tracking application designed to help students manage income, expenses, and account balances by categorizing and logging financial transactions. Features include expense logging with predefined categories (e.g., Food, Rent, Tuition), tracking account balances, and data visualizations (pie charts and bar graphs) for financial health. The application also includes student-targeted features such as a shared expense tracker for splitting bills with email notifications and financial goal setting with progress tracking and saving projections. Deployed on Vercel and Render.",
    technologies: ["React", "Next.js", "Node.js", "Express", "MongoDB", "Redux", "Material UI", "NextAuth", "Jest"],
    github: "https://github.com/HafeezaBegum/SpartanBudget",
    demo: "https://spartanbudgetfe-reshmas-projects-f978a53e.vercel.app/",
  },
  {
    title: "Interactive Personal Portfolio with AI Assistant",
    image: "portfolio",
    categories: ["Web", "NLP & LLMs"],
    metric: "You're here",
    summary:
      "My portfolio site, with a chat assistant and a job-fit checker that run in the browser.",
    description:
      "Designed and built this portfolio in React with a custom design system (light/dark themes), a command palette, animated sections and data-driven content. It ships an 'Ask my portfolio' assistant that runs retrieval over structured portfolio data entirely in the browser, plus a job-description fit analyzer. The assistant combines intent detection for common recruiter questions with BM25 search, and every answer links back to the section it came from.",
    technologies: ["React", "JavaScript", "CSS", "BM25 Retrieval", "NLP", "GitHub Pages"],
    github: "https://github.com/HafeezaBegum/My-Portfolio",
    demo: "https://hafeezabegum.github.io/My-Portfolio/",
  },
];

export default projectsData;
