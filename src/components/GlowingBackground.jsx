"use client";
import React, { useState, useRef } from 'react';

export default function GlowingBackground({ children, className = "" }) {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const containerRef = useRef(null);

    const handleMouseMove = (e) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        setMousePosition({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
        });
    };

    return (
        <div
            ref={containerRef}
            onMouseMove={handleMouseMove}
            className={`relative overflow-hidden text-white ${className}`}
            style={{
                background: `radial-gradient(1200px 700px at 15% 10%, rgba(56, 189, 248, 0.10), transparent 55%), radial-gradient(900px 600px at 85% 20%, rgba(99, 102, 241, 0.12), transparent 60%), linear-gradient(180deg, #050b1a 0%, #030712 55%, #020617 100%)`
            }}
        >
            {/* Background glow effect that follows the mouse */}
            <div
                className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-300"
                style={{
                    background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.06), transparent 40%)`
                }}
            />

            {/* Content */}
            <div className="relative z-10 w-full h-full">
                {children}
            </div>
        </div>
    );
}
