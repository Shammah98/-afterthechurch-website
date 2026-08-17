import { NextResponse } from "next/server";
import { getApprovedStory } from "@/lib/stories";

export const dynamic = "force-dynamic";

export async function GET(
  _request: Request,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await context.params;
    const story = await getApprovedStory(id);

    if (!story) {
      return NextResponse.json({ error: "Story not found." }, { status: 404 });
    }

    return NextResponse.json(
      { story },
      {
        headers: {
          "Cache-Control": "no-store, max-age=0"
        }
      }
    );
  } catch (error) {
    console.error("Mobile story detail failed:", error);
    return NextResponse.json(
      { error: "This story is temporarily unavailable." },
      { status: 500 }
    );
  }
}
