import Link from "next/link";
import { ArrowRight, Clock } from "../icons";
import { coursePricing, formatNaira } from "@/lib/site";

export default function FreeTrainingCta() {
  return (
    <section style={{ background: "linear-gradient(135deg, var(--brand-950) 0%, var(--brand-900) 100%)", color: "#ffffff", textAlign: "center" }}>
      <div className="wrap wrap--narrow">
        <span className="eyebrow eyebrow--dark" style={{ marginBottom: "1rem" }}>
          Next Step After The Masterclass
        </span>
        <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 4vw, 2.85rem)", fontWeight: 900, marginBottom: "1rem", color: "#ffffff" }}>
          Ready to Build a Serious Logistics Coordination Business?
        </h2>
        <p style={{ fontSize: "1.15rem", color: "var(--brand-100)", marginBottom: "2rem", lineHeight: 1.6 }}>
          The free training showed you the model. The complete course gives you the client acquisition scripts, rider vetting agreements, secret platform access, and 1 full month of free daily vendor delivery requests.
        </p>

        <div style={{ display: "inline-block", background: "rgba(255, 255, 255, 0.08)", padding: "0.5rem 1.25rem", borderRadius: "var(--r-full)", marginBottom: "2rem", border: "1px solid rgba(255, 255, 255, 0.15)" }}>
          <span style={{ color: "#fbbf24", fontWeight: 700 }}>
            <Clock size={16} style={{ display: "inline", verticalAlign: "middle", marginRight: "6px" }} />
            40% OFF Special: {formatNaira(coursePricing.actionTakersPrice)} (Regularly {formatNaira(coursePricing.regularPrice)})
          </span>
        </div>

        <div>
          <Link href="/course" className="btn btn--gold btn--lg btn--bold-pulse">
            <span>Go to The Main Course Landing Page</span>
            <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </section>
  );
}
