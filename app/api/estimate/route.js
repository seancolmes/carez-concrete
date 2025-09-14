import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const data = await req.json();

    // Basic validation
    const name = (data.name || "").trim();
    const email = (data.email || "").trim();
    const phone = (data.phone || "").trim();
    const service = (data.service || "").trim();
    const message = (data.message || "").trim();
    const consent = !!data.consent;

    if (!name || !email || !message) {
      return new Response(JSON.stringify({ ok: false, error: "Missing required fields." }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    const subject = `New estimate request — ${name}${service ? " • " + service : ""}`;

    const plain = [
      `New estimate request from the website:`,
      ``,
      `Name: ${name}`,
      `Email: ${email}`,
      `Phone: ${phone || "(none provided)"}`,
      `Service: ${service || "(not selected)"}`,
      `Consent to contact: ${consent ? "Yes" : "No"}`,
      ``,
      `Message:`,
      message,
    ].join("\n");

    const html = `
      <div style="font-family:system-ui,-apple-system,Segoe UI,Roboto,Arial,sans-serif;font-size:14px;line-height:1.5;color:#111">
        <h2 style="margin:0 0 8px 0">New estimate request</h2>
        <p style="margin:0 0 12px 0;color:#555">Submitted from the Carez Concrete website.</p>
        <table style="border-collapse:collapse">
          <tr><td style="padding:4px 8px;font-weight:600">Name</td><td style="padding:4px 8px">${escapeHtml(name)}</td></tr>
          <tr><td style="padding:4px 8px;font-weight:600">Email</td><td style="padding:4px 8px">${escapeHtml(email)}</td></tr>
          <tr><td style="padding:4px 8px;font-weight:600">Phone</td><td style="padding:4px 8px">${escapeHtml(phone || "(none)")}</td></tr>
          <tr><td style="padding:4px 8px;font-weight:600">Service</td><td style="padding:4px 8px">${escapeHtml(service || "(not selected)")}</td></tr>
          <tr><td style="padding:4px 8px;font-weight:600">Consent</td><td style="padding:4px 8px">${consent ? "Yes" : "No"}</td></tr>
        </table>
        <div style="margin-top:16px">
          <div style="font-weight:600;margin-bottom:6px">Message:</div>
          <div style="white-space:pre-wrap">${escapeHtml(message)}</div>
        </div>
      </div>
    `;

    const sendResult = await resend.emails.send({
      from: process.env.EMAIL_FROM,
      to: process.env.EMAIL_TO, // you can set this to an array later if you want
      reply_to: email,          // replying to the email hits your customer directly
      subject,
      text: plain,
      html,
    });

    if (sendResult.error) {
      console.error("Resend error:", sendResult.error);
      return new Response(JSON.stringify({ ok: false, error: "Email send failed." }), {
        status: 500,
        headers: { "Content-Type": "application/json" },
      });
    }

    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("API /estimate error:", err);
    return new Response(JSON.stringify({ ok: false, error: "Server error." }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}

// simple HTML escape to avoid breaking markup
function escapeHtml(str) {
  return String(str).replace(/[&<>"']/g, s => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  }[s]));
}
