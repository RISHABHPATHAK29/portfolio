import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Github, 
  Send, 
  Check, 
  Copy, 
  MessageSquare,
  Sparkles
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Contact() {
  const { personal } = portfolioData;
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSent, setIsSent] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setIsSent(true);
    setTimeout(() => {
      setIsSent(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className="py-24 relative">
      {/* Background Glow */}
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-600/10 blur-[140px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold text-cyan-400 bg-cyan-950/70 border border-cyan-500/30 mb-3">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Connect & Collaborate</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Let's Build Something Exceptional
          </h2>
          <p className="mt-4 text-base text-slate-400">
            Open for high-impact Data & AI discussions, enterprise cloud architecture projects, or technical collaborations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Contacts */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Email Card with Copy button */}
            <div className="glass-panel rounded-2xl p-6 transition-all border-white/10 hover:border-cyan-500/40">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-cyan-950 flex items-center justify-center text-cyan-400">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-mono">Email Address</div>
                    <a 
                      href={`mailto:${personal.email}`}
                      className="text-sm font-semibold text-white hover:text-cyan-400 transition-colors"
                    >
                      {personal.email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="p-2 rounded-lg bg-white/5 hover:bg-cyan-500/20 text-slate-400 hover:text-cyan-400 transition-colors"
                  title="Copy email"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
              {copied && (
                <div className="mt-2 text-xs text-emerald-400 font-mono">
                  &bull; Email address copied to clipboard!
                </div>
              )}
            </div>

            {/* Phone Card */}
            <div className="glass-panel rounded-2xl p-6 transition-all border-white/10 hover:border-cyan-500/40">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-purple-950 flex items-center justify-center text-purple-400">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-mono">Phone Number</div>
                  <a 
                    href={`tel:${personal.phone}`}
                    className="text-sm font-semibold text-white hover:text-cyan-400 transition-colors"
                  >
                    {personal.phone}
                  </a>
                </div>
              </div>
            </div>

            {/* Location Card */}
            <div className="glass-panel rounded-2xl p-6 transition-all border-white/10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-950 flex items-center justify-center text-emerald-400">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-mono">Location</div>
                  <div className="text-sm font-semibold text-white">
                    {personal.location}
                  </div>
                </div>
              </div>
            </div>

            {/* Social Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <a
                href={personal.msLearn}
                target="_blank"
                rel="noreferrer"
                className="glass-panel rounded-2xl p-4 flex flex-col justify-between hover:border-cyan-500/40 group transition-all"
              >
                <div className="w-8 h-8 rounded-lg bg-blue-950 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform mb-2">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] text-slate-400 font-mono">460+ Badges</div>
                  <div className="text-xs font-bold text-white group-hover:text-cyan-400">MS Learn</div>
                </div>
              </a>

              <a
                href={personal.credly}
                target="_blank"
                rel="noreferrer"
                className="glass-panel rounded-2xl p-4 flex flex-col justify-between hover:border-amber-500/40 group transition-all"
              >
                <div className="w-8 h-8 rounded-lg bg-amber-950 flex items-center justify-center text-amber-400 group-hover:scale-110 transition-transform mb-2">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] text-slate-400 font-mono">Frontier AI</div>
                  <div className="text-xs font-bold text-white group-hover:text-amber-400">Credly Badges</div>
                </div>
              </a>

              <a
                href={personal.linkedin}
                target="_blank"
                rel="noreferrer"
                className="glass-panel rounded-2xl p-4 flex flex-col justify-between hover:border-cyan-500/40 group transition-all"
              >
                <div className="w-8 h-8 rounded-lg bg-blue-950 flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform mb-2">
                  <Linkedin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] text-slate-400 font-mono">Connect</div>
                  <div className="text-xs font-bold text-white group-hover:text-cyan-400">LinkedIn</div>
                </div>
              </a>

              <a
                href={personal.github}
                target="_blank"
                rel="noreferrer"
                className="glass-panel rounded-2xl p-4 flex flex-col justify-between hover:border-cyan-500/40 group transition-all"
              >
                <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center text-slate-200 group-hover:scale-110 transition-transform mb-2">
                  <Github className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] text-slate-400 font-mono">Repositories</div>
                  <div className="text-xs font-bold text-white group-hover:text-cyan-400">GitHub</div>
                </div>
              </a>
            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel rounded-2xl p-6 sm:p-8 border-white/10">
              <h3 className="text-xl font-bold text-white mb-2">
                Send a Message
              </h3>
              <p className="text-xs text-slate-400 mb-6">
                Fill out the form below to initiate an inquiry or project proposal.
              </p>

              {isSent ? (
                <div className="p-8 rounded-xl bg-cyan-950/40 border border-cyan-500/40 text-center space-y-2">
                  <div className="w-12 h-12 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center mx-auto">
                    <Check className="w-6 h-6" />
                  </div>
                  <h4 className="text-base font-bold text-white">Message Sent Successfully!</h4>
                  <p className="text-xs text-slate-300">
                    Thank you, {formData.name || 'there'}! I will get back to you shortly at {formData.email || 'your email'}.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-slate-300 mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full px-4 py-2.5 rounded-xl bg-[#090d16] border border-white/10 focus:border-cyan-400 focus:outline-none text-sm text-white placeholder-slate-600 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-slate-300 mb-1.5">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@example.com"
                        className="w-full px-4 py-2.5 rounded-xl bg-[#090d16] border border-white/10 focus:border-cyan-400 focus:outline-none text-sm text-white placeholder-slate-600 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1.5">
                      Subject
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="Data & AI Project / Collaboration"
                      className="w-full px-4 py-2.5 rounded-xl bg-[#090d16] border border-white/10 focus:border-cyan-400 focus:outline-none text-sm text-white placeholder-slate-600 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1.5">
                      Message *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell me about your project, timeline, or engineering opportunity..."
                      className="w-full px-4 py-2.5 rounded-xl bg-[#090d16] border border-white/10 focus:border-cyan-400 focus:outline-none text-sm text-white placeholder-slate-600 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 px-6 rounded-xl font-semibold text-sm bg-gradient-to-r from-cyan-400 to-teal-400 text-black hover:from-cyan-300 hover:to-teal-300 shadow-md shadow-cyan-500/25 transition-all flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
