"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Appbar from "./appbar";

// Fixed particle positions (avoid Math.random() during render)
const particles = Array.from({ length: 15 }).map((_, i) => ({
  id: i,
  size: 1 + (i % 3),
  color: i % 2 === 0 ? "rgba(99, 102, 241, 0.3)" : "rgba(236, 72, 153, 0.3)",
  initialX: (i * 73) % 100, // Deterministic positioning
  initialY: (i * 47) % 100,
}));

export default function Hero() {

  const [isMounted, setIsMounted] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsMounted(true); // Mark when client-side rendering starts

    if (!isMounted) return; // Only run animations on client

    const animate = async () => {
      const gsapModule = await import("gsap");
      const scrollTriggerModule = await import("gsap/dist/ScrollTrigger");

      const gsap = gsapModule.default;
      const ScrollTrigger = scrollTriggerModule.ScrollTrigger;
      gsap.registerPlugin(ScrollTrigger);

      // Hero content animations
      if (heroRef.current) {
        const targets = heroRef.current.querySelectorAll(".animate-in");
        gsap.from(targets, {
          opacity: 0,
          y: 40,
          scale: 0.95,
          filter: "blur(20px)",
          duration: 1.2,
          ease: "power3.out",
          stagger: 0.2,
        });
      }

      // Animated gradient background
      if (bgRef.current) {
        gsap.to(bgRef.current, {
          backgroundPosition: "200% 0",
          duration: 30,
          repeat: -1,
          ease: "linear",
        });
      }

      // Floating particles animation
      if (particlesRef.current) {
        particles.forEach((particle, i) => {
          const element = particlesRef.current?.querySelector(`#particle-${i}`);
          if (element) {
            const duration = 10 + (i % 20);
            const delay = i % 5;

            gsap.to(element, {
              y: "+=100",
              x: `+=${((i % 10) - 5) * 10}`,
              rotation: i % 360,
              duration: duration,
              delay: delay,
              repeat: -1,
              yoyo: true,
              ease: "sine.inOut",
            });
          }
        });
      }
    };

    animate();
  }, [isMounted]);

  return (
    <>
      {/* Header/Nav */}
      <Appbar/>
  
    
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden pt-32 pb-20 px-6 text-center bg-white dark:bg-black"
      >
        {/* Professional Live Wallpaper Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-50 dark:opacity-10"
            // poster="/video-poster.jpg" // Fallback image while video loads
          >
            <source src="https://videos.pexels.com/video-files/5527786/5527786-uhd_2560_1440_25fps.mp4" type="video/webm" />
            <source src="https://www.pexels.com/video/person-browsing-the-internet-while-drinking-coffee-4828605/" type="video/mp4" />
            {/* Ultimate fallback */}
            <div className="absolute inset-0 bg-[url('/gradient-mesh.svg')] bg-[size:200%_200%] bg-center" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-br from-gray-950/70 to-gray-900/50" />
        </div>

        {/* Floating Particles - now with deterministic initial positions */}
        {isMounted && (
          <div ref={particlesRef} className="absolute inset-0 overflow-hidden">
            {particles.map((particle) => (
              <div
                key={particle.id}
                id={`particle-${particle.id}`}
                className="absolute rounded-full"
                style={{
                  width: `${particle.size}px`,
                  height: `${particle.size}px`,
                  background: particle.color,
                  top: `${particle.initialY}%`,
                  left: `${particle.initialX}%`,
                }}
              />
            ))}
          </div>
        )}

        {/* Subtle Grid Overlay */}
        <div className="absolute inset-0 bg-gray-50 opacity-[0.03] dark:opacity-[0.02]" />

        <div className="relative z-10 max-w-4xl mx-auto">
         <h1 className="animate-in text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-500 dark:from-white dark:to-gray-400">
  Track, Analyze, and Grow Your Social Media with Ease
</h1>

<p className="animate-in mt-6 text-lg md:text-xl text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-400 dark:from-white dark:to-gray-500">
  Get real-time insights on audience growth, follower trends, and
  potential clients, all in one place.
</p>
          <div className="animate-in mt-8">
            <Button size="lg">Start Your Free Trial</Button>
          </div>

          <div className="animate-in mt-12">
            <Image
              src="https://cdn.dribbble.com/userupload/17505396/file/original-5aa8c6c24e0b084c1079cfc7727ca927.jpg?resize=1600x1200&vertical=center"
              alt="Dashboard Preview"
              width={1280}
              height={720}
              className="rounded-xl shadow-xl w-full h-auto object-cover border border-gray-200 dark:border-zinc-800"
              priority
            />
          </div>
        </div>
      </section>
    </>
  );
}
