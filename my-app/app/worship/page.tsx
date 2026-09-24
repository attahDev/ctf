import type { Metadata } from "next";
import { WorshipHero } from "@/features/worship/WorshipHero";
import { WowVision } from "@/features/worship/WowVision";
import { UpcomingGatherings } from "@/features/worship/UpcomingGatherings";
import { ExperienceWowOnline } from "@/features/worship/ExperienceWowOnline";
import { JoinLive } from "@/features/worship/JoinLive";
import { WorshipAlbums } from "@/features/worship/WorshipAlbums";
import { GlobalPrayerWall } from "@/features/worship/GlobalPrayerWall";
import { WorldwideFamily } from "@/features/worship/WorldwideFamily";
import { PartnerChurches } from "@/features/worship/PartnerChurches";
import { JoinWowMovement } from "@/features/worship/JoinWowMovement";
import { WorshipNewsletter } from "@/features/worship/WorshipNewsletter";
import { worshipContent } from "@/lib/data/worship";

export const metadata: Metadata = {
  title: "Worship Without Walls | Glory Time Christian Center",
  description: worshipContent.hero.description,
};

export default function WorshipPage() {
  return (
    <>
      <WorshipHero />
      <WowVision />
      <UpcomingGatherings />
      <ExperienceWowOnline />
      <JoinLive />
      <WorshipAlbums />
      <GlobalPrayerWall />
      <WorldwideFamily />
      <PartnerChurches />
      <JoinWowMovement />
      <WorshipNewsletter />
    </>
  );
}
