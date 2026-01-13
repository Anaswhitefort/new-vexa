import Build from "@/components/Build";
import ContactSection from "@/components/ContactSection";
import Deliver from "@/components/Deliver";
import Onboarding from "@/components/Onboarding";
import PageIntro from "@/components/PageIntro";
import Values from "@/components/Values";
import React from "react";

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
        {/* Discover */}
        <Onboarding />
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
