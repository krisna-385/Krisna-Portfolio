import React from 'react';
import { ABOUT_TEXT } from '../data/portfolioData';
import { Feather, Instagram, Compass, BookOpen, Quote, Globe } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 border-t border-purple-900/30 bg-[#0a0618] relative">
      {/* Ambient background glows */}
      <div className="absolute top-1/2 left-1/3 w-[600px] h-[500px] bg-purple-900/10 blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-amber-300 font-sans mb-3">
              <Feather className="w-4 h-4 text-amber-400" />
              <span>Biographical Statement</span>
            </div>
            <h2 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-100 tracking-tight">
              About the Author
            </h2>
          </div>

          {/* Central Author Blockquote Box */}
          <div className="p-8 sm:p-10 rounded-2xl bg-[#120a28] border border-purple-800/40 shadow-2xl relative overflow-hidden mb-12">
            {/* Ambient gold glow */}
            <div className="absolute -top-16 -right-16 w-48 h-48 bg-amber-400/5 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 flex flex-col items-center text-center">
              <Quote className="w-10 h-10 text-amber-400/30 mb-4" />
              <blockquote className="font-serif-literary text-2xl sm:text-3xl text-slate-100 italic leading-relaxed max-w-2xl text-balance">
                &ldquo;{ABOUT_TEXT.quote}&rdquo;
              </blockquote>

              <div className="w-16 h-px bg-amber-400/40 my-6" />

              <div className="text-center">
                <span className="font-cinzel text-lg font-bold text-amber-200 tracking-wider">
                  {ABOUT_TEXT.authorName}
                </span>
                <p className="text-xs text-purple-300 font-sans mt-0.5">
                  Author, Worldbuilder & Taxonomic Architect
                </p>
              </div>

              {/* Instagram link button */}
              <div className="mt-6">
                <a
                  href={ABOUT_TEXT.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-purple-950/80 to-pink-950/80 hover:from-purple-900 hover:to-pink-900 border border-purple-500/30 text-xs font-medium text-slate-200 hover:text-white transition-all shadow-md group"
                >
                  <Instagram className="w-4 h-4 text-pink-400 group-hover:scale-110 transition-transform" />
                  <span>Follow {ABOUT_TEXT.handle}</span>
                </a>
              </div>
            </div>
          </div>

          {/* Detailed Narrative Biography */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-xl bg-[#12092b]/60 border border-purple-900/30 flex flex-col justify-between">
              <div>
                <div className="w-8 h-8 rounded-lg bg-purple-950 border border-purple-800/40 flex items-center justify-center text-amber-300 mb-3">
                  <Compass className="w-4 h-4" />
                </div>
                <h4 className="font-cinzel text-base font-bold text-slate-100 mb-2">
                  Connected Universes
                </h4>
                <p className="text-xs text-slate-300/80 font-sans leading-relaxed">
                  {ABOUT_TEXT.bioParagraphs[0]}
                </p>
              </div>
            </div>

            <div className="p-6 rounded-xl bg-[#12092b]/60 border border-purple-900/30 flex flex-col justify-between">
              <div>
                <div className="w-8 h-8 rounded-lg bg-purple-950 border border-purple-800/40 flex items-center justify-center text-amber-300 mb-3">
                  <Globe className="w-4 h-4" />
                </div>
                <h4 className="font-cinzel text-base font-bold text-slate-100 mb-2">
                  Antiquity Meets AI
                </h4>
                <p className="text-xs text-slate-300/80 font-sans leading-relaxed">
                  {ABOUT_TEXT.bioParagraphs[1]}
                </p>
              </div>
            </div>

            <div className="p-6 rounded-xl bg-[#12092b]/60 border border-purple-900/30 flex flex-col justify-between">
              <div>
                <div className="w-8 h-8 rounded-lg bg-purple-950 border border-purple-800/40 flex items-center justify-center text-amber-300 mb-3">
                  <BookOpen className="w-4 h-4" />
                </div>
                <h4 className="font-cinzel text-base font-bold text-slate-100 mb-2">
                  Taxonomic Frameworks
                </h4>
                <p className="text-xs text-slate-300/80 font-sans leading-relaxed">
                  {ABOUT_TEXT.bioParagraphs[2]}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
