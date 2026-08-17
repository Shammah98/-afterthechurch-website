import { NextResponse } from "next/server";
import { getApprovedStories } from "@/lib/stories";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const stories = await getApprovedStories();
    return NextResponse.json(
      { stories },
      {
        headers: {
          "Cache-Control": "no-store, max-age=0"
        }
      }
    );
  } catch (error) {
    console.error("Mobile story feed failed:", error);
    return NextResponse.json(
      { error: "The story library is temporarily unavailable." },
      { status: 500 }
    );
  }
}
