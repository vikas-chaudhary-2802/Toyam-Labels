"use client"

import type React from "react"

import { useEffect, useState, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, Users, BarChart3, Activity, Zap, Target, Eye, MousePointer } from "lucide-react"

interface MetricCardProps {
  title: string
  value: string
  change: string
  trend: "up" | "down"
  icon: React.ComponentType<{ className?: string }>
  delay?: number
}

function AppleMetricCard({ title, value, change, trend, icon: Icon, delay = 0 }: MetricCardProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [animatedValue, setAnimatedValue] = useState(0)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay)
        }
      },
      { threshold: 0.1 },
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [delay])

  useEffect(() => {
    if (!isVisible) return

    const numericValue = Number.parseInt(value.replace(/\D/g, ""))
    let startTime: number
    const duration = 2000

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)
      setAnimatedValue(Math.floor(progress * numericValue))
      if (progress < 1) requestAnimationFrame(animate)
    }
    requestAnimationFrame(animate)
  }, [isVisible, value])

  return (
    <Card
      ref={ref}
      className={`transition-all duration-700 transform ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      } hover:shadow-2xl hover:scale-105 border-0 shadow-lg bg-white/80 backdrop-blur-xl rounded-3xl overflow-hidden`}
    >
      <CardContent className="p-8">
        <div className="flex items-center justify-between mb-6">
          <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl">
            <Icon className="h-6 w-6 text-white" />
          </div>
          <div
            className={`text-sm font-semibold px-3 py-1 rounded-full ${
              trend === "up" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
            }`}
          >
            {change}
          </div>
        </div>
        <div className="text-4xl font-bold text-gray-900 mb-2">
          {animatedValue.toLocaleString()}
          {value.replace(/\d/g, "")}
        </div>
        <p className="text-gray-600 font-medium">{title}</p>
      </CardContent>
    </Card>
  )
}

export function AppleAnalytics() {
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
    <section ref={sectionRef} className="py-32 px-6 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto max-w-7xl">
        {/* Apple-style section header */}
        <div
          className={`text-center mb-20 transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <Badge className="bg-blue-100 text-blue-800 px-6 py-3 text-sm font-semibold mb-8 rounded-full">
            <Activity className="mr-2 h-4 w-4" />
            Performance Intelligence
          </Badge>
          <h2 className="text-6xl md:text-7xl font-thin text-gray-900 mb-8 tracking-tight">Data that drives</h2>
          <h3 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-8">
            exceptional results
          </h3>
          <p className="text-2xl text-gray-600 max-w-4xl mx-auto font-light leading-relaxed">
            Advanced analytics and machine learning deliver unprecedented insights into campaign performance, audience
            engagement, and brand impact across India's diverse markets.
          </p>
        </div>

        {/* Metrics Grid with shocking numbers */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          <AppleMetricCard title="Campaign Reach" value="2.5M" change="+847%" trend="up" icon={Eye} delay={0} />
          <AppleMetricCard
            title="Brand Impressions"
            value="15.2M"
            change="+1,250%"
            trend="up"
            icon={Target}
            delay={200}
          />
          <AppleMetricCard title="Engagement Rate" value="94%" change="+425%" trend="up" icon={Zap} delay={400} />
          <AppleMetricCard
            title="ROI Multiplier"
            value="12.8x"
            change="+890%"
            trend="up"
            icon={TrendingUp}
            delay={600}
          />
        </div>

        {/* Additional impact metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="border-0 shadow-xl bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl overflow-hidden">
            <CardContent className="p-8 text-center">
              <div className="p-4 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl w-fit mx-auto mb-6">
                <Users className="h-8 w-8 text-white" />
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">8.7M+</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">People Reached</h3>
              <p className="text-gray-600">Across 150+ cities in India</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-xl bg-gradient-to-br from-green-50 to-teal-50 rounded-3xl overflow-hidden">
            <CardContent className="p-8 text-center">
              <div className="p-4 bg-gradient-to-br from-green-500 to-teal-600 rounded-2xl w-fit mx-auto mb-6">
                <MousePointer className="h-8 w-8 text-white" />
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">67%</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Conversion Rate</h3>
              <p className="text-gray-600">Industry-leading performance</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-xl bg-gradient-to-br from-orange-50 to-red-50 rounded-3xl overflow-hidden">
            <CardContent className="p-8 text-center">
              <div className="p-4 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl w-fit mx-auto mb-6">
                <BarChart3 className="h-8 w-8 text-white" />
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">₹45L</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Revenue Generated</h3>
              <p className="text-gray-600">For our brand partners</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
