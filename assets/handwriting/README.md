# assets/handwriting/

Empty on purpose. Nothing here is a font.

The site currently has no handwriting on it. Where a personal aside appears, for
example the note under the intro on the home page, it is set in Fraunces italic.
That is a printed aside, not an imitation of anyone's hand. No script font is
loaded, and none should be added: a downloaded "handwriting" typeface pretending
to be Audrey's writing is exactly what this folder exists to avoid.

## What to supply

Write the words on paper, photograph or scan them, trace them to vector, and
export each as an SVG with these names:

| File | Words or shape |
| --- | --- |
| `handwriting-currently-making.svg` | currently making... |
| `handwriting-still-tinkering.svg` | still tinkering with this |
| `handwriting-first-version.svg` | the first version |
| `handwriting-debrief-note.svg` | moved this after our debrief |
| `handwriting-say-hi.svg` | say hi :) |
| `handwriting-arrow-01.svg` | one arrow |
| `handwriting-underline-01.svg` | one uneven underline |
| `handwriting-circle-01.svg` | one loose circle |
| `handwriting-star-01.svg` | one small star |

## How to export them

- Strokes as paths, `fill="currentColor"` or `stroke="currentColor"`, no
  hard-coded hex. That way each mark takes the ink, muted red, cobalt or sage
  token from wherever it sits, and stays visible in both themes.
- A tight `viewBox` around the mark, no surrounding whitespace.
- No embedded raster images and no text elements, so the file scales cleanly.

## How to place them

- One prominent handwritten moment per viewport, no more.
- Put each note beside the thing it is about, never floating on its own.
- A mark that carries words needs a text equivalent: `role="img"` with an
  `aria-label` that repeats the words, or a caption beside it.
- A mark that is only a shape gets `aria-hidden="true"`.
- Handwriting never carries navigation, and never holds the only explanation of
  a project.
- Only write true things. "moved this after our debrief" belongs on the partner
  package page only if that is what happened.
