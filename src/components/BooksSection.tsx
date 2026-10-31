import React, { useState, useMemo } from 'react';
import { BOOKS_DATA } from '../data/portfolioData';
import { BookItem, WorldId, SubRealmId } from '../types';
import { SiteMadeCover } from './SiteMadeCover';
import { BookDetailModal } from './BookDetailModal';
import { Search, Filter, BookOpen, Layers, Info, ArrowUpDown, Sparkles, X, ChevronRight } from 'lucide-react';

interface BooksSectionProps {
  activeWorldFilter: string;
  onSelectWorldFilter: (filterId: string) => void;
  onNavigateToRatingCode?: (code: string) => void;
}

export const BooksSection: React.FC<BooksSectionProps> = ({
  activeWorldFilter,
  onSelectWorldFilter,
  onNavigateToRatingCode,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedBook, setSelectedBook] = useState<BookItem | null>(null);
  const [coverFilter, setCoverFilter] = useState<'all' | 'real' | 'site-made'>('all');
  const [sortBy, setSortBy] = useState<'default' | 'title' | 'coded'>('default');

  // Primary World and Sub-realm Filter Tabs
  const primaryTabs = [
    { id: 'all', label: 'All Works', count: '9' },
    { id: 'aeon', label: 'AEON Timeline', count: '1' },
    { id: 'anuvashyaam', label: 'Anuvashyaam', count: '5' },
    { id: 'manidar', label: 'Manidar', count: '3' },
  ];

  const subFilterTabs = [
    { id: 'vezhakam', label: 'Vezhakam (Vol 1 & 2)', parent: 'anuvashyaam', count: '2' },
    { id: 'themazhi', label: 'Themazhi Legacy', parent: 'anuvashyaam', count: '1' },
    { id: 'theezh', label: 'Theezh Stories', parent: 'anuvashyaam', count: '2' },
    { id: 'salem', label: 'Salem Publication', parent: 'manidar', count: '2' },
    { id: 'standalone', label: 'Nimirmutha Nalikannam', parent: 'manidar', count: '1' },
  ];

  const filteredBooks = useMemo(() => {
    let result = BOOKS_DATA.filter((book) => {
      // World / Sub-realm Filter
      let matchesCategory = true;
      if (activeWorldFilter !== 'all') {
        if (activeWorldFilter === 'aeon' || activeWorldFilter === 'anuvashyaam' || activeWorldFilter === 'manidar') {
          matchesCategory = book.worldId === activeWorldFilter;
        } else {
          // It's a sub-realm filter (vezhakam, themazhi, theezh, salem, standalone)
          matchesCategory = book.subRealm === activeWorldFilter;
        }
      }

      // Cover Type Filter
      const matchesCover =
        coverFilter === 'all' ||
        book.coverType === coverFilter;

      // Search Filter
      const query = searchQuery.trim().toLowerCase();
      const matchesSearch =
        !query ||
        book.title.toLowerCase().includes(query) ||
        (book.nativeTitle && book.nativeTitle.toLowerCase().includes(query)) ||
        book.description.toLowerCase().includes(query) ||
        (book.code && book.code.toLowerCase().includes(query)) ||
        book.worldName.toLowerCase().includes(query) ||
        (book.subRealmName && book.subRealmName.toLowerCase().includes(query)) ||
        (book.publisher && book.publisher.toLowerCase().includes(query)) ||
        (book.seriesBooks && book.seriesBooks.some((sb) => sb.toLowerCase().includes(query)));

      return matchesCategory && matchesCover && matchesSearch;
    });

    if (sortBy === 'title') {
      result = [...result].sort((a, b) => a.title.localeCompare(b.title));
    } else if (sortBy === 'coded') {
      result = [...result].sort((a, b) => {
        if (a.code && !b.code) return -1;
        if (!a.code && b.code) return 1;
        return 0;
      });
    }

    return result;
  }, [activeWorldFilter, coverFilter, searchQuery, sortBy]);

  return (
    <section id="books" className="py-24 border-t border-purple-900/30 bg-[#0a0618] relative">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-purple-900/10 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-amber-300 font-sans mb-3">
              <BookOpen className="w-4 h-4 text-amber-400" />
              <span>Literary Catalogue</span>
            </div>
            <h2 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-100 tracking-tight">
              Books
            </h2>
            <p className="mt-2 font-serif-literary text-xl sm:text-2xl text-purple-200/90 italic">
              &ldquo;Chronicles, series and storybooks.&rdquo;
            </p>
          </div>

          {/* Search Input Bar */}
          <div className="w-full md:w-80 relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
              <Search className="w-4 h-4" />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search title, code, Vezhakam, world..."
              className="w-full pl-9 pr-8 py-2.5 text-xs bg-[#120a28] border border-purple-800/40 rounded-lg text-slate-200 placeholder-slate-400 focus:outline-none focus:border-amber-400/60 focus:ring-1 focus:ring-amber-400/60 transition-all font-sans"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute inset-y-0 right-0 pr-2.5 flex items-center text-slate-400 hover:text-white cursor-pointer"
                aria-label="Clear search input"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* Dedicated Books Section Navigation Bar */}
        <div className="bg-[#120a28]/90 border border-purple-800/40 rounded-xl p-3 mb-10 shadow-xl space-y-3">
          {/* Top Row: Primary World Sphere Navigation Bar */}
          <div className="flex flex-wrap items-center justify-between gap-3 pb-2.5 border-b border-purple-900/40">
            <div className="flex flex-wrap items-center gap-1.5" role="tablist" aria-label="Book Worlds Navigation">
              {primaryTabs.map((tab) => {
                const isActive = activeWorldFilter === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => onSelectWorldFilter(tab.id)}
                    role="tab"
                    aria-selected={isActive}
                    className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all flex items-center gap-1.5 cursor-pointer whitespace-nowrap ${
                      isActive
                        ? 'bg-amber-300 text-slate-950 font-bold shadow-md'
                        : 'text-purple-200 hover:text-white hover:bg-purple-950/70'
                    }`}
                  >
                    <span>{tab.label}</span>
                    <span
                      className={`text-[10px] px-1.5 py-0.2 rounded font-mono ${
                        isActive
                          ? 'bg-slate-900/20 text-slate-900'
                          : 'bg-purple-950/90 text-purple-300'
                      }`}
                    >
                      {tab.count}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Quick Reset Button */}
            {(activeWorldFilter !== 'all' || coverFilter !== 'all' || searchQuery) && (
              <button
                onClick={() => {
                  onSelectWorldFilter('all');
                  setCoverFilter('all');
                  setSearchQuery('');
                }}
                className="text-xs text-amber-300 hover:text-amber-200 underline font-sans cursor-pointer"
              >
                Reset all filters
              </button>
            )}
          </div>

          {/* Sub-Stream Navigation Bar: Specific sub-domains */}
          <div className="flex flex-wrap items-center gap-1.5 pt-1 pb-1">
            <span className="text-[11px] font-sans text-purple-400 font-semibold uppercase tracking-wider mr-1">
              Streams:
            </span>
            {subFilterTabs.map((sub) => {
              const isActive = activeWorldFilter === sub.id;
              return (
                <button
                  key={sub.id}
                  onClick={() => onSelectWorldFilter(sub.id)}
                  className={`px-2.5 py-1 text-xs rounded-md transition-all flex items-center gap-1 cursor-pointer whitespace-nowrap ${
                    isActive
                      ? 'bg-purple-500/30 text-amber-300 border border-amber-400/60 font-semibold'
                      : 'text-slate-300 hover:text-white hover:bg-purple-950/50 border border-purple-900/30'
                  }`}
                >
                  <span>{sub.label}</span>
                  <span className="text-[10px] text-purple-400 font-mono">({sub.count})</span>
                </button>
              );
            })}
          </div>

          {/* Bottom Row: Cover Selector and Sorting */}
          <div className="flex flex-wrap items-center justify-between gap-3 text-xs text-slate-300 pt-2 border-t border-purple-900/30">
            {/* Cover Filter Sub-bar */}
            <div className="flex items-center gap-1.5">
              <span className="text-[11px] font-sans text-purple-300/80 mr-1">Covers:</span>
              <button
                onClick={() => setCoverFilter('all')}
                className={`px-2.5 py-1 rounded text-xs transition-colors cursor-pointer ${
                  coverFilter === 'all'
                    ? 'bg-purple-900 text-amber-200 font-semibold'
                    : 'text-slate-400 hover:text-slate-200 bg-purple-950/40'
                }`}
              >
                All Covers
              </button>
              <button
                onClick={() => setCoverFilter('real')}
                className={`px-2.5 py-1 rounded text-xs transition-colors cursor-pointer ${
                  coverFilter === 'real'
                    ? 'bg-purple-900 text-amber-200 font-semibold'
                    : 'text-slate-400 hover:text-slate-200 bg-purple-950/40'
                }`}
              >
                Real Only (3)
              </button>
              <button
                onClick={() => setCoverFilter('site-made')}
                className={`px-2.5 py-1 rounded text-xs transition-colors cursor-pointer ${
                  coverFilter === 'site-made'
                    ? 'bg-purple-900 text-amber-200 font-semibold'
                    : 'text-slate-400 hover:text-slate-200 bg-purple-950/40'
                }`}
              >
                Site-Made Only (6)
              </button>
            </div>

            {/* Sort Sub-bar */}
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-sans text-purple-300/80 flex items-center gap-1">
                <ArrowUpDown className="w-3 h-3 text-amber-400" />
                Sort:
              </span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="bg-[#180e34] border border-purple-800/50 text-slate-200 text-xs rounded px-2.5 py-1 focus:outline-none focus:border-amber-400 cursor-pointer"
              >
                <option value="default">Default World Hierarchy</option>
                <option value="title">Title (A – Z)</option>
                <option value="coded">Coded Works First</option>
              </select>
            </div>
          </div>
        </div>

        {/* Results Counter */}
        <div className="flex items-center justify-between text-xs text-slate-400 font-sans mb-6">
          <span>
            Showing <strong className="text-amber-300 font-mono">{filteredBooks.length}</strong> {filteredBooks.length === 1 ? 'title' : 'titles'}
            {activeWorldFilter !== 'all' && (
              <span className="text-purple-300">
                {' '}in{' '}
                {primaryTabs.find(t => t.id === activeWorldFilter)?.label ||
                 subFilterTabs.find(s => s.id === activeWorldFilter)?.label}
              </span>
            )}
          </span>
        </div>

        {/* Books Card Grid */}
        {filteredBooks.length === 0 ? (
          <div className="text-center py-16 bg-[#120a28]/40 border border-purple-900/30 rounded-xl">
            <p className="font-serif-literary text-lg text-slate-300 italic">
              No titles found matching &ldquo;{searchQuery}&rdquo;
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                onSelectWorldFilter('all');
                setCoverFilter('all');
              }}
              className="mt-4 px-4 py-2 text-xs font-semibold text-slate-900 bg-amber-300 rounded hover:bg-amber-200 transition-colors cursor-pointer"
            >
              Reset all filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-7">
            {filteredBooks.map((book) => {
              const isReal = book.coverType === 'real';

              return (
                <div
                  key={book.id}
                  onClick={() => setSelectedBook(book)}
                  className="group relative flex flex-col justify-between bg-[#12092b] border border-purple-800/30 rounded-xl overflow-hidden hover:border-purple-400/50 hover:bg-[#160c33] transition-all duration-300 shadow-xl shadow-purple-950/40 cursor-pointer"
                >
                  {/* Book Cover Area */}
                  <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#0a0516]">
                    {isReal && book.coverImage ? (
                      <img
                        src={book.coverImage}
                        alt={`Cover of ${book.title}`}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        referrerPolicy="no-referrer"
                      />
                    ) : (
                      <SiteMadeCover
                        id={book.id}
                        title={book.title}
                        nativeTitle={book.nativeTitle}
                        worldName={book.subRealmName || book.worldName}
                        className="group-hover:scale-102 transition-transform duration-500"
                      />
                    )}

                    {/* Top overlay badges: Rating Code + Cover type */}
                    <div className="absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between gap-2 pointer-events-none z-10">
                      {book.code ? (
                        <span className="px-2 py-0.5 rounded bg-slate-950/85 backdrop-blur-sm border border-amber-400/60 text-amber-300 font-mono text-[10px] font-bold tracking-wider shadow-md">
                          {book.code}
                        </span>
                      ) : (
                        <span className="text-[10px] text-slate-300/80 px-1.5 py-0.5 rounded bg-slate-950/60 backdrop-blur-sm">
                          {book.subRealmName || book.worldName}
                        </span>
                      )}

                      <span
                        className={`text-[9px] uppercase tracking-wider px-2 py-0.5 rounded font-sans font-medium backdrop-blur-sm ${
                          isReal
                            ? 'bg-emerald-950/80 border border-emerald-500/40 text-emerald-200'
                            : 'bg-purple-950/80 border border-purple-500/40 text-purple-200'
                        }`}
                      >
                        {isReal ? 'Real Cover' : 'Site-Made'}
                      </span>
                    </div>

                    {/* Hover Inspect Prompt */}
                    <div className="absolute inset-0 bg-purple-950/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4 backdrop-blur-[2px]">
                      <span className="px-3.5 py-1.5 rounded-full bg-slate-950/90 text-amber-300 text-xs font-semibold uppercase tracking-wider border border-amber-400/50 shadow-lg">
                        View Details
                      </span>
                    </div>
                  </div>

                  {/* Book Card Content */}
                  <div className="p-5 flex flex-col justify-between flex-grow">
                    <div>
                      {/* Quiet Unboxed Metadata: World & Stream Hierarchy */}
                      <div className="flex items-center gap-1.5 text-[11px] text-purple-300/80 font-sans mb-1.5">
                        <span className="font-semibold text-purple-200">{book.worldName}</span>
                        {book.subRealmName && book.subRealmName !== book.worldName && (
                          <>
                            <span aria-hidden="true" className="text-purple-500">›</span>
                            <span className="text-amber-300/90">{book.subRealmName}</span>
                          </>
                        )}
                        {book.publisher && (
                          <>
                            <span aria-hidden="true" className="text-purple-500">·</span>
                            <span className="text-slate-400">{book.publisher}</span>
                          </>
                        )}
                      </div>

                      {/* Native Tamil title if present */}
                      {book.nativeTitle && (
                        <p className="font-tamil text-base font-bold text-amber-100/90 mb-0.5">
                          {book.nativeTitle}
                        </p>
                      )}

                      {/* Title */}
                      <h3 className="font-cinzel text-base font-bold text-slate-100 leading-snug group-hover:text-amber-200 transition-colors line-clamp-2">
                        {book.title}
                      </h3>

                      {/* Description */}
                      <p className="mt-2 text-xs text-slate-300/80 font-serif-literary italic line-clamp-3 leading-relaxed">
                        &ldquo;{book.description}&rdquo;
                      </p>

                      {/* If 5-book series indicator */}
                      {book.seriesBooks && (
                        <div className="mt-2.5 flex items-center gap-1 text-[11px] text-amber-300/90 font-sans">
                          <Layers className="w-3 h-3 text-amber-400" />
                          <span>Includes 5-Book Series</span>
                        </div>
                      )}
                    </div>

                    {/* Card Footer */}
                    <div className="mt-4 pt-3 border-t border-purple-900/30 flex items-center justify-between text-[11px]">
                      <span className="text-slate-400 font-sans">
                        {book.code ? (
                          <span className="font-mono text-amber-300/90">{book.code}</span>
                        ) : (
                          <span>Uncoded Chronicle</span>
                        )}
                      </span>
                      <span className="text-purple-300 group-hover:text-amber-200 group-hover:underline font-sans font-medium">
                        Read more →
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Site-Made Covers Note Banner as explicitly required */}
        <div className="mt-14 p-4 sm:p-5 rounded-xl bg-[#110826] border border-purple-800/40 flex items-start sm:items-center gap-3.5 text-xs text-purple-200/90 font-sans shadow-lg">
          <Info className="w-5 h-5 text-amber-400 shrink-0 mt-0.5 sm:mt-0" />
          <p className="leading-relaxed">
            <strong className="text-amber-300 font-semibold">Note on Covers:</strong> Site-made covers are website artwork, not official cover art. Official artwork for chronicles such as <em>Blood Throne and Stone</em> and <em>Thozhiyum Thozhanum</em> reflect published editions.
          </p>
        </div>
      </div>

      {/* Interactive Detail Modal */}
      <BookDetailModal
        book={selectedBook}
        onClose={() => setSelectedBook(null)}
        onNavigateToRatingCode={onNavigateToRatingCode}
      />
    </section>
  );
};
