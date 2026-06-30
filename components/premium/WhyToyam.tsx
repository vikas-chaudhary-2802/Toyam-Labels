"use client";

import { motion } from "framer-motion";
import { DollarSign, Droplets, Factory, FastForward, Maximize, PaintBucket, BarChart } from "lucide-react";

export function WhyToyam() {
  const differentiators = [
    {
      title: "Same Price, More Branding",
      description: "Replace generic water with your branded bottles at zero extra cost.",
      icon: <DollarSign size={24} className="text-white" />,
    },
    {
      title: "Premium Water Quality",
      description: "Purified, mineral-rich water that matches your brand's high standards.",
      icon: <Droplets size={24} className="text-white" />,
    },
    {
      title: "Private-Label Manufacturing",
      description: "End-to-end production handled in our state-of-the-art facilities.",
      icon: <Factory size={24} className="text-white" />,
    },
    {
      title: "Delivery Within 7-10 Days",
      description: "Reliable logistics ensuring your venue is never out of stock.",
      icon: <FastForward size={24} className="text-white" />,
    },
    {
      title: "Scalable Distribution",
      description: "From 100 bottles for an event to 100,000 for a nationwide campaign.",
      icon: <Maximize size={24} className="text-white" />,
    },
    {
      title: "Custom Design",
      description: "In-house design team to create stunning, print-ready labels.",
      icon: <PaintBucket size={24} className="text-white" />,
    },
    {
      title: "Marketing Analytics",
      description: "Future-ready: Track scans, engagement, and ROI via smart labels.",
      icon: <BarChart size={24} className="text-white" />,
    },
  ];

  return (
    <section id="why-toyam" className="py-32 bg-transparent relative border-t border-white/5">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            The Toyam <span className="text-blue-500">Advantage</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-gray-400 max-w-2xl mx-auto font-light"
          >
            We don't just supply water. We build scalable branding infrastructure.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {differentiators.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/[0.02] border border-white/5 rounded-3xl p-8 hover:bg-white/[0.05] hover:border-white/10 transition-all duration-300 group"
            >
              <div className="w-14 h-14 rounded-2xl bg-blue-500/20 border border-blue-500/30 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-blue-500 transition-all duration-300">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
              <p className="text-gray-400 font-light text-sm leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
          
          {/* CTA Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: differentiators.length * 0.1 }}
            className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl p-8 flex flex-col items-start justify-between relative overflow-hidden group cursor-pointer"
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />
            <h3 className="text-2xl font-bold text-white mb-4 relative z-10">Ready to elevate your brand?</h3>
            <span className="inline-flex items-center text-white font-medium relative z-10 border-b border-white pb-1 group-hover:pr-4 transition-all duration-300">
              Get Started Now
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
