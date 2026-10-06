import React from 'react';
import { Calendar, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-background-secondary/30">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-accent-blue block mb-3">
            Career Journey
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-display text-white tracking-tight leading-tight mb-4">
            Experience
          </h2>
          <p className="text-sm sm:text-base text-content-body">
            Demonstrated hands-on experience in software development and real-world AI projects.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative border-l-2 border-white/10 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-12">
          {portfolioData.experience.map((exp) => (
            <div key={exp.id} className="relative group">
              {/* Timeline Node Icon */}
              <div
                className={`absolute -left-[35px] sm:-left-[51px] top-1.5 w-6 h-6 sm:w-7 sm:h-7 rounded-full border-2 flex items-center justify-center transition-all ${
                  exp.isCurrent
                    ? 'bg-accent-blue border-accent-blue shadow-[0_0_12px_rgba(59,130,246,0.8)]'
                    : 'bg-background border-white/20 group-hover:border-white/40'
                }`}
              >
                <div
                  className={`w-2 h-2 rounded-full ${
                    exp.isCurrent ? 'bg-white animate-pulse' : 'bg-content-muted'
                  }`}
                />
              </div>

              {/* Experience Card */}
              <div className="glass-card glass-card-hover p-6 sm:p-8 rounded-2xl border border-border-subtle">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="text-xl sm:text-2xl font-bold font-display text-white tracking-tight">
                        {exp.role}
                      </h3>
                      {exp.isCurrent && (
                        <span className="px-2.5 py-0.5 rounded-full text-[10px] font-semibold uppercase tracking-wider bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                          Current Role
                        </span>
                      )}
                    </div>
                    <p className="text-base font-semibold text-accent-blue-light mt-0.5">
                      {exp.company}
                      {exp.location && (
                        <span className="text-content-muted font-normal text-xs sm:text-sm ml-2">
                          | {exp.location}
                        </span>
                      )}
                    </p>
                  </div>

                  <div className="flex items-center gap-2 text-xs font-medium text-content-muted">
                    <Calendar className="w-3.5 h-3.5 text-accent-blue" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm sm:text-base text-content-body leading-relaxed mb-4">
                  {exp.description}
                </p>

                {/* Factual Bullet points */}
                {exp.bulletPoints && exp.bulletPoints.length > 0 && (
                  <ul className="space-y-2 mb-6 text-xs sm:text-sm text-content-body">
                    {exp.bulletPoints.map((point, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-accent-blue mt-0.5 shrink-0" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {/* Technologies used */}
                <div className="pt-4 border-t border-white/5 flex flex-wrap items-center gap-2">
                  <span className="text-xs font-semibold text-content-muted mr-1">
                    Technologies:
                  </span>
                  {exp.technologies.map((tech) => (
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
          ))}
        </div>
      </div>
    </section>
  );
};
