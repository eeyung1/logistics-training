import { ArrowRight, Clock } from "../icons";
import { formatNaira, coursePricing } from "@/lib/site";

export default function CourseGapHero() {
  return (
    <section className="gap-transition-hero" id="top">
      <div className="wrap wrap--narrow">
        <span className="eyebrow eyebrow--dark">
          The Full Step-by-Step Blueprint
        </span>

        <h1>
          THE COMPLETE DELIVERY COORDINATION BUSINESS COURSE
        </h1>

        <div className="gap-questions-box">
          <p style={{ fontSize: "1.15rem", fontWeight: 700, color: "#ffffff", borderBottom: "1px solid rgba(255,255,255,0.15)", paddingBottom: "0.75rem" }}>
            Okay, you saw the massive opportunity from the masterclass. But...
          </p>

          <div className="gap-questions-grid">
            <div className="gap-question-item">
              <span>❓</span>
              <span>How do you actually SETUP?</span>
            </div>
            <div className="gap-question-item">
              <span>❓</span>
              <span>How do you get CLIENTS?</span>
            </div>
            <div className="gap-question-item">
              <span>❓</span>
              <span>How do you get RIDERS?</span>
            </div>
            <div className="gap-question-item">
              <span>❓</span>
              <span>How do you PRICE &amp; NOT RUN AT A LOSS?</span>
            </div>
          </div>

          <p className="gap-solution-pitch">
            ✨ That's what my full course solves for you.
          </p>
        </div>

        <div style={{ marginTop: "2rem" }}>
          <a href="#enroll" className="btn btn--gold btn--lg btn--bold-pulse">
            <span>YES! GIVE ME INSTANT ACCESS FOR {formatNaira(coursePricing.actionTakersPrice)}</span>
            <ArrowRight size={20} />
          </a>
          <div style={{ marginTop: "0.85rem", fontSize: "0.875rem", color: "#fbbf24" }}>
            <Clock size={14} style={{ display: "inline", verticalAlign: "middle", marginRight: "4px" }} />
            40% OFF Special ends tonight at midnight · Includes WhatsApp Group Access
          </div>
        </div>
      </div>
    </section>
  );
}
