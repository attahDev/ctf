import type { Metadata } from "next";
import { AboutHero } from "@/features/about/AboutHero";
import { OurStory } from "@/features/about/OurStory";
import { VisionPillars } from "@/features/about/VisionPillars";
import { KnowledgeOfWord } from "@/features/about/KnowledgeOfWord";
import { CoreValues } from "@/features/about/CoreValues";
import { LeadershipTeam } from "@/features/about/LeadershipTeam";
import { StatementOfFaith } from "@/features/about/StatementOfFaith";
import { FellowshipLocation } from "@/features/about/FellowshipLocation";
import { CommonQuestions } from "@/features/about/CommonQuestions";
import { aboutContent } from "@/lib/data/about";

export const metadata: Metadata = {
  title: "About | Glory Time Christian Center",
  description: aboutContent.hero.description,
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <OurStory />
      <VisionPillars />
      <KnowledgeOfWord />
      <CoreValues />
      <LeadershipTeam />
      <StatementOfFaith />
      <FellowshipLocation />
      <CommonQuestions />
    </>
  );
}
