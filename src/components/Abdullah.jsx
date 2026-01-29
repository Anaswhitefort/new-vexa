import React from "react";
import SectionIntro from "./SectionIntro";
import Container from "./Container";
import { GridList, GridListItem } from "./GridList";

const Abdullah = () => {
  return (
    <div className="mt-24 rounded-4xl bg-site bg-site-grain py-24 sm:mt-32 lg:mt-40 lg:py-32">
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
