import React from "react";
import SectionIntro from "./SectionIntro";
import Container from "./Container";
import { GridList, GridListItem } from "./GridList";

const Cultures = () => {
  return (
    <div className="mt-24 rounded-4xl bg-site bg-site-grain py-24 sm:mt-32 lg:mt-40 lg:py-32">
      <SectionIntro
        eyebrow="Our mission & values"
        title="Balance your passion with your passion for life."
        invert
      >
        <p>
          We are a group of like-minded people who share the same core values.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <GridList>
          <GridListItem title="Mission" invert>
           Our mission is to empower businesses by
building seamless e-commerce experiences and
tailored digital strategies that drive sustainable growth.
          </GridListItem>
          <GridListItem title="Trust" invert>
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

export default Cultures;
