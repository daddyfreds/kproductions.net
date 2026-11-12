# Soft launch

Canonical checkout is D:/Repos/kproductions.net. Remote is daddyfreds/kproductions.net.

- [x] Copy the website source, web derivatives, and guides into the dedicated repository.
- [x] Prepare a manual GitHub Actions Pages deployment workflow and custom-domain file.
- [x] Confirm the upcoming-event teaser, hidden draft story, and deferred search indexing.
- [x] Connect the published Tally inquiry form at https://tally.so/r/2jaDKM.
- [x] Confirm the owner received a test inquiry notification.
- [x] Build and review the public output, including the published inquiry link.
- [x] Push the initial reviewed release to GitHub. Commit 14e7d2b.
- [x] Confirm the repository is public for GitHub Pages Free.
- [x] In repository Settings > Pages, set the publishing source to GitHub Actions.
- [x] Set the repository Pages custom domain to kproductions.net. Confirmed by the owner's settings screenshot.
- [x] Verify domain ownership in account Settings > Pages. Owner confirmed verification on November 12, 2026.
- [x] Configure apex and www DNS. Public DNS verified all four GitHub Pages A records, www pointing to daddyfreds.github.io, and the GitHub verification TXT record.
- [x] Run Publish website successfully. Deployment run https://github.com/daddyfreds/kproductions.net/actions/runs/43299455068.
- [ ] Enable HTTPS and verify apex, www redirect, film links, and inquiries on the live domain.

## After the banquet

Complete the Mansfield story with cleared event media, review its copy, and enable it for publication. Review video availability and per-example playback modes. Review search indexing and the inquiry path. Update this checklist with the release commit and completed verification.

## Prepared soft-launch defaults

The homepage shows the upcoming Mansfield premiere and a post-banquet story notice. Draft story routes are excluded. The prototype footer label is removed. The owner chose to retain noindex metadata and the robots block until the post-banquet update. The inquiry button opens the published Tally form in a new tab.

## HTTPS provisioning check

The initial publication serves the expected homepage and catalog over HTTP. Both authoritative Namecheap nameservers and Google and Cloudflare resolvers return the expected GitHub Pages A records and www CNAME. No apex AAAA or CAA records were found. HTTPS currently fails certificate hostname validation while GitHub's domain check is pending. The owner removed and re-saved the repository custom domain to restart provisioning. Certificate issuance and HTTPS enforcement remain pending.
