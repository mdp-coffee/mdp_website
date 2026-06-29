import { NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";
import { isRateLimited } from "@/lib/rate-limit";

export const runtime = "nodejs";

const newsletterSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  website: z.string().default(""), // honeypot
});

export async function POST(request: Request) {
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    "unknown";

  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: "Too many requests. Please try again in a minute." },
      { status: 429 }
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  const parsed = newsletterSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Invalid email address", issues: parsed.error.flatten() },
      { status: 400 }
    );
  }

  const { email, website } = parsed.data;

  if (website.length > 0) {
    return NextResponse.json({ success: true });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY is not configured");
    return NextResponse.json(
      { error: "Email service is not configured" },
      { status: 500 }
    );
  }

  const audienceId = process.env.RESEND_AUDIENCE_ID;
  if (!audienceId) {
    console.error("RESEND_AUDIENCE_ID is not configured");
    return NextResponse.json(
      { error: "Newsletter service is not configured" },
      { status: 500 }
    );
  }

  try {
    const resend = new Resend(apiKey);
    await resend.contacts.create({ email, audienceId, unsubscribed: false });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Resend contacts.create failed:", error);
    return NextResponse.json(
      { error: "Failed to subscribe. Please try again." },
      { status: 500 }
    );
  }
}
