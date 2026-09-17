# Backend setup (Phase 5)

The form's **primary** channel is WhatsApp — that works with zero setup.
This adds two **backups** so you never lose an application:

1. Every submission is appended to a **Google Sheet**
2. You get an **email copy** of every submission (via Resend)

Both are optional. Set them up when you're ready.

---

## 1. Google Sheet backup

We use a tiny **Google Apps Script** as a webhook. No API keys, no billing.

1. Create a new Google Sheet (in `weixuan276@gmail.com` or wherever you want the leads).
2. In the Sheet: **Extensions → Apps Script**.
3. Delete whatever's there and paste:

```javascript
function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
  var data = JSON.parse(e.postData.contents);
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(Object.keys(data));
  }
  sheet.appendRow(Object.keys(data).map(function (k) { return data[k]; }));
  return ContentService.createTextOutput("ok");
}
```

4. **Deploy → New deployment → type: Web app.**
   - Execute as: **Me**
   - Who has access: **Anyone**
   - Click **Deploy**, authorise, and **copy the Web app URL**.
5. That URL is your `SHEET_WEBHOOK_URL` (step 3 below).

---

## 2. Email copy (Resend)

1. Log in to [resend.com](https://resend.com).
2. **API Keys → Create API Key** → copy it. That's `RESEND_API_KEY`.
3. To send *from* your own domain (`apply@theadvisorpath.org`), go to
   **Domains → Add Domain**, enter `theadvisorpath.org`, and add the DNS
   records it shows you at your domain registrar (Namecheap).
   - Until that's verified you can leave `NOTIFY_FROM` as `onboarding@resend.dev`
     for testing — it still delivers to you.

---

## 3. Put the values into Vercel

Vercel → your project → **Settings → Environment Variables**. Add:

| Name | Value |
|---|---|
| `SHEET_WEBHOOK_URL` | the Apps Script Web app URL |
| `RESEND_API_KEY` | from Resend |
| `NOTIFY_FROM` | `The Advisor Path <apply@theadvisorpath.org>` (or `onboarding@resend.dev`) |
| `NOTIFY_TO` | the email address that should receive the copies |

**Redeploy** after adding them (Vercel → Deployments → ⋯ → Redeploy).

---

## Testing locally

Copy `.env.example` to `.env`, fill in the same values, and run `vercel dev`
(install the Vercel CLI with `npm i -g vercel`). Plain `npm run dev` does **not**
run the `/api` function — the form still works, it just skips the backup.
