import Link from "next/link";
import { videoConfig } from "@/lib/site";
import { ArrowRight, Clock, ShieldCheck } from "../icons";

export default function VideoSection() {
  return (
    <section className="video-section" id="video-training">
      <div className="wrap wrap--narrow">
        <div className="section-head" style={{ marginBottom: "2rem" }}>
          <span className="eyebrow eyebrow--gold">
            <Clock size={14} /> {videoConfig.badge} ({videoConfig.duration})
          </span>
          <h2>Watch The 90-Minute Delivery Coordination Training</h2>
          <p>
            Grab a notebook and pen. Chinedu Aniakor walks you through the exact operational model behind 1,000+ coordinated deliveries.
          </p>
        </div>

        <div className="video-wrapper-card">
          <div className="video-aspect-box">
            <iframe
              src={videoConfig.embedUrl}
              title="Delivery Coordination Free Masterclass Training"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>

          {/* THE BOLD BUTTON UNDER THE VIDEO */}
          <div className="video-cta-box">
            <span className="eyebrow eyebrow--dark" style={{ marginBottom: "0.85rem" }}>
              Ready For The Complete Blueprint?
            </span>
            <h3>Launch Your Delivery Coordination Agency Today</h3>
            <p>
              Take what you learned in the video and turn it into a consistent daily income. Get the complete course, 1 month of free daily delivery leads, rider vetting contracts, and WhatsApp community access.
            </p>

            <Link href="/course" className="btn btn--bold-cta btn--bold-pulse">
              <span>🔥 Yes! Give Me Instant Access (40% OFF Today)</span>
              <ArrowRight size={20} />
            </Link>

            <div style={{ marginTop: "1rem", fontSize: "0.85rem", color: "#fbbf24" }}>
              ⚡ Normal Price: ₦50,000 · Today Only: ₦30,000 · Offer Expires Midnight
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
