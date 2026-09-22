import React from 'react';
import { Code2, Database, Brain, Network } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const AboutSection: React.FC = () => {
  const iconMap: Record<string, React.ReactNode> = {
    '01': <Code2 className="w-5 h-5 text-accent-blue" />,
    '02': <Database className="w-5 h-5 text-accent-blue-light" />,
    '03': <Brain className="w-5 h-5 text-accent-violet" />,
    '04': <Network className="w-5 h-5 text-accent-violet-light" />,
  };

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-accent-blue block mb-3">
            About Me
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-display text-white tracking-tight leading-tight mb-6">
            {portfolioData.about.heading}
          </h2>
          <p className="text-base sm:text-lg text-content-body leading-relaxed">
            {portfolioData.about.summary}
          </p>
        </div>

        {/* 4 Highlight Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {portfolioData.about.coreAreas.map((area) => (
            <div
              key={area.number}
              className="glass-card glass-card-hover p-6 rounded-2xl border border-border-subtle flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center group-hover:border-accent-blue/40 transition-colors">
                    {iconMap[area.number]}
                  </div>
                  <span className="text-xs font-mono font-bold text-content-muted">
                    {area.number}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-content-heading group-hover:text-white transition-colors mb-2.5">
                  {area.title}
                </h3>
                <p className="text-xs sm:text-sm text-content-body leading-relaxed">
                  {area.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/5 flex items-center gap-1.5 text-xs font-medium text-accent-blue opacity-0 group-hover:opacity-100 transition-opacity">
                <span>Core Competency</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
