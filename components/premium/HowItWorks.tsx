"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Droplet, Upload, Printer, Truck, Handshake, PenTool, Crosshair, Map } from "lucide-react";

export function HowItWorks() {
  const [activeTab, setActiveTab] = useState<"horeca" | "adtech">("horeca");

  const processes = {
    horeca: [
      {
        title: "Choose Bottle Size",
        description: "Select from our range of premium bottle designs and sizes (250ml, 500ml, 1L).",
        icon: <Droplet size={24} className="text-blue-400" />,
      },
      {
        title: "Upload Branding",
        description: "Submit your logo and brand guidelines. Our design team creates a premium label mockup.",
        icon: <Upload size={24} className="text-blue-400" />,
      },
      {
        title: "Print Labels",
        description: "High-quality, water-resistant printing ensures your brand looks perfect in any environment.",
        icon: <Printer size={24} className="text-blue-400" />,
      },
      {
        title: "Deliver Bottles",
        description: "Fast, reliable delivery straight to your venue, ready to serve your guests.",
        icon: <Truck size={24} className="text-blue-400" />,
      },
    ],
    adtech: [
      {
        title: "Brand Collaboration",
        description: "We align with your marketing goals, KPIs, and campaign duration.",
        icon: <Handshake size={24} className="text-purple-400" />,
      },
      {
        title: "Design Campaign",
        description: "Create eye-catching labels optimized for scanning, engagement, and brand recall.",
        icon: <PenTool size={24} className="text-purple-400" />,
      },
      {
        title: "Target Selection",
        description: "Identify high-footfall locations that perfectly match your target demographic.",
        icon: <Crosshair size={24} className="text-purple-400" />,
      },
      {
        title: "Distribution",
        description: "Deploy bottles across our network of events, campuses, and corporate hubs.",
        icon: <Map size={24} className="text-purple-400" />,
      },
    ],
  };

  return (
    <section id="process" className="py-32 bg-transparent relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            How It <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-500">Works</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-gray-400 max-w-2xl mx-auto font-light mb-12"
          >
            A seamless, end-to-end process designed for scale and premium quality.
          </motion.p>

          {/* Toggle */}
          <div className="inline-flex bg-white/5 border border-white/10 rounded-full p-1.5 backdrop-blur-md">
            <button
              onClick={() => setActiveTab("horeca")}
              className={`px-8 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                activeTab === "horeca"
                  ? "bg-blue-600 text-white shadow-lg"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              HORECA Private Label
            </button>
            <button
              onClick={() => setActiveTab("adtech")}
              className={`px-8 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                activeTab === "adtech"
                  ? "bg-purple-600 text-white shadow-lg"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              Brand Distribution
            </button>
          </div>
        </div>

        <div className="max-w-5xl mx-auto mt-20">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="grid md:grid-cols-4 gap-8 relative"
            >
              {/* Connecting Line (Desktop) */}
              <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />

              {processes[activeTab].map((step, index) => (
                <div key={index} className="relative flex flex-col items-center text-center group">
                  <div className={`w-24 h-24 rounded-2xl flex items-center justify-center mb-6 relative z-10 transition-transform duration-500 group-hover:-translate-y-2 border ${activeTab === 'horeca' ? 'bg-blue-900/20 border-blue-500/30 shadow-[0_0_20px_rgba(59,130,246,0.1)] group-hover:border-blue-400/50' : 'bg-purple-900/20 border-purple-500/30 shadow-[0_0_20px_rgba(168,85,247,0.1)] group-hover:border-purple-400/50'}`}>
                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl" />
                    {step.icon}
                    
                    {/* Step Number Badge */}
                    <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-black border border-white/20 flex items-center justify-center text-xs font-bold text-white">
                      {index + 1}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-gray-200 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-gray-400 font-light text-sm leading-relaxed max-w-[200px]">
                    {step.description}
                  </p>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
