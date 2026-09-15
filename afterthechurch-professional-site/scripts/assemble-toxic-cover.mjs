import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const root = process.cwd();
const parts = ["toxic-cover.part00.bin", "toxic-cover.part01.bin"];

// The uploaded image chunks are stored as base64 text. Join and decode them
// back into the original JPEG bytes before Next.js builds the site.
const base64 = parts
  .map((name) => readFileSync(join(root, ".upload", name), "utf8"))
  .join("")
  .replace(/\s+/g, "");

const image = Buffer.from(base64, "base64");

if (image.length < 4 || image[0] !== 0xff || image[1] !== 0xd8) {
  throw new Error("Toxic Church cover could not be decoded into a valid JPEG.");
}

const outDir = join(root, "public", "images");
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "toxic-church.jpeg"), image);
console.log(`Connected Toxic Church cover (${image.length} decoded bytes)`);
