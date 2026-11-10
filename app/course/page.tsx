import AnnouncementBar from "@/components/AnnouncementBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyCta from "@/components/StickyCta";
import CourseGapHero from "@/components/sections/CourseGapHero";
import CourseCurriculum from "@/components/sections/CourseCurriculum";
import CourseBonuses from "@/components/sections/CourseBonuses";
import AffiliateHack from "@/components/sections/AffiliateHack";
import CourseOfferPricing from "@/components/sections/CourseOfferPricing";
import TwoChoices from "@/components/sections/TwoChoices";
import CourseEnrollForm from "@/components/sections/CourseEnrollForm";
import CourseFaq from "@/components/sections/CourseFaq";
import { getWhatsappConfig } from "@/lib/whatsapp";

export default function CourseSalesPage() {
  const { number: whatsappNumber } = getWhatsappConfig();

  return (
    <>
      <AnnouncementBar
        badge="40% OFF Special"
        text="Expires Tonight at Midnight! Regular ₦50,000 — Pay Only ₦30,000 Today"
        linkHref="#enroll"
        linkText="Enroll Now ↓"
      />
      <Header isCoursePage={true} />
      <main>
        <CourseGapHero />
        <CourseCurriculum />
        <CourseBonuses />
        <AffiliateHack />
        <CourseOfferPricing />
        <TwoChoices />
        <CourseEnrollForm whatsappNumber={whatsappNumber} />
        <CourseFaq />
      </main>
      <Footer />
      <StickyCta isCoursePage={true} />
    </>
  );
}
