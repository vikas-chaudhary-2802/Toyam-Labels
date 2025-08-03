"use client"

import { useState, useEffect, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { Palette, CheckCircle, ArrowRight } from "lucide-react"
import Button from "@/components/ui/button"

interface BottleOption {
  id: string
  name: string
  src: string
  alt: string
  description: string
}

const bottleOptions: BottleOption[] = [
  {
    id: "standard",
    name: "Standard PET Bottle",
    src: "/Copilot_20250722_135211.jpg", // Updated image
    alt: "Standard PET Bottle Mockup",
    description: "Our classic, durable PET bottle for wide distribution.",
  },
  {
    id: "tetra-pak",
    name: "Eco-Friendly Tetra Pak",
    src: "/Screenshot 2025-08-03 at 12.51.20 PM.png", // Updated image
    alt: "Tetra Pak Bottle Mockup",
    description: "Sustainable and recyclable Tetra Pak for eco-conscious branding.",
  },
  // Add more options if needed
]

export function DesignPreview() {
  const [isVisible, setIsVisible] = useState(false)
  const [selectedBottle, setSelectedBottle] = useState(bottleOptions[0])
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-32 px-6 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto max-w-7xl">
        <div
          className={`text-center mb-20 transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <Badge className="bg-blue-100 text-blue-800 px-6 py-3 text-sm font-semibold mb-8 rounded-full">
            <Palette className="mr-2 h-4 w-4" />
            Design Your Impact
          </Badge>
          <h2 className="text-6xl md:text-7xl font-thin text-gray-900 mb-8 tracking-tight">See your brand,</h2>
          <h3 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-8">
            on our bottles
          </h3>
          <p className="text-2xl text-gray-600 max-w-4xl mx-auto font-light leading-relaxed">
            Visualize your custom designs on our range of bottles, including eco-friendly Tetra Pak options, and make
            your brand stand out.
          </p>
        </div>

        <Card
          className={`bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-gray-100 transition-all duration-1000 delay-300 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <CardContent className="space-y-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Bottle Preview */}
              <div className="relative h-96 w-full flex items-center justify-center bg-gray-100 rounded-2xl overflow-hidden shadow-inner">
                <Image
                  src={"/IMG-20250221-WA0025.jpg"} // Updated main image
                  alt={selectedBottle.alt}
                  width={400}
                  height={500}
                  className="object-contain drop-shadow-xl"
                />
              </div>

              {/* Design Options */}
              <div className="space-y-6">
                <h4 className="text-2xl font-bold text-gray-900">Choose Your Bottle Type</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {bottleOptions.map((option) => (
                    <button
                      key={option.id}
                      onClick={() => setSelectedBottle(option)}
                      className={`flex flex-col items-center p-6 rounded-xl border-2 transition-all duration-300 ${
                        selectedBottle.id === option.id
                          ? "border-blue-600 bg-blue-50 shadow-lg"
                          : "border-gray-200 bg-white hover:border-gray-300 hover:bg-gray-50"
                      }`}
                    >
                      <Image
                        src={option.src || "/placeholder.svg"}
                        alt={option.alt}
                        width={80}
                        height={100}
                        className="mb-4 object-contain"
                      />
                      <span className="font-semibold text-gray-900 text-center mb-1">{option.name}</span>
                      <p className="text-sm text-gray-600 text-center">{option.description}</p>
                    </button>
                  ))}
                </div>
                <p className="text-lg text-gray-700 mt-6">
                  Upload your logo and get a personalized mockup from our design team.
                </p>
                <Button
                  size="lg"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-xl px-10 py-6 shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 group"
                  onClick={() => window.open("https://wa.me/919310935423", "_blank")} // Redirect to WhatsApp
                >
                  <CheckCircle className="mr-3 h-6 w-6 group-hover:animate-pulse" />
                  Request Custom Mockup
                  <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
