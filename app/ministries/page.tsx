import type { Metadata } from "next";
import { CommunitySupport } from "@/features/ministries/CommunitySupport";
import { FoundationBibleClass } from "@/features/ministries/FoundationBibleClass";
import { GoodLifeConference } from "@/features/ministries/GoodLifeConference";
import { KidsAndYouth } from "@/features/ministries/KidsAndYouth";
import { MinistriesHero } from "@/features/ministries/MinistriesHero";
import { MissionsOutreach } from "@/features/ministries/MissionsOutreach";
import { PrayerSupport } from "@/features/ministries/PrayerSupport";
import { TribeMentorship } from "@/features/ministries/TribeMentorship";
import { VolunteerCta } from "@/features/ministries/VolunteerCta";
import { ministriesContent } from "@/lib/data/ministries";

export const metadata: Metadata = {
  title: "Ministries | Glory Time Christian Center",
  description: ministriesContent.hero.description,
};

export default function MinistriesPage() {
  return (
    <>
      <MinistriesHero />
      <FoundationBibleClass />
      <TribeMentorship />
      <KidsAndYouth />
      <PrayerSupport />
      <CommunitySupport />
      <GoodLifeConference />
      <MissionsOutreach />
      <VolunteerCta />
    </>
  );
}
