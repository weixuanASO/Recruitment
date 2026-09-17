import { included } from "../content.js";
import { Section, Kicker } from "./Section.jsx";

export default function Included() {
  return (
    <Section id="included">
      <Kicker>What's included</Kicker>
      <h2 className="h2">{included.heading}</h2>

      <div className="included__grid">
        {included.items.map((it, i) => (
          <div className="incl" key={i}>
            <span className="incl__diamond" aria-hidden="true">&#9670;</span>
            <div>
              <div className="incl__t">{it.t}</div>
              <div className="incl__s muted">{it.s}</div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
