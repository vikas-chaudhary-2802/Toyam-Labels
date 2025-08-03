"use client"

import { useState, useEffect, useRef } from "react"
import Button from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Play } from "lucide-react"
import Image from "next/image"

interface AppleHeroProps {
  onPartnerClick: () => void
  onHowItWorksClick: () => void
}

export function AppleHero({ onPartnerClick, onHowItWorksClick }: AppleHeroProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setIsLoaded(true)

    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section
      ref={heroRef}
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-black text-white"
    >
      {/* Apple-style gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800" />

      {/* Subtle animated particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="text-center max-w-6xl mx-auto">
          {/* Apple-style badge */}
          <div
            className={`transition-all duration-1000 ${
              isLoaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            <Badge className="bg-white/10 text-white border-white/20 px-6 py-3 text-sm font-medium mb-8 backdrop-blur-xl">
              🇮🇳 Made in India
            </Badge>
          </div>

          {/* Apple-style headline */}
          <div className="space-y-6 mb-12">
            <h1
              className={`text-6xl md:text-8xl lg:text-9xl font-thin leading-none tracking-tight transition-all duration-1000 delay-200 ${
                isLoaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
            >
              India's First
            </h1>
            <h2
              className={`text-5xl md:text-7xl lg:text-8xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent transition-all duration-1000 delay-400 ${
                isLoaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
            >
              Free Branded Water
            </h2>
            <p
              className={`text-2xl md:text-3xl font-light text-gray-300 max-w-4xl mx-auto leading-relaxed transition-all duration-1000 delay-600 ${
                isLoaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
            >
              Revolutionary advertising that transforms hydration into high-impact brand visibility
            </p>
          </div>

          {/* Product showcase with Apple-style presentation */}
          <div
            className={`relative mb-16 transition-all duration-1000 delay-800 ${
              isLoaded ? "translate-y-0 opacity-100 scale-100" : "translate-y-8 opacity-0 scale-95"
            }`}
            style={{ transform: `translateY(${scrollY * 0.1}px)` }}
          >
            <div className="relative max-w-2xl mx-auto">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-08%20at%204.40.39%E2%80%AFPM-qVuYB5wHrO1pkLkfrHEGXpDz0JPUCo.png"
                alt="Free Toyam in action - Revolutionary hydration advertising"
                width={800}
                height={600}
                className="mx-auto rounded-3xl shadow-2xl"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-3xl" />
            </div>
          </div>

          {/* Apple-style CTA buttons */}
          <div
            className={`flex flex-col sm:flex-row gap-6 justify-center items-center transition-all duration-1000 delay-1000 ${
              isLoaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            <Button
              size="lg"
              onClick={onPartnerClick}
              className="bg-white text-black hover:bg-gray-100 text-lg px-12 py-6 rounded-full font-medium shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 group"
            >
              Start Your Campaign
              <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>

            <Button
              size="lg"
              variant="outline"
              onClick={onHowItWorksClick}
              className="border-2 border-white/30 text-white hover:bg-white/10 text-lg px-12 py-6 rounded-full font-medium backdrop-blur-xl transition-all duration-300 group bg-transparent"
            >
              <Play className="mr-3 h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
              Watch Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
