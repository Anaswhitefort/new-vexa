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
import { organizationId, shopifyService } from "@/lib/business";

export const metadata = {
  title: "Services | Shopify Development, Web Design & Marketing - Vexa Abu Dhabi",
  description: "Explore Vexa’s ecommerce, web and marketing services. Detailed Shopify services are on shopify.vexa.ae, operated by the same Vexa L.L.C team in Abu Dhabi.",
  alternates: { canonical: "https://vexa.ae/what-we-do" },
  keywords: "Shopify development UAE, web design services, ecommerce marketing, Shopify setup, digital marketing agency Abu Dhabi, Shopify expert",
  openGraph: {
    title: "Ecommerce Services - Shopify Development & Marketing - Vexa",
    description: "Explore Vexa’s ecommerce and digital services, with detailed Shopify services on shopify.vexa.ae. Both websites are operated by Vexa L.L.C.",
    url: "https://vexa.ae/what-we-do",
  },
};

const ProcessPage = () => {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          "@id": "https://vexa.ae/what-we-do#webpage",
          url: "https://vexa.ae/what-we-do",
          name: "Vexa Ecommerce, Shopify and Digital Services",
          isPartOf: { "@id": "https://vexa.ae/#website" },
          publisher: { "@id": organizationId },
          about: { "@id": shopifyService["@id"] },
          relatedLink: "https://shopify.vexa.ae/",
        }).replace(/</g, "\\u003c") }}
      />
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
