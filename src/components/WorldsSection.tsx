import React, { useState } from 'react';
import { WORLDS_DATA } from '../data/portfolioData';
import { WorldInfo, WorldId } from '../types';
import { GitBranch, Sparkles, BookOpen, ArrowRight, Compass, Eye, Layers } from 'lucide-react';

interface WorldsSectionProps {
  onSelectWorldFilter: (filterId: string) => void;
}

export const WorldsSection: React.FC<WorldsSectionProps> = ({ onSelectWorldFilter }) => {
  const [selectedWorldTab, setSelectedWorldTab] = useState<'all' | WorldId>('all');

  const worldTabs: { id: 'all' | WorldId; label: string; count: string; subtitle: string }[] = [
    { id: 'all', label: 'All 3 Worlds', count: '9 Works', subtitle: 'AEON · Anuvashyaam · Manidar' },
    { id: 'aeon', label: 'AEON Timeline', count: '1 Chronicle', subtitle: 'Blood Throne and Stone' },
    { id: 'anuvashyaam', label: 'Anuvashyaam', count: '5 Works', subtitle: 'Themazhi · Vezhakam · Theezh' },
    { id: 'manidar', label: 'Manidar', count: '3 Works', subtitle: 'Salem Publication & Standalone' },
  ];

  const displayedWorlds = selectedWorldTab === 'all'
    ? WORLDS_DATA
    : WORLDS_DATA.filter((w) => w.id === selectedWorldTab);

  return (
    <section id="worlds" className="relative py-24 border-t border-purple-900/30 bg-[#0a0618]">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-purple-900/10 blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-indigo-950/20 blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-8">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-amber-300/90 font-sans mb-3">
            <GitBranch className="w-4 h-4 text-amber-400" />
            <span>Cosmology & Timelines</span>
          </div>
          <h2 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-100 tracking-tight">
            Worlds
          </h2>
          <p className="mt-3 font-serif-literary text-xl sm:text-2xl text-purple-200/90 italic">
            &ldquo;Imagined histories and connected timelines.&rdquo;
          </p>
          <p className="mt-3 text-slate-300 font-sans text-sm sm:text-base leading-relaxed max-w-2xl">
            The literary portfolio is organized into three overarching world spheres: the mythic <strong>AEON Timeline</strong>, the expansive worldbuilding sphere of <strong>Anuvashyaam</strong> (Themazhi, Vezhakam, and Theezh), and the calibrated publications of <strong>Manidar</strong> (Salem Publication and standalone chronicles).
          </p>
        </div>

        {/* Dedicated Worlds Section Navigation Bar */}
        <div className="mb-10 p-2 rounded-xl bg-[#120a28]/80 border border-purple-800/40 backdrop-blur-md flex flex-wrap items-center justify-between gap-3 shadow-lg">
          {/* Navigation Bar Tabs */}
          <div className="flex flex-wrap items-center gap-1.5" role="tablist" aria-label="Worlds Navigation">
            {worldTabs.map((tab) => {
              const isActive = selectedWorldTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setSelectedWorldTab(tab.id)}
                  role="tab"
                  aria-selected={isActive}
                  className={`px-3.5 py-2 text-xs font-medium rounded-lg transition-all flex items-center gap-2 cursor-pointer ${
                    isActive
                      ? 'bg-amber-300 text-slate-950 font-bold shadow-md'
                      : 'text-purple-200 hover:text-white hover:bg-purple-950/60'
                  }`}
                >
                  <Compass className={`w-3.5 h-3.5 ${isActive ? 'text-slate-950' : 'text-purple-400'}`} />
                  <span>{tab.label}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.2 rounded font-mono ${
                      isActive
                        ? 'bg-slate-900/20 text-slate-900'
                        : 'bg-purple-950/80 text-purple-300'
                    }`}
                  >
                    {tab.count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Quick Action in Section Nav */}
          <div className="flex items-center gap-2 text-xs text-purple-300">
            {selectedWorldTab !== 'all' && (
              <button
                onClick={() => setSelectedWorldTab('all')}
                className="text-xs text-amber-300 hover:text-amber-200 underline px-2 py-1 cursor-pointer"
              >
                Reset view
              </button>
            )}
            <a
              href="#books"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-purple-950/70 border border-purple-800/40 text-purple-200 hover:text-white hover:border-purple-600 text-xs transition-colors"
            >
              <Eye className="w-3.5 h-3.5 text-amber-300" />
              <span>Browse All in Books</span>
            </a>
          </div>
        </div>

        {/* 3 Core Worlds Grid */}
        <div
          className={`grid gap-8 ${
            selectedWorldTab === 'all'
              ? 'grid-cols-1 lg:grid-cols-3'
              : 'grid-cols-1 max-w-3xl mx-auto'
          }`}
        >
          {displayedWorlds.map((world: WorldInfo, index: number) => {
            const originalIndex = WORLDS_DATA.findIndex((w) => w.id === world.id);

            return (
              <div
                key={world.id}
                className="relative flex flex-col justify-between rounded-xl bg-[#120b29]/80 border border-purple-800/30 p-7 sm:p-8 hover:border-purple-500/50 hover:bg-[#160d33] transition-all duration-300 shadow-xl shadow-purple-950/30 group"
              >
                {/* Top gradient accent */}
                <div
                  className={`absolute top-0 left-0 right-0 h-1 rounded-t-xl bg-gradient-to-r ${
                    world.id === 'aeon'
                      ? 'from-amber-500 to-amber-300'
                      : world.id === 'anuvashyaam'
                      ? 'from-purple-500 via-indigo-400 to-amber-300'
                      : 'from-rose-500 via-amber-400 to-purple-400'
                  }`}
                />

                <div>
                  {/* Natural numbering and world tag */}
                  <div className="flex items-center justify-between text-xs font-mono text-purple-300/60 mb-4">
                    <span className="text-amber-400/80 font-cinzel font-semibold tracking-wider">
                      0{originalIndex + 1}. WORLD REALM
                    </span>
                    <span className="text-[11px] uppercase tracking-wider text-slate-400">
                      Primary Continuum
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-cinzel text-2xl font-bold text-slate-100 tracking-wide group-hover:text-amber-200 transition-colors">
                    {world.name}
                  </h3>

                  {/* Tagline & Description */}
                  <p className="mt-1 font-serif-literary text-xs sm:text-sm text-amber-300/80 italic">
                    {world.tagline}
                  </p>
                  <div className="mt-3 text-xs sm:text-sm text-slate-300/90 leading-relaxed border-l border-purple-500/30 pl-3">
                    {world.description}
                  </div>

                  {/* Sub-realms breakdown (e.g. Themazhi, Vezhakam, Theezh for Anuvashyaam) */}
                  <div className="mt-6 pt-5 border-t border-purple-900/30">
                    <div className="text-[11px] uppercase tracking-wider text-amber-300 font-sans mb-3 flex items-center gap-1.5 font-semibold">
                      <Layers className="w-3.5 h-3.5 text-amber-400" />
                      <span>Component Domains & Streams</span>
                    </div>
                    <div className="space-y-3">
                      {world.subRealms.map((sub) => (
                        <div
                          key={sub.id}
                          className="p-3 rounded-lg bg-[#180e36]/70 border border-purple-900/40"
                        >
                          <div className="flex items-center justify-between">
                            <span className="text-xs font-bold text-purple-200 font-sans">
                              {sub.name}
                            </span>
                            <button
                              onClick={() => onSelectWorldFilter(sub.id)}
                              className="text-[10px] text-amber-300 hover:text-amber-200 underline"
                            >
                              Filter titles →
                            </button>
                          </div>
                          <p className="text-[11px] text-slate-300/80 font-sans mt-1">
                            {sub.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Connected Titles List */}
                  <div className="mt-6 pt-4 border-t border-purple-900/30">
                    <div className="text-[11px] uppercase tracking-wider text-slate-400 font-sans mb-2 flex items-center gap-1.5">
                      <BookOpen className="w-3 h-3 text-purple-300" />
                      <span>Connected Titles ({world.connectedTitles.length})</span>
                    </div>
                    <ul className="space-y-1.5 text-xs text-purple-200/90 font-serif-literary italic">
                      {world.connectedTitles.map((title) => (
                        <li key={title} className="flex items-start gap-2">
                          <span className="text-amber-400 text-xs mt-0.5">›</span>
                          <span>{title}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card CTA: Filter books by this world */}
                <div className="mt-8 pt-5 border-t border-purple-900/40">
                  <button
                    onClick={() => onSelectWorldFilter(world.id)}
                    className="w-full inline-flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-amber-300 hover:text-amber-200 p-2 rounded hover:bg-purple-950/50 transition-colors cursor-pointer"
                  >
                    <span>View all {world.name} titles in Books</span>
                    <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
