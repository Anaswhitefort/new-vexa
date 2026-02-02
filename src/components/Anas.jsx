import React from "react";
import SectionIntro from "./SectionIntro";
import Container from "./Container";
import { GridList, GridListItem } from "./GridList";

const Anas = () => {
  // SEO Structured Data - Person Schema
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Anas Abdul Azeez",
    jobTitle: "Team Lead, E-commerce & Paid Advertising Specialist",
    image: "https://new-vexa.com/images/team/anas.jpg",
    description: "E-commerce solution expert with 7+ years specializing in GCC market paid advertising campaigns and Shopify development",
    expertise: [
      "E-commerce Consulting",
      "Paid Advertising",
      "GCC Market Strategy",
      "Shopify Development",
      "React Development",
      "Market Data Analysis",
      "CRO & Conversion Optimization",
      "Data-Driven Marketing"
    ],
    keywords: "e-commerce, paid ads, Shopify, React, GCC, marketing, digital consulting, growth",
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
