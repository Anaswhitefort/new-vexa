import Clients from "@/components/Clients";
import ContactSection from "@/components/ContactSection";
import Container from "@/components/Container";
import FadeIn from "@/components/FadeIn";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import GlowingBackground from "@/components/GlowingBackground";
import TypedHeader from "@/components/TypedHeader";
import logoPhobiaDark from "@/images/clients/phobia/logo-dark.svg";

const HERO_TITLES = [
  "Building Next-generation e-commerce infrastructure. Engineered for scale.",
  "Scaling your digital storefront. Make your online presence a reality",
  "Architecting modern commerce. Pushing the boundaries.",
  "Not just an agency, we build, market and scale it.",
  "Leading E-commerce expansion from Abu Dhabi. We build digital commerce that dominates."
];

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Vexa",
    "image": "https://vexa.ae/vexa-logo-black.png",
    "url": "https://vexa.ae",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Abu Dhabi",
      "addressRegion": "Abu Dhabi",
      "addressCountry": "AE"
    },
    "description": "Vexa is an official Shopify partner and award-winning ecommerce & digital marketing agency in Abu Dhabi."
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="text-white pt-24 sm:pt-16">
        <GlowingBackground className="relative overflow-hidden pb-32 rounded-t-[2.5rem]">
          <Container className="mt-54 sm:mt-52 relative z-10">
            <FadeIn className="max-w-4xl">
              <h1 className="font-display text-5xl font-medium tracking-tight text-white [text-wrap:balance] sm:text-7xl min-h-[160px] sm:min-h-[220px]">
                <TypedHeader title={HERO_TITLES} />
              </h1>
              <p className="mt-6 text-xl text-neutral-300">
                We are a group of ads specialist, content creators and
                web/app developers, based in Abu Dhabi. With years of
                experience supplying visuals for companies &
                marketing platforms.
              </p>
            </FadeIn>
          </Container>
        </GlowingBackground>
        <Clients />
        <Testimonials
          className="mt-24 sm:mt-32 lg:mt-40"
          client={{ name: "Phobia", logo: logoPhobiaDark }}
        >
          The team at Studio went above and beyond with our onboarding, even
          finding a way to access the user microphone without triggering one of
          those annoying permission dialogs.
        </Testimonials>
        <Services />
        <ContactSection />
      </main>
    </>
  );
}
