import React from "react";
import SectionIntro from "./SectionIntro";
import Container from "./Container";
import { GridList, GridListItem } from "./GridList";

const Jobert = () => {
  return (
    <div className="mt-24 rounded-4xl bg-site bg-site-grain py-24 sm:mt-32 lg:mt-40 lg:py-32">
      <SectionIntro
        eyebrow="Senior Graphic Designer"
        title="Jobert Salaya."
        invert
      >
        <p>
With 8+ years of expertise in visual
graphics and branding design,
Jobert creates impactful visuals
that elevate brand identity,
blending creativity and strategy to
engage audiences and strengthen
business presence.         </p>
      </SectionIntro>
      <Container className="mt-16">
        <GridList>
          <GridListItem title="Branding Expert" invert>
            Develops cohesive brand identities through logos, color schemes, and visual guidelines that resonate with target audiences.
          </GridListItem>
          <GridListItem title="Creative Artist" invert>
            Crafts visually compelling artwork and designs that communicate brand messages effectively and inspire audience engagement.
          </GridListItem>
          <GridListItem title="Product Photography" invert>
           Captures high-quality product images that highlight features and appeal to target customers, enhancing e-commerce and marketing efforts.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  );
};

export default Jobert;
