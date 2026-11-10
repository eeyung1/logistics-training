import { courseBonuses, formatNaira } from "@/lib/site";
import { Award, Tick } from "../icons";

export default function CourseBonuses() {
  const totalValue = courseBonuses.reduce((acc, b) => acc + b.value, 0);

  return (
    <section className="bonuses-section" id="bonuses">
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow eyebrow--gold">
            <Award size={15} style={{ display: "inline", verticalAlign: "middle", marginRight: "4px" }} />
            Exclusive Bonuses Included
          </span>
          <h2>What You Get When You Enroll Today</h2>
          <p>
            When you secure your enrollment in the Complete Delivery Coordination Course, you don't just get videos—you receive an entire turnkey business launch bundle worth over <strong>{formatNaira(totalValue)}</strong>:
          </p>
        </div>

        <div className="bonuses-grid">
          {courseBonuses.map((bonus) => (
            <div key={bonus.title} className="bonus-card">
              {bonus.tag && <span className="bonus-badge">{bonus.tag}</span>}
              <div>
                <span className="bonus-value">
                  [REAL VALUE: {formatNaira(bonus.value)}]
                </span>
                <h3>
                  <span style={{ color: "var(--brand-600)", marginRight: "6px" }}>✓</span>
                  {bonus.title}
                </h3>
                <p>{bonus.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: "3rem", textAlign: "center", background: "#ffffff", padding: "1.75rem", borderRadius: "var(--r-lg)", border: "2px dashed var(--brand-500)", maxWidth: "680px", margin: "3rem auto 0" }}>
          <div style={{ fontSize: "1.1rem", fontWeight: 800, color: "var(--brand-950)" }}>
            Total Bonus Stack Real Value: <span style={{ color: "var(--brand-700)", textDecoration: "underline" }}>{formatNaira(totalValue)}</span>
          </div>
          <p style={{ fontSize: "0.95rem", color: "var(--muted)", marginTop: "0.4rem" }}>
            Yours completely FREE when you enroll today for just ₦30,000!
          </p>
        </div>
      </div>
    </section>
  );
}
