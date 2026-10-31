import React, { useState, useEffect } from 'react';
import { Menu, X, BookOpen } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Worlds', href: '#worlds' },
    { name: 'Books', href: '#books' },
    { name: 'Rating Systems', href: '#rating-systems' },
    { name: 'Research & Links', href: '#research' },
    { name: 'About', href: '#about' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0a0618]/90 backdrop-blur-md border-b border-purple-900/30 py-3 shadow-xl shadow-purple-950/20'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8">
          {/* Zone 1: Single text element wordmark */}
          <a
            href="#"
            className="font-cinzel text-lg sm:text-xl font-bold tracking-wider text-slate-100 hover:text-amber-200 transition-colors whitespace-nowrap shrink-0 flex items-center gap-2.5"
          >
            <span className="w-2.5 h-2.5 rounded-sm bg-gradient-to-tr from-purple-500 to-amber-300 transform rotate-45 inline-block" />
            Krisna Portfolio
          </a>

          {/* Zone 2: 4–5 clean single-line text navigation links */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-300">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-amber-200 transition-colors whitespace-nowrap shrink-0 hover:underline decoration-amber-400/50 underline-offset-8"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Zone 3: 1 primary action */}
          <div className="flex items-center gap-3 shrink-0">
            <a
              href="#books"
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-slate-900 bg-gradient-to-r from-amber-300 via-amber-200 to-amber-400 rounded hover:from-amber-200 hover:to-amber-300 transition-all duration-200 shadow-md shadow-amber-500/10 whitespace-nowrap shrink-0"
            >
              <BookOpen className="w-3.5 h-3.5" />
              Explore Books
            </a>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-slate-300 hover:text-white rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0e0822] border-b border-purple-900/40 px-5 pt-3 pb-6 space-y-3 shadow-2xl">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-base font-medium text-slate-200 hover:text-amber-300 transition-colors border-b border-purple-950/40"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#books"
            onClick={() => setMobileMenuOpen(false)}
            className="w-full mt-3 flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-bold uppercase tracking-wider text-slate-950 bg-amber-300 rounded"
          >
            <BookOpen className="w-4 h-4" />
            Explore Books
          </a>
        </div>
      )}
    </header>
  );
};
