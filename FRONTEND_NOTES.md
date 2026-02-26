Notes — comic font & images

- Envato Elements fonts are commercial. To use the paid font you linked, download the licensed files and place them in `public/assets/fonts/`.
- Then add to `src/index.css` (example):

```css
@font-face {
  font-family: 'ComicBeacon';
  src: url('/assets/fonts/ComicBeacon.woff2') format('woff2');
  font-weight: 400;
  font-style: normal;
}
.font-comic { font-family: 'ComicBeacon', 'Bangers', Arial; }
```

- To convert photos to comic style:
  - Use an image editor (Photopea, GIMP) with posterize + edge detection, increase contrast/saturation, then add halftone overlay.
  - Or use free online "cartoonize" tools to create a comic avatar and place in `public/assets/`.

- Replace the placeholders in `public/assets/` with your own comic images for best visual fidelity.

- After updating assets, run `npm run build` to verify everything compiles.
