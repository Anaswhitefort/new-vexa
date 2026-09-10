import React from "react";
import Section from "./Section";
import imageShopify from "@/images/shopify-traning.jpg";
import List, { ListItem } from "./List";
import ShopifyWebsiteLink from "./ShopifyWebsiteLink";

const Shopify = () => {
  return (
    <Section title="Shopify Services by Vexa" image={{ src: imageShopify, shape: 1 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          Shopify.vexa.ae is Vexa’s dedicated website for detailed Shopify services.
          It is operated by Vexa L.L.C, the same company behind vexa.ae,
          based in Abu Dhabi, UAE.
        </p>
        <p><ShopifyWebsiteLink /></p>
        <p>
          As an official Shopify Partner, we streamline your launch by guiding you through every step of Shopify onboarding—from store setup and theme configuration to development, product integration and policies {" "}
          <strong className="font-semibold text-neutral-950">
            —built for Clarity.
          </strong>{" "}
        </p>
        <p>
          We also connect essential commerce infrastructure, including payment gateways, POS connectivity, inventory workflows, and fulfillment setup, ensuring a stable and scalable {" "}
          <strong className="font-semibold text-neutral-950">foundation for Integration.</strong>{" "}
        </p>
        <p>
          To empower your team, we deliver hands-on Shopify training across daily operations, merchandising, reporting, apps, and best practices—so staff can manage, scale, and grow with confidence through {" "}
          <strong className="font-semibold text-neutral-950">
            Enablement.
          </strong>{" "}
        </p>
      </div>


     
    </Section>
  );
};

export default Shopify;
