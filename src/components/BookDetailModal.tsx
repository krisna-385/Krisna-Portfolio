import React, { useEffect } from 'react';
import { BookItem } from '../types';
import { SiteMadeCover } from './SiteMadeCover';
import { X, Book, Layers, ShieldCheck, Tag, ExternalLink } from 'lucide-react';

interface BookDetailModalProps {
  book: BookItem | null;
  onClose: () => void;
  onNavigateToRatingCode?: (code: string) => void;
}

export const BookDetailModal: React.FC<BookDetailModalProps> = ({
  book,
  onClose,
  onNavigateToRatingCode,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (book) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [book, onClose]);

  if (!book) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Dark backdrop */}
      <div
        className="fixed inset-0 bg-[#05030d]/85 backdrop-blur-md transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-3xl bg-[#120a28] border border-purple-700/40 rounded-2xl shadow-2xl shadow-purple-950/60 overflow-hidden z-10 my-8">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-purple-950/80 text-slate-300 hover:text-white hover:bg-purple-900 transition-colors"
          aria-label="Close book details"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 sm:gap-8 p-6 sm:p-8 max-h-[85vh] overflow-y-auto">
          {/* Cover Column (2 cols) */}
          <div className="md:col-span-2 flex flex-col items-center">
            <div className="w-full max-w-[260px] rounded-lg overflow-hidden shadow-2xl ring-1 ring-purple-500/30">
              {book.coverType === 'real' && book.coverImage ? (
                <img
                  src={book.coverImage}
                  alt={`Cover of ${book.title}`}
                  className="w-full h-auto aspect-[3/4] object-cover"
                  referrerPolicy="no-referrer"
                />
              ) : (
                <SiteMadeCover
                  id={book.id}
                  title={book.title}
                  nativeTitle={book.nativeTitle}
                  worldName={book.worldName}
                />
              )}
            </div>

            {/* Cover Status Clarification */}
            <div className="mt-4 text-center">
              <span className="text-[11px] font-sans tracking-wider uppercase text-purple-300/80">
                {book.coverType === 'real' ? 'Real Cover' : 'Site-Made Cover'}
              </span>
              <p className="text-[11px] text-slate-400 font-sans mt-0.5 max-w-[220px]">
                {book.coverType === 'real'
                  ? 'Official Chronicle cover art.'
                  : 'Site-made covers are website artwork, not official cover art.'}
              </p>
            </div>
          </div>

          {/* Details Column (3 cols) */}
          <div className="md:col-span-3 flex flex-col justify-between">
            <div>
              {/* World & Category */}
              <div className="flex flex-wrap items-center gap-2 text-xs text-amber-300 font-sans uppercase tracking-widest mb-2">
                <span>{book.worldName}</span>
                {book.publisher && (
                  <>
                    <span className="text-purple-500">·</span>
                    <span className="text-purple-300">{book.publisher}</span>
                  </>
                )}
              </div>

              {/* Native Tamil title if present */}
              {book.nativeTitle && (
                <h3 className="font-tamil text-2xl sm:text-3xl font-bold text-amber-100 mb-1">
                  {book.nativeTitle}
                </h3>
              )}

              {/* Main Title */}
              <h2 className="font-cinzel text-xl sm:text-2xl font-bold text-slate-100 leading-snug">
                {book.title}
              </h2>

              {/* Rating Code Badge if assigned */}
              {book.code && (
                <div className="mt-3 flex items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-purple-950/80 border border-amber-400/50 text-amber-300 font-mono text-xs font-semibold">
                    <Tag className="w-3 h-3 text-amber-400" />
                    Code: {book.code}
                  </span>
                  {onNavigateToRatingCode && (
                    <button
                      onClick={() => {
                        onClose();
                        onNavigateToRatingCode(book.code!);
                      }}
                      className="text-xs text-purple-300 hover:text-amber-200 underline underline-offset-4 flex items-center gap-1"
                    >
                      Inspect in Rating Systems
                      <ExternalLink className="w-3 h-3" />
                    </button>
                  )}
                </div>
              )}

              {/* Primary Brief Description */}
              <div className="mt-4 p-3.5 rounded-lg bg-[#1a0f35]/60 border border-purple-800/30">
                <p className="text-xs uppercase tracking-wider text-purple-300/80 font-sans mb-1 font-semibold">
                  Synopsis
                </p>
                <p className="font-serif-literary text-base text-slate-200 italic leading-relaxed">
                  &ldquo;{book.description}&rdquo;
                </p>
              </div>

              {/* Extended Premise */}
              {book.extendedSynopsis && (
                <div className="mt-4">
                  <p className="text-xs text-slate-300 font-sans leading-relaxed">
                    {book.extendedSynopsis}
                  </p>
                </div>
              )}

              {/* Themazhi Legacy: 5 Books breakdown */}
              {book.seriesBooks && (
                <div className="mt-5 pt-4 border-t border-purple-800/30">
                  <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-amber-300 font-sans font-semibold mb-2">
                    <Layers className="w-4 h-4 text-amber-400" />
                    <span>Themazhi Legacy Series (Five Books)</span>
                  </div>
                  <ul className="grid grid-cols-1 gap-1.5 text-xs text-purple-200 font-serif-literary italic">
                    {book.seriesBooks.map((sb) => (
                      <li key={sb} className="bg-purple-950/40 px-3 py-1.5 rounded border border-purple-900/40">
                        {sb}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Rating Guidance details */}
              {book.ratingDetails && (
                <div className="mt-5 pt-4 border-t border-purple-800/30 text-xs">
                  <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-slate-300 font-sans font-semibold mb-2">
                    <ShieldCheck className="w-4 h-4 text-purple-400" />
                    <span>Rating & Classification</span>
                  </div>
                  {book.ratingDetails.genreGuidance && (
                    <p className="text-amber-200/90 font-mono text-[11px] mb-1">
                      {book.ratingDetails.genreGuidance}
                    </p>
                  )}
                  {book.ratingDetails.censorshipRating && (
                    <p className="text-purple-300 font-sans mb-1">
                      Censorship Rating: <span className="text-amber-300 font-mono">{book.ratingDetails.censorshipRating}</span>
                    </p>
                  )}
                  {book.ratingDetails.notes && (
                    <p className="text-slate-400 font-sans italic text-[11px]">
                      {book.ratingDetails.notes}
                    </p>
                  )}
                </div>
              )}
            </div>

            {/* Bottom Actions */}
            <div className="mt-6 pt-4 border-t border-purple-900/40 flex items-center justify-between">
              <span className="text-[11px] text-slate-500 font-sans">
                Timeline Archive ID: {book.id}
              </span>
              <button
                onClick={onClose}
                className="px-4 py-2 text-xs font-semibold text-slate-200 bg-purple-900/60 hover:bg-purple-800/80 rounded transition-colors"
              >
                Close View
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
