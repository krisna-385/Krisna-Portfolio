import React from 'react';
import { ArrowRight, Compass, ShieldCheck } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Deep purple ambient glow radial gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-purple-700/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[450px] h-[350px] bg-indigo-900/15 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-20 right-10 w-[400px] h-[350px] bg-amber-500/5 blur-[100px] rounded-full pointer-events-none" />

      {/* Atmospheric subtle background grid lines */}
      <div className="absolute inset-0 bg-cosmic-grid opacity-60 pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Subtle literary author kicker */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-purple-500/25 bg-purple-950/40 text-purple-200/90 text-xs tracking-widest uppercase font-sans mb-8 backdrop-blur-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
          <span>Author & Worldbuilder</span>
          <span className="text-purple-400/60">·</span>
          <span>Speculative Fiction</span>
        </div>

        {/* Main Headline */}
        <h1 className="font-cinzel text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-slate-100 leading-[1.1] text-balance max-w-4xl mx-auto">
          Krisna Portfolio
          <span className="block font-serif-literary font-normal text-3xl sm:text-4xl md:text-5xl lg:text-5xl text-purple-300/90 italic mt-3 tracking-normal">
            Stories · Worlds · Ideas
          </span>
        </h1>

        {/* Tagline */}
        <p className="mt-7 text-lg sm:text-xl text-slate-300 font-sans font-light max-w-2xl mx-auto leading-relaxed text-balance">
          Books, fictional worlds and rating systems by author Krisna.
        </p>

        {/* Narrative philosophical subtext */}
        <p className="mt-3 text-sm text-purple-200/70 font-serif-literary italic max-w-xl mx-auto leading-relaxed">
          &ldquo;Imagined histories, connected timelines, and the cultural memory of speculative tomorrows.&rdquo;
        </p>

        {/* The two Hero buttons explicitly requested */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4 sm:gap-5">
          <a
            href="#books"
            className="inline-flex items-center gap-2.5 px-6 py-3.5 text-sm font-semibold uppercase tracking-wider text-slate-950 bg-gradient-to-r from-amber-300 via-amber-200 to-amber-400 rounded-md hover:from-amber-200 hover:to-amber-300 transition-all duration-200 shadow-lg shadow-amber-500/20 active:scale-[0.98]"
          >
            Explore the books
            <ArrowRight className="w-4 h-4 text-slate-900" />
          </a>

          <a
            href="#rating-systems"
            className="inline-flex items-center gap-2.5 px-6 py-3.5 text-sm font-semibold uppercase tracking-wider text-slate-200 bg-[#160d2e]/80 border border-purple-500/30 rounded-md hover:bg-purple-900/40 hover:text-white hover:border-purple-400/50 transition-all duration-200 backdrop-blur-sm active:scale-[0.98]"
          >
            <ShieldCheck className="w-4 h-4 text-purple-300" />
            Rating systems
          </a>
        </div>

        {/* 3 Core pillars quick preview bar */}
        <div className="mt-16 pt-10 border-t border-purple-900/40 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left max-w-4xl mx-auto">
          <a
            href="#worlds"
            className="p-4 rounded-lg bg-[#110a26]/70 border border-purple-800/20 hover:border-amber-400/30 transition-all group"
          >
            <div className="flex items-center gap-2 text-amber-300 font-cinzel text-xs uppercase tracking-wider mb-1">
              <Compass className="w-3.5 h-3.5" />
              AEON Timeline
            </div>
            <p className="text-xs text-slate-300/80 leading-relaxed">
              Deep chronicle epics connecting Blood Throne and Stone.
            </p>
          </a>

          <a
            href="#worlds"
            className="p-4 rounded-lg bg-[#110a26]/70 border border-purple-800/20 hover:border-purple-400/30 transition-all group"
          >
            <div className="flex items-center gap-2 text-purple-300 font-cinzel text-xs uppercase tracking-wider mb-1">
              <Compass className="w-3.5 h-3.5" />
              Anuvashyaam
            </div>
            <p className="text-xs text-slate-300/80 leading-relaxed">
              The tripartite world: Themazhi, Vezhakam, and Theezh.
            </p>
          </a>

          <a
            href="#worlds"
            className="p-4 rounded-lg bg-[#110a26]/70 border border-purple-800/20 hover:border-rose-400/30 transition-all group"
          >
            <div className="flex items-center gap-2 text-rose-300 font-cinzel text-xs uppercase tracking-wider mb-1">
              <Compass className="w-3.5 h-3.5" />
              Manidar
            </div>
            <p className="text-xs text-slate-300/80 leading-relaxed">
              Salem Publication works (Signature, Terroir) & Nimirmutha Nalikannam.
            </p>
          </a>
        </div>
      </div>
    </section>
  );
};
