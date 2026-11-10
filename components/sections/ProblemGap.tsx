import { Users, Truck, Cash } from "../icons";

export default function ProblemGap() {
  return (
    <section className="problem-section" id="problem">
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow">The Real Problem &amp; Opportunity</span>
          <h2>Tired of "No Capital" Excuses?</h2>
          <p>
            You don’t need millions in savings, motorbikes, or a logistics license to profit from the booming e-commerce market. Look at the simple reality happening every single day:
          </p>
        </div>

        <div className="problem-grid">
          <div className="problem-card">
            <span className="problem-card__tag">Side 1: The Online Vendors</span>
            <div style={{ color: "var(--brand-600)", marginBottom: "1rem" }}>
              <Users size={32} />
            </div>
            <h3>Making Millions, But Struggling With Delivery</h3>
            <p>
              Thousands of Instagram, WhatsApp, and physical business vendors (food vendors, fashion sellers, cake makers) get daily orders but are constantly frustrated by failed pick-ups, rude riders, and lost parcels.
            </p>
          </div>

          <div className="problem-card problem-card--featured">
            <span className="problem-card__tag">The Money Spot</span>
            <div style={{ color: "#fbbf24", marginBottom: "1rem" }}>
              <Cash size={32} />
            </div>
            <h3>The Gap in the Middle? That's YOU!</h3>
            <p>
              <strong>That’s where the money is.</strong> You don't own the inventory and you don't ride under the sun. You act as the coordinator—connecting orders to riders—and collect <strong>₦1,000 to ₦2,000 profit</strong> on every single trip.
            </p>
          </div>

          <div className="problem-card">
            <span className="problem-card__tag">Side 2: The Dispatch Riders</span>
            <div style={{ color: "var(--brand-600)", marginBottom: "1rem" }}>
              <Truck size={32} />
            </div>
            <h3>Looking for Jobs, But Don't Know Vendors</h3>
            <p>
              Hundreds of young men with bikes are idling on street corners in every city, desperate for delivery jobs, but have no idea which vendors have orders ready right now.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
