# Safe preview

This folder is a standalone preview. Do not unzip it over the live
`audrey-portfolio` folder yet.

## Preview on a different port

```bash
mkdir -p ~/audrey-personal-preview
cd ~/audrey-personal-preview
unzip ~/Downloads/audrey-personal-safe-preview-v8.zip
python3 -m http.server 8012
```

Open `http://localhost:8012/` in the browser. Your restored site can continue
running on its current port at the same time.

Stop the preview server with `Control-C` in that terminal.

## What to test

1. Open the homepage and confirm Work, About, Tools, and Contact still appear.
2. Open Personal from the top navigation and from the About callout.
3. Use the Personal page sidebar to jump between Food notes, Fencing,
   Photography, and Film and motion.
4. Resize the browser to phone width and confirm the jump links become a small
   two-column list.
5. Check light and dark mode.

The preview does not add a scroll reveal or page-load fade. Content stays
visible after navigation, reloads, and hash links.
