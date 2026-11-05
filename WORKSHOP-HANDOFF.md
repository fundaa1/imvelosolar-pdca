# Workshop handoff — ImveloSolar

## Identity and scope

- Source: https://github.com/fundaa1/imvelosolar, base `fba42fa32ec4ab6ff0075b1b87de89bdbdc39730` (8 April 2025).
- Working copy: https://github.com/fundaa1/imvelosolar-pdca, branch `main`.
- Codex selected, implemented and checked the change. No work was delegated. The commissioner owns acceptance.

## Preview and contracts

Run `npm ci`, then `npm run dev -- --host 127.0.0.1 --port 3020 --strictPort`, and open the printed local address. The local preview requires the server to remain running. Run `npm run build` for a production build.

The hero enquiry link, the Contact menu item and the footer enquiry link lead to the checklist. The checklist can be copied using the browser clipboard; if clipboard access fails, the page offers a manual-copy instruction. It does not submit an enquiry or book a service. Contact and booking details await confirmation. The mobile menu exposes its expanded state and closes after a navigation selection.

## PDCA-STEI cycle

- Plan: repair the broken enquiry navigation and offer a useful preparation step without assuming contact information.
- Do: add a contact target and checklist, replace the unconnected booking control, remove unverified phone/email/address and placeholder social links from the edited navigation and footer, and label the mobile menu.
- Check: `npm ci`, `npm run build` and `git diff --check` passed. In the local browser the hero link reached `#contact` and the mobile menu opened and closed after Contact was chosen. Clipboard success and fallback were not exercised; commissioner acceptance is pending.
- Act: obtain commissioner feedback and confirmed contact and booking details before implementing a real enquiry channel.
- Standardise: the current page prepares information locally and does not send personal data.
- Train: use Prepare an Enquiry or the Contact menu, read the checklist, and try Copy checklist in a browser with clipboard access.
- Enforce: build and verify desktop/mobile navigation, the clipboard success/fallback and commissioner walkthrough before acceptance.
- Improve: verify inherited testimonials, service claims and numerical benefit claims against evidence, and confirm branding, service area and contact details before publishing.
- Work: Codex completed the work. No work was delegated.

## Known limitations and next agent

The original project contains customer testimonials, service promises and numerical performance claims that have not been independently verified. The README refers to an MIT license file but no LICENSE file exists in the source; package metadata states ISC. Resolve licensing and content rights before reuse. The dependency install reported an esbuild install-script warning; the build succeeded, and Browserslist data reported being 19 months old. Verify dependencies and decide on updates separately.

Next, obtain confirmed content and contact details, then replace or remove unverified claims and implement an agreed enquiry flow. Preserve the existing working copy and record every decision, validation and commissioner acceptance. No public website deployment has been performed.
