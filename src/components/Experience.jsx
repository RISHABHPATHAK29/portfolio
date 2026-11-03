import React from 'react';
import { Briefcase, Calendar, CheckCircle2, Sparkles, Building2, TrendingUp, Layers } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Experience() {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="py-24 relative">
      {/* Background glow accent */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-cyan-600/10 blur-[130px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold text-cyan-400 bg-cyan-950/70 border border-cyan-500/30 mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Career Milestones</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Work Experience & Industry Impact
          </h2>
          <p className="mt-4 text-base text-slate-400">
            From Cloud Architecture to Data & AI Engineering at Noventiq Global AI Solution, alongside high-caliber internships at Microsoft and MathWorks.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Central Vertical Line (hidden on mobile, visible on desktop) */}
          <div className="hidden md:block absolute left-1/2 top-4 bottom-4 -translate-x-1/2 w-0.5 bg-gradient-to-b from-cyan-500 via-purple-500 to-transparent opacity-30" />

          <div className="space-y-10">
            {experience.map((item, index) => {
              const isEven = index % 2 === 0;
              const isCurrent = item.period.toLowerCase().includes('present');

              return (
                <div 
                  key={index}
                  className={`relative flex flex-col md:flex-row items-center ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Node Point (Desktop) */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-[#07090e] border-2 border-cyan-400 items-center justify-center z-10 shadow-lg shadow-cyan-500/20">
                    {isCurrent ? (
                      <span className="w-3 h-3 rounded-full bg-cyan-400 animate-ping"></span>
                    ) : (
                      <span className="w-2.5 h-2.5 rounded-full bg-purple-400"></span>
                    )}
                  </div>

                  {/* Card Content */}
                  <div className={`w-full md:w-[46%] ${isEven ? 'md:pl-6' : 'md:pr-6'}`}>
                    <div className={`glass-panel rounded-2xl p-6 sm:p-7 relative overflow-hidden transition-all duration-300 hover:scale-[1.01] ${
                      isCurrent 
                        ? 'border-cyan-500/40 shadow-xl shadow-cyan-950/30 bg-gradient-to-br from-[#0c121f] to-[#080c14]' 
                        : 'border-white/10'
                    }`}>
                      
                      {/* Top Bar with Badge & Period */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                        <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-semibold rounded-full ${
                          isCurrent 
                            ? 'bg-cyan-950 text-cyan-300 border border-cyan-500/40' 
                            : 'bg-purple-950/80 text-purple-300 border border-purple-500/30'
                        }`}>
                          {isCurrent && <Sparkles className="w-3 h-3 text-cyan-400" />}
                          {item.badge}
                        </span>

                        <span className="inline-flex items-center gap-1.5 text-xs text-slate-400 font-mono">
                          <Calendar className="w-3.5 h-3.5 text-slate-500" />
                          {item.period}
                        </span>
                      </div>

                      {/* Role & Company */}
                      <div>
                        <h3 className="text-xl font-bold text-white group-hover:text-cyan-400">
                          {item.role}
                        </h3>
                        <div className="flex items-center gap-2 text-sm text-cyan-300/90 font-medium mt-1">
                          <Building2 className="w-4 h-4 text-cyan-400" />
                          <span>{item.company}</span>
                          <span className="text-slate-600">&bull;</span>
                          <span className="text-slate-400 text-xs">{item.type}</span>
                        </div>
                      </div>

                      {/* Bullet Highlights */}
                      <ul className="mt-4 space-y-2 text-sm text-slate-300">
                        {item.highlights.map((h, i) => (
                          <li key={i} className="flex items-start gap-2.5 leading-relaxed">
                            <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Skills Tags */}
                      <div className="mt-5 pt-4 border-t border-white/10 flex flex-wrap gap-1.5">
                        {item.skills.map((skill, si) => (
                          <span 
                            key={si}
                            className="text-xs px-2.5 py-1 rounded-md bg-white/5 text-slate-300 border border-white/5 font-mono"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>

                    </div>
                  </div>

                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
