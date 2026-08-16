const SOURCE_URL =
  "https://images.squarespace-cdn.com/content/v1/5f925ec584857f3307673b83/80bc7009-c202-463c-9d57-6c733c6ddec6/Screenshot%2B2022-10-13%2Bat%2B14-57-25%2B%281%29%2BInstagram%2B%E2%80%A2%2BChats.jpg";

export async function GET() {
  try {
    const response = await fetch(SOURCE_URL, {
      next: { revalidate: 60 * 60 * 24 }
    });

    if (!response.ok) {
      return new Response("Reporting image is temporarily unavailable.", {
        status: 502,
        headers: { "Content-Type": "text/plain; charset=utf-8" }
      });
    }

    const image = await response.arrayBuffer();
    const contentType = response.headers.get("content-type") || "image/jpeg";

    return new Response(image, {
      status: 200,
      headers: {
        "Content-Type": contentType,
        "Cache-Control": "public, max-age=86400, s-maxage=604800, stale-while-revalidate=86400"
      }
    });
  } catch {
    return new Response("Reporting image is temporarily unavailable.", {
      status: 502,
      headers: { "Content-Type": "text/plain; charset=utf-8" }
    });
  }
}
