import ContactDetails from "@/components/ContactDetails";
import ContactForm from "@/components/ContactForm";
import Container from "@/components/Container";
import PageIntro from "@/components/PageIntro";

export const metadata = {
  title: "Contact Vexa | Get in Touch with Our Abu Dhabi Ecommerce Agency",
  description: "Get in touch with Vexa, Abu Dhabi's official Shopify partner. Contact us for Shopify development, ecommerce solutions, and digital marketing services. Free consultation available.",
  keywords: "contact Vexa, Shopify agency Abu Dhabi, ecommerce consultation, web development inquiry, digital marketing help",
  openGraph: {
    title: "Contact Vexa - Official Shopify Partner Abu Dhabi",
    description: "Reach out to our team at Vexa. We're ready to help transform your ecommerce business.",
  },
};

const ContactPage = () => {
  return (
    <>
      <PageIntro eyebrow="Contact us" title="Let’s work together">
        <p>We can not wait to hear from you.</p>
      </PageIntro>
      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <div className="grid grid-cols-1 gap-x-8 gap-y-24 lg:grid-cols-2">
          <ContactDetails />
          <ContactForm />
        </div>
      </Container>
    </>
  );
};

export default ContactPage;
