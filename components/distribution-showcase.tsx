"use client"

import { useState, useEffect, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Users, Smile, Award } from "lucide-react"
import Image from "next/image"

export function DistributionShowcase() {
  const [isVisible, setIsVisible] = useState(false)
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
    <section ref={sectionRef} className="py-20 px-6 bg-white">
      <div className="container mx-auto max-w-7xl">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <Badge className="bg-blue-100 text-blue-800 px-6 py-2 text-sm font-semibold mb-6">Distribution Network</Badge>
          <h2 className="text-5xl font-bold text-gray-900 mb-6">Our Distribution Excellence</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional setup, strategic locations, and genuine community impact across India
          </p>
        </div>

        {/* Main Distribution Kiosk */}
        <div
          className={`mb-16 transition-all duration-1000 delay-300 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <Card className="overflow-hidden border-0 shadow-2xl">
            <CardContent className="p-0">
              <div className="relative">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-08%20at%204.59.26%E2%80%AFPM-SGYXd5uNkNWcPbOZezJBm7suJil6kq.png"
                  alt="Free Toyam Distribution Kiosk - This is Free Happiness"
                  width={1200}
                  height={600}
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-3xl font-bold mb-2">Professional Distribution Setup</h3>
                  <p className="text-lg opacity-90">"This is Free Happiness" - Hydrate Your Brand</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Impact Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: MapPin,
              title: "Strategic Locations",
              description: "High-traffic areas for maximum visibility",
              image:
                "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-08%20at%205.02.43%E2%80%AFPM-aREzeTp5Bzm3w7c6MHkDzqnDGZYBaO.png",
              delay: 0,
            },
            {
              icon: Users,
              title: "Community Reach",
              description: "Connecting with diverse demographics",
              image:
                "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-08%20at%205.05.38%E2%80%AFPM-ZYP2mZX6nPq41pF0sGp9JilpOPGUJv.png",
              delay: 200,
            },
            {
              icon: Smile,
              title: "Genuine Happiness",
              description: "Creating positive brand associations",
              image:
                "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-08%20at%205.01.58%E2%80%AFPM-D8nBmU6prWp3pQDWZ7KYAozojPFyDt.png",
              delay: 400,
            },
            {
              icon: Award,
              title: "Quality Service",
              description: "Professional distribution standards",
              image:
                "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202024-11-03%20at%2011.07.53%E2%80%AFPM-ADr40nPn51JPd1CjwNK09iub85HHZm.png",
              delay: 600,
            },
          ].map((item, index) => (
            <Card
              key={index}
              className={`group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-0 shadow-lg ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
              style={{ transitionDelay: `${item.delay + 600}ms` }}
            >
              <CardContent className="p-6">
                <div className="relative mb-4 overflow-hidden rounded-xl">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full p-2">
                    <item.icon className="h-5 w-5 text-blue-600" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
