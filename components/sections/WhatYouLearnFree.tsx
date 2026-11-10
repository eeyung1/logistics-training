import { freeTrainingHighlights, host } from "@/lib/site";
import { Tick, Users, Bike, Layers, Cash, Phone } from "../icons";

const icons = [Users, Bike, Layers, Cash, Phone];

export default function WhatYouLearnFree() {
  return (
    <section id="what-you-learn" style={{ background: "#ffffff" }}>
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow">Training Curriculum Breakdown</span>
          <h2>What You'll Learn In This Masterclass</h2>
          <p>
            In this intensive 90-minute training, {host.name} breaks down the exact operational playbook that anyone with a smartphone can execute immediately:
          </p>
        </div>

        <div className="learn-list">
          {freeTrainingHighlights.map((item, idx) => {
            const Icon = icons[idx % icons.length];
            return (
              <div key={item.title} className="learn-card">
                <div className="learn-card__icon">
                  <Icon size={22} />
                </div>
                <div>
                  <h4>
                    <span style={{ color: "var(--brand-600)", marginRight: "6px" }}>
                      ✅
                    </span>
                    {item.title}
                  </h4>
                  <p>{item.text}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
