# BUILD BRIEF — theadvisorpath.org

Recruitment landing-page funnel for Chua Wei Xuan (financial advisory recruitment, Singapore).
Modeled on apply.danielheng.com.sg (structure) + therestive.co (visual style).
Status: Phase 4 build COMPLETE (React + Vite). Runs locally via `npm run dev`.
Phase 5 = backend wiring + deploy. See README.md and docs/BACKEND-SETUP.md.

## Still needed from Wei Xuan before / during build
- Block B FAQ answers (4, in his voice)
- Finexis compliance sign-off on: firm name usage, case-study credentials, disclaimer placement, whole page
- Finexis-cleared testimonial videos for Jing Lin + Denzel (re-records) — placeholders used until then
- 3 written testimonial one-liners (optional; section auto-hides if empty)
- A headshot / photo of Wei Xuan for the founder section
- Confirm scarcity/urgency line for the sticky bar (or omit — no cap on numbers)

---

## Accounts (Phase 2 — done)
| Service | Detail |
|---|---|
| Domain | `theadvisorpath.org` (Namecheap, privacy on) |
| GitHub | created |
| Vercel | created, linked to GitHub |
| Resend | created (email notifications) |
| Calendly | `calendly.com/weixuanchua/discovery-call` (30-min) — NOT used in flow; kept for later |
| Backend plan | On submit: save to Google Sheet + email notification. Final step = WhatsApp handoff to `+65 8123 5163` with answers pre-filled. |

---

## Section 1 — Business basics
- **Page name / wordmark:** Wei Xuan Chua
- **Domain:** theadvisorpath.org
- **One-liner:** "I recruit and mentor trustworthy, coachable Singaporeans and PRs into financial advisory — with a proven, replicable system, including warm and cold lead-generation methods, for building a sustainable practice on their own terms."
- **Recruiting:** Singaporeans / PRs, 21+, mid-career working professionals. Character-first: trustworthy, likeable, coachable.
- **Primary outcome sold:** A sustainable, systemised advisory business that creates time, options, and freedom toward the life they actually want — not just a sales job.
- **Market:** Singapore only
- **Founder / face:** Chua Wei Xuan

## Section 2 — Branding
- **Vibe:** Premium / editorial — warm near-black bg, gold accent, bold sans headlines. "Invite-only" feel.
- **Palette (from therestive.co):**
  - Background `#0B0A08`
  - Text primary `#FAFAFA`
  - Text muted `#A1A1AA`
  - Accent (gold) `#E8B86D`
  - Card / panel `#18171A`
  - Border `#27272A`
  - CTA buttons: solid gold `#E8B86D`, near-black text
- **Fonts (Google Fonts):** Geist (headlines + body); Caveat (handwriting accent, used sparingly in founder-story)
- **Logo:** none — text wordmark "Wei Xuan Chua" in Geist

## Section 3 — The offer
- **What's offered:** (1) 4-week Induction ("ALL STAR Career Experience") — experience the career, no pressure. (2) 90-Day Transition Program — for committed individuals.
- **Cost to join:** none / free
- **Cap:** no cap on numbers
- **Selectivity angle:** fit-based (trustworthy, likeable, coachable) — "not everyone is right for this," NOT "only 3 spots left"
- **Main CTA button:** "See If You're the Right Fit"
- **Calendly:** not in flow (WhatsApp handoff instead)

## Section 4 — Founder story
- **Name + title:** Chua Wei Xuan — Financial Advisor & Mentor
- **Story beats:** Worked at SGX before FA; switched right after ORD. Wanted freedom, no income ceiling, to retire his parents, a meaningful 20–30-year career. Learned that advisors who last run a simple, repeatable system (consistent warm + cold lead-gen, honest conversations, follow-through) rather than hustle-till-burnout. Started mentoring because the career changed his life + late mother's words: 学到的就要教，赚到的就要给 ("what you learn, you teach; what you earn, you give"). Proudest moment: watching advisors who joined in their early twenties buy their own condo before turning 30.
- **Core thesis:** "What is not simple is not replicable — and what is not replicable will not scale." Sub-line: "Freedom is built by repeatedly doing the boring things that compound."
- **Links:** LinkedIn `linkedin.com/in/weixuanchua` · Instagram `instagram.com/weixuan.chua`

## Section 5 — Case studies
Two real (Poh Jing Lin, Denzel Chiam). Full source: `research/testimonial-transcripts.md`.
Cards 3–6 = placeholders.
⚠️ Firm name + credentials must be cleared with Finexis Advisory compliance before publishing.

**Card 1 — Poh Jing Lin**
- Before: planned a maritime-sector career; introverted; no sales background, no network, low confidence.
- Result: Court of the Table within her first few years; moved into a management role.
- Quote: "I didn't even dare to say out loud that I wanted MDRT. Under the right mentorship, I hit Court of the Table instead. You don't need to be extroverted to do well here — the mentorship matters more."
- Badges: `Court of the Table` · `Moved into management`

**Card 2 — Denzel Chiam**
- Before: ex-NS, Pharmaceutical Sciences diploma; internship was 8 hrs/day at a computer; sick of unpaid overtime — wanted effort to equal reward.
- Result: went from "I'll never do sales" to moving into management in his 2nd year.
- Quote: "I thought this job meant roadshows and hard-selling. Then a friend showed me a referral-based way of working that was actually client-first. I searched it up, visited the office, and joined."
- Badges: `Moved into management — Year 2`

## Section 6 — Testimonials
- **Video:** 2 slots (Jing Lin, Denzel). PLACEHOLDER until Finexis-cleared re-records exist. Do NOT relabel old IAM Advisory Group footage.
- **Written:** 3 placeholder quote slots. Section auto-hides if left empty.
- **Disclaimer:** the HSBC Life / firm disclaimer text goes as visible copy on the page near the testimonials (agreed condition for trimming clips later).

## Section 7 — The System
**Heading:** "How we build you — from exploring to independent."

1. **Induction (4 weeks — "ALL STAR Career Experience")** — no-pressure look inside; sit in on real client work; two-way assessment. → *Clarity. You've seen the real job and the decision is yours.*
   - Week 1 — Experience: "What does an FA actually do?" Roleplay-led. → "I can actually learn this."
   - Week 2 — Build: "Where will my business come from?" Hands-on Pipeline Lab — warm market, referrals, cold outreach, social. → "There's actually a system for finding clients."
   - Week 3 — Prove: "Can I succeed?" Real business equation; three honest scenarios (Survival / Competent / High Performer), reverse-engineered; build own 90-day calendar. → "I know what I'd need to do."
   - Week 4 — Decide: career-decision session, not a close; honest about hard parts; build Year-1 vision → 90-day roadmap → first 30 days. → "I have enough evidence to decide."
2. **Transition (90 days)** — for committed individuals. CMFAS licensing papers done within this window. Personal coaching of advisory process; start building pipeline with warm + cold lead-gen. → *You can hold a real client meeting with confidence — and you have people to meet.*
3. **Build & Systemise** — turn what's working into your personal system; repeatable weekly actions that compound. Weekly 1-on-1 mentorship + team training. → *Consistent momentum instead of bursts of effort — your activities compound.*
4. **Independence & Leadership** — deeper planning, better clients, higher income; optional path to building/mentoring your own team (like Jing Lin & Denzel). → *A practice nobody can take from you — and the option to lead.*

## Section 8 — What you provide ("What you get when you join")
| Deliverable | Outcome subtitle |
|---|---|
| Weekly 1-on-1 mentorship with Wei Xuan | Direct coaching, every week — you're never figuring it out alone |
| The Pipeline Lab | A working system for warm + cold lead-generation — not just slides |
| 90-day rookie support system | JFW, roleplays, case studies, prospecting sessions, manager coaching — a system that lets you hit your goals repeatedly |
| Advisory process coaching | How to open, present, and help someone decide — refined with you to grow your case size |
| ASO Skool training platform | 14 structured modules to get you started |
| Team culture built on cross-sharing | People who share what's working instead of guarding it |
| Subsidised international trips | Across multiple insurers within Finexis |

(No base-salary line — none offered / not referenced.)

## Section 9 — Who this is for / not for
**This is for you if…**
- You're a working professional who's hit a ceiling — income, growth, or meaning
- You're 2–3 years into the industry and can't figure out why you're not hitting MDRT / COT
- You're trustworthy, likeable, and coachable (matters more than your résumé)
- You want a career you can do well for years, not a quick win
- You're willing to work hard for a few years to build something lasting
- You enjoy conversations, building relationships, and helping people make good decisions
- You're introverted and worried it disqualifies you — it doesn't (ask Jing Lin)

**This is NOT for you if…**
- You want fast money without building anything
- You're not willing to be coached or held accountable
- You expect leads handed to you with zero prospecting
- You need someone to tell you what to do every single day
- You're not open to a completely new way of thinking about money and career

## Section 10 — FAQs

### Block A — Practical questions (answers below are final unless noted)
1. **How quickly will I see results?** — "The fastest milestone is completing your CMFAS papers, done within your first 90 days. Real momentum depends on how consistently you do the activities — most people who follow the system see traction within their first two months, as soon as they clear CMFAS."
2. **What's the commitment?** — "The 4-week Induction is low-commitment — about 2 hours a week. After that, this is a full-time career. If you're exploring on the side first, we'll talk about how that works."
3. **Do I need to spend money on ads?** — "No. The Pipeline Lab is built on warm market, referrals, cold outreach and organic social — no ad budget required."
4. **Do I need a big network or sales background?** — "No. Jing Lin had no network and thought she was 'too introverted.' Denzel came from a science diploma. The system doesn't assume you start with either."
5. **Why are you so selective?** — "I take people I believe I can genuinely groom. Character — trustworthy, likeable, coachable — matters more to me than your CV. If I don't think I can bring out your best, I'll tell you."
6. **How is this different from other agencies?** — "Coming from finexis, an independently owned advisory firm, we stay objective across 20 insurers — while replicating a proven system of warm and cold approaches to build a sustainable pipeline in your own business, realistically."
7. **What happens after the Discovery Call?** — "It's a two-way assessment, no pressure either way — the Exploration Phase. We get to understand you better, see if this career fits you, and draft your own business proposal so you have clarity on how to start. Where useful, I'll also arrange for you to meet advisors on the team with a similar background to yours."
8. **Can you guarantee results?** — "No — and I wouldn't trust anyone who does. What I'll show you is the exact activity-to-income equation and three honest scenarios, so you decide with real information."

### Block B — "But isn't it true that…" (WEI XUAN TO WRITE ANSWERS, 2–3 sentences each, in his own voice)
- "Don't you have to be loud and pushy to do well in this?"  (introvert blocker — Jing Lin is the proof)
- "Shouldn't I keep my stable job and try this later?"  (mid-career-switcher hesitation)
- "Don't you need a big network to start?"  (Jing Lin + Denzel started with none)
- "What will my family think of me doing this?"  (Denzel raised this — family ended up supportive)
- Framing label for this block: NOT "rules I broke" (that's Daniel Heng's). Use something like "What I believed vs. what turned out to be true."

---

## Compliance watch-list (raised during interview)
- Named IAM Advisory Group reps in testimonials → get firm + individuals' sign-off; likely re-record under Finexis.
- HSBC Life / firm disclaimer → keep visible on page.
- Case-study credentials (COT, MDRT, management titles) → confirm what's displayable under Finexis compliance.
- Whole page → run past Finexis compliance before launch.
