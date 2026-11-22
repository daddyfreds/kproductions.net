export interface Testimonial {
  id: string;
  author: string;
  year: number;
  text: string;
  excerpt?: string;
}

// Preserve the supplied wording. Excerpts must be verbatim passages of text.
export const testimonials: Testimonial[] = [
  {
    "id": "chris-joynes",
    "author": "Chris Joynes",
    "year": 2026,
    "text": "The videos are amazing. We really appreciate it and all the time and dedication. It was a great night and you had a major part in creating it.",
    "excerpt": "It was a great night and you had a major part in creating it."
  },
  {
    "id": "chris-jones",
    "author": "Chris Jones",
    "year": 2026,
    "text": "Keith did an absolutely outstanding job creating the end-of-season videos for our daughter's high school soccer team! His creativity, attention to detail, and ability to capture the emotion and spirit of the season really shine through. Every clip feels thoughtfully selected and perfectly timed to the music and lyrics, creating a wonderful blend of excitement, nostalgia, and emotion. The graphics are top-notch, and the fact that Keith composed two of the songs himself makes the project even more impressive. These videos are so much more than highlights of a soccer season; they are lasting memories that the players, families, and coaches will treasure for years to come.",
    "excerpt": "His creativity, attention to detail, and ability to capture the emotion and spirit of the season really shine through."
  },
  {
    "id": "coach-kemp",
    "author": "Coach Kemp",
    "year": 2026,
    "text": "As a Coach one of the hardest things is to capture those special moments that happen throughout the year in a format that can be enjoyed by Athlete and Family alike. Keith was able to do that and much more for our teams.  Creative, spot on music, top grade quality.   It has become the highlight of our post season gatherings. Highly recommend ",
    "excerpt": "It has become the highlight of our post season gatherings."
  },
  {
    "id": "aileen-turnbull",
    "author": "Aileen Turnbull",
    "year": 2026,
    "text": "Absolutely amazing work and we are all HUGE fans!"
  },
  {
    "id": "lauren-herpst-rogers",
    "author": "Lauren Herpst Rogers",
    "year": 2026,
    "text": "So talented! I know a team that wants to reserve him for next year! Thank you Keith for all yo up do. For the girls and school!",
    "excerpt": "So talented! I know a team that wants to reserve him for next year!"
  },
  {
    "id": "stephanie-groves-znoj",
    "author": "Stephanie Groves Znoj",
    "year": 2026,
    "text": "Absolutely INCREDIBLE! I'm a huge fan of Keith's work! So talented!"
  },
  {
    "id": "marissa-simas",
    "author": "Marissa Simas",
    "year": 2026,
    "text": "Keith is the GOAT"
  },
  {
    "id": "linda-freerksen",
    "author": "Linda Freerksen",
    "year": 2026,
    "text": "OUTSTANDING!!!! He is so very talented!"
  },
  {
    "id": "sara-diieso",
    "author": "Sara DiIeso",
    "year": 2024,
    "text": "The video you made was spectacular and I’ve watched it many times since the banquet."
  },
  {
    "id": "amy-foley",
    "author": "Amy Foley",
    "year": 2024,
    "text": "You did an amazing job. Best season video ever. "
  },
  {
    "id": "tony-troilo",
    "author": "Tony Troilo",
    "year": 2024,
    "text": "This is worth watching multiple times. Terrific job!"
  },
  {
    "id": "john-mcpherson",
    "author": "John Mcpherson",
    "year": 2025,
    "text": "Keith that was unbelievable and unmatched."
  }
];

// Curate for impact, craft, and replay value; keep this selection short.
export const homepageTestimonialIds = [
  'coach-kemp', 'chris-joynes', 'chris-jones', 'sara-diieso', 'aileen-turnbull',
];
export const featuredTestimonialIds = ['chris-joynes', 'coach-kemp', 'chris-jones'];
