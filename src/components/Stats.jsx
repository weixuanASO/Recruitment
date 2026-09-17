import { stats } from "../content.js";

export default function Stats() {
  return (
    <div className="statsband">
      <div className="wrap statsband__grid">
        {stats.map((s, i) => (
          <div className="stat" key={i}>
            <div className="stat__value">{s.value}</div>
            <div className="stat__label">{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
