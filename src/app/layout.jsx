import RootLayout from "@/components/RootLayout";
import "./globals.css";

export const metadata = {
  title: {
    template: "%s | Vexa - Official Shopify Partner & Ecommerce Agency Abu Dhabi",
    default: "Vexa - Official Shopify Partner & Ecommerce Agency Abu Dhabi",
  },
  description: "Vexa is an official Shopify partner and award-winning ecommerce & digital marketing agency in Abu Dhabi. We specialize in Shopify development, web design, and digital marketing strategies for businesses in UAE.",
  keywords: "Shopify partner Abu Dhabi, ecommerce development UAE, digital marketing agency, web design, Shopify developer, ecommerce solutions",
  openGraph: {
    title: "Vexa - Official Shopify Partner & Ecommerce Agency Abu Dhabi",
    description: "Award-winning ecommerce development and digital marketing agency. Official Shopify partner based in Abu Dhabi, UAE.",
    type: "website",
    url: "https://vexa.ae",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vexa - Official Shopify Partner & Ecommerce Agency Abu Dhabi",
    description: "Award-winning ecommerce development and digital marketing agency in Abu Dhabi.",
  },
};

export default function Layout({ children }) {
  return (
    <html lang="en" className="h-full text-base antialiased text-neutral-100">
      <body className="min-h-full">
        <div className="fixed inset-0 -z-10 bg-site bg-site-grain" aria-hidden="true" />

        <div className="flex min-h-full flex-col">
          <RootLayout>{children}</RootLayout>
        </div>
      </body>
    </html>
  );
}
