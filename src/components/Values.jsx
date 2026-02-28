import React from "react";
import GridPattern from "./GridPattern";
import SectionIntro from "./SectionIntro";
import Container from "./Container";
import { GridList, GridListItem } from "./GridList";

const Values = () => {
  return (
    <div className="relative mt-24 pt-24 sm:mt-32 sm:pt-32 lg:mt-40 lg:pt-40">
      <div className="absolute inset-x-0 top-0 -z-10 h-[884px] overflow-hidden rounded-t-4xl bg-gradient-to-b from-neutral-50">
        <GridPattern
          className="absolute inset-0 h-full w-full fill-neutral-100 stroke-neutral-950/5 [mask-image:linear-gradient(to_bottom_left,white_40%,transparent_50%)]"
          yOffset={-270}
        />
      </div>
      <SectionIntro
        eyebrow="Content Creation"
        title="Visuals that bring your brand to life"
      >
        <p>
          We create compelling visuals and content that bring your brand identity
          to life and forge meaningful connections with your audience. From
          impactful logo design and eye-catching animations to scroll-stopping
          short-form videos, engaging branding assets, and striking marketing
          collaterals — our designs are meticulously crafted to capture attention,
          drive engagement, and communicate your message with clarity and
          creativity.
        </p>
      </SectionIntro>
      <Container className="mt-24">
        <GridList>
          <GridListItem title="Logo & Brand Identity Design">
            We craft memorable logos and cohesive brand identity systems that
            reflect your vision and resonate with your target audience — ensuring
            consistency across every touchpoint, from business cards to digital
            platforms.
          </GridListItem>
          <GridListItem title="Motion Graphics & Animation">
            From animated explainer videos and logo reveals to dynamic social
            media content, we bring your brand story to life through captivating
            motion design that boosts engagement and leaves a lasting impression.
          </GridListItem>
          <GridListItem title="Social Media & TikTok Content">
            We produce scroll-stopping, platform-optimized content for TikTok,
            Instagram Reels, and YouTube Shorts — designed to maximize reach,
            drive organic growth, and keep your audience coming back for more.
          </GridListItem>
          <GridListItem title="Marketing Collaterals">
            From brochures and flyers to presentations and pitch decks, we design
            high-impact marketing materials that clearly convey your value
            proposition and elevate your brand&apos;s professional presence.
          </GridListItem>
          <GridListItem title="Visual Storytelling">
            We transform complex ideas into visually compelling narratives using
            infographics, illustrations, and data visualizations that make your
            content shareable, accessible, and impossible to ignore.
          </GridListItem>
          <GridListItem title="Brand Strategy & Creative Direction">
            Beyond design, we provide strategic creative direction — including
            brand guidelines, tone of voice, and visual strategy — to ensure
            every piece of content aligns with your long-term brand goals.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  );
};

export default Values;
