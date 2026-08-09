# Audrey Li, personal portfolio

A first version. Plain HTML, CSS and a small amount of JavaScript, with no build
step and no dependencies. It is meant to be added to over time, so the project
structure matters as much as what is on the page today.

## Preview it

Open `index.html` in a browser, or run a local server so the relative links
behave exactly as they will when the site is hosted:

```bash
cd audrey-portfolio
python3 -m http.server 8000
# then open http://localhost:8000
```

There is nothing to install, build, lint or test.

## What is here

| File | What it is |
| --- | --- |
| `index.html` | Home. Intro, four featured projects, communities, fencing, short about. |
| `work.html` | The full work index, including entries that are not documented yet. |
| `projects/ifp-partner-package.html` | The one finished project page. |
| `projects/_template.html` | Copy this to start a new project page. It has a checklist at the top. |
| `about.html` | About and contact. |
| `styles.css` | The whole design system. Tokens are at the top of the file. |
| `script.js` | Theme switch, image placeholders, the stamp notes and the one process reveal. |
| `assets/` | Images. See `assets/README.md` for the filenames the pages expect. |
| `assets/fonts/` | Fraunces and Karla, self-hosted, with their OFL licences. |
| `assets/handwriting/` | Empty. The SVG marks to supply, and the rules for them. |
| `content/` | The shape of a future Dispatches section. Nothing reads it yet. |
| `figma-import/` | Five reference screens as SVG, for importing into Figma. |

## Adding a project later

1. Copy `projects/_template.html` and rename it, for example `projects/nooki.html`.
2. Work through the ALL-CAPS placeholders in that copy.
3. Add a row to the index in `work.html`. Copy one `<li class="index-row">`
   block and keep the three parts in order: title, description, status.
4. If it belongs in the featured set, copy one `<article class="project">` block
   in `index.html`. The layout class on that block decides how much space it
   takes:

   | Class | Shape |
   | --- | --- |
   | `project--wide` | Full-width image with the text underneath in two columns |
   | `project--left` | Image on the left, text on the right |
   | `project--right` | Text on the left, image on the right |
   | `project--text` | Text-led with a smaller image beside it |

   Mixing these is what keeps the index from looking like a grid of identical
   cards. Do not give every project the same one.

Both files have comments at the top of those sections explaining the same thing.

## Project previews

The featured previews on the home page respond when they are pointed at or when
the project's link takes focus: the print lifts four pixels, tilts under a
degree, and picks up a soft shadow over 200ms. The caption bar under it stays
put. Titles, roles and descriptions are readable without any of that.

A preview whose project has somewhere to go wraps its image in a link, so
clicking the image opens the same place as the title link. That link is out of
the tab order and hidden from assistive technology, so a keyboard user meets one
link per project rather than two. The Three.js room has no link and no lift,
because there is nowhere to send anyone yet. Touch gets a plain pressed state,
and `prefers-reduced-motion` removes the movement.

## Tools I keep coming back to

A compact section on the home page, between the communities and fencing
sections. Each tool is a small stamp: official icon, name visible at rest, and
one true line about where Audrey used it that appears on hover, on keyboard
focus, and on tap. Notes keep their space at rest, so nothing on the page moves
when one opens.

- Icons are the official marks from [Simple Icons](https://simpleicons.org)
  (CC0), inlined as single paths and drawn in the site palette rather than in
  brand colours. The exception is Java: Simple Icons dropped that mark, so the
  Java cup comes from [Devicon](https://devicon.dev) (MIT). To add a tool, copy
  an `<li class="stamp">` block in `index.html` and paste the `d` attribute from
  that project's SVG.
- Every line has to be something Audrey can back up. What is deliberately not a
  stamp: **Cloud Firestore** has no separate official mark, so it is named in
  the Firebase note instead of getting an invented icon, and **FigJam** has no
  icon in the set, so the debrief work stays in the communities copy where it
  already was.
- **Vercel is still to come.** Add it to the Ship group once the deployment is
  live and verifiable, next to GitHub. There is no Simple Icons issue with it,
  so it is one `<li class="stamp">` block plus a one-line note.
- The stamps are paper in both themes. In dark mode the paper goes aged ivory on
  the dark ground, what is printed on it keeps the light palette, the punched
  holes are lighter than the page so the perforation reads at rest, and the
  keyboard focus ring stays cobalt so it holds up against the ivory. Those
  values are the `--paper-*` tokens at the top of `styles.css`.
- Rotation is fixed per position and never exceeds 1.2 degrees, so the
  collection looks placed by hand but never reshuffles between loads. Under
  `prefers-reduced-motion` the tilt stays and the lift is removed.

## Images

Six real images are in place: a screenshot of the live Nooki app, three pages of
the partner package and one archived draft page exported from Figma, and a
screenshot of bucs.cus.ca. Details are in `assets/README.md`.

Two are still needed. Both hold their space on the page and name the file they
want, and neither requests a file that is not there, so the console stays clean:

- [ ] `assets/portfolio-room.png` — a capture of the Three.js room, 16:9, 1600x900
- [ ] `assets/fencing-01.jpg` — a real fencing photo, 4:5 portrait, 1400x1750

For each one: drop the file into `assets/`, delete `is-missing` from that figure in
`index.html`, and uncomment the `<img>` line directly underneath it.

## Figma

- A native file called **Audrey Li Portfolio v1** sits in Audrey's Figma
  drafts. It holds the colour variables (light and dark palettes), the ten text
  styles, and the desktop home screen built with Auto Layout and real text
  layers. It is a private draft, so the link is deliberately not published here.
  The remaining screens were not written natively because the Figma MCP call
  limit on the Starter plan was reached partway through.
- `figma-import/` holds the same five screens as standalone SVG files with live
  text: `01-home.svg`, `02-work-index.svg`, `03-ifp-detail.svg`,
  `04-about-contact.svg`, `05-mobile-home.svg`. Drag them onto a Figma canvas.
  They use Georgia, Helvetica and Caveat so they import without missing fonts.
  They predate the move to Fraunces and Karla, so regenerate them before using
  them as a type reference.

The reference these screens were derived from is Template 1 in the community
file listed in `CLAUDE.md`. Three things were carried over: the wide margin with
a single content column, full-width 16:9 project images with a caption bar, and
text-only navigation with arrow links. Everything else, including the palette,
type, structure and all copy, is Audrey's.

## Typography

Two families, both self-hosted in `assets/fonts/` with their OFL licences, so the
site still makes no third-party requests.

- **Fraunces** carries the editorial voice: the hero at 800, section headings and
  project titles at 700.
- **Karla** carries the information: body at 400, navigation and controls at 500,
  small uppercase labels at 600.
- **Cedarville Cursive** is the handwritten layer, and nothing else. It is on the
  short muted-red personal notes only, never on headings, body copy, navigation,
  controls, project titles or stamp names.
- Only the cuts in use are loaded, latin subset, six files totalling 192 KB.
  Fraunces 800 and Karla 400 are preloaded because they paint first.
- Major headings are sentence case with no added tracking. Uppercase and wide
  tracking are kept for the small print-like labels only: BUILD, SHIP, project
  numbers, roles, statuses, tags and IN PROGRESS.
- The fallbacks are ordinary system faces, and there is no third sans family
  hiding in the stack.

## Handwriting

Short personal notes are set in Cedarville Cursive, self-hosted like the other
faces. It is used for those notes and for the welcome postcard message, nowhere
else.

`assets/handwriting/README.md` still lists nine SVG marks worth supplying in
Audrey's own hand: arrows, an underline, a circle, a star and a few short
phrases. Those replace or sit beside the typed notes when they exist. A drawn
mark can do things a font cannot, so the folder stays.

## Welcome postcard

The home page opens once per browser session with a short sequence: a creased
sheet of paper relaxes flat, a warm ivory postcard appears under it, and a
postmark, a stamp and a handwritten line arrive before the whole thing fades.
About 1.7 seconds end to end.

- The homepage underneath has already loaded and is usable the moment it closes.
- Skip is visible from the first frame and takes focus. Escape also closes it.
  Focus is never trapped, and the overlay is removed from the document when done.
- Scrolling is locked only while it is up.
- `sessionStorage` keeps it to one appearance per session, so returning from a
  project page does not replay it.
- Under `prefers-reduced-motion` there is no crumpling or unfolding. The finished
  card is shown, the button reads Enter portfolio, and it closes on its own.
- It is built from layered clip-path panels, CSS 3D transforms and the Web
  Animations API. No library, no video, no remote texture.
- Without JavaScript it never appears at all.

## Torn paper reveals

Two of the four featured previews, Nooki and the partner package, are covered by
a thin sheet of paper that is pulled off once when the project first reaches the
viewport. The sheet has an irregular torn edge, a pale fibrous line and a
restrained shadow.

Titles, descriptions and links are readable and clickable throughout: the sheet
sits over the print only and takes no pointer events. Under reduced motion it is
never drawn, and without JavaScript it is never drawn either, so nobody meets a
cover that cannot be removed. No annotation was added to either sheet, because
neither project had a short true phrase that belonged there.

## Dispatches, later

`content/dispatches.json` holds the agreed shape for a future section gathering
photography, video, food and travel. Nothing reads it, no page or navigation
link exists, and it goes public only once three real entries exist. See
`content/README.md`.

## Design system, in one place

All tokens live at the top of `styles.css`:

- Cream ground `#f4f0e7`, near-black ink `#17150f`, cobalt `#1f3bae` for links,
  muted blush `#a85c50` for numbers and handwritten notes, sage `#5f7358` as the
  third accent.
- Dark mode is warm ink rather than black: ground `#171512`, raised `#1f1c18`,
  rules `#39342d`, text `#e8e0d2` and `#aaa194`. It is one `[data-theme="dark"]`
  block right underneath the light tokens, so both themes stay in step.
- One display serif role, one sans text role, one hand role used only for short
  notes. Change the three font stacks in one place.
- The theme switch stores a choice in `localStorage` and otherwise follows the
  system setting. An inline script in each `<head>` applies it before first
  paint.
- The site respects `prefers-reduced-motion`, has visible focus outlines, and
  does not scroll horizontally at 360 px.

## Publishing

Before the first deploy, set the real domain. Four pages carry a `canonical`
link and `og:url`, plus `sitemap.xml` and `robots.txt`, and they all currently
use the placeholder `https://audreyli.dev`:

```bash
# replace with the real address, for example https://audrey-portfolio.vercel.app
grep -rl "audreyli.dev" . --include="*.html" --include="*.xml" --include="*.txt" \
  | xargs sed -i '' 's|https://audreyli.dev|https://YOUR-DOMAIN|g'
```

Then publish:

```bash
git init
git add -A
git commit -m "Audrey Li portfolio, first public version"
git branch -M main
gh repo create audrey-portfolio --public --source=. --remote=origin --push
```

The site is static with no build step, so any host works. On Vercel, import the
repository and accept the defaults: no framework, no build command, output
directory `.`. GitHub Pages works too, from the repository settings.

`.gitignore` keeps `.claude/` and `CLAUDE.md` out of the public repository.
Delete those two lines if you would rather publish the build brief with the site.

## Launch checklist, already done

- Titles, meta descriptions, canonical links, Open Graph and Twitter card tags,
  and a `theme-color` for each scheme on all four pages
- `favicon.svg` with `favicon-32.png`, `favicon.ico` and `apple-touch-icon.png`
  as fallbacks, plus `robots.txt` and `sitemap.xml`
- Every image carries alt text and `width`/`height`, so nothing jumps while
  loading
- No horizontal scrolling at 360, 768 or 1440, on any page
- No console errors and no failed requests
- Every external link returns 200 and carries `rel="noopener noreferrer"`
- No credentials anywhere. The only personal detail published on purpose is the
  contact email address

## Things left out on purpose

- No LinkedIn link, because the URL was not available. Add it to the contact
  list in `about.html` and to the footer on all four pages when you have it.
- No Vercel stamp in the tools section until the deployment is live.
- The contact address is `4udr3y.li@gmail.com`. Swap it everywhere if you would
  rather use another address.
- No case studies for Nooki, the portfolio room, DayWheel or the Blender work.
  Those pages should be written from real screenshots and notes, not filled in
  with guesses.
- No competition results, coaching numbers or referee titles in the fencing
  section, since there was no source for them.
