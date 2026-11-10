import Link from "next/link";
import { Truck } from "./icons";
import { brand } from "@/lib/site";

type HeaderProps = {
  isCoursePage?: boolean;
};

export default function Header({ isCoursePage = false }: HeaderProps) {
  return (
    <header className="site-header">
      <div className="wrap site-header__wrap">
        <Link href="/" className="site-header__brand">
          <span className="site-header__logo-icon">
            <Truck size={20} />
          </span>
          <span>
            {brand.brandShort}
          </span>
          <span className="site-header__tag">
            {isCoursePage ? "Full Course" : "Free Training"}
          </span>
        </Link>

        <nav className="site-header__nav">
          {!isCoursePage ? (
            <>
              <a href="#video-training" className="site-header__link">
                Watch Training
              </a>
              <a href="#what-you-learn" className="site-header__link">
                What You'll Learn
              </a>
              <a href="#about-host" className="site-header__link">
                About Host
              </a>
              <a href="#social-proof" className="site-header__link">
                Proof
              </a>
              <Link href="/course" className="btn btn--gold site-header__cta">
                Get Full Course (40% OFF)
              </Link>
            </>
          ) : (
            <>
              <Link href="/" className="site-header__link">
                ← Free Masterclass
              </Link>
              <a href="#curriculum" className="site-header__link">
                Curriculum
              </a>
              <a href="#bonuses" className="site-header__link">
                Bonuses
              </a>
              <a href="#pricing" className="site-header__link">
                Offer
              </a>
              <a href="#enroll" className="btn btn--gold site-header__cta">
                Enroll Now (₦30,000)
              </a>
            </>
          )}
        </nav>
      </div>
    </header>
  );
}
