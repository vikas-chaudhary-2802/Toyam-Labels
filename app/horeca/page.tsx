"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Star, TrendingUp, ShieldCheck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function HorecaPage() {
  return (
    <div className="min-h-screen bg-black pt-20">
      {/* Cinematic Hero */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=2000")' }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-block px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-bold tracking-widest uppercase mb-6"
          >
            HORECA Private Label
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6"
          >
            Elevate Your <span className="text-blue-500">Venue.</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-300 max-w-2xl mx-auto font-light"
          >
            Stop advertising generic brands on your tables. Serve premium, private-label water that reflects the luxury of your establishment.
          </motion.p>
        </div>
      </section>

      {/* Trust & Quality Section */}
      <section className="py-24 bg-zinc-950 border-t border-white/10">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto bg-blue-500/10 rounded-full flex items-center justify-center border border-blue-500/20 mb-6">
                <ShieldCheck className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Premium Purity</h3>
              <p className="text-gray-400 font-light">Highest quality filtration and mineralization process ensuring a crisp, refreshing taste.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto bg-blue-500/10 rounded-full flex items-center justify-center border border-blue-500/20 mb-6">
                <Star className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Luxury Packaging</h3>
              <p className="text-gray-400 font-light">High-grade, BPA-free bottles with water-resistant, ultra-HD printed labels.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto bg-blue-500/10 rounded-full flex items-center justify-center border border-blue-500/20 mb-6">
                <TrendingUp className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Infinite ROI</h3>
              <p className="text-gray-400 font-light">Pay the exact same price as generic water, but gain thousands of brand impressions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* The Gallery */}
      <section className="py-32 bg-black relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">See It In <span className="text-blue-500">Action</span></h2>
            <p className="text-xl text-gray-400 font-light max-w-2xl mx-auto">
              Trusted by the finest restaurants, cafes, and luxury hotels across the country.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {/* Gallery Image 1 */}
            <div className="relative h-80 rounded-2xl overflow-hidden group">
              <Image src="/IMG-20250221-WA0025.jpg" alt="HORECA Showcase" fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white font-semibold">Premium Dining</span>
              </div>
            </div>
            
            {/* Gallery Image 2 */}
            <div className="relative h-80 rounded-2xl overflow-hidden group">
              <Image src="/custom-bottle.jpeg" alt="Bottle Mockup" fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white font-semibold">Custom Labels</span>
              </div>
            </div>

            {/* Gallery Image 3 */}
            <div className="relative h-80 rounded-2xl overflow-hidden group">
              <Image src="https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=800" alt="Cafe Setting" fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white font-semibold">Cafe Experience</span>
              </div>
            </div>

             {/* Gallery Image 4 */}
             <div className="relative h-80 rounded-2xl overflow-hidden group lg:col-span-2">
              <Image src="https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&q=80&w=1200" alt="Hotel Room" fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white font-semibold">Luxury Hotels</span>
              </div>
            </div>

            {/* Gallery Image 5 */}
            <div className="relative h-80 rounded-2xl overflow-hidden group">
              <Image src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=1200" alt="Event Setup" fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white font-semibold">Weddings & Events</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-gradient-to-br from-zinc-900 to-black border-t border-white/10 text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-white mb-8">Ready to upgrade your water?</h2>
          <Link href="/#contact" className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-full transition-all duration-300 hover:scale-105 shadow-[0_0_20px_rgba(37,99,235,0.4)]">
            Start Your Custom Order
          </Link>
        </div>
      </section>
    </div>
  );
}
