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
        title="We help you identify, explore and respond to new opportunities."
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          As long as those opportunities involve giving us money to re-purpose
          old projects — we can come up with an endless number of those.
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
            <ListItem title="GCC Market Entry & Expansion">
              Expand into the GCC with clarity and confidence—supported by an end-to-end partner built for the region. Headquartered in Abu Dhabi, Vexa helps European and UK manufacturers establish and grow a strong regional presence through tailored e-commerce development, structured marketplace onboarding, integrated inventory workflows, secure payment enablement, and data-led marketing strategies designed for sustainable, long-term performance.
            </ListItem>
<ListItem title="E-commerce development">
             We design and build e-commerce platforms engineered for outcomes—not just aesthetics. Through thoughtful UX, streamlined navigation, and conversion-focused design, we create digital storefronts that feel effortless to use and compelling to buy from. Your website is often the first interaction customers have with your brand in the GCC; we ensure that experience builds trust, communicates value clearly, and converts attention into measurable revenue.
            </ListItem>
                        <ListItem title="Digital marketing">
            Our digital marketing approach is performance-led, insight-driven, and aligned to your commercial goals. We develop campaigns that generate qualified demand, strengthen brand visibility, and accelerate sales across key GCC audiences. With a strategy-first methodology, we identify the most effective channels, optimize continuously, and report transparently—so every initiative is measurable, accountable, and built to scale.
            </ListItem>
            <ListItem title="Custom Application development">
             When off-the-shelf tools aren’t enough, we develop tailored web and mobile applications to support your operations, customer experience, and growth roadmap. Our engineering team works with modern frameworks and best-practice architecture to deliver reliable, scalable solutions—built around your requirements, timelines, and business objectives
            </ListItem>
          </List>
        </div>
      </Container>
    </>
  );
};

export default Services;
