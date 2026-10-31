export type WorldId = 'aeon' | 'anuvashyaam' | 'manidar';

export type SubRealmId = 'themazhi' | 'vezhakam' | 'theezh' | 'salem' | 'standalone' | 'aeon-core';

export interface WorldSubRealm {
  id: SubRealmId;
  name: string;
  description: string;
  connectedTitles: string[];
}

export interface WorldInfo {
  id: WorldId;
  name: string;
  tagline: string;
  description: string;
  accentColor: string;
  accentBorder: string;
  bgGlow: string;
  themes: string[];
  subRealms: WorldSubRealm[];
  connectedTitles: string[];
}

export interface BookItem {
  id: string;
  title: string;
  nativeTitle?: string;
  description: string;
  extendedSynopsis?: string;
  code?: string | null;
  coverType: 'real' | 'site-made';
  coverImage?: string;
  worldId: WorldId;
  worldName: string;
  subRealm?: SubRealmId;
  subRealmName?: string;
  publisher?: string;
  seriesBooks?: string[];
  ratingBranch?: 'Anuvashyaam' | 'Manidar' | 'None';
  ratingDetails?: {
    censorshipRating?: string;
    genreGuidance?: string;
    notes?: string;
  };
}

export interface RatingBranch {
  name: string;
  subtitle: string;
  description: string;
  philosophies: string;
  censorship: {
    category: string;
    ratings: string[];
    description: string;
  }[];
  genreGuidance?: {
    volume: string;
    code: string;
    meaning: string;
    description: string;
  }[];
  notes?: string;
}
