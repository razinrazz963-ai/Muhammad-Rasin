import React from 'react';
import { ArrowUpRight, Github } from 'lucide-react';
import { portfolioData, ProjectItem } from '../data/portfolioData';

interface ProjectsSectionProps {
  onSelectProject: (project: ProjectItem) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onSelectProject }) => {
  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-background-secondary/20">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-accent-blue block mb-3">
            Selected Work
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-display text-white tracking-tight leading-tight mb-4">
            AI & Data Engineering Projects
          </h2>
          <p className="text-sm sm:text-base text-content-body">
            Practical applications spanning Retrieval-Augmented Generation, vector embeddings, and machine learning classification.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {portfolioData.projects.map((project) => (
            <div
              key={project.id}
              className="glass-card glass-card-hover rounded-2xl border border-border-subtle overflow-hidden flex flex-col justify-between group"
            >
              <div>
                {/* Image Preview */}
                <div
                  className="relative aspect-video overflow-hidden bg-black/50 cursor-pointer"
                  onClick={() => onSelectProject(project)}
                  data-cursor-text="View"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background-secondary/90 via-transparent to-transparent opacity-60" />
                </div>

                {/* Content */}
                <div className="p-6 sm:p-8">
                  {project.subtitle && (
                    <span className="text-xs font-semibold text-accent-blue-light uppercase tracking-wider block mb-2">
                      {project.subtitle}
                    </span>
                  )}
                  <h3 className="text-xl sm:text-2xl font-bold font-display text-white tracking-tight mb-3 group-hover:text-accent-blue-light transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-content-body leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-md text-xs font-medium bg-white/[0.04] border border-white/10 text-content-heading"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="px-6 sm:px-8 pb-6 sm:pb-8 pt-0 flex items-center justify-between border-t border-white/5 mt-auto">
                <button
                  onClick={() => onSelectProject(project)}
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-white hover:text-accent-blue transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue rounded-md p-1"
                >
                  <span>View Case Study</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>

                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-content-body hover:text-white bg-white/[0.03] border border-white/10 hover:border-white/20 transition-colors"
                  aria-label={`View ${project.title} on GitHub`}
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>GitHub</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
