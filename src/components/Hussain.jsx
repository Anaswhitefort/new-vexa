import React from "react";
import SectionIntro from "./SectionIntro";
import Container from "./Container";
import { GridList, GridListItem } from "./GridList";

const Hussain = () => {
  return (
    <div className="mt-24 rounded-4xl bg-site bg-site-grain py-24 sm:mt-32 lg:mt-40 lg:py-32">
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
