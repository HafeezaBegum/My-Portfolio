import fraudBg from "../assets/FraudDetection.png"; 
import nlpBg from "../assets/music.png";
import budgetBg from "../assets/spartanBudget.png";
import coPurchaseBg from "../assets/Recommendation.png";
import cnnBg from "../assets/cnn.png";
import portfolioBg from "../assets/portfolio.png";

const projectsData = [
     {
      title: "Interactive Personal Portfolio Website",
      description: "Developed and deployed a dynamic and responsive personal portfolio website using React.js and Bootstrap. The site features intuitive navigation with smooth scrolling, consistent UI elements across sections (Home, Education, Skills, Experience, Projects, Certifications, Contact), and a responsive design for optimal viewing on various devices. Key functionalities include dynamic content rendering from data, interactive elements like hover effects and 'Read More/Less' for project details, and a functional contact form integrated with Formspree for direct communication. The project demonstrates proficiency in modern front-end development, component-based architecture, and external API integration.",
      technologies: ["React.js", "Bootstrap 5", "HTML5", "CSS3", "JavaScript", "react-scroll", "react-icons/fa", "Formspree", "GitHub Pages"],
      github: "https://github.com/HafeezaBegum/My-Portfolio",
      backgroundImage: portfolioBg,
      demo: "https://hafeezabegum.github.io/My-Portfolio/"
    },
    {
      title: "Co-Purchasing Analysis and Recommendation System",
      description: "Explored product recommendations and link prediction using graph-based methodologies on Amazon datasets. Utilized network analysis to examine structural characteristics like degree centrality, betweenness centrality, and clustering coefficient. Employed community detection algorithms, specifically Girvan-Newman and Louvain, to identify clusters of frequently co-purchased products and derive insights into customer behavior. Developed a book recommendation system based on Jaccard similarity and co-purchase patterns. Implemented link prediction using various machine learning models including Graph Neural Networks (SAGEConv), Logistic Regression, Decision Tree, Random Forest, and SVM, with Random Forest demonstrating the best performance.",
      technologies: ["Python", "NetworkX", "Pandas", "PyTorch Geometric", "Scikit-learn"],
      github: "https://github.com/HafeezaBegum/Co-Purchasing-Analysis-and-Recommendation-System",
      backgroundImage: coPurchaseBg
    },
    {
      title: "Machine Learning Pipeline for Robust Fraud Detection",
      description: "Developed a robust machine learning pipeline for credit card fraud detection, encompassing comprehensive exploratory data analysis (EDA), duplicate record elimination, and missing value imputation. Critically addressed severe class imbalance through SMOTE oversampling to enhance model generalization. Engineered, trained, and evaluated supervised classification models, including Random Forest, XGBoost, and Logistic Regression, achieving near-perfect performance (99.99% ROC AUC). Utilized SHAP (SHapley Additive exPlanations) for model interpretability and feature importance analysis.",
      technologies: ["Python", "Scikit-learn", "Pandas", "NumPy", "Matplotlib", "Seaborn", "imbalanced-learn", "XGBoost", "SHAP"],
      github: "https://github.com/HafeezaBegum/Machine-Learning-Pipeline-for-Robust-Fraud-Detection",
      backgroundImage: fraudBg
    },
    {
      title: "Thematic Song Classification using BERT & Distributed NLP",
      description: "Trained a BERT-based multi-class classifier on 28,362 song lyrics with 7 one-hot encoded thematic labels (e.g., Sadness, Violence, Romantic), achieving 94% validation accuracy over 3 epochs. Implemented MultiWorkerMirroredStrategy in TensorFlow to scale training across multiple GPUs with synchronized gradient updates via all-reduce, significantly reducing training time. Engineered a complete NLP pipeline with data cleaning, duplicate removal, subword tokenization (WordPiece), attention masking, and sequence truncation (128 tokens) to ensure input quality and model stability.",
      technologies: ["Python", "NLP", "TensorFlow", "BERT", "HPC"],
      github: "https://github.com/HafeezaBegum/Thematic-Song-Classification-using-BERT-Distributed-NLP",
      backgroundImage: nlpBg
    },
    {
      title: "Spartan Budget",
      description: "A budget tracking application designed to help students manage income, expenses, and account balances by categorizing and logging financial transactions. Features include expense logging with predefined categories (e.g., Food, Rent, Tuition) , tracking account balances , and data visualizations (pie charts and bar graphs) for financial health. The application also includes student-targeted features such as a shared expense tracker for splitting bills with email notifications and financial goal setting with progress tracking and saving projections.",
      technologies: ["React", "Node.js", "MongoDB", "Express", "Next.js", "Next-Auth", "Mongoose"],
      github: "https://github.com/HafeezaBegum/SpartanBudget",
      backgroundImage: budgetBg,
      demo: "https://spartanbudgetfe-reshmas-projects-f978a53e.vercel.app/"
    },
    {
      title: "High-Performance CNN for Real-Time Traffic Sign Recognition",
      description: "Designed and implemented a Convolutional Neural Network (CNN) to perform real-time traffic sign recognition using the GTSRB dataset. The project evaluated three training strategies—Single-GPU, Multi-GPU, and Multi-Node Distributed Training—on an HPC cluster with NVIDIA GPUs. Leveraged TensorFlow’s MirroredStrategy and MultiWorkerMirroredStrategy to scale training across GPUs and compute nodes. Achieved over 94% test accuracy while reducing training time by ~45% from single-GPU to multi-node setup. Focused on system efficiency, distributed coordination, performance tuning, and generalization stability.",
      technologies: ["Python", "TensorFlow", "Keras","Matplotlib","HPC", "NVIDIA L40S GPUs"],
      github: "https://github.com/HafeezaBegum/High-Performance-CNN-for-Real-Time-Traffic-Sign-Recognition",
      backgroundImage: cnnBg
    },
   
  ];
  
  export default projectsData;
  
