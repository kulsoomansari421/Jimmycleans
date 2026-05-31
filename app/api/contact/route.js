import nodemailer from "nodemailer";

// Force Node.js runtime — nodemailer requires it (Edge runtime blocks Node modules)
export const runtime = "nodejs";

export async function POST(request) {
  try {
    const { name, email, phone, service, message } = await request.json();
  console.log("🔥 API HIT /api/contact");
    if (!name || !phone) {
      return Response.json(
        { error: "Name and phone are required." },
        { status: 400 }
      );
    }

    const user = process.env.EMAIL_USER;
    const pass = process.env.EMAIL_PASS; 
    console.log("ENV CHECK:", {
  user,
  passLength: pass?.length,
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
});// FIXED (removed broken code block)

    if (!user || !pass) {
      console.error("Missing EMAIL_USER or EMAIL_PASS in .env.local");

      return Response.json(
        { error: "Server email not configured." },
        { status: 500 }
      );
    }

 const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: 465,
  secure: true,
  auth: {
    user,
    pass,
  },
});

console.log("📧 Sending email now...");
    await transporter.sendMail({
    
      from: `"Jimmy Cleans Website" <${user}>`,
      to: process.env.EMAIL_USER,
      replyTo: email || undefined,
      subject: `New Quote Request — ${service || "General"} from ${name}`,
      html: `
        <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;background:#f9fafb;padding:32px;">
          <div style="background:#1B9DE8;border-radius:12px 12px 0 0;padding:24px 32px;">
            <h1 style="color:#fff;margin:0;font-size:22px;">New Quote Request</h1>
            <p style="color:rgba(255,255,255,0.75);margin:6px 0 0;font-size:14px;">Submitted via jimmycleans.com</p>
          </div>

          <div style="background:#fff;border-radius:0 0 12px 12px;padding:32px;border:1px solid #e5e7eb;border-top:none;">
            <table style="width:100%;border-collapse:collapse;">

              <tr>
                <td style="padding:10px 0;border-bottom:1px solid #f3f4f6;width:120px;">
                  <span style="font-size:11px;font-weight:600;color:#9ca3af;text-transform:uppercase;">Name</span>
                </td>
                <td style="padding:10px 0;border-bottom:1px solid #f3f4f6;">
                  <span style="font-size:15px;color:#0d0d0d;font-weight:500;">${name}</span>
                </td>
              </tr>

              ${email ? `
              <tr>
                <td style="padding:10px 0;border-bottom:1px solid #f3f4f6;">
                  <span style="font-size:11px;font-weight:600;color:#9ca3af;text-transform:uppercase;">Email</span>
                </td>
                <td style="padding:10px 0;border-bottom:1px solid #f3f4f6;">
                  <a href="mailto:${email}" style="font-size:15px;color:#1B9DE8;">${email}</a>
                </td>
              </tr>` : ""}

              <tr>
                <td style="padding:10px 0;border-bottom:1px solid #f3f4f6;">
                  <span style="font-size:11px;font-weight:600;color:#9ca3af;text-transform:uppercase;">Phone</span>
                </td>
                <td style="padding:10px 0;border-bottom:1px solid #f3f4f6;">
                  <a href="tel:${phone}" style="font-size:15px;color:#1B9DE8;">${phone}</a>
                </td>
              </tr>

              <tr>
                <td style="padding:10px 0;border-bottom:1px solid #f3f4f6;">
                  <span style="font-size:11px;font-weight:600;color:#9ca3af;text-transform:uppercase;">Service</span>
                </td>
                <td style="padding:10px 0;border-bottom:1px solid #f3f4f6;">
                  <span style="font-size:15px;color:#0d0d0d;">${service || "Not specified"}</span>
                </td>
              </tr>

              ${message ? `
              <tr>
                <td style="padding:10px 0;vertical-align:top;">
                  <span style="font-size:11px;font-weight:600;color:#9ca3af;text-transform:uppercase;">Message</span>
                </td>
                <td style="padding:10px 0;">
                  <p style="font-size:14px;color:#374151;margin:0;line-height:1.6;">
                    ${message.replace(/\n/g, "<br>")}
                  </p>
                </td>
              </tr>` : ""}

            </table>

            <div style="margin-top:24px;padding:14px 16px;background:#f0f7fe;border-radius:8px;border-left:3px solid #1B9DE8;">
              <p style="margin:0;font-size:13px;color:#374151;">
                <strong>Follow up</strong> by calling
                <a href="tel:${phone}" style="color:#1B9DE8;">${phone}</a>
                ${email ? `or emailing <a href="mailto:${email}" style="color:#1B9DE8;">${email}</a>` : ""}.
              </p>
            </div>

          </div>
        </div>
      `,
    });
console.log("✅ Email sent successfully");
    return Response.json({ success: true });

  } catch (err) {
    console.error("Email send error:", err?.message || err);

    return Response.json(
      { error: "Failed to send email. Please call us." },
      { status: 500 }
    );
  }
}