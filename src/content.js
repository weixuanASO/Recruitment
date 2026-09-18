/* ============================================================
   ALL PAGE TEXT LIVES HERE.
   Edit any wording in this file — you never need to touch the
   component code to change copy, names, numbers or questions.
   ============================================================ */

export const site = {
  wordmark: "Wei Xuan Chua",
  domain: "theadvisorpath.org",
  // WhatsApp number that receives completed applications (digits only, incl. country code)
  whatsappNumber: "6581235163",
  calendly: "https://calendly.com/weixuanchua/discovery-call", // not used in the flow; kept for reference
  linkedin: "https://www.linkedin.com/in/weixuanchua/",
  instagram: "https://www.instagram.com/weixuan.chua/",
  ctaLabel: "See If You're the Right Fit",
  ctaShort: "Apply now", // used in the sticky top nav where space is tight
};

/* Sticky bar at the very top. Set `show: false` to hide it entirely. */
export const topBar = {
  show: true,
  text: "I run one intake at a time — the next Induction group is forming now.",
};

export const hero = {
  kicker: "For Singaporeans & PRs, 21+",
  title: "Build a financial advisory practice you actually own.",
  // one paragraph, founder voice
  body:
    "Most people who try this career burn out chasing friends and family, then quit inside two years. The ones who last build a simple, repeatable system — and do the boring things long enough for it to compound. That's what I mentor people to do.",
  ctaSub: "Takes about 3 minutes · No commitment · I review every application myself",
};

export const stats = [
  { value: "SGX", label: "Where I started, before this" },
  { value: "20", label: "Insurers we stay objective across, via finexis" },
  { value: "Weekly", label: "1-on-1 mentorship — never figuring it out alone" },
  { value: "COT", label: "What Jing Lin hit in her 2nd year — her first full year" },
];

export const reality = {
  heading: "Most advisory careers stall in the same three places.",
  points: [
    {
      n: "01",
      title: "You run out of people to talk to.",
      body:
        "The warm market dries up in months. Nobody hands you a real system for finding clients after that — so activity drops, and so does income.",
    },
    {
      n: "02",
      title: "You're 2–3 years in and still not at MDRT.",
      body:
        "You're working hard, but you can't see what's actually holding you back. No one is sitting down with you every week to fix it.",
    },
    {
      n: "03",
      title: "The people doing well aren't sharing how.",
      body:
        "In a self-employed job, most advisors guard what works. You're left reverse-engineering success on your own.",
    },
  ],
  bridge:
    "There's a different way to do this — a practice you own, a pipeline that doesn't depend on your address book, and a mentor who sits with you every week. That's what this is.",
};

export const results = {
  heading: "People who chose to build.",
  disclaimerNote:
    "Individual results vary with effort, market conditions and commitment. Credentials shown are the individual's own.",
  cases: [
    {
      name: "Poh Jing Lin",
      before:
        "Planned a career in the maritime sector. Introverted. No sales background, no network, low confidence.",
      result: "Court of the Table",
      resultSub: "in her 2nd year — then moved into management",
      quote:
        "I didn't even dare to say out loud that I wanted MDRT. Under the right mentorship, I hit Court of the Table instead. You don't need to be extroverted to do well here — the mentorship matters more.",
      badges: ["Court of the Table", "Moved into management"],
      placeholder: false,
    },
    {
      name: "Denzel Chiam",
      before:
        "Ex-NS, Pharmaceutical Sciences diploma. Internship was 8 hours a day at a computer. Tired of unpaid overtime — wanted effort to equal reward.",
      result: "Into management",
      resultSub: "in his 2nd year — from “I'll never do sales”",
      quote:
        "I thought this job meant roadshows and hard-selling. Then a friend showed me a referral-based way of working that was actually client-first. I searched it up, visited the office, and joined.",
      badges: ["Moved into management — Year 2"],
      placeholder: false,
    },
    { name: "Your name here", before: "Add this case study in src/content.js", result: "—", resultSub: "placeholder", quote: "Placeholder — swap in a real story when you have it.", badges: ["Placeholder"], placeholder: true },
    { name: "Your name here", before: "Add this case study in src/content.js", result: "—", resultSub: "placeholder", quote: "Placeholder — swap in a real story when you have it.", badges: ["Placeholder"], placeholder: true },
  ],
};

export const clients = {
  heading: "How we actually find clients.",
  body:
    "No roadshows. We build your pipeline through warm market, referrals, cold outreach and organic social — the same engines, taught hands-on in the Pipeline Lab, that you'll run every week.",
};

export const system = {
  heading: "How we build you — from exploring to independent.",
  phases: [
    {
      n: "01",
      name: "Induction",
      meta: "4 weeks · the ALL STAR Career Experience",
      body:
        "A no-pressure look inside the career. You sit in on real client work and see exactly what the day-to-day involves before you commit to anything. It's a two-way assessment: you decide if this is right for you, and I'm honest about whether I can bring out your best.",
      outcome: "Clarity. You've seen the real job — not a pitch — and the decision is yours.",
      weeks: [
        { w: "Week 1 — Experience", d: "“What does an FA actually do?” Roleplay-led.", o: "“I can actually learn this.”" },
        { w: "Week 2 — Build", d: "“Where will my business come from?” Hands-on Pipeline Lab: warm market, referrals, cold outreach, social.", o: "“There's actually a system for finding clients.”" },
        { w: "Week 3 — Prove", d: "“Can I succeed?” The real business equation, three honest scenarios, reverse-engineered. Build your own 90-day calendar.", o: "“I know what I'd need to do.”" },
        { w: "Week 4 — Decide", d: "A career-decision session, not a close. Honest about the hard parts. Build your Year-1 vision → 90-day roadmap → first 30 days.", o: "“I have enough evidence to decide.”" },
      ],
    },
    {
      n: "02",
      name: "Transition",
      meta: "90 days",
      body:
        "For committed individuals. Your CMFAS licensing papers are done within this window. I personally coach your advisory process — how you open, present, and help someone make a good decision — and you start building your pipeline with warm and cold lead-generation methods.",
      outcome: "You can hold a real client meeting with confidence — and you have people to meet.",
    },
    {
      n: "03",
      name: "Build & Systemise",
      meta: "",
      body:
        "We turn what's working into your personal system — the repeatable weekly actions that compound. Weekly 1-on-1 mentorship with me, alongside team training.",
      outcome: "Consistent momentum instead of bursts of effort. Your activities start to compound.",
    },
    {
      n: "04",
      name: "Independence & Leadership",
      meta: "",
      body:
        "Your foundation is built. The work gets more sophisticated — deeper planning, better clients, higher income. And if you want it: the path Jing Lin and Denzel took — building and mentoring your own team.",
      outcome: "A practice nobody can take from you — and the option to lead.",
    },
  ],
};

export const forYou = {
  heading: "Is this you?",
  forTitle: "This is for you if…",
  notTitle: "This is not for you if…",
  for: [
    "You're a working professional who's hit a ceiling — income, growth, or meaning",
    "You're 2–3 years into the industry and can't figure out why you're not hitting MDRT / COT",
    "You're trustworthy, likeable, and coachable — this matters to me more than your résumé",
    "You want a career you can do well for years, not a quick win",
    "You're willing to work hard for a few years to build something lasting",
    "You enjoy conversations, building relationships, and helping people make good decisions",
    "You're introverted and worried it disqualifies you — it doesn't (ask Jing Lin)",
  ],
  not: [
    "You want fast money without building anything",
    "You're not willing to be coached or held accountable",
    "You expect leads handed to you with zero prospecting",
    "You need someone to tell you what to do every single day",
    "You're not open to a completely new way of thinking about money and career",
  ],
};

export const included = {
  heading: "What you get when you join.",
  items: [
    { t: "Weekly 1-on-1 mentorship with Wei Xuan", s: "Direct coaching, every week — you're never figuring it out alone" },
    { t: "The Pipeline Lab", s: "A working system for warm + cold lead-generation — not just slides" },
    { t: "90-day rookie support system", s: "JFW, roleplays, case studies, prospecting sessions, manager coaching — a system that lets you hit your goals repeatedly" },
    { t: "Advisory process coaching", s: "How to open, present, and help someone decide — refined with you to grow your case size" },
    { t: "ASO Skool training platform", s: "14 structured modules to get you started" },
    { t: "A team culture built on cross-sharing", s: "People who share what's working instead of guarding it" },
    { t: "Subsidised international trips", s: "Across multiple insurers within finexis" },
  ],
};

export const mentor = {
  heading: "Meet Wei Xuan.",
  title: "Chua Wei Xuan — Financial Advisor & Mentor",
  photo: "", // put an image URL or local path here later; a placeholder shows until then
  stats: [
    { value: "SGX", label: "Career before this" },
    { value: "ORD", label: "When I made the switch" },
    { value: "COT · 2026", label: "Court of the Table qualifier" },
    { value: "finexis", label: "Independently owned — objective across 20 insurers" },
  ],
  story: [
    "Before financial advisory, I worked at SGX — the Singapore Exchange. I made the switch right after I ORD-ed.",
    "I came in chasing something specific: freedom, no income ceiling, the ability to retire my parents, and a career with real meaning — one I could do well for 20 to 30 years, not burn out of in two.",
    "What I learned is that the advisors who last aren't the ones who hustle hardest. They're the ones who build a simple system and repeat the boring, compounding actions long enough for it to pay off. What is not simple is not replicable — and what is not replicable will not scale.",
    "I started mentoring because this career changed my life, and because of something my late mother told me: 学到的就要教，赚到的就要给 — what you learn, you teach; what you earn, you give. Growing a team is how I get to live that out at scale.",
    "The moment that stays with me: watching advisors who joined me in their early twenties buy their own condo before turning 30. That's not a sales story — that's a life changing.",
  ],
  thesis: "What is not simple is not replicable — and what is not replicable will not scale.",
  thesisSub: "Freedom is built by repeatedly doing the boring things that compound.",
  signature: "Wei Xuan",
};

export const testimonials = {
  heading: "In their words.",
  // Video slots — leave `src` empty to show a styled placeholder.
  videos: [
    { name: "Poh Jing Lin", role: "", src: "", poster: "", note: "Finexis-cleared re-record pending" },
    { name: "Denzel Chiam", role: "", src: "", poster: "", note: "Finexis-cleared re-record pending" },
  ],
  // Written quotes — the whole written block hides itself if this array is empty.
  quotes: [
    // { quote: "…", name: "…", detail: "…" },
  ],
  // Compliance disclaimer shown beneath this section (kept visible on the page by agreement).
  disclaimer:
    "The views and opinions expressed by the individuals featured are their own and do not constitute financial advice or any official communication of any insurer. The contents of this website have not been reviewed by the Monetary Authority of Singapore. finexis advisory Pte Ltd is responsible for the content of this website.",
};

export const faq = {
  headingA: "Practical questions.",
  blockA: [
    { q: "How quickly will I see results?", a: "The fastest milestone is completing your CMFAS papers, done within your first 90 days. Real momentum depends on how consistently you do the activities — most people who follow the system see traction within their first two months, as soon as they clear CMFAS." },
    { q: "What's the commitment?", a: "The 4-week Induction is low-commitment — about 2 hours a week. After that, this is a full-time career. If you're exploring on the side first, we'll talk about how that works." },
    { q: "Do I need to spend money on ads?", a: "No. The Pipeline Lab is built on warm market, referrals, cold outreach and organic social — no ad budget required." },
    { q: "Do I need a big network or sales background?", a: "No. Jing Lin had no network and thought she was ‘too introverted’. Denzel came from a science diploma. The system doesn't assume you start with either." },
    { q: "Why are you so selective?", a: "I take people I believe I can genuinely groom. Character — trustworthy, likeable, coachable — matters more to me than your CV. If I don't think I can bring out your best, I'll tell you." },
    { q: "How is this different from other agencies?", a: "Coming from finexis, an independently owned advisory firm, we stay objective across 20 insurers — while replicating a proven system of warm and cold approaches to build a sustainable pipeline in your own business, realistically." },
    { q: "What happens after the Discovery Call?", a: "It's a two-way assessment, no pressure either way — the Exploration Phase. We get to understand you better, see if this career fits you, and draft your own business proposal so you have clarity on how to start. Where useful, I'll also arrange for you to meet advisors on the team with a similar background to yours." },
    { q: "Can you guarantee results?", a: "No — and I wouldn't trust anyone who does. What I'll show you is the exact activity-to-income equation and three honest scenarios, so you decide with real information." },
  ],
  headingB: "What I believed vs. what turned out to be true.",
  // DRAFT (Wei Xuan): these are first-pass answers pulled from Jing Lin's and
  // Denzel's own stories — read them, rewrite in your own voice, or leave as-is.
  blockB: [
    {
      q: "Don't you have to be loud and pushy to do well in this?",
      a: "No — Jing Lin is proof. She came in convinced she was ‘too introverted’ for this, quit once because of it, and came back after realising the mentorship matters more than personality. She's since made Court of the Table. What actually moves the needle is whether people trust you, not how loud you are.",
    },
    {
      q: "Shouldn't I keep my stable job and try this later?",
      a: "You can explore first — that's what the 4-week Induction is for, a few hours a week, no commitment. But ‘later’ has a cost: every year you wait is a year you're not building something that's yours. If you're already unhappy where you are, the ceiling won't move on its own.",
    },
    {
      q: "Don't you need a big network to start?",
      a: "No. Jing Lin had no network. Denzel had never worked in sales before this. The Pipeline Lab exists precisely because most people don't walk in with a book of contacts — you build one using a system, not by already being connected.",
    },
    {
      q: "What will my family think of me doing this?",
      a: "Ask Denzel — his family told him upfront they didn't like financial advisors, and he joined anyway. What changed their minds wasn't an argument, it was watching him do it properly: know what he's doing, and sell the right thing to the right person. Most families come around once they see the work, not before.",
    },
  ],
};

export const finalCta = {
  heading: "If you're still reading, you're probably a fit.",
  body: "One intake at a time. I review every application myself, and I'll be honest with you either way.",
  sub: "Takes about 3 minutes · No commitment",
};

export const footer = {
  blurb: "The Advisor Path is the recruitment page of Chua Wei Xuan, a financial advisory representative of finexis advisory Pte Ltd.",
  links: [
    { label: "LinkedIn", href: site.linkedin },
    { label: "Instagram", href: site.instagram },
  ],
  legal: "© " + new Date().getFullYear() + " Chua Wei Xuan. All rights reserved.",
  fineprint:
    "This page is for career information only and is not an offer of employment or a solicitation to purchase any financial product. Nothing here is financial advice. Any income scenarios discussed are illustrations, not projections or guarantees.",
};

/* ============================================================
   THE APPLICATION FORM  (/qualify)
   Each step is one screen. Types:
     "text"     single line
     "textarea" multi-line
     "single"   pick one (auto-advances)
     "multi"    pick many (Continue button)
     "contact"  the email + WhatsApp + consent screen
   ============================================================ */

export const qualifyIntro = {
  kicker: "Before we begin",
  title: "Let's see if we're a fit.",
  body:
    "This takes about 3 minutes. I review every application myself. Answer honestly — there are no trick questions, and there's no wrong background.",
  quote:
    "While you're choosing the right team and mentor, I'm looking for people I'm confident I can groom. If I think I can bring out your best, I'll tell you. If I don't, I'll tell you that too.",
  quoteBy: "Wei Xuan",
  startLabel: "Start my application",
};

export const qualifySteps = [
  {
    id: "name",
    type: "text",
    title: "Let's start with your name.",
    placeholder: "e.g. Sarah Tan",
    required: true,
  },
  {
    id: "referrer",
    type: "text",
    title: "Who invited you, if anyone?",
    placeholder: "A name, or leave blank",
    required: false,
  },
  {
    id: "situation",
    type: "single",
    title: "Which sounds most like you right now?",
    options: [
      "I'm a working professional considering a switch",
      "I'm already a financial advisor (2–3 years in) and stuck",
      "I'm between jobs and weighing my options",
      "I'm exploring — still early",
    ],
    required: true,
  },
  {
    id: "why",
    type: "multi",
    title: "What's drawing you to look at this? Pick all that apply.",
    options: [
      "No income ceiling",
      "More control over my time",
      "Work that actually helps people",
      "A real mentor, not just a manager",
      "Building something I own",
      "A career I can do for 20+ years",
    ],
    required: true,
  },
  {
    id: "factors",
    type: "textarea",
    title: "What are the 3 most important things to you in choosing a career?",
    placeholder: "e.g. 1) Mentorship  2) Income potential  3) Flexibility",
    required: true,
  },
  {
    id: "income",
    type: "single",
    title: "What would a meaningful monthly income look like for you, 2–3 years in?",
    options: ["$5,000 – $8,000", "$8,001 – $15,000", "$15,001 – $25,000", "$25,000+"],
    required: true,
  },
  {
    id: "concern",
    type: "textarea",
    title: "What's your biggest concern about this career?",
    placeholder: "Be specific — I read these personally.",
    required: true,
  },
  {
    id: "milestone",
    type: "textarea",
    title: "What's the most important thing you want your next few years to achieve?",
    placeholder: "e.g. Own my first home, retire my parents, more time with family…",
    required: true,
  },
  {
    id: "contact",
    type: "contact",
    title: "Almost done. How do I reach you?",
    body: "Your details are never shared or sold.",
    consentLabel: "I'm okay being contacted on WhatsApp about my application.",
    required: true,
  },
];

export const qualifyReview = {
  title: "Ready to send your application?",
  body:
    "Tapping the button below opens WhatsApp with your answers already filled in — just hit send. It comes straight to me.",
  sendLabel: "Send my application on WhatsApp",
  backLabel: "Back",
};

export const qualifyDone = {
  title: "That's in — thank you.",
  body:
    "I review every application personally and will get back to you on WhatsApp, usually within a couple of days. In the meantime, feel free to look me up on LinkedIn or Instagram.",
};
