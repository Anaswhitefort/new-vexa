import React from "react";
import SectionIntro from "./SectionIntro";
import Container from "./Container";
import { GridList, GridListItem } from "./GridList";

const Abdullah = () => {
  // SEO Structured Data - Person Schema
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Abdullah Awawdeh",
    jobTitle: "Social Media Manager & Content Creator",
    image: "https://new-vexa.com/images/team/abdullah.jpg",
    description: "Social media manager with 5+ years expertise in paid social campaigns, voice-over artistry, and content creation for brand engagement",
    expertise: [
      "Social Media Management",
      "Paid Social Advertising",
      "Voice-Over Artist",
      "Content Creation",
      "Video Scripting",
      "Community Management",
      "A/B Testing",
      "Video Editing",
      "Content Moderation"
    ],
    keywords: "social media, paid ads, content creation, voice over, video scripting, brand management, digital marketing",
    affiliation: {
      "@type": "Organization",
      name: "Vexa",
      url: "https://new-vexa.com"
    }
  };

  return (
    <div className="mt-24 rounded-4xl bg-site bg-site-grain py-24 sm:mt-32 lg:mt-40 lg:py-32">
      {/* SEO Schema Markup */}
      <script type="application/ld+json">
        {JSON.stringify(personSchema)}
      </script>
      <SectionIntro
        eyebrow="Social Media Manager"
        title="Abdullah Awawdeh."
        invert
      >
        <p>
With 5+ years of experience as a social media manager, voice artist, and content moderator, Abdullah blends creativity and precision to craft engaging content, manage communities, and amplify brand presence online.       </p>
      </SectionIntro>
      <Container className="mt-16">
        <GridList>
          <GridListItem title="Advertising Specialist" invert>
           Plans and optimizes paid social campaigns, sharp targeting, and A/B testing to boost reach, conversions, and measurable ROI consistently.
          </GridListItem>
          <GridListItem title="Voice Over Artist" invert>
           Delivers clear, expressive voice-overs for ads and videos, matching brand tone with professional pacing, emotion, and pronunciation.
          </GridListItem>
          <GridListItem title="Scripting & Editing" invert>
Writes compelling scripts and edits videos with strong hooks, smooth pacing, captions, and sound timing to boost engagement.          </GridListItem>
        </GridList>
      </Container>
    </div>
  );
};

export default Abdullah;
