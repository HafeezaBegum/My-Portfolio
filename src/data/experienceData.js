import caseGAlogo from "../assets/case-ga-logo.png";
import piSquareLogo from "../assets/piSquare-logo.png";
import languifyLogo from "../assets/languify-logo.png";

const experienceData = [
  {
    title: "Data Engineer",
    company: "Case Western Reserve University",
    link: "https://case.edu",
    logo: caseGAlogo,
    duration: "June 2025 – Present",
    technologies: ["Python", "SQL", "PySpark", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Docker", "Kubernetes", "HPC", "LLMs", "GPT-2", "BERT", "MLflow", "Jupyter Notebook"],
    description: "Data Engineer with hands-on experience building and optimizing large-scale, production-ready data pipelines using Python, SQL, and distributed compute frameworks. Currently architecting end-to-end data workflows spanning ingestion, preprocessing, real-time streaming, and batch processing on multi-GPU and multi-node HPC infrastructure, with a strong focus on throughput, fault tolerance, and scalability. Experienced in developing modular pipeline components, reducing I/O bottlenecks, and maintaining pipeline reliability across distributed systems by resolving failures, dependency conflicts, and performance regressions. Adept at translating complex engineering requirements into clean, well-documented, maintainable data infrastructure, with a track record of supporting team onboarding through clear technical documentation and delivery best practices."
    
  },
  {
    title: "Data Engineer",
    company: "Undergraduate Research Office, Case Western Reserve University",
    link: "https://case.edu",
    logo: caseGAlogo,
    duration: "June 2024 – May 2025",
    technologies: ["Python", "SQL", "Apache Airflow", "FastAPI", "ETL/ELT", "BLEU", "ROUGE", "Pandas", "PostgreSQL", "Jupyter Notebook", "BERT", "GPT-2"],
    description: "Designed and delivered end-to-end ETL/ELT pipelines to extract, transform, and enrich structured datasets for analytics and reporting, with orchestration automated through Apache Airflow for reliable, scheduled data delivery. Wrote advanced SQL queries and applied strong data modeling principles to produce custom data feeds aligned with downstream business requirements. Built FastAPI-based inference services integrated into internal tooling, enabling scalable, programmatic data access across teams. Automated evaluation pipelines using BLEU, ROUGE, perplexity, and semantic similarity metrics to ensure data and model output quality at scale. Collaborated cross-functionally to translate complex data requirements into robust, maintainable engineering solutions."
    
  },
  {
    title: "Model-Based Design Intern",
    company: "Pi Square Technologies",
    link: "https://www.pisquaretech.com",
    logo: piSquareLogo,
    duration: "Feb. 2023 – May 2023",
    technologies: ["MATLAB", "Simulink", "Stateflow", "Agile"], 
    description: "As a Model-Based Design Intern at Pi Square Technologies, I designed and simulated over eight automotive control system models using MATLAB, Simulink, and Stateflow. My role involved performing rigorous MIL and SIL testing to validate model behavior and ensure logical correctness across driving scenarios. I developed automation scripts that accelerated model generation and report compilation by up to 40%. I also ensured compliance with MAAB guidelines by integrating verification tools into the workflow. Working in an Agile team, I collaborated with engineers across the development cycle and gained hands-on experience in automotive embedded systems, control logic, and simulation-driven design."
  }
];

export default experienceData;
