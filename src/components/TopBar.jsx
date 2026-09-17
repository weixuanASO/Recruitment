import { topBar } from "../content.js";

export default function TopBar() {
  return (
    <div className="topbar">
      <span className="topbar__dot" aria-hidden="true" />
      {topBar.text}
    </div>
  );
}
