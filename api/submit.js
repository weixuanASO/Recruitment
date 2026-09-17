/* ============================================================
   /api/submit  —  serverless function (runs on Vercel)
   ------------------------------------------------------------
   The form's PRIMARY channel is WhatsApp. This endpoint is the
   BACKUP record: it (1) appends the application to a Google
   Sheet and (2) emails you a copy via Resend.

   It does nothing until you set the environment variables in
   Vercel (Phase 5). Until then it just returns { ok: true } so
   the form never breaks.

   Env vars (set in Vercel → Project → Settings → Environment):
     SHEET_WEBHOOK_URL   Google Apps Script web-app URL (see /docs)
     RESEND_API_KEY      from resend.com
     NOTIFY_FROM         e.g. "The Advisor Path <apply@theadvisorpath.org>"
     NOTIFY_TO           where the email copy should land
   ============================================================ */

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ ok: false, error: "Method not allowed" });
  }

  const { answers = {}, submittedAt } = req.body || {};

  const row = {
    submittedAt: submittedAt || new Date().toISOString(),
    name: answers.name || "",
    referrer: answers.referrer || "",
    situation: answers.situation || "",
    why: Array.isArray(answers.why) ? answers.why.join(", ") : answers.why || "",
    factors: answers.factors || "",
    income: answers.income || "",
    concern: answers.concern || "",
    milestone: answers.milestone || "",
    email: answers.email || "",
    whatsapp: answers.whatsapp || "",
  };

  const tasks = [];

  // 1) Google Sheet (via Apps Script webhook)
  if (process.env.SHEET_WEBHOOK_URL) {
    tasks.push(
      fetch(process.env.SHEET_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(row),
      }).catch((e) => console.error("sheet error", e))
    );
  }

  // 2) Email copy (via Resend)
  if (process.env.RESEND_API_KEY && process.env.NOTIFY_TO) {
    const html = `<h2>New application — The Advisor Path</h2>` +
      Object.entries(row)
        .map(([k, v]) => `<p><b>${k}</b><br>${String(v || "-").replace(/\n/g, "<br>")}</p>`)
        .join("");
    tasks.push(
      fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: process.env.NOTIFY_FROM || "onboarding@resend.dev",
          to: process.env.NOTIFY_TO,
          subject: `New application — ${row.name || "no name"}`,
          html,
        }),
      }).catch((e) => console.error("resend error", e))
    );
  }

  await Promise.allSettled(tasks);
  return res.status(200).json({ ok: true });
}
