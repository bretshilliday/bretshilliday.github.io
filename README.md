# Personal landing page

A single-file interactive landing page: an ASCII character field that
glows around the cursor, with glyph-swap twinkles and chromatic ripples
on click. The nav links sit in a clean black corner notch with equal
margins.

## Before you upload

Open `index.html` and find the comment `EDIT THESE` (near the top of the
body). Replace the two `#` placeholders with your real profile URLs:

    <a href="https://www.linkedin.com/in/YOUR-HANDLE" ...>LinkedIn</a>
    <a href="https://x.com/YOUR-HANDLE" ...>X</a>

The mail link is already set.

## Deploy to GitHub Pages

1. Create a GitHub account if you don't have one.
2. Create a new **public** repository named exactly:
   `YOUR-USERNAME.github.io`
   (replace YOUR-USERNAME with your GitHub username)
3. On the repo page, click "uploading an existing file" (or Add file >
   Upload files) and upload `index.html`.
4. Commit. Within a minute or two your site is live at:
   `https://YOUR-USERNAME.github.io`

No build step, no settings to change - a repo with that exact name is
published automatically.

## Custom domain (optional)

Repo Settings > Pages > Custom domain. Enter your domain, then at your
DNS provider add a CNAME record pointing `www` (or the apex via ALIAS/A
records) to `YOUR-USERNAME.github.io`.

## Tuning

All the knobs are constants at the top of the script in `index.html`:
`PITCH` (cell spacing, smaller = denser), `FONT_PX` (character size),
`GLOW_PX` (cursor glow radius), `SPEED_PX` (ripple speed), `SHIMMER`
(glyph swaps per frame), and the `RAMP` array (the characters
themselves - swap in digits, binary, katakana, anything).
