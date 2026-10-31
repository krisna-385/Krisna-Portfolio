import { BookItem, WorldInfo, RatingBranch } from '../types';

export const WORLDS_DATA: WorldInfo[] = [
  {
    id: 'aeon',
    name: 'AEON Timeline',
    tagline: 'Imagined histories and connected timelines.',
    description: 'The wider timeline that connects Chronicle titles such as Blood Throne and Stone.',
    accentColor: 'text-amber-400',
    accentBorder: 'border-amber-500/30',
    bgGlow: 'from-amber-950/20 via-purple-950/20 to-transparent',
    themes: ['Chronicle Eras', 'Stone & Sovereign Seats', 'Mythic Epochs', 'Deep Antiquity'],
    subRealms: [
      {
        id: 'aeon-core',
        name: 'The Wider Chronicle',
        description: 'Vast temporal continuum uniting epochal power struggles and ancient thrones.',
        connectedTitles: ['Blood Throne and Stone'],
      },
    ],
    connectedTitles: ['Blood Throne and Stone'],
  },
  {
    id: 'anuvashyaam',
    name: 'Anuvashyaam',
    tagline: 'The tripartite world sphere encompassing Themazhi, Vezhakam, and Theezh.',
    description: 'A grand worldbuilding sphere spanning three interconnected narrative streams: Themazhi (the 5-book Legacy), Vezhakam (the Thozhiyum Thozhanum dynasty volumes), and Theezh (stories of language, identity, resistance, and lost faith).',
    accentColor: 'text-purple-400',
    accentBorder: 'border-purple-500/30',
    bgGlow: 'from-purple-950/30 via-indigo-950/20 to-transparent',
    themes: ['Themazhi Legacy (5 Books)', 'Vezhakam Dynasty Lore', 'Theezh Linguistic Defiance', 'Aasevagam Memory'],
    subRealms: [
      {
        id: 'themazhi',
        name: 'Themazhi',
        description: 'The five-book Themazhi Legacy series exploring cosmic convergence and village sanctuaries.',
        connectedTitles: ['Themazhi Legacy (5 Books)'],
      },
      {
        id: 'vezhakam',
        name: 'Vezhakam',
        description: 'The narrative domain governing the Thozhiyum Thozhanum adventure and dynastic volumes.',
        connectedTitles: [
          'Thozhiyum Thozhanum, Vol. 1: The Quest of the Cousins',
          'Thozhiyum Thozhanum, Vol. 2: The Great Dynasty',
        ],
      },
      {
        id: 'theezh',
        name: 'Theezh',
        description: 'Stories of mother-tongue resistance, cultural identity, and ancient Ajivika faith amidst the age of AI.',
        connectedTitles: [
          'சாம்பல் சுடர் (Sambal Sudar)',
          'ஆசீவகம் சுடர் (Aasevagam Sudar)',
        ],
      },
    ],
    connectedTitles: [
      'Themazhi Legacy (5 Books)',
      'Thozhiyum Thozhanum, Vol. 1',
      'Thozhiyum Thozhanum, Vol. 2',
      'சாம்பல் சுடர் (Sambal Sudar)',
      'ஆசீவகம் சுடர் (Aasevagam Sudar)',
    ],
  },
  {
    id: 'manidar',
    name: 'Manidar',
    tagline: 'Publisher-calibrated works and standalone philosophical narratives.',
    description: 'An independent literary realm uniting works published under Salem Publication (Signature and Terroir) alongside the profound standalone narrative Nimirmutha Nalikannam.',
    accentColor: 'text-rose-400',
    accentBorder: 'border-rose-500/30',
    bgGlow: 'from-rose-950/20 via-purple-950/20 to-transparent',
    themes: ['Signature Rating Series (SRS)', 'Salem Publication Storybooks', 'Nimirmutha Nalikannam (NN-16)', 'Terroir & Soil Memory'],
    subRealms: [
      {
        id: 'salem',
        name: 'Salem Publication',
        description: 'Publisher of the Signature Rating Series (SRS) titles, focusing on nuanced literary storybooks and atmospheric works.',
        connectedTitles: ['Signature (SRS-15)', 'Terroir (SRS-7)'],
      },
      {
        id: 'standalone',
        name: 'Nimirmutha Nalikannam',
        description: 'Standalone chronicle calibrated under the dedicated NN-16 rating, exploring deep introspective existential memory.',
        connectedTitles: ['Nimirmutha Nalikannam (NN-16)'],
      },
    ],
    connectedTitles: [
      'Signature (Salem Publication)',
      'Terroir (Salem Publication)',
      'Nimirmutha Nalikannam',
    ],
  },
];

export const BOOKS_DATA: BookItem[] = [
  // AEON TIMELINE
  {
    id: 'blood-throne-and-stone',
    title: 'Blood Throne and Stone',
    description: 'A Chronicle title connected to the wider AEON timeline',
    extendedSynopsis: 'An epic chronicle unfolding across the vast spans of the AEON timeline. Ancient stone edifices, crimson lineages, and sovereign destinies clash as forgotten dynasties rise to claim the sovereign seat.',
    code: null,
    coverType: 'real',
    coverImage: '/src/assets/images/cover_blood_throne_1793414447250.jpg',
    worldId: 'aeon',
    worldName: 'AEON Timeline',
    subRealm: 'aeon-core',
    subRealmName: 'AEON Timeline',
    ratingBranch: 'None',
  },

  // ANUVASHYAAM -> THEMAZHI
  {
    id: 'themazhi-legacy',
    title: 'Themazhi Legacy',
    description: 'A five-book series, shown under one cover',
    extendedSynopsis: 'An omnibus chronicle binding five distinct yet intricately woven works within the Themazhi narrative tapestry of the Anuvashyaam world sphere. From hidden moments of cosmic convergence to quiet rural sanctuaries and high court fairy tales.',
    code: null,
    coverType: 'site-made',
    worldId: 'anuvashyaam',
    worldName: 'Anuvashyaam',
    subRealm: 'themazhi',
    subRealmName: 'Themazhi',
    ratingBranch: 'Anuvashyaam',
    ratingDetails: {
      censorshipRating: 'YA13 · YA15 · YA17',
      notes: 'Contains age-stratified content across the five sequential volumes.',
    },
    seriesBooks: [
      '1. Maraikappada Nalikanam',
      '2. Otrumai Jeevatma',
      '3. Aatrin Idhayam',
      '4. Mansagam Kiramam',
      '5. Menmaimanipuram Kaviya Kathaigal (Fairy Tale)',
    ],
  },

  // ANUVASHYAAM -> VEZHAKAM (Moved Thozhiyum Thozhanum here as instructed)
  {
    id: 'thozhiyum-thozhanum-vol-1',
    title: 'Thozhiyum Thozhanum, Vol. 1: The Quest of the Cousins',
    description: 'Adventure and mystery involving cousins and a hidden girl who must remain unseen',
    extendedSynopsis: 'When ancestral ties beckon across uncharted paths, a cohort of devoted cousins embarks on a clandestine quest within the Vezhakam stream of Anuvashyaam. Central to their peril is a mysterious young girl bound by an ancient vow who must never be perceived by the outside world.',
    code: 'FIC-ADVEN-MYS',
    coverType: 'real',
    coverImage: '/src/assets/images/cover_thozhiyum_vol1_1793414447085.jpg',
    worldId: 'anuvashyaam',
    worldName: 'Anuvashyaam',
    subRealm: 'vezhakam',
    subRealmName: 'Vezhakam',
    ratingBranch: 'Anuvashyaam',
    ratingDetails: {
      genreGuidance: 'FIC-ADVEN-MYS (Fiction · Adventure · Mystery)',
      notes: 'Governed under Anuvashyaam Series Genre Guidance (Vezhakam).',
    },
  },
  {
    id: 'thozhiyum-thozhanum-vol-2',
    title: 'Thozhiyum Thozhanum, Vol. 2: The Great Dynasty',
    description: 'The Aazhiya household, family, trust, danger and dynastic mystery',
    extendedSynopsis: 'The saga escalates within the granite corridors of the illustrious Aazhiya household in the Vezhakam tradition. Kinship is tested as whispers of dynastic betrayal, hidden vaults, and ancestral perils threaten the fragile equilibrium between sovereign duty and filial loyalty.',
    code: 'FIC-ADVEN-HIE',
    coverType: 'real',
    coverImage: '/src/assets/images/cover_thozhiyum_vol2_1793414448771.jpg',
    worldId: 'anuvashyaam',
    worldName: 'Anuvashyaam',
    subRealm: 'vezhakam',
    subRealmName: 'Vezhakam',
    ratingBranch: 'Anuvashyaam',
    ratingDetails: {
      genreGuidance: 'FIC-ADVEN-HIE (Fiction · Adventure · Hierarchy / Dynastic)',
      notes: 'Governed under Anuvashyaam Series Genre Guidance (Vezhakam).',
    },
  },

  // ANUVASHYAAM -> THEEZH
  {
    id: 'sambal-sudar',
    title: 'சாம்பல் சுடர் (Sambal Sudar)',
    nativeTitle: 'சாம்பல் சுடர்',
    description: 'A Theezh story exploring language, identity and resistance',
    extendedSynopsis: 'Set within the evocative Theezh universe of Anuvashyaam, this poignant narrative delves into the embers of cultural heritage. When mother tongues are outlawed and indigenous identities suppressed, the sacred ash becomes a silent beacon of unbroken defiance.',
    code: null,
    coverType: 'site-made',
    worldId: 'anuvashyaam',
    worldName: 'Anuvashyaam',
    subRealm: 'theezh',
    subRealmName: 'Theezh',
    ratingBranch: 'Anuvashyaam',
    ratingDetails: {
      censorshipRating: 'TZH-13 / TZH-15',
      notes: 'Classified under the Theezh censorship tier of the Anuvashyaam rating system.',
    },
  },
  {
    id: 'aasevagam-sudar',
    title: 'ஆசீவகம் சுடர் (Aasevagam Sudar)',
    nativeTitle: 'ஆசீவகம் சுடர்',
    description: 'A Theezh story imagining a family as the last keepers of a lost faith amid the legacy of the age of AI',
    extendedSynopsis: 'In a speculative era shaped by synthetic omnipotence and computational determinism, a solitary family quietly guards the ancient cosmic truths of Aasevagam (Ajivika philosophy) in the Theezh stream of Anuvashyaam. A haunting exploration of fate, niyati, and timeless human devotion.',
    code: null,
    coverType: 'site-made',
    worldId: 'anuvashyaam',
    worldName: 'Anuvashyaam',
    subRealm: 'theezh',
    subRealmName: 'Theezh',
    ratingBranch: 'Anuvashyaam',
    ratingDetails: {
      censorshipRating: 'TZH-13 / TZH-15',
      notes: 'Classified under the Theezh censorship tier of the Anuvashyaam rating system.',
    },
  },

  // MANIDAR -> SALEM PUBLICATION
  {
    id: 'signature',
    title: 'Signature',
    description: 'A storybook published by Salem Publication',
    extendedSynopsis: 'A literary storybook exploring intimate personal journeys, generational echoes, and stylistic brevity. Published under the Salem Publication imprint within the Manidar world realm.',
    code: 'SRS-15',
    coverType: 'site-made',
    worldId: 'manidar',
    worldName: 'Manidar',
    subRealm: 'salem',
    subRealmName: 'Salem Publication',
    publisher: 'Salem Publication',
    ratingBranch: 'Manidar',
    ratingDetails: {
      censorshipRating: 'SRS-15 (Signature Rating Series - Age 15+)',
      notes: 'Published by Salem Publication under the Manidar Rating System.',
    },
  },
  {
    id: 'terroir',
    title: 'Terroir',
    description: 'A work published by Salem Publication',
    extendedSynopsis: 'A grounded work of atmosphere, geographic soul, and localized memory. Investigating the symbiotic connection between human identity and the very soil that nourishes it, published by Salem Publication.',
    code: 'SRS-7',
    coverType: 'site-made',
    worldId: 'manidar',
    worldName: 'Manidar',
    subRealm: 'salem',
    subRealmName: 'Salem Publication',
    publisher: 'Salem Publication',
    ratingBranch: 'Manidar',
    ratingDetails: {
      censorshipRating: 'SRS-7 (Signature Rating Series - Age 7+ / General Audience)',
      notes: 'Published by Salem Publication under the Manidar Rating System.',
    },
  },

  // MANIDAR -> NIMIRMUTHA NALIKANNAM (Separate standalone work under Manidar)
  {
    id: 'nimirmutha-nalikannam',
    title: 'Nimirmutha Nalikannam',
    nativeTitle: 'நிமிர்முத்த நாளிகணம்',
    description: 'A standalone work of temporal convergence, contemplative depth and existential reflection',
    extendedSynopsis: 'A powerful standalone narrative framed within the Manidar universe, tracing sacred moments of awakening, philosophical resolution, and temporal stillness. Calibrated under the dedicated NN-16 rating code.',
    code: 'NN-16',
    coverType: 'site-made',
    worldId: 'manidar',
    worldName: 'Manidar',
    subRealm: 'standalone',
    subRealmName: 'Standalone Chronicle',
    ratingBranch: 'Manidar',
    ratingDetails: {
      censorshipRating: 'NN-16 (Nimirmutha Nalikannam - Age 16+)',
      notes: 'Dedicated standalone rating code calibrated under the Manidar Rating System.',
    },
  },
];

export const RATING_BRANCHES: RatingBranch[] = [
  {
    name: 'Anuvashyaam Rating System',
    subtitle: 'Branch 1 · Traditional Taxonomy & Literary Genre Guidance',
    description: 'A dual-tiered rating framework designed for speculative epics and worldbuilt series, balancing age-tiered censorship with granular narrative genre guidance (Vezhakam).',
    philosophies: 'Designed to honor narrative depth, linguistic complexity, and thematic maturity across Themazhi, Vezhakam, and Theezh story universes.',
    censorship: [
      {
        category: 'Themazhi Series',
        ratings: ['YA13', 'YA15', 'YA17'],
        description: 'Young Adult progressive maturity tiers calibrated for emotional weight, suspense, and dynastic intrigue.',
      },
      {
        category: 'Theezh Stories',
        ratings: ['TZH-13', 'TZH-15'],
        description: 'Targeted maturity markers for philosophical depth, linguistic resistance, and existential themes.',
      },
    ],
    genreGuidance: [
      {
        volume: 'Volume 1 (The Quest of the Cousins)',
        code: 'FIC-ADVEN-MYS',
        meaning: 'Fiction · Adventure · Mystery',
        description: 'Focuses on youthful exploration, ancestral secrets, and the quest to protect the unseen.',
      },
      {
        volume: 'Volume 2 (The Great Dynasty)',
        code: 'FIC-ADVEN-HIE',
        meaning: 'Fiction · Adventure · Hierarchy / Dynastic',
        description: 'Focuses on the complex political, familial, and dynastic mechanics of the Aazhiya royal household.',
      },
    ],
    notes: 'Genre Guidance operates under "Vezhakam" — a traditional classification protocol that delineates narrative style and thematic trajectory.',
  },
  {
    name: 'Manidar Rating System',
    subtitle: 'Branch 2 · Publisher-Calibrated Standards (Salem Publication & Standalone)',
    description: 'An independent rating architecture calibrated for publications issued under Salem Publication and standalone chronicles such as Nimirmutha Nalikannam.',
    philosophies: 'Focuses on concise editorial age thresholds under the Signature Rating Series (SRS) format and dedicated standalone codes (NN-16).',
    censorship: [
      {
        category: 'Signature',
        ratings: ['SRS-15'],
        description: 'Signature Rating Series 15: Mature teen and adult themes with contemplative literary nuance.',
      },
      {
        category: 'Nimirmutha Nalikannam',
        ratings: ['NN-16'],
        description: 'Dedicated standalone rating code calibrated for intense narrative resonance and philosophical reflection.',
      },
      {
        category: 'Terroir',
        ratings: ['SRS-7'],
        description: 'Signature Rating Series 7: Accessible for readers of all ages with universal thematic resonance.',
      },
    ],
    notes: 'SRS stands for Signature Rating Series. Signature and Terroir are published by Salem Publication.',
  },
];

export const RESEARCH_LINKS = [
  {
    title: 'ResearchGate Profile',
    authorName: 'Keerthigan Krsnan Gopikrishnan',
    url: 'https://www.researchgate.net/profile/Keerthigan-Krsnan-Gopikrishnan',
    description: 'Academic background, research inquiries, and scholarly contributions in cultural linguistics, memory, and speculative humanities.',
    badge: 'Scholarly Research',
  },
  {
    title: 'LinkedIn Profile',
    authorName: 'Keerthigan Krsnan Gopikrishnan',
    url: 'https://www.linkedin.com/in/keerthigankrsnan/',
    handle: 'in/keerthigankrsnan',
    description: 'Official profile for professional updates, literary publishing connections, and academic collaborations.',
    badge: 'Verified Profile',
  },
];

export const ABOUT_TEXT = {
  quote: 'Krisna is a writer and worldbuilder exploring imagined histories, speculative futures, cultural memory, and the ideas that connect fictional worlds.',
  authorName: 'Krisna',
  handle: '@muhibbahpaanam',
  instagramUrl: 'https://www.instagram.com/muhibbahpaanam/',
  bioParagraphs: [
    'Through the interconnected architectures of the AEON Timeline, the tripartite world of Anuvashyaam (Themazhi, Vezhakam, and Theezh), and the calibrated realms of Manidar, Krisna investigates how ancestral memory survives in speculative tomorrows.',
    'Drawing inspiration from classical Tamil philosophies—including ancient Aasevagam (Ajivika) determinism—alongside the contemporary questions posed by the age of Artificial Intelligence, each work bridges deep antiquity with far-horizon speculation.',
    'Beyond creative writing, Krisna has engineered custom taxonomic rating systems such as Anuvashyaam and Manidar, offering readers and scholars precise structural navigation through sprawling fictional universes.',
  ],
};
