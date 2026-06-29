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

  const { name, company, phone, email, message, website, source, resumeBase64, resumeFilename, resumeMimeType } = parsed.data;

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

  const attachments =
    resumeBase64 && resumeFilename && resumeMimeType
      ? [{ filename: resumeFilename, content: resumeBase64, type: resumeMimeType }]
      : [];

  try {
    const resend = new Resend(apiKey);
    await resend.emails.send({
      from: "MDP Website <noreply@mdpcoffeehouse.com>",
      to: process.env.CONTACT_EMAIL ?? siteConfig.email,
      replyTo: undefined,
      attachments: attachments.length > 0 ? attachments : undefined,
      subject: source === "careers"
        ? `Career Application from ${name}`
        : `New enquiry from ${name}${company ? ` · ${company}` : ""}`,
      html: `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"></head>
<body style="font-family: Georgia, serif; background: #F9F0E1; margin: 0; padding: 40px 20px;">
  <table width="100%" cellpadding="0" cellspacing="0" style="max-width: 560px; margin: 0 auto;">
    <tr>
      <td style="background: #411915; padding: 32px 40px;">
        <p style="margin: 0; font-family: Arial, sans-serif; font-size: 11px; letter-spacing: 3px; text-transform: uppercase; color: #FEC87F; opacity: 0.7;">MDP Coffee House</p>
        <h1 style="margin: 12px 0 0; font-family: Arial, sans-serif; font-size: 24px; color: #F9F0E1; font-weight: 900;">New Enquiry</h1>
        ${source === "careers" ? `<p style="margin: 8px 0 0; font-family: Arial, sans-serif; font-size: 11px; color: #FEC87F; opacity: 0.7; letter-spacing: 2px; text-transform: uppercase;">Career Application</p>` : ""}
      </td>
    </tr>
    <tr>
      <td style="background: #ffffff; padding: 40px;">
        <table width="100%" cellpadding="0" cellspacing="0">
          <tr>
            <td style="padding-bottom: 20px; border-bottom: 1px solid #EDE0C8;">
              <p style="margin: 0 0 4px; font-family: Arial, sans-serif; font-size: 10px; letter-spacing: 2px; text-transform: uppercase; color: #70120E;">Name</p>
              <p style="margin: 0; font-family: Georgia, serif; font-size: 18px; color: #411915;">${name}</p>
            </td>
          </tr>
          ${company ? `
          <tr>
            <td style="padding: 20px 0; border-bottom: 1px solid #EDE0C8;">
              <p style="margin: 0 0 4px; font-family: Arial, sans-serif; font-size: 10px; letter-spacing: 2px; text-transform: uppercase; color: #70120E;">Company</p>
              <p style="margin: 0; font-family: Georgia, serif; font-size: 18px; color: #411915;">${company}</p>
            </td>
          </tr>` : ""}
          <tr>
            <td style="padding: 20px 0; border-bottom: 1px solid #EDE0C8;">
              <p style="margin: 0 0 4px; font-family: Arial, sans-serif; font-size: 10px; letter-spacing: 2px; text-transform: uppercase; color: #70120E;">Phone</p>
              <p style="margin: 0; font-family: Georgia, serif; font-size: 18px; color: #411915;"><a href="tel:${phone}" style="color: #411915; text-decoration: none;">${phone}</a></p>
            </td>
          </tr>
          ${email ? `
          <tr>
            <td style="padding: 20px 0; border-bottom: 1px solid #EDE0C8;">
              <p style="margin: 0 0 4px; font-family: Arial, sans-serif; font-size: 10px; letter-spacing: 2px; text-transform: uppercase; color: #70120E;">Email</p>
              <p style="margin: 0; font-family: Georgia, serif; font-size: 18px; color: #411915;"><a href="mailto:${email}" style="color: #411915; text-decoration: none;">${email}</a></p>
            </td>
          </tr>` : ""}
          ${message ? `
          <tr>
            <td style="padding: 20px 0;">
              <p style="margin: 0 0 4px; font-family: Arial, sans-serif; font-size: 10px; letter-spacing: 2px; text-transform: uppercase; color: #70120E;">Message</p>
              <p style="margin: 0; font-family: Georgia, serif; font-size: 16px; color: #411915; line-height: 1.6;">${message}</p>
            </td>
          </tr>` : ""}
        </table>
      </td>
    </tr>
    <tr>
      <td style="background: #411915; padding: 20px 40px;">
        <p style="margin: 0; font-family: Arial, sans-serif; font-size: 11px; color: #F9F0E1; opacity: 0.35;">Sent from mdpcoffeehouse.com · ${new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })} IST</p>
      </td>
    </tr>
  </table>
</body>
</html>
`,
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
