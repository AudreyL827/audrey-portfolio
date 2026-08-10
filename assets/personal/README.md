# assets/personal/

Your own photographs, and the guide to swapping them in. Everything you edit
lives in `index.html`, never in the JavaScript.

## 1. How the hero works

The right side of the home page holds a sealed envelope. A visitor clicks the
wax seal, the flap opens, and three photo postcards rise out of it. Clicking the
front photo sends it to the back and brings up the next, looping through all
three. The envelope opens once per browsing session, so returning from another
page shows the photographs already out.

None of that needs your attention to change a picture. The script only handles
the opening and the order.

## 2. Where the three photo blocks are

Open `index.html` and search for `AUDREY PHOTO`. Three blocks sit there, each
starting with:

```html
<!-- AUDREY PHOTO: Replace the image path, alt text, and caption below. -->
```

The first block is the photo on top of the stack.

## 3. Add a photograph

Drop the file into this folder, `assets/personal/`. Give it a plain lowercase
name with no spaces, for example `me-at-the-club.jpg`.

## 4. Point a photo block at it

In that block, change the `src`:

```html
<img src="assets/personal/audrey-01-placeholder.svg" alt="..." width="600" height="750">
```

becomes

```html
<img src="assets/personal/me-at-the-club.jpg" alt="..." width="1200" height="1500">
```

Set `width` and `height` to the real pixel size of your file. They stop the page
from jumping while the photo loads. A placeholder file can be deleted once no
block points at it.

## 5. Update the alt text and the caption

**Alt text** describes the photo for anyone who cannot see it. Say what is
actually in the frame:

```html
alt="Audrey holding a fencing mask after a competition"
```

**Caption** is the handwritten line under the photo. Keep it short, in your own
voice. Replace the text between the tags:

```html
<p class="photo-caption">a little note from me</p>
```

## 6. Add a location or a year

Both are optional and both are empty on purpose. Type between the tags and they
appear. Leave them empty and nothing shows, no gap and no blank label:

```html
<span class="photo-place">Vancouver, BC</span>
<span class="photo-year">2026</span>
```

Only fill these in for a place you actually went and a year it actually
happened.

## 7. What size to export

The photo area is a 4:5 upright shape. Export at **1200 x 1500 px**, which stays
sharp on high-resolution screens. Anything close to 4:5 works, and the photo is
centre-cropped to fit, so keep yourself away from the very edges. Use `.jpg` for
photographs at around 80 percent quality, `.png` when you need transparency,
`.webp` if you have it. Keep each file under about 400 KB.

## 8. The project postcards on the home page

The four cards under **Selected work** are edited the same way, in the same
file. Search `index.html` for `PROJECT POSTCARD`. Each block lists its own
fields in a comment above it.

**Replace an image.** Put the file in `assets/` (not this folder, since those
are project screenshots) and change the `src` on that card's `<img>`, plus its
`width` and `height` to the real pixel size. Landscape, roughly 16:10, around
1600 x 1000 px.

**Update the alt text.** Describe what the screenshot shows, for example
"The BUCS website home page". One short sentence.

**Edit the summary.** That is the `pc-summary` paragraph. Keep it to two or
three short sentences here. The long version belongs on the Work page or on the
project's own page.

**Add or change a link.** A card with a destination has a `pc-link` paragraph
holding a link, and its title is a link too. Change both `href` values together
so they agree. Add `rel="noopener noreferrer" target="_blank"` for a link that
leaves the site, and leave those off for a page inside it. Only ever link to
something that actually exists.

**A card with no link yet.** The Three.js card has no destination, so instead of
a link it carries a plain line saying so. When there is something real to point
at, swap that line for the same link pattern the other cards use.

**Duplicate a card.** Copy one whole block, from its `<!-- PROJECT POSTCARD -->`
comment through its closing `</li>`, paste it where you want it in the order,
then change the number, title, category, status, summary, link and image. The
`data-pos` values renumber themselves on load, so leave those alone.

**Update the count.** The visible counter reads `01 / 04`. If you add a fifth
card, change the `04` inside `<p class="deck-counter">` to `05`. The spoken
announcement counts the cards by itself and needs no edit.

## 9. The other placeholder drawings

`food-placeholder.svg`, `fencing-placeholder.svg` and
`photography-placeholder.svg` are kept here for a future personal collection of
food, travel and photography postcards. Nothing on the site loads them today,
and they are deliberately not used in the hero.
