import { testimonials } from "../content.js";
import { Section, Kicker } from "./Section.jsx";

export default function Testimonials() {
  const hasQuotes = testimonials.quotes && testimonials.quotes.length > 0;

  return (
    <Section id="testimonials">
      <Kicker>In their words</Kicker>
      <h2 className="h2">{testimonials.heading}</h2>

      <div className="vids">
        {testimonials.videos.map((v, i) => (
          <div className="vid" key={i}>
            {v.src ? (
              <video controls playsInline poster={v.poster || undefined} className="vid__player">
                <source src={v.src} type="video/mp4" />
              </video>
            ) : (
              <div className="vid__ph">
                <span className="vid__ph-play" aria-hidden="true">▶</span>
                <span className="vid__ph-name">{v.name}</span>
                <span className="vid__ph-note">{v.note}</span>
              </div>
            )}
          </div>
        ))}
      </div>

      {hasQuotes && (
        <div className="quotes">
          {testimonials.quotes.map((q, i) => (
            <blockquote className="quote" key={i}>
              <p>“{q.quote}”</p>
              <cite>
                {q.name}
                {q.detail && <span className="muted"> · {q.detail}</span>}
              </cite>
            </blockquote>
          ))}
        </div>
      )}

      <p className="fineprint fineprint--box">
        {testimonials.disclaimer}
        {testimonials.disclaimerLink && (
          <>
            {" "}
            <a href={testimonials.disclaimerLink} target="_blank" rel="noreferrer" className="fineprint__link">
              Full disclaimer
            </a>
          </>
        )}
      </p>
    </Section>
  );
}
