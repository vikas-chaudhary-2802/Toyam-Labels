"use client";

import { motion } from "framer-motion";
import { Check, Info } from "lucide-react";
import Image from "next/image";

export function Pricing() {
  const plans = [
    {
      name: "500 ml Customized",
      price: "₹8.50",
      description: "Perfect for events, cafes, and quick refreshments.",
      image: "/500ml-bottle.png",
      features: [
        "Custom branded label",
        "High-quality PET bottle",
        "Purified mineral water",
        "Perfect portion size"
      ],
      isPopular: false,
    },
    {
      name: "1 Liter Standard",
      price: "₹14.00",
      description: "Ideal for hotel rooms, fine dining, and corporate gifting.",
      image: "/normal-1l.png",
      features: [
        "Custom branded label",
        "Standard PET bottle",
        "Purified mineral water",
        "Excellent value"
      ],
      isPopular: true,
    },
    {
      name: "1 Liter Premium",
      price: "₹20.00",
      description: "The ultimate luxury statement for high-end hospitality.",
      image: "/premium-1l.png",
      features: [
        "Premium textured label",
        "Heavyweight crystal-clear PET",
        "Purified mineral water",
        "Luxury aesthetic"
      ],
      isPopular: false,
    },
  ];

  return (
    <section id="pricing" className="py-20 md:py-32 bg-[#01040f] relative overflow-hidden border-t border-white/5">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-6 backdrop-blur-md"
          >
            <span className="text-sm font-medium text-gray-300">
              Transparent Pricing
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Invest in Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Brand</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-gray-400 max-w-2xl mx-auto font-light"
          >
            Premium custom-labelled water designed to elevate your customer experience.
          </motion.p>
        </div>

        {/* MOQ Banner */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto bg-blue-900/20 border border-blue-500/30 rounded-2xl p-6 mb-16 flex flex-col md:flex-row items-center justify-between backdrop-blur-md"
        >
          <div className="flex items-center space-x-4 mb-4 md:mb-0">
            <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0">
              <Info className="w-6 h-6 text-blue-400" />
            </div>
            <div>
              <h4 className="text-white font-semibold text-lg">Minimum Order Quantity (MOQ)</h4>
              <p className="text-gray-400 text-sm">To ensure the best pricing and manufacturing efficiency.</p>
            </div>
          </div>
          <div className="text-3xl font-bold text-white bg-white/10 px-6 py-3 rounded-xl border border-white/5">
            200 Boxes
          </div>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative bg-white/[0.02] border rounded-3xl p-8 flex flex-col backdrop-blur-sm transition-all duration-300 hover:bg-white/[0.04] ${
                plan.isPopular 
                  ? "border-blue-500/50 shadow-[0_0_30px_rgba(59,130,246,0.15)]" 
                  : "border-white/10 hover:border-white/20"
              }`}
            >
              {plan.isPopular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">
                  Most Popular
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-gray-400 text-sm min-h-[40px]">{plan.description}</p>
              </div>

              <div className="mb-8">
                <div className="flex items-baseline text-white">
                  <span className="text-5xl font-extrabold tracking-tight">{plan.price}</span>
                  <span className="text-gray-400 ml-2 font-medium">/ bottle</span>
                </div>
              </div>

              {/* Bottle Image */}
              <div className="w-full h-64 flex items-center justify-center mb-8 relative group">
                <Image 
                  src={plan.image} 
                  alt={plan.name} 
                  fill 
                  className="object-contain p-2 group-hover:scale-105 transition-transform duration-500 drop-shadow-xl" 
                />
              </div>

              <ul className="space-y-4 mb-8 flex-1">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start text-gray-300 text-sm">
                    <Check className="w-5 h-5 text-blue-400 mr-3 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button 
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                className={`w-full py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center space-x-2 ${
                  plan.isPopular
                    ? "bg-white text-black hover:bg-gray-200"
                    : "bg-white/10 text-white hover:bg-white/20"
                }`}
              >
                <span>Get a Quote</span>
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
