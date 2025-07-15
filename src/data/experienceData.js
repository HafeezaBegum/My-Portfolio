import caseGAlogo from "../assets/case-ga-logo.png";
import piSquareLogo from "../assets/piSquare-logo.png";
import languifyLogo from "../assets/languify-logo.png";

const experienceData = [
  {
    title: "Graduate Assistant at Undergraduate Research Office",
    company: "Case Western Reserve University",
    link: "https://case.edu",
    logo: caseGAlogo,
    duration: "Jan. 2024 – May 2025",
    technologies: ["Python", "Pandas", "Matplotlib", "Seaborn", "LLMs", "GPT-2", "BERT", "MLflow", "Jupyter Notebook"],
    description: "As a Graduate Assistant at the Undergraduate Research Office, I contributed to an AI-driven system designed to evaluate and enhance academic writing feedback. Over the course of a year, I streamlined the processing and visualization of institutional research data using Python, Pandas, and Seaborn, enabling faculty teams to analyze engagement trends across programs. I developed dynamic Excel dashboards and automated pipelines that cut manual reporting time by nearly 30%. My primary focus involved building and fine-tuning transformer-based large language models (LLMs) such as GPT-2 and BERT, targeting natural language understanding and suggestion generation. I engineered tokenization workflows with Hugging Face Transformers, optimized training with early stopping and gradient clipping, and evaluated model outputs using BLEU and ROUGE metrics. These techniques yielded up to 20% improvements in coherence and relevance over baseline. I also tracked experiments using MLflow, maintained reproducible scripts, and iterated on prompt design strategies to align outputs with human feedback expectations."
    
  },
  {
    title: "Model-Based Design Intern",
    company: "Pi Square Technologies",
    link: "https://www.pisquaretech.com",
    logo: piSquareLogo,
    duration: "Feb. 2023 – May 2023",
    technologies: ["MATLAB", "Simulink", "Stateflow", "Agile"], 
    description: "As a Model-Based Design Intern at Pi Square Technologies, I designed and simulated over eight automotive control system models using MATLAB, Simulink, and Stateflow. My role involved performing rigorous MIL and SIL testing to validate model behavior and ensure logical correctness across driving scenarios. I developed automation scripts that accelerated model generation and report compilation by up to 40%. I also ensured compliance with MAAB guidelines by integrating verification tools into the workflow. Working in an Agile team, I collaborated with engineers across the development cycle and gained hands-on experience in automotive embedded systems, control logic, and simulation-driven design."
  },
  {
    title: "AI Intern",
    company: "Languify",
    link: "https://languify.in",
    logo: languifyLogo,
    duration: "Jun. 2022 – Jul. 2022",
    technologies: ["Python", "SpeechRecognition", "PyAudio", "Google Web Speech API", "ASR", "Audio Preprocessing"], 
    description: "During my internship at Languify, I worked on developing a real-time Automatic Speech Recognition (ASR) system using Python. I integrated libraries such as SpeechRecognition, PyAudio, and Google Web Speech API to build a pipeline capable of live speech-to-text conversion. I applied noise reduction and audio pre-processing techniques to improve transcription accuracy across varied environments. My contributions helped extend the product's voice-interactive capabilities, aligning with the company's goal of enhancing user engagement through AI-powered feedback. This project introduced me to the challenges of real-time audio streaming and cloud-based NLP APIs, laying a strong foundation for speech interface development."
    
  }
];

export default experienceData;