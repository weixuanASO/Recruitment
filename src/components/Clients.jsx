import { clients } from "../content.js";
import { Section, Kicker } from "./Section.jsx";

export default function Clients() {
  return (
    <Section id="clients" alt className="clients">
      <Kicker>How the pipeline works</Kicker>
      <h2 className="h2 h2--center">{clients.heading}</h2>
      <p className="lead lead--center">{clients.body}</p>
    </Section>
  );
}
