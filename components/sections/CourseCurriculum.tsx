import { courseModules } from "@/lib/site";
import { Tick } from "../icons";

export default function CourseCurriculum() {
  return (
    <section id="curriculum" style={{ background: "#ffffff" }}>
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow">Comprehensive Syllabus</span>
          <h2>What You Will Learn In The Full Course</h2>
          <p>
            14 hands-on modules designed to take you from a complete beginner with just a phone to a confident, profitable logistics agency owner.
          </p>
        </div>

        <div className="curriculum-grid">
          {courseModules.map((mod) => (
            <div key={mod.number} className="module-card">
              <div className="module-header">
                <span className="module-number">Module {mod.number}</span>
                <span style={{ color: "var(--green-600)" }}>
                  <Tick size={18} />
                </span>
              </div>
              <h3>{mod.title}</h3>
              <p>{mod.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
