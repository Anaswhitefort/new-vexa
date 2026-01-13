import React from "react";
import Section from "./Section";
import imageMeeting from "@/images/meeting.jpg";
import List, { ListItem } from "./List";

const Onboarding = () => {
  return (
    <Section title="E-commerce Onboarding & Marketing for Middle East" image={{ src: imageMeeting, shape: 1 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          Expand into the GCC with clarity and confidence through Vexa’s end-to-end e-commerce onboarding, delivered from our Abu Dhabi headquarters for US and European brands entering the Middle East market—built for {" "}
          <strong className="font-semibold text-neutral-950">
            Growth.
          </strong>{" "}
        </p>
        <p>
          We build and localize your online store, complete marketplace onboarding, optimize your catalog and pricing, and align inventory with scalable operations—plus POS setup and staff training for a smooth rollout powered by {" "}
          <strong className="font-semibold text-neutral-950">Execution.</strong>{" "}
        </p>
        <p>
          We integrate secure payment gateways, enable compliant checkout experiences, and implement reliable delivery and last-mile solutions, supported by data-driven performance marketing and analytics focused on measurable {" "}
          <strong className="font-semibold text-neutral-950">
            Results.
          </strong>{" "}
        </p>
      </div>


      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Included in this phase
      </h3>
      <List>
        <ListItem title="Testing">
          Our projects always have 100% test coverage, which would be impressive
          if our tests weren’t as porous as a sieve.
        </ListItem>
        <ListItem title="Infrastructure">
          To ensure reliability we only use the best Digital Ocean droplets that
          $4 a month can buy.
        </ListItem>
        <ListItem title="Support">
          Because we hold the API keys for every critical service your business
          uses, you can expect a lifetime of support, and invoices, from us.
        </ListItem>
      </List>
    </Section>
  );
};

export default Onboarding;
