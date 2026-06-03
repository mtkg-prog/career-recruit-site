import { createCanvas, GlobalFonts } from "@napi-rs/canvas";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const WIDTH = 1200;
const HEIGHT = 630;
const OUTPUT = path.resolve(__dirname, "../public/images/ogp/recruit-ogp.png");

// Register fonts with distinct family names per weight
GlobalFonts.registerFromPath(
  path.resolve(__dirname, "fonts/NotoSansJP-Black.ttf"),
  "NotoBlack",
);
GlobalFonts.registerFromPath(
  path.resolve(__dirname, "fonts/NotoSansJP-Medium.ttf"),
  "NotoMedium",
);

const canvas = createCanvas(WIDTH, HEIGHT);
const ctx = canvas.getContext("2d");

// --- Background ---
ctx.fillStyle = "#073B34";
ctx.fillRect(0, 0, WIDTH, HEIGHT);

// --- Background watermark: JOIN THE UPDATE ---
ctx.save();
ctx.font = '140px "NotoBlack"';
ctx.fillStyle = "rgba(255, 255, 255, 0.035)";
ctx.textAlign = "center";
ctx.textBaseline = "middle";
ctx.fillText("JOIN THE UPDATE", WIDTH / 2, HEIGHT / 2);
ctx.restore();

// --- Decorative elements ---

// Horizontal line
ctx.save();
ctx.strokeStyle = "rgba(255, 255, 255, 0.12)";
ctx.lineWidth = 1;
ctx.beginPath();
ctx.moveTo(80, HEIGHT - 140);
ctx.lineTo(480, HEIGHT - 140);
ctx.stroke();
ctx.restore();

// Vertical line (right side)
ctx.save();
ctx.strokeStyle = "rgba(255, 255, 255, 0.08)";
ctx.lineWidth = 1;
ctx.beginPath();
ctx.moveTo(WIDTH - 180, 80);
ctx.lineTo(WIDTH - 180, 280);
ctx.stroke();
ctx.restore();

// Circle outline (top-right, partially clipped)
ctx.save();
ctx.strokeStyle = "rgba(255, 255, 255, 0.06)";
ctx.lineWidth = 1;
ctx.beginPath();
ctx.arc(WIDTH + 60, -60, 180, 0, Math.PI * 2);
ctx.stroke();
ctx.restore();

// Small filled circle
ctx.save();
ctx.fillStyle = "rgba(255, 255, 255, 0.15)";
ctx.beginPath();
ctx.arc(WIDTH - 120, HEIGHT - 100, 4, 0, Math.PI * 2);
ctx.fill();
ctx.restore();

// Dot grid (right side, lower area)
ctx.save();
ctx.fillStyle = "rgba(255, 255, 255, 0.1)";
const dotGridX = WIDTH - 120;
const dotGridY = 400;
for (let row = 0; row < 3; row++) {
  for (let col = 0; col < 4; col++) {
    ctx.beginPath();
    ctx.arc(dotGridX + col * 16, dotGridY + row * 16, 1.5, 0, Math.PI * 2);
    ctx.fill();
  }
}
ctx.restore();

// --- Accent bar (left side, green) ---
ctx.save();
ctx.fillStyle = "#40916c";
ctx.beginPath();
ctx.roundRect(60, 100, 4, 56, 2);
ctx.fill();
ctx.restore();

// --- Main headline: UPDATE / AGING / SOCIETY ---
ctx.save();
ctx.fillStyle = "#ffffff";
ctx.font = '100px "NotoBlack"';
ctx.textAlign = "left";
ctx.textBaseline = "top";

const headlineX = 84;
const headlineY = 88;
const lineHeight = 105;

ctx.fillText("UPDATE", headlineX, headlineY);
ctx.fillText("AGING", headlineX, headlineY + lineHeight);
ctx.fillText("SOCIETY", headlineX, headlineY + lineHeight * 2);
ctx.restore();

// --- Bottom text ---
// Tagline
ctx.save();
ctx.fillStyle = "rgba(255, 255, 255, 0.85)";
ctx.font = '22px "NotoBlack"';
ctx.textAlign = "left";
ctx.textBaseline = "bottom";
ctx.fillText("高齢社会をアップデートする", 84, HEIGHT - 72);
ctx.restore();

// Company name
ctx.save();
ctx.fillStyle = "rgba(255, 255, 255, 0.5)";
ctx.font = '16px "NotoMedium"';
ctx.textAlign = "left";
ctx.textBaseline = "bottom";
ctx.fillText("株式会社キャリア 採用サイト", 84, HEIGHT - 46);
ctx.restore();

// --- Side text: JOIN THE UPDATE (vertical, right side) ---
ctx.save();
ctx.fillStyle = "rgba(255, 255, 255, 0.12)";
ctx.font = '14px "NotoBlack"';
ctx.textAlign = "center";
ctx.textBaseline = "middle";
ctx.translate(WIDTH - 40, HEIGHT / 2);
ctx.rotate(Math.PI / 2);
ctx.fillText("J O I N   T H E   U P D A T E", 0, 0);
ctx.restore();

// --- Export ---
const buffer = canvas.toBuffer("image/png");
fs.writeFileSync(OUTPUT, buffer);
console.log(`OGP image saved to ${OUTPUT} (${buffer.length} bytes)`);
