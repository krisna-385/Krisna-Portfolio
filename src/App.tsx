import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { WorldsSection } from './components/WorldsSection';
import { BooksSection } from './components/BooksSection';
import { RatingSystemsSection } from './components/RatingSystemsSection';
import { ResearchSection } from './components/ResearchSection';
import { AboutSection } from './components/AboutSection';
import { Footer } from './components/Footer';
import { SectionNavDock } from './components/SectionNavDock';

export default function App() {
  const [activeWorldFilter, setActiveWorldFilter] = useState<string>('all');
  const [highlightedCode, setHighlightedCode] = useState<string | null>(null);

  const handleSelectWorldFromWorlds = (worldId: string) => {
    setActiveWorldFilter(worldId);
    const booksElem = document.getElementById('books');
    if (booksElem) {
      booksElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleNavigateToRatingCode = (code: string) => {
    setHighlightedCode(code);
    const ratingsElem = document.getElementById('rating-systems');
    if (ratingsElem) {
      ratingsElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0618] text-slate-100 flex flex-col font-sans selection:bg-purple-900 selection:text-amber-200">
      {/* Fixed Navigation Bar */}
      <Navbar />

      {/* Main Content Area */}
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero />

        {/* Worlds: "Imagined histories and connected timelines." */}
        <WorldsSection onSelectWorldFilter={handleSelectWorldFromWorlds} />

        {/* Books: "Chronicles, series and storybooks." */}
        <BooksSection
          activeWorldFilter={activeWorldFilter}
          onSelectWorldFilter={setActiveWorldFilter}
          onNavigateToRatingCode={handleNavigateToRatingCode}
        />

        {/* Rating Systems & Genre Guidance */}
        <RatingSystemsSection
          highlightedCode={highlightedCode}
          onFilterByCode={(code) => {
            // Can jump to books and filter
            const booksElem = document.getElementById('books');
            if (booksElem) booksElem.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* Research & Links */}
        <ResearchSection />

        {/* About Author Krisna */}
        <AboutSection />
      </main>

      {/* Floating Section Nav Dock */}
      <SectionNavDock />

      {/* Footer with required copyright & site-made cover note */}
      <Footer />
    </div>
  );
}
