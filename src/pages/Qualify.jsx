import { useEffect, useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  site,
  qualifyIntro,
  qualifySteps,
  qualifyReview,
  qualifyDone,
} from "../content.js";

/* stages: "intro" -> 0..n-1 (steps) -> "review" -> "done" */

export default function Qualify() {
  const navigate = useNavigate();
  const [stage, setStage] = useState("intro");
  const [answers, setAnswers] = useState({});
  const [sending, setSending] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [stage]);

  const stepIndex = typeof stage === "number" ? stage : stage === "review" ? qualifySteps.length : 0;
  const progress = Math.round((stepIndex / qualifySteps.length) * 100);

  function setAnswer(id, value) {
    setAnswers((a) => ({ ...a, [id]: value }));
  }

  function next() {
    if (typeof stage === "number") {
      setStage(stage + 1 < qualifySteps.length ? stage + 1 : "review");
    } else if (stage === "intro") {
      setStage(0);
    }
  }
  function back() {
    if (typeof stage === "number") setStage(stage - 1 >= 0 ? stage - 1 : "intro");
    else if (stage === "review") setStage(qualifySteps.length - 1);
  }

  // ---- WhatsApp message + backend payload -------------------------------
  const waText = useMemo(() => {
    const lines = [`New application — The Advisor Path`, ``];
    qualifySteps.forEach((s) => {
      if (s.type === "contact") {
        lines.push(`Email: ${answers.email || "-"}`);
        lines.push(`WhatsApp: ${answers.whatsapp || "-"}`);
      } else {
        const v = answers[s.id];
        lines.push(`${s.title}`);
        lines.push(`> ${Array.isArray(v) ? v.join(", ") : v || "-"}`);
        lines.push("");
      }
    });
    return lines.join("\n");
  }, [answers]);

  const waUrl = `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(waText)}`;

  // Called from the WhatsApp link's onClick. We do NOT preventDefault — the
  // browser opens WhatsApp natively (so it's never popup-blocked). The fetch is
  // fire-and-forget backup to the Sheet + email, and then we show the thank-you.
  function onSend() {
    setSending(true);
    fetch("/api/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ answers, submittedAt: new Date().toISOString() }),
    }).catch(() => {});
    setTimeout(() => {
      setSending(false);
      setStage("done");
    }, 400);
  }

  // ---- render ----------------------------------------------------------
  return (
    <div className="qz">
      <div className="qz__bar">
        <Link to="/" className="qz__mark">{site.wordmark}</Link>
        {typeof stage === "number" && (
          <div className="qz__progress" aria-hidden="true">
            <span style={{ width: `${progress}%` }} />
          </div>
        )}
      </div>

      <div className="qz__stage">
        {stage === "intro" && <Intro onStart={next} />}
        {typeof stage === "number" && (
          <Step
            key={stage}
            step={qualifySteps[stage]}
            index={stage}
            total={qualifySteps.length}
            value={answers[qualifySteps[stage].id]}
            answers={answers}
            setAnswer={setAnswer}
            onNext={next}
            onBack={back}
          />
        )}
        {stage === "review" && (
          <Review
            answers={answers}
            onBack={back}
            waUrl={waUrl}
            onSend={onSend}
            sending={sending}
          />
        )}
        {stage === "done" && <Done onHome={() => navigate("/")} />}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */

function Intro({ onStart }) {
  return (
    <div className="qz__card qz__intro">
      <p className="kicker">{qualifyIntro.kicker}</p>
      <h1 className="qz__title">{qualifyIntro.title}</h1>
      <p className="qz__body">{qualifyIntro.body}</p>
      <figure className="qz__quote">
        <blockquote>“{qualifyIntro.quote}”</blockquote>
        <figcaption>— {qualifyIntro.quoteBy}</figcaption>
      </figure>
      <button className="btn btn--solid btn--block" onClick={onStart}>
        {qualifyIntro.startLabel} <span className="btn__arrow">→</span>
      </button>
    </div>
  );
}

function Step({ step, index, total, value, answers, setAnswer, onNext, onBack }) {
  const [local, setLocal] = useState(
    value ?? (step.type === "multi" ? [] : "")
  );

  const canContinue = () => {
    if (!step.required) return true;
    if (step.type === "multi") return local.length > 0;
    if (step.type === "contact")
      return answers.email && answers.whatsapp && answers.consent;
    return String(local).trim().length > 0;
  };

  function commitAndNext() {
    if (step.type !== "contact") setAnswer(step.id, local);
    if (canContinue()) onNext();
  }

  return (
    <div className="qz__card">
      <p className="qz__step">Step {index + 1} of {total}</p>
      <h2 className="qz__q">{step.title}</h2>
      {step.body && <p className="qz__body">{step.body}</p>}

      {/* --- text / textarea --- */}
      {(step.type === "text" || step.type === "textarea") &&
        (step.type === "text" ? (
          <input
            className="qz__input"
            autoFocus
            placeholder={step.placeholder}
            value={local}
            onChange={(e) => setLocal(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && commitAndNext()}
          />
        ) : (
          <textarea
            className="qz__input qz__textarea"
            autoFocus
            rows={4}
            placeholder={step.placeholder}
            value={local}
            onChange={(e) => setLocal(e.target.value)}
          />
        ))}

      {/* --- single choice (auto-advance) --- */}
      {step.type === "single" && (
        <div className="qz__opts">
          {step.options.map((o) => (
            <button
              key={o}
              className={`qz__opt ${local === o ? "is-sel" : ""}`}
              onClick={() => {
                setLocal(o);
                setAnswer(step.id, o);
                onNext();
              }}
            >
              {o}
            </button>
          ))}
        </div>
      )}

      {/* --- multi choice --- */}
      {step.type === "multi" && (
        <div className="qz__opts">
          {step.options.map((o) => {
            const on = local.includes(o);
            return (
              <button
                key={o}
                className={`qz__opt ${on ? "is-sel" : ""}`}
                onClick={() =>
                  setLocal(on ? local.filter((x) => x !== o) : [...local, o])
                }
              >
                <span className="qz__check" aria-hidden="true">{on ? "✓" : ""}</span>
                {o}
              </button>
            );
          })}
        </div>
      )}

      {/* --- contact --- */}
      {step.type === "contact" && (
        <div className="qz__contact">
          <label className="qz__field">
            <span>Email</span>
            <input
              className="qz__input"
              type="email"
              placeholder="you@email.com"
              value={answers.email || ""}
              onChange={(e) => setAnswer("email", e.target.value)}
            />
          </label>
          <label className="qz__field">
            <span>WhatsApp number</span>
            <input
              className="qz__input"
              type="tel"
              placeholder="+65 9123 4567"
              value={answers.whatsapp || ""}
              onChange={(e) => setAnswer("whatsapp", e.target.value)}
            />
          </label>
          <label className="qz__consent">
            <input
              type="checkbox"
              checked={!!answers.consent}
              onChange={(e) => setAnswer("consent", e.target.checked)}
            />
            <span>{step.consentLabel}</span>
          </label>
        </div>
      )}

      {/* --- nav --- */}
      {step.type !== "single" && (
        <div className="qz__nav">
          <button className="btn btn--ghost btn--sm" onClick={onBack}>← Back</button>
          <button
            className="btn btn--solid"
            disabled={!canContinue()}
            onClick={commitAndNext}
          >
            Continue <span className="btn__arrow">→</span>
          </button>
        </div>
      )}
      {step.type === "single" && (
        <div className="qz__nav qz__nav--single">
          <button className="btn btn--ghost btn--sm" onClick={onBack}>← Back</button>
        </div>
      )}
    </div>
  );
}

function Review({ answers, onBack, waUrl, onSend, sending }) {
  return (
    <div className="qz__card">
      <p className="kicker">Final step</p>
      <h2 className="qz__q">{qualifyReview.title}</h2>
      <p className="qz__body">{qualifyReview.body}</p>

      <div className="qz__summary">
        <div><b>Name</b><span>{answers.name || "-"}</span></div>
        <div><b>Situation</b><span>{answers.situation || "-"}</span></div>
        <div><b>Email</b><span>{answers.email || "-"}</span></div>
        <div><b>WhatsApp</b><span>{answers.whatsapp || "-"}</span></div>
      </div>

      <div className="qz__nav">
        <button className="btn btn--ghost btn--sm" onClick={onBack}>← {qualifyReview.backLabel}</button>
        <a
          className="btn btn--solid"
          href={waUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={onSend}
          aria-disabled={sending}
        >
          {sending ? "Opening WhatsApp…" : qualifyReview.sendLabel}
          <span className="btn__arrow">→</span>
        </a>
      </div>
    </div>
  );
}

function Done({ onHome }) {
  return (
    <div className="qz__card qz__done">
      <div className="qz__tick" aria-hidden="true">✓</div>
      <h2 className="qz__q">{qualifyDone.title}</h2>
      <p className="qz__body">{qualifyDone.body}</p>
      <button className="btn btn--ghost" onClick={onHome}>← Back to the page</button>
    </div>
  );
}
