import React from 'react';
import { Layers, LineChart, Sparkles, BookOpen } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const WhyWorkWithMeSection: React.FC = () => {
  const iconMap: Record<string, React.ReactNode> = {
    '01': <Layers className="w-5 h-5 text-accent-blue" />,
    '02': <LineChart className="w-5 h-5 text-accent-blue-light" />,
    '03': <Sparkles className="w-5 h-5 text-accent-violet" />,
    '04': <BookOpen className="w-5 h-5 text-accent-violet-light" />,
  };

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative bg-background-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-accent-blue block mb-3">
            Core Philosophy
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-display text-white tracking-tight leading-tight mb-4">
            What I Bring
          </h2>
          <p className="text-sm sm:text-base text-content-body">
            A balanced foundation that unites software engineering practices with analytical reasoning and modern AI tools.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {portfolioData.whyWorkWithMe.map((item) => (
            <div
              key={item.number}
              className="glass-card glass-card-hover p-6 sm:p-7 rounded-2xl border border-border-subtle flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-11 h-11 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center group-hover:border-accent-blue/40 group-hover:bg-accent-blue/10 transition-colors">
                    {iconMap[item.number]}
                  </div>
                  <span className="text-xs font-mono font-bold text-content-muted">
                    {item.number}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white tracking-tight mb-3 group-hover:text-accent-blue-light transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-content-body leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/5">
                <span className="text-[11px] font-semibold text-content-muted uppercase tracking-wider">
                  Professional Trait
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
