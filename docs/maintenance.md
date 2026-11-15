# Engineering and release guide

## Repository ownership and update flow

D:/Repos/kproductions.net is the canonical website checkout. Website code, copy, product data, web assets, PDFs, and the design and maintenance guides belong here. Its GitHub repository is daddyfreds/kproductions.net.

D:/Repos/kproductions holds production masters and internal business material. Export selected images, clips, and documents from that workspace into this site's public folder when they are ready for public release. Keep source project files, private proposals, and internal planning in the production repository.

1. Open D:/Repos/kproductions.net and edit the website there. Add public files directly to public/ and update the relevant guide alongside workflow or design changes.
2. Preview locally, run pnpm build, and review the Git diff and the affected pages.
3. Commit the reviewed changes and push to main in daddyfreds/kproductions.net.
4. Run Actions > Publish website > Run workflow on main. Wait for success, then check https://kproductions.net and the changed routes or files.

The earlier D:/Repos/kproductions/website folder is an archived prototype. Website edits start in the canonical checkout. The original content manifest is retained separately at D:/Repos/kproductions/Website Reference/Site Content Manifest.txt. The old prototype folder can be removed as a separate cleanup once its archival documentation and preserved reference are committed in the production repository.

## How the site fits together

K Productions uses Astro in static mode. Build output goes to `dist/`. The prototype renders `/`, the full catalog at `/films/`, and premiere story routes only when their `draft` flag is false. The homepage features Team Films, Spotlights, Posters, Premieres, and Start a Project. [Astro config](../astro.config.mjs) sets `https://kproductions.net` as the production site URL and uses trailing slashes. Asset and navigation URLs assume deployment at the root of a domain.

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

1. From the repository root, run `pnpm install --frozen-lockfile` when setting up the checkout, then `pnpm build`. Use `pnpm preview` to inspect the built pages. The [README](../README.md#run-locally) also has the development command.
2. Open the homepage and affected story routes. Check navigation, calls to action, correct image loading, and page titles. For layout changes, test narrow mobile, tablet, and desktop widths, plus keyboard focus and reduced motion.
3. For media changes, verify embedded playback or new-tab navigation according to the example’s `playback` setting. Check the actual video, direct YouTube fallback, timestamps, portrait framing, credits, poster zoom, and Escape returning focus to the trigger. Check the direct links with JavaScript disabled. Confirm every manifest example appears under the right product and that catalog jump links and homepage selections land in the intended sections.
4. For an inquiry change, submit a clearly labeled test from the intended public flow. Confirm the success screen and receipt in the owner’s inbox.

## Public release

The site soft-launched on November 12, 2026 at https://kproductions.net, with HTTPS and domain redirects verified. This dedicated repository is the canonical website source. The Tally inquiry form is connected and the owner confirmed notification delivery. See [launch progress](launch.md) for the release record. The completed premiere story and indexing review belong to the post-banquet update.

During the November 12, 2026 review, the owner confirmed that the final films are private or scheduled until the premiere. Their final URLs are already wired into the site. Recheck actual embedded playback after the videos are released and update this note when that check is complete. The viewer’s direct YouTube fallback is available during review.

- [ ] Review every route and every file copied from `public/`. Draft premiere stories are excluded from generated routes. Review the homepage teaser separately. Keep draft story routes out of the public build and confirm the exported media is suitable for publication. The prototype’s `noindex` metadata and `robots.txt` block are crawler directives.
- [ ] Complete the public navigation and remove prototype copy and crawler blocks only for a build ready for indexing. Verify the configured canonical domain and paths.
- [ ] Use the dedicated `daddyfreds/kproductions.net` GitHub repository. Source is at its root. Production masters and earlier references remain in D:/Repos/kproductions.
- [ ] Use the prepared `.github/workflows/deploy.yml` workflow. In repository Settings > Pages, choose GitHub Actions. Push a reviewed commit to main, then run Publish website from Actions. Deployments are manually triggered. The workflow installs and builds with Astro, uploads the static output, and deploys the Pages artifact.
- [ ] Verify domain ownership in GitHub. Check the authoritative DNS provider before changing records. If Namecheap is hosting DNS, follow its GitHub Pages setup for the apex records and the `www` CNAME. Preserve mail and domain-verification records. Enable HTTPS in Pages and confirm that `www.kproductions.net` redirects to `https://kproductions.net`.
- [ ] On the live domain, verify the homepage, a direct premiere URL, assets, video playback, and inbox delivery. Record the release commit and the deployment result. To roll back a broken site release, redeploy a known-good commit from the same release repository.

[Astro and GitHub Pages](https://docs.astro.build/en/guides/deploy/github/) · [GitHub domain verification](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/verifying-your-custom-domain-for-github-pages) · [Namecheap DNS setup](https://www.namecheap.com/support/knowledgebase/article.aspx/9645/2208/how-do-i-link-my-domain-to-github-pages/)
