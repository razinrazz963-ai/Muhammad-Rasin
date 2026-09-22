import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';
import { portfolioData } from '../data/portfolioData';

export const FloatingWhatsApp: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 280);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-center gap-3">
      {/* WhatsApp Button with Tooltip */}
      <div className="relative flex items-center">
        {/* Tooltip */}
        <div
          className={`hidden sm:flex absolute right-full mr-3 items-center gap-2 px-3 py-1.5 rounded-lg bg-surface-card/90 border border-border-medium backdrop-blur-md shadow-lg text-xs font-medium text-white transition-all duration-200 pointer-events-none whitespace-nowrap ${
            isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2'
          }`}
        >
          <span>Chat on WhatsApp</span>
        </div>

        {/* Official WhatsApp Button */}
        <a
          href={portfolioData.personal.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-[0_4px_20px_rgba(37,211,102,0.4)] hover:shadow-[0_6px_28px_rgba(37,211,102,0.6)] hover:scale-105 active:scale-95 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-white border-2 border-white/80"
          aria-label="Direct WhatsApp Chat with Muhammad Rasin"
        >
          {/* Subtle pulse ring */}
          <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-30 animate-ping -z-10" />
          <WhatsAppIcon className="w-7 h-7 text-white" />
        </a>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className={`flex items-center justify-center w-12 h-12 rounded-full bg-[#111827] text-white border border-white/15 shadow-xl hover:bg-[#1F2937] hover:border-white/30 hover:scale-105 active:scale-95 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue ${
          showScrollTop
            ? 'opacity-100 translate-y-0 pointer-events-auto'
            : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
        aria-label="Scroll to top of page"
        title="Go to top"
      >
        <ArrowUp className="w-5 h-5 text-white" />
      </button>
    </div>
  );
};
