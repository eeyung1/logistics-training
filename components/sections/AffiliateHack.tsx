import { affiliateHack } from "@/lib/site";
import { Cash, Tick } from "../icons";

export default function AffiliateHack() {
  return (
    <section style={{ padding: "1rem 0" }}>
      <div className="wrap wrap--narrow">
        <div className="affiliate-hack-box">
          <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: "rgba(74, 222, 128, 0.2)", color: "#4ade80", padding: "0.35rem 1rem", borderRadius: "var(--r-full)", fontSize: "0.85rem", fontWeight: 800, marginBottom: "1rem" }}>
            <Cash size={18} /> THE AFFILIATE HACK (SLIDE 18)
          </div>

          <h2>{affiliateHack.headline}</h2>
          <div className="affiliate-tagline">{affiliateHack.subhead}</div>

          <p>
            Get your private referral link immediately after enrollment. <strong>Refer just 2 people and get a 100% refund — that means complete FREE ACCESS!</strong>
          </p>

          <div className="affiliate-pill">
            <Tick size={18} /> Your personal affiliate link is waiting for you inside the course portal
          </div>
        </div>
      </div>
    </section>
  );
}
