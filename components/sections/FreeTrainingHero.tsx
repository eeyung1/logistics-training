import { Phone, ShieldCheck, Truck, Play } from "../icons";

export default function FreeTrainingHero() {
  return (
    <section className="hero" id="top">
      <div className="wrap hero__wrap">
        <span className="eyebrow eyebrow--gold">
          Free Video Masterclass · Zero-Capital Business Model
        </span>

        <h1>
          Earn Money From Every Delivery In your City...
          <span className="hero__highlight">
            Without Owning a Bike, Warehouse, or Fueling Anything
          </span>
        </h1>

        <p className="lead">
          Learn the <strong>"Delivery Coordination"</strong> business model that pays you{" "}
          <strong>₦1,000–₦2,000 every time a vendor ships</strong>. Start with just your phone.
        </p>

        <div className="hero__cta-box">
          <a className="btn btn--gold btn--lg btn--bold-pulse" href="#video-training">
            <Play size={18} /> Watch the Free Training
          </a>
          <span className="hero__sub-cta">
            <ShieldCheck size={16} /> Instant access · No payment required for this 90-min masterclass
          </span>
        </div>

        <div className="chip-row">
          <span className="chip">
            <Phone size={16} />
            <span>Start with just your phone</span>
          </span>
          <span className="chip">
            <Truck size={16} />
            <span>Zero bikes or fuel needed</span>
          </span>
          <span className="chip">
            <ShieldCheck size={16} />
            <span>Proven in Lagos, Ogun & nationwide</span>
          </span>
        </div>
      </div>
    </section>
  );
}
