import React, { useState, useEffect } from 'react';
import { ArrowDown, Download, Github, Linkedin, Sparkles } from 'lucide-react';
import { WhatsAppIcon } from '../components/WhatsAppIcon';
import { portfolioData } from '../data/portfolioData';

interface HeroSectionProps {
  onOpenResumeModal: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenResumeModal }) => {
  const [titleIndex, setTitleIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFading(true);
      setTimeout(() => {
        setTitleIndex((prev) => (prev + 1) % portfolioData.personal.rotatingTitles.length);
        setIsFading(false);
      }, 300);
    }, 3200);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] sm:min-h-screen flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 bg-grid-pattern overflow-hidden"
    >
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] ambient-glow-blue blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] ambient-glow-violet blur-3xl pointer-events-none -z-10 opacity-70" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left Column: Text & CTAs (7 cols) */}
        <div className="lg:col-span-7 flex flex-col items-start text-left z-10">
          {/* Eyebrow & Recruiter Status Badge */}
          <div className="flex flex-wrap items-center gap-2.5 mb-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[11px] font-semibold tracking-wider uppercase bg-accent-blue/10 text-accent-blue-light border border-accent-blue/30 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-accent-blue animate-pulse" />
              <span>{portfolioData.personal.statusBadge}</span>
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold font-display tracking-tight text-white leading-[1.1] mb-3">
            Hi, I'm <br />
            <span className="text-gradient-silver">{portfolioData.personal.displayName}.</span>
          </h1>

          {/* Animated Rotating Headline */}
          <div className="h-12 sm:h-16 flex items-center mb-6 overflow-hidden">
            <span
              className={`text-2xl sm:text-4xl lg:text-5xl font-bold font-display text-gradient-accent transition-all duration-300 transform ${
                isFading ? 'opacity-0 -translate-y-4' : 'opacity-100 translate-y-0'
              }`}
            >
              {portfolioData.personal.rotatingTitles[titleIndex]}
            </span>
          </div>

          {/* Supporting Text */}
          <p className="text-base sm:text-lg text-content-body max-w-2xl leading-relaxed mb-6">
            {portfolioData.personal.heroSupportingText}
          </p>

          {/* Current Status Pill */}
          <div className="flex items-center gap-2.5 px-4 py-2 rounded-xl bg-white/[0.03] border border-white/10 mb-8 backdrop-blur-sm">
            <Sparkles className="w-4 h-4 text-accent-blue shrink-0" />
            <span className="text-xs sm:text-sm font-medium text-content-heading">
              {portfolioData.personal.currentStatusText}
            </span>
          </div>

          {/* Primary Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 mb-8 w-full sm:w-auto">
            <a
              href="#featured-project"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-accent-blue to-accent-violet hover:brightness-110 active:scale-95 transition-all shadow-glow-blue focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue"
            >
              <span>View My Work</span>
              <ArrowDown className="w-4 h-4" />
            </a>

            <button
              onClick={onOpenResumeModal}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold text-white bg-white/5 border border-white/15 hover:bg-white/10 active:scale-95 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue"
            >
              <Download className="w-4 h-4 text-accent-blue" />
              <span>Download Resume</span>
            </button>
          </div>

          {/* Secondary Quick Social Links */}
          <div className="flex items-center gap-3 pt-4 border-t border-border-subtle w-full max-w-lg">
            <span className="text-xs font-semibold text-content-muted uppercase tracking-wider mr-1">
              Connect:
            </span>
            <a
              href={portfolioData.personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-content-body hover:text-white bg-white/[0.03] border border-white/5 hover:border-white/20 transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-3.5 h-3.5 text-accent-blue" />
              <span>LinkedIn</span>
            </a>
            <a
              href={portfolioData.personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-content-body hover:text-white bg-white/[0.03] border border-white/5 hover:border-white/20 transition-colors"
              aria-label="GitHub Profile"
            >
              <Github className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>
            <a
              href={portfolioData.personal.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-[#25D366] bg-[#25D366]/10 border border-[#25D366]/20 hover:border-[#25D366]/40 transition-colors"
              aria-label="WhatsApp Chat"
            >
              <WhatsAppIcon className="w-3.5 h-3.5 text-[#25D366]" />
              <span>WhatsApp Me</span>
            </a>
          </div>
        </div>

        {/* Right Column: Premium Portrait Presentation (5 cols) */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end z-10">
          <div className="relative w-full max-w-sm sm:max-w-md">
            {/* Ambient halo behind portrait card */}
            <div className="absolute -inset-1.5 rounded-3xl bg-gradient-to-br from-accent-blue/30 via-accent-violet/20 to-transparent blur-xl opacity-75 -z-10" />

            {/* Glass portrait card */}
            <div className="relative rounded-3xl p-3 sm:p-4 glass-card shadow-luxury border border-white/10 group">
              <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl bg-background-secondary border border-white/5">
                <img
                  src={portfolioData.personal.portraitImage}
                  alt="Muhammad Rasin M - Software Developer"
                  className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="eager"
                  fetchPriority="high"
                />

                {/* Subtle dark gradient overlay at bottom for card text readability */}
                <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#090A0F]/90 via-[#090A0F]/50 to-transparent pointer-events-none" />

                {/* Floating identity pill over portrait */}
                <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-surface-card/85 backdrop-blur-md border border-white/10 flex items-center justify-between">
                  <div>
                    <p className="text-xs font-bold text-white tracking-wide">
                      MUHAMMAD RASIN M
                    </p>
                    <p className="text-[11px] text-accent-blue-light font-medium">
                      Software Developer @ Yoro Technologies
                    </p>
                  </div>
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]" title="Active & Ready" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
