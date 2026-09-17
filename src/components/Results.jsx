import { results } from "../content.js";
import { Section, Kicker } from "./Section.jsx";
import CTAButton from "./CTAButton.jsx";

export default function Results() {
  return (
    <Section id="results">
      <Kicker>Real results</Kicker>
      <h2 className="h2">{results.heading}</h2>

      <div className="cases">
        {results.cases.map((c, i) => (
          <article className={`case ${c.placeholder ? "case--ph" : ""}`} key={i}>
            <div className="case__head">
              <h3 className="case__name">{c.name}</h3>
              <p className="case__before">{c.before}</p>
            </div>

            <div className="case__result">
              <span className="case__result-value">{c.result}</span>
              <span className="case__result-sub">{c.resultSub}</span>
            </div>

            <blockquote className="case__quote">“{c.quote}”</blockquote>

            <ul className="badges">
              {c.badges.map((b, j) => (
                <li className="badge" key={j}>{b}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      <p className="fineprint">{results.disclaimerNote}</p>
      <CTAButton variant="ghost" />
    </Section>
  );
}
