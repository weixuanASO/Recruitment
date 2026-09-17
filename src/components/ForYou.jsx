import { forYou } from "../content.js";
import { Section, Kicker } from "./Section.jsx";

export default function ForYou() {
  return (
    <Section id="fit" alt>
      <Kicker>Honest fit check</Kicker>
      <h2 className="h2">{forYou.heading}</h2>

      <div className="fit">
        <div className="fit__col fit__col--yes">
          <h3 className="fit__title">{forYou.forTitle}</h3>
          <ul>
            {forYou.for.map((t, i) => (
              <li key={i}><span className="fit__mark fit__mark--yes">✓</span>{t}</li>
            ))}
          </ul>
        </div>

        <div className="fit__col fit__col--no">
          <h3 className="fit__title">{forYou.notTitle}</h3>
          <ul>
            {forYou.not.map((t, i) => (
              <li key={i}><span className="fit__mark fit__mark--no">✕</span>{t}</li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
