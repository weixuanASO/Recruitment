# The Advisor Path — landing page

Recruitment funnel for Chua Wei Xuan. Built with React + Vite.

## Run it on your computer

```bash
npm install
npm run dev
```

Then open the URL it prints (usually http://localhost:5173).

- `/` — the landing page
- `/qualify` — the multi-step application form

## Editing the words

**All page text lives in one file: [`src/content.js`](src/content.js).**
Headlines, the founder story, case studies, FAQ questions, the form questions —
change any of it there. You never need to open the component files.

A few common edits:

| I want to change… | Edit in `src/content.js` |
|---|---|
| The sticky bar text (or hide it) | `topBar` |
| Headline / hero paragraph | `hero` |
| The 4 stat numbers | `stats` |
| A case study | `results.cases` |
| Add my photo | `mentor.photo` — paste an image URL |
| FAQ answers (Block B) | `faq.blockB` — fill in the empty `a: ""` |
| Add written testimonials | `testimonials.quotes` |
| Add real testimonial videos | `testimonials.videos` — set `src` to the file |
| The form questions | `qualifySteps` |
| WhatsApp number | `site.whatsappNumber` |

## Editing colours / fonts

[`src/theme.css`](src/theme.css) — the palette and fonts are the CSS variables
at the top. Change a hex code there and it updates everywhere.

## Project structure

```
src/
  content.js        ← ALL text
  theme.css         ← colours, fonts, spacing
  styles.css        ← visual styling
  App.jsx           ← the landing page (section order)
  pages/Qualify.jsx ← the application form
  components/        ← one file per page section
api/
  submit.js         ← backend: saves to Google Sheet + emails you (see docs/)
```

## What's left (Phase 5)

- Wire the backend: [`docs/BACKEND-SETUP.md`](docs/BACKEND-SETUP.md)
- Deploy to Vercel and connect `theadvisorpath.org`
- Fill the open items in [`BUILD_BRIEF.md`](BUILD_BRIEF.md) (photo, Block B answers,
  Finexis compliance sign-off, cleared testimonial videos)
