"use client";

import { motion } from "framer-motion";
import { Building2, Target, ArrowRight } from "lucide-react";
import Link from "next/link";

export function BusinessModels() {
  const models = [
    {
      id: "horeca",
      title: "HORECA Private Label",
      subtitle: "Our Primary Focus",
      description:
        "We provide premium private-label water bottles to Hotels, Restaurants, and Cafés. Instead of buying generic brands, get your own branded water at the same cost.",
      benefits: [
        "Stronger brand identity",
        "Increased customer recall",
        "Premium positioning",
        "Organic offline marketing",
      ],
      icon: <Building2 size={40} className="text-white" />,
      gradient: "from-blue-600/20 to-transparent",
      border: "hover:border-blue-500/50",
      primary: true,
      href: "/horeca",
    },
    {
      id: "adtech",
      title: "Brand Distribution",
      subtitle: "Ad-Tech Model",
      description:
        "We help brands generate massive visibility by placing their branding on our water bottles and distributing them at high-footfall target locations.",
      benefits: [
        "Events & Conferences",
        "Colleges & Universities",
        "Malls & Metro Stations",
        "High-engagement targeting",
      ],
      icon: <Target size={40} className="text-white" />,
      gradient: "from-purple-600/20 to-transparent",
      border: "hover:border-purple-500/50",
      primary: false,
      href: "/brand-distribution",
    },
  ];

  return (
    <section id="models" className="py-32 bg-transparent relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
          >
            Two Powerful <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Models</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-gray-400 max-w-2xl mx-auto font-light"
          >
            Whether you want to elevate your hospitality brand or run high-impact offline ad campaigns, we have the infrastructure.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {models.map((model, index) => (
            <Link key={model.id} href={model.href} className="contents">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`relative group rounded-3xl p-6 md:p-10 border border-white/10 bg-white/5 backdrop-blur-md overflow-hidden transition-all duration-500 ${model.border} hover:shadow-[0_0_40px_rgba(255,255,255,0.05)] cursor-pointer`}
            >
              {/* Background Glow */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${model.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700`}
              />

              {model.primary && (
                <div className="absolute top-0 right-0 bg-blue-500 text-white text-xs font-bold px-4 py-1.5 rounded-bl-xl rounded-tr-3xl z-20 shadow-[0_0_20px_rgba(59,130,246,0.5)]">
                  PRIMARY FOCUS
                </div>
              )}

              <div className="relative z-10 flex flex-col h-full">
                <div className="w-20 h-20 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 backdrop-blur-sm">
                  {model.icon}
                </div>

                <h3 className="text-3xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all duration-300">
                  {model.title}
                </h3>
                <p className="text-sm font-semibold text-blue-400 mb-6 tracking-wider uppercase">
                  {model.subtitle}
                </p>
                <p className="text-gray-400 leading-relaxed mb-8 font-light text-lg">
                  {model.description}
                </p>

                <div className="mt-auto space-y-4">
                  {model.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center space-x-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                      <span className="text-gray-300">{benefit}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-12 flex items-center text-white font-medium group-hover:text-blue-400 transition-colors">
                  <span>Learn more</span>
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                </div>
              </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
