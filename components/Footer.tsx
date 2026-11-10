import Link from "next/link";
import { brand, host, phoneDisplay, phoneIntl } from "@/lib/site";
import { Truck, WhatsApp } from "./icons";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="wrap site-footer__grid">
        <div className="site-footer__brand">
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.75rem" }}>
            <span className="site-header__logo-icon" style={{ width: "2rem", height: "2rem" }}>
              <Truck size={18} />
            </span>
            <h4>{brand.name}</h4>
          </div>
          <p>
            Nigeria's premier logistics coordination academy. Helping everyday entrepreneurs build scalable, asset-light delivery coordination businesses without owning bikes or warehouses.
          </p>
        </div>

        <div className="site-footer__col">
          <h5>Quick Navigation</h5>
          <ul>
            <li>
              <Link href="/">Free Masterclass Video</Link>
            </li>
            <li>
              <Link href="/course">The Complete Course (₦30k Offer)</Link>
            </li>
            <li>
              <Link href="/course#bonuses">Course Bonuses & Daily Leads</Link>
            </li>
            <li>
              <Link href="/course#enroll">Payment & Community Enrollment</Link>
            </li>
          </ul>
        </div>

        <div className="site-footer__col">
          <h5>Direct Contact</h5>
          <ul>
            <li>Host: {host.name}</li>
            <li>Operating Hub: {brand.location}</li>
            <li>Phone: {phoneDisplay}</li>
            <li>
              <a
                href={`https://wa.me/${phoneIntl}?text=${encodeURIComponent("Hello Chinedu, I have an inquiry about the Delivery Coordination training.")}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: "inline-flex", alignItems: "center", gap: "0.35rem", color: "#4ade80", fontWeight: 700 }}
              >
                <WhatsApp size={16} /> Chat on WhatsApp
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="wrap site-footer__bottom">
        <div>
          © {currentYear} {brand.name}. All Rights Reserved.
        </div>
        <div>
          Disclaimer: This program teaches practical business systems and field-tested strategies. Your actual earnings depend on your personal dedication, vendor outreach, and execution.
        </div>
      </div>
    </footer>
  );
}
