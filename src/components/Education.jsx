import React from 'react';
import { GraduationCap, Calendar, Award, BookOpen } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Education() {
  const { education } = portfolioData;

  return (
    <section id="education" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold text-cyan-400 bg-cyan-950/70 border border-cyan-500/30 mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Education & Academic Honors
          </h2>
          <p className="mt-4 text-base text-slate-400">
            Solid foundations in Computer Applications and advanced computational systems from premier institutions.
          </p>
        </div>

        {/* Education Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {education.map((item, idx) => {
            const isCollege = idx < 2;

            return (
              <div
                key={idx}
                className={`glass-panel rounded-2xl p-6 sm:p-7 transition-all duration-300 hover:border-cyan-500/30 ${
                  isCollege ? 'border-white/15 bg-gradient-to-br from-[#0c1220] to-[#070a12]' : 'border-white/5 opacity-90'
                }`}
              >
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div>
                    <span className="text-xs font-mono text-cyan-400 font-semibold">
                      {item.period}
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold text-white mt-1">
                      {item.degree}
                    </h3>
                  </div>

                  <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-cyan-950 text-cyan-300 border border-cyan-500/30 shrink-0">
                    {item.score}
                  </span>
                </div>

                <div className="text-sm font-medium text-slate-300 mb-3 flex items-center gap-2">
                  <GraduationCap className="w-4 h-4 text-purple-400" />
                  <span>{item.institution}</span>
                </div>

                <p className="text-xs text-slate-400 leading-relaxed border-t border-white/5 pt-3">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
