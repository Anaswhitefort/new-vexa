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
            <ListItem title="GCC Entry & Expansion">
              Expand confidently into the GCC market with our end-
to-end expertise. Headquartered in Abu Dhabi, we help
European and UK manufacturers build a strong regional
presence through tailored e-commerce development,
seamless marketplace onboarding, streamlined
inventory management,payment solution and data-driven marketing
strategies designed for long-term growth.
            </ListItem>
<ListItem title="E-commerce development">
              We design and develop E-commerce platforms that do more
than just look good—they drive conversions. By focusing
on seamless navigation, intuitive interfaces, and
engaging user experiences, we ensure every interaction
leaves a lasting impression. As the first touchpoint for
potential customers, your digital presence becomes the
deciding factor between missed opportunities and
measurable success.
            </ListItem>
                        <ListItem title="Digital marketing">
              We specialize in performance-driven digital marketing
strategies designed to generate leads and boost sales.
Every campaign is tailored to your growth objectives,
ensuring seamless alignment with your business goals.
With a strategy-first approach, our team identifies and
executes the most effective methods to maximize
reach, engagement, and measurable results.
            </ListItem>
            <ListItem title="Custom Application development">
              We have a team of skilled developers who are experts in the latest
              app frameworks, will develop Mobile & Web apps according to your needs.
            </ListItem>
          </List>
        </div>
      </Container>
    </>
  );
};

export default Services;
