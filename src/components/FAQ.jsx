import { useState } from "react";
import { faq } from "../content.js";
import { Section, Kicker } from "./Section.jsx";

function Item({ q, a, open, onToggle }) {
  return (
    <div className={`faq__item ${open ? "is-open" : ""}`}>
      <button className="faq__q" onClick={onToggle} aria-expanded={open}>
        <span>{q}</span>
        <span className="faq__plus" aria-hidden="true">{open ? "–" : "+"}</span>
      </button>
      {open && <div className="faq__a">{a || <em className="muted">Answer coming soon.</em>}</div>}
    </div>
  );
}

function Block({ heading, items, kicker }) {
  const [openIdx, setOpenIdx] = useState(null);
  return (
    <div className="faq__block">
      <Kicker>{kicker}</Kicker>
      <h2 className="h2">{heading}</h2>
      <div className="faq__list">
        {items.map((it, i) => (
          <Item
            key={i}
            q={it.q}
            a={it.a}
            open={openIdx === i}
            onToggle={() => setOpenIdx(openIdx === i ? null : i)}
          />
        ))}
      </div>
    </div>
  );
}

export default function FAQ() {
  // Hide block B entirely until at least one answer is written.
  const bHasAnswers = faq.blockB.some((x) => x.a && x.a.trim().length > 0);

  return (
    <Section id="faq" alt>
      <Block kicker="FAQ" heading={faq.headingA} items={faq.blockA} />
      {bHasAnswers && (
        <Block kicker="Objections, honestly" heading={faq.headingB} items={faq.blockB} />
      )}
    </Section>
  );
}
