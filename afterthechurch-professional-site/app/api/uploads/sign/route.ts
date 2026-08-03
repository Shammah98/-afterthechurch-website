import { NextRequest, NextResponse } from "next/server";
import { getUserFromRequest } from "@/lib/auth-server";
import { checkRateLimit } from "@/lib/rate-limit";
import { createAdminClient } from "@/lib/supabase-admin";

const accepted: Record<string, string[]> = {
  audio: ["audio/mpeg", "audio/mp4", "audio/wav", "audio/x-m4a"],
  video: ["video/mp4", "video/quicktime", "video/webm"]
};

const maxSize: Record<string, number> = {
  audio: 50 * 1024 * 1024,
  video: 250 * 1024 * 1024
};

function safeExtension(fileName: string) {
  const ext = fileName.split(".").pop()?.toLowerCase() || "bin";
  return ext.replace(/[^a-z0-9]/g, "").slice(0, 8) || "bin";
}

export async function POST(request: NextRequest) {
  try {
    const user = await getUserFromRequest(request);
    if (!user) {
      return NextResponse.json({ error: "Sign in before uploading media." }, { status: 401 });
    }

    const allowed = await checkRateLimit(request, "media-upload-url", 12, 60 * 60);
    if (!allowed) {
      return NextResponse.json(
        { error: "Too many upload attempts. Wait before trying again." },
        { status: 429 }
      );
    }

    const body = await request.json();
    const { fileName, contentType, fileSize, mediaType } = body;

    if (!["audio", "video"].includes(mediaType)) {
      return NextResponse.json({ error: "Invalid media type." }, { status: 400 });
    }

    if (!accepted[mediaType].includes(contentType)) {
      return NextResponse.json({ error: "That file format is not supported." }, { status: 400 });
    }

    if (!Number.isFinite(fileSize) || fileSize <= 0 || fileSize > maxSize[mediaType]) {
      return NextResponse.json({ error: "The file is empty or exceeds the size limit." }, { status: 400 });
    }

    const path = `pending/${user.id}/${crypto.randomUUID()}.${safeExtension(fileName)}`;
    const supabase = createAdminClient();
    const { data, error } = await supabase.storage
      .from("story-media")
      .createSignedUploadUrl(path);

    if (error || !data) throw new Error(error?.message || "Could not create upload URL.");

    return NextResponse.json({ path, token: data.token });
  } catch (error) {
    console.error("Upload signing failed:", error);
    return NextResponse.json(
      { error: "The private upload could not be prepared." },
      { status: 500 }
    );
  }
}
