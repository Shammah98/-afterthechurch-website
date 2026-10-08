/**
 * Shared survivor-story fallback photograph.
 * Photographer: Peter Herrmann (@tama66), Unsplash.
 * https://unsplash.com/photos/an-empty-church-with-pews-and-a-bright-window-uNGVQJr2bYM
 * Published under the free Unsplash License: https://unsplash.com/license
 *
 * The photograph is illustrative. It must not be represented as the story
 * author's portrait or the actual church involved. Proxying it on our server
 * avoids sending visitors' story-browsing requests to a third-party image host.
 */
const PHOTO_URL =
  "https://images.unsplash.com/photo-1635058157308-e41b28950e55?auto=format&fit=crop&fm=jpg&w=1440&q=83";

export const revalidate = 604800;

export async function GET(request: Request) {
  try {
    const response = await fetch(PHOTO_URL, {
      next: { revalidate: 604800 },
      signal: AbortSignal.timeout(8000)
    });

    if (!response.ok || !response.headers.get("content-type")?.startsWith("image/")) {
      throw new Error("Default story photograph could not be retrieved.");
    }

    return new Response(await response.arrayBuffer(), {
      status: 200,
      headers: {
        "Content-Type": "image/jpeg",
        "Cache-Control": "public, max-age=3600, s-maxage=604800, stale-while-revalidate=2592000",
        "X-Content-Type-Options": "nosniff"
      }
    });
  } catch (error) {
    console.error("Using original story placeholder after photograph fetch failed.", error);
    return Response.redirect(new URL("/images/story-default.jpg", request.url), 307);
  }
}
