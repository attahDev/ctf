import type { Metadata } from "next";
import { ConnectHero } from "@/features/connect/ConnectHero";
import { ContactAndCare } from "@/features/connect/ContactAndCare";
import { CounsellingForm } from "@/features/connect/CounsellingForm";
import { GrowthPath } from "@/features/connect/GrowthPath";
import { NewsletterCta } from "@/features/connect/NewsletterCta";
import { ShareTestimonyForm } from "@/features/connect/ShareTestimonyForm";
import { SocialFeed } from "@/features/connect/SocialFeed";
import { TribeGroups } from "@/features/connect/TribeGroups";
import { TribeJoinForm } from "@/features/connect/TribeJoinForm";
import { VolunteerForm } from "@/features/connect/VolunteerForm";
import { BibleClassForm } from "@/features/connect/BibleClassForm";
import { VisitInPerson } from "@/features/connect/VisitInPerson";
import { connectContent } from "@/lib/data/connect";

export const metadata: Metadata = {
  title: "Connect | Glory Time Christian Center",
  description: connectContent.hero.desktop.description,
};

export default function ConnectPage() {
  return (
    <>
      <ConnectHero />
      <VisitInPerson />
      <ContactAndCare />
      <CounsellingForm />
      <TribeGroups />
      <TribeJoinForm />
      <VolunteerForm />
      <BibleClassForm />
      <ShareTestimonyForm />
      <GrowthPath />
      <SocialFeed />
      <NewsletterCta />
    </>
  );
}
