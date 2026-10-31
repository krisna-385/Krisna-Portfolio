import React, { useState } from 'react';
import { RESEARCH_LINKS } from '../data/portfolioData';
import { GraduationCap, ExternalLink, AlertCircle, Copy, Check, Linkedin, Layers, BookOpen } from 'lucide-react';

export const ResearchSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'researchgate' | 'linkedin'>('all');
  const [copiedLink, setCopiedLink] = useState<string | null>(null);

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedLink(id);
    setTimeout(() => setCopiedLink(null), 2000);
  };

  const navTabs = [
    { id: 'all', label: 'All Channels (Overview)' },
    { id: 'researchgate', label: 'ResearchGate (Academic Profile)' },
    { id: 'linkedin', label: 'LinkedIn (Professional Network)' },
  ];

  return (
    <section id="research" className="py-24 border-t border-purple-900/30 bg-[#0a0618] relative">
      {/* Subtle ambient lighting */}
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-900/10 blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-8">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-amber-300 font-sans mb-3">
            <GraduationCap className="w-4 h-4 text-amber-400" />
            <span>Scholarship & Outreach</span>
          </div>
          <h2 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-100 tracking-tight">
            Research & Links
          </h2>
          <p className="mt-3 font-serif-literary text-xl sm:text-2xl text-purple-200/90 italic">
            &ldquo;Inquiries into cultural memory, linguistics, and speculative humanities.&rdquo;
          </p>
          <p className="mt-3 text-slate-300 font-sans text-sm sm:text-base leading-relaxed max-w-2xl">
            Explore academic writings, ongoing philosophical inquiries, and professional communication channels connected with author and researcher Keerthigan Krsnan Gopikrishnan.
          </p>
        </div>

        {/* Dedicated Research Section Navigation Bar */}
        <div className="mb-10 p-2 rounded-xl bg-[#120a28]/80 border border-purple-800/40 backdrop-blur-md flex flex-wrap items-center justify-between gap-3 shadow-lg">
          <div className="flex flex-wrap items-center gap-1.5" role="tablist" aria-label="Research Links Navigation">
            {navTabs.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  role="tab"
                  aria-selected={isActive}
                  className={`px-3.5 py-2 text-xs font-medium rounded-lg transition-all flex items-center gap-2 cursor-pointer ${
                    isActive
                      ? 'bg-amber-300 text-slate-950 font-bold shadow-md'
                      : 'text-purple-200 hover:text-white hover:bg-purple-950/60'
                  }`}
                >
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          {activeTab !== 'all' && (
            <button
              onClick={() => setActiveTab('all')}
              className="text-xs text-amber-300 hover:text-amber-200 underline px-2 py-1"
            >
              Show all channels
            </button>
          )}
        </div>

        {/* 2-Column Cards Grid */}
        <div
          className={`grid gap-8 ${
            activeTab === 'all'
              ? 'grid-cols-1 md:grid-cols-2'
              : 'grid-cols-1 max-w-2xl mx-auto'
          }`}
        >
          {/* Card 1: ResearchGate */}
          {(activeTab === 'all' || activeTab === 'researchgate') && (
            <div className="rounded-2xl bg-[#120a28] border border-purple-800/40 p-7 sm:p-8 flex flex-col justify-between hover:border-purple-500/50 hover:bg-[#160d33] transition-all shadow-xl shadow-purple-950/30">
              <div>
                <div className="flex items-center justify-between text-xs text-purple-300/80 font-sans mb-3">
                  <span className="text-amber-300 font-semibold uppercase tracking-wider text-[11px]">
                    Academic Profile
                  </span>
                  <span className="font-mono text-[11px] text-slate-400">ResearchGate</span>
                </div>

                <h3 className="font-cinzel text-2xl font-bold text-slate-100 mb-1">
                  ResearchGate
                </h3>
                <p className="text-xs text-purple-300 font-serif-literary italic">
                  Scholar: Keerthigan Krsnan Gopikrishnan
                </p>

                <p className="mt-4 text-xs sm:text-sm text-slate-300 font-sans leading-relaxed">
                  Scientific and humanist research papers exploring linguistic survival, classical philosophical systems, and the preservation of cultural memory across speculative eras.
                </p>

                <div className="mt-5 p-3 rounded-lg bg-[#180e36] border border-purple-800/30 text-xs font-mono text-purple-200 break-all">
                  https://www.researchgate.net/profile/Keerthigan-Krsnan-Gopikrishnan
                </div>
              </div>

              <div className="mt-8 pt-5 border-t border-purple-900/40 flex items-center justify-between">
                <button
                  onClick={() => handleCopy('https://www.researchgate.net/profile/Keerthigan-Krsnan-Gopikrishnan', 'rg')}
                  className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-white transition-colors cursor-pointer"
                >
                  {copiedLink === 'rg' ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Link</span>
                    </>
                  )}
                </button>

                <a
                  href="https://www.researchgate.net/profile/Keerthigan-Krsnan-Gopikrishnan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-slate-950 bg-amber-300 hover:bg-amber-200 rounded transition-colors"
                >
                  <span>Visit Profile</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          )}

          {/* Card 2: LinkedIn with clear notice */}
          {(activeTab === 'all' || activeTab === 'linkedin') && (
            <div className="rounded-2xl bg-[#120a28] border border-purple-800/40 p-7 sm:p-8 flex flex-col justify-between hover:border-purple-500/50 hover:bg-[#160d33] transition-all shadow-xl shadow-purple-950/30">
              <div>
                <div className="flex items-center justify-between text-xs text-purple-300/80 font-sans mb-3">
                  <span className="text-amber-300 font-semibold uppercase tracking-wider text-[11px]">
                    Professional Network
                  </span>
                  <span className="font-mono text-[11px] text-slate-400">LinkedIn</span>
                </div>

                <h3 className="font-cinzel text-2xl font-bold text-slate-100 mb-1 flex items-center gap-2">
                  <span>LinkedIn</span>
                  <Linkedin className="w-5 h-5 text-sky-400" />
                </h3>
                <p className="text-xs text-purple-300 font-serif-literary italic">
                  Official Profile: Keerthigan Krsnan Gopikrishnan
                </p>

                <p className="mt-4 text-xs sm:text-sm text-slate-300 font-sans leading-relaxed">
                  Connect for professional updates, literary publishing discourse, worldbuilding inquiries, and academic collaborations.
                </p>

                <div className="mt-5 p-3 rounded-lg bg-[#180e36] border border-purple-800/30 text-xs font-mono text-purple-200 break-all">
                  https://www.linkedin.com/in/keerthigankrsnan/
                </div>
              </div>

              <div className="mt-8 pt-5 border-t border-purple-900/40 flex items-center justify-between">
                <button
                  onClick={() => handleCopy('https://www.linkedin.com/in/keerthigankrsnan/', 'li')}
                  className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-white transition-colors cursor-pointer"
                >
                  {copiedLink === 'li' ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy URL</span>
                    </>
                  )}
                </button>

                <a
                  href="https://www.linkedin.com/in/keerthigankrsnan/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-slate-950 bg-amber-300 hover:bg-amber-200 rounded transition-colors"
                >
                  <span>Open LinkedIn</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
