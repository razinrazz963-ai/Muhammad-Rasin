import React from 'react';
import { ExternalLink, Github, Layers, ShieldCheck, Sparkles } from 'lucide-react';
import { portfolioData, ProjectItem } from '../data/portfolioData';

interface FeaturedProjectSectionProps {
  onSelectProject: (project: ProjectItem) => void;
}

export const FeaturedProjectSection: React.FC<FeaturedProjectSectionProps> = ({ onSelectProject }) => {
  const project = portfolioData.featuredProject;

  return (
    <section id="featured-project" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-background overflow-hidden">
      {/* Ambient background aura */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] ambient-glow-blue blur-3xl pointer-events-none -z-10 opacity-60" />

      <div className="max-w-7xl mx-auto">
        {/* Section Eyebrow */}
        <div className="flex items-center gap-2 mb-4">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-400">
            {project.tag}
          </span>
        </div>

        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-4">
          <div>
            <h2 className="text-3xl sm:text-5xl font-extrabold font-display text-white tracking-tight leading-tight">
              Featured Production Project
            </h2>
            <p className="text-sm sm:text-base text-content-body max-w-2xl mt-2">
              A real-world commercial client website designed, developed, and deployed to production.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => onSelectProject(project)}
              className="px-4 py-2 rounded-xl text-xs font-semibold text-content-heading bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
            >
              Read Case Study
            </button>
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-accent-blue to-accent-violet hover:brightness-110 active:scale-95 transition-all shadow-glow-blue"
            >
              <span>View Live Website</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Large Showcase Container */}
        <div className="glass-card rounded-3xl border border-white/10 overflow-hidden shadow-luxury">
          {/* Browser Window Header Mockup */}
          <div className="px-5 py-3.5 bg-black/50 border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-rose-500/80" />
              <span className="w-3 h-3 rounded-full bg-amber-500/80" />
              <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
            </div>

            {/* Fake Address Bar */}
            <div className="hidden sm:flex items-center gap-2 px-4 py-1 rounded-full bg-white/[0.04] border border-white/10 text-[11px] text-content-muted font-mono max-w-md w-full justify-center">
              <ShieldCheck className="w-3 h-3 text-emerald-400" />
              <span className="truncate">https://clearearth-safety-website.vercel.app</span>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-[11px] font-medium text-emerald-400 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                Live
              </span>
            </div>
          </div>

          {/* Showcase Body (Grid: Preview Image + Info) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 sm:p-10 items-center">
            {/* Left/Top: Large Website Preview */}
            <div
              className="lg:col-span-7 relative group cursor-pointer overflow-hidden rounded-2xl border border-white/10 bg-black/60 shadow-xl"
              onClick={() => onSelectProject(project)}
              data-cursor-text="View"
            >
              <img
                src={project.image}
                alt="ClearEarth Safety Consultancy LLC Website Screenshot"
                className="w-full h-auto object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                loading="lazy"
              />
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                <span className="inline-flex items-center gap-2 text-xs font-semibold text-white bg-accent-blue px-3.5 py-1.5 rounded-lg shadow-lg">
                  <span>Explore Case Study</span>
                  <Layers className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>

            {/* Right: Project Details & Tech */}
            <div className="lg:col-span-5 flex flex-col justify-between h-full space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-accent-blue mb-2 block">
                  Corporate Web Solution
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold font-display text-white tracking-tight mb-3">
                  {project.title}
                </h3>
                <p className="text-sm sm:text-base text-content-body leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Key Points */}
                <div className="space-y-2.5 mb-6">
                  {project.keyFeatures?.slice(0, 3).map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-content-heading">
                      <Sparkles className="w-4 h-4 text-accent-blue mt-0.5 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Pills */}
                <div className="space-y-2 mb-8">
                  <span className="text-xs font-semibold uppercase tracking-wider text-content-muted block">
                    Technologies
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-lg text-xs font-medium bg-white/[0.04] border border-white/10 text-white"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Links */}
              <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-white/10">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-accent-blue to-accent-violet hover:brightness-110 active:scale-95 transition-all shadow-glow-blue"
                >
                  <span>View Live Website</span>
                  <ExternalLink className="w-4 h-4" />
                </a>

                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-xs sm:text-sm font-medium text-white bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                  aria-label="View Source on GitHub"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
