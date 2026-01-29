import React from "react";
import SectionIntro from "./SectionIntro";
import Container from "./Container";
import { GridList, GridListItem } from "./GridList";

const Anas = () => {
  return (
    <div className="mt-24 rounded-4xl bg-site bg-site-grain py-24 sm:mt-32 lg:mt-40 lg:py-32">
      <SectionIntro
        eyebrow="Team Lead"
        title="Anas Abdul Azeez."
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
          <GridListItem title="E-commerce Solution Expert" invert>
           GCC-focused e-commerce consultant driving store strategy, CRO, funnels, and paid growth—scaling revenue through structured systems and execution. 
          </GridListItem>
          <GridListItem title="Market Data Analyst " invert>
            Analyzes campaign, customer, and market data to spot trends, refine targeting, forecast demand, and improve ROI with clear reporting.
          </GridListItem>
          <GridListItem title="Shopify & React Developer" invert>
           Builds fast, conversion-ready Shopify stores and React front-ends, integrating apps, APIs, and custom features for smooth shopping experiences.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  );
};

export default Anas;
