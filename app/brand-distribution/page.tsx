"use client";

import { motion } from "framer-motion";
import { Map, Users, BarChart3, Target } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function BrandDistributionPage() {
  return (
    <div className="min-h-screen bg-black pt-20">
      {/* High-Energy Hero */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1459749411175-04bf5292ceea?auto=format&fit=crop&q=80&w=2000")' }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-block px-4 py-1.5 rounded-full bg-purple-500/20 backdrop-blur-md border border-purple-500/30 text-purple-200 text-sm font-bold tracking-widest uppercase mb-6"
          >
            Brand Distribution
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
          >
            Own The <span className="text-purple-500">Crowd.</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-300 max-w-2xl mx-auto font-light"
          >
            Massive offline reach. We place your brand in the hands of thousands at high-footfall events, campuses, and tech hubs.
          </motion.p>
        </div>
      </section>

      {/* Network & Reach */}
      <section className="py-24 bg-zinc-950 border-t border-white/10">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 text-center hover:bg-white/10 transition-colors">
              <Map className="w-10 h-10 text-purple-400 mx-auto mb-4" />
              <h3 className="text-3xl font-bold text-white mb-2">50+</h3>
              <p className="text-gray-400 text-sm">Cities Covered</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 text-center hover:bg-white/10 transition-colors">
              <Users className="w-10 h-10 text-purple-400 mx-auto mb-4" />
              <h3 className="text-3xl font-bold text-white mb-2">2M+</h3>
              <p className="text-gray-400 text-sm">Monthly Reach</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 text-center hover:bg-white/10 transition-colors">
              <Target className="w-10 h-10 text-purple-400 mx-auto mb-4" />
              <h3 className="text-3xl font-bold text-white mb-2">Hyper-Local</h3>
              <p className="text-gray-400 text-sm">Targeting Precision</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 text-center hover:bg-white/10 transition-colors">
              <BarChart3 className="w-10 h-10 text-purple-400 mx-auto mb-4" />
              <h3 className="text-3xl font-bold text-white mb-2">Live</h3>
              <p className="text-gray-400 text-sm">Campaign Analytics</p>
            </div>
          </div>
        </div>
      </section>

      {/* Campaign Showcase */}
      <section className="py-32 bg-black relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Campaign <span className="text-purple-500">Showcase</span></h2>
            <p className="text-xl text-gray-400 font-light max-w-2xl mx-auto">
              Real campaigns delivering real impact. Browse our past distributions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
             {/* Showcase 1 */}
             <div className="relative h-96 rounded-[2rem] overflow-hidden group">
              <Image src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=1200" alt="Tech Conference" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-8">
                <span className="text-purple-400 text-sm font-bold tracking-wider mb-2 block">B2B TECH</span>
                <h3 className="text-2xl font-bold text-white mb-2">Startup Summit 2024</h3>
                <p className="text-gray-300 font-light">10,000 bottles distributed to founders and investors.</p>
              </div>
            </div>

            {/* Showcase 2 */}
            <div className="relative h-96 rounded-[2rem] overflow-hidden group">
              <Image src="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&q=80&w=1200" alt="College Fest" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-8">
                <span className="text-purple-400 text-sm font-bold tracking-wider mb-2 block">GEN-Z REACH</span>
                <h3 className="text-2xl font-bold text-white mb-2">Campus Festivals</h3>
                <p className="text-gray-300 font-light">High-energy engagement across top tier universities.</p>
              </div>
            </div>

            {/* Showcase 3 */}
            <div className="relative h-96 rounded-[2rem] overflow-hidden group">
              <Image src="https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&q=80&w=1200" alt="Music Festival" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-8">
                <span className="text-purple-400 text-sm font-bold tracking-wider mb-2 block">MASS VOLUME</span>
                <h3 className="text-2xl font-bold text-white mb-2">Music Festivals</h3>
                <p className="text-gray-300 font-light">50,000+ bottles keeping fans hydrated and engaged.</p>
              </div>
            </div>

            {/* Showcase 4 */}
            <div className="relative h-96 rounded-[2rem] overflow-hidden group">
              <Image src="/Copilot_20250722_135211.jpg" alt="Corporate" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-8">
                <span className="text-purple-400 text-sm font-bold tracking-wider mb-2 block">CORPORATE</span>
                <h3 className="text-2xl font-bold text-white mb-2">Tech Parks & Hubs</h3>
                <p className="text-gray-300 font-light">Targeting young professionals during their daily commute.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-gradient-to-br from-zinc-900 to-black border-t border-white/10 text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-white mb-8">Launch your next campaign</h2>
          <Link href="/#contact" className="inline-flex items-center justify-center px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-full transition-all duration-300 hover:scale-105 shadow-[0_0_20px_rgba(168,85,247,0.4)]">
            Schedule a Strategy Call
          </Link>
        </div>
      </section>
    </div>
  );
}
