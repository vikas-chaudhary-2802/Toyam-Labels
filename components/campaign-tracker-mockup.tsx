"use client"

import { useState, useEffect, useRef } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { MapPin, BarChart3, MessageSquare, TrendingUp } from "lucide-react"

export function CampaignTrackerMockup() {
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
    <section ref={sectionRef} className="py-32 px-6 bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white">
      <div className="container mx-auto max-w-7xl">
        <div
          className={`text-center mb-20 transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <Badge className="bg-white/10 text-white border-white/20 px-6 py-3 text-sm font-semibold mb-8 rounded-full backdrop-blur-xl">
            <MapPin className="mr-2 h-4 w-4" />
            Real-time Transparency
          </Badge>
          <h2 className="text-6xl md:text-7xl font-thin mb-8 tracking-tight">Track your</h2>
          <h3 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-8">
            campaign live
          </h3>
          <p className="text-2xl text-gray-300 leading-relaxed max-w-4xl mx-auto font-light">
            Our client dashboard provides real-time insights into bottle distribution, campaign reach, and consumer
            feedback, ensuring complete transparency and measurable results.
          </p>
        </div>

        <Card
          className={`bg-white/5 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/10 transition-all duration-1000 delay-300 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <CardContent className="p-0">
            <div className="relative w-full h-[500px] rounded-2xl overflow-hidden">
              <Image
                src="/map-charts-dashboard.png"
                alt="Campaign Tracker Dashboard Mockup"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-6">
                <div className="text-white space-y-2">
                  <h4 className="text-2xl font-bold">Live Campaign Overview</h4>
                  <p className="text-lg">Monitoring distribution and impact in real-time.</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <Card className="bg-gray-800 border-gray-700 text-gray-200 rounded-xl p-4">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-gray-400">Bottles Distributed</CardTitle>
                  <BarChart3 className="h-5 w-5 text-blue-400" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-white">1,250,000</div>
                  <p className="text-xs text-gray-500">+15% last week</p>
                </CardContent>
              </Card>
              <Card className="bg-gray-800 border-gray-700 text-gray-200 rounded-xl p-4">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-gray-400">Audience Feedback</CardTitle>
                  <MessageSquare className="h-5 w-5 text-green-400" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-white">4,800+</div>
                  <p className="text-xs text-gray-500">Positive engagements</p>
                </CardContent>
              </Card>
              <Card className="bg-gray-800 border-gray-700 text-gray-200 rounded-xl p-4">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-gray-400">Brand Impressions</CardTitle>
                  <TrendingUp className="h-5 w-5 text-purple-400" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-white">8.5M</div>
                  <p className="text-xs text-gray-500">Estimated reach</p>
                </CardContent>
              </Card>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
