"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Anas from "./Anas";
import Abdullah from "./Abdullah";
import Hussain from "./Hussain";
import Jobert from "./Jobert";

const TeamMemberCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isInCarousel, setIsInCarousel] = useState(false);
  const carouselRef = useRef(null);
  const wheelTimeoutRef = useRef(null);
  const touchStartRef = useRef(0);
  const lastScrollYRef = useRef(0);

  const teamMembers = [
    { Component: Anas, name: "Anas" },
    { Component: Abdullah, name: "Abdullah" },
    { Component: Hussain, name: "Hussain" },
    { Component: Jobert, name: "Jobert" },
  ];

  // Detect if user is in carousel section
  useEffect(() => {
    const handleScroll = () => {
      if (!carouselRef.current) return;

      const isDesktop = window.innerWidth >= 768; // md breakpoint
      const rect = carouselRef.current.getBoundingClientRect();
      const currentScrollY = window.scrollY || window.pageYOffset;
      const isScrollingDown = currentScrollY > lastScrollYRef.current;
      lastScrollYRef.current = currentScrollY;

      if (isDesktop) {
        // On desktop, activate scroll control when carousel middle reaches viewport middle
        const carouselMiddle = rect.top + rect.height / 2;
        const viewportMiddle = window.innerHeight / 2;
        const threshold = 100; // pixels tolerance
        setIsInCarousel(
          Math.abs(carouselMiddle - viewportMiddle) < threshold &&
            rect.bottom > 0
        );
      } else {
        // On mobile:
        // - When scrolling down, activate when carousel top reaches viewport top
        // - When scrolling up, activate when carousel bottom reaches viewport bottom
        if (isScrollingDown) {
          setIsInCarousel(rect.top <= 0 && rect.bottom > 0);
        } else {
          setIsInCarousel(
            rect.bottom >= window.innerHeight && rect.top < window.innerHeight
          );
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check on mount

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle wheel scroll
  useEffect(() => {
    const handleWheel = (e) => {
      if (!isInCarousel) return;

      const scrollDown = e.deltaY > 0;
      const isAtStart = currentIndex === 0;
      const isAtEnd = currentIndex === teamMembers.length - 1;

      // Allow normal scrolling at boundaries
      if ((scrollDown && isAtEnd) || (!scrollDown && isAtStart)) {
        return;
      }

      e.preventDefault();

      if (wheelTimeoutRef.current) return;

      if (scrollDown && currentIndex < teamMembers.length - 1) {
        setCurrentIndex(currentIndex + 1);
      } else if (!scrollDown && currentIndex > 0) {
        setCurrentIndex(currentIndex - 1);
      }

      wheelTimeoutRef.current = setTimeout(() => {
        wheelTimeoutRef.current = null;
      }, 600);
    };

    if (isInCarousel) {
      window.addEventListener("wheel", handleWheel, { passive: false });
    }

    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, [isInCarousel, currentIndex, teamMembers.length]);

  // Handle touch swipe
  useEffect(() => {
    const handleTouchStart = (e) => {
      if (!isInCarousel) return;
      touchStartRef.current = e.touches[0].clientY;
    };

    const handleTouchEnd = (e) => {
      if (!isInCarousel) return;

      const touchEnd = e.changedTouches[0].clientY;
      const diff = touchStartRef.current - touchEnd;

      if (Math.abs(diff) < 50) return;

      const scrollDown = diff > 0;
      const isAtStart = currentIndex === 0;
      const isAtEnd = currentIndex === teamMembers.length - 1;

      // Allow normal scrolling at boundaries
      if ((scrollDown && isAtEnd) || (!scrollDown && isAtStart)) {
        return;
      }

      e.preventDefault();

      if (scrollDown && currentIndex < teamMembers.length - 1) {
        setCurrentIndex(currentIndex + 1);
      } else if (!scrollDown && currentIndex > 0) {
        setCurrentIndex(currentIndex - 1);
      }
    };

    if (isInCarousel) {
      window.addEventListener("touchstart", handleTouchStart, { passive: false });
      window.addEventListener("touchend", handleTouchEnd, { passive: false });
    }

    return () => {
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [isInCarousel, currentIndex, teamMembers.length]);

  const CurrentComponent = teamMembers[currentIndex].Component;

  return (
    <div
      ref={carouselRef}
      className="relative w-full min-h-screen flex items-center justify-center bg-white overflow-hidden"
    >
      {/* Team Member Component with Swipe Animation */}
      <motion.div
        key={currentIndex}
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -100, opacity: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="w-full"
      >
        <CurrentComponent />
      </motion.div>
    </div>
  );
};

export default TeamMemberCarousel;
