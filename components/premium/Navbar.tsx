"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navLinks = [
    { name: "Models", id: "models" },
    { name: "Why HORECA", id: "why-horeca" },
    { name: "Pricing", id: "pricing" },
  ];

  return (
    <header className={`fixed inset-x-0 z-50 flex justify-center pointer-events-none transition-all duration-500 ${isScrolled ? "top-6 px-4" : "top-0 px-0"}`}>
      <div 
        className={`pointer-events-auto w-full flex items-center justify-between relative transition-all duration-500 ${
          isScrolled 
            ? "max-w-6xl bg-white/95 backdrop-blur-xl border border-gray-200/50 shadow-[0_8px_32px_rgba(0,0,0,0.08)] rounded-full px-6 md:px-8 h-16" 
            : "max-w-none bg-transparent border-transparent shadow-none rounded-none px-6 md:px-12 h-24"
        }`}
      >
        {/* Logo (Left aligned) */}
        <div className="flex-1 flex justify-start">
          <Link
            href="/"
            className="flex items-center space-x-3 cursor-pointer group"
          >
            <div className="relative w-12 h-12 overflow-hidden flex-shrink-0">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/final_logo-01-removebg-preview-eQElW5BeA3cTGW2oNzg0pFV2Sm15IY.png"
                alt="Toyam Labels"
                fill
                priority
                className="object-contain transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div className="flex flex-col items-center justify-center transition-all duration-500 group-hover:scale-105">
              <span className={`text-[1.75rem] leading-none font-serif font-bold tracking-[0.05em] text-transparent bg-clip-text transition-colors duration-500 ${
                isScrolled ? "bg-gradient-to-b from-gray-900 via-blue-900 to-black" : "bg-gradient-to-b from-white via-[#c8e0f4] to-[#7ba7d5]"
              }`}>
                TOYAM
              </span>
              <div className="flex items-center justify-center w-full mt-1">
                <span className={`text-[0.6rem] font-sans font-medium tracking-[0.3em] uppercase transition-colors duration-500 ${
                  isScrolled ? "text-blue-900" : "text-[#a6c8e6]"
                }`}>
                  LABELS
                </span>
              </div>
            </div>
          </Link>
        </div>

        {/* Desktop Nav (Perfectly Centered) */}
        <nav className="hidden md:flex items-center justify-center space-x-8 absolute left-1/2 -translate-x-1/2">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className={`text-sm font-semibold tracking-wide transition-colors duration-300 ${
                isScrolled ? "text-gray-700 hover:text-black" : "text-gray-300 hover:text-white"
              }`}
            >
              {link.name}
            </button>
          ))}
        </nav>

        {/* CTA (Right aligned) */}
        <div className="hidden md:flex items-center justify-end space-x-4 flex-1">
          <Link
            href="/faq"
            className={`px-6 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 ${
              isScrolled ? "hover:bg-gray-100 text-gray-700" : "hover:bg-white/10 text-white"
            }`}
          >
            FAQ
          </Link>
          <button
            onClick={() => scrollToSection('contact')}
            className="px-6 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 hover:scale-105 inline-block shadow-lg shadow-blue-500/30 relative overflow-hidden group bg-blue-600 text-white hover:bg-blue-700"
          >
            <span className="relative z-10 flex items-center space-x-2">
              <span className="flex h-2 w-2 rounded-full bg-white animate-pulse"></span>
              <span>Get Quote</span>
            </span>
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex-1 flex justify-end">
          <button
            className={`transition-colors duration-300 ${isScrolled ? "text-gray-900" : "text-white"}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            className={`pointer-events-auto absolute left-4 right-4 bg-white/95 backdrop-blur-2xl border border-gray-200/50 shadow-2xl p-6 flex flex-col space-y-6 md:hidden rounded-3xl transition-all duration-500 ${isScrolled ? "top-24" : "top-28"}`}
          >
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-left text-lg font-semibold text-gray-800 hover:text-black transition-colors duration-300"
              >
                {link.name}
              </button>
            ))}
            <div className="pt-4 border-t border-gray-200/50 flex flex-col space-y-3">
              <Link
                href="/faq"
                onClick={() => setMobileMenuOpen(false)}
                className="px-6 py-3 rounded-full bg-gray-100 text-gray-800 font-semibold text-center w-full"
              >
                FAQ
              </Link>
              <button
                onClick={() => scrollToSection('contact')}
                className="px-6 py-3 rounded-full bg-blue-600 text-white hover:bg-blue-700 font-semibold text-center w-full shadow-lg shadow-blue-500/30 flex items-center justify-center space-x-2"
              >
                <span className="flex h-2 w-2 rounded-full bg-white animate-pulse"></span>
                <span>Get Quote</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
