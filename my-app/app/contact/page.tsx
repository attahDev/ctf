import type { Metadata } from "next";
import { ConnectHero } from "@/features/connect/ConnectHero";
import { ContactAndCare } from "@/features/connect/ContactAndCare";
import { GrowthPath } from "@/features/connect/GrowthPath";
import { NewsletterCta } from "@/features/connect/NewsletterCta";
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
      <TribeGroups />
      <TribeJoinForm />
      <VolunteerForm />
      <BibleClassForm />
      <GrowthPath />
      <SocialFeed />
      <NewsletterCta />
    </>
  );
}
