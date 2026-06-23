import { NextResponse } from "next/server";
import { Resend } from "resend";
import { contactFormSchema } from "@/lib/validation";
import { isRateLimited } from "@/lib/rate-limit";
import { siteConfig } from "@/content/site";

export const runtime = "nodejs";

export async function POST(request: Request) {
  // ── Rate limiting by IP ──────────────────────────────────
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    "unknown";

  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: "Too many requests. Please try again in a minute." },
      { status: 429 }
    );
  }

  // ── Parse and validate (server-side — never trust the client) ──
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  const parsed = contactFormSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Invalid form data", issues: parsed.error.flatten() },
      { status: 400 }
    );
  }

  const { name, company, phone, message, website } = parsed.data;

  // ── Honeypot — if filled, silently pretend success (don't tip off bots) ──
  if (website.length > 0) {
    return NextResponse.json({ success: true });
  }

  // ── Send via Resend ──────────────────────────────────────
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY is not configured");
    return NextResponse.json(
      { error: "Email service is not configured" },
      { status: 500 }
    );
  }

  try {
    const resend = new Resend(apiKey);
    await resend.emails.send({
      from: "MDP Website <noreply@mdpcoffeehouse.com>",
      to: process.env.CONTACT_EMAIL ?? siteConfig.email,
      replyTo: undefined,
      subject: `New enquiry from ${company}`,
      text: [
        `Name: ${name}`,
        `Company: ${company}`,
        `Phone: ${phone}`,
        `Message: ${message || "(none provided)"}`,
      ].join("\n"),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Resend send failed:", error);
    return NextResponse.json(
      { error: "Failed to send. Please try WhatsApp instead." },
      { status: 502 }
    );
  }
}
