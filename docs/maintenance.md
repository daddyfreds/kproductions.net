# Engineering and release guide

## How the site fits together

K Productions uses Astro in static mode. Build output goes to `dist/`. The prototype renders `/`, the full catalog at `/films/`, and `/premieres/mansfield-2026/`. The homepage features Team Films, Spotlights, Posters, Premieres, and Start a Project. [Astro config](../astro.config.mjs) sets `https://kproductions.net` as the production site URL and uses trailing slashes. Asset and navigation URLs assume deployment at the root of a domain.

| Area | Responsibility |
| --- | --- |
| [Pages](../src/pages/) | Homepage, routes, and page-level composition |
| [Layout](../src/layouts/SiteLayout.astro) | Document metadata, navigation, footer, and shared browser-side media viewer |
| [Components](../src/components/) | Reusable poster, film preview and link, and Spotlight formats |
| [Film data](../src/data/films.ts) | Shared products, catalog groups, examples, artwork, credits, and homepage selection |
| [Premiere collection](../src/content.config.ts) | Validates the Markdown front matter and feeds the static premiere routes |
| [Styles and assets](design-guide.md) | Shared CSS tokens and web-ready media |

The YouTube player is created on click with the privacy-enhanced embed domain. The anchor is a direct YouTube link, including the configured start time. The shared dialog removes the iframe on close and restores focus. The poster viewer uses the same dialog and links directly to the detail file.

Film examples can set `playback: 'youtube'` to open the watch page in a new tab. The shared film link sets `target="_blank"` and `rel="noopener noreferrer"`, and omits the dialog hook. The default `embed` mode uses the existing viewer. Born for This is configured for YouTube playback across the homepage, catalog, and premiere program.

Example IDs identify individual works, including different segments of the same upload. Film links pass the product label, year, credits, and orientation to the shared viewer. The catalog keeps all products visible through ordinary anchors and scrolling, and the Spotlight component reads the same data on both pages.

Keep changes in website source, and review the Git diff for generated output or unrelated production material. The [ignore rules](../.gitignore) cover `dist/`, `node_modules/`, `.astro/`, and local `.tooling/`. Use the committed pnpm lockfile and the build approvals for esbuild and sharp in [pnpm-workspace.yaml](../pnpm-workspace.yaml).

## Verify an update

1. From `website/`, run `pnpm install --frozen-lockfile` when setting up the checkout, then `pnpm build`. Use `pnpm preview` to inspect the built pages. The [README](../README.md#run-locally) also has the development command.
2. Open the homepage and affected story routes. Check navigation, calls to action, correct image loading, and page titles. For layout changes, test narrow mobile, tablet, and desktop widths, plus keyboard focus and reduced motion.
3. For media changes, verify embedded playback or new-tab navigation according to the example’s `playback` setting. Check the actual video, direct YouTube fallback, timestamps, portrait framing, credits, poster zoom, and Escape returning focus to the trigger. Check the direct links with JavaScript disabled. Confirm every manifest example appears under the right product and that catalog jump links and homepage selections land in the intended sections.
4. For an inquiry change, submit a clearly labeled test from the intended public flow. Confirm the success screen and receipt in the owner’s inbox.

## Public release

The current checkout contains the approved visual prototype and the expanded film catalog with the supplied final video links. Public release is a separate milestone. The completed Mansfield premiere story and Tally connection are pending. The launch gate is a completed premiere story with cleared media, working inquiry delivery, and a reviewed public build.

During the November 12, 2026 review, the owner confirmed that the final films are private or scheduled until the premiere. Their final URLs are already wired into the site. Recheck actual embedded playback after the videos are released and update this note when that check is complete. The viewer’s direct YouTube fallback is available during review.

- [ ] Review every route and every file copied from `public/`. Astro currently generates premiere pages even when the story is marked as a draft. Keep unapproved draft routes and media out of the public source and output. The prototype’s `noindex` metadata and `robots.txt` block are crawler directives.
- [ ] Complete the public navigation and remove prototype copy and crawler blocks only for a build ready for indexing. Verify the configured canonical domain and paths.
- [ ] Prepare the clean public `daddyfreds/kproductions-site` GitHub Pages repository from the reviewed website source. The parent production repository contains proposals, masters, and production references. Carry across only the site source, maintenance docs, lockfile, and cleared web derivatives.
- [ ] Add the GitHub Actions Pages workflow in the release repository. Install from the lockfile, build with Astro, upload `dist/` as the Pages artifact, and set GitHub Pages to use Actions as its publishing source.
- [ ] Verify domain ownership in GitHub. Check the authoritative DNS provider before changing records. If Namecheap is hosting DNS, follow its GitHub Pages setup for the apex records and the `www` CNAME. Preserve mail and domain-verification records. Enable HTTPS in Pages and confirm that `www.kproductions.net` redirects to `https://kproductions.net`.
- [ ] On the live domain, verify the homepage, a direct premiere URL, assets, video playback, and inbox delivery. Record the release commit and the deployment result. To roll back a broken site release, redeploy a known-good commit from the same release repository.

[Astro and GitHub Pages](https://docs.astro.build/en/guides/deploy/github/) · [GitHub domain verification](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/verifying-your-custom-domain-for-github-pages) · [Namecheap DNS setup](https://www.namecheap.com/support/knowledgebase/article.aspx/9645/2208/how-do-i-link-my-domain-to-github-pages/)
