# assets/

Drop image files into this folder using the exact filenames below. The layout
already points at these paths, so nothing in the HTML or CSS needs to change.

Images are cropped with `object-fit: cover`, except the partner package pages,
which use `contain` so nothing is cut off. Export at roughly twice the display
size for sharp results on high-density screens.

## Already in place

| File | Where it appears | Source |
| --- | --- | --- |
| `nooki-hero.jpg` | Home, project 01 | Screenshot of the live app at audreyl827.github.io/Nooki |
| `ifp-cover.jpg` | Home project 03, and the partner package page | Page 1 of the partner package, exported from Figma |
| `ifp-spread-01.jpg` | Partner package page | Page 8, Fellowship Phases |
| `ifp-spread-02.jpg` | Partner package page | Page 6, What You'll Gain |
| `ifp-early-page.jpg` | Partner package page, inside the reveal | The archived earlier version of page 6, from the Archive page of the same file |
| `bucs-website.jpg` | Home, project 04 | Screenshot of bucs.cus.ca |
| `social-card.jpg` | Open Graph preview for every page | Built from the site's own type and palette |

Replacing any of these is a straight swap. Keep the filename and the rough
proportions and nothing else needs touching.

## Still needed

Two figures are holding their space and showing the filename they want. In
`index.html` each one is marked `class="shot is-missing"` with the `<img>` tag
commented out directly underneath, so the page makes no request for a file that
is not there yet. Drop the file in, delete `is-missing`, uncomment the `<img>`.

| File | Where it appears | Crop | Notes |
| --- | --- | --- | --- |
| `portfolio-room.png` | Home, project 02 | 16:9, 1600x900 | A viewport capture of the Three.js room. A rough in-progress state is fine and honest. |
| `fencing-01.jpg` | Home, away from the screen | 4:5 portrait, 1400x1750 | A real photo of Audrey fencing, refereeing or coaching. |

## Reserved for projects that are not written up yet

These names are already used in the documentation, so keep them free:
`nooki-mobile.png`, `nooki-room-progress.png`, `portfolio-room-detail.png`,
`daywheel.png`, `blender-self-portrait.png`, `figjam-debrief.png`,
`duolingo-workshop.png`, `fencing-02.jpg`, `pmc-logo.svg`, `bucs-logo.svg`.

## Rules for these images

- Use screenshots of the real thing. A rough capture of work in progress is
  better than a mockup of something that does not exist.
- Do not use photos or renders made by someone else without permission.
- Give each new `<img>` alt text that describes what is in the picture, plus
  `width` and `height` attributes so the page does not jump while it loads.
- Leave `alt=""` only when the image adds nothing beyond decoration.
