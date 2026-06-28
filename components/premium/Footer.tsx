"use client";

import Image from "next/image";
import Link from "next/link";
import { Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-zinc-950 border-t border-white/10 pt-24 pb-12 overflow-hidden relative">
      {/* Background elements */}
      <div className="absolute bottom-0 left-0 w-full h-[500px] bg-gradient-to-t from-blue-900/10 to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          
          {/* Brand Column */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3 cursor-pointer group" onClick={() => scrollToSection("hero")}>
              <div className="relative w-12 h-12 overflow-hidden">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/final_logo-01-removebg-preview-eQElW5BeA3cTGW2oNzg0pFV2Sm15IY.png"
                  alt="Toyam Labels"
                  fill
                  className="object-contain drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]"
                />
              </div>
              <span className="text-2xl font-medium tracking-wide text-white">
                Toyam Labels
              </span>
            </div>
            <p className="text-gray-400 font-light leading-relaxed">
              India's premier branded water infrastructure. Elevating hospitality brands and enabling massive scale offline ad campaigns.
            </p>
            <div className="flex items-center space-x-4 pt-2">
              <Link href="https://instagram.com/freetoyam" target="_blank" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all duration-300">
                <Instagram size={20} />
              </Link>
              <Link href="https://linkedin.com/company/free-toyam/" target="_blank" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all duration-300">
                <Linkedin size={20} />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-6 tracking-wide">Platform</h4>
            <ul className="space-y-4">
              {[
                { label: "HORECA Private Label", id: "models" },
                { label: "Brand Distribution", id: "models" },
                { label: "How It Works", id: "process" },
                { label: "Use Cases", id: "use-cases" },
                { label: "Why Toyam", id: "why-toyam" },
              ].map((link, idx) => (
                <li key={idx}>
                  <button 
                    onClick={() => scrollToSection(link.id)}
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-300 text-sm font-light flex items-center"
                  >
                    <span className="w-0 h-[1px] bg-blue-400 mr-0 transition-all duration-300 hover-target"></span>
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-white font-semibold mb-6 tracking-wide">Resources</h4>
            <ul className="space-y-4 text-sm font-light text-gray-400">
              <li><Link href="#" className="hover:text-blue-400 transition-colors">Partner Network</Link></li>
              <li><Link href="#" className="hover:text-blue-400 transition-colors">Case Studies</Link></li>
              <li><Link href="#" className="hover:text-blue-400 transition-colors">Pricing Guidelines</Link></li>
              <li><Link href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-blue-400 transition-colors">Terms of Service</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-6 tracking-wide">Contact Us</h4>
            <ul className="space-y-5 text-sm font-light text-gray-400">
              <li className="flex items-start space-x-3">
                <Mail size={18} className="text-blue-400 mt-0.5" />
                <a href="mailto:toyamlables@gmail.com" className="hover:text-white transition-colors">toyamlables@gmail.com</a>
              </li>
              <li className="flex items-start space-x-3">
                <Phone size={18} className="text-blue-400 mt-0.5" />
                <a href="tel:+919310935423" className="hover:text-white transition-colors">+91 93109 35423</a>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-blue-400 mt-0.5" />
                <span>Headquarters<br/>New Delhi, India</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between">
          <p className="text-gray-500 text-sm font-light mb-4 md:mb-0">
            © {new Date().getFullYear()} Free Toyam. All rights reserved.
          </p>
          <div className="flex items-center space-x-2 text-sm text-gray-500 font-light">
            <span>Made with</span>
            <span className="text-blue-500">💧</span>
            <span>in India</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
