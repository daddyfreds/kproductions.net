# Working on the K Productions website

- Start with the [README](README.md), then read the guide for the change. [Content](docs/content-guide.md) covers editorial updates, [design](docs/design-guide.md) covers the approved look and interaction patterns, and [maintenance](docs/maintenance.md) covers the build, verification, and release.
- Keep website changes within this directory. Production references and masters live separately in D:/Repos/kproductions. This checkout is the canonical website source. Put only approved, optimized web derivatives in the public release.
- Keep the site static. Reuse the shared layout, media links, poster component, and CSS tokens when extending a page. A film link must work as a direct YouTube link with JavaScript disabled.
- Keep prototype and release status accurate. `draft` in a premiere story changes its presentation. Draft premiere stories are excluded from the public build. The homepage may show an upcoming-event teaser.
- Update the relevant guide in the same change when you change where content lives, how to update it, the approved design system, or the build and release process. Verify links and run the checks that apply to your change.

- Make website updates directly in this checkout. Export approved web assets from the production workspace as needed. The old D:/Repos/kproductions/website folder is archived. Follow the repository ownership and update flow in docs/maintenance.md.
