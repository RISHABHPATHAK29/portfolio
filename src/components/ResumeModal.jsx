import React, { useEffect } from 'react';
import { X, Printer, Mail, Phone, MapPin, Linkedin, Github, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function ResumeModal({ isOpen, onClose }) {
  const { personal, experience, projects, education, certifications, skillCategories } = portfolioData;

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto">
      
      {/* Modal Container */}
      <div className="relative w-full max-w-4xl max-h-[92vh] flex flex-col bg-[#0b0f19] border border-white/20 rounded-2xl shadow-2xl overflow-hidden my-auto">
        
        {/* Top Control Bar */}
        <div className="px-6 py-4 bg-[#0e1424] border-b border-white/10 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2">
            <span className="text-sm font-bold text-white font-mono">
              Curriculum Vitae &bull; {personal.name}
            </span>
            <span className="text-xs px-2 py-0.5 rounded bg-cyan-950 text-cyan-300 border border-cyan-500/30">
              Verified & Updated
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-cyan-500 text-black hover:bg-cyan-400 transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-white/10 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Body */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-8 text-slate-200 text-sm leading-relaxed" id="printable-resume">
          
          {/* Header */}
          <div className="border-b border-white/10 pb-6">
            <h1 className="text-3xl font-extrabold text-white tracking-tight uppercase">
              {personal.name}
            </h1>
            <p className="text-base font-semibold text-cyan-400 mt-1">
              Data & AI Engineer &bull; Noventiq Global AI Solutions (Employee ID: {personal.employeeId})
            </p>

            <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs text-slate-300 mt-3 font-mono">
              <span className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-cyan-400" />
                {personal.email}
              </span>
              <span className="flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-cyan-400" />
                {personal.phone}
              </span>
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                {personal.location}
              </span>
              <span className="flex items-center gap-1.5">
                <Linkedin className="w-3.5 h-3.5 text-cyan-400" />
                linkedin.com/in/rishabh-pathak-644ab221a
              </span>
              <span className="flex items-center gap-1.5">
                <Github className="w-3.5 h-3.5 text-cyan-400" />
                github.com/RISHABHPATHAK29
              </span>
              <span className="flex items-center gap-1.5">
                <span className="text-cyan-400 font-bold">&bull;</span>
                learn.microsoft.com/users/rishabhpathak-7234
              </span>
            </div>
          </div>

          {/* Professional Summary */}
          <div>
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 border-b border-cyan-500/20 pb-1 mb-2">
              Professional Summary
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {personal.summary}
            </p>
          </div>

          {/* Work Experience */}
          <div>
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 border-b border-cyan-500/20 pb-1 mb-4">
              Work Experience
            </h2>
            <div className="space-y-5">
              {experience.map((item, idx) => (
                <div key={idx} className="space-y-1.5">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <div>
                      <span className="font-bold text-white text-sm">{item.role}</span>
                      <span className="text-slate-400 text-xs font-medium"> &bull; {item.company}</span>
                    </div>
                    <span className="text-xs font-mono text-cyan-300">{item.period}</span>
                  </div>
                  <ul className="list-disc list-inside space-y-1 text-xs text-slate-300">
                    {item.highlights.map((h, hi) => (
                      <li key={hi} className="leading-relaxed">{h}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Verified Certifications & Licenses */}
          <div>
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 border-b border-cyan-500/20 pb-1 mb-3">
              Licenses & Verified Certifications
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-300">
              {certifications.map((cert, cidx) => (
                <div key={cidx} className="p-3 rounded-lg bg-white/5 border border-white/5">
                  <div className="font-bold text-white text-xs">{cert.title}</div>
                  <div className="text-[11px] text-cyan-300 font-mono mt-0.5">{cert.issuer} &bull; {cert.issueDate}</div>
                  {cert.credentialId && (
                    <div className="text-[10px] text-slate-400 font-mono mt-1 select-all truncate">
                      ID: {cert.credentialId}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Key Projects */}
          <div>
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 border-b border-cyan-500/20 pb-1 mb-4">
              Key Technical Projects
            </h2>
            <div className="space-y-4">
              {projects.map((proj, pidx) => (
                <div key={pidx} className="space-y-1">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <span className="font-bold text-white text-xs sm:text-sm">
                      {proj.title} <span className="font-normal text-slate-400">({proj.tech.slice(0, 4).join(', ')})</span>
                    </span>
                    <span className="text-xs font-mono text-slate-400">{proj.year}</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {proj.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 border-b border-cyan-500/20 pb-1 mb-4">
              Education
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {education.map((edu, eidx) => (
                <div key={eidx} className="p-3 rounded-lg bg-white/5 border border-white/5">
                  <div className="font-bold text-white text-xs">{edu.degree}</div>
                  <div className="text-xs text-slate-300">{edu.institution}</div>
                  <div className="text-xs font-mono text-cyan-300 mt-1">{edu.period}</div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
