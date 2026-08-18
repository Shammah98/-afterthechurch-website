import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { checkRateLimit } from "@/lib/rate-limit";
import { cleanText } from "@/lib/sanitize";
import { createAdminClient } from "@/lib/supabase-admin";
import { sendSupportRequestNotification } from "@/lib/email-notifications";

const schema = z.object({
  personName: z.unknown(),
  personAge: z.unknown(),
  personGender: z.unknown(),
  country: z.unknown(),
  knowsAboutRequest: z.enum(["yes", "no", "unsure"]),
  directContact: z.boolean(),
  permissionToShareContact: z.boolean(),
  personPhone: z.unknown(),
  otherContact: z.unknown(),
  safeContactNotes: z.unknown(),
  requesterName: z.unknown(),
  requesterRelationship: z.unknown(),
  requesterContact: z.unknown(),
  situation: z.unknown(),
  safetyConcerns: z.unknown(),
  urgentRisk: z.boolean(),
  privacyConfirmed: z.boolean(),
  emergencyConfirmed: z.boolean(),
  website: z.unknown(),
  startedAt: z.number()
});

export async function POST(request: NextRequest) {
  try {
    const allowed = await checkRateLimit(request, "help-someone-submit", 5, 24 * 60 * 60);
    if (!allowed) {
      return NextResponse.json(
        { error: "The daily support-request limit has been reached. If the situation is urgent, use the appropriate local emergency or safeguarding service." },
        { status: 429 }
      );
    }

    const parsed = schema.safeParse(await request.json());
    if (!parsed.success) {
      return NextResponse.json({ error: "Some required information is invalid." }, { status: 400 });
    }

    const input = parsed.data;
    const honeypot = cleanText(input.website, 100);
    if (honeypot || Date.now() - input.startedAt < 3500) {
      return NextResponse.json({ error: "The support request could not be accepted." }, { status: 400 });
    }

    if (!input.privacyConfirmed || !input.emergencyConfirmed) {
      return NextResponse.json({ error: "Both safety confirmations are required." }, { status: 400 });
    }

    const personName = cleanText(input.personName, 120);
    const personAge = cleanText(input.personAge, 40);
    const personGender = cleanText(input.personGender, 80);
    const country = cleanText(input.country, 100);
    const personPhone = cleanText(input.personPhone, 100);
    const otherContact = cleanText(input.otherContact, 240);
    const safeContactNotes = cleanText(input.safeContactNotes, 1500);
    const requesterName = cleanText(input.requesterName, 120);
    const requesterRelationship = cleanText(input.requesterRelationship, 120);
    const requesterContact = cleanText(input.requesterContact, 240);
    const situation = cleanText(input.situation, 6000);
    const safetyConcerns = cleanText(input.safetyConcerns, 3000);

    if (!personName || !personAge || !country || situation.length < 30) {
      return NextResponse.json(
        { error: "Complete the person's name, age, country and a description of what is happening." },
        { status: 400 }
      );
    }

    if (input.directContact) {
      if (input.knowsAboutRequest !== "yes" || !input.permissionToShareContact) {
        return NextResponse.json(
          { error: "Direct contact details can only be accepted when the person knows about the request and has agreed to share them." },
          { status: 400 }
        );
      }
      if (!personPhone && !otherContact) {
        return NextResponse.json({ error: "Add at least one safe direct contact method." }, { status: 400 });
      }
    } else if (!requesterContact) {
      return NextResponse.json(
        { error: "Add a safe way for AfterTheChurch to contact you when direct contact with the other person is not permitted." },
        { status: 400 }
      );
    }

    const supabase = createAdminClient();
    const { error } = await supabase.from("support_requests").insert({
      person_name: personName,
      person_age: personAge,
      person_gender: personGender || null,
      country,
      knows_about_request: input.knowsAboutRequest,
      direct_contact_permitted: input.directContact,
      permission_to_share_contact: input.directContact ? input.permissionToShareContact : false,
      safe_phone: input.directContact ? personPhone || null : null,
      other_contact: input.directContact ? otherContact || null : null,
      safe_contact_notes: safeContactNotes || null,
      requester_name: requesterName || null,
      requester_relationship: requesterRelationship || null,
      requester_contact: requesterContact || null,
      situation,
      safety_concerns: safetyConcerns || null,
      urgent_risk: input.urgentRisk,
      privacy_confirmed: true,
      emergency_confirmed: true,
      status: "new"
    });

    if (error) throw error;

    try {
      await sendSupportRequestNotification({ country, urgentRisk: input.urgentRisk });
    } catch (notificationError) {
      console.error("Support request notification failed:", notificationError);
    }

    return NextResponse.json({ ok: true }, { status: 201 });
  } catch (error) {
    console.error("Support request submission failed:", error);
    return NextResponse.json(
      { error: "The support request could not be saved. Please try again." },
      { status: 500 }
    );
  }
}
