import React, { useState } from 'react';
import { 
  Award, 
  CheckCircle2, 
  Sparkles, 
  ShieldCheck, 
  Trophy, 
  Copy, 
  Check, 
  ExternalLink,
  Code,
  Database,
  Brain,
  Shield,
  Lock
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Certifications() {
  const { certifications } = portfolioData;
  const [activeFilter, setActiveFilter] = useState('All');
  const [copiedId, setCopiedId] = useState(null);

  const categories = ['All', 'Microsoft', 'Credly', 'Noventiq', 'MathWorks'];

  const filteredCerts = activeFilter === 'All'
    ? certifications
    : certifications.filter(c => {
        if (activeFilter === 'Microsoft') return c.issuerCategory === 'Microsoft' || c.msLearnUrl;
        if (activeFilter === 'Credly') return c.issuerCategory === 'Credly' || c.credlyUrl;
        return c.issuerCategory.toLowerCase() === activeFilter.toLowerCase();
      });

  const handleCopy = (id, text) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2500);
  };

  const iconMap = {
    'ShieldCheck': ShieldCheck,
    'Database': Database,
    'Code': Code,
    'Brain': Brain,
    'Award': Award,
    'Shield': Shield,
    'Lock': Lock,
    'CheckCircle': CheckCircle2,
    'CheckCircle2': CheckCircle2
  };

  return (
    <section id="certifications" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold text-cyan-400 bg-cyan-950/70 border border-cyan-500/30 mb-3">
              <Trophy className="w-3.5 h-3.5" />
              <span>Verified Credentials</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Licenses & Professional Certifications
            </h2>
            <p className="mt-2 text-base text-slate-400 max-w-xl">
              Official credentials issued by Microsoft, Credly, Noventiq Global AI Solutions, and MathWorks.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-xl bg-[#0e1422] border border-white/10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                  activeFilter === cat
                    ? 'bg-cyan-500 text-black shadow-sm'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Microsoft Learn Live Banner */}
        <div className="mb-10 p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-blue-950/60 via-[#0b1324] to-cyan-950/50 border border-blue-500/30 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl">
          <div className="flex items-center gap-3 text-center sm:text-left">
            <div className="w-11 h-11 rounded-xl bg-blue-500/20 text-cyan-400 flex items-center justify-center shrink-0 border border-blue-400/30">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <div className="text-sm font-bold text-white flex items-center gap-2 justify-center sm:justify-start">
                <span>Microsoft Learn Official Transcript</span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/30">460+ Achievements</span>
              </div>
              <p className="text-xs text-slate-300 mt-0.5">
                Spanning GH-300 (GitHub Copilot), AI-103 (Azure AI Agents & Foundry), AB-100 (Agentic AI Architect), AZ-900 (Azure Fundamentals), and Microsoft Fabric.
              </p>
            </div>
          </div>

          <a
            href={portfolioData.personal.msLearn}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold text-black bg-cyan-400 hover:bg-cyan-300 shadow-md shadow-cyan-500/20 shrink-0 transition-all hover:scale-105"
          >
            <span>View Microsoft Learn Profile</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCerts.map((cert) => {
            const IconComp = iconMap[cert.icon] || Award;
            const isTop = cert.isTopBadge;
            const isFeatured = cert.featured;
            const hasCredId = Boolean(cert.credentialId);

            return (
              <div
                key={cert.id}
                className={`glass-panel rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 ${
                  isTop
                    ? 'border-amber-500/50 bg-gradient-to-br from-[#1c1407] via-[#0d0f1a] to-[#070a12] shadow-2xl shadow-amber-950/40 md:col-span-2 lg:col-span-2'
                    : isFeatured 
                      ? 'border-cyan-500/40 bg-gradient-to-br from-[#0c1424] via-[#090e1a] to-[#070a12] shadow-xl shadow-cyan-950/30' 
                      : 'border-white/10 hover:border-cyan-500/30'
                }`}
              >
                <div>
                  {/* Top Badge & Issuer */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                      isTop 
                        ? 'bg-amber-950 border border-amber-500/40 text-amber-400' 
                        : 'bg-cyan-950/80 border border-cyan-500/30 text-cyan-400'
                    }`}>
                      <IconComp className="w-5 h-5" />
                    </div>
                    
                    <div className="flex items-center gap-2">
                      {isTop && (
                        <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-amber-500 text-black shadow-sm flex items-center gap-1">
                          <Sparkles className="w-3 h-3 text-black" />
                          Top Milestone
                        </span>
                      )}
                      <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${
                        isTop 
                          ? 'bg-amber-950/90 text-amber-300 border border-amber-500/30' 
                          : 'bg-purple-950/80 text-purple-300 border border-purple-500/30'
                      }`}>
                        {cert.badge}
                      </span>
                    </div>
                  </div>

                  {/* Title & Issuer */}
                  <h3 className={`font-bold text-white mb-1 leading-snug ${isTop ? 'text-xl sm:text-2xl' : 'text-lg'}`}>
                    {cert.title}
                  </h3>
                  <div className="flex items-center justify-between text-xs font-mono text-cyan-400/90 mb-4">
                    <span className={isTop ? 'text-amber-300 font-semibold' : ''}>{cert.issuer}</span>
                    <span className="text-slate-500">{cert.issueDate}</span>
                  </div>

                  {/* Highlights */}
                  <ul className="space-y-2 text-xs text-slate-300">
                    {cert.highlights.map((h, hi) => (
                      <li key={hi} className="flex items-start gap-2 leading-relaxed">
                        <CheckCircle2 className={`w-3.5 h-3.5 shrink-0 mt-0.5 ${isTop ? 'text-amber-400' : 'text-cyan-400'}`} />
                        <span dangerouslySetInnerHTML={{ __html: h }} />
                      </li>
                    ))}
                  </ul>

                  {/* Covered Skills */}
                  {cert.skillsCovered && (
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {cert.skillsCovered.map((s, si) => (
                        <span key={si} className={`text-[10px] font-mono px-2 py-0.5 rounded ${
                          isTop 
                            ? 'bg-amber-950/70 text-amber-200 border border-amber-500/30' 
                            : 'bg-cyan-950 text-cyan-300 border border-cyan-500/30'
                        }`}>
                          {s}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {/* Bottom Credential ID or Links Box */}
                <div className="mt-5 pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    {cert.credlyUrl && (
                      <a
                        href={cert.credlyUrl}
                        target="_blank"
                        rel="noreferrer"
                        className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                          isTop 
                            ? 'bg-amber-400 text-black hover:bg-amber-300 shadow-md shadow-amber-500/20' 
                            : 'bg-amber-950/80 text-amber-300 border border-amber-500/30 hover:bg-amber-900/40'
                        }`}
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        <span>Credly</span>
                      </a>
                    )}

                    {cert.msLearnUrl && (
                      <a
                        href={cert.msLearnUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-cyan-950 text-cyan-300 border border-cyan-500/30 hover:bg-cyan-900/40 transition-colors"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        <span>Microsoft Learn</span>
                      </a>
                    )}

                    {!cert.credlyUrl && !cert.msLearnUrl && (
                      <span className="text-[11px] font-mono text-slate-500">Verified Credential</span>
                    )}
                  </div>

                  {hasCredId && (
                    <div className="flex items-center gap-2 p-1.5 px-2.5 rounded-lg bg-[#070b13] border border-white/5 text-[11px] font-mono text-slate-400">
                      <span className="text-slate-500 text-[10px]">ID: </span>
                      <span className="text-slate-300 select-all text-[10px] truncate max-w-[150px]">{cert.credentialId}</span>
                      <button
                        onClick={() => handleCopy(cert.id, cert.credentialId)}
                        className="p-1 rounded text-slate-400 hover:text-cyan-400 transition-colors shrink-0"
                        title="Copy Credential ID"
                      >
                        {copiedId === cert.id ? (
                          <Check className="w-3 h-3 text-emerald-400" />
                        ) : (
                          <Copy className="w-3 h-3" />
                        )}
                      </button>
                    </div>
                  )}
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
