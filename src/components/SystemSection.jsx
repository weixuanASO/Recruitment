import { system } from "../content.js";
import { Section, Kicker } from "./Section.jsx";

export default function SystemSection() {
  return (
    <Section id="system">
      <Kicker>The system</Kicker>
      <h2 className="h2">{system.heading}</h2>

      <div className="phases">
        {system.phases.map((p) => (
          <div className="phase" key={p.n}>
            <div className="phase__rail">
              <span className="phase__n">{p.n}</span>
            </div>
            <div className="phase__body">
              <h3 className="phase__name">
                {p.name}
                {p.meta && <span className="phase__meta">{p.meta}</span>}
              </h3>
              <p className="muted">{p.body}</p>
              <p className="phase__outcome">{p.outcome}</p>

              {p.weeks && (
                <div className="weeks">
                  {p.weeks.map((w, i) => (
                    <div className="week" key={i}>
                      <div className="week__w">{w.w}</div>
                      <div className="week__d muted">{w.d}</div>
                      <div className="week__o">{w.o}</div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
