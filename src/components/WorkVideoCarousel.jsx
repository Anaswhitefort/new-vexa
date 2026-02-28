"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const CircularProgress = ({ percentage }) => {
  const circumference = 2 * Math.PI * 45;
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <div className="relative flex items-center justify-center w-24 h-24">
      <svg width="100" height="100" className="transform -rotate-90">
        <circle
          cx="50"
          cy="50"
          r="45"
          fill="none"
          stroke="#e5e7eb"
          strokeWidth="2"
        />
        <motion.circle
          cx="50"
          cy="50"
          r="45"
          fill="none"
          stroke="#fff"
          strokeWidth="2"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
        />
      </svg>
      <div className="absolute flex flex-col items-center">
        <span className="text-sm font-semibold text-white">{percentage}%</span>
        <span className="text-xs text-gray-300">Loading</span>
      </div>
    </div>
  );
};

const WorkVideoCarousel = () => {
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef(null);
  const cardRefs = useRef([]);

  const videos = [
    {
      mobile: "/videos/juliana-xerez-work-mob.mp4",
      desktop: "/videos/juliana-xerez-work-web.mp4",
      title: "Juliana Xerez",
    },
    {
      mobile: "/videos/twistshake-work-mob.mp4",
      desktop: "/videos/twistshake-work-web.mp4",
      title: "Twistshake",
    },
    {
      mobile: "/videos/ginjer&lace-work-mob.mp4",
      desktop: "/videos/ginjer&lace-work-web.mp4",
      title: "Ginjer & Lace",
    },
    {
      mobile: "/videos/myatelier-work-mob.mp4",
      desktop: "/videos/myatelier-work-web.mp4",
      title: "Myatelier",
    },
    {
      mobile: "/videos/i-health-work-mob.mp4",
      desktop: "/videos/i-health-work-web.mp4",
      title: "I Health",
    },
    {
      mobile: "/videos/angelico-work-mob.mp4",
      desktop: "/videos/angelico-work-web.mp4",
      title: "Angelico",
    },
  ];

  // Detect mobile/desktop
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

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

        if (nextCard) {
          const scaleOrderValue = (100 - cards.length) / 100 + (index + 1) * 0.01;
          const opacityOrderValue = 1 - cards.length / 10 + (index + 1) * 0.1;

          gsap.to(card, {
            scrollTrigger: {
              trigger: nextCard,
              endTrigger: lastCard,
              start: "0% 50%",
              end: "100% 50%",
              scrub: true,
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
    <div ref={containerRef} className="w-full relative mx-auto py-16 md:py-24 pb-32">
      <div className="flex flex-col gap-0 relative max-w-5xl mx-auto px-4">
        {videos.map((video, index) => {
          const videoSrc = isMobile ? video.mobile : video.desktop;

          return (
            <div
              key={video.title + index}
              ref={addToRefs}
              className="w-full origin-top"
              style={{
                position: "sticky",
                top: "10vh",
                transform: `translateY(${index * 20}px)`,
                marginBottom: index === videos.length - 1 ? "0" : "50vh",
                zIndex: index,
              }}
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-neutral-900 border border-neutral-800">
                {/* Video container */}
                <div
                  style={
                    isMobile
                      ? { aspectRatio: "9 / 18" }
                      : { aspectRatio: "16 / 9" }
                  }
                  className="w-full relative"
                >
                  <video
                    src={videoSrc}
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Video Title */}
                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 bg-gradient-to-t from-black/80 to-transparent">
                  <h3 className="text-2xl md:text-3xl font-bold text-white">
                    {video.title}
                  </h3>
                  <p className="text-gray-300 text-sm mt-1">
                    Project {index + 1} of {videos.length}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WorkVideoCarousel;
