import React from 'react';
import { ArrowUp, Terminal, Heart } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Footer() {
  const { personal } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/10 bg-[#06080d] py-12 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Logo & Info */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-cyan-950 border border-cyan-500/30 flex items-center justify-center text-cyan-400 font-mono">
              <Terminal className="w-4 h-4" />
            </div>
            <div>
              <span className="font-bold text-white text-sm">
                {personal.name}
              </span>
              <span className="block text-[11px] text-slate-500">
                Data & AI Engineer &bull; Noventiq Global AI Solution
              </span>
            </div>
          </div>

          {/* Center message */}
          <div className="text-center text-slate-500">
            Designed & Engineered with React, Vite & Tailwind CSS
          </div>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-cyan-400 transition-colors font-mono"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="mt-8 pt-6 border-t border-white/5 text-center text-slate-600 text-[11px]">
          &copy; {new Date().getFullYear()} Rishabh Kumar Pathak. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
