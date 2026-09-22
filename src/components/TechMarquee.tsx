import React from 'react';
import { portfolioData } from '../data/portfolioData';

export const TechMarquee: React.FC = () => {
  const items = portfolioData.marqueeTechnologies;
  // Duplicate for seamless infinite marquee loop
  const marqueeList = [...items, ...items, ...items];

  return (
    <div className="relative w-full py-8 overflow-hidden border-y border-border-subtle bg-background-secondary/40 backdrop-blur-sm marquee-container">
      {/* Side gradient masks for smooth fade */}
      <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

      <div className="flex w-max animate-marquee items-center gap-4 sm:gap-6 will-change-transform">
        {marqueeList.map((tech, idx) => (
          <div
            key={`${tech}-${idx}`}
            className="flex items-center gap-2.5 px-4 py-2 rounded-full glass-pill border border-border-subtle hover:border-accent-blue/40 hover:bg-white/5 transition-all text-xs sm:text-sm font-medium text-content-body hover:text-white select-none whitespace-nowrap cursor-default"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-accent-blue/80"></span>
            <span>{tech}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
