import { host } from "@/lib/site";
import { Award, ShieldCheck, Truck } from "../icons";

export default function AboutHost() {
  return (
    <section id="about-host" style={{ background: "var(--sand)" }}>
      <div className="wrap">
        <div className="host-card">
          <div className="host-avatar-box">
            <div className="host-avatar">CA</div>
            <span className="host-badge">
              <ShieldCheck size={14} style={{ display: "inline", verticalAlign: "middle", marginRight: "4px" }} />
              Verified Expert
            </span>
          </div>

          <div className="host-content">
            <span className="eyebrow" style={{ marginBottom: "0.5rem" }}>
              Meet Your Instructor
            </span>
            <h3>{host.name}</h3>
            <p className="host-title">
              {host.title} | {host.company}
            </p>

            <blockquote className="host-quote">
              "{host.quote}"
            </blockquote>

            <p className="host-bio">
              With <strong>{host.experience}</strong>, Chinedu has built an asset-light logistics model that bypasses the headaches of bike maintenance, fuel hikes, and high upfront overhead. His mission is to show driven Nigerians how to position themselves in the center of the delivery goldrush.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
