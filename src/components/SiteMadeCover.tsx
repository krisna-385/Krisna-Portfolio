import React from 'react';

interface SiteMadeCoverProps {
  id: string;
  title: string;
  nativeTitle?: string;
  worldName: string;
  className?: string;
}

export const SiteMadeCover: React.FC<SiteMadeCoverProps> = ({
  id,
  title,
  nativeTitle,
  worldName,
  className = '',
}) => {
  // Specialized thematic styling per site-made book
  const renderCoverArtwork = () => {
    switch (id) {
      case 'themazhi-legacy':
        return (
          <div className="relative w-full h-full bg-gradient-to-b from-[#1c0f38] via-[#120826] to-[#0d051a] p-5 flex flex-col justify-between overflow-hidden border border-purple-500/20">
            {/* Background filigree & 5 rings */}
            <div className="absolute inset-0 opacity-15 pointer-events-none flex items-center justify-center">
              <svg viewBox="0 0 200 200" className="w-64 h-64 text-amber-300">
                <circle cx="100" cy="100" r="85" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="4 2" />
                <circle cx="100" cy="100" r="65" fill="none" stroke="currentColor" strokeWidth="1.5" />
                <circle cx="100" cy="100" r="45" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="2 4" />
                {/* 5 orbital nodes representing 5 books */}
                {[0, 72, 144, 216, 288].map((deg, i) => {
                  const rad = (deg * Math.PI) / 180;
                  const x = 100 + 65 * Math.cos(rad);
                  const y = 100 + 65 * Math.sin(rad);
                  return <circle key={i} cx={x} cy={y} r="5" fill="#f59e0b" />;
                })}
              </svg>
            </div>

            {/* Top insignia */}
            <div className="relative z-10 text-center">
              <span className="text-[10px] tracking-[0.25em] text-amber-300/80 uppercase font-cinzel">
                Omnibus Edition · 5 Books
              </span>
              <div className="w-12 h-px bg-amber-400/40 mx-auto mt-1" />
            </div>

            {/* Center title */}
            <div className="relative z-10 text-center my-auto py-4">
              <h4 className="font-cinzel text-xl sm:text-2xl font-bold text-amber-100 tracking-wider leading-tight">
                THEMAZHI
              </h4>
              <p className="font-serif-literary text-lg sm:text-xl text-purple-200 tracking-widest italic mt-0.5">
                Legacy
              </p>
              <div className="mt-3 flex justify-center items-center gap-1.5 text-[9px] text-amber-200/70 font-sans tracking-wide">
                <span>I</span> · <span>II</span> · <span>III</span> · <span>IV</span> · <span>V</span>
              </div>
            </div>

            {/* Bottom tag & world */}
            <div className="relative z-10 text-center border-t border-purple-500/30 pt-2">
              <p className="text-[10px] text-purple-300/80 font-serif-literary italic">
                {worldName}
              </p>
              <span className="text-[8px] uppercase tracking-widest text-amber-400/60 font-sans block mt-0.5">
                Site-Made Cover Art
              </span>
            </div>
          </div>
        );

      case 'sambal-sudar':
        return (
          <div className="relative w-full h-full bg-gradient-to-b from-[#220d18] via-[#150711] to-[#0a0309] p-5 flex flex-col justify-between overflow-hidden border border-rose-500/20">
            {/* Ash & ember ambient glows */}
            <div className="absolute -top-12 -right-12 w-36 h-36 bg-rose-600/20 rounded-full blur-2xl pointer-events-none" />
            <div className="absolute -bottom-12 -left-12 w-36 h-36 bg-amber-600/15 rounded-full blur-2xl pointer-events-none" />
            
            {/* Center flame emblem */}
            <div className="absolute inset-0 flex items-center justify-center opacity-20 pointer-events-none">
              <svg viewBox="0 0 100 100" className="w-40 h-40 text-rose-400">
                <path d="M50 15 C45 35 30 45 30 65 C30 80 40 90 50 90 C60 90 70 80 70 65 C70 45 55 35 50 15 Z" fill="none" stroke="currentColor" strokeWidth="1.5" />
                <path d="M50 40 C46 50 40 56 40 68 C40 76 45 80 50 80 C55 80 60 76 60 68 C60 56 54 50 50 40 Z" fill="currentColor" opacity="0.4" />
              </svg>
            </div>

            <div className="relative z-10 text-center">
              <span className="text-[10px] tracking-[0.25em] text-rose-300/80 uppercase font-sans">
                Theezh Universe
              </span>
              <div className="w-10 h-px bg-rose-400/40 mx-auto mt-1" />
            </div>

            <div className="relative z-10 text-center my-auto py-4">
              <h4 className="font-tamil text-2xl sm:text-3xl font-bold text-rose-100 tracking-wide leading-tight">
                சாம்பல் சுடர்
              </h4>
              <p className="font-serif-literary text-sm sm:text-base text-rose-300/90 italic tracking-wider mt-1">
                Sambal Sudar
              </p>
              <p className="text-[10px] text-slate-400 font-sans mt-3 max-w-[180px] mx-auto leading-relaxed">
                Language · Identity · Defiance
              </p>
            </div>

            <div className="relative z-10 text-center border-t border-rose-500/30 pt-2">
              <span className="text-[8px] uppercase tracking-widest text-rose-400/60 font-sans block">
                Site-Made Cover Art
              </span>
            </div>
          </div>
        );

      case 'aasevagam-sudar':
        return (
          <div className="relative w-full h-full bg-gradient-to-b from-[#101432] via-[#0b0c24] to-[#070615] p-5 flex flex-col justify-between overflow-hidden border border-indigo-500/20">
            {/* AI synthetic neural lattice + ancient cosmic wheel */}
            <div className="absolute inset-0 opacity-20 pointer-events-none flex items-center justify-center">
              <svg viewBox="0 0 100 100" className="w-48 h-48 text-cyan-400">
                <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" />
                <circle cx="50" cy="50" r="28" fill="none" stroke="currentColor" strokeWidth="1.5" />
                <line x1="50" y1="10" x2="50" y2="90" stroke="currentColor" strokeWidth="0.8" />
                <line x1="10" y1="50" x2="90" y2="50" stroke="currentColor" strokeWidth="0.8" />
                <line x1="22" y1="22" x2="78" y2="78" stroke="currentColor" strokeWidth="0.8" />
                <line x1="22" y1="78" x2="78" y2="22" stroke="currentColor" strokeWidth="0.8" />
              </svg>
            </div>

            <div className="relative z-10 text-center">
              <span className="text-[10px] tracking-[0.25em] text-cyan-300/80 uppercase font-sans">
                Ajivika & The Age of AI
              </span>
              <div className="w-12 h-px bg-cyan-400/40 mx-auto mt-1" />
            </div>

            <div className="relative z-10 text-center my-auto py-4">
              <h4 className="font-tamil text-2xl sm:text-3xl font-bold text-cyan-100 tracking-wide leading-tight">
                ஆசீவகம் சுடர்
              </h4>
              <p className="font-serif-literary text-sm sm:text-base text-indigo-200/90 italic tracking-wider mt-1">
                Aasevagam Sudar
              </p>
              <p className="text-[10px] text-slate-300/80 font-sans mt-3 max-w-[190px] mx-auto leading-relaxed">
                The Keepers of Lost Faith
              </p>
            </div>

            <div className="relative z-10 text-center border-t border-indigo-500/30 pt-2">
              <p className="text-[10px] text-cyan-300/80 font-serif-literary italic">
                {worldName}
              </p>
              <span className="text-[8px] uppercase tracking-widest text-cyan-400/60 font-sans block mt-0.5">
                Site-Made Cover Art
              </span>
            </div>
          </div>
        );

      case 'signature':
        return (
          <div className="relative w-full h-full bg-gradient-to-b from-[#241334] via-[#160a22] to-[#0c0414] p-5 flex flex-col justify-between overflow-hidden border border-purple-500/20">
            {/* Elegant quill watermark */}
            <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
              <svg viewBox="0 0 100 100" className="w-36 h-36 text-amber-200">
                <path d="M75 10 C60 25 35 55 20 85 C22 75 30 70 40 68 C55 65 70 40 75 10 Z" fill="currentColor" />
              </svg>
            </div>

            <div className="relative z-10 text-center">
              <span className="text-[9px] tracking-[0.3em] text-amber-300/70 uppercase font-sans">
                Salem Publication
              </span>
              <div className="w-8 h-px bg-amber-400/30 mx-auto mt-1" />
            </div>

            <div className="relative z-10 text-center my-auto py-4">
              <h4 className="font-cinzel text-2xl sm:text-3xl font-bold text-amber-200 tracking-widest leading-tight">
                SIGNATURE
              </h4>
              <p className="font-serif-literary text-sm text-purple-200/80 italic mt-1">
                A Storybook
              </p>
              <div className="mt-3 inline-block px-2.5 py-0.5 rounded border border-amber-500/30 bg-amber-500/10 text-amber-300 text-[10px] font-mono">
                SRS-15
              </div>
            </div>

            <div className="relative z-10 text-center border-t border-purple-500/30 pt-2">
              <span className="text-[8px] uppercase tracking-widest text-amber-400/60 font-sans block">
                Site-Made Cover Art
              </span>
            </div>
          </div>
        );

      case 'terroir':
        return (
          <div className="relative w-full h-full bg-gradient-to-b from-[#231b14] via-[#140e0b] to-[#0a0705] p-5 flex flex-col justify-between overflow-hidden border border-amber-600/20">
            {/* Topographic soil curves */}
            <div className="absolute inset-0 opacity-15 pointer-events-none flex items-center justify-center">
              <svg viewBox="0 0 100 100" className="w-48 h-48 text-amber-400">
                <path d="M10 30 Q 30 10, 50 30 T 90 30" fill="none" stroke="currentColor" strokeWidth="1" />
                <path d="M10 50 Q 30 35, 50 50 T 90 50" fill="none" stroke="currentColor" strokeWidth="1" />
                <path d="M10 70 Q 30 60, 50 70 T 90 70" fill="none" stroke="currentColor" strokeWidth="1" />
              </svg>
            </div>

            <div className="relative z-10 text-center">
              <span className="text-[9px] tracking-[0.3em] text-amber-300/70 uppercase font-sans">
                Salem Publication
              </span>
              <div className="w-8 h-px bg-amber-400/30 mx-auto mt-1" />
            </div>

            <div className="relative z-10 text-center my-auto py-4">
              <h4 className="font-cinzel text-2xl sm:text-3xl font-bold text-amber-100 tracking-widest leading-tight">
                TERROIR
              </h4>
              <p className="font-serif-literary text-sm text-amber-300/80 italic mt-1">
                The Soil & The Memory
              </p>
              <div className="mt-3 inline-block px-2.5 py-0.5 rounded border border-amber-500/30 bg-amber-500/10 text-amber-300 text-[10px] font-mono">
                SRS-7
              </div>
            </div>

            <div className="relative z-10 text-center border-t border-amber-700/30 pt-2">
              <span className="text-[8px] uppercase tracking-widest text-amber-400/60 font-sans block">
                Site-Made Cover Art
              </span>
            </div>
          </div>
        );

      case 'nimirmutha-nalikannam':
        return (
          <div className="relative w-full h-full bg-gradient-to-b from-[#1e0e35] via-[#100720] to-[#070310] p-5 flex flex-col justify-between overflow-hidden border border-purple-500/30">
            {/* Celestial hourglass & temporal orbit lines */}
            <div className="absolute inset-0 opacity-15 pointer-events-none flex items-center justify-center">
              <svg viewBox="0 0 100 100" className="w-48 h-48 text-amber-300">
                <circle cx="50" cy="50" r="42" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" />
                <path d="M30 20 L70 20 L50 50 L70 80 L30 80 L50 50 Z" fill="none" stroke="currentColor" strokeWidth="1.5" />
                <circle cx="50" cy="50" r="4" fill="#fbbf24" />
              </svg>
            </div>

            <div className="relative z-10 text-center">
              <span className="text-[9px] tracking-[0.3em] text-amber-300/80 uppercase font-sans">
                Manidar Universe · Standalone
              </span>
              <div className="w-10 h-px bg-amber-400/40 mx-auto mt-1" />
            </div>

            <div className="relative z-10 text-center my-auto py-4">
              <h4 className="font-tamil text-xl sm:text-2xl font-bold text-amber-100 tracking-wide leading-tight mb-1">
                நிமிர்முத்த நாளிகணம்
              </h4>
              <p className="font-cinzel text-base sm:text-lg text-purple-200 font-bold tracking-wider">
                Nimirmutha Nalikannam
              </p>
              <p className="text-[10px] text-slate-300/80 font-serif-literary italic mt-1.5 max-w-[190px] mx-auto">
                Temporal Stillness & Awakening
              </p>
              <div className="mt-3 inline-block px-2.5 py-0.5 rounded border border-rose-500/40 bg-rose-500/10 text-rose-300 text-[10px] font-mono">
                NN-16
              </div>
            </div>

            <div className="relative z-10 text-center border-t border-purple-500/30 pt-2">
              <span className="text-[8px] uppercase tracking-widest text-amber-400/60 font-sans block">
                Site-Made Cover Art
              </span>
            </div>
          </div>
        );

      default:
        return (
          <div className="relative w-full h-full bg-[#150d2c] p-5 flex flex-col justify-between items-center text-center border border-purple-500/20">
            <span className="text-[9px] uppercase tracking-widest text-purple-300/70 font-sans">
              {worldName}
            </span>
            <div className="my-auto">
              {nativeTitle && (
                <p className="font-tamil text-xl text-purple-100 mb-1">{nativeTitle}</p>
              )}
              <h4 className="font-cinzel text-xl font-bold text-purple-200">{title}</h4>
            </div>
            <span className="text-[8px] uppercase tracking-widest text-purple-400/60 font-sans">
              Site-Made Cover Art
            </span>
          </div>
        );
    }
  };

  return (
    <div className={`aspect-[3/4] w-full rounded-lg shadow-lg relative group overflow-hidden ${className}`}>
      {renderCoverArtwork()}
    </div>
  );
};
