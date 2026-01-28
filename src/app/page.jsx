import Clients from "@/components/Clients";
import ContactSection from "@/components/ContactSection";
import Container from "@/components/Container";
import FadeIn from "@/components/FadeIn";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import logoPhobiaDark from "@/images/clients/phobia/logo-dark.svg";

export default function Home() {
  return (
    <main className="text-white pt-24 sm:pt-16">
      <section className="relative overflow-hidden ">
        <video
          className="absolute inset-0 w-full h-full object-fill opacity-100 rounded-4xl"
          style={{
            borderBottomLeftRadius: '0rem',
            borderBottomRightRadius: '0rem',
          }}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="/videos/hero-background-poster.jpg"
          controlsList="nodownload"
        >
          <source src="/videos/hero-background-compressed.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <Container className="mt-54 sm:mt-52 relative z-10">
          <FadeIn className="max-w-3xl">
            <h1 className="font-display text-5xl font-medium tracking-tight text-white [text-wrap:balance] sm:text-7xl">
              Make your online presence a reality with us!
            </h1>
            <p className="mt-6 text-xl text-white">
              We are a group of ads specialist, content creators and
web/app developers, based in Abu Dhabi. With years of
experience supplying visuals for companies &
marketing platforms.
            </p>
          </FadeIn>
        </Container>
      </section>
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
  );
}
