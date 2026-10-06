import React, { useEffect, useState } from 'react';
import { X, Download, Printer, ExternalLink, Mail, Phone, MapPin, Linkedin, Copy, Check, FileText, Sparkles } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [viewMode, setViewMode] = useState<'document' | 'interactive'>('document');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const plainTextResume = `MUHAMMAD RASIN M
SOFTWARE DEVELOPER | DATA & AI
Kozhikode, Kerala, India | +91 88917 00925 | muhamdrasin@gmail.com | linkedin.com/in/muhmdrasin963 | muhammad-rasin.vercel.app

PROFESSIONAL SUMMARY
Results-driven Software Developer and AI/Data Professional with hands-on experience in Python development, data analytics, machine learning, artificial intelligence, and web technologies. Currently working as a Software Developer at Yoro Technologies, Nadapuram, Kozhikode, with experience in developing practical software solutions and applying programming and analytical skills to real-world projects. Strong foundation in Python, SQL, Power BI, Excel, Machine Learning, Data Analytics, HTML, CSS, and JavaScript, React. Proven ability to transform data into meaningful insights, develop functional applications, solve technical problems, and contribute effectively to technology-driven projects.

CORE SKILLS
Software Development | Python | SQL | Data Analytics | Machine Learning | Power BI | Microsoft Excel | Tableau | Web Development | HTML | CSS | JavaScript | React.js | Node.js | Data Visualization | Database Management | Problem Solving | Technical Analysis.

PROFESSIONAL EXPERIENCE

SOFTWARE DEVELOPER                                     September 2026 – Present
Yoro Technologies | Nadapuram, Kozhikode, Kerala
• Develop and support software solutions using programming and technology skills.
• Contribute to software development activities and project-based technical tasks.
• Work with team members to understand requirements and contribute to effective technical solutions.
• Participate in developing and improving technology-driven applications and workflows.

AI / PYTHON INTERN                                     October 2025 - January 2026
Ospyn Technologies
• Developed a document-based AI chatbot using Python.
• Built document upload and intelligent question-answering functionality.
• Worked with AI tools and participated in project-based development.
• Gained practical exposure to real-world AI and Python solutions.

KEY PROJECTS

DOCUMENT-BASED AI CHATBOT – RAG USING OLLAMA AND FAISS
Developed a Retrieval-Augmented Generation (RAG) chatbot enabling users to upload PDF and CSV documents and receive context-aware answers.
Implemented document processing and intelligent question-answering functionality using Streamlit, FAISS, Ollama, and Python.

CUSTOMER BEHAVIOUR CLASSIFICATION ANALYSIS
Analyzed customer purchase and feedback datasets to identify satisfaction drivers, loyalty indicators, and retention patterns.
Applied machine learning techniques for customer behaviour analysis and data-driven insights.

EDUCATION

BACHELOR OF COMPUTER APPLICATIONS (BCA)                2023 – 2026
Yenepoya University

DIPLOMA IN DATA SCIENCE                                2025
Edure Institution, Kochi

HIGHER SECONDARY EDUCATION – COMPUTER SCIENCE          2021 – 2023

CERTIFICATIONS
• People and Soft Skills for Professional and Personal Success
• Python NLTK for Beginners: Customer Satisfaction Analysis
• SQL Joins
• AI & Deep Learning Concepts and Applications
• Artificial Intelligence for Real World Application

LANGUAGES
• English | Malayalam`;

  const handleCopy = () => {
    navigator.clipboard.writeText(plainTextResume);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 overflow-y-auto print:p-0 print:static print:bg-white"
    >
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity duration-300 print:hidden"
        aria-hidden="true"
      />

      {/* Modal Container */}
      <div className="relative w-full max-w-4xl max-h-[94vh] overflow-y-auto rounded-2xl glass-card border border-white/10 bg-[#0B0F17] shadow-2xl p-4 sm:p-6 md:p-8 z-10 custom-scrollbar print:max-h-none print:overflow-visible print:border-none print:shadow-none print:p-0 print:bg-white print:text-black">
        {/* Top Control Bar (Hidden during Print) */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 pb-5 mb-6 border-b border-white/10 print:hidden">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-accent-blue animate-pulse" />
            <div>
              <h2 id="resume-modal-title" className="text-sm sm:text-base font-semibold text-white tracking-tight">
                Curriculum Vitae — Muhammad Rasin M
              </h2>
              <p className="text-[11px] text-content-muted">Software Developer | Data & AI</p>
            </div>
          </div>

          {/* View switcher & action buttons */}
          <div className="flex flex-wrap items-center gap-2">
            {/* Mode switch */}
            <div className="flex items-center bg-white/5 p-1 rounded-xl border border-white/10 text-xs">
              <button
                onClick={() => setViewMode('document')}
                className={`flex items-center gap-1.5 px-3 py-1 rounded-lg font-medium transition-all ${
                  viewMode === 'document'
                    ? 'bg-accent-blue text-white shadow-sm'
                    : 'text-content-muted hover:text-white'
                }`}
                title="View original ATS formatted document"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>Document View</span>
              </button>
              <button
                onClick={() => setViewMode('interactive')}
                className={`flex items-center gap-1.5 px-3 py-1 rounded-lg font-medium transition-all ${
                  viewMode === 'interactive'
                    ? 'bg-accent-blue text-white shadow-sm'
                    : 'text-content-muted hover:text-white'
                }`}
                title="View modern dark styled cards"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Modern View</span>
              </button>
            </div>

            {/* Action buttons */}
            <button
              onClick={handleCopy}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-white bg-white/5 border border-white/10 hover:bg-white/10 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue"
              title="Copy plain text resume"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied!' : 'Copy'}</span>
            </button>

            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold text-white bg-accent-blue hover:bg-accent-blue/90 shadow-glow-blue transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue"
              title="Print or Save as PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>

            <a
              href={`data:text/plain;charset=utf-8,${encodeURIComponent(plainTextResume)}`}
              download="Muhammad_Rasin_Resume.txt"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-white bg-white/5 border border-white/10 hover:bg-white/10 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue"
              title="Download text resume"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Text</span>
            </a>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-white/5 border border-white/10 text-content-muted hover:text-white hover:bg-white/10 transition-colors ml-1"
              aria-label="Close Resume Viewer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* =========================================================================
            VIEW 1: ATS DOCUMENT VIEW (1:1 Replica matching original PDF layout)
            Also always shown during print!
           ========================================================================= */}
        <div
          className={`${
            viewMode === 'document' ? 'block' : 'hidden'
          } print:block bg-white text-[#111827] max-w-3xl mx-auto p-8 sm:p-12 md:p-14 shadow-2xl rounded-xl font-sans border border-gray-200 print:border-none print:shadow-none print:p-0 print:max-w-none print:rounded-none`}
        >
          {/* Header */}
          <div className="text-center pb-2">
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-wide uppercase text-black font-display">
              {portfolioData.personal.name}
            </h1>
            <div className="text-xs sm:text-sm font-bold tracking-wider uppercase text-gray-900 mt-1">
              SOFTWARE DEVELOPER | DATA & AI
            </div>
            <div className="text-[11px] sm:text-[12px] text-gray-700 mt-2 flex flex-wrap items-center justify-center gap-x-2 gap-y-1 font-medium">
              <span>{portfolioData.personal.location}</span>
              <span>|</span>
              <a href={`tel:${portfolioData.personal.phoneTel}`} className="hover:text-blue-700">
                {portfolioData.personal.phone}
              </a>
              <span>|</span>
              <a href={`mailto:${portfolioData.personal.email}`} className="text-blue-700 hover:underline">
                {portfolioData.personal.email}
              </a>
              <span>|</span>
              <a
                href={portfolioData.personal.linkedin}
                target="_blank"
                rel="noreferrer"
                className="text-blue-700 hover:underline inline-flex items-center gap-0.5"
              >
                <span>linkedin.</span>
              </a>
              <span>|</span>
              <a
                href={portfolioData.personal.portfolioUrl}
                target="_blank"
                rel="noreferrer"
                className="text-blue-700 hover:underline inline-flex items-center gap-0.5"
              >
                <span>Portfolio - muhammad-rasin</span>
              </a>
            </div>
          </div>

          {/* Section: PROFESSIONAL SUMMARY */}
          <div className="mt-5">
            <h2 className="text-xs sm:text-[13px] font-extrabold uppercase tracking-wider text-black border-b border-black pb-0.5 mb-2">
              PROFESSIONAL SUMMARY
            </h2>
            <p className="text-[11.5px] sm:text-[12.5px] text-gray-900 leading-relaxed text-justify">
              {portfolioData.about.fullProfessionalSummary}
            </p>
          </div>

          {/* Section: CORE SKILLS */}
          <div className="mt-5">
            <h2 className="text-xs sm:text-[13px] font-extrabold uppercase tracking-wider text-black border-b border-black pb-0.5 mb-2">
              CORE SKILLS
            </h2>
            <p className="text-[11.5px] sm:text-[12.5px] text-gray-900 leading-relaxed">
              {portfolioData.coreSkills.join(' | ')}.
            </p>
          </div>

          {/* Section: PROFESSIONAL EXPERIENCE */}
          <div className="mt-5">
            <h2 className="text-xs sm:text-[13px] font-extrabold uppercase tracking-wider text-black border-b border-black pb-0.5 mb-2.5">
              PROFESSIONAL EXPERIENCE
            </h2>

            {/* Role 1: Software Developer */}
            <div className="mb-4">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between text-[12.5px] sm:text-[13px]">
                <span className="font-extrabold text-black uppercase">SOFTWARE DEVELOPER</span>
                <span className="font-bold text-gray-900">September 2026 – Present</span>
              </div>
              <div className="text-[11.5px] sm:text-[12px] font-semibold text-gray-800 mb-1.5">
                Yoro Technologies | Nadapuram, Kozhikode, Kerala
              </div>
              <ul className="list-disc list-outside ml-4 space-y-1 text-[11px] sm:text-[12px] text-gray-900 leading-normal">
                {portfolioData.experience[0].bulletPoints?.map((bp, i) => (
                  <li key={i}>{bp}</li>
                ))}
              </ul>
            </div>

            {/* Role 2: AI / Python Intern */}
            <div>
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between text-[12.5px] sm:text-[13px]">
                <span className="font-extrabold text-black uppercase">AI / PYTHON INTERN</span>
                <span className="font-bold text-gray-900">October 2025 - january 2026</span>
              </div>
              <div className="text-[11.5px] sm:text-[12px] font-semibold text-gray-800 mb-1.5">
                Ospyn Technologies
              </div>
              <ul className="list-disc list-outside ml-4 space-y-1 text-[11px] sm:text-[12px] text-gray-900 leading-normal">
                {portfolioData.experience[1].bulletPoints?.map((bp, i) => (
                  <li key={i}>{bp}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Section: KEY PROJECTS */}
          <div className="mt-5">
            <h2 className="text-xs sm:text-[13px] font-extrabold uppercase tracking-wider text-black border-b border-black pb-0.5 mb-2.5">
              KEY PROJECTS
            </h2>

            {/* Project 1 */}
            <div className="mb-3">
              <div className="text-[12px] sm:text-[12.5px] font-extrabold text-black uppercase">
                DOCUMENT-BASED AI CHATBOT – RAG USING OLLAMA AND FAISS
              </div>
              <p className="text-[11px] sm:text-[12px] text-gray-900 leading-normal mt-0.5">
                Developed a Retrieval-Augmented Generation (RAG) chatbot enabling users to upload PDF and CSV documents and receive context-aware answers.
              </p>
              <p className="text-[11px] sm:text-[12px] text-gray-900 leading-normal mt-0.5">
                Implemented document processing and intelligent question-answering functionality using Streamlit, FAISS, Ollama, and Python.
              </p>
            </div>

            {/* Project 2 */}
            <div>
              <div className="text-[12px] sm:text-[12.5px] font-extrabold text-black uppercase">
                CUSTOMER BEHAVIOUR CLASSIFICATION ANALYSIS
              </div>
              <p className="text-[11px] sm:text-[12px] text-gray-900 leading-normal mt-0.5">
                Analyzed customer purchase and feedback datasets to identify satisfaction drivers, loyalty indicators, and retention patterns.
              </p>
              <p className="text-[11px] sm:text-[12px] text-gray-900 leading-normal mt-0.5">
                Applied machine learning techniques for customer behaviour analysis and data-driven insights.
              </p>
            </div>
          </div>

          {/* Section: EDUCATION */}
          <div className="mt-5">
            <h2 className="text-xs sm:text-[13px] font-extrabold uppercase tracking-wider text-black border-b border-black pb-0.5 mb-2">
              EDUCATION
            </h2>
            <div className="space-y-1.5">
              <div>
                <div className="flex justify-between items-baseline text-[11.5px] sm:text-[12px]">
                  <span className="font-extrabold text-black uppercase">BACHELOR OF COMPUTER APPLICATIONS (BCA)</span>
                  <span className="font-bold text-gray-900">2023 – 2026</span>
                </div>
                <div className="text-[11px] sm:text-[11.5px] text-gray-700">Yenepoya University</div>
              </div>

              <div>
                <div className="flex justify-between items-baseline text-[11.5px] sm:text-[12px]">
                  <span className="font-extrabold text-black uppercase">DIPLOMA IN DATA SCIENCE</span>
                  <span className="font-bold text-gray-900">2025</span>
                </div>
                <div className="text-[11px] sm:text-[11.5px] text-gray-700">Edure Institution, Kochi</div>
              </div>

              <div>
                <div className="flex justify-between items-baseline text-[11.5px] sm:text-[12px]">
                  <span className="font-extrabold text-black uppercase">HIGHER SECONDARY EDUCATION – COMPUTER SCIENCE</span>
                  <span className="font-bold text-gray-900">2021 – 2023</span>
                </div>
              </div>
            </div>
          </div>

          {/* Section: CERTIFICATIONS */}
          <div className="mt-5">
            <h2 className="text-xs sm:text-[13px] font-extrabold uppercase tracking-wider text-black border-b border-black pb-0.5 mb-2">
              CERTIFICATIONS
            </h2>
            <ul className="list-disc list-outside ml-4 space-y-1 text-[11px] sm:text-[12px] text-gray-900 leading-normal">
              {portfolioData.certifications.map((cert, idx) => (
                <li key={idx}>{cert.title}</li>
              ))}
            </ul>
          </div>

          {/* Section: LANGUAGES */}
          <div className="mt-5">
            <h2 className="text-xs sm:text-[13px] font-extrabold uppercase tracking-wider text-black border-b border-black pb-0.5 mb-1.5">
              LANGUAGES
            </h2>
            <ul className="list-disc list-outside ml-4 text-[11px] sm:text-[12px] text-gray-900 leading-normal">
              <li>{portfolioData.languages.join(' | ')}</li>
            </ul>
          </div>
        </div>

        {/* =========================================================================
            VIEW 2: MODERN DARK EXECUTIVE VIEW
           ========================================================================= */}
        <div className={`${viewMode === 'interactive' ? 'block' : 'hidden'} print:hidden space-y-8 font-sans`}>
          {/* Header */}
          <div className="border-b border-white/10 pb-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h1 className="text-2xl sm:text-3xl font-display font-extrabold text-white tracking-tight">
                  {portfolioData.personal.name}
                </h1>
                <p className="text-sm sm:text-base text-accent-blue font-semibold mt-1">
                  SOFTWARE DEVELOPER | DATA & AI
                </p>
              </div>

              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold bg-accent-blue/10 text-accent-blue-light border border-accent-blue/30 self-start sm:self-center">
                <span className="w-2 h-2 rounded-full bg-accent-blue animate-pulse" />
                <span>Yoro Technologies</span>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 mt-4 text-xs text-content-muted">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-accent-blue" />
                {portfolioData.personal.location}
              </span>
              <a href={`mailto:${portfolioData.personal.email}`} className="flex items-center gap-1.5 hover:text-white transition-colors">
                <Mail className="w-3.5 h-3.5 text-accent-blue" />
                {portfolioData.personal.email}
              </a>
              <a href={`tel:${portfolioData.personal.phoneTel}`} className="flex items-center gap-1.5 hover:text-white transition-colors">
                <Phone className="w-3.5 h-3.5 text-accent-blue" />
                {portfolioData.personal.phone}
              </a>
              <a href={portfolioData.personal.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 hover:text-white transition-colors">
                <Linkedin className="w-3.5 h-3.5 text-accent-blue" />
                <span>linkedin.com/in/muhmdrasin963</span>
              </a>
            </div>
          </div>

          {/* Professional Summary */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-widest text-accent-blue mb-2.5">
              Professional Summary
            </h2>
            <div className="p-4 sm:p-5 rounded-xl bg-white/[0.02] border border-white/5 text-xs sm:text-sm text-content-heading leading-relaxed">
              {portfolioData.about.fullProfessionalSummary}
            </div>
          </div>

          {/* Core Skills */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-widest text-accent-blue mb-3">
              Core Skills
            </h2>
            <div className="flex flex-wrap gap-2">
              {portfolioData.coreSkills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 rounded-lg text-xs font-medium bg-white/[0.04] border border-white/10 text-content-heading hover:border-accent-blue/40 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Professional Experience */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-widest text-accent-blue mb-4">
              Professional Experience
            </h2>
            <div className="space-y-5">
              {portfolioData.experience.map((exp) => (
                <div key={exp.id} className="p-5 rounded-xl bg-white/[0.02] border border-white/5 space-y-2">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <h3 className="text-sm font-bold text-white">
                      {exp.role} <span className="text-content-muted font-normal">at</span> {exp.company}
                    </h3>
                    <span className="text-xs font-medium text-accent-blue-light">{exp.period}</span>
                  </div>
                  {exp.location && (
                    <p className="text-xs text-content-muted">{exp.location}</p>
                  )}
                  {exp.bulletPoints && (
                    <ul className="list-disc list-inside space-y-1 pt-1.5 text-xs text-content-body">
                      {exp.bulletPoints.map((bp, i) => (
                        <li key={i}>{bp}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Key Projects */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-widest text-accent-blue mb-4">
              Key Projects
            </h2>
            <div className="space-y-4">
              {portfolioData.resumeProjects.map((proj, idx) => (
                <div key={idx} className="p-5 rounded-xl bg-white/[0.02] border border-white/5 space-y-2">
                  <h3 className="text-sm font-bold text-white">{proj.title}</h3>
                  <div className="space-y-1">
                    {proj.bullets.map((bullet, i) => (
                      <p key={i} className="text-xs text-content-body leading-relaxed">
                        • {bullet}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education, Certifications & Languages Grid */}
          <div className="grid sm:grid-cols-2 gap-6 pt-2">
            <div>
              <h2 className="text-xs font-bold uppercase tracking-widest text-accent-blue mb-3">
                Education
              </h2>
              <div className="space-y-3">
                {portfolioData.education.map((edu, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 space-y-1">
                    <div className="flex justify-between items-baseline text-xs">
                      <span className="font-bold text-white">{edu.degree}</span>
                      <span className="text-accent-blue-light">{edu.period}</span>
                    </div>
                    {edu.institution && (
                      <p className="text-xs text-content-muted">{edu.institution}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h2 className="text-xs font-bold uppercase tracking-widest text-accent-blue mb-3">
                  Certifications
                </h2>
                <div className="space-y-2">
                  {portfolioData.certifications.map((cert, idx) => (
                    <div key={idx} className="p-3 rounded-lg bg-white/[0.02] border border-white/5 text-xs font-medium text-white">
                      • {cert.title}
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-xs font-bold uppercase tracking-widest text-accent-blue mb-2">
                  Languages
                </h2>
                <div className="flex flex-wrap gap-2">
                  {portfolioData.languages.map((lang) => (
                    <span key={lang} className="px-3 py-1 rounded-full text-xs font-semibold bg-white/5 border border-white/10 text-white">
                      {lang}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
