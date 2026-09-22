import React from 'react';
import { Download, Eye, FileText } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

interface ResumeSectionProps {
  onOpenResumeModal: () => void;
}

export const ResumeSection: React.FC<ResumeSectionProps> = ({ onOpenResumeModal }) => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative bg-background">
      <div className="max-w-5xl mx-auto">
        <div className="relative rounded-3xl p-8 sm:p-12 glass-card border border-white/10 overflow-hidden shadow-luxury">
          {/* Ambient background glow */}
          <div className="absolute top-0 right-0 w-80 h-80 ambient-glow-blue blur-3xl pointer-events-none -z-10" />
          <div className="absolute bottom-0 left-0 w-80 h-80 ambient-glow-violet blur-3xl pointer-events-none -z-10" />

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
            <div className="max-w-xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-accent-blue/15 text-accent-blue-light border border-accent-blue/30 mb-4">
                <FileText className="w-3.5 h-3.5" />
                <span>Executive Summary</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-white tracking-tight leading-tight mb-3">
                {portfolioData.resume.heading}
              </h2>
              <p className="text-sm sm:text-base text-content-body leading-relaxed">
                {portfolioData.resume.subtext}
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto shrink-0">
              <button
                onClick={onOpenResumeModal}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-accent-blue to-accent-violet hover:brightness-110 active:scale-95 transition-all shadow-glow-blue focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue"
              >
                <Eye className="w-4 h-4" />
                <span>View Resume</span>
              </button>

              <button
                onClick={onOpenResumeModal}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-white bg-white/5 border border-white/15 hover:bg-white/10 active:scale-95 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue"
              >
                <Download className="w-4 h-4 text-accent-blue" />
                <span>Download Resume</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
