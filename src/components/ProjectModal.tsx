import React, { useEffect } from 'react';
import { X, ExternalLink, Github, CheckCircle2, Layers } from 'lucide-react';
import { ProjectItem } from '../data/portfolioData';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 overflow-y-auto"
    >
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity duration-300"
        aria-hidden="true"
      />

      {/* Modal Container */}
      <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl glass-card border border-white/10 bg-background-secondary/95 shadow-2xl p-6 sm:p-8 z-10 text-content-body custom-scrollbar">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-white/5 border border-white/10 text-content-muted hover:text-white hover:bg-white/10 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue"
          aria-label="Close Case Study"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="mb-6 pr-10">
          {project.tag && (
            <span className="inline-block px-3 py-1 rounded-full text-[11px] font-semibold tracking-wider uppercase bg-accent-blue/15 text-accent-blue-light border border-accent-blue/30 mb-3">
              {project.tag}
            </span>
          )}
          <h2 id="modal-project-title" className="text-2xl sm:text-3xl font-bold font-display text-white tracking-tight">
            {project.title}
          </h2>
          {project.subtitle && (
            <p className="text-sm sm:text-base text-accent-violet-light font-medium mt-1">
              {project.subtitle}
            </p>
          )}
        </div>

        {/* Project Image Preview */}
        {project.image && (
          <div className="mb-6 rounded-xl overflow-hidden border border-white/10 bg-black/40 shadow-inner group">
            <img
              src={project.image}
              alt={`${project.title} preview`}
              className="w-full h-auto max-h-[360px] object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
              loading="lazy"
            />
          </div>
        )}

        {/* Overview */}
        <div className="space-y-6">
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-content-muted mb-2 flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5 text-accent-blue" />
              Project Overview
            </h3>
            <p className="text-sm sm:text-base text-content-heading leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Problem & Solution (when available) */}
          {(project.problem || project.solution) && (
            <div className="grid sm:grid-cols-2 gap-4">
              {project.problem && (
                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5">
                  <h4 className="text-xs font-semibold text-accent-blue-light uppercase tracking-wider mb-1.5">
                    Problem
                  </h4>
                  <p className="text-xs sm:text-sm text-content-body leading-relaxed">
                    {project.problem}
                  </p>
                </div>
              )}
              {project.solution && (
                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5">
                  <h4 className="text-xs font-semibold text-accent-violet-light uppercase tracking-wider mb-1.5">
                    Solution
                  </h4>
                  <p className="text-xs sm:text-sm text-content-body leading-relaxed">
                    {project.solution}
                  </p>
                </div>
              )}
            </div>
          )}

          {/* Key Features */}
          {project.keyFeatures && project.keyFeatures.length > 0 && (
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-content-muted mb-3">
                Key Highlights
              </h3>
              <ul className="space-y-2">
                {project.keyFeatures.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-content-body">
                    <CheckCircle2 className="w-4 h-4 text-accent-blue mt-0.5 shrink-0" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* My Contribution */}
          {project.myContribution && project.myContribution.length > 0 && (
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-content-muted mb-3">
                My Contribution
              </h3>
              <ul className="space-y-2">
                {project.myContribution.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-content-body">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-violet mt-2 shrink-0"></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Technologies */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-content-muted mb-3">
              Technologies Used
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-md text-xs font-medium bg-white/5 border border-white/10 text-white"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Action Links */}
          <div className="pt-4 border-t border-white/10 flex flex-wrap items-center gap-3">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-accent-blue to-accent-violet hover:brightness-110 transition-all shadow-glow-blue"
              >
                <span>View Live Website</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-medium text-white bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>View on GitHub</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
