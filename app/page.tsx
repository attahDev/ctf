import { HomeHero } from "@/features/home/HomeHero";
import { WaysToConnect } from "@/features/home/WaysToConnect";
import { MissionVision } from "@/features/home/MissionVision";
import { ApostolicMandate } from "@/features/home/ApostolicMandate";
import { OperationalDynamics } from "@/features/home/OperationalDynamics";
import { CommunityImpact } from "@/features/home/CommunityImpact";
import { FeaturedTestimonies } from "@/features/home/FeaturedTestimonies";
import { UpcomingEvents } from "@/features/home/UpcomingEvents";
import { PartnerWithUs } from "@/features/home/PartnerWithUs";

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <WaysToConnect />
      <MissionVision />
      <ApostolicMandate />
      <OperationalDynamics />
      <CommunityImpact />
      <FeaturedTestimonies />
      <UpcomingEvents />
      <PartnerWithUs />
    </>
  );
}
