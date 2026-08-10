# Building my portfolio from scratch

This is the working record behind my portfolio. It covers the choices that
shaped the site, the parts I changed my mind about, and the checks I used before
putting it online.

I am keeping this public because the final screens show only the result. The
process says more about how I define a problem, set scope, respond to feedback,
and decide what not to build.

## Starting with the problem

I did not want to begin with colours or animations. I began with a list of
questions a visitor would have:

- Who is Audrey?
- What has she actually made?
- What part of each project did she own?
- Can she work across product, design, code, and community?
- What makes this feel like her site rather than a student portfolio template?

The first audience was broad on purpose. Recruiters, collaborators, classmates,
and program reviewers would not read the site in the same way. The structure had
to support a quick scan and a longer visit without making two separate sites.

## Choosing the smallest useful stack

I built the site with plain HTML, CSS, and a small amount of JavaScript. There
is no framework, package installation, or build command.

That choice was practical. The portfolio is mostly writing, images, and a few
small interactions. A framework would have added another layer to maintain
without solving a real user problem. Static files also made it easy to preview
locally, inspect every piece of content, and deploy through Vercel.

The tradeoff is repetition. Shared navigation and footer markup appear in more
than one file. For the current number of pages, I prefer that cost to adding a
templating system. I would reconsider it if the project archive grows enough
that repeated edits become unreliable.

## Gathering evidence before writing

I made an inventory of what I could support with a real artifact or a fact I
could explain in an interview.

The first set included Nooki, the Three.js portfolio room, the Internal
Fellowship Program partner package, the BUCS website, campus community work,
and fencing. Later I added photography, food, travel notes, film work, current
coursework, hackathons, and credentials.

This step kept the portfolio honest. An unfinished project could appear as “In
progress,” but it did not get an empty case study. A number could appear only
when it had a source. Personal captions came from real memories instead of
generic travel writing.

## Finding the visual direction

The first structural reference was a quiet editorial portfolio with large
images, simple navigation, and generous margins. I treated it as a reference,
not a page to copy. I kept the calm grid and clear hierarchy, then built a new
visual system around my material.

I kept coming back to the idea of a postcard. It made sense for a collection
that included projects, places, photos, food, and fencing trips. The important
decision was to assign each visual idea a specific role:

- project work as documented prints
- technology icons as postage stamps
- personal stories as postcards
- short red notes as handwriting
- real locations and statuses as postal information

The restraint mattered. Putting an air-mail edge around every project made the
theme repetitive. Full postcard framing became a signal for personal material,
while project previews stayed cleaner.

## Building the first information architecture

The first version centered on one long homepage:

1. A short introduction
2. Selected work
3. About and current context
4. Tools
5. Contact

This worked for orientation, but it did not leave enough room for personal
material. Adding every photo and story to the homepage created long empty areas
and weakened the work hierarchy.

The solution was not another tab inside a dense interface. I added a separate
personal archive page and one clear entry point from About. That kept the main
portfolio focused while giving the archive enough space to feel intentional.

## Making the first screen personal

The introduction had to say what I study and what I am doing without becoming a
large marketing statement. The final copy is direct and specific. It mentions
building side projects, competing in hackathons, helping student communities,
fencing, photography, and food.

The homepage note became:

> Still putting this place together. I’m glad you found it early.

I used Cedarville Cursive only for the handwritten layer. Fraunces remained the
editorial display face and Karla stayed on navigation, controls, labels, and
body copy. Keeping those roles fixed stopped the postcard idea from spreading
into every piece of text.

## Iterating on the project presentation

The project previews went through more than one interaction idea. One version
used torn-paper reveals over Nooki and the partner package. It was technically
playful, but it made the projects slower to read and added decoration where the
screenshots already did the work.

I removed the reveals and returned to clean photographic prints. The cards
still lift slightly on hover and focus, but their titles and descriptions work
without motion. The welcome postcard remains because it introduces the visual
language once and can be skipped.

The selected work area became a manual deck rather than an automatic carousel.
Visitors control the order. Mouse, touch, Enter, and Space all work. Reduced
motion switches cards without the lift-and-slide transition.

## Turning the tool list into evidence

A normal skills list felt detached from the projects. I used postage stamps so
the tools fit the visual system, then gave each one a short note about where I
used it.

The list grew with the work. C, C++, SM213, and DrRacket reflect my computer
science courses. DaVinci Resolve and Premiere Pro reflect video work. Vercel
moved into the Ship row once the portfolio was actually hosted.

The notes are intentionally small. “Computer Systems coursework” is more useful
than a skill percentage I could not defend. The stamps respond to hover, focus,
and tap, and their notes reserve space so the layout does not jump.

Dark mode exposed a flaw in the first perforation treatment. The holes were
painted with an approximate background colour. That looked acceptable on a flat
light page but showed visible crevices on a dark desk and failed when a small
stamp sat over a photograph. I replaced the painted holes with real CSS masks,
so the actual surface behind each stamp now shows through.

## Building the personal archive

The archive started as a reusable postcard template. It later became a real
page once I had enough photographs and context.

I separated the material into food, fencing and travel, photography, and film.
The photography section uses a contact-sheet layout because the images have
different orientations. A fixed grid either cropped too much or created large
blank areas under portrait images.

The captions also changed. Short placeholder titles such as “after dark” did
not explain why I kept a photo. I replaced them with the actual memories:

- following a map in Chongqing and discovering that the restaurant was below us
- visiting Xishuangbanna during the Water Splashing Festival
- seeing Tencent in Shenzhen and connecting the visit to my degree
- remembering the night view in Chongqing
- learning about old Changsha and finding a restaurant I liked
- catching a passing moment I was proud of

These details made the archive feel personal without turning travel into a
career metaphor.

## Deciding what numbers belonged

I added a “By the numbers” section, removed it in one review, then brought it
back after reconsidering what it contributed.

The lesson was not that every portfolio needs metrics. These particular numbers
give useful scale to work that is otherwise difficult to picture quickly. They
stay in one place instead of being repeated throughout the site.

The final rule is simple: a number stays only when it is accurate, sourced, and
helps the visitor understand the work.

## Rewriting “Right now”

The first version of the section read like a biography and repeated “I’m” at
the start of almost every line. It was harder to scan than it needed to be.

I rewrote the entries as activity-led notes:

- Finished second-year CPSC courses in Data Structures and Algorithms and
  Computer Systems
- Attending the YC-backed Egoist AI Passport Ideathon and the AI Builders
  Hackathon
- Two-time hackathon winner, with wins at HelloHacks and Viridis
- Visiting Toronto for the Cansbridge Scholars Conference as one of the first
  25 people invited
- Looking for good food and bars, learning recipes, and hoping to earn a barista
  licence
- Non-Restricted PAL and hunter’s licence holder

The result sounds more current and uses the space better. It also separates
what is happening now from the longer About copy.

## Treating dark mode as a desk, not an inversion

I did not want dark mode to recolour every object black. The surrounding page
became a warm dark desk while project prints, postcards, and stamps kept their
ivory paper.

That introduced several specific fixes:

- video icons needed printed coral instead of inheriting a faint interface colour
- contact copy needed dark ink on ivory paper
- postcard guide lines needed lower opacity and a rhythm that placed them
  between link rows instead of through the letters
- perforated stamp edges needed true transparency
- shadows and outlines needed enough contrast without making the paper glow

This was a useful reminder that a theme switch is not only a token swap. Each
physical metaphor has to keep making sense in the new environment.

## Fixing the shared-link preview

After deployment, a shared link showed the food collage instead of the landing
card. The image file itself was correct. The Open Graph metadata still pointed
to the placeholder domain `audreyli.dev`, so the scraper could not load it and
fell back to the largest image on the page.

I changed canonical URLs, Open Graph URLs, Twitter card metadata, the sitemap,
and `robots.txt` to the production Vercel domain. The intended social image is a
1200 by 630 card built from the same type and palette as the landing page.

## Writing and editing rules

I used the same rules across the visible site and this documentation:

- plain verbs and concrete nouns
- contractions where they sound natural
- specific details instead of broad claims
- varied sentence length
- no em dashes
- no inflated product language
- no generic conclusion at the end of every section
- no invented motivations, results, dates, or locations

The goal was not to make every sentence casual. It was to make every sentence
sound like something I could say and explain myself.

## Quality checks

I checked the site at 360, 768, and 1440 pixels. Each review included:

- light and dark mode
- keyboard focus
- reduced motion
- mouse and touch-sized interactions
- horizontal overflow
- local image paths
- missing fonts and third-party requests
- project and contact links
- card order and captions
- canonical and social metadata

For deployment, I used a branch and pull request rather than replacing the live
site directly. Vercel created a Preview deployment for the branch. I compared
that preview with localhost before merging into `main`, then checked production
again after Vercel deployed the merge.

## Decisions I changed after seeing the result

| First direction | What changed | Why |
| --- | --- | --- |
| Personal material on the long homepage | Moved the full collection to `personal.html` | The homepage became too long and the work hierarchy weakened. |
| Torn-paper project reveals | Removed them | The screenshots were clearer without another layer. |
| Blue active links | Changed to postcard teal | Teal belonged to the existing palette and reduced the unrelated interface colour. |
| Painted stamp perforations | Replaced them with transparent masks | Painted holes failed over photographs and dark mode. |
| Strong contact-card guide lines | Reduced their opacity in dark mode | The lines competed with the address. |
| Removed the stats section | Restored it | The selected numbers gave useful scale and were backed by real work. |
| Repeated “I’m” statements | Rewrote them as activity-led notes | The section became faster to scan and sounded less repetitive. |
| Figma and BUCS footer links | Replaced them with LinkedIn and Instagram | The new links were more useful for contact and discovery. |

## What I learned

The hardest part was not writing the CSS. It was deciding what deserved space.
A portfolio can keep growing until every interest and credential appears on the
homepage. Each addition made me return to the same questions: who needs this,
what does it help them understand, and where does it belong?

I also learned to treat visual feedback as product feedback. “There is too much
space on the right,” “the border does not fit,” and “the lines bother the
reading” are not cosmetic comments to dismiss. Each one points to a mismatch
between the intended hierarchy and what someone actually sees.

The site is still a living product. The structure is stable, but the current
notes, project evidence, and personal archive will change as I do more work.
