# Content guide

## Find the part you want to change

| I want to update… | Edit here |
| --- | --- |
| Homepage headline, introduction, product descriptions, or calls to action | [Homepage](../src/pages/index.astro) |
| Film products, examples, YouTube links, credits, or homepage selections | [Shared film catalog](../src/data/films.ts) |
| Catalog grouping and presentation | [Film data](../src/data/films.ts) and the [Films page](../src/pages/films.astro) |
| Hero image or other web imagery | [Web media folder](../public/media/) and the page or data entry that references it |
| Mansfield premiere date, summary, story, or coverage photos | [Mansfield premiere Markdown](../src/content/premieres/mansfield-2026.md) |
| Premiere program film, poster, or shared story layout | [Premiere route template](../src/pages/premieres/%5Bslug%5D.astro) |
| Poster product copy, artwork, or credit | [Poster component](../src/components/Poster.astro) and the premiere template if it uses the same artwork |
| Navigation, studio signature, or footer | [Shared layout](../src/layouts/SiteLayout.astro) |
| Start a Project copy and future form link | The `#project` section of the [homepage](../src/pages/index.astro) |

Files under `public/media/` are referenced on the site as `/media/filename.webp`. Use lowercase, hyphenated names for new assets. Keep the full-resolution originals and production files in their source locations.

The 2026 stills are in `Events/2026 Mansfield Banquet/Video Stills/` in the separate D:/Repos/kproductions production repository. Both hero crops come from `Victory.png`. The logo derivatives come from `K Productions Logo.ai`, and the poster variants come from `2026 Girls Soccer Mansfield Poster 24x36.jpg` in the Mansfield banquet deliverables.

## Update a film or the homepage hero

1. Use the source manifest in D:/Repos/kproductions/Website Reference/Site Content Manifest.txt as the source for the supplied examples and credits. Gather the cleared YouTube link, a compact display title, matching artwork, and any intended starting time. Check the captions and confirm embedding is allowed. For `https://www.youtube.com/watch?v=8lSdy9shgLs&t=526`, enter `videoId: '8lSdy9shgLs'` and `start: 526` in the film data. Omit `start` for normal playback.
2. Add or update the example inside the appropriate entry in `products`. Use a unique `id`, and include `title`, `videoId`, and `credits`. Include a year only when supplied. Each product’s first example is its lead and needs `artwork` with `src`, `alt`, `width`, and `height`. Use `orientation: 'portrait'` for vertical films. The premiere program uses `featuredFilm`, currently the first Season Story example, Born for This. The homepage hero’s Watch the Films button links directly to the complete YouTube playlist. Update that playlist URL in the homepage hero when needed.
3. For a new hero frame, prepare separate desktop and mobile crops. The current exports are `mansfield-team.webp` at 1440×810 and `mansfield-team-small.webp` at 800×645. Check the text against the desktop frame and keep the subject visible in the mobile crop. Change the homepage credit with the image.
4. Open the film from the preview and test playback, credits, and the direct YouTube link. Keep each timestamped segment as its own example. Unstoppable, Never Grow Up, and Legend share one YouTube ID but use different IDs and offsets of 526, 721, and 1011 seconds. Keep `examples: []` for a Spotlight format while its samples are in production. Adding the finished examples to that array automatically replaces the production label on the homepage and in the catalog.

The `homepageProductIds` list controls the selection and order of homepage team features. The approved selection is Season Story, Senior Tribute, and Season End. `productGroups` controls the catalog groups, their order, and their product jump links. Preserve established product keys because they are also the anchors used in shared links. A new product needs a `products` entry and a place in its group’s `productIds`. The header opens `/films/`, while `/#films` and `/#spotlights` remain direct links to the homepage sections.

Set `playback: 'youtube'` on an example to open its real YouTube watch page in a new tab wherever that example appears. Omit `playback` or set `playback: 'embed'` to use the embedded player. Both modes preserve the configured starting timestamp. Born for This currently uses `playback: 'youtube'` to work around its YouTube embed error. To try embedding it again later, remove that setting and check the player.

Current lead artwork exports use Calling the shot, Superhero Introduction, The Spotlight, Senior Tribute Nostalgia, and Hype from the supplied video stills. Pregame Hype uses the matching vertical artwork from `images/image6.png` in the NEFC proposal archive. Older examples use text links alongside their product’s lead film. Assign matching artwork when promoting a different example to lead.

## Complete or add a premiere story

1. Edit the Mansfield Markdown file, or use it as a starting point for a new file in `src/content/premieres/`. Give a new story a distinct slug, such as `club-2027.md` for `/premieres/club-2027/`. Keep established slugs stable so previously shared links keep working.
2. Set the title, quoted ISO date (`"2026-11-17"`), location, and one-sentence summary in the YAML block at the top. Put the narrative after the closing `---`. Use the chapters to tell the story of the setup, the screening, and how people responded. Add a media block under a chapter when its cleared image is ready.

   ```yaml
   chapters:
     - title: Before the doors open
       description: Describe what K Productions did to prepare the room.
       media:
         src: /media/mansfield-2026-setup.webp
         alt: A projection screen and sound equipment ready for the banquet.
         caption: Sound check before guests arrived. Photo by the credited photographer.
   ```

3. Replace planned-coverage copy with what happened and use the actual media credits. A chapter without `media` displays a planned-coverage panel. The current schema accepts still images in chapters. Adding clips to chapters requires extending the schema and template with a click-to-play path.
4. Update the program section with the right film and poster. The current template generates a page for each Markdown entry and shares Mansfield-specific program content across all of them. Move program details into per-story data before featuring a second event with its own work. The homepage currently features Mansfield explicitly. During the soft launch, the header links to its homepage teaser.
5. Set `draft: false` when the story is complete to include its route in the public build. Update the homepage's upcoming-event copy and restore a link to the completed story. Draft stories are excluded from the public build. Follow the [release checklist](maintenance.md#public-release) before publishing.

## Update a poster or inquiry path

- **Poster.** Export a small image, a regular display image, and a larger detail image. Update the source set, dimensions, full-size link, alt text, and photography credit. For the Mansfield poster, the current variants are 500, 900, and 1800 pixels wide. Check the complete 2:3 artwork and the zoom viewer at desktop and mobile sizes.
- **Inquiry.** The project section links to https://tally.so/r/2jaDKM in a new tab. Change the link in the homepage project section when replacing the form. Keep the introduction aimed at adult team, club, or family contacts. Require name, reply email, and a short project description. Team or organization, product interest, and target date can be optional. Keep intake text-only and ask visitors to omit private athlete details. Verify spam protection, the confirmation screen, and delivery of a test inquiry to the owner.

## Editorial review

Preview the affected pages with the [local commands](../README.md#run-locally). Read the copy aloud, follow its links, and look at the result on a phone. Confirm the names, dates, footage, music, attribution, and publication clearance for identifiable athletes and attendees. Include a short summary of the changes and, for a visual update, a desktop or mobile screenshot in the review.
