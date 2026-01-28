import PageIntro from "@/components/PageIntro";
import React from "react";

export const metadata = {
  title: "Our Work | Shopify Projects & Case Studies - Vexa Abu Dhabi",
  description: "Explore Vexa's portfolio of successful Shopify development projects and ecommerce solutions for brands across the UAE. See our case studies and proven results.",
  keywords: "Shopify projects, ecommerce case studies, web design portfolio, successful projects UAE, digital transformation examples, Shopify success stories",
  openGraph: {
    title: "Our Portfolio - Shopify Projects & Success Stories",
    description: "Discover how Vexa has helped businesses transform their ecommerce presence.",
  },
};

const WorkPage = () => {
  return (
    <>
      <PageIntro
        eyebrow="Our work"
        title="Proven solutions for real-world problems."
      >
        <p>
          We believe in efficiency and maximizing our resources to provide the
          best value to our clients. The primary way we do that is by re-using
          the same five projects we’ve been developing for the past decade.
        </p>
      </PageIntro>
    </>
  );
};

export default WorkPage;
