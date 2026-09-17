import { Link } from "react-router-dom";
import { site } from "../content.js";

export default function Nav() {
  return (
    <header className="nav">
      <div className="wrap nav__inner">
        <a href="#top" className="nav__mark">{site.wordmark}</a>
        <Link to="/qualify" className="btn btn--solid btn--sm">
          {site.ctaShort || site.ctaLabel}
        </Link>
      </div>
    </header>
  );
}
