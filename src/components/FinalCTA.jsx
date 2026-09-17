import { finalCta, topBar } from "../content.js";
import { Section } from "./Section.jsx";
import CTAButton from "./CTAButton.jsx";

export default function FinalCTA() {
  return (
    <Section id="apply" className="finalcta">
      {topBar.show && <p className="finalcta__scarcity">{topBar.text}</p>}
      <h2 className="h2 h2--center">{finalCta.heading}</h2>
      <p className="lead lead--center">{finalCta.body}</p>
      <CTAButton sub={finalCta.sub} />
    </Section>
  );
}
