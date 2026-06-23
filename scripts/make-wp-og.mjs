// Generates the Wedding Player Open Graph share image (1200x630).
// Run from repo root: node scripts/make-wp-og.mjs
import sharp from "sharp";
import { fileURLToPath } from "node:url";

const W = 1200;
const H = 630;

// Play mark geometry
const cx = 320;
const cy = 300;
const rOuter = 150;
const rInner = 120;
// triangle inside the inner disc, pointing right
const tri = `${cx - 42},${cy - 70} ${cx - 42},${cy + 70} ${cx + 78},${cy}`;

const svg = `<svg width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#241c3a"/>
      <stop offset="0.55" stop-color="#140f22"/>
      <stop offset="1" stop-color="#0c0916"/>
    </linearGradient>
    <radialGradient id="glow" cx="0.28" cy="0.42" r="0.6">
      <stop offset="0" stop-color="#8c5cff" stop-opacity="0.45"/>
      <stop offset="1" stop-color="#8c5cff" stop-opacity="0"/>
    </radialGradient>
  </defs>

  <rect width="${W}" height="${H}" fill="url(#bg)"/>
  <rect width="${W}" height="${H}" fill="url(#glow)"/>

  <!-- subtle border -->
  <rect x="12" y="12" width="${W - 24}" height="${H - 24}" rx="28"
        fill="none" stroke="#8c5cff" stroke-opacity="0.18" stroke-width="2"/>

  <!-- play mark -->
  <circle cx="${cx}" cy="${cy}" r="${rOuter}" fill="#8c5cff"/>
  <circle cx="${cx}" cy="${cy}" r="${rInner}" fill="#1a1525"/>
  <polygon points="${tri}" fill="#f3eefb"/>

  <!-- text block -->
  <text x="512" y="262" font-family="Helvetica, Arial, sans-serif" font-size="86"
        font-weight="700" fill="#f3eefb">Wedding Player</text>
  <text x="514" y="330" font-family="Helvetica, Arial, sans-serif" font-size="36"
        fill="#b6a8d6">Spela bröllopsklipp i fullskärm</text>
  <text x="514" y="382" font-family="Helvetica, Arial, sans-serif" font-size="36"
        fill="#b6a8d6">— med ett tangenttryck.</text>

  <text x="514" y="470" font-family="Helvetica, Arial, sans-serif" font-size="28"
        font-weight="600" fill="#b388ff">frodostudios.com/weddingplayer</text>
  <text x="514" y="512" font-family="Helvetica, Arial, sans-serif" font-size="26"
        fill="#7d7298">Gratis app för Mac · Intel &amp; Apple Silicon</text>
</svg>`;

const out = fileURLToPath(new URL("../public/weddingplayer/og.png", import.meta.url));
await sharp(Buffer.from(svg)).png().toFile(out);
console.log("Wrote", out);
