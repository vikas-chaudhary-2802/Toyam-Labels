"use client"

import { useState, useEffect, useRef } from "react"
import Button from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Play, Zap } from "lucide-react"
import Image from "next/image"

interface AdvancedHeroProps {
  onPartnerClick: () => void
  onHowItWorksClick: () => void
}

export function AdvancedHero({ onPartnerClick, onHowItWorksClick }: AdvancedHeroProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isLoaded, setIsLoaded] = useState(false)
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setIsLoaded(true)

    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect()
        setMousePosition({
          x: (e.clientX - rect.left) / rect.width,
          y: (e.clientY - rect.top) / rect.height,
        })
      }
    }

    const hero = heroRef.current
    if (hero) {
      hero.addEventListener("mousemove", handleMouseMove)
      return () => hero.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return (
    <section
      ref={heroRef}
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100"
    >
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute w-96 h-96 bg-blue-400/20 rounded-full blur-3xl transition-transform duration-1000 ease-out"
          style={{
            transform: `translate(${mousePosition.x * 50}px, ${mousePosition.y * 50}px)`,
            left: "10%",
            top: "20%",
          }}
        />
        <div
          className="absolute w-96 h-96 bg-purple-400/20 rounded-full blur-3xl transition-transform duration-1000 ease-out"
          style={{
            transform: `translate(${mousePosition.x * -30}px, ${mousePosition.y * -30}px)`,
            right: "10%",
            top: "40%",
          }}
        />
        <div
          className="absolute w-96 h-96 bg-cyan-400/20 rounded-full blur-3xl transition-transform duration-1000 ease-out"
          style={{
            transform: `translate(${mousePosition.x * 40}px, ${mousePosition.y * -40}px)`,
            left: "50%",
            bottom: "20%",
          }}
        />
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <Badge
                className={`bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-800 border-0 px-6 py-3 text-sm font-semibold transition-all duration-1000 ${
                  isLoaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                }`}
              >
                🇮🇳 Proudly Made in India
              </Badge>

              <h1 className="text-6xl lg:text-8xl font-black leading-tight">
                <span
                  className={`block text-gray-900 transition-all duration-1000 delay-200 ${
                    isLoaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                  }`}
                >
                  India's First
                </span>
                <span
                  className={`block bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent transition-all duration-1000 delay-400 ${
                    isLoaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                  }`}
                >
                  Free Branded
                </span>
                <span
                  className={`block text-gray-900 transition-all duration-1000 delay-600 ${
                    isLoaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                  }`}
                >
                  Water Bottles
                </span>
              </h1>

              <p
                className={`text-2xl text-gray-600 leading-relaxed font-medium max-w-2xl transition-all duration-1000 delay-800 ${
                  isLoaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                }`}
              >
                Revolutionary advertising that transforms <span className="text-blue-600 font-bold">hydration</span>{" "}
                into <span className="text-purple-600 font-bold">high-impact brand visibility</span>
              </p>
            </div>

            <div
              className={`flex flex-col sm:flex-row gap-6 transition-all duration-1000 delay-1000 ${
                isLoaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
            >
              <Button
                size="lg"
                onClick={onPartnerClick}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-xl px-10 py-6 shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 group"
              >
                <Zap className="mr-3 h-6 w-6 group-hover:animate-pulse" />
                Start Your Campaign
                <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>

              <Button
                size="lg"
                variant="outline"
                onClick={onHowItWorksClick}
                className="text-xl px-10 py-6 border-2 border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400 transition-all duration-300 group bg-white/80 backdrop-blur-sm"
              >
                <Play className="mr-3 h-6 w-6 group-hover:scale-110 transition-transform duration-300" />
                See How It Works
              </Button>
            </div>
          </div>

          {/* Right Content - Product Showcase */}
          <div className="relative">
            <div
              className={`relative z-10 transition-all duration-1000 delay-1200 ${
                isLoaded ? "translate-y-0 opacity-100 scale-100" : "translate-y-8 opacity-0 scale-95"
              }`}
            >
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Copilot_20250722_135211.jpg-AtgzQARP4xjzVjXaUIWV7S2Z8vO3RM.jpeg"
                alt="Free Toyam branded water bottle"
                width={600}
                height={700}
                className="mx-auto drop-shadow-2xl transform hover:scale-105 transition-transform duration-500"
                priority
              />
            </div>

            {/* Floating Testimonial Cards */}
            <div
              className={`absolute -top-10 -left-10 bg-white/90 backdrop-blur-md rounded-2xl p-4 shadow-xl border border-white/20 transition-all duration-1000 delay-1400 ${
                isLoaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
              style={{
                transform: `translateY(${Math.sin(Date.now() / 3000) * 10}px)`,
              }}
            >
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-08%20at%205.02.43%E2%80%AFPM-aREzeTp5Bzm3w7c6MHkDzqnDGZYBaO.png"
                alt="Happy customer with Free Toyam"
                width={100}
                height={120}
                className="rounded-xl"
              />
            </div>

            <div
              className={`absolute -bottom-10 -right-10 bg-white/90 backdrop-blur-md rounded-2xl p-4 shadow-xl border border-white/20 transition-all duration-1000 delay-1600 ${
                isLoaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
              style={{
                transform: `translateY(${Math.sin(Date.now() / 3000 + Math.PI) * 10}px)`,
              }}
            >
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-08%20at%205.01.58%E2%80%AFPM-D8nBmU6prWp3pQDWZ7KYAozojPFyDt.png"
                alt="Satisfied customer"
                width={100}
                height={120}
                className="rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
