import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { getUserFromRequest, isAdminEmail } from "@/lib/auth-server";
import { cleanText } from "@/lib/sanitize";
import { createAdminClient } from "@/lib/supabase-admin";

const updateSchema = z.object({
  id: z.string().uuid(),
  status: z.enum(["new", "reviewing", "referred", "closed"]),
  adminNotes: z.unknown()
});

type SupportRequestRow = {
  id: string;
  person_name: string;
  person_age: string;
  person_gender: string | null;
  country: string;
  knows_about_request: string;
  direct_contact_permitted: boolean;
  permission_to_share_contact: boolean;
  safe_phone: string | null;
  other_contact: string | null;
  safe_contact_notes: string | null;
  requester_name: string | null;
  requester_relationship: string | null;
  requester_contact: string | null;
  situation: string;
  safety_concerns: string | null;
  urgent_risk: boolean;
  status: string;
  admin_notes: string | null;
  created_at: string;
};

async function requireAdmin(request: NextRequest) {
  const user = await getUserFromRequest(request);
  return Boolean(user && isAdminEmail(user.email));
}

export async function GET(request: NextRequest) {
  try {
    if (!(await requireAdmin(request))) {
      return NextResponse.json({ error: "Administrator access denied." }, { status: 403 });
    }

    const supabase = createAdminClient();
    const { data, error } = await supabase
      .from("support_requests")
      .select(
        "id,person_name,person_age,person_gender,country,knows_about_request,direct_contact_permitted,permission_to_share_contact,safe_phone,other_contact,safe_contact_notes,requester_name,requester_relationship,requester_contact,situation,safety_concerns,urgent_risk,status,admin_notes,created_at"
      )
      .order("created_at", { ascending: false })
      .limit(100);

    if (error) throw error;

    const requests = ((data || []) as SupportRequestRow[]).map((item) => ({
      id: item.id,
      personName: item.person_name,
      personAge: item.person_age,
      personGender: item.person_gender,
      country: item.country,
      knowsAboutRequest: item.knows_about_request,
      directContactPermitted: item.direct_contact_permitted,
      permissionToShareContact: item.permission_to_share_contact,
      safePhone: item.safe_phone,
      otherContact: item.other_contact,
      safeContactNotes: item.safe_contact_notes,
      requesterName: item.requester_name,
      requesterRelationship: item.requester_relationship,
      requesterContact: item.requester_contact,
      situation: item.situation,
      safetyConcerns: item.safety_concerns,
      urgentRisk: item.urgent_risk,
      status: item.status,
      adminNotes: item.admin_notes,
      createdAt: item.created_at
    }));

    return NextResponse.json({ requests });
  } catch (error) {
    console.error("Support request admin queue failed:", error);
    return NextResponse.json(
      { error: "The support-request queue could not be loaded." },
      { status: 500 }
    );
  }
}

export async function PATCH(request: NextRequest) {
  try {
    if (!(await requireAdmin(request))) {
      return NextResponse.json({ error: "Administrator access denied." }, { status: 403 });
    }

    const parsed = updateSchema.safeParse(await request.json());
    if (!parsed.success) {
      return NextResponse.json({ error: "The update is invalid." }, { status: 400 });
    }

    const input = parsed.data;
    const adminNotes = cleanText(input.adminNotes, 5000);
    const reviewedAt = input.status === "new" ? null : new Date().toISOString();
    const retentionExpiresAt =
      input.status === "closed"
        ? new Date(Date.now() + 180 * 24 * 60 * 60 * 1000).toISOString()
        : null;

    const supabase = createAdminClient();
    const { error } = await supabase
      .from("support_requests")
      .update({
        status: input.status,
        admin_notes: adminNotes || null,
        reviewed_at: reviewedAt,
        retention_expires_at: retentionExpiresAt
      })
      .eq("id", input.id);

    if (error) throw error;
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Support request update failed:", error);
    return NextResponse.json({ error: "The support request could not be updated." }, { status: 500 });
  }
}
