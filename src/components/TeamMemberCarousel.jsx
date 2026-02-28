"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Anas from "./Anas";
import Abdullah from "./Abdullah";
import Hussain from "./Hussain";
import Jobert from "./Jobert";

// Register ScrollTrigger
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const teamMembers = [
  { Component: Anas, name: "Anas" },
  { Component: Abdullah, name: "Abdullah" },
  { Component: Hussain, name: "Hussain" },
  { Component: Jobert, name: "Jobert" },
];

const TeamMemberCarousel = () => {
  const containerRef = useRef(null);
  const cardRefs = useRef([]);

  // Add refs to the array
  const addToRefs = (el) => {
    if (el && !cardRefs.current.includes(el)) {
      cardRefs.current.push(el);
    }
  };

  useGSAP(
    () => {
      const cards = cardRefs.current;
      const lastCard = cards[cards.length - 1];

      cards.forEach((card, index) => {
        const nextCard = cards[index + 1];

        // If there is a next card, set up the shrinking/fading animation
        if (nextCard) {
          // Calculate how much to shrink and fade based on the card's position
          // Using similar math as the velvetica.studio example
          const scaleOrderValue = (100 - cards.length) / 100 + (index + 1) * 0.01;
          const opacityOrderValue = 1 - cards.length / 10 + (index + 1) * 0.1;

          gsap.to(card, {
            scrollTrigger: {
              trigger: nextCard,
              endTrigger: lastCard,
              start: "0% 50%", // When the top of the next card hits the middle of the screen
              end: "100% 50%", // When the bottom of the last card hits the middle
              scrub: true, // Tie animation to scroll
              invalidateOnRefresh: true,
            },
            scale: scaleOrderValue,
            opacity: opacityOrderValue,
            ease: "none",
          });
        }
      });
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef} className="relative w-full mx-auto pb-32">
      <div className="flex flex-col gap-0 relative">
        {teamMembers.map(({ Component, name }, index) => (
          <div
            key={name}
            ref={addToRefs}
            className="w-full origin-top"
            style={{
              // Need sticky to keep it on screen
              position: "sticky",
              top: `10vh`, // Add some spacing so they don't hit the very top edge immediately
              // Give it height so they actually scroll past each other
              marginBottom: index === teamMembers.length - 1 ? "0" : "50vh",
              zIndex: index, // Ensure newer cards stack on top of older cards
            }}
          >
            {/* Render the actual team member component */}
            <div className="bg-neutral-950 rounded-4xl shadow-[0_-10px_40px_rgba(0,0,0,0.3)]">
              <Component />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamMemberCarousel;
