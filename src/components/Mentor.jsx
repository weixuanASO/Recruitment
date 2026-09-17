import { mentor } from "../content.js";
import { Section, Kicker } from "./Section.jsx";
import CTAButton from "./CTAButton.jsx";

export default function Mentor() {
  return (
    <Section id="mentor" alt>
      <Kicker>The mentor</Kicker>
      <h2 className="h2">{mentor.heading}</h2>
      <p className="mentor__title">{mentor.title}</p>

      <div className="mentor__top">
        <div className="mentor__photo">
          {mentor.photo ? (
            <img src={mentor.photo} alt={mentor.title} />
          ) : (
            <div className="mentor__photo-ph">Photo of Wei Xuan<br />(add in content.js)</div>
          )}
        </div>

        <div className="mentor__stats">
          {mentor.stats.map((s, i) => (
            <div className="mentor__stat" key={i}>
              <div className="mentor__stat-v">{s.value}</div>
              <div className="mentor__stat-l muted">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="mentor__story">
        {mentor.story.map((para, i) => (
          <p key={i}>{para}</p>
        ))}
      </div>

      <figure className="thesis">
        <blockquote>“{mentor.thesis}”</blockquote>
        <figcaption>{mentor.thesisSub}</figcaption>
      </figure>

      <p className="signature">{mentor.signature}</p>

      <CTAButton />
    </Section>
  );
}
