import ContactSection from "@/components/ContactSection";
import Container from "@/components/Container";
import TeamMemberCarousel from "@/components/TeamMemberCarousel";
import PageIntro from "@/components/PageIntro";
import { StatList, StatListItem } from "@/components/StatList";
import React from "react";

export const metadata = {
  title: "Our Team | Meet Vexa's Shopify Experts - Abu Dhabi",
  description: "Meet the talented team at Vexa. Our Shopify experts, developers, designers, and marketers are passionate about transforming ecommerce businesses in Abu Dhabi and across the UAE.",
  keywords: "Shopify team, ecommerce experts, web developers, digital marketing team, creative professionals Abu Dhabi",
  openGraph: {
    title: "Our Team - Vexa's Ecommerce & Shopify Experts",
    description: "Get to know the talented team behind Vexa's success in Shopify development and digital marketing.",
  },
};

const OurTeamPage = () => {
  return (
    <>
      <PageIntro eyebrow="Our Team" title="Our strength is collaboration">
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
web/app developers, based in Abu Dhabi. With years of
experience supplying visuals for companies &
marketing platforms.
          </p>
        </div>
      </PageIntro>
      <Container className="mt-16">
        <StatList>
          <StatListItem value="400+" label="Success Projects" />
          <StatListItem value="100+" label="Success Clients" />
          <StatListItem value="$5M+" label="Invoices billed" />
        </StatList>
      </Container>
      <TeamMemberCarousel />
      <ContactSection />
    </>
  );
};

export default OurTeamPage;
