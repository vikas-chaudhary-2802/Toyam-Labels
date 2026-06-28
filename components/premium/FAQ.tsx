"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    category: "For HORECA (Hotels, Restaurants, Cafés)",
    questions: [
      {
        q: "What is the HORECA Private Label model?",
        a: "We provide premium, custom-branded water bottles specifically designed for your hospitality venue. Instead of selling generic brands, you serve water featuring your own logo and identity at the exact same or lower cost.",
      },
      {
        q: "Is there a minimum order quantity (MOQ)?",
        a: "Our MOQs are highly competitive and tailored to your venue's capacity. We offer flexible plans that scale whether you run a single boutique café or a nationwide hotel chain.",
      },
      {
        q: "How does the pricing compare to standard water brands?",
        a: "Because we own the supply chain, we provide premium private-label water at cost-parity with standard wholesale water brands. You get the branding upgrade for free.",
      },
      {
        q: "Can we design the bottle label ourselves?",
        a: "Absolutely! You can provide your own artwork, or our in-house design team can craft a premium, minimalist label that perfectly matches your brand's aesthetic at no extra cost.",
      },
    ],
  },
  {
    category: "For Ad-Tech / Brand Distribution",
    questions: [
      {
        q: "How does the Ad-Tech model work?",
        a: "We transform water bottles into mobile billboards. Brands sponsor the bottles, and we distribute them for free (or heavily subsidized) at high-footfall locations like colleges, malls, and corporate events, giving the brand massive offline visibility.",
      },
      {
        q: "Where do you distribute the sponsored bottles?",
        a: "We have an extensive network of distribution partners including major universities, tech parks, music festivals, metro stations, and corporate summits. We can target distribution based on your ideal customer demographic.",
      },
      {
        q: "How do we measure the ROI of offline bottle ads?",
        a: "Every label can be equipped with dynamic QR codes, NFC tags, or unique promo codes. This allows you to track offline-to-online conversions, website traffic, and direct sales generated from the campaign in real-time.",
      },
      {
        q: "What is the minimum campaign size for brand distribution?",
        a: "Campaigns typically start at 10,000 bottles for hyper-local targeting, but can scale up to millions for nationwide brand-awareness blasts.",
      },
    ],
  },
  {
    category: "Quality & Sustainability",
    questions: [
      {
        q: "What is the quality of the water?",
        a: "We source our water from premium natural springs and purify it through an advanced 7-stage filtration process, including RO, UV, and Ozonation, ensuring it meets the highest global safety and taste standards.",
      },
      {
        q: "Are the bottles eco-friendly?",
        a: "Sustainability is our core focus. We offer 100% recyclable PET bottles, and we are aggressively expanding our line of biodegradable and aluminum can options to eliminate single-use plastic waste.",
      },
    ]
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<string | null>("0-0");

  const toggleFaq = (index: string) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-32 bg-transparent relative border-t border-white/5">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
          >
            Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Questions</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-gray-400 max-w-2xl mx-auto font-light"
          >
            Everything you need to know about our business models, pricing, and distribution.
          </motion.p>
        </div>

        <div className="max-w-4xl mx-auto space-y-12">
          {faqs.map((category, catIndex) => (
            <div key={catIndex}>
              <motion.h3 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-2xl font-semibold text-white mb-6 flex items-center"
              >
                <span className="w-8 h-[1px] bg-blue-500 mr-4"></span>
                {category.category}
              </motion.h3>
              
              <div className="space-y-4">
                {category.questions.map((faq, qIndex) => {
                  const index = `${catIndex}-${qIndex}`;
                  const isOpen = openIndex === index;

                  return (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: qIndex * 0.1 }}
                      key={index}
                      className={`border border-white/10 rounded-2xl overflow-hidden transition-colors duration-300 ${
                        isOpen ? "bg-white/10" : "bg-white/5 hover:bg-white/10"
                      } backdrop-blur-sm`}
                    >
                      <button
                        onClick={() => toggleFaq(index)}
                        className="w-full text-left px-6 py-6 flex items-center justify-between focus:outline-none"
                      >
                        <span className={`text-lg font-medium transition-colors ${isOpen ? "text-blue-400" : "text-gray-200"}`}>
                          {faq.q}
                        </span>
                        <div className={`flex-shrink-0 ml-4 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${isOpen ? "bg-blue-500/20 text-blue-400" : "bg-white/10 text-gray-400"}`}>
                          {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                        </div>
                      </button>

                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                          >
                            <div className="px-6 pb-6 text-gray-400 leading-relaxed font-light border-t border-white/5 pt-4">
                              {faq.a}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
