import React from 'react';
import { GraduationCap, Award, Calendar, Building2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const EducationCertificationsSection: React.FC = () => {
  return (
    <section id="education" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Education Column (7 cols) */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-2.5 mb-3">
              <GraduationCap className="w-5 h-5 text-accent-blue" />
              <span className="text-xs font-bold uppercase tracking-widest text-accent-blue">
                Academic Background
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-white tracking-tight mb-8">
              Education
            </h2>

            <div className="space-y-6">
              {portfolioData.education.map((edu, idx) => (
                <div
                  key={idx}
                  className="glass-card glass-card-hover p-6 rounded-2xl border border-border-subtle"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                    <h3 className="text-lg font-bold text-white tracking-tight">
                      {edu.degree}
                    </h3>
                    <div className="flex items-center gap-1.5 text-xs font-medium text-accent-blue-light">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{edu.period}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-sm font-medium text-content-heading mb-3">
                    <Building2 className="w-4 h-4 text-accent-violet shrink-0" />
                    <span>{edu.institution}</span>
                  </div>

                  {edu.details && (
                    <p className="text-xs sm:text-sm text-content-body leading-relaxed">
                      {edu.details}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Certifications Column (5 cols) */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-2.5 mb-3">
              <Award className="w-5 h-5 text-accent-violet" />
              <span className="text-xs font-bold uppercase tracking-widest text-accent-violet">
                Verified Credentials
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-white tracking-tight mb-8">
              Certifications
            </h2>

            <div className="space-y-4">
              {portfolioData.certifications.map((cert, idx) => (
                <div
                  key={idx}
                  className="glass-card glass-card-hover p-5 rounded-2xl border border-border-subtle flex items-center justify-between gap-4 group"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-accent-violet/10 border border-accent-violet/20 flex items-center justify-center shrink-0 group-hover:border-accent-violet/40 transition-colors">
                      <Award className="w-5 h-5 text-accent-violet" />
                    </div>
                    <div>
                      <h3 className="text-sm sm:text-base font-bold text-white tracking-tight group-hover:text-accent-violet-light transition-colors">
                        {cert.title}
                      </h3>
                      <p className="text-xs text-content-muted font-medium mt-0.5">
                        {cert.issuer}
                      </p>
                    </div>
                  </div>

                  <span className="px-2.5 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider bg-white/5 border border-white/10 text-content-body shrink-0">
                    Certified
                  </span>
                </div>
              ))}
            </div>

            {/* Languages */}
            <div className="mt-8 p-5 rounded-2xl glass-card border border-border-subtle">
              <span className="text-xs font-bold uppercase tracking-wider text-content-heading block mb-3">
                Languages
              </span>
              <div className="flex flex-wrap gap-2">
                {portfolioData.languages.map((lang) => (
                  <span
                    key={lang}
                    className="px-3.5 py-1.5 rounded-full text-xs font-medium bg-white/[0.04] border border-white/10 text-white"
                  >
                    {lang}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
