import { NextRequest, NextResponse } from "next/server";
import { createAdminClient } from "@/lib/supabase-admin";

export async function GET(request: NextRequest) {
  const authorization = request.headers.get("authorization");
  if (!process.env.CRON_SECRET || authorization !== `Bearer ${process.env.CRON_SECRET}`) {
    return NextResponse.json({ error: "Unauthorised." }, { status: 401 });
  }

  try {
    const supabase = createAdminClient();
    const now = new Date().toISOString();

    const { data, error } = await supabase
      .from("stories")
      .select("id,media_path,image_path")
      .in("status", ["rejected", "withdrawn"])
      .not("retention_expires_at", "is", null)
      .lte("retention_expires_at", now)
      .limit(100);

    if (error) throw error;

    const paths = (data || [])
      .flatMap((story) => [story.media_path, story.image_path])
      .filter((path): path is string => Boolean(path));

    if (paths.length) {
      const { error: storageError } = await supabase.storage
        .from("story-media")
        .remove(paths);

      if (storageError) throw storageError;
    }

    const ids = (data || []).map((story) => story.id);
    if (ids.length) {
      const { error: deleteError } = await supabase
        .from("stories")
        .delete()
        .in("id", ids);

      if (deleteError) throw deleteError;
    }

    const { data: supportData, error: supportLookupError } = await supabase
      .from("support_requests")
      .select("id")
      .eq("status", "closed")
      .not("retention_expires_at", "is", null)
      .lte("retention_expires_at", now)
      .limit(100);

    if (supportLookupError) throw supportLookupError;

    const supportIds = (supportData || []).map((item) => item.id);
    if (supportIds.length) {
      const { error: supportDeleteError } = await supabase
        .from("support_requests")
        .delete()
        .in("id", supportIds);

      if (supportDeleteError) throw supportDeleteError;
    }

    return NextResponse.json({
      deletedStories: ids.length,
      deletedSupportRequests: supportIds.length
    });
  } catch (error) {
    console.error("Retention cleanup failed:", error);
    return NextResponse.json({ error: "Cleanup failed." }, { status: 500 });
  }
}
