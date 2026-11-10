import { twoChoices, coursePricing, formatNaira } from "@/lib/site";
import { ArrowRight } from "../icons";

export default function TwoChoices() {
  return (
    <section style={{ background: "#ffffff", borderTop: "1px solid var(--line)" }}>
      <div className="wrap wrap--narrow">
        <div className="section-head" style={{ marginBottom: "2rem" }}>
          <span className="eyebrow">The Crossroads</span>
          <h2>You Have 2 Clear Choices Right Now</h2>
          <p>
            At this point in the presentation, you stand at a decisive crossroad with two distinct paths ahead of you:
          </p>
        </div>

        <div className="two-choices-grid">
          <div className="choice-box choice-box--bad">
            <h4>❌ {twoChoices.choice1.title}</h4>
            <p style={{ fontSize: "0.95rem", color: "var(--muted)", lineHeight: 1.6 }}>
              {twoChoices.choice1.text}
            </p>
          </div>

          <div className="choice-box choice-box--good">
            <h4>✅ {twoChoices.choice2.title}</h4>
            <p style={{ fontSize: "0.95rem", color: "var(--muted)", lineHeight: 1.6 }}>
              {twoChoices.choice2.text}
            </p>
          </div>
        </div>

        <div style={{ textAlign: "center", marginTop: "2rem" }}>
          <p style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--brand-950)", marginBottom: "1.25rem" }}>
            Click the button below now to secure your spot and start your training:
          </p>
          <a href="#enroll" className="btn btn--gold btn--lg btn--bold-pulse">
            <span>YES! GIVE ME INSTANT ACCESS FOR {formatNaira(coursePricing.actionTakersPrice)}</span>
            <ArrowRight size={20} />
          </a>
        </div>
      </div>
    </section>
  );
}
