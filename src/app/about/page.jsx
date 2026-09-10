import ContactSection from "@/components/ContactSection";
import Container from "@/components/Container";
import Cultures from "@/components/Cultures";
import PageIntro from "@/components/PageIntro";
import { StatList, StatListItem } from "@/components/StatList";
import React from "react";
import ShopifyWebsiteLink from "@/components/ShopifyWebsiteLink";

export const metadata = {
  title: "About Vexa | Official Shopify Partner Abu Dhabi",
  description: "Meet Vexa L.L.C, the Abu Dhabi company behind vexa.ae and shopify.vexa.ae, our dedicated Shopify services website.",
  alternates: { canonical: "https://vexa.ae/about" },
  keywords: "about Vexa, Shopify partner team, ecommerce agency Abu Dhabi, digital marketing expertise, web development company UAE",
  openGraph: {
    title: "About Vexa - Official Shopify Partner & Ecommerce Agency",
    description: "Vexa L.L.C operates vexa.ae and shopify.vexa.ae, its dedicated Shopify services website. One company, based in Abu Dhabi, UAE.",
    url: "https://vexa.ae/about",
  },
};

const AboutPage = () => {
  return (
    <>
      <PageIntro eyebrow="Our Story" title="Our strength is collaboration">
        <p>
          We believe that our strength lies in our collaborative approach, which
          puts our clients at the center of everything we do.
        </p>
        <div className="mt-10 max-w-2xl space-y-6 text-base">
          <p>
            Vexa L.L.C operates both vexa.ae and shopify.vexa.ae. This website
            introduces our wider ecommerce, development, and marketing services;
            shopify.vexa.ae is our dedicated website for detailed Shopify services.
            Both websites represent the same company based in Abu Dhabi, UAE.
          </p>
          <p><ShopifyWebsiteLink /></p>
          <p>
            Vexa.ae was started by three friends who noticed that developer
            studios were charging clients double what an in-house team would
            cost. Since the beginning, we have been committed to doing things
            differently by charging triple instead.
          </p>
          <p>
            We are a creative team of ads specialists, content creators, and
web/app developers, based in Abu dhabi. With years of
experience supplying visuals for companies &
marketing platforms.
          </p>
        </div>
      </PageIntro>
      <Container className="mt-16">
        <StatList>
          <StatListItem value="400+" label="Success Projects" />
          <StatListItem value="300+" label="Success Clients" />
          <StatListItem value="$2M+" label="Invoices billed" />
        </StatList>
      </Container>
      <Cultures />
      <ContactSection />
    </>
  );
};

export default AboutPage;
