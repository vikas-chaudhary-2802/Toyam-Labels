"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    const form = e.currentTarget;

    const formData = new FormData(form);
    formData.append("access_key", "38ac5693-59a8-4c11-80ec-22a00b12f5d4");
    formData.append("subject", "New Lead from Toyam Labels Website");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json,
      });

      const data = await response.json();

      if (response.status === 200) {
        setIsSuccess(true);
        form.reset();
        setTimeout(() => setIsSuccess(false), 5000);
      } else {
        console.error("Form submission failed:", data);
        alert(data.message || "Something went wrong. Please try again.");
      }
    } catch (error: any) {
      console.error("Form submission error:", error);
      alert(`Network Error: ${error.message || "Please check your connection and try again."}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-transparent relative">
      {/* Abstract Background */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[150px] pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          
          {/* Left Side: Copy */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Ready to dominate <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                  offline spaces?
                </span>
              </h2>
              <p className="text-xl text-gray-400 font-light mb-10">
                Whether you're upgrading your hospitality brand or launching a massive ad campaign, we're ready to partner with you.
              </p>

              <div className="space-y-6">
                {[
                  "Dedicated Account Manager",
                  "In-house Design Support",
                  "Fastest Turnaround Times",
                  "Enterprise-grade Quality"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center space-x-4">
                    <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-blue-500" />
                    </div>
                    <span className="text-gray-300 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Side: Form */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white/[0.03] border border-white/10 rounded-[2rem] p-8 md:p-10 backdrop-blur-xl relative"
          >
            {isSuccess ? (
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8 bg-black/80 backdrop-blur-md rounded-[2rem] z-20">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, damping: 20 }}
                >
                  <CheckCircle2 className="w-20 h-20 text-green-500 mb-6" />
                </motion.div>
                <h3 className="text-2xl font-bold text-white mb-2">Request Received!</h3>
                <p className="text-gray-400">Our enterprise team will contact you within 24 hours.</p>
              </div>
            ) : null}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-400 ml-1">Business Name</label>
                  <input
                    type="text"
                    name="business_name"
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:bg-white/10 transition-all"
                    placeholder="Acme Corp"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-400 ml-1">Category</label>
                  <select
                    name="category"
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:bg-white/10 transition-all appearance-none"
                  >
                    <option value="" className="bg-zinc-900 text-gray-500">Select Category</option>
                    <option value="horeca" className="bg-zinc-900">HORECA (Hotel/Restaurant/Cafe)</option>
                    <option value="brand" className="bg-zinc-900">Brand/Corporate</option>
                    <option value="event" className="bg-zinc-900">Event Organizer</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-400 ml-1">Location / City</label>
                  <input
                    type="text"
                    name="location"
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:bg-white/10 transition-all"
                    placeholder="Delhi NCR"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-400 ml-1">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:bg-white/10 transition-all"
                    placeholder="+91 99999 99999"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-400 ml-1">Monthly Bottle Requirement</label>
                <select
                  name="volume"
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:bg-white/10 transition-all appearance-none"
                >
                  <option value="" className="bg-zinc-900 text-gray-500">Select Volume</option>
                  <option value="1k-5k" className="bg-zinc-900">1,000 - 5,000</option>
                  <option value="5k-20k" className="bg-zinc-900">5,000 - 20,000</option>
                  <option value="20k+" className="bg-zinc-900">20,000+</option>
                </select>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-lg rounded-xl py-4 flex items-center justify-center space-x-2 hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed mt-4"
              >
                <span>{isSubmitting ? "Submitting..." : "Start Branding Your Bottles"}</span>
                {!isSubmitting && <Send size={20} className="ml-2" />}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
