import React from "react";
import SectionIntro from "./SectionIntro";
import Container from "./Container";
import { GridList, GridListItem } from "./GridList";

const Jobert = () => {
  // SEO Structured Data - Person Schema
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Jobert Salaya",
    jobTitle: "Senior Graphic Designer & Branding Expert",
    image: "https://new-vexa.com/images/team/jobert.jpg",
    description: "Senior graphic designer with 8+ years expertise in visual branding, logo design, and product photography for e-commerce",
    expertise: [
      "Branding & Brand Identity",
      "Logo Design",
      "Graphic Design",
      "Product Photography",
      "Visual Design Systems",
      "Creative Direction",
      "E-commerce Design",
      "Art Direction"
    ],
    keywords: "graphic design, branding, logo design, product photography, visual identity, brand design, e-commerce design",
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
