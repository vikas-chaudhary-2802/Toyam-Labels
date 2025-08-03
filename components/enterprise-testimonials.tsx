"use client"

import { useState, useEffect, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"
import Image from "next/image"

interface TestimonialData {
  id: number
  image: string
  name: string
  role: string
  company: string
  quote: string
  rating: number
}

const testimonials: TestimonialData[] = [
  {
    id: 1,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-03-08%20at%209%2C33%2C40%E2%80%AFAM_enhanced.png-a9TuQxEZ3lpS8ShNhGAoM8OtyTQdnV.jpeg",
    name: "College Students",
    role: "University Community",
    company: "Delhi University",
    quote: "Free Toyam brought our entire campus together. The free water bottles created such positive energy!",
    rating: 5,
  },
  {
    id: 2,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202024-11-03%20at%2011.07.53%E2%80%AFPM-ADr40nPn51JPd1CjwNK09iub85HHZm.png",
    name: "Rajesh Kumar",
    role: "Security Officer",
    company: "Corporate Campus",
    quote: "This initiative shows how brands can give back to the community. Excellent quality water!",
    rating: 5,
  },
  {
    id: 3,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-08%20at%205.05.38%E2%80%AFPM-ZYP2mZX6nPq41pF0sGp9JilpOPGUJv.png",
    name: "Priya Sharma",
    role: "Working Professional",
    company: "Tech Industry",
    quote: "Free Toyam's approach to advertising is refreshing. It actually helps people while promoting brands.",
    rating: 5,
  },
]

export function EnterpriseTestimonials() {
  const [activeIndex, setActiveIndex] = useState(0)
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

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section ref={sectionRef} className="py-20 px-6 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto max-w-6xl">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <h2 className="text-5xl font-bold text-gray-900 mb-6">Real Stories, Real Impact</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how Free Toyam is creating positive experiences across diverse communities in India
          </p>
        </div>

        <div className="relative">
          {/* Main Testimonial Display */}
          <div
            className={`transition-all duration-1000 delay-300 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            <Card className="max-w-4xl mx-auto bg-white/80 backdrop-blur-md border-0 shadow-2xl">
              <CardContent className="p-12">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div className="relative">
                    <Image
                      src={testimonials[activeIndex].image || "/placeholder.svg"}
                      alt={testimonials[activeIndex].name}
                      width={400}
                      height={300}
                      className="rounded-2xl shadow-xl object-cover w-full h-80"
                    />
                    <div className="absolute -top-4 -left-4 bg-blue-600 rounded-full p-3">
                      <Quote className="h-6 w-6 text-white" />
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="flex text-yellow-400 mb-4">
                      {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                        <Star key={i} className="h-6 w-6 fill-current" />
                      ))}
                    </div>

                    <blockquote className="text-2xl text-gray-700 italic leading-relaxed">
                      "{testimonials[activeIndex].quote}"
                    </blockquote>

                    <div className="space-y-2">
                      <div className="text-xl font-bold text-gray-900">{testimonials[activeIndex].name}</div>
                      <div className="text-gray-600">
                        {testimonials[activeIndex].role} • {testimonials[activeIndex].company}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Testimonial Navigation */}
          <div className="flex justify-center mt-8 space-x-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === activeIndex ? "bg-blue-600 scale-125" : "bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
