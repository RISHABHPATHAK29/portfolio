import React from 'react';
import { 
  Cpu, 
  Cloud, 
  Code, 
  Database, 
  Brain, 
  CheckCircle2, 
  Layers,
  Terminal
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Skills() {
  const { skillCategories } = portfolioData;

  const iconMap = {
    'Brain': Brain,
    'Cloud': Cloud,
    'Code': Code,
    'Database': Database
  };

  return (
    <section id="skills" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold text-cyan-400 bg-cyan-950/70 border border-cyan-500/30 mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Specialized Tech Stack & Competencies
          </h2>
          <p className="mt-4 text-base text-slate-400">
            A comprehensive overview of tools, frameworks, and cloud services applied across AI modeling, data engineering, and enterprise cloud solutions.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((cat, idx) => {
            const IconComponent = iconMap[cat.icon] || Layers;

            return (
              <div 
                key={idx}
                className="glass-panel rounded-2xl p-6 sm:p-7 transition-all duration-300 hover:border-cyan-500/30 hover:shadow-lg hover:shadow-cyan-950/20"
              >
                {/* Header */}
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10">
                  <div className="w-10 h-10 rounded-xl bg-cyan-950/80 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">
                      {cat.name}
                    </h3>
                    <span className="text-xs text-slate-400 font-mono">
                      {cat.skills.length} core competencies
                    </span>
                  </div>
                </div>

                {/* Skills list */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {cat.skills.map((skill, si) => (
                    <div
                      key={si}
                      className="p-3 rounded-xl bg-[#0b0f19] border border-white/5 flex flex-col justify-between hover:border-cyan-500/20 transition-colors"
                    >
                      <span className="text-xs font-semibold text-slate-200 leading-snug">
                        {skill.name}
                      </span>
                      <div className="mt-2 flex items-center justify-between text-[11px]">
                        <span className="text-slate-500 font-mono">Proficiency</span>
                        <span className={`px-2 py-0.5 rounded text-[10px] font-mono font-medium ${
                          skill.level === 'Expert' || skill.level === 'Advanced'
                            ? 'bg-cyan-950/90 text-cyan-300 border border-cyan-500/30'
                            : 'bg-purple-950/90 text-purple-300 border border-purple-500/30'
                        }`}>
                          {skill.level}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
