import Link from "next/link";
import { Clock } from "./icons";

type Props = {
  text?: string;
  badge?: string;
  linkHref?: string;
  linkText?: string;
};

export default function AnnouncementBar({
  text = "Learn the Delivery Coordination Model that pays ₦1,000–₦2,000 per delivery",
  badge = "Free Training",
  linkHref = "/course",
  linkText = "Get Full Course (40% OFF) →",
}: Props) {
  return (
    <div className="announcement-bar">
      <div className="wrap announcement-bar__content">
        <span className="announcement-bar__badge">{badge}</span>
        <span>
          <Clock size={14} style={{ display: "inline", verticalAlign: "middle", marginRight: "4px" }} />
          {text}
        </span>
        {linkHref && linkText && (
          <Link href={linkHref}>
            {linkText}
          </Link>
        )}
      </div>
    </div>
  );
}
