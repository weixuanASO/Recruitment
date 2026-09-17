import { footer, site } from "../content.js";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer__top">
          <span className="footer__mark">{site.wordmark}</span>
          <nav className="footer__links">
            {footer.links.map((l, i) => (
              <a key={i} href={l.href} target="_blank" rel="noreferrer">{l.label}</a>
            ))}
          </nav>
        </div>

        <p className="footer__blurb muted">{footer.blurb}</p>
        <p className="footer__fine">{footer.fineprint}</p>
        <p className="footer__legal">{footer.legal}</p>
      </div>
    </footer>
  );
}
