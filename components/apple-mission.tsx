"use client"

import { useState, useEffect, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { Leaf } from "lucide-react" // Import Leaf icon

export function AppleMission() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeImage, setActiveImage] = useState(0)
  const sectionRef = useRef<HTMLDivElement>(null)

  const missionImages = [
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202024-12-12%20at%206.32.21%E2%80%AFPM.png-yqT3L4CcF2xUbnjwelCYwVl7bH23jW.jpeg",
      alt: "College students united by Free Toyam",
      caption: "Building communities across India's universities",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250221-WA0012.jpg-abla73DTiD6lfkkCkWSQlQsrwvgfdL.jpeg",
      alt: "Student with Free Toyam bottle",
      caption: "Empowering the next generation",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-08%20at%204.39.54%E2%80%AFPM-vJ3TA7mwhJGtoZAomLZJgWcGZEoLt8.png",
      alt: "Community distribution",
      caption: "Reaching every corner of India",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250221-WA0030.jpg-it2c0kXR3I92725rPXkDgE7aLfmxYr.jpeg",
      alt: "Friends sharing Free Toyam",
      caption: "Creating moments of connection",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250221-WA0002.jpg-7scCKFmMZXo3CDZ2MsIN4BcEwmmzOu.jpeg",
      alt: "College student with bottle",
      caption: "Supporting education and growth",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250221-WA0022.jpg-rPxhUYH0VylTNUFdmlqpkYFHAvGoqH.jpeg",
      alt: "Happy student with Free Toyam",
      caption: "Spreading joy through hydration",
    },
  ]

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

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImage((prev) => (prev + 1) % missionImages.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [missionImages.length])

  return (
    <section ref={sectionRef} className="py-32 px-6 bg-black text-white">
      <div className="container mx-auto max-w-7xl">
        {/* Apple-style mission header */}
        <div
          className={`text-center mb-20 transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <Badge className="bg-white/10 text-white border-white/20 px-6 py-3 text-sm font-medium mb-8 backdrop-blur-xl rounded-full">
            Our Purpose
          </Badge>
          <h2 className="text-6xl md:text-7xl font-thin mb-8 tracking-tight">Transforming</h2>
          <h3 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-8">
            advertising forever
          </h3>
          <p className="text-2xl text-gray-300 max-w-4xl mx-auto font-light leading-relaxed">
            We believe advertising should create value for everyone. Our mission is to build sustainable, impactful
            marketing solutions that connect brands with communities while promoting environmental responsibility and
            social good.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {" "}
          {/* Reduced gap from gap-16 to gap-12 */}
          {/* Mission statement */}
          <div
            className={`space-y-10 transition-all duration-1000 delay-300 ${
              /* Adjusted space-y from space-y-8 to space-y-10 */
              isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            <blockquote className="text-4xl md:text-5xl font-light italic text-gray-300 leading-relaxed">
              "We're not just distributing water bottles — we're pioneering a movement towards conscious advertising
              that makes a measurable positive difference."
            </blockquote>

            <div className="space-y-6 text-lg text-gray-400 leading-relaxed">
              <p>
                At Free Toyam, every bottle tells a story of innovation, sustainability, and community impact. We've
                reimagined advertising from the ground up, creating a platform where brands don't just reach audiences —
                they serve them.
              </p>
              <p>
                Our revolutionary approach transforms traditional marketing spend into community value, delivering
                exceptional ROI while building genuine brand affinity across India's diverse markets.
              </p>
            </div>

            {/* New Card for Sustainable Branding */}
            <Card className="bg-green-900/20 border border-green-500 rounded-2xl p-6 text-green-200 shadow-lg">
              <CardContent className="p-0 flex items-start space-x-4">
                <Leaf className="h-8 w-8 text-green-400 flex-shrink-0" />
                <div>
                  <h4 className="text-xl font-bold mb-2 text-white">Sustainable Branding with Tetra Pak</h4>
                  <p className="text-lg leading-relaxed">
                    For brands committed to eco-friendliness, we offer packaging solutions using{" "}
                    <span className="font-semibold text-white">Tetra Pak</span>. This ensures your brand aligns with
                    sustainable practices, reducing environmental footprint while maintaining high market visibility.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Impact metrics */}
            <div className="grid grid-cols-3 gap-8">
              {" "}
              {/* Removed pt-8, relying on parent space-y */}
              {[
                { value: "100K+", label: "Lives Impacted" },
                { value: "50+", label: "Cities Reached" },
                { value: "95%", label: "Satisfaction Rate" },
              ].map((metric, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-white mb-2">{metric.value}</div>
                  <div className="text-sm text-gray-400">{metric.label}</div>
                </div>
              ))}
            </div>
          </div>
          {/* Dynamic image showcase */}
          <div
            className={`relative transition-all duration-1000 delay-600 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            <Card className="bg-white/5 border-white/10 backdrop-blur-xl rounded-3xl overflow-hidden shadow-2xl">
              <CardContent className="p-0">
                <div className="relative h-96 md:h-[500px]">
                  {missionImages.map((image, index) => (
                    <div
                      key={index}
                      className={`absolute inset-0 transition-opacity duration-1000 ${
                        index === activeImage ? "opacity-100" : "opacity-0"
                      }`}
                    >
                      <Image src={image.src || "/placeholder.svg"} alt={image.alt} fill className="object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      <div className="absolute bottom-6 left-6 right-6">
                        <p className="text-white text-lg font-medium">{image.caption}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Image indicators */}
            <div className="flex justify-center mt-6 space-x-2">
              {missionImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveImage(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === activeImage ? "bg-white scale-125" : "bg-white/40 hover:bg-white/60"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
