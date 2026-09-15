import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const uploadDir = join(process.cwd(), ".upload");
    const [part0, part1] = await Promise.all([
      readFile(join(uploadDir, "toxic-cover.part00.bin"), "utf8"),
      readFile(join(uploadDir, "toxic-cover.part01.bin"), "utf8")
    ]);

    const base64 = `${part0}${part1}`.replace(/\s+/g, "");
    const image = Buffer.from(base64, "base64");

    if (image.length < 4 || image[0] !== 0xff || image[1] !== 0xd8) {
      throw new Error("Decoded Toxic Church cover is not a valid JPEG.");
    }

    return new Response(image, {
      status: 200,
      headers: {
        "Content-Type": "image/jpeg",
        "Content-Length": String(image.length),
        "Cache-Control": "no-store, max-age=0"
      }
    });
  } catch (error) {
    console.error("Unable to assemble Toxic Church cover", error);
    return new Response("Image unavailable", { status: 500 });
  }
}
