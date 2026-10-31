import React from 'react';
import { ArrowUp, Instagram, GraduationCap, Linkedin } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-purple-900/40 bg-[#070312] py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand Col */}
          <div className="md:col-span-2">
            <span className="font-cinzel text-xl font-bold tracking-wider text-slate-100 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-sm bg-gradient-to-tr from-purple-500 to-amber-300 transform rotate-45 inline-block" />
              Krisna Portfolio
            </span>
            <p className="mt-2 text-xs text-purple-300/80 font-serif-literary italic">
              Stories · Worlds · Ideas
            </p>
            <p className="mt-3 text-xs text-slate-400 font-sans max-w-sm leading-relaxed">
              Books, fictional worlds, and taxonomic rating systems exploring imagined histories, speculative futures, and the cultural memory of fictional universes.
            </p>
          </div>

          {/* Quick Nav */}
          <div>
            <h5 className="font-cinzel text-xs font-semibold uppercase tracking-wider text-amber-300/90 mb-3">
              Navigation
            </h5>
            <ul className="space-y-2 text-xs text-slate-400 font-sans">
              <li>
                <a href="#worlds" className="hover:text-amber-200 transition-colors">
                  Worlds & Timelines
                </a>
              </li>
              <li>
                <a href="#books" className="hover:text-amber-200 transition-colors">
                  Books Catalogue
                </a>
              </li>
              <li>
                <a href="#rating-systems" className="hover:text-amber-200 transition-colors">
                  Rating Systems & Guidance
                </a>
              </li>
              <li>
                <a href="#research" className="hover:text-amber-200 transition-colors">
                  Research & Links
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-amber-200 transition-colors">
                  About Krisna
                </a>
              </li>
            </ul>
          </div>

          {/* Connect & Social */}
          <div>
            <h5 className="font-cinzel text-xs font-semibold uppercase tracking-wider text-amber-300/90 mb-3">
              Channels
            </h5>
            <ul className="space-y-2.5 text-xs text-slate-400 font-sans">
              <li>
                <a
                  href="https://www.instagram.com/muhibbahpaanam/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-pink-300 transition-colors"
                >
                  <Instagram className="w-3.5 h-3.5 text-pink-400" />
                  <span>Instagram (@muhibbahpaanam)</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.researchgate.net/profile/Keerthigan-Krsnan-Gopikrishnan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-amber-300 transition-colors"
                >
                  <GraduationCap className="w-3.5 h-3.5 text-amber-400" />
                  <span>ResearchGate (Scholar Profile)</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/keerthigankrsnan/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-sky-300 transition-colors"
                >
                  <Linkedin className="w-3.5 h-3.5 text-sky-400" />
                  <span>LinkedIn (in/keerthigankrsnan)</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar with Required Copyright & Disclaimer */}
        <div className="pt-8 border-t border-purple-950/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-sans text-slate-400">
          <p className="text-center sm:text-left">
            © 2026 Krisna. Site-made covers are website artwork, not official cover art.
          </p>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-purple-950/70 hover:bg-purple-900 border border-purple-800/40 text-purple-200 text-xs transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
