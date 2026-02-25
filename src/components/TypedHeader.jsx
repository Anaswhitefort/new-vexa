"use client";
import React, { useState, useEffect, useRef } from 'react';

const Cursor = () => {
    const [visible, setVisible] = useState(true);
    useEffect(() => {
        const interval = setInterval(() => {
            setVisible(v => !v);
        }, 400);
        return () => clearInterval(interval);
    }, []);

    return (
        <span
            className="inline-block w-[3px] h-[1em] bg-current ml-1 translate-y-[2px] transition-opacity duration-75"
            style={{ opacity: visible ? 1 : 0 }}
        />
    )
};

export default function TypedHeader({ title, className = "" }) {
    const [currentTitle, setCurrentTitle] = useState("");
    const [displayedText, setDisplayedText] = useState("");
    const [isTyping, setIsTyping] = useState(false);
    const [hasStarted, setHasStarted] = useState(false);
    const ref = useRef(null);

    // Initial random title and 10s rotation loop
    useEffect(() => {
        if (Array.isArray(title) && title.length > 0) {
            const pickRandom = () => title[Math.floor(Math.random() * title.length)];
            setCurrentTitle(pickRandom());

            if (title.length > 1) {
                const intervalId = setInterval(() => {
                    setCurrentTitle(prev => {
                        let nextTitle = prev;
                        while (nextTitle === prev) {
                            nextTitle = pickRandom();
                        }
                        return nextTitle;
                    });
                }, 10000); // Rotate every 10 seconds

                return () => clearInterval(intervalId);
            }
        } else {
            setCurrentTitle(title);
        }
    }, [title]);

    // Intersection Observer to set hasStarted to true
    useEffect(() => {
        const currentRef = ref.current;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasStarted) {
                    setHasStarted(true);
                    if (currentRef) observer.unobserve(currentRef);
                }
            },
            { threshold: 0.1 }
        );

        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) observer.unobserve(currentRef);
        };
    }, [hasStarted]);

    // Typing effect when currentTitle changes AND observer has triggered (hasStarted is true)
    useEffect(() => {
        if (!hasStarted || !currentTitle) return;

        setIsTyping(true);
        setDisplayedText(""); // Reset displayed text when title changes
        let i = 0;

        const startDelay = setTimeout(() => {
            const typingInterval = setInterval(() => {
                if (i < currentTitle.length) {
                    setDisplayedText(currentTitle.substring(0, i + 1));
                    i++;
                } else {
                    clearInterval(typingInterval);
                    setIsTyping(false);
                }
            }, 50); // typing speed

            return () => clearInterval(typingInterval);
        }, 400);

        return () => {
            clearTimeout(startDelay);
        };
    }, [currentTitle, hasStarted]);

    return (
        <span ref={ref} className={`relative inline-block ${className}`}>
            <span className="sr-only" suppressHydrationWarning>{currentTitle}</span>
            <span aria-hidden="true" className="inline-block">
                {displayedText}
            </span>
            {(isTyping || (!isTyping && hasStarted)) && <Cursor />}
        </span>
    );
}
