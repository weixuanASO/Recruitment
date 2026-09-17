import { reality } from "../content.js";
import { Section, Kicker } from "./Section.jsx";

export default function Reality() {
  return (
    <Section id="reality" alt>
      <Kicker>The reality</Kicker>
      <h2 className="h2">{reality.heading}</h2>

      <div className="reality__list">
        {reality.points.map((p) => (
          <div className="reality__item" key={p.n}>
            <span className="reality__n">{p.n}</span>
            <div>
              <h3 className="reality__title">{p.title}</h3>
              <p className="muted">{p.body}</p>
            </div>
          </div>
        ))}
      </div>

      <p className="reality__bridge">{reality.bridge}</p>
    </Section>
  );
}
