"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

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
  const [preloadedVideos, setPreloadedVideos] = useState(new Set());
  const scrollContainerRef = useRef(null);
  const lastScrollRef = useRef(0);
  const scrollDelayRef = useRef(0);

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

  // Preload adjacent videos for faster switching
  useEffect(() => {
    const nextIndex = (currentVideoIndex + 1) % videos.length;
    const prevIndex = (currentVideoIndex - 1 + videos.length) % videos.length;
    const indicesToPreload = [currentVideoIndex, nextIndex, prevIndex];

    indicesToPreload.forEach((index) => {
      if (!preloadedVideos.has(index)) {
        const link = document.createElement("link");
        link.rel = "preload";
        link.as = "video";
        link.href = isMobile ? videos[index].mobile : videos[index].desktop;
        document.head.appendChild(link);

        setPreloadedVideos((prev) => new Set([...prev, index]));
      }
    });
  }, [currentVideoIndex, isMobile, videos, preloadedVideos]);

  // Handle scroll for video switching with throttling
  useEffect(() => {
    const handleScroll = () => {
      const now = Date.now();
      if (now - scrollDelayRef.current < 400) return; // Throttle scroll changes

      const scrollDelta = window.scrollY - lastScrollRef.current;

      if (scrollDelta > 50) {
        // Scrolling down
        if (currentVideoIndex < videos.length - 1) {
          setCurrentVideoIndex(currentVideoIndex + 1);
          scrollDelayRef.current = now;
        }
        lastScrollRef.current = window.scrollY;
      } else if (scrollDelta < -50) {
        // Scrolling up
        if (currentVideoIndex > 0) {
          setCurrentVideoIndex(currentVideoIndex - 1);
          scrollDelayRef.current = now;
        }
        lastScrollRef.current = window.scrollY;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [currentVideoIndex, videos.length]);

  // Handle touch swipe for mobile
  useEffect(() => {
    let touchStartY = 0;

    const handleTouchStart = (e) => {
      touchStartY = e.touches[0].clientY;
    };

    const handleTouchEnd = (e) => {
      const touchEndY = e.changedTouches[0].clientY;
      const diff = touchStartY - touchEndY;

      if (Math.abs(diff) > 50) {
        // Minimum 50px swipe
        if (diff > 0 && currentVideoIndex < videos.length - 1) {
          // Swiped up - show next video
          setCurrentVideoIndex(currentVideoIndex + 1);
        } else if (diff < 0 && currentVideoIndex > 0) {
          // Swiped down - show previous video
          setCurrentVideoIndex(currentVideoIndex - 1);
        }
      }
    };

    if (isMobile) {
      window.addEventListener("touchstart", handleTouchStart, { passive: true });
      window.addEventListener("touchend", handleTouchEnd, { passive: true });
    }

    return () => {
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [currentVideoIndex, videos.length, isMobile]);

  // Simulate faster video loading with better progress
  useEffect(() => {
    if (loadingComplete[currentVideoIndex]) return;

    const interval = setInterval(() => {
      setLoadingProgress((prev) => {
        const currentProgress = prev[currentVideoIndex] || 0;
        let newProgress = currentProgress;

        // Faster initial loading, slower as it approaches 100
        if (currentProgress < 30) {
          newProgress = currentProgress + Math.random() * 20;
        } else if (currentProgress < 70) {
          newProgress = currentProgress + Math.random() * 15;
        } else {
          newProgress = currentProgress + Math.random() * 8;
        }

        if (newProgress >= 100) {
          setLoadingComplete((prevComplete) => ({
            ...prevComplete,
            [currentVideoIndex]: true,
          }));
          return prev;
        }
        return { ...prev, [currentVideoIndex]: Math.min(newProgress, 99) };
      });
    }, 150); // Faster update interval

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
          initial={{ x: isMobile ? 0 : 400, opacity: 0, y: isMobile ? 20 : 0 }}
          animate={{ x: 0, opacity: 1, y: 0 }}
          exit={{ x: isMobile ? 0 : -400, opacity: 0, y: isMobile ? -20 : 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          style={
            isMobile
              ? { aspectRatio: "9 / 18" }
              : { aspectRatio: "16 / 9" }
          }
          className="relative rounded-2xl overflow-hidden bg-gray-900 shadow-2xl"
        >
          {/* Loading Indicator */}
          {isLoading && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 flex items-center justify-center bg-black/60 z-20"
            >
              <CircularProgress percentage={Math.round(currentProgress)} />
            </motion.div>
          )}

          {/* Video with optimized loading */}
          <video
            key={videoSrc}
            src={videoSrc}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="w-full h-full object-cover"
            onCanPlay={() => {
              setLoadingProgress((prev) => ({
                ...prev,
                [currentVideoIndex]: 100,
              }));
              setLoadingComplete((prev) => ({
                ...prev,
                [currentVideoIndex]: true,
              }));
            }}
          />
        </motion.div>

        {/* Video Title and Counter */}
        <div className="mt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-white">
              {videos[currentVideoIndex].title}
            </h3>
            <p className="text-gray-400 text-sm mt-1">
              Project {currentVideoIndex + 1} of {videos.length}
            </p>
          </div>

          {/* Scroll/Swipe Indicator */}
          <div className="flex md:hidden items-center gap-2 text-gray-400 text-xs">
            <span>Swipe or scroll to explore</span>
            <motion.div
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              ↓
            </motion.div>
          </div>
          <div className="hidden md:flex items-center gap-2 text-gray-400 text-sm">
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
        <div className="mt-6 flex gap-2 overflow-x-auto">
          {videos.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => setCurrentVideoIndex(index)}
              className={`h-1 rounded-full transition-all flex-shrink-0 ${
                index === currentVideoIndex
                  ? "bg-white flex-1 md:w-24"
                  : "bg-gray-600 w-12"
              }`}
              layoutId="progress"
              aria-label={`Go to project ${index + 1}`}
            />
          ))}
        </div>

        {/* Mobile Controls Hint */}
        <div className="md:hidden mt-4 text-center text-gray-500 text-xs">
          Tap dots or swipe to navigate
        </div>
      </div>
    </div>
  );
};

export default WorkVideoCarousel;
