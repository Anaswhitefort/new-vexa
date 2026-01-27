import React from "react";
import Section from "./Section";
import imageFulfilment from "@/images/fulfilment.jpg";
import List, { ListItem } from "./List";

const Fulfillment = () => {
  return (
    <Section title="Product fulfillment, logistics & Payment gateway" image={{ src: imageFulfilment, shape: 2 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          We streamline your e-commerce operations with tailored fulfilment and payment solutions designed  {" "}
          <strong className="font-semibold text-neutral-950">
           for the Middle East.
          </strong>{" "}
        </p>
        <p>
          From integrating reliable shipping and last-mile partners to configuring secure, multi-currency payment gateways, we deliver a smooth, compliant customer journey across checkout, delivery, and returns {" "}
          <strong className="font-semibold text-neutral-950">—built for Reliability.</strong>{" "}
        </p>
        <p>
         Our goal is to simplify logistics and transactions so your team can focus on growth, with solutions aligned to your brand, product category, and regional requirements  {" "}
          <strong className="font-semibold text-neutral-950">
            for Scale.
          </strong>{" "}
        </p>
      </div>


     
    </Section>
  );
};

export default Fulfillment;
