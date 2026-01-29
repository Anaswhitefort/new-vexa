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
With over seven years of experience, Anas specializes
in paid advertising campaigns and e-commerce
consulting tailored for the GCC market. As Team Lead,
he combines strategic insight with hands-on expertise,
guiding businesses in scaling online, optimizing digital
presence, and achieving sustainable growth through
data-driven marketing solutions.        </p>
      </SectionIntro>
      <Container className="mt-16">
        <GridList>
          <GridListItem title="Advertising Specialist" invert>
           Our mission 
          </GridListItem>
          <GridListItem title="Voice Over Artist" invert>
            We don’t care when our team works just as long as they are working
            every waking second to met our clients needs.
          </GridListItem>
          <GridListItem title="Vision" invert>
           To be the Middle East’s leading e-commerce and digital
marketing agency, recognized for innovation, creativity,
and integrity. 
          </GridListItem>
        </GridList>
      </Container>
    </div>
  );
};

export default Abdullah;
