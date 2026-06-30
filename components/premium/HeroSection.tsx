"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { useState, useRef } from "react";

export function HeroSection() {
  const [hoveredSide, setHoveredSide] = useState<"left" | "right" | null>(null);
  const rightVideoRef = useRef<HTMLVideoElement>(null);

  const handleRightVideoTimeUpdate = (e: React.SyntheticEvent<HTMLVideoElement>) => {
    const video = e.currentTarget;
    if (!video.duration) return;
    // Skip first 4 seconds and last 4 seconds
    if (video.currentTime >= video.duration - 4) {
      video.currentTime = 4;
    } else if (video.currentTime < 4) {
      video.currentTime = 4;
    }
  };

  const handleRightVideoLoadedMetadata = (e: React.SyntheticEvent<HTMLVideoElement>) => {
    e.currentTarget.currentTime = 4;
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-28 md:pt-32 pb-12 overflow-hidden bg-transparent"
    >
      {/* Background Gradients */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 z-10 h-full flex flex-col">
        {/* Top Content */}
        <div className="flex flex-col items-center text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-6 backdrop-blur-md"
          >
            <span className="flex h-2 w-2 rounded-full bg-blue-500 animate-pulse" />
            <span className="text-sm font-medium text-gray-300">
              The Future of Brand Visibility
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="text-[2.5rem] leading-tight md:text-6xl lg:text-7xl font-semibold tracking-tighter text-white mb-6"
          >
            Your Brand. <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Every Sip.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-lg md:text-xl text-gray-400 max-w-2xl mb-8 font-light leading-relaxed"
          >
            Transform your water bottles into powerful branding assets — for hospitality and high-footfall distribution.
          </motion.p>
        </div>

        {/* Interactive Split Screen Concept */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
          className="flex flex-col md:flex-row w-full max-w-6xl mx-auto flex-1 min-h-[400px] md:min-h-[500px] gap-4 relative"
        >
          {/* HORECA Side (Left) */}
          <motion.div
            onMouseEnter={() => setHoveredSide("left")}
            onMouseLeave={() => setHoveredSide(null)}
            onClick={() => setHoveredSide(hoveredSide === "left" ? null : "left")}
            whileTap={{ scale: 0.98 }}
            animate={{ 
              flex: hoveredSide === "left" ? 1.5 : hoveredSide === "right" ? 0.75 : 1,
              opacity: hoveredSide === "right" ? 0.6 : 1
            }}
            transition={{ type: "spring", stiffness: 200, damping: 25 }}
            className="relative w-full h-full min-h-[250px] md:min-h-[300px] rounded-[2rem] overflow-hidden group border border-white/10 shadow-2xl flex-1"
          >
            {/* Background Video */}
            <video 
              autoPlay 
              loop 
              muted 
              playsInline
              className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-1000 group-hover:scale-105 bg-black"
              src="/VID-20250109-WA0006.mp4"
            />
            {/* Overlays */}
            <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-all duration-500" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

            {/* Content */}
            <div className="absolute inset-0 p-6 md:p-12 flex flex-col justify-end z-20">
              <div className="mb-4 transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                <span className="px-3 md:px-4 py-1.5 md:py-2 bg-blue-600/90 backdrop-blur text-white text-xs md:text-sm font-bold rounded-full">
                  PRIMARY MODEL
                </span>
              </div>
              <h3 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-2 group-hover:text-blue-200 transition-colors">
                HORECA
              </h3>
              <p className="text-gray-300 text-lg md:text-xl font-light mb-6 line-clamp-2">
                Premium private-label branding for Hotels, Restaurants & Cafés.
              </p>
              
              <div className="flex items-center space-x-2 text-white font-medium transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-150">
                <span>Explore the HORECA Model</span>
                <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </div>
            </div>
          </motion.div>

          {/* Ad-Tech Side (Right) */}
          <motion.div
            onMouseEnter={() => setHoveredSide("right")}
            onMouseLeave={() => setHoveredSide(null)}
            onClick={() => setHoveredSide(hoveredSide === "right" ? null : "right")}
            whileTap={{ scale: 0.98 }}
            animate={{ 
              flex: hoveredSide === "right" ? 1.5 : hoveredSide === "left" ? 0.75 : 1,
              opacity: hoveredSide === "left" ? 0.6 : 1
            }}
            transition={{ type: "spring", stiffness: 200, damping: 25 }}
            className="relative w-full h-full min-h-[250px] md:min-h-[300px] rounded-[2rem] overflow-hidden group border border-white/10 shadow-2xl flex-1"
          >
            {/* Background Video */}
            <video 
              autoPlay 
              muted 
              playsInline
              onTimeUpdate={(e) => {
                const video = e.currentTarget;
                if (video.duration && video.currentTime >= video.duration - 4) {
                  video.currentTime = 4;
                }
              }}
              className="absolute inset-0 w-full h-full object-cover object-[50%_30%] transition-transform duration-1000 group-hover:scale-105 bg-black"
              src="/1731848805519146.mp4#t=4"
            />
            {/* Overlays */}
            <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-all duration-500" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

            {/* Content */}
            <div className="absolute inset-0 p-6 md:p-12 flex flex-col justify-end items-end text-right z-20">
              <div className="mb-4 transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                <span className="px-3 md:px-4 py-1.5 md:py-2 bg-purple-600/90 backdrop-blur text-white text-xs md:text-sm font-bold rounded-full">
                  AD-TECH
                </span>
              </div>
              <h3 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-2 group-hover:text-purple-200 transition-colors">
                Distribution
              </h3>
              <p className="text-gray-300 text-lg md:text-xl font-light mb-6 line-clamp-2">
                High-footfall offline ad campaigns via water bottles.
              </p>

              <div className="flex items-center space-x-2 text-white font-medium transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-150">
                <span>View Ad-Tech Campaigns</span>
                <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
