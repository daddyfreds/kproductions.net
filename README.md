# K Productions website

K Productions’ static Astro site showcases season films, movie posters, and premiere nights. The current build is a local prototype with a curated homepage, a complete [Films catalog](src/pages/films.astro), and a [Mansfield premiere story](src/content/premieres/mansfield-2026.md). The November 17, 2026 premiere has planned-coverage panels ready for event assets.

The canonical source repository is https://github.com/daddyfreds/kproductions.net. Production masters and the earlier prototype live separately in D:/Repos/kproductions.

## Start here

| If you’re working on… | Read… |
| --- | --- |
| Copy, films, posters, premiere stories, or inquiries | [Content guide](docs/content-guide.md) |
| Page design, logo, typography, imagery, or motion | [Design guide](docs/design-guide.md) |
| Project structure, testing, GitHub Pages, or DNS | [Engineering and release guide](docs/maintenance.md) |
| An agent handoff | [Repository guidance](AGENTS.md) |

## Run locally

From the repository root (`D:/Repos/kproductions.net`), use Node 22.12 or later and pnpm. The prototype was built with Node 24.22.1 and pnpm 11.25.0.

```sh
pnpm install --frozen-lockfile
pnpm dev
```

Open the local URL printed by Astro. Review `/`, `/films/`, and `/premieres/mansfield-2026/`. To verify the static output, run `pnpm build`, then `pnpm preview` and use the URL it prints.

## Keep the guides current

Update the affected guide in the same change when you move content, add an editing workflow, revise an approved design pattern, or change the release process. Keep project status and launch requirements in the [release checklist](docs/maintenance.md#public-release).

## Publishing

The GitHub Actions workflow is manually triggered. After a reviewed commit is pushed to main, open Actions, choose Publish website, and select Run workflow. See [launch progress](docs/launch.md) for account setup and launch status.
