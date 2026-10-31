import React, { useState, useEffect } from 'react';
import { Compass, BookOpen, ShieldCheck, GraduationCap, Feather, ArrowUp } from 'lucide-react';

export const SectionNavDock: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('worlds');
  const [visible, setVisible] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 250;
      setVisible(window.scrollY > 300);

      const sections = ['worlds', 'books', 'rating-systems', 'research', 'about'];
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'worlds', label: 'Worlds', icon: Compass },
    { id: 'books', label: 'Books', icon: BookOpen },
    { id: 'rating-systems', label: 'Ratings', icon: ShieldCheck },
    { id: 'research', label: 'Research', icon: GraduationCap },
    { id: 'about', label: 'About', icon: Feather },
  ];

  if (!visible) return null;

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 max-w-fit px-3 py-1.5 rounded-full bg-[#100826]/90 border border-purple-500/40 backdrop-blur-md shadow-2xl shadow-purple-950/80 flex items-center gap-1 sm:gap-1.5 transition-all duration-300">
      <span className="text-[10px] uppercase font-cinzel font-bold text-amber-300/80 px-2 hidden sm:inline-block border-r border-purple-800/50 pr-2.5">
        Jump
      </span>

      {navItems.map((item) => {
        const Icon = item.icon;
        const isActive = activeSection === item.id;

        return (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs transition-all whitespace-nowrap ${
              isActive
                ? 'bg-amber-300 text-slate-950 font-bold shadow-md'
                : 'text-purple-200 hover:text-white hover:bg-purple-900/60'
            }`}
          >
            <Icon className={`w-3 h-3 ${isActive ? 'text-slate-950' : 'text-purple-400'}`} />
            <span className="hidden md:inline">{item.label}</span>
          </a>
        );
      })}

      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="p-1 rounded-full text-purple-300 hover:text-white hover:bg-purple-900/50 ml-1"
        aria-label="Scroll to top"
        title="Back to top"
      >
        <ArrowUp className="w-3 h-3" />
      </button>
    </div>
  );
};
