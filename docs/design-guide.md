# Design guide

## Lead with the work

The approved direction is **The Quiet Build**. Open with one emotional frame, give it room to hold, and let the visitor choose when to watch. The homepage moves from the opening film frame through Team Films, Spotlights, the full-height poster, the premiere story, and the inquiry. Keep the path from a real example to the corresponding commission easy to follow.

Write for coaches, club directors, booster groups, and families. Use concrete descriptions of the work and what the team experiences. The studio signature is **Glories. Stories. In Motion**. The hero pitch is **“We know they’re heroes, so let’s make their movie.”** Use **“Every season has heroes. Every hero needs a movie. Every movie needs a poster.”** where it introduces the poster.

## Use the existing visual system

[The site stylesheet](../src/styles/site.css) is the source of truth. Extend the shared tokens and patterns when a new page needs them.

| Role | Current treatment |
| --- | --- |
| Canvas and panels | `--ink` `#111210` and `--panel` `#191c17` |
| Copy and secondary text | `--paper` `#f4efe4` and `--muted` `#bcbcb0` |
| Accent and separators | `--accent` `#d8eb9d` for emphasis and primary actions. `--line` `#383b31` for dividers and borders. |
| Type | Aptos, Segoe UI, Arial, then sans-serif. Use Georgia italic for a deliberate phrase in a display heading and monospace for short labels and credits. |
| Layout | Reuse `.shell` for the 1220px maximum content width and fluid margins. Use `.section` for the shared vertical spacing. |
| Actions | Use the solid accent button for the main action, outline for its companion, and text links for related work. Preserve focus visibility and make labels describe the destination or action. |

Use the [light lockup](../public/media/logo-light.svg) on dark backgrounds and the [dark lockup](../public/media/logo-dark.svg) where a light surface calls for it. The [favicon](../public/media/favicon.svg) is the silhouette. Preserve proportions and leave breathing room around the logo and the studio signature. If the Illustrator master changes, regenerate all three web derivatives and inspect them at small sizes.

## Compose around the media

- **Hero.** Use one strong subject and intentional negative space. Put the headline over the darker side on desktop. On narrow screens, use the dedicated crop and let the copy sit below the image. Check the contrast against the actual still.
- **Team Films.** Feature Season Story, Senior Tribute, and Season End on the homepage. Each teaser identifies the product, opens its lead example, and links to its catalog section. The hero’s Watch the Films button opens the complete YouTube playlist in a new tab. Use the catalog for the complete range.
- **Film catalog.** The `/films/` page uses product jump links and scrollable product sections. Group Season Story, Heroes’ Opening, Season End, and Senior Tribute under Celebrating the season. Group Scoreboard Intimidation and Pregame Hype under Building game-day energy. Give each product a short pitch, one prominent example. Additional-example layouts are retained but currently disabled. Keep product and film titles visible so the Season End film named Spotlight is clearly identified.
- **Spotlights.** Give Spotlight and Spotlight Story their own homepage section and catalog group. Both formats can feature athletes or coaches. Feature Sarah Jones under Spotlight, followed by a playable Hailey text link. Show an “Examples in production” label only while a format has no finished examples, currently Spotlight Story.
- **Posters.** Preserve the whole portrait composition, including credits and title treatment. Give the poster room in the layout and use the detail export for zoom.
- **Premieres.** Tell the story in the order the room experienced it. Use authentic setup, screening, and reaction media with short captions. For the Mansfield story, present Road to the Banquet and Senior Tribute Reactions as two playable film chapters, moving from preparation to audience response. Describe the November 17 event in the past tense.

Keep media lightweight with optimized WebP stills, explicit dimensions, and lazy loading below the fold. Keep the opening still eager and avoid a third-party player request until a visitor chooses to watch. Use motion for feedback or transitions, and honor reduced-motion preferences. Keep the navigation and media fallback links usable with JavaScript disabled.

Use the shared film preview and link for all products. Default to the embedded viewer, with a per-example `playback: 'youtube'` option to open YouTube in a new tab when needed. Archived examples retain that option for future review. Preserve portrait framing for embedded Pregame Hype. The viewer identifies the product, film, supplied year, and credits. Use compact display titles and keep the full YouTube descriptions in the source manifest.

Review at phone, tablet, and desktop widths. The current layout changes at 680px and 860px. Check long titles, image crops, visible keyboard focus, readable text, and the media viewer’s close and focus behavior.

## Testimonials

Place the homepage quote strip immediately after the splash, before Team Films. Keep the opening headline and film action dominant. Use a short curated rotation of five quotes at four-second intervals, with a 750ms CSS crossfade between outgoing and incoming quotes. Preserve space for the longest quote so the page does not jump. Do not add sound, star ratings, or dramatic impact effects.

Provide previous and next controls; the strip autoplays without a play/pause button. Pause while hovered or keyboard-focused, offscreen, or in a background tab. Manual navigation resets the four-second interval, which resumes after hover and focus leave. Reduced motion disables autoplay and removes the animation; visitors can still browse. Without JavaScript, show the first quote and the link to the static collection. Automatic changes should not be announced to screen readers.

The Mansfield story holds the fuller static selection after its film chapters, with additional voices inside a native expandable section. Keep historical years visible and avoid implying every quote describes the 2026 event.

## Original-music portfolio selection — November 22, 2026

Feature Tonight We Fight (2025) as the Season Story lead on the homepage and Films catalog, with the supplied high-five still. Born for This and Unstoppable are archived data, excluded from the active Season Story examples. Hide additional film examples at build time using showAdditionalExamples; preserve the layouts and older data for a future rights review. The Spotlight product explicitly overrides this default to display Hailey alongside Sarah Jones; older team-film sections remain hidden.

Describe the scoreboard example as Mansfield Game-Day Opener. Its music and the Heroes’ Opening stinger are third-party music; do not imply they are original compositions. On the premiere page, present the 2025 film as related Mansfield work alongside the 2026 poster, rather than as the 2026 screening program.
