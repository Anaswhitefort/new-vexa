import ContactSection from "@/components/ContactSection";
import Container from "@/components/Container";
import Cultures from "@/components/Cultures";
import PageIntro from "@/components/PageIntro";
import { StatList, StatListItem } from "@/components/StatList";
import React from "react";

export const metadata = {
  title: "About Vexa | Official Shopify Partner Abu Dhabi",
  description: "Learn about Vexa, an official Shopify partner and ecommerce agency in Abu Dhabi. Discover our mission, team, and expertise in digital transformation for businesses across the UAE.",
  keywords: "about Vexa, Shopify partner team, ecommerce agency Abu Dhabi, digital marketing expertise, web development company UAE",
  openGraph: {
    title: "About Vexa - Official Shopify Partner & Ecommerce Agency",
    description: "Meet the team behind Vexa, Abu Dhabi's leading Shopify partner and ecommerce development agency.",
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
