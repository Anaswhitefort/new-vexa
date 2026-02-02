import React from "react";
import SectionIntro from "./SectionIntro";
import Container from "./Container";
import { GridList, GridListItem } from "./GridList";

const Hussain = () => {
  // SEO Structured Data - Person Schema
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Hussain Bin Mohamed",
    jobTitle: "Content Creator & Videographer",
    image: "https://new-vexa.com/images/team/hussain.jpg",
    description: "Content creator with 5+ years expertise in videography, video editing, and 3D animation for compelling brand storytelling",
    expertise: [
      "Videography",
      "Video Editing",
      "3D Animation",
      "Visual Storytelling",
      "Content Production",
      "Color Grading",
      "Motion Graphics",
      "Brand Video Production"
    ],
    keywords: "videography, video editing, content creation, 3D animation, video production, brand storytelling, visual content",
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
        eyebrow="Content Creator"
        title="Hussain Bin Mohamed."
        invert
      >
        <p>
With 5+ years of expertise in
videography and editing, Hussain
specializes in producing compelling
content that captures brand stories,
engages audiences, and enhances
digital presence through high-quality
visual storytelling and creativity.       </p>
      </SectionIntro>
      <Container className="mt-16">
        <GridList>
          <GridListItem title="Videography" invert>
            Captures high-quality video content that tells brand stories and engages audiences through creative visual techniques.
          </GridListItem>
          <GridListItem title="Video Editing" invert>
            Edits videos with attention to pacing, transitions, color grading, and sound to create polished, engaging final products.
          </GridListItem>
          <GridListItem title="3D Artist" invert>
            Creates stunning 3D visuals and animations to enhance video content and provide immersive brand experiences.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  );
};

export default Hussain;
