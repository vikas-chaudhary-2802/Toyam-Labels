"use client"

import { useState, useEffect, useRef } from "react"
import Button from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, DollarSign, Mail, Phone, CheckCircle } from "lucide-react"
import Link from "next/link"

export function CustomPricing() {
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
    <section ref={sectionRef} className="py-32 px-6 bg-gradient-to-br from-white to-blue-50">
      <div className="container mx-auto max-w-4xl text-center">
        <div
          className={`space-y-8 transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <Badge className="bg-blue-100 text-blue-800 px-6 py-3 text-sm font-semibold mb-8 rounded-full">
            <DollarSign className="mr-2 h-4 w-4" />
            Tailored Solutions
          </Badge>
          <h2 className="text-6xl md:text-7xl font-thin text-gray-900 mb-8 tracking-tight">Your brand, your</h2>
          <h3 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-8">
            custom pricing
          </h3>
          <p className="text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto font-light">
            At Free Toyam, we believe in providing solutions that perfectly align with your unique brand objectives and
            campaign scale. Our pricing is customized to deliver maximum value and ROI.
          </p>
        </div>

        <Card
          className={`mt-16 bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-gray-100 transition-all duration-1000 delay-300 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <CardContent className="space-y-8">
            <div className="space-y-4">
              <h4 className="text-3xl font-bold text-gray-900">Get a Personalized Quote</h4>
              <p className="text-lg text-gray-700">
                Tell us about your brand's vision, target audience, and campaign goals. Our experts will craft a bespoke
                proposal designed for your success.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-center space-x-3 text-gray-700">
                <CheckCircle className="h-6 w-6 text-green-500" />
                <span>Flexible Campaign Sizes</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-700">
                <CheckCircle className="h-6 w-6 text-green-500" />
                <span>Tailored Features & Integrations</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-700">
                <CheckCircle className="h-6 w-6 text-green-500" />
                <span>Dedicated Account Management</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-700">
                <CheckCircle className="h-6 w-6 text-green-500" />
                <span>Scalable Distribution Options</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link href="https://wa.me/919310935423" passHref target="_blank" rel="noopener noreferrer">
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-xl px-10 py-6 shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 group"
                >
                  <Mail className="mr-3 h-6 w-6 group-hover:animate-pulse" />
                  Contact Us for Pricing
                  <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </Link>
              <Link href="tel:+919310354928" passHref>
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto text-xl px-10 py-6 border-2 border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400 transition-all duration-300 group bg-white/80 backdrop-blur-sm"
                >
                  <Phone className="mr-3 h-6 w-6 group-hover:scale-110 transition-transform duration-300" />
                  Call Us
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
