import Build from "@/components/Build";
import ContactSection from "@/components/ContactSection";
import Deliver from "@/components/Deliver";
import Onboarding from "@/components/Onboarding";
import Develop from "@/components/Develop";
import Shopify from "@/components/Shopify";
import Fulfillment from "@/components/Fulfillment";
import PageIntro from "@/components/PageIntro";
import Values from "@/components/Values";
import React from "react";

export const metadata = {
  title: "Services | Shopify Development, Web Design & Marketing - Vexa Abu Dhabi",
  description: "Vexa offers comprehensive ecommerce services including Shopify development, web design, digital marketing, and content creation. Official Shopify partner in Abu Dhabi, UAE.",
  keywords: "Shopify development UAE, web design services, ecommerce marketing, Shopify setup, digital marketing agency Abu Dhabi, Shopify expert",
  openGraph: {
    title: "Ecommerce Services - Shopify Development & Marketing - Vexa",
    description: "Discover our full range of ecommerce and digital services designed to transform your business online.",
  },
};

const ProcessPage = () => {
  return (
    <>
      <PageIntro eyebrow="From Abu Dhabi" title="What we do">
        <p>
     To be the Middle East’s leading e-commerce and digital
marketing agency, recognized for innovation, creativity,
and integrity. We aspire to set new benchmarks in client
success by blending tailored strategies with cutting-edge
AI training, empowering businesses and their teams to
thrive in the digital and ai era.</p>
      </PageIntro>
      <div className="mt-24 space-y-24 [counter-reset:section] sm:mt-32 sm:space-y-32 lg:mt-40 lg:space-y-40">
        {/* Onboarding */}
        <Onboarding />
         {/* Develop */}
        <Develop />
        {/* Shopify */}
        <Shopify/>
        {/* Fulfillment */}
        <Fulfillment/>
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
