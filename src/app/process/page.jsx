import Build from "@/components/Build";
import ContactSection from "@/components/ContactSection";
import Deliver from "@/components/Deliver";
import Discover from "@/components/Discover";
import PageIntro from "@/components/PageIntro";
import Values from "@/components/Values";
import React from "react";

export const metadata = {
  title: "Our Process | Shopify Development Methodology - Vexa Abu Dhabi",
  description: "Learn about Vexa's proven ecommerce development process. We follow a strategic approach to deliver successful Shopify stores and digital marketing campaigns.",
  keywords: "development process, Shopify methodology, ecommerce strategy, web design process, project management approach, digital transformation steps",
  openGraph: {
    title: "Our Development Process - Strategic Ecommerce Solutions",
    description: "Understand how Vexa approaches Shopify development and ecommerce projects from start to finish.",
  },
};

const ProcessPage = () => {
  return (
    <>
      <PageIntro eyebrow="Our process" title="How we work">
        <p>
          We believe in efficiency and maximizing our resources to provide the
          best value to our clients. The primary way we do that is by re-using
          the same five projects we’ve been developing for the past decade.
        </p>
      </PageIntro>
      <div className="mt-24 space-y-24 [counter-reset:section] sm:mt-32 sm:space-y-32 lg:mt-40 lg:space-y-40">
        {/* Discover */}
        <Discover />
        {/* Build */}
        <Build />
        {/* Deliver */}
        <Deliver />
      </div>
      {/* Values */}
      <Values />
      <ContactSection />
    </>
  );
};

export default ProcessPage;
