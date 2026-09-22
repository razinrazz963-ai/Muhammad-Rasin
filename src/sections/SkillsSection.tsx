import React, { useState } from 'react';
import {
  Code,
  FileCode2,
  Atom,
  Palette,
  Layout,
  Layers,
  Terminal,
  Cpu,
  Binary,
  Coffee,
  Database,
  BarChart3,
  Table,
  Sigma,
  LineChart,
  Brain,
  MessageSquare,
  Network,
  Boxes,
  Sparkles,
  Server,
  AppWindow,
  GitBranch,
  Cloud,
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const SkillsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('ALL');

  const iconMap: Record<string, React.ReactNode> = {
    Atom: <Atom className="w-4 h-4 text-accent-blue" />,
    FileCode2: <FileCode2 className="w-4 h-4 text-accent-blue-light" />,
    Code: <Code className="w-4 h-4 text-accent-blue" />,
    Palette: <Palette className="w-4 h-4 text-accent-violet-light" />,
    Layout: <Layout className="w-4 h-4 text-accent-blue" />,
    Layers: <Layers className="w-4 h-4 text-accent-violet" />,
    Terminal: <Terminal className="w-4 h-4 text-emerald-400" />,
    Cpu: <Cpu className="w-4 h-4 text-cyan-400" />,
    Binary: <Binary className="w-4 h-4 text-amber-400" />,
    Coffee: <Coffee className="w-4 h-4 text-orange-400" />,
    Database: <Database className="w-4 h-4 text-accent-blue-light" />,
    BarChart3: <BarChart3 className="w-4 h-4 text-amber-400" />,
    Table: <Table className="w-4 h-4 text-emerald-400" />,
    Sigma: <Sigma className="w-4 h-4 text-accent-violet" />,
    LineChart: <LineChart className="w-4 h-4 text-rose-400" />,
    Brain: <Brain className="w-4 h-4 text-accent-violet-light" />,
    MessageSquare: <MessageSquare className="w-4 h-4 text-accent-blue-light" />,
    Network: <Network className="w-4 h-4 text-indigo-400" />,
    Boxes: <Boxes className="w-4 h-4 text-orange-400" />,
    Sparkles: <Sparkles className="w-4 h-4 text-amber-300" />,
    Server: <Server className="w-4 h-4 text-emerald-400" />,
    AppWindow: <AppWindow className="w-4 h-4 text-rose-400" />,
    GitBranch: <GitBranch className="w-4 h-4 text-orange-500" />,
    Cloud: <Cloud className="w-4 h-4 text-accent-blue-light" />,
  };

  const categories = ['ALL', ...portfolioData.skills.map((c) => c.category)];

  const displayedSkills =
    activeCategory === 'ALL'
      ? portfolioData.skills
      : portfolioData.skills.filter((c) => c.category === activeCategory);

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-accent-blue block mb-3">
            Technical Proficiency
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-display text-white tracking-tight leading-tight mb-4">
            Skills & Capabilities
          </h2>
          <p className="text-sm sm:text-base text-content-body">
            Categorized technical stack across modern web development, programming languages, data analytics, and applied artificial intelligence.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide uppercase transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue ${
                activeCategory === cat
                  ? 'bg-accent-blue text-white shadow-glow-blue'
                  : 'bg-white/[0.03] border border-white/10 text-content-body hover:text-white hover:bg-white/[0.08]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Categorized Skills Grid */}
        <div className="space-y-10">
          {displayedSkills.map((category) => (
            <div key={category.category} className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-accent-blue" />
                <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-content-heading">
                  {category.category}
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="glass-card glass-card-hover p-4 rounded-xl border border-border-subtle flex items-start gap-3.5 group"
                  >
                    <div className="w-9 h-9 rounded-lg bg-white/[0.04] border border-white/10 flex items-center justify-center shrink-0 group-hover:border-accent-blue/50 group-hover:bg-accent-blue/10 transition-all">
                      {iconMap[skill.iconName] || <Code className="w-4 h-4 text-accent-blue" />}
                    </div>

                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm font-semibold text-white tracking-tight group-hover:text-accent-blue-light transition-colors">
                        {skill.name}
                      </h4>
                      <p className="text-xs text-content-muted leading-relaxed mt-0.5">
                        {skill.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
