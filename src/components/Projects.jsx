import React, { useState } from 'react';
import { FolderGit2, ExternalLink, Github, Sparkles, Filter, Code2, Server, Cpu } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Projects() {
  const { projects } = portfolioData;
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'AI & ML', 'Cloud & AI', 'Security', 'Software'];

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category.toLowerCase().includes(activeCategory.toLowerCase()));

  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold text-cyan-400 bg-cyan-950/70 border border-cyan-500/30 mb-3">
              <FolderGit2 className="w-3.5 h-3.5" />
              <span>Engineered Systems</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Featured Projects & Platforms
            </h2>
            <p className="mt-2 text-base text-slate-400 max-w-xl">
              Production cloud platforms, deep learning prediction engines, and conversational AI chatbots.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-xl bg-[#0e1422] border border-white/10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                  activeCategory === cat
                    ? 'bg-cyan-500 text-black shadow-sm'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => {
            const hasDemo = Boolean(project.demoUrl);

            return (
              <div
                key={project.id}
                className="glass-panel rounded-2xl flex flex-col justify-between p-6 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500/40 relative group"
              >
                {/* Top Details */}
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="text-xs font-mono px-2.5 py-1 rounded-md bg-white/5 text-cyan-300 border border-cyan-500/20">
                      {project.category}
                    </span>
                    <span className="text-xs font-mono text-slate-500">
                      {project.year}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {project.title}
                  </h3>

                  <p className="mt-3 text-sm text-slate-300 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Bullet Highlights */}
                  <ul className="mt-4 space-y-1.5 text-xs text-slate-400">
                    {project.details.map((bullet, bi) => (
                      <li key={bi} className="flex items-start gap-2">
                        <span className="text-cyan-400 font-bold shrink-0">&rsaquo;</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom Tech Pills & Actions */}
                <div className="mt-6 pt-5 border-t border-white/10">
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.tech.map((t, ti) => (
                      <span
                        key={ti}
                        className="text-[11px] font-mono px-2 py-0.5 rounded bg-[#131b2e] text-slate-300 border border-white/5"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between gap-2">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-300 hover:text-white transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      <span>Codebase</span>
                    </a>

                    {hasDemo ? (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-black bg-cyan-400 hover:bg-cyan-300 shadow-sm shadow-cyan-500/25 transition-all"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        <span>Live Azure App</span>
                      </a>
                    ) : (
                      <span className="text-xs font-mono text-slate-500 flex items-center gap-1">
                        <Cpu className="w-3.5 h-3.5" />
                        Production Repo
                      </span>
                    )}
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
