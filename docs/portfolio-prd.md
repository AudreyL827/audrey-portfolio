# Product requirements document: Audrey Li portfolio

**Owner:** Audrey Li  
**Status:** Shipped and continuing to evolve  
**Platform:** Responsive web  
**Production:** [audrey-portfolio-dusky.vercel.app](https://audrey-portfolio-dusky.vercel.app/)  
**Last updated:** August 2026

## 1. Why I built this

I needed one place that could explain what I make without flattening everything
into a resume. My work includes software projects, product and community work,
3D experiments, photography, food, travel, and fencing. A standard project grid
could show the first few things, but it would leave out the parts that make the
site feel like mine.

The portfolio also had to work for people who arrive with very little time. A
recruiter should be able to find my strongest work quickly. A collaborator or
student should be able to understand what I actually owned. Someone who stays
longer should find the personal archive and get a fuller picture of me.

## 2. The product problem

Most student portfolios fall into one of two patterns:

1. They read like a resume with larger images.
2. They prioritize a visual theme so heavily that the work becomes hard to scan.

I wanted to avoid both. The site needed a clear work index, honest project
descriptions, and direct contact links. It also needed enough personality that
it could not be mistaken for a generic template.

The central product question was:

> How might I make a portfolio that is quick to understand, easy to maintain,
> and personal enough to hold more than software projects?

## 3. Product thesis

The portfolio is a collection of things I have made, noticed, kept, and learned
from. The visual language is based on a travelled postcard rather than a digital
scrapbook.

That gives each part of the interface a job:

- Projects are documented pieces of work or photographic prints.
- Technology icons are postage stamps.
- Personal stories are postcards and contact sheets.
- Short red notes are handwritten annotations.
- Postmarks carry real information only.
- Decorative details support the content instead of filling empty space.

The theme is useful because it creates a consistent system. It is not an excuse
to put an air-mail border around every object.

## 4. Users

### Recruiters and hiring teams

They need to understand what I built, what I owned, and how I think. They are
likely to scan before they read. Project names, statuses, descriptions, and
links need to work without relying on animation.

### Collaborators and other builders

They may care about the implementation, the experiments, or the process behind
a decision. They need enough technical detail to ask a useful follow-up
question.

### Student leaders and program reviewers

They need evidence of how I work with people, run programs, teach, and respond
to feedback. Community work should be specific without pretending it is a
software case study.

### Me, as the editor

I need to update the site without rebuilding it. Photos, captions, current
activities, links, and future projects should live in obvious places.

## 5. Jobs to be done

- When someone opens my portfolio for the first time, they should understand
  who I am and find selected work within one screen or one interaction.
- When someone opens a project, they should be able to separate the product
  itself from my contribution.
- When someone wants more context about me, they should be able to explore
  personal material without it interrupting the work index.
- When I finish a project or take a photograph I want to keep, I should be able
  to add it without inventing a new layout.
- When someone shares the site, the link preview should represent the landing
  page instead of choosing an unrelated large image.

## 6. Goals

### Primary goals

- Make Audrey's identity and current focus clear on the landing screen.
- Put real work before a long biography or a list of claims.
- Show product, design, technical, and community experience through evidence.
- Keep the personal archive easy to discover but secondary to selected work.
- Make every visible fact defensible in a conversation or interview.
- Support desktop, tablet, mobile, light mode, dark mode, keyboard navigation,
  and reduced motion.
- Keep the codebase simple enough for Audrey to edit directly.

### Non-goals for this release

- Writing a full case study for every unfinished project.
- Adding a restaurant database, travel map, blog, or content management system.
- Tracking visitors before there is a clear question that analytics would answer.
- Creating fake dates, locations, outcomes, testimonials, or memories to make
  the archive feel complete.
- Replacing real photos with generated photographs.

## 7. Product principles

### Evidence before adjectives

The site should say what I made, used, changed, or taught. It should not ask a
visitor to trust broad claims about creativity or impact.

### Fast first, deeper second

The landing page handles orientation and selected work. The personal archive
and project detail pages hold material for visitors who want to keep exploring.

### Personal, not performative

The writing can sound warm and observant. It should not force food, fencing, or
travel into career lessons.

### Every decoration needs a role

Postcards, stamps, handwriting, and postal marks are part of one system. If a
detail competes with the writing, it should be reduced or removed.

### Physical objects stay physical in dark mode

The page becomes a dark desk, but postcard paper stays ivory. Ink, guide lines,
shadows, and perforations adjust so the object remains readable.

### Accessibility is part of the interaction

Anything available with a mouse must work with a keyboard. Motion must not be
required to understand the content. Focus states must remain visible.

## 8. Information architecture

### Landing page

1. Introduction and primary links
2. Selected work
3. About and link to the personal archive
4. Current activities and selected numbers
5. Technology stamps grouped by how they are used
6. Contact postcard and footer

### Personal archive

1. Short introduction
2. Food and Beli note
3. Fencing and travel
4. Photography contact sheet with captions and stories
5. Film and video
6. Back link to the portfolio

### Project detail

The Internal Fellowship Program partner package has a complete detail page.
Other projects remain previews until there is enough verified material to write
them properly.

## 9. Core requirements

### Navigation

- Work, About, Contact, and theme controls are available from the main page.
- Section links use clear labels and visible focus states.
- The personal archive has an explicit path back to the portfolio.
- Legacy `work.html` and `about.html` routes redirect to their matching sections.

### Selected work

- Project cards show a title, status, short description, and a destination when
  one exists.
- Content remains readable before hover and without JavaScript.
- The project deck supports mouse, touch, Enter, and Space.
- Cards do not cycle automatically.
- Reduced motion removes the transition without removing the interaction.

### Personal archive

- Real photographs and captions stay in HTML.
- Photography frames hug each image instead of forcing every photo into the
  same crop.
- Captions use real places and stories supplied by Audrey.
- The archive does not require a separate content system for this release.

### Technology stamps

- Tools are grouped by Build, Connect, Design and creative, and Ship.
- Each stamp includes one short, verifiable note about its use.
- Perforations reveal the real surface beneath the stamp.
- Paper and printed icons stay readable in dark mode.
- Notes open on hover, focus, and tap without shifting the surrounding layout.

### Theme

- The default follows the visitor's system preference unless they select a
  theme.
- The chosen theme persists locally.
- Dark mode uses warm near-black rather than pure black.
- Physical paper objects remain ivory.
- Decorative guide lines stay quieter than the text they support.

### Contact

- Email, GitHub, LinkedIn, and Instagram are visible and keyboard accessible.
- External links open safely.
- The contact card remains readable at narrow widths.

### Sharing and discovery

- Canonical URLs, Open Graph metadata, Twitter card metadata, `robots.txt`, and
  `sitemap.xml` use the production domain.
- The social image is a 1200 by 630 landing-page card.
- Shared links must not fall back to the Beli collage or another large content
  image.

## 10. Content requirements

- Use first person for Audrey's contribution.
- Use plain verbs and concrete details.
- Preserve specific technical information when it helps explain the work.
- Avoid inflated language, forced lessons, fake summaries, em dashes, and
  semicolons.
- Do not publish empty metadata.
- Do not claim a feature, result, credential, date, or location without a source.

## 11. Accessibility and quality requirements

- Semantic headings and landmarks
- Descriptive alternative text for meaningful images
- Empty alternative text for decoration
- Keyboard support for every interaction
- Visible focus states in both themes
- `prefers-reduced-motion` support
- No horizontal overflow at 360, 768, or 1440 pixels
- No broken local assets or third-party font requests
- Readable contrast for body copy, controls, captions, and paper objects
- No animation that delays access to the work

## 12. Success signals

This release does not claim visitor metrics that have not been measured. I will
judge it first through observable behaviour and direct feedback:

- A new visitor can describe what I study and name at least one project after a
  short scan.
- A recruiter can reach selected work and contact information without hunting.
- A collaborator can tell which projects are live and which are still forming.
- Someone can discover the personal archive without mistaking it for the main
  portfolio.
- I can add or revise content without changing the design system.
- Light mode, dark mode, mobile, keyboard navigation, and shared-link previews
  all show the intended content.

If analytics are added later, the first useful questions would be which project
links visitors open, whether they reach the personal archive, and which contact
links they use. Page views alone would not explain whether the portfolio is
working.

## 13. Risks and decisions

### The postcard theme could overwhelm the work

Mitigation: reserve full postcard treatment for personal material. Keep project
previews cleaner and use stamps mainly for technology and small details.

### The homepage could become too long

Mitigation: move the complete personal collection to `personal.html`. Keep one
clear archive entry point on the homepage.

### Personal interests could look unrelated

Mitigation: present them as real interests and records, not as metaphors for
product management.

### Current information can expire

Mitigation: keep the “Right now” section easy to find and edit. Avoid dates
unless they help the reader understand timing.

### Social platforms cache old previews

Mitigation: use a stable absolute image URL on the production domain. When a
platform holds an older card, test with a fresh query parameter after deployment.

## 14. Release plan

1. Make changes on a named branch.
2. Run the site locally and inspect desktop and mobile layouts.
3. Open a pull request into `main`.
4. Test the Vercel Preview deployment, including dark mode and shared assets.
5. Merge only after the preview matches localhost.
6. Confirm that Vercel deploys `main` to production.
7. Hard-refresh production and test the canonical URL.

## 15. Future work

- Complete Nooki and Three.js project stories when the evidence is ready.
- Add new personal archive entries from real photos and notes.
- Decide whether food needs a searchable collection only after enough entries
  exist to make search useful.
- Add lightweight analytics when there is a specific product question.
- Replace the Vercel domain with a custom domain and update canonical metadata.
- Revisit the current activities section at the end of each term.

