/*
  Small layout helpers used by every section so spacing stays consistent.
  <Section>  -> vertical padding + optional alt background + id for anchor links
  <Kicker>   -> the small gold uppercase label above a heading
*/
export function Section({ id, alt, children, className = "" }) {
  return (
    <section id={id} className={`section ${alt ? "section--alt" : ""} ${className}`}>
      <div className="wrap">{children}</div>
    </section>
  );
}

export function Kicker({ children }) {
  return <p className="kicker">{children}</p>;
}
