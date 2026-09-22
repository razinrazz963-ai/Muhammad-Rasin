import React, { useEffect } from 'react';
import { X, Download, Printer, ExternalLink, Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
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

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto print:p-0 print:static"
    >
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity duration-300 print:hidden"
        aria-hidden="true"
      />

      {/* Modal Container */}
      <div className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto rounded-2xl glass-card border border-white/10 bg-[#0D1117] shadow-2xl p-6 sm:p-10 z-10 text-content-body custom-scrollbar print:max-h-none print:overflow-visible print:border-none print:shadow-none print:p-8 print:bg-white print:text-black">
        {/* Top Control Bar */}
        <div className="flex items-center justify-between pb-6 mb-8 border-b border-white/10 print:hidden">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-accent-blue"></span>
            <h2 id="resume-modal-title" className="text-sm sm:text-base font-semibold text-white tracking-tight">
              Executive Curriculum Vitae — Muhammad Rasin M
            </h2>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-medium text-white bg-white/5 border border-white/10 hover:bg-white/10 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue"
              title="Print or Save as PDF"
            >
              <Printer className="w-3.5 h-3.5 text-accent-blue" />
              <span>Print / PDF</span>
            </button>
            <a
              href={`data:text/plain;charset=utf-8,${encodeURIComponent(
                `MUHAMMAD RASIN M\nSoftware Developer | Data Analyst | AI Enthusiast\nLocation: Kozhikode, Kerala, India\nPhone: +91 88917 00925\nEmail: muhdrasinm@gmail.com\nLinkedIn: https://linkedin.com/in/muhmdrasin963\nGitHub: https://github.com/razinrazz963-ai\n\nCURRENT ROLE:\nSoftware Developer @ Yoro Technologies (Sept 2026 - Present)\n\nPREVIOUS EXPERIENCE:\nAI / Python Intern @ Ospyn Technologies\n\nEDUCATION:\n- Bachelor of Computer Applications (BCA), Yenepoya University (2023 - 2026)\n- Diploma in Data Science, Edure Institution (2025)\n- Higher Secondary Education - Computer Science (2021 - 2023)\n\nCERTIFICATIONS:\n- AI for Real-World Applications (TCS)\n- AI and Deep Learning (Coursera)\n- SQL (Coursera)\n\nPROJECTS:\n- ClearEarth Safety Consultancy LLC Website\n- Document-Based AI Chatbot (RAG, FAISS, Ollama)\n- Customer Behaviour Classification Analysis`
              )}`}
              download="Muhammad_Rasin_M_Resume.txt"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-medium text-white bg-accent-blue hover:bg-accent-blue/90 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue"
              title="Download Resume Summary"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download</span>
            </a>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-white/5 border border-white/10 text-content-muted hover:text-white hover:bg-white/10 transition-colors ml-2"
              aria-label="Close Resume Viewer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Content */}
        <div className="space-y-8 font-sans print:space-y-6">
          {/* Header */}
          <div className="border-b border-white/10 pb-6 print:border-gray-300">
            <h1 className="text-3xl font-display font-extrabold text-white tracking-tight print:text-black">
              {portfolioData.personal.name}
            </h1>
            <p className="text-base text-accent-blue font-semibold mt-1 print:text-blue-700">
              {portfolioData.personal.title}
            </p>

            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 mt-4 text-xs text-content-muted print:text-gray-600">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-accent-blue" />
                {portfolioData.personal.location}
              </span>
              <a href={`mailto:${portfolioData.personal.email}`} className="flex items-center gap-1.5 hover:text-white">
                <Mail className="w-3.5 h-3.5 text-accent-blue" />
                {portfolioData.personal.email}
              </a>
              <a href={`tel:${portfolioData.personal.phoneTel}`} className="flex items-center gap-1.5 hover:text-white">
                <Phone className="w-3.5 h-3.5 text-accent-blue" />
                {portfolioData.personal.phone}
              </a>
              <a href={portfolioData.personal.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 hover:text-white">
                <Linkedin className="w-3.5 h-3.5 text-accent-blue" />
                {portfolioData.personal.linkedinHandle}
              </a>
              <a href={portfolioData.personal.github} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 hover:text-white">
                <Github className="w-3.5 h-3.5 text-accent-blue" />
                {portfolioData.personal.githubUsername}
              </a>
            </div>
          </div>

          {/* Professional Summary */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-widest text-accent-blue mb-2 print:text-blue-700">
              Professional Summary
            </h2>
            <p className="text-xs sm:text-sm text-content-heading leading-relaxed print:text-gray-800">
              {portfolioData.about.summary} Currently working as a Software Developer at Yoro Technologies, building and refining modern web applications with React, TypeScript, and contemporary frontend tooling while applying a strong foundation in Data Analytics and Artificial Intelligence.
            </p>
          </div>

          {/* Experience */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-widest text-accent-blue mb-4 print:text-blue-700">
              Experience
            </h2>
            <div className="space-y-6">
              {portfolioData.experience.map((exp) => (
                <div key={exp.id} className="space-y-1.5">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                    <h3 className="text-sm font-bold text-white print:text-black">
                      {exp.role} <span className="font-normal text-content-muted print:text-gray-600">at</span> {exp.company}
                    </h3>
                    <span className="text-xs font-medium text-accent-blue-light print:text-blue-700">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-content-body print:text-gray-700">
                    {exp.description}
                  </p>
                  {exp.bulletPoints && (
                    <ul className="list-disc list-inside space-y-1 pt-1 text-xs text-content-body print:text-gray-700">
                      {exp.bulletPoints.map((bp, i) => (
                        <li key={i}>{bp}</li>
                      ))}
                    </ul>
                  )}
                  <div className="flex flex-wrap gap-1.5 pt-1.5">
                    {exp.technologies.map((t) => (
                      <span key={t} className="px-2 py-0.5 rounded text-[11px] bg-white/5 border border-white/10 text-content-heading print:border-gray-300 print:bg-gray-100 print:text-black">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Featured & Core Projects */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-widest text-accent-blue mb-4 print:text-blue-700">
              Projects
            </h2>
            <div className="space-y-5">
              {/* ClearEarth */}
              <div className="space-y-1">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                  <h3 className="text-sm font-bold text-white print:text-black">
                    {portfolioData.featuredProject.title}{' '}
                    <span className="text-xs font-normal text-accent-blue-light print:text-blue-600">
                      (Live Production Website)
                    </span>
                  </h3>
                  <a
                    href={portfolioData.featuredProject.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs text-accent-blue hover:underline inline-flex items-center gap-1 print:text-blue-700"
                  >
                    <span>clearearth-safety-website.vercel.app</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
                <p className="text-xs sm:text-sm text-content-body print:text-gray-700">
                  {portfolioData.featuredProject.description}
                </p>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {portfolioData.featuredProject.technologies.map((t) => (
                    <span key={t} className="px-2 py-0.5 rounded text-[11px] bg-white/5 border border-white/10 text-content-heading print:border-gray-300 print:bg-gray-100 print:text-black">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Other projects */}
              {portfolioData.projects.map((proj) => (
                <div key={proj.id} className="space-y-1">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                    <h3 className="text-sm font-bold text-white print:text-black">
                      {proj.title}
                      {proj.subtitle && (
                        <span className="text-xs font-normal text-content-muted ml-2 print:text-gray-600">
                          • {proj.subtitle}
                        </span>
                      )}
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-content-body print:text-gray-700">
                    {proj.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {proj.technologies.map((t) => (
                      <span key={t} className="px-2 py-0.5 rounded text-[11px] bg-white/5 border border-white/10 text-content-heading print:border-gray-300 print:bg-gray-100 print:text-black">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Skills */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-widest text-accent-blue mb-3 print:text-blue-700">
              Technical Skills
            </h2>
            <div className="grid sm:grid-cols-2 gap-3 text-xs">
              {portfolioData.skills.map((cat) => (
                <div key={cat.category} className="p-3 rounded-lg bg-white/[0.02] border border-white/5 print:border-gray-300 print:bg-transparent">
                  <span className="font-semibold text-white print:text-black block mb-1">
                    {cat.category}
                  </span>
                  <p className="text-content-muted print:text-gray-700 leading-relaxed">
                    {cat.skills.map((s) => s.name).join(' • ')}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Certifications */}
          <div className="grid sm:grid-cols-2 gap-6 pt-2">
            <div>
              <h2 className="text-xs font-bold uppercase tracking-widest text-accent-blue mb-3 print:text-blue-700">
                Education
              </h2>
              <div className="space-y-3">
                {portfolioData.education.map((edu, idx) => (
                  <div key={idx} className="space-y-0.5">
                    <h3 className="text-xs font-bold text-white print:text-black">{edu.degree}</h3>
                    <p className="text-xs text-content-muted print:text-gray-600">{edu.institution} • {edu.period}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-xs font-bold uppercase tracking-widest text-accent-blue mb-3 print:text-blue-700">
                Certifications
              </h2>
              <div className="space-y-2">
                {portfolioData.certifications.map((cert, idx) => (
                  <div key={idx} className="flex items-center justify-between text-xs">
                    <span className="font-medium text-white print:text-black">{cert.title}</span>
                    <span className="text-content-muted print:text-gray-600">{cert.issuer}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
