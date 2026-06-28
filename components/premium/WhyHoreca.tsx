"use client";

import { motion } from "framer-motion";
import { XCircle, CheckCircle2, TrendingUp } from "lucide-react";

export function WhyHoreca() {
  const painPoints = [
    "Selling generic water builds someone else's brand.",
    "Zero brand recall when customers leave your venue.",
    "Missed opportunity for organic offline marketing.",
  ];

  const solutions = [
    "Serve water with your own premium branding.",
    "Customers carry your brand into the world.",
    "Same cost as generic water, infinite ROI.",
  ];

  return (
    <section id="why-horeca" className="py-32 bg-zinc-950 relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Why <span className="text-blue-500">HORECA?</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-gray-400 max-w-3xl mx-auto font-light"
          >
            Every generic bottle you sell is a missed opportunity. Transform a mundane necessity into a powerful marketing asset.
          </motion.p>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 max-w-6xl mx-auto">
          {/* Pain Points */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex-1 w-full p-8 md:p-12 rounded-3xl border border-red-500/20 bg-red-500/5 backdrop-blur-sm"
          >
            <div className="flex items-center space-x-4 mb-8">
              <div className="w-12 h-12 rounded-full bg-red-500/10 flex items-center justify-center border border-red-500/20">
                <XCircle className="text-red-500 w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-gray-300">The Problem</h3>
            </div>
            
            <ul className="space-y-6">
              {painPoints.map((point, idx) => (
                <li key={idx} className="flex items-start space-x-4">
                  <span className="mt-1 min-w-[24px] text-red-500/80 font-bold">0{idx + 1}.</span>
                  <span className="text-gray-400 text-lg">{point}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* VS Divider */}
          <div className="hidden lg:flex flex-col items-center justify-center relative">
            <div className="w-[1px] h-32 bg-gradient-to-b from-transparent via-white/20 to-transparent absolute top-1/2 -translate-y-1/2" />
            <div className="w-12 h-12 rounded-full bg-black border border-white/10 flex items-center justify-center z-10 text-gray-500 font-bold text-sm tracking-widest shadow-[0_0_30px_rgba(255,255,255,0.05)]">
              VS
            </div>
          </div>

          {/* Solution */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex-1 w-full p-8 md:p-12 rounded-3xl border border-blue-500/30 bg-blue-500/10 backdrop-blur-sm relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-[80px]" />
            
            <div className="flex items-center space-x-4 mb-8 relative z-10">
              <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center border border-blue-500/30 shadow-[0_0_15px_rgba(59,130,246,0.3)]">
                <CheckCircle2 className="text-blue-400 w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-white">The Toyam Solution</h3>
            </div>
            
            <ul className="space-y-6 relative z-10">
              {solutions.map((point, idx) => (
                <li key={idx} className="flex items-start space-x-4">
                  <span className="mt-1 min-w-[24px] text-blue-400 font-bold">0{idx + 1}.</span>
                  <span className="text-gray-200 text-lg">{point}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10 pt-8 border-t border-blue-500/20 relative z-10 flex items-center justify-between">
              <div>
                <p className="text-sm text-blue-300 font-medium tracking-wide uppercase mb-1">Return on Investment</p>
                <p className="text-3xl font-bold text-white">Priceless</p>
              </div>
              <TrendingUp className="w-12 h-12 text-blue-500/50" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
