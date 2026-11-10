import AnnouncementBar from "@/components/AnnouncementBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyCta from "@/components/StickyCta";
import FreeTrainingHero from "@/components/sections/FreeTrainingHero";
import ProblemGap from "@/components/sections/ProblemGap";
import VideoSection from "@/components/sections/VideoSection";
import WhatYouLearnFree from "@/components/sections/WhatYouLearnFree";
import AboutHost from "@/components/sections/AboutHost";
import SocialProof from "@/components/sections/SocialProof";
import FreeTrainingCta from "@/components/sections/FreeTrainingCta";

export default function FreeTrainingPage() {
  return (
    <>
      <AnnouncementBar
        badge="Free Training"
        text="90-Min Masterclass: How to earn ₦1,000–₦2,000 per delivery without a bike or warehouse"
        linkHref="/course"
        linkText="Get Full Course (40% OFF) →"
      />
      <Header isCoursePage={false} />
      <main>
        <FreeTrainingHero />
        <ProblemGap />
        <VideoSection />
        <WhatYouLearnFree />
        <AboutHost />
        <SocialProof />
        <FreeTrainingCta />
      </main>
      <Footer />
      <StickyCta isCoursePage={false} />
    </>
  );
}
