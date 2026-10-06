export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location?: string;
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
    title: "Software Developer | Data & AI",
    rotatingTitles: [
      "Software Developer",
      "Data & AI Specialist",
      "Python & ML Developer"
    ],
    location: "Kozhikode, Kerala, India",
    phone: "+91 88917 00925",
    phoneTel: "+918891700925",
    email: "muhamdrasin@gmail.com",
    linkedin: "https://linkedin.com/in/muhmdrasin963",
    linkedinHandle: "in/muhmdrasin963",
    github: "https://github.com/razinrazz963-ai",
    githubUsername: "razinrazz963-ai",
    portfolioUrl: "https://muhammad-rasin.vercel.app",
    portfolioHandle: "muhammad-rasin",
    whatsappNumber: "918891700925",
    whatsappMessage: "Hi Muhammad Rasin, I came across your portfolio and would like to discuss an opportunity.",
    whatsappUrl: "https://wa.me/918891700925?text=Hi%20Muhammad%20Rasin,%20I%20came%20across%20your%20portfolio%20and%20would%20like%20to%20discuss%20an%20opportunity.",
    currentRole: "Software Developer",
    currentCompany: "Yoro Technologies",
    currentCompanyLocation: "Nadapuram, Kozhikode, Kerala",
    currentStartDate: "September 2026",
    statusBadge: "SOFTWARE DEVELOPER | DATA & AI",
    currentStatusText: "Software Developer @ Yoro Technologies, Nadapuram, Kozhikode",
    heroSupportingText: "Results-driven Software Developer and AI/Data Professional with hands-on experience in Python development, data analytics, machine learning, artificial intelligence, and web technologies.",
    portraitImage: "/assets/rasin_portrait.jpg",
    originalImage: "/assets/rasin_original.jpg",
  },

  about: {
    heading: "Building with code. Thinking with data.",
    summary: "Results-driven Software Developer and AI/Data Professional with hands-on experience in Python development, data analytics, machine learning, artificial intelligence, and web technologies. Currently working as a Software Developer at Yoro Technologies, Nadapuram, Kozhikode, with experience in developing practical software solutions and applying programming and analytical skills to real-world projects. Strong foundation in Python, SQL, Power BI, Excel, Machine Learning, Data Analytics, HTML, CSS, and JavaScript, React.",
    fullProfessionalSummary: "Results-driven Software Developer and AI/Data Professional with hands-on experience in Python development, data analytics, machine learning, artificial intelligence, and web technologies. Currently working as a Software Developer at Yoro Technologies, Nadapuram, Kozhikode, with experience in developing practical software solutions and applying programming and analytical skills to real-world projects. Strong foundation in Python, SQL, Power BI, Excel, Machine Learning, Data Analytics, HTML, CSS, and JavaScript, React. Proven ability to transform data into meaningful insights, develop functional applications, solve technical problems, and contribute effectively to technology-driven projects.",
    coreAreas: [
      {
        number: "01",
        title: "Software Development",
        description: "Building responsive, modern web applications with clean architecture, maintainable components, and reliable performance."
      },
      {
        number: "02",
        title: "Data Analytics & BI",
        description: "Transforming raw data into meaningful insights through SQL queries, Power BI dashboards, Excel, and statistical modeling."
      },
      {
        number: "03",
        title: "Artificial Intelligence",
        description: "Integrating intelligent capabilities into applications, leveraging modern RAG pipelines, NLP, and local LLM technologies."
      },
      {
        number: "04",
        title: "Machine Learning",
        description: "Applying supervised classification, customer behavior analytics, and predictive modeling using Python and scikit-learn."
      }
    ]
  },

  coreSkills: [
    "Software Development",
    "Python",
    "SQL",
    "Data Analytics",
    "Machine Learning",
    "Power BI",
    "Microsoft Excel",
    "Tableau",
    "Web Development",
    "HTML",
    "CSS",
    "JavaScript",
    "React.js",
    "Node.js",
    "Data Visualization",
    "Database Management",
    "Problem Solving",
    "Technical Analysis"
  ],

  experience: [
    {
      id: "yoro-technologies",
      role: "Software Developer",
      company: "Yoro Technologies",
      location: "Nadapuram, Kozhikode, Kerala",
      period: "September 2026 – Present",
      isCurrent: true,
      description: "Develop and support software solutions using programming and technology skills at Yoro Technologies.",
      bulletPoints: [
        "Develop and support software solutions using programming and technology skills.",
        "Contribute to software development activities and project-based technical tasks.",
        "Work with team members to understand requirements and contribute to effective technical solutions.",
        "Participate in developing and improving technology-driven applications and workflows."
      ],
      technologies: ["Software Development", "Python", "JavaScript", "React.js", "Node.js", "HTML", "CSS", "SQL", "Database Management"]
    },
    {
      id: "ospyn-technologies",
      role: "AI / Python Intern",
      company: "Ospyn Technologies",
      location: "Kerala",
      period: "October 2025 - January 2026",
      isCurrent: false,
      description: "Developed a document-based AI chatbot using Python with document upload and intelligent question-answering functionality.",
      bulletPoints: [
        "Developed a document-based AI chatbot using Python.",
        "Built document upload and intelligent question-answering functionality.",
        "Worked with AI tools and participated in project-based development.",
        "Gained practical exposure to real-world AI and Python solutions."
      ],
      technologies: ["Python", "Streamlit", "FAISS", "Ollama", "RAG"]
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
      subtitle: "RAG using Ollama and FAISS",
      description: "Developed a Retrieval-Augmented Generation (RAG) chatbot enabling users to upload PDF and CSV documents and receive context-aware answers. Implemented document processing and intelligent question-answering functionality using Streamlit, FAISS, Ollama, and Python.",
      technologies: ["Python", "Streamlit", "FAISS", "Ollama", "RAG"],
      image: "/assets/chatbot_preview.jpg",
      githubUrl: "https://github.com/razinrazz963-ai",
      problem: "Extracting precise information from voluminous PDF reports and CSV datasets manually is time-consuming and error-prone.",
      solution: "Developed an interactive RAG (Retrieval-Augmented Generation) application using Python and Streamlit. Implemented document parsing, local vector embeddings with FAISS, and context retrieval powered by Ollama models for private, accurate question-answering.",
      myContribution: [
        "Developed a Retrieval-Augmented Generation (RAG) chatbot enabling users to upload PDF and CSV documents and receive context-aware answers.",
        "Implemented document processing and intelligent question-answering functionality using Streamlit, FAISS, Ollama, and Python.",
        "Integrated FAISS vector database for rapid semantic similarity search.",
        "Connected Ollama for local LLM inference and context synthesis."
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
      description: "Analyzed customer purchase and feedback datasets to identify satisfaction drivers, loyalty indicators, and retention patterns. Applied machine learning techniques for customer behaviour analysis and data-driven insights.",
      technologies: ["Python", "Pandas", "NumPy", "Scikit-learn", "Machine Learning", "Data Analytics"],
      image: "/assets/analytics_preview.jpg",
      githubUrl: "https://github.com/razinrazz963-ai",
      problem: "Understanding customer retention risks and behavioral segment patterns is essential for minimizing churn and improving customer lifetime value.",
      solution: "Conducted end-to-end data analysis on customer behavior datasets. Performed data cleaning, exploratory data analysis (EDA), feature engineering, and trained classification models with Scikit-learn to segment users and identify key retention factors.",
      myContribution: [
        "Analyzed customer purchase and feedback datasets to identify satisfaction drivers, loyalty indicators, and retention patterns.",
        "Applied machine learning techniques for customer behaviour analysis and data-driven insights.",
        "Cleaned and preprocessed structured transaction and customer survey datasets using Pandas and NumPy.",
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

  resumeProjects: [
    {
      title: "DOCUMENT-BASED AI CHATBOT – RAG USING OLLAMA AND FAISS",
      summary: "Developed a Retrieval-Augmented Generation (RAG) chatbot enabling users to upload PDF and CSV documents and receive context-aware answers.",
      bullets: [
        "Developed a Retrieval-Augmented Generation (RAG) chatbot enabling users to upload PDF and CSV documents and receive context-aware answers.",
        "Implemented document processing and intelligent question-answering functionality using Streamlit, FAISS, Ollama, and Python."
      ],
      technologies: ["Streamlit", "FAISS", "Ollama", "Python"]
    },
    {
      title: "CUSTOMER BEHAVIOUR CLASSIFICATION ANALYSIS",
      summary: "Analyzed customer purchase and feedback datasets to identify satisfaction drivers, loyalty indicators, and retention patterns.",
      bullets: [
        "Analyzed customer purchase and feedback datasets to identify satisfaction drivers, loyalty indicators, and retention patterns.",
        "Applied machine learning techniques for customer behaviour analysis and data-driven insights."
      ],
      technologies: ["Python", "Machine Learning", "Scikit-learn", "Data Analytics"]
    }
  ],

  skills: [
    {
      category: "FRONTEND & WEB",
      skills: [
        { name: "React.js", description: "Component architecture, hooks, state management", iconName: "Atom" },
        { name: "JavaScript", description: "ES6+, async/await, DOM manipulation, APIs", iconName: "Code" },
        { name: "HTML", description: "Semantic markup, modern web standards, accessibility", iconName: "Layout" },
        { name: "CSS", description: "Flexbox, Grid, animations, responsive layouts", iconName: "Layers" },
        { name: "Web Development", description: "Full-lifecycle responsive web applications", iconName: "AppWindow" },
        { name: "Tailwind CSS", description: "Utility-first responsive styling and design systems", iconName: "Palette" },
      ]
    },
    {
      category: "PROGRAMMING & BACKEND",
      skills: [
        { name: "Python", description: "Scripting, data manipulation, automation, AI/ML libraries", iconName: "Terminal" },
        { name: "Node.js", description: "Server runtime, JavaScript APIs, asynchronous I/O", iconName: "Server" },
        { name: "Software Development", description: "Design patterns, clean code, modular structure", iconName: "Cpu" },
        { name: "Database Management", description: "Relational schemas, queries, optimization", iconName: "Database" },
      ]
    },
    {
      category: "DATA ANALYTICS & BI",
      skills: [
        { name: "SQL", description: "Relational queries, complex joins, data extraction", iconName: "Database" },
        { name: "Power BI", description: "Interactive business intelligence dashboards and reporting", iconName: "BarChart3" },
        { name: "Microsoft Excel", description: "Data organization, pivot tables, lookup formulas", iconName: "Table" },
        { name: "Tableau", description: "Visual analytics and executive dashboard creation", iconName: "LineChart" },
        { name: "Data Analytics", description: "Exploratory analysis, trends, correlation discovery", iconName: "Sigma" },
        { name: "Data Visualization", description: "Communicating complex metrics through charts", iconName: "LineChart" },
      ]
    },
    {
      category: "AI & MACHINE LEARNING",
      skills: [
        { name: "Machine Learning", description: "Supervised classification, regression, clustering", iconName: "Brain" },
        { name: "Ollama & FAISS", description: "Vector similarity search and local LLM orchestration", iconName: "Sparkles" },
        { name: "RAG & NLP", description: "Retrieval-augmented generation and text parsing", iconName: "MessageSquare" },
        { name: "Technical Analysis", description: "Analytical evaluation and problem breakdown", iconName: "Boxes" },
        { name: "Problem Solving", description: "Algorithmic thinking and systematic debugging", iconName: "Cpu" },
      ]
    }
  ] as SkillCategory[],

  marqueeTechnologies: [
    "Python",
    "SQL",
    "Machine Learning",
    "Data Analytics",
    "Power BI",
    "React.js",
    "JavaScript",
    "Node.js",
    "Microsoft Excel",
    "Tableau",
    "FAISS",
    "Ollama",
    "HTML",
    "CSS",
    "Streamlit",
    "Git"
  ],

  whyWorkWithMe: [
    {
      number: "01",
      title: "Software & AI Synergy",
      description: "Seamlessly connect intuitive web interfaces with intelligent Python and ML backend capabilities."
    },
    {
      number: "02",
      title: "Data-Driven Problem Solving",
      description: "Strong analytical acumen using SQL, Power BI, Excel, and machine learning models to solve business challenges."
    },
    {
      number: "03",
      title: "Practical AI Implementation",
      description: "Hands-on experience building functional RAG systems, local LLM integrations, and document intelligence workflows."
    },
    {
      number: "04",
      title: "Commitment to Growth",
      description: "Currently working as a Software Developer at Yoro Technologies, continuously honing software engineering best practices."
    }
  ] as ValueProposition[],

  education: [
    {
      degree: "BACHELOR OF COMPUTER APPLICATIONS (BCA)",
      institution: "Yenepoya University",
      period: "2023 – 2026",
      details: "Comprehensive coursework in computer applications, programming, databases, web technologies, and software engineering."
    },
    {
      degree: "DIPLOMA IN DATA SCIENCE",
      institution: "Edure Institution, Kochi",
      period: "2025",
      details: "Specialized training in data analysis, machine learning algorithms, statistical computing with Python, and business intelligence."
    },
    {
      degree: "HIGHER SECONDARY EDUCATION – COMPUTER SCIENCE",
      institution: "Kerala State Board",
      period: "2021 – 2023",
      details: "Foundational studies in computer science, programming fundamentals, and mathematics."
    }
  ] as EducationItem[],

  certifications: [
    {
      title: "People and Soft Skills for Professional and Personal Success",
      issuer: "IBM / Verified Credential"
    },
    {
      title: "Python NLTK for Beginners: Customer Satisfaction Analysis",
      issuer: "Coursera Project Network"
    },
    {
      title: "SQL Joins",
      issuer: "Coursera / Verified Credential"
    },
    {
      title: "AI & Deep Learning Concepts and Applications",
      issuer: "Verified Credential"
    },
    {
      title: "Artificial Intelligence for Real World Application",
      issuer: "TCS / Verified Credential"
    }
  ] as CertificationItem[],

  languages: [
    "English",
    "Malayalam"
  ],

  resume: {
    heading: "Want the complete picture?",
    subtext: "Explore my resume for my professional experience, technical skills, key projects, and credentials.",
    downloadName: "Muhammad_Rasin_M_Resume.txt",
    downloadPath: "/assets/Muhammad_Rasin_Resume.pdf"
  }
};

