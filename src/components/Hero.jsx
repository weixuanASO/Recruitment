import { hero } from "../content.js";
import { Kicker } from "./Section.jsx";
import CTAButton from "./CTAButton.jsx";

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="wrap hero__inner">
        <Kicker>{hero.kicker}</Kicker>
        <h1 className="hero__title">{hero.title}</h1>
        <p className="hero__body">{hero.body}</p>
        <CTAButton sub={hero.ctaSub} />
      </div>
      <div className="hero__glow" aria-hidden="true" />
    </section>
  );
}
