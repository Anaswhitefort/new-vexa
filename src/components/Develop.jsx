import React from "react";
import Section from "./Section";
import imageMeeting from "@/images/meeting.jpg";
import List, { ListItem } from "./List";

const Develop = () => {
  return (
    <Section title="E-commerce, Web & Mobile App development" image={{ src: imageMeeting, shape: 1 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          We design and develop e-commerce stores, websites, and mobile apps that do more than look good—they are engineered for {" "}
          <strong className="font-semibold text-neutral-950">
            Conversion.
          </strong>{" "}
        </p>
        <p>
          By prioritizing seamless navigation, intuitive UI/UX, and fast, mobile-first experiences, we help every visit feel effortless and every interaction build trust through {" "}
          <strong className="font-semibold text-neutral-950">Experience.</strong>{" "}
        </p>
        <p>
          As your first touchpoint in the Middle East, your digital presence becomes the deciding factor between missed opportunities and measurable growth—delivered with {" "}
          <strong className="font-semibold text-neutral-950">
            Performance.
          </strong>{" "}
        </p>
      </div>


     
    </Section>
  );
};

export default Develop;
