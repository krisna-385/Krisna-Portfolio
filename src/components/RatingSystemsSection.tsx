import React, { useState } from 'react';
import { RATING_BRANCHES } from '../data/portfolioData';
import { ShieldCheck, BookOpen, Layers, CheckCircle2, Sparkles, HelpCircle, Columns, Filter, Hash } from 'lucide-react';

interface RatingSystemsSectionProps {
  highlightedCode?: string | null;
  onFilterByCode?: (code: string) => void;
}

export const RatingSystemsSection: React.FC<RatingSystemsSectionProps> = ({
  highlightedCode,
  onFilterByCode,
}) => {
  const [activeTab, setActiveTab] = useState<'all' | 'branch1' | 'branch2' | 'guidance' | 'decoder'>('all');
  const [selectedCode, setSelectedCode] = useState<string | null>(highlightedCode || null);

  // Dictionary of all rating codes for interactive decoding
  const codeDecoder: Record<
    string,
    {
      title: string;
      branch: string;
      type: string;
      breakdown: string;
      audience: string;
      works: string[];
    }
  > = {
    'FIC-ADVEN-MYS': {
      title: 'FIC-ADVEN-MYS',
      branch: 'Anuvashyaam Rating System (Vezhakam)',
      type: 'Series Genre Guidance',
      breakdown: 'FIC (Fiction) · ADVEN (Adventure) · MYS (Mystery)',
      audience: 'Exploration, ancient ruins, familial covenants, and the hidden girl who must stay unseen.',
      works: ['Thozhiyum Thozhanum, Vol. 1: The Quest of the Cousins'],
    },
    'FIC-ADVEN-HIE': {
      title: 'FIC-ADVEN-HIE',
      branch: 'Anuvashyaam Rating System (Vezhakam)',
      type: 'Series Genre Guidance',
      breakdown: 'FIC (Fiction) · ADVEN (Adventure) · HIE (Hierarchy / Dynastic)',
      audience: 'Intrigue of the Aazhiya household, palace politics, royal lineage, family, trust and dynastic mystery.',
      works: ['Thozhiyum Thozhanum, Vol. 2: The Great Dynasty'],
    },
    'YA13': {
      title: 'YA13',
      branch: 'Anuvashyaam Rating System',
      type: 'Censorship Rating (Themazhi)',
      breakdown: 'YA (Young Adult) · 13 (Minimum Recommended Age 13+)',
      audience: 'Moderate suspense, adventure stakes, accessible for early adolescent readers.',
      works: ['Themazhi Legacy Series'],
    },
    'YA15': {
      title: 'YA15',
      branch: 'Anuvashyaam Rating System',
      type: 'Censorship Rating (Themazhi)',
      breakdown: 'YA (Young Adult) · 15 (Mid-Teen Maturity 15+)',
      audience: 'Complex emotional dynamics, moral conflict, elevated suspense.',
      works: ['Themazhi Legacy Series'],
    },
    'YA17': {
      title: 'YA17',
      branch: 'Anuvashyaam Rating System',
      type: 'Censorship Rating (Themazhi)',
      breakdown: 'YA (Young Adult) · 17 (Advanced Maturity 17+)',
      audience: 'Intense dynastic friction, philosophical weight, high-stakes peril.',
      works: ['Themazhi Legacy Series'],
    },
    'TZH-13': {
      title: 'TZH-13',
      branch: 'Anuvashyaam Rating System',
      type: 'Censorship Rating (Theezh)',
      breakdown: 'TZH (Theezh Universe) · 13 (Maturity Tier 13+)',
      audience: 'Linguistic identity struggles, cultural memory preservation.',
      works: ['சாம்பல் சுடர் (Sambal Sudar)', 'ஆசீவகம் சுடர் (Aasevagam Sudar)'],
    },
    'TZH-15': {
      title: 'TZH-15',
      branch: 'Anuvashyaam Rating System',
      type: 'Censorship Rating (Theezh)',
      breakdown: 'TZH (Theezh Universe) · 15 (Maturity Tier 15+)',
      audience: 'Deep exploration of lost faith (Aasevagam/Ajivika), existential queries in the age of AI.',
      works: ['சாம்பல் சுடர் (Sambal Sudar)', 'ஆசீவகம் சுடர் (Aasevagam Sudar)'],
    },
    'SRS-15': {
      title: 'SRS-15',
      branch: 'Manidar Rating System',
      type: 'Censorship Rating (Salem Publication)',
      breakdown: 'SRS (Signature Rating Series) · 15 (Age 15+)',
      audience: 'Mature literary prose with nuanced personal, philosophical, and social themes.',
      works: ['Signature (Salem Publication)'],
    },
    'NN-16': {
      title: 'NN-16',
      branch: 'Manidar Rating System',
      type: 'Censorship Rating',
      breakdown: 'NN (Nimirmutha Nalikannam) · 16 (Age 16+)',
      audience: 'Dedicated rating tier for profound narrative focus and existential introspection.',
      works: ['Nimirmutha Nalikannam'],
    },
    'SRS-7': {
      title: 'SRS-7',
      branch: 'Manidar Rating System',
      type: 'Censorship Rating (Salem Publication)',
      breakdown: 'SRS (Signature Rating Series) · 7 (General / All Audiences 7+)',
      audience: 'Accessible narrative centered on soil, terroir, community memory, and evocative landscapes.',
      works: ['Terroir (Salem Publication)'],
    },
  };

  const branch1 = RATING_BRANCHES[0];
  const branch2 = RATING_BRANCHES[1];

  const handleBadgeClick = (code: string) => {
    setSelectedCode(code === selectedCode ? null : code);
  };

  const ratingTabs = [
    { id: 'all', label: 'All Branches (Overview)', icon: Columns },
    { id: 'branch1', label: 'Branch 1: Anuvashyaam', icon: ShieldCheck },
    { id: 'branch2', label: 'Branch 2: Manidar', icon: Sparkles },
    { id: 'guidance', label: 'Series Genre Guidance (Vezhakam)', icon: BookOpen },
    { id: 'decoder', label: 'Code Decoder Tool', icon: Hash },
  ];

  return (
    <section id="rating-systems" className="py-24 border-t border-purple-900/30 bg-[#0a0618] relative">
      {/* Background glow effects */}
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[500px] bg-purple-900/10 blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-8">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-amber-300 font-sans mb-3">
            <ShieldCheck className="w-4 h-4 text-amber-400" />
            <span>Taxonomy & Classification</span>
          </div>
          <h2 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-100 tracking-tight">
            Rating Systems & Genre Guidance
          </h2>
          <p className="mt-3 font-serif-literary text-xl sm:text-2xl text-purple-200/90 italic">
            &ldquo;Two separate branches, each with its own structure.&rdquo;
          </p>
          <p className="mt-3 text-slate-300 font-sans text-sm sm:text-base leading-relaxed max-w-2xl">
            Author Krisna developed two distinct taxonomies: <em>Anuvashyaam</em> for worldbuilt multi-volume epics and genre guidance (Vezhakam), and <em>Manidar</em> for publication-calibrated standards such as the Signature Rating Series (SRS).
          </p>
        </div>

        {/* Dedicated Rating Systems Section Navigation Bar */}
        <div className="mb-10 p-2 rounded-xl bg-[#120a28]/80 border border-purple-800/40 backdrop-blur-md flex flex-wrap items-center justify-between gap-3 shadow-lg">
          <div className="flex flex-wrap items-center gap-1.5" role="tablist" aria-label="Rating Systems Navigation">
            {ratingTabs.map((tab) => {
              const Icon = tab.icon;
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
                  <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-slate-950' : 'text-purple-400'}`} />
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
              Show both branches
            </button>
          )}
        </div>

        {/* Two Separate Branches Layout */}
        <div
          className={`grid gap-8 items-start ${
            activeTab === 'all'
              ? 'grid-cols-1 lg:grid-cols-2'
              : 'grid-cols-1 max-w-3xl mx-auto'
          }`}
        >
          {/* BRANCH 1: ANUVASHYAAM RATING SYSTEM */}
          {(activeTab === 'all' || activeTab === 'branch1' || activeTab === 'guidance') && (
            <div className="rounded-2xl bg-[#120a28] border border-purple-800/40 p-7 sm:p-9 shadow-xl shadow-purple-950/40 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-indigo-400 to-amber-300" />

              {/* Header */}
              <div className="mb-6">
                <span className="text-xs uppercase tracking-widest font-mono text-amber-300/90 font-semibold">
                  Branch 1
                </span>
                <h3 className="font-cinzel text-2xl font-bold text-slate-100 mt-1">
                  {branch1.name}
                </h3>
                <p className="font-serif-literary text-sm text-purple-300 italic mt-0.5">
                  {branch1.subtitle}
                </p>
                <p className="text-xs text-slate-300 font-sans mt-3 leading-relaxed">
                  {branch1.description}
                </p>
              </div>

              {/* 1. Censorship Rating */}
              {activeTab !== 'guidance' && (
                <div className="mb-8 p-5 rounded-xl bg-[#180e34]/70 border border-purple-800/30">
                  <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-200 font-sans mb-3">
                    <ShieldCheck className="w-4 h-4 text-amber-400" />
                    <span>Censorship Rating</span>
                  </div>

                  <div className="space-y-4">
                    {branch1.censorship.map((item) => (
                      <div
                        key={item.category}
                        className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 pb-3 border-b border-purple-900/30 last:border-0 last:pb-0"
                      >
                        <span className="text-xs font-medium text-slate-200 font-sans">
                          {item.category}:
                        </span>
                        <div className="flex flex-wrap items-center gap-2">
                          {item.ratings.map((badge) => (
                            <button
                              key={badge}
                              onClick={() => handleBadgeClick(badge)}
                              className={`px-3 py-1 rounded font-mono text-xs font-bold transition-all cursor-pointer ${
                                selectedCode === badge
                                  ? 'bg-amber-300 text-slate-950 shadow-md ring-2 ring-amber-400'
                                  : 'bg-purple-950/90 border border-purple-600/40 text-purple-200 hover:border-amber-400 hover:text-white'
                              }`}
                              title={`Click to decode ${badge}`}
                            >
                              {badge}
                            </button>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* 2. Genre Guidance (Series Genre Guidance, Vezhakam) */}
              <div className="p-5 rounded-xl bg-[#180e34]/70 border border-purple-800/30">
                <div className="flex items-center justify-between gap-2 text-xs font-semibold uppercase tracking-wider text-amber-200 font-sans mb-1">
                  <div className="flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-amber-400" />
                    <span>Genre Guidance (Series Genre Guidance, Vezhakam)</span>
                  </div>
                </div>
                <p className="text-[11px] text-purple-300/80 font-serif-literary italic mb-4">
                  Granular taxonomic breakdown for Thozhiyum Thozhanum volumes.
                </p>

                <div className="space-y-3.5">
                  {branch1.genreGuidance?.map((item) => (
                    <div
                      key={item.volume}
                      className="p-3 rounded-lg bg-[#110724] border border-purple-900/40 flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                    >
                      <div>
                        <p className="text-xs font-semibold text-slate-200 font-sans">
                          {item.volume}
                        </p>
                        <p className="text-[11px] text-purple-300/80 font-serif-literary italic mt-0.5">
                          {item.meaning}
                        </p>
                      </div>

                      <button
                        onClick={() => handleBadgeClick(item.code)}
                        className={`px-3 py-1.5 rounded font-mono text-xs font-bold transition-all whitespace-nowrap self-start sm:self-auto cursor-pointer ${
                          selectedCode === item.code
                            ? 'bg-amber-300 text-slate-950 ring-2 ring-amber-400 shadow-md'
                            : 'bg-amber-400/10 border border-amber-400/50 text-amber-300 hover:bg-amber-400/20'
                        }`}
                        title={`Click to decode ${item.code}`}
                      >
                        {item.code}
                      </button>
                    </div>
                  ))}
                </div>

                {branch1.notes && (
                  <p className="text-[11px] text-slate-400 font-sans italic mt-4 pt-3 border-t border-purple-900/30">
                    {branch1.notes}
                  </p>
                )}
              </div>
            </div>
          )}

          {/* BRANCH 2: MANIDAR RATING SYSTEM */}
          {(activeTab === 'all' || activeTab === 'branch2') && (
            <div className="rounded-2xl bg-[#120a28] border border-purple-800/40 p-7 sm:p-9 shadow-xl shadow-purple-950/40 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 via-rose-400 to-purple-500" />

              {/* Header */}
              <div className="mb-6">
                <span className="text-xs uppercase tracking-widest font-mono text-amber-300/90 font-semibold">
                  Branch 2
                </span>
                <h3 className="font-cinzel text-2xl font-bold text-slate-100 mt-1">
                  {branch2.name}
                </h3>
                <p className="font-serif-literary text-sm text-purple-300 italic mt-0.5">
                  {branch2.subtitle}
                </p>
                <p className="text-xs text-slate-300 font-sans mt-3 leading-relaxed">
                  {branch2.description}
                </p>
              </div>

              {/* Censorship Rating */}
              <div className="mb-8 p-5 rounded-xl bg-[#180e34]/70 border border-purple-800/30">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-200 font-sans mb-3">
                  <ShieldCheck className="w-4 h-4 text-amber-400" />
                  <span>Censorship Rating</span>
                </div>

                <div className="space-y-4">
                  {branch2.censorship.map((item) => (
                    <div
                      key={item.category}
                      className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 pb-3 border-b border-purple-900/30 last:border-0 last:pb-0"
                    >
                      <div>
                        <span className="text-xs font-semibold text-slate-200 font-sans block">
                          {item.category}:
                        </span>
                        <span className="text-[11px] text-slate-400 font-sans">
                          {item.description}
                        </span>
                      </div>

                      <div className="flex items-center gap-2 shrink-0">
                        {item.ratings.map((badge) => (
                          <button
                            key={badge}
                            onClick={() => handleBadgeClick(badge)}
                            className={`px-3 py-1 rounded font-mono text-xs font-bold transition-all cursor-pointer ${
                              selectedCode === badge
                                ? 'bg-amber-300 text-slate-950 shadow-md ring-2 ring-amber-400'
                                : 'bg-purple-950/90 border border-amber-500/40 text-amber-300 hover:border-amber-300 hover:text-white'
                            }`}
                            title={`Click to decode ${badge}`}
                          >
                            {badge}
                          </button>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Publisher Notes box */}
              <div className="p-5 rounded-xl bg-[#180e34]/70 border border-purple-800/30">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-300 font-sans mb-2">
                  <Sparkles className="w-4 h-4 text-amber-400" />
                  <span>Publisher Taxonomy Specification</span>
                </div>
                <p className="text-xs text-purple-200 font-sans leading-relaxed">
                  <strong className="text-amber-200">SRS</strong> stands for <strong>Signature Rating Series</strong>. Both <em>Signature</em> and <em>Terroir</em> are published by <strong>Salem Publication</strong>.
                </p>
                <div className="mt-4 pt-3 border-t border-purple-900/40 text-[11px] text-slate-400 font-sans leading-relaxed">
                  Manidar ratings provide publishers with concise numerical age markers (e.g. SRS-7, SRS-15) alongside standalone narrative calibrations like NN-16.
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Interactive Code Decoder Box */}
        {(activeTab === 'all' || activeTab === 'decoder') && (
          <div className="mt-12 p-6 sm:p-7 rounded-2xl bg-[#130b2e] border border-amber-400/30 shadow-2xl">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4 pb-4 border-b border-purple-900/40">
              <div className="flex items-center gap-2.5">
                <HelpCircle className="w-5 h-5 text-amber-400" />
                <div>
                  <h4 className="font-cinzel text-base font-bold text-slate-100">
                    Interactive Rating Code Decoder
                  </h4>
                  <p className="text-xs text-purple-300 font-sans">
                    Select any code badge to examine its syntactic breakdown and corresponding titles.
                  </p>
                </div>
              </div>

              {/* Quick Badges Strip */}
              <div className="flex flex-wrap items-center gap-1.5">
                {Object.keys(codeDecoder).map((code) => (
                  <button
                    key={code}
                    onClick={() => setSelectedCode(code)}
                    className={`px-2 py-0.5 rounded text-[11px] font-mono transition-colors cursor-pointer ${
                      selectedCode === code
                        ? 'bg-amber-300 text-slate-950 font-bold'
                        : 'bg-purple-950 text-slate-300 hover:text-amber-200 border border-purple-800/50'
                    }`}
                  >
                    {code}
                  </button>
                ))}
              </div>
            </div>

            {selectedCode && codeDecoder[selectedCode] ? (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-slate-400 font-sans">
                    Active Code
                  </span>
                  <p className="font-mono text-xl font-bold text-amber-300 mt-0.5">
                    {codeDecoder[selectedCode].title}
                  </p>
                  <p className="text-xs text-purple-300 font-sans mt-1">
                    {codeDecoder[selectedCode].branch}
                  </p>
                  <span className="inline-block mt-2 px-2 py-0.5 rounded bg-purple-950/80 border border-purple-700/50 text-[10px] text-purple-200 font-sans">
                    {codeDecoder[selectedCode].type}
                  </span>
                </div>

                <div>
                  <span className="text-[10px] uppercase tracking-wider text-slate-400 font-sans">
                    Anatomy Breakdown
                  </span>
                  <p className="text-xs font-semibold text-slate-200 mt-1">
                    {codeDecoder[selectedCode].breakdown}
                  </p>
                  <p className="text-xs text-slate-300/80 mt-2 font-serif-literary italic leading-relaxed">
                    {codeDecoder[selectedCode].audience}
                  </p>
                </div>

                <div>
                  <span className="text-[10px] uppercase tracking-wider text-slate-400 font-sans">
                    Associated Works
                  </span>
                  <ul className="mt-1 space-y-1 text-xs text-purple-200 font-serif-literary italic">
                    {codeDecoder[selectedCode].works.map((work) => (
                      <li key={work} className="flex items-start gap-1.5">
                        <span className="text-amber-400">›</span>
                        <span>{work}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href="#books"
                    className="mt-4 inline-flex items-center gap-1.5 text-xs text-amber-300 hover:text-amber-200 underline underline-offset-4"
                  >
                    Scroll to view book cards →
                  </a>
                </div>
              </div>
            ) : (
              <div className="py-4 text-center text-xs text-slate-400 font-sans italic">
                Click on any rating badge (such as <strong>FIC-ADVEN-MYS</strong>, <strong>SRS-15</strong>, <strong>YA17</strong>, or <strong>TZH-15</strong>) to view its full taxonomy breakdown.
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};
