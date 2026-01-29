"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

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
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [loadingProgress, setLoadingProgress] = useState({
    0: 0,
    1: 0,
  });
  const [loadingComplete, setLoadingComplete] = useState({
    0: false,
    1: false,
  });
  const scrollContainerRef = useRef(null);
  const lastScrollRef = useRef(0);

  const videos = [
    {
      mobile: "/videos/juliana-xerez-work-mob.mp4",
      desktop: "/videos/juliana-xerez-work-web.mp4",
      title: "Juliana Xerez",
    },
    {
      mobile: "/videos/ginjer&lace-work-mob.mp4",
      desktop: "/videos/ginjer&lace-work-web.mp4",
      title: "Ginjer & Lace",
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

  // Handle scroll for video switching
  useEffect(() => {
    const handleScroll = () => {
      const scrollDelta = window.scrollY - lastScrollRef.current;

      if (scrollDelta > 50) {
        // Scrolling down
        if (currentVideoIndex < videos.length - 1) {
          setCurrentVideoIndex(currentVideoIndex + 1);
        }
        lastScrollRef.current = window.scrollY;
      } else if (scrollDelta < -50) {
        // Scrolling up
        if (currentVideoIndex > 0) {
          setCurrentVideoIndex(currentVideoIndex - 1);
        }
        lastScrollRef.current = window.scrollY;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [currentVideoIndex, videos.length]);

  // Simulate video loading
  useEffect(() => {
    if (loadingComplete[currentVideoIndex]) return;

    const interval = setInterval(() => {
      setLoadingProgress((prev) => {
        const newProgress = prev[currentVideoIndex] + Math.random() * 30;
        if (newProgress >= 100) {
          setLoadingComplete((prevComplete) => ({
            ...prevComplete,
            [currentVideoIndex]: true,
          }));
          return prev;
        }
        return { ...prev, [currentVideoIndex]: Math.min(newProgress, 99) };
      });
    }, 200);

    return () => clearInterval(interval);
  }, [currentVideoIndex, loadingComplete]);

  const videoSrc = isMobile
    ? videos[currentVideoIndex].mobile
    : videos[currentVideoIndex].desktop;

  const currentProgress = loadingProgress[currentVideoIndex];
  const isLoading = !loadingComplete[currentVideoIndex];

  return (
    <div className="w-full py-16 md:py-24">
      <div className="max-w-5xl mx-auto px-4">
        {/* Video Container */}
        <motion.div
          key={currentVideoIndex}
          initial={{ x: 400, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -400, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          style={
            isMobile
              ? { aspectRatio: "9 / 18" }
              : { aspectRatio: "16 / 9" }
          }
          className="relative rounded-2xl overflow-hidden bg-gray-900"
        >
          {/* Loading Indicator */}
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/50 z-20">
              <CircularProgress percentage={Math.round(currentProgress)} />
            </div>
          )}

          {/* Video */}
          <video
            key={videoSrc}
            src={videoSrc}
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
            onLoadedData={() => {
              setLoadingProgress((prev) => ({
                ...prev,
                [currentVideoIndex]: 100,
              }));
            }}
          />
        </motion.div>

        {/* Video Title and Counter */}
        <div className="mt-8 flex items-center justify-between">
          <div>
            <h3 className="text-2xl font-bold text-white">
              {videos[currentVideoIndex].title}
            </h3>
            <p className="text-black text-sm mt-1">
              Project {currentVideoIndex + 1} of {videos.length}
            </p>
          </div>

          {/* Scroll Indicator */}
          <div className="hidden md:flex items-center gap-2 text-black text-sm">
            <span>Scroll to explore</span>
            <motion.div
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              ↓
            </motion.div>
          </div>
        </div>

        {/* Progress Indicators */}
        <div className="mt-6 flex gap-2">
          {videos.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => setCurrentVideoIndex(index)}
              className={`h-1 rounded-full transition-all ${
                index === currentVideoIndex
                  ? "bg-white flex-1"
                  : "bg-gray-600 w-12"
              }`}
              layoutId="progress"
            />
          ))}
        </div>

        {/* Mobile Swipe Hint */}
        <div className="md:hidden mt-6 text-center text-gray-400 text-xs">
          Scroll down to see more projects
        </div>
      </div>
    </div>
  );
};

export default WorkVideoCarousel;
