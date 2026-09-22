import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { WhatsAppIcon } from '../components/WhatsAppIcon';
import { portfolioData } from '../data/portfolioData';

export const Footer: React.FC = () => {
  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-border-subtle bg-background">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Copyright */}
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-xs text-content-muted">
          <p>© 2026 Muhammad Rasin M. All rights reserved.</p>
          <span className="hidden sm:inline text-white/20">•</span>
          <p className="text-content-muted/80">Designed & built with React.</p>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-4">
          <a
            href={portfolioData.personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg bg-white/[0.03] border border-white/5 text-content-body hover:text-white hover:border-white/20 transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href={portfolioData.personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg bg-white/[0.03] border border-white/5 text-content-body hover:text-white hover:border-white/20 transition-colors"
            aria-label="GitHub"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href={`mailto:${portfolioData.personal.email}`}
            className="p-2 rounded-lg bg-white/[0.03] border border-white/5 text-content-body hover:text-white hover:border-white/20 transition-colors"
            aria-label="Email"
          >
            <Mail className="w-4 h-4" />
          </a>
          <a
            href={portfolioData.personal.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg bg-white/[0.03] border border-white/5 text-[#25D366] hover:border-[#25D366]/40 transition-colors"
            aria-label="WhatsApp"
          >
            <WhatsAppIcon className="w-4 h-4 text-[#25D366]" />
          </a>
        </div>
      </div>
    </footer>
  );
};
