export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  isCurrent: boolean;
  description: string;
  bulletPoints?: string[];
  technologies: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  tag?: string;
  technologies: string[];
  image: string;
  liveUrl?: string;
  githubUrl?: string;
  isFeatured?: boolean;
  problem?: string;
  solution?: string;
  myContribution?: string[];
  keyFeatures?: string[];
}

export interface SkillCategory {
  category: string;
  skills: {
    name: string;
    description: string;
    iconName: string;
  }[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  details?: string;
}

export interface CertificationItem {
  title: string;
  issuer: string;
}

export interface ValueProposition {
  number: string;
  title: string;
  description: string;
}

export const portfolioData = {
  personal: {
    name: "MUHAMMAD RASIN M",
    displayName: "Muhammad Rasin",
    title: "Software Developer | Data Analyst | AI Enthusiast",
    rotatingTitles: [
      "Software Developer",
      "Data Analyst",
      "AI Enthusiast"
    ],
    location: "Kozhikode, Kerala, India",
    phone: "+91 88917 00925",
    phoneTel: "+918891700925",
    email: "muhdrasinm@gmail.com",
    linkedin: "https://linkedin.com/in/muhmdrasin963",
    linkedinHandle: "in/muhmdrasin963",
    github: "https://github.com/razinrazz963-ai",
    githubUsername: "razinrazz963-ai",
    whatsappNumber: "918891700925",
    whatsappMessage: "Hi Muhammad Rasin, I came across your portfolio and would like to discuss an opportunity.",
    whatsappUrl: "https://wa.me/918891700925?text=Hi%20Muhammad%20Rasin,%20I%20came%20across%20your%20portfolio%20and%20would%20like%20to%20discuss%20an%20opportunity.",
    currentRole: "Software Developer",
    currentCompany: "Yoro Technologies",
    currentStartDate: "September 2026",
    statusBadge: "AVAILABLE FOR SOFTWARE DEVELOPMENT & DATA/AI OPPORTUNITIES",
    currentStatusText: "Currently working as Software Developer @ Yoro Technologies",
    heroSupportingText: "Building modern web applications and practical AI/data solutions with a foundation in software development, analytics and machine learning.",
    portraitImage: "/assets/rasin_portrait.jpg",
    originalImage: "/assets/rasin_original.jpg",
  },

  about: {
    heading: "Building with code. Thinking with data.",
    summary: "I am a BCA graduate with a strong foundation in Data Analytics, Artificial Intelligence, Machine Learning, and Software Development. I enjoy building practical technology solutions and modern web applications that bridge intuitive user interfaces with robust data-driven intelligence.",
    coreAreas: [
      {
        number: "01",
        title: "Software Development",
        description: "Building responsive, modern web applications with clean architecture, maintainable components, and reliable performance."
      },
      {
        number: "02",
        title: "Data Analytics",
        description: "Transforming raw data into actionable insights through structured queries, statistical modeling, and interactive dashboards."
      },
      {
        number: "03",
        title: "Artificial Intelligence",
        description: "Integrating intelligent capabilities into applications, leveraging modern NLP and LLM technologies for practical solutions."
      },
      {
        number: "04",
        title: "Machine Learning",
        description: "Applying supervised learning, pattern classification, and predictive modeling using Python and scikit-learn."
      }
    ]
  },

  experience: [
    {
      id: "yoro-technologies",
      role: "Software Developer",
      company: "Yoro Technologies",
      period: "September 2026 – Present",
      isCurrent: true,
      description: "Working as a Software Developer, building and improving web applications while developing practical experience with modern frontend technologies.",
      technologies: ["React", "JavaScript", "TypeScript", "HTML", "CSS", "Git", "GitHub"]
    },
    {
      id: "ospyn-technologies",
      role: "AI / Python Intern",
      company: "Ospyn Technologies",
      period: "Internship",
      isCurrent: false,
      description: "Gained hands-on exposure to real-world AI solutions and participated in project-based development.",
      bulletPoints: [
        "Developed a document-based AI chatbot using Python.",
        "Built document upload and intelligent question-answering functionality.",
        "Worked with AI tools and participated in project-based development.",
        "Gained hands-on exposure to real-world AI solutions."
      ],
      technologies: ["Python", "Streamlit", "FAISS", "Ollama", "RAG", "NLP"]
    }
  ] as ExperienceItem[],

  featuredProject: {
    id: "clearearth-safety",
    title: "ClearEarth Safety Consultancy LLC",
    tag: "REAL-WORLD WEB DEVELOPMENT",
    description: "Designed and developed a professional company website for ClearEarth Safety Consultancy LLC.",
    technologies: ["React", "Tailwind CSS", "JavaScript", "Vite", "Git", "GitHub", "Vercel"],
    image: "/assets/clearearth_preview.jpg",
    liveUrl: "https://clearearth-safety-website.vercel.app/",
    githubUrl: "https://github.com/razinrazz963-ai",
    problem: "ClearEarth Safety Consultancy LLC required a clean, credible, and modern digital presence to showcase their corporate environmental health, safety auditing, and regulatory compliance advisory services to enterprise clients.",
    solution: "Built a high-performance, fully responsive corporate website using React, Vite, and Tailwind CSS. Structured modular service catalog components, an accessible navigation system, and optimized asset delivery deployed on Vercel.",
    myContribution: [
      "Designed and developed the complete responsive frontend using React and Tailwind CSS.",
      "Implemented clean component architecture for service offerings and corporate information.",
      "Configured high-efficiency build pipeline via Vite and continuous deployment with Vercel.",
      "Ensured mobile responsiveness and consistent cross-browser performance."
    ],
    keyFeatures: [
      "Responsive, clean corporate interface tailored for corporate safety consulting",
      "Structured EHS service catalog and compliance advisory sections",
      "Fast load performance with lightweight assets and instant interactions",
      "Deployed and live on Vercel with continuous GitHub integration"
    ]
  } as ProjectItem,

  projects: [
    {
      id: "ai-document-chatbot",
      title: "Document-Based AI Chatbot",
      subtitle: "RAG using Ollama & FAISS",
      description: "Designed and developed a Retrieval-Augmented Generation chatbot allowing users to upload PDF and CSV files and receive context-aware answers.",
      technologies: ["Python", "Streamlit", "FAISS", "Ollama", "RAG"],
      image: "/assets/chatbot_preview.jpg",
      githubUrl: "https://github.com/razinrazz963-ai",
      problem: "Extracting precise information from voluminous PDF reports and CSV datasets manually is time-consuming and error-prone.",
      solution: "Developed an interactive RAG (Retrieval-Augmented Generation) application using Python and Streamlit. Implemented document parsing, local vector embeddings with FAISS, and context retrieval powered by Ollama models for private, accurate question-answering.",
      myContribution: [
        "Implemented document processing pipeline for PDF and CSV files.",
        "Integrated FAISS vector database for rapid semantic similarity search.",
        "Connected Ollama for local LLM inference and context synthesis.",
        "Built user-friendly Streamlit web interface for document uploads and chat history."
      ],
      keyFeatures: [
        "Support for PDF and CSV document uploads",
        "Semantic search and context retrieval with FAISS",
        "Local LLM inference via Ollama ensuring data privacy",
        "Streamlit interactive chat interface with source referencing"
      ]
    },
    {
      id: "customer-behaviour-analysis",
      title: "Customer Behaviour Classification Analysis",
      subtitle: "Machine Learning & Pattern Discovery",
      description: "Analyzed customer purchase and feedback datasets to identify satisfaction drivers, loyalty indicators and retention patterns using machine learning techniques.",
      technologies: ["Python", "Pandas", "NumPy", "Scikit-learn", "Machine Learning", "Data Analytics"],
      image: "/assets/analytics_preview.jpg",
      githubUrl: "https://github.com/razinrazz963-ai",
      problem: "Understanding customer retention risks and behavioral segment patterns is essential for minimizing churn and improving customer lifetime value.",
      solution: "Conducted end-to-end data analysis on customer behavior datasets. Performed data cleaning, exploratory data analysis (EDA), feature engineering, and trained classification models with Scikit-learn to segment users and identify key retention factors.",
      myContribution: [
        "Cleaned and preprocessed structured transaction and customer survey datasets using Pandas and NumPy.",
        "Engineered behavioral features including tenure, activity frequency, and engagement metrics.",
        "Trained classification algorithms to predict churn propensity and identify loyalty segments.",
        "Visualized key findings and satisfaction drivers to communicate actionable takeaways."
      ],
      keyFeatures: [
        "Comprehensive Exploratory Data Analysis (EDA) on customer metrics",
        "Feature importance identification for retention drivers",
        "Classification modeling using Scikit-learn",
        "Data visualization with Matplotlib and Seaborn"
      ]
    }
  ] as ProjectItem[],

  skills: [
    {
      category: "FRONTEND",
      skills: [
        { name: "React", description: "Component architecture, hooks, state management", iconName: "Atom" },
        { name: "TypeScript", description: "Static typing, interfaces, type-safe development", iconName: "FileCode2" },
        { name: "JavaScript", description: "ES6+, async/await, DOM manipulation, APIs", iconName: "Code" },
        { name: "Tailwind CSS", description: "Utility-first responsive styling and design systems", iconName: "Palette" },
        { name: "HTML5", description: "Semantic markup, modern web standards, accessibility", iconName: "Layout" },
        { name: "CSS3", description: "Flexbox, Grid, animations, responsive layouts", iconName: "Layers" },
      ]
    },
    {
      category: "PROGRAMMING",
      skills: [
        { name: "Python", description: "Scripting, data manipulation, automation, AI/ML libraries", iconName: "Terminal" },
        { name: "C", description: "Procedural programming, algorithms, memory concepts", iconName: "Cpu" },
        { name: "C++", description: "Object-oriented concepts and data structures", iconName: "Binary" },
        { name: "Java", description: "Core OOP fundamentals, class hierarchies", iconName: "Coffee" },
      ]
    },
    {
      category: "DATA & ANALYTICS",
      skills: [
        { name: "SQL / MySQL", description: "Relational queries, joins, filtering, schema design", iconName: "Database" },
        { name: "Power BI", description: "Interactive business intelligence dashboards and reporting", iconName: "BarChart3" },
        { name: "Excel", description: "Data organization, pivot tables, lookup functions", iconName: "Table" },
        { name: "Pandas & NumPy", description: "Data wrangling, matrix computations, dataframes", iconName: "Sigma" },
        { name: "Matplotlib & Seaborn", description: "Statistical visualization, distribution and trend charts", iconName: "LineChart" },
      ]
    },
    {
      category: "AI & MACHINE LEARNING",
      skills: [
        { name: "Machine Learning", description: "Supervised classification, regression, clustering", iconName: "Brain" },
        { name: "NLP", description: "Text processing, tokenization, semantic embeddings", iconName: "MessageSquare" },
        { name: "Deep Learning", description: "Neural network basics, representation learning", iconName: "Network" },
        { name: "Scikit-learn", description: "Model training, evaluation, cross-validation pipelines", iconName: "Cpu" },
        { name: "TensorFlow & Keras", description: "Deep learning model frameworks and training", iconName: "Boxes" },
        { name: "RAG / FAISS / Ollama", description: "Vector similarity search and local LLM orchestration", iconName: "Sparkles" },
      ]
    },
    {
      category: "BACKEND & TOOLS",
      skills: [
        { name: "FastAPI & Flask", description: "Lightweight Python REST API endpoints", iconName: "Server" },
        { name: "Streamlit", description: "Rapid data and AI application prototyping", iconName: "AppWindow" },
        { name: "Git & GitHub", description: "Version control, branching, repository management", iconName: "GitBranch" },
        { name: "Vercel", description: "Production web hosting and automated CI/CD deployments", iconName: "Cloud" },
      ]
    }
  ] as SkillCategory[],

  marqueeTechnologies: [
    "React",
    "TypeScript",
    "JavaScript",
    "Python",
    "SQL",
    "Power BI",
    "Machine Learning",
    "Tailwind CSS",
    "Git",
    "GitHub",
    "Streamlit",
    "Vite",
    "Pandas",
    "FAISS",
    "Ollama"
  ],

  whyWorkWithMe: [
    {
      number: "01",
      title: "Full-Stack Mindset",
      description: "Comfortable understanding the journey from frontend interfaces to backend logic and data."
    },
    {
      number: "02",
      title: "Data-Driven Thinking",
      description: "Background in analytics, machine learning and data interpretation."
    },
    {
      number: "03",
      title: "AI & Automation",
      description: "Hands-on experience building practical AI-powered applications."
    },
    {
      number: "04",
      title: "Continuous Learning",
      description: "Currently expanding my software development skills through real-world development work."
    }
  ] as ValueProposition[],

  education: [
    {
      degree: "Bachelor of Computer Applications (BCA)",
      institution: "Yenepoya University",
      period: "2023 – 2026",
      details: "Comprehensive computer science coursework covering programming, databases, web technologies, and software engineering."
    },
    {
      degree: "Diploma in Data Science",
      institution: "Edure Institution, Kochi",
      period: "2025",
      details: "Specialized training in data analysis, machine learning algorithms, statistical computing with Python, and business intelligence."
    },
    {
      degree: "Higher Secondary Education – Computer Science",
      institution: "Kerala State Board",
      period: "2021 – 2023",
      details: "Foundational coursework in computer science, mathematics, and problem solving."
    }
  ] as EducationItem[],

  certifications: [
    {
      title: "AI for Real-World Applications",
      issuer: "TCS"
    },
    {
      title: "AI and Deep Learning",
      issuer: "Coursera"
    },
    {
      title: "SQL",
      issuer: "Coursera"
    }
  ] as CertificationItem[],

  resume: {
    heading: "Want the complete picture?",
    subtext: "Explore my resume for my experience, technical skills, education and projects.",
    downloadName: "Muhammad_Rasin_Resume.pdf",
    downloadPath: "/assets/Muhammad_Rasin_Resume.pdf"
  }
};
