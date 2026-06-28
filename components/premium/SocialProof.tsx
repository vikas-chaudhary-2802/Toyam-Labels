"use client";

import { motion } from "framer-motion";
import { Building, Building2, Crown, Zap, Music, Briefcase, ShoppingBag, Activity } from "lucide-react";

export function SocialProof() {
  const partners = [
    { name: "Hyatt Hotels", icon: <Building /> },
    { name: "Marriott", icon: <Building2 /> },
    { name: "The Taj Group", icon: <Crown /> },
    { name: "TechSpark 2023", icon: <Zap /> },
    { name: "Sunburn Festival", icon: <Music /> },
    { name: "WeWork", icon: <Briefcase /> },
    { name: "Reliance Retail", icon: <ShoppingBag /> },
    { name: "Cult.fit", icon: <Activity /> },
  ];

  return (
    <section className="py-24 bg-zinc-950 border-t border-white/5 overflow-hidden">
      <div className="container mx-auto px-6 mb-12">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-sm font-semibold tracking-widest text-gray-500 uppercase"
        >
          Trusted by India's Top Brands & Venues
        </motion.p>
      </div>

      {/* Infinite Marquee */}
      <div className="relative flex overflow-x-hidden group">
        <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-zinc-950 to-transparent z-10" />
        <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-zinc-950 to-transparent z-10" />

        <div className="animate-marquee whitespace-nowrap flex items-center group-hover:pause">
          {[...partners, ...partners].map((partner, index) => (
            <div
              key={index}
              className="mx-10 flex items-center space-x-4 cursor-default group/item"
            >
              <div className="text-white/10 group-hover/item:text-white/40 transition-colors duration-300 [&>svg]:w-8 [&>svg]:h-8 md:[&>svg]:w-10 md:[&>svg]:h-10">
                {partner.icon}
              </div>
              <span className="text-2xl md:text-4xl font-bold text-white/10 group-hover/item:text-white/40 transition-colors duration-300">
                {partner.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
