import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const uploadDir = join(process.cwd(), ".upload");
    const [part0, part1] = await Promise.all([
      readFile(join(uploadDir, "toxic-cover.part00.bin")),
      readFile(join(uploadDir, "toxic-cover.part01.bin"))
    ]);

    const image = Buffer.concat([part0, part1]);

    return new Response(image, {
      status: 200,
      headers: {
        "Content-Type": "image/jpeg",
        "Content-Length": String(image.length),
        "Cache-Control": "public, max-age=3600, s-maxage=86400, stale-while-revalidate=604800"
      }
    });
  } catch (error) {
    console.error("Unable to assemble Toxic Church cover", error);
    return new Response("Image unavailable", { status: 500 });
  }
}
