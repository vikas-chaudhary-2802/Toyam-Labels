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
    { name: "Process", id: "process" },
    { name: "Use Cases", id: "use-cases" },
    { name: "Why Toyam", id: "why-toyam" },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 border-b ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md border-gray-200 shadow-sm"
          : "bg-transparent border-transparent"
      }`}
    >
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center space-x-3 cursor-pointer group"
        >
          <div className="relative w-10 h-10 overflow-hidden flex-shrink-0">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/final_logo-01-removebg-preview-eQElW5BeA3cTGW2oNzg0pFV2Sm15IY.png"
              alt="Toyam Labels"
              fill
              className="object-contain transition-transform duration-500 group-hover:scale-110"
            />
          </div>
          <div className="flex flex-col items-center justify-center transition-all duration-500 group-hover:scale-105">
            <span 
              className={`text-[1.75rem] leading-none font-serif font-bold tracking-[0.05em] text-transparent bg-clip-text ${
                isScrolled
                  ? "bg-gradient-to-b from-gray-900 via-blue-900 to-black"
                  : "bg-gradient-to-b from-white via-[#c8e0f4] to-[#7ba7d5]"
              }`}
            >
              TOYAM
            </span>
            <div className="flex items-center justify-center w-full mt-1">
              <div className={`h-[1px] flex-grow ${isScrolled ? "bg-gradient-to-r from-transparent to-blue-900" : "bg-gradient-to-r from-transparent to-[#a6c8e6]"} opacity-60`}></div>
              <span className={`mx-2 text-[0.6rem] font-sans font-medium tracking-[0.3em] uppercase transition-colors duration-500 ${isScrolled ? "text-blue-900" : "text-[#a6c8e6]"}`}>
                LABELS
              </span>
              <div className={`h-[1px] flex-grow ${isScrolled ? "bg-gradient-to-l from-transparent to-blue-900" : "bg-gradient-to-l from-transparent to-[#a6c8e6]"} opacity-60`}></div>
            </div>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className={`text-sm font-medium tracking-wide transition-colors duration-300 ${
                isScrolled ? "text-gray-600 hover:text-black" : "text-gray-400 hover:text-white"
              }`}
            >
              {link.name}
            </button>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center space-x-4">
          <Link
            href="/faq"
            className={`px-6 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 hover:scale-105 inline-block ${
              isScrolled ? "bg-black text-white hover:bg-gray-800" : "bg-white text-black hover:bg-gray-200"
            }`}
          >
            FAQ
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className={isScrolled ? "md:hidden text-black" : "md:hidden text-white"}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-20 left-0 w-full bg-black/95 backdrop-blur-2xl border-b border-white/10 p-6 flex flex-col space-y-6 md:hidden"
          >
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-left text-lg text-gray-300 hover:text-white transition-colors duration-300"
              >
                {link.name}
              </button>
            ))}
            <Link
              href="/faq"
              onClick={() => setMobileMenuOpen(false)}
              className="px-6 py-3 rounded-full bg-white text-black font-semibold text-center w-full mt-4 block"
            >
              FAQ
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
