import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const root = process.cwd();
const parts = ["toxic-cover.part00.bin", "toxic-cover.part01.bin"];
const buffers = parts.map((name) => readFileSync(join(root, ".upload", name)));
const outDir = join(root, "public", "images");
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "toxic-church.jpeg"), Buffer.concat(buffers));
console.log(`Connected Toxic Church cover (${buffers.reduce((sum, part) => sum + part.length, 0)} bytes)`);
