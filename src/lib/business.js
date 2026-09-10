// Match the company identifier already published on shopify.vexa.ae.
export const organizationId = "https://www.vexa.ae/#organization";
export const shopifyUrl = "https://shopify.vexa.ae/";

export const shopifyService = {
  "@type": "Service",
  "@id": "https://vexa.ae/#shopify-services",
  name: "Shopify services by Vexa",
  serviceType: "Shopify development, onboarding, integrations and training",
  url: shopifyUrl,
  description: "Vexa's Shopify services are detailed on shopify.vexa.ae, its dedicated Shopify services website. Both websites are operated by Vexa L.L.C in Abu Dhabi, UAE.",
  provider: { "@id": organizationId },
  areaServed: { "@type": "Country", name: "United Arab Emirates" },
};

export const businessGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": organizationId,
      name: "Vexa",
      legalName: "Vexa L.L.C",
      url: "https://vexa.ae/",
      logo: "https://vexa.ae/vexa-logo-black.png",
      image: "https://vexa.ae/vexa-logo-black.png",
      telephone: "+971563901109",
      email: "anas@vexa.ae",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Falcon Tower, Hamdan Street, Corner Airport Road",
        addressLocality: "Abu Dhabi",
        addressRegion: "Abu Dhabi",
        addressCountry: "AE",
      },
      description: "Vexa L.L.C is an ecommerce, web and app development, and digital marketing agency in Abu Dhabi. Vexa operates vexa.ae and its dedicated Shopify services website, shopify.vexa.ae.",
      sameAs: [
        "https://www.linkedin.com/company/vexa-ae",
        "https://www.instagram.com/vexa.ae",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://vexa.ae/#website",
      url: "https://vexa.ae/",
      name: "Vexa",
      publisher: { "@id": organizationId },
    },
    {
      "@type": "WebSite",
      "@id": `${shopifyUrl}#website`,
      url: shopifyUrl,
      name: "Shopify by Vexa",
      description: "The dedicated website for Vexa's detailed Shopify services, operated by Vexa L.L.C.",
      publisher: { "@id": organizationId },
      about: { "@id": shopifyService["@id"] },
    },
    shopifyService,
  ],
};
