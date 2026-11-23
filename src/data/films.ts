export interface FilmExample {
  id: string;
  title: string;
  videoId: string;
  year?: number;
  start?: number;
  playback?: 'embed' | 'youtube';
  orientation?: 'landscape' | 'portrait';
  artwork?: { src: string; alt: string; width: number; height: number };
  credits?: { production?: string; music?: string };
}

export interface FilmProduct {
  name: string;
  description: string;
  examples: FilmExample[];
  showAdditionalExamples?: boolean;
}

export const products: Record<string, FilmProduct> = {
  'season-story': {
    name: 'Season Story',
    description: 'A music-driven film that brings a season’s turning points, personalities, and sideline moments together.',
    examples: [
      {
        id: 'tonight-we-fight',
        title: 'Tonight We Fight',
        videoId: 'c1LJZbMLc2o',
        year: 2025,
        artwork: { src: '/media/tonight-we-fight.webp', alt: 'Mansfield teammates celebrate with high fives on the soccer field.', width: 1200, height: 675 },
        credits: { production: 'Produced & Edited by Keith Fredericks', music: '“Tonight We Fight” — Original Composition by Keith Fredericks' },
      },
    ],
  },
  'heroes-opening': {
    name: 'Heroes’ Opening',
    description: 'A custom cinematic introduction that casts your team as the heroes, builds anticipation, and sets the stage for their season premiere.',
    examples: [
      {
        id: 'mansfield-2026-intro',
        title: 'Banquet Intro',
        videoId: 'W4uVEfCH3SE',
        year: 2026,
        artwork: { src: '/media/heroes-opening.webp', alt: 'A cinematic MHS logo filled with scenes from the team’s season.', width: 1200, height: 675 },
        credits: { music: 'Third-party music' },
      },
    ],
  },
  'season-end': {
    name: 'Season End',
    description: 'The big plays, celebrations, and sideline shenanigans, with credit for everyone who made the season possible. A goodbye that leaves the room smiling.',
    examples: [
      {
        id: 'spotlight-season-end',
        title: 'Dancing Through the Spotlight',
        videoId: 'OVKTOO2fTSQ',
        year: 2026,
        artwork: { src: '/media/season-end.webp', alt: 'Mansfield teammates watch together, smiling on the sideline.', width: 1200, height: 675 },
        credits: { production: 'Produced & Edited by Keith Fredericks', music: '“Spotlight” — Original Composition by Keith Fredericks' },
      },
      {
        id: 'centuries',
        title: 'Centuries',
        videoId: '-0JLaNhZ9Jg',
        playback: 'youtube',
        year: 2025,
        credits: { production: 'Produced & Edited by Keith Fredericks', music: '“Centuries” by Fall Out Boy' },
      },
      {
        id: 'legend',
        title: 'Legend',
        videoId: '8lSdy9shgLs',
        playback: 'youtube',
        year: 2024,        
        start: 1011,
        credits: { production: 'Produced & Edited by Keith Fredericks', music: '“Legend” by The Score' },
      },
    ],
  },
  'senior-tribute': {
    name: 'Senior Tribute',
    description: 'Childhood photos, family memories, and the final moments of a high school career. Honor the graduating seniors and the people who have been there since the beginning.',
    examples: [
      {
        id: 'where-we-begin',
        title: 'Where We Begin',
        videoId: 'mvT5fLxQdz0',
        year: 2026,
        artwork: { src: '/media/senior-tribute.webp', alt: 'Childhood soccer photos appear in the senior tribute film.', width: 1200, height: 675 },
        credits: { production: 'Produced & Edited by Keith Fredericks', music: '“Where We Begin” — Original Composition by Keith Fredericks' },
      },
      {
        id: 'best-day',
        title: 'Best Day',
        videoId: 'BhKXtKYNg1Q',
        playback: 'youtube',
        year: 2025,
        credits: { production: 'Produced & Edited by Keith Fredericks', music: '“Best Day” by Taylor Swift' },
      },
      {
        id: 'never-grow-up',
        title: 'Never Grow Up',
        videoId: '8lSdy9shgLs',
        playback: 'youtube',
        year: 2024,           
        start: 721,
        credits: { production: 'Produced & Edited by Keith Fredericks', music: '“Never Grow Up” by Taylor Swift' },
      },
    ],
  },
  'scoreboard-intimidation': {
    name: 'Scoreboard Intimidation',
    description: 'Before the rosters are read, make home-field advantage felt. An opening burst of sound, action, and team identity built for the scoreboard.',
    examples: [
      {
        id: 'mansfield-game-day-opener',
        title: 'Mansfield Game-Day Opener',
        videoId: 'S3PRRNmkj1E',
        year: 2026,
        artwork: { src: '/media/scoreboard-intimidation.webp', alt: 'A Mansfield player in a cinematic game-day hype sequence.', width: 1200, height: 675 },
        credits: { production: 'Produced & Edited by Keith Fredericks', music: 'Third-party music' },
      },
    ],
  },
  'pregame-hype': {
    name: 'Pregame Hype',
    description: 'Rally players, families, and fans around the next big game. A short, shareable reminder that the season is still being written.',
    examples: [
      {
        id: 'were-not-done',
        title: 'We’re Not Done',
        videoId: 'ZH15J1YO1u4',
        year: 2025,
        orientation: 'portrait',
        artwork: { src: '/media/pregame-hype.webp', alt: 'Hornets versus Hawks pregame film artwork.', width: 600, height: 1067 },
        credits: { production: 'Produced & Edited by Keith Fredericks', music: '“Tonight We Fight” — Original Composition by Keith Fredericks' },
      },
    ],
  },
  spotlight: {
    name: 'Spotlight',
    showAdditionalExamples: true,
    description: 'One hero, their biggest moments, and the personality behind the plays. A character-focused trailer for recruitment or a lasting keepsake.',
    examples: [
      {
        id: 'sarah-jones',
        title: 'Sarah Jones',
        videoId: '4jKW63dn3Wc',
        orientation: 'portrait',
        artwork: { src: '/media/sarah-jones.webp', alt: 'Sarah Jones Spotlight film preview.', width: 405, height: 720 },
      },
      {
        id: 'hailey',
        title: 'Hailey Nieratko',
        videoId: 'zZsoXJaSsgA',
      },
    ],
  },
  'spotlight-story': {
    name: 'Spotlight Story',
    description: 'An athlete or coach tells their own story. Documentary-style interviews and narration connect the highlights to the person behind them.',
    examples: [],
  },
};

export const productGroups = [
  {
    id: 'celebrating-the-season',
    name: 'Celebrating the season',
    description: 'The opening, the journey, the goodbye. Films that bring the team and their families together.',
    productIds: ['season-story', 'heroes-opening', 'season-end', 'senior-tribute'],
  },
  {
    id: 'game-day',
    name: 'Building game-day energy',
    description: 'Make the next game feel like the occasion it is, from the first social post to the home-field screen.',
    productIds: ['scoreboard-intimidation', 'pregame-hype'],
  },
  {
    id: 'spotlights',
    name: 'Spotlights',
    description: 'For the athletes who put in the work and the coaches who help them find their way.',
    productIds: ['spotlight', 'spotlight-story'],
  },
];

export const homepageProductIds = ['season-story', 'senior-tribute', 'season-end'];
export const spotlightProductIds = ['spotlight', 'spotlight-story'];
export const featuredFilm = products['season-story'].examples[0];

// Keep older examples and the catalog UI available without emitting their links.
export const showAdditionalExamples = false;

// Retired Season Story entries: retained for reference, never rendered by the site.
export const archivedSeasonStories: FilmExample[] = [
      {
        id: 'born-for-this',
        title: 'Born for This',
        videoId: 'SalfAixZg50',
        playback: 'youtube',
        year: 2026,
        artwork: { src: '/media/season-story.webp', alt: 'A Mansfield player races toward the ball on the soccer field.', width: 1200, height: 675 },
        credits: { production: 'Produced & Edited by Keith Fredericks', music: '“Born for This” by The Score' },
      },
      {
        id: 'unstoppable',
        title: 'Unstoppable',
        videoId: '8lSdy9shgLs',
        playback: 'youtube',
        year: 2024,
        start: 526,
        credits: { production: 'Produced & Edited by Keith Fredericks', music: '“Unstoppable” by The Score' },
      },
];
