import React from 'react';
import { 
  ArrowRight, 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  Sparkles, 
  Cloud, 
  Brain, 
  Award, 
  FileDown, 
  CheckCircle2, 
  Terminal as TermIcon 
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Hero({ onOpenResume }) {
  const { personal, stats } = portfolioData;

  return (
    <section id="about" className="relative min-h-screen pt-32 pb-20 overflow-hidden flex items-center">
      {/* Background Glow Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-cyan-600/20 via-blue-700/15 to-purple-600/20 blur-[130px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/3 -right-40 w-96 h-96 bg-purple-600/10 blur-[120px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-10 -left-40 w-96 h-96 bg-cyan-600/10 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Intro */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Role & Achievement Badges */}
            <div className="inline-flex flex-wrap items-center justify-center lg:justify-start gap-2">
              <a
                href={personal.credly}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold rounded-full bg-amber-950/80 text-amber-300 border border-amber-500/40 hover:border-amber-400 hover:scale-105 transition-all shadow-md shadow-amber-950/40"
              >
                <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
                <span>Frontier Transformation Engineer (Credly)</span>
              </a>
              <span className="inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold rounded-full bg-cyan-950/80 text-cyan-300 border border-cyan-500/30">
                <img src="/noventiq-logo.png" alt="Noventiq" className="w-4 h-4 object-contain rounded bg-white/10 p-0.5" />
                <span>Data & AI Engineer @ Noventiq</span>
              </span>
              <a
                href={personal.msLearn}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold rounded-full bg-blue-950/80 text-blue-300 border border-blue-500/30 hover:bg-blue-900/40 transition-colors"
              >
                <Award className="w-3.5 h-3.5 text-blue-400" />
                <span>GH-300 &bull; AI-103 &bull; AB-100 &bull; AZ-900</span>
              </a>
            </div>

            {/* Main Headline */}
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
                Hi, I'm{' '}
                <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-purple-400 bg-clip-text text-transparent">
                  {personal.name}
                </span>
              </h1>
              <p className="mt-3 text-lg sm:text-xl font-medium text-slate-300">
                Data & AI Engineer &bull; Cloud Architect &bull; BIT Mesra Alum
              </p>
            </div>

            {/* Description */}
            <p className="text-slate-400 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0">
              I specialize in engineering production-grade <span className="text-cyan-300 font-medium">Artificial Intelligence pipelines</span>, agentic workflows, predictive Deep Learning models, and robust <span className="text-purple-300 font-medium">Microsoft Azure & Fabric cloud architectures</span>. Based at Noventiq Global AI Solutions, I combine enterprise infrastructure discipline with applied machine learning mastery.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm bg-gradient-to-r from-cyan-500 to-teal-500 text-black hover:from-cyan-400 hover:to-teal-400 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all hover:scale-[1.02]"
              >
                Explore Projects
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm bg-[#121826] hover:bg-[#1a2337] text-white border border-white/10 hover:border-cyan-500/40 transition-all hover:scale-[1.02]"
              >
                <FileDown className="w-4 h-4 text-cyan-400" />
                View Full Resume
              </button>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-sm text-slate-300 hover:text-white border border-white/5 hover:border-white/20 transition-all"
              >
                Get In Touch
              </a>
            </div>

            {/* Social Links & Direct Contacts */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-4 border-t border-white/10 text-slate-400 text-sm">
              <a
                href={personal.msLearn}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 hover:text-cyan-300 font-semibold text-cyan-400 transition-colors"
              >
                <Award className="w-4 h-4 text-cyan-400" />
                <span>Microsoft Learn</span>
              </a>
              <span className="text-slate-600">&bull;</span>
              <a
                href={personal.credly}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 hover:text-amber-300 font-semibold text-amber-400/90 transition-colors"
              >
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span>Credly</span>
              </a>
              <span className="text-slate-600">&bull;</span>
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 hover:text-cyan-400 transition-colors"
              >
                <Linkedin className="w-4 h-4 text-blue-400" />
                <span>LinkedIn</span>
              </a>
              <span className="text-slate-600">&bull;</span>
              <a
                href={personal.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 hover:text-cyan-400 transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>GitHub</span>
              </a>
              <span className="text-slate-600">&bull;</span>
              <a
                href={`mailto:${personal.email}`}
                className="flex items-center gap-2 hover:text-cyan-400 transition-colors"
              >
                <Mail className="w-4 h-4 text-emerald-400" />
                <span>Email</span>
              </a>
              <span className="text-slate-600">&bull;</span>
              <a
                href={`tel:${personal.phone}`}
                className="flex items-center gap-2 hover:text-cyan-400 transition-colors"
              >
                <Phone className="w-4 h-4 text-amber-400" />
                <span>+91 6299474657</span>
              </a>
            </div>

          </div>

          {/* Right Column: Code Terminal Glass Widget */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer decorative glow */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-cyan-500/30 to-purple-500/30 blur-xl opacity-70 group-hover:opacity-100 transition-opacity" />

              <div className="relative rounded-2xl bg-[#0c101b] border border-white/15 shadow-2xl overflow-hidden font-mono text-xs">
                {/* Terminal Header */}
                <div className="px-4 py-3 bg-[#090d16] border-b border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block"></span>
                    <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block"></span>
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
                  </div>
                  <span className="text-slate-400 text-[11px] font-sans flex items-center gap-1.5">
                    <TermIcon className="w-3.5 h-3.5 text-cyan-400" />
                    rishabh_pipeline.py
                  </span>
                  <span className="text-[10px] text-cyan-400/70 bg-cyan-950/60 px-2 py-0.5 rounded border border-cyan-500/20">
                    Python 3.11
                  </span>
                </div>

                {/* Code Body */}
                <div className="p-4 sm:p-5 space-y-2 text-slate-300 overflow-x-auto leading-relaxed">
                  <div>
                    <span className="text-purple-400">from</span> <span className="text-cyan-300">enterprise.ai</span> <span className="text-purple-400">import</span> NoventiqModel, AzurePipeline
                  </div>
                  <div>
                    <span className="text-purple-400">from</span> <span className="text-cyan-300">tensorflow.keras</span> <span className="text-purple-400">import</span> LSTM, Dense
                  </div>
                  <div className="text-slate-600"># Engineering next-gen intelligent cloud systems</div>
                  <div>
                    <span className="text-blue-400">class</span> <span className="text-amber-300">DataAndAIEngineer</span>:
                  </div>
                  <div className="pl-4">
                    <span className="text-blue-400">def</span> <span className="text-amber-200">__init__</span>(self):
                  </div>
                  <div className="pl-8 text-slate-400">
                    self.name = <span className="text-emerald-300">"Rishabh Kumar Pathak"</span><br />
                    self.org = <span className="text-emerald-300">"Noventiq Global AI Solutions"</span><br />
                    self.role = <span className="text-emerald-300">"Data and AI Engineer"</span><br />
                    self.stack = [<span className="text-amber-200">"Agentic AI"</span>, <span className="text-amber-200">"MS Fabric"</span>, <span className="text-amber-200">"Azure AI"</span>]
                  </div>
                  <div className="pl-4 pt-1">
                    <span className="text-blue-400">def</span> <span className="text-amber-200">deploy_predictive_system</span>(self):
                  </div>
                  <div className="pl-8 text-cyan-400">
                    model = LSTM(units=128, return_sequences=True)<br />
                    pipeline = AzurePipeline.build(model=model)<br />
                    <span className="text-purple-400">return</span> pipeline.deploy(target=<span className="text-emerald-300">"production"</span>)
                  </div>
                </div>

                {/* Terminal status bar */}
                <div className="px-4 py-2.5 bg-[#090d16] border-t border-white/10 flex items-center justify-between text-[11px] text-slate-400">
                  <span className="flex items-center gap-1.5 text-emerald-400">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block animate-ping"></span>
                    Ready for deployment
                  </span>
                  <span className="text-slate-500">BIT Mesra &bull; 2025</span>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Quick Highlights Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 pt-10 border-t border-white/10">
          {stats.map((stat, idx) => (
            <div key={idx} className="glass-panel rounded-xl p-4 sm:p-5 text-center transition-transform hover:-translate-y-1">
              <div className="text-lg sm:text-xl font-bold bg-gradient-to-r from-cyan-400 to-teal-300 bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm font-semibold text-slate-200 mt-1">
                {stat.label}
              </div>
              <div className="text-[11px] text-slate-400 mt-0.5">
                {stat.note}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
