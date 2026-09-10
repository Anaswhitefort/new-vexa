import Clients from "@/components/Clients";
import ContactSection from "@/components/ContactSection";
import Container from "@/components/Container";
import FadeIn from "@/components/FadeIn";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import GlowingBackground from "@/components/GlowingBackground";
import TypedHeader from "@/components/TypedHeader";
import logoProPartsDark from "@/images/clients/proparts/logo-dark.png";
import WorkVideoCarousel from "@/components/WorkVideoCarousel";

const HERO_TITLES = [
  "Building Next-generation e-commerce infrastructure. Engineered for scale.",
  "Scaling your digital storefront. Make your online presence a reality",
  "Architecting modern commerce. Pushing the boundaries.",
  "Not just an agency, we build, market and scale it.",
  "Leading E-commerce expansion from Abu Dhabi. We build digital commerce that dominates."
];

export const metadata = {
  alternates: { canonical: "https://vexa.ae/" },
  description: "Vexa L.L.C in Abu Dhabi provides ecommerce, web development and marketing services. Explore our dedicated Shopify services website at shopify.vexa.ae.",
};

export default function Home() {
  return (
    <>
      <main className="text-white pt-24 sm:pt-16">
        <GlowingBackground className="relative overflow-hidden pb-32 rounded-t-[2.5rem]">
          <Container className="mt-54 sm:mt-52 relative z-10">
            <FadeIn className="max-w-4xl">
              <h1 className="font-display text-5xl font-medium tracking-tight text-white sm:text-7xl min-h-[160px] sm:min-h-[220px]">
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
          client={{ name: "Proparts UAE", logo: logoProPartsDark }}
        >
          We worked with Vexa to design and set up our custom ecommerce store, which has a very large and complex automotive catalogue of 500,000+ products. From day one, the team understood the scale and technical challenges of our project and handled it professionally.
        </Testimonials>
        <Services />
        <WorkVideoCarousel />
        <ContactSection />
      </main>
    </>
  );
}
