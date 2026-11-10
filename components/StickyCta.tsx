import Link from "next/link";
import { formatNaira, coursePricing } from "@/lib/site";

type StickyProps = {
  isCoursePage?: boolean;
};

export default function StickyCta({ isCoursePage = false }: StickyProps) {
  return (
    <div className="sticky-cta">
      <div className="sticky-cta__info">
        <span className="sticky-cta__label">
          {isCoursePage ? "Action Takers Offer" : "Full Course"}
        </span>
        <span className="sticky-cta__price">
          {formatNaira(coursePricing.actionTakersPrice)}
        </span>
      </div>

      {!isCoursePage ? (
        <Link href="/course" className="btn btn--gold sticky-cta__btn">
          Get Course (40% OFF)
        </Link>
      ) : (
        <a href="#enroll" className="btn btn--gold sticky-cta__btn">
          Enroll Now (₦30,000)
        </a>
      )}
    </div>
  );
}
