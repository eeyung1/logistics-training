import { coursePricing, formatNaira } from "@/lib/site";
import { ArrowRight, Clock, ShieldCheck, Tick } from "../icons";

export default function CourseOfferPricing() {
  return (
    <section id="pricing" style={{ background: "var(--cream)" }}>
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow eyebrow--gold">Limited Action Takers Discount</span>
          <h2>The Special Enrollment Offer</h2>
          <p>
            Secure your complete lifetime training, all bonuses, and VIP community admission at a steep 40% discount before the timer resets:
          </p>
        </div>

        <div className="offer-card">
          <span className="offer-card__badge">
            🔥 40% OFF — Action Takers Special
          </span>

          <div className="offer-timer-box">
            <Clock size={18} />
            <span>
              This offer expires: <strong>TODAY at Midnight</strong>. After today, price goes back to ₦50,000.
            </span>
          </div>

          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--muted)" }}>
              The Complete Delivery Coordination Course
            </div>

            <div className="price-display-row">
              <span className="price-regular">
                {formatNaira(coursePricing.regularPrice)}
              </span>
              <span className="price-discounted">
                {formatNaira(coursePricing.actionTakersPrice)}
              </span>
              <span className="discount-pill">
                Save {formatNaira(coursePricing.savingsAmount)} (40% OFF)
              </span>
            </div>

            <p style={{ color: "var(--muted)", fontSize: "0.95rem", marginBottom: "1.75rem" }}>
              One-time payment · Lifetime access + all future updates · No hidden monthly fees
            </p>
          </div>

          <div style={{ background: "var(--sand)", borderRadius: "var(--r-md)", padding: "1.5rem", marginBottom: "2rem" }}>
            <div style={{ fontWeight: 800, color: "var(--brand-950)", marginBottom: "0.75rem", fontSize: "0.95rem" }}>
              Everything included in today's ₦30,000 enrollment:
            </div>
            <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "0.6rem" }}>
              <li style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.9rem", color: "var(--ink)" }}>
                <Tick size={16} style={{ color: "var(--green-600)", flexShrink: 0 }} />
                <span>The complete 14-module video course curriculum</span>
              </li>
              <li style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.9rem", color: "var(--ink)" }}>
                <Tick size={16} style={{ color: "var(--green-600)", flexShrink: 0 }} />
                <span><strong>1 Full Month FREE Daily Delivery Leads</strong> (Value ₦30k)</span>
              </li>
              <li style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.9rem", color: "var(--ink)" }}>
                <Tick size={16} style={{ color: "var(--green-600)", flexShrink: 0 }} />
                <span>Rider vetting forms & anti-theft agreements</span>
              </li>
              <li style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.9rem", color: "var(--ink)" }}>
                <Tick size={16} style={{ color: "var(--green-600)", flexShrink: 0 }} />
                <span>Access to the 4 secret demand platforms</span>
              </li>
              <li style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.9rem", color: "var(--ink)" }}>
                <Tick size={16} style={{ color: "var(--green-600)", flexShrink: 0 }} />
                <span>Franchise & affiliation with Solution Virtues brand</span>
              </li>
              <li style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.9rem", color: "var(--ink)" }}>
                <Tick size={16} style={{ color: "var(--green-600)", flexShrink: 0 }} />
                <span>Official Certificate of Completion</span>
              </li>
              <li style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.9rem", color: "var(--ink)" }}>
                <Tick size={16} style={{ color: "var(--green-600)", flexShrink: 0 }} />
                <span>VIP WhatsApp Group Community Access upon payment verification</span>
              </li>
            </ul>
          </div>

          <a href="#enroll" className="btn btn--gold btn--lg btn--full btn--bold-pulse">
            <span>YES! GIVE ME INSTANT ACCESS FOR {formatNaira(coursePricing.actionTakersPrice)}</span>
            <ArrowRight size={20} />
          </a>

          <div style={{ textAlign: "center", marginTop: "1rem", fontSize: "0.85rem", color: "var(--muted-light)", display: "flex", alignItems: "center", justifyContent: "center", gap: "0.4rem" }}>
            <ShieldCheck size={16} style={{ color: "var(--green-600)" }} />
            Instant WhatsApp Verification &amp; Group Community Access
          </div>
        </div>
      </div>
    </section>
  );
}
