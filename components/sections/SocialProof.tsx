import { socialProof } from "@/lib/site";
import { Star } from "../icons";

export default function SocialProof() {
  return (
    <section id="social-proof" style={{ background: "#ffffff" }}>
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow eyebrow--gold">Real Feedback &amp; Results</span>
          <h2>See What Early Students Are Saying</h2>
          <p>
            From university students to working professionals, people across Nigeria are applying the coordination framework to create weekly cashflow:
          </p>
        </div>

        <div className="testimonials-grid">
          {socialProof.map((item) => (
            <div key={item.name} className="testimonial-card">
              <div>
                <div className="testimonial-stars">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={18} />
                  ))}
                </div>
                <p className="testimonial-quote">"{item.quote}"</p>
              </div>

              <div className="testimonial-author">
                <div className="testimonial-avatar">
                  {item.name.charAt(0)}
                </div>
                <div>
                  <div className="testimonial-name">{item.name}</div>
                  <div className="testimonial-loc">{item.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
