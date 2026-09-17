import { Link } from "react-router-dom";
import { site } from "../content.js";

/*
  The primary call-to-action. Used all over the page.
  It links to /qualify (the application form).
  `sub` shows small reassurance text under the button.
  `variant="ghost"` renders the outlined gold version.
*/
export default function CTAButton({ sub, variant = "solid", label }) {
  return (
    <div className="cta">
      <Link to="/qualify" className={`btn btn--${variant}`}>
        {label || site.ctaLabel}
        <span className="btn__arrow" aria-hidden="true">→</span>
      </Link>
      {sub && <p className="cta__sub">{sub}</p>}
    </div>
  );
}
