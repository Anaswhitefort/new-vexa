import React from "react";
import SectionIntro from "./SectionIntro";
import Container from "./Container";
import FadeIn from "./FadeIn";
import StylizedImage from "./StylizedImage";
import imageLaptop from "../images/laptop.jpg";
import List, { ListItem } from "./List";

const Services = () => {
  return (
    <>
      <SectionIntro
        eyebrow="Services"
        title="Engineering your expansion. Built for scale."
        className="mt-24 sm:mt-32 lg:mt-40"
        typed={true}
      >
        <p>
          We build digital infrastructure and strategy to accelerate your growth in the GCC. No fluff, just scalable systems that perform.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <div className="lg:flex lg:items-center lg:justify-end">
          <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
            <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
              <StylizedImage
                src={imageLaptop}
                sizes="(min-width: 1024px) 41rem, 31rem"
                className="justify-center lg:justify-end"
              />
            </FadeIn>
          </div>
          {/* List item */}
          <List className="mt-16 lg:mt-0 lg:w-1/2 lg:min-w-[33rem] lg:pl-4">
            <ListItem title="GCC Market Entry">
              Go to market. Faster. We architect your entire expansion—from digital storefronts to structured marketplace rollouts. End-to-end infrastructure, localized for the GCC.
            </ListItem>
            <ListItem title="E-commerce Systems">
              High-performance commerce. We engineer digital storefronts optimized for conversion and speed. Modern tech stacks, frictionless UX, and measurable outcomes.
            </ListItem>
            <ListItem title="Performance Marketing">
              Data-driven growth. We deploy precision campaigns to generate qualified demand. Continuous optimization, transparent reporting, and strategies that scale.
            </ListItem>
            <ListItem title="Custom Applications">
              Purpose-built software. When off-the-shelf fails, we build bespoke web and mobile apps. Scalable architecture, secure backends, and flawless user experiences.
            </ListItem>
          </List>
        </div>
      </Container>
    </>
  );
};

export default Services;
