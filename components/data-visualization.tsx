"use client"

import type React from "react"

import { useEffect, useState, useRef } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { TrendingUp, Users, MousePointer, BarChart3 } from "lucide-react"

interface MetricCardProps {
  title: string
  value: string
  change: string
  trend: "up" | "down"
  icon: React.ComponentType<{ className?: string }>
  delay?: number
}

function MetricCard({ title, value, change, trend, icon: Icon, delay = 0 }: MetricCardProps) {
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
      } hover:shadow-xl hover:scale-105 border-0 shadow-lg bg-gradient-to-br from-white to-gray-50`}
    >
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-gray-600">{title}</CardTitle>
        <Icon className="h-5 w-5 text-blue-600" />
      </CardHeader>
      <CardContent>
        <div className="text-3xl font-bold text-gray-900 mb-1">
          {animatedValue}
          {value.replace(/\d/g, "")}
        </div>
        <p className={`text-sm flex items-center ${trend === "up" ? "text-green-600" : "text-red-600"}`}>
          <TrendingUp className="h-4 w-4 mr-1" />
          {change}
        </p>
      </CardContent>
    </Card>
  )
}

export function DataVisualization() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <MetricCard title="Site Sessions" value="66" change="+175%" trend="up" icon={BarChart3} delay={0} />
      <MetricCard title="Unique Visitors" value="51" change="+122%" trend="up" icon={Users} delay={200} />
      <MetricCard title="Clicks to Contact" value="1" change="New" trend="up" icon={MousePointer} delay={400} />
      <MetricCard title="Direct Traffic" value="264%" change="Growth" trend="up" icon={TrendingUp} delay={600} />
    </div>
  )
}
