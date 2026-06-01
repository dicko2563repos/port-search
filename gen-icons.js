/* Generates the PWA / home-screen PNG icons from the same red "PS" tile
 * used by the inline SVG favicon.
 *
 * Requires: npm install @napi-rs/canvas
 * Run:      node gen-icons.js
 *
 * Outputs (full-bleed red squares — iOS/Android apply their own corner mask):
 *   apple-touch-icon.png  (180x180)
 *   icon-192.png          (192x192)
 *   icon-512.png          (512x512)
 */
const fs = require("fs");
const { createCanvas, GlobalFonts } = require("@napi-rs/canvas");

// Use the system Arial Bold so the glyph renders deterministically.
const fontCandidates = [
  "C:/Windows/Fonts/arialbd.ttf",
  "C:/Windows/Fonts/segoeuib.ttf",
];
let fontFamily = "sans-serif";
for (const p of fontCandidates) {
  if (fs.existsSync(p)) {
    GlobalFonts.registerFromPath(p, "BrandBold");
    fontFamily = "BrandBold";
    break;
  }
}

const RED = "#B71C1C";
const WHITE = "#FFFFFF";
const TEXT = "PS";

function makeIcon(size, file) {
  const canvas = createCanvas(size, size);
  const ctx = canvas.getContext("2d");

  ctx.fillStyle = RED;
  ctx.fillRect(0, 0, size, size);

  ctx.fillStyle = WHITE;
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.font = "bold " + Math.round(size * 0.46) + "px " + fontFamily;
  // Nudge down slightly so the optical center looks right.
  ctx.fillText(TEXT, size / 2, size / 2 + size * 0.04);

  const png = canvas.toBuffer("image/png");
  fs.writeFileSync(file, png);
  console.log("wrote", file, png.length, "bytes");
}

makeIcon(180, "apple-touch-icon.png");
makeIcon(192, "icon-192.png");
makeIcon(512, "icon-512.png");
console.log("done (font:", fontFamily + ")");
