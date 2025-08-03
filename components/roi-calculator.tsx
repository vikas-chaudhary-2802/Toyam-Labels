"use client"

import { useState, useEffect, useRef } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { DollarSign, TrendingUp, Lightbulb } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export function ROICalculator() {
  const [currentAdSpend, setCurrentAdSpend] = useState(500000) // Default in INR
  const [targetImpressions, setTargetImpressions] = useState(1000000)
  const [estimatedCostPerImpression, setEstimatedCostPerImpression] = useState(0.05) // INR per impression for traditional ads
  const [freeToyamCostPerImpression, setFreeToyamCostPerImpression] = useState(0.01) // INR per impression for Free Toyam

  const [estimatedSavings, setEstimatedSavings] = useState(0)
  const [roiMultiplier, setRoiMultiplier] = useState(0)

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
    // Calculate traditional ad cost for target impressions
    const traditionalCost = targetImpressions * estimatedCostPerImpression
    // Calculate Free Toyam cost for target impressions
    const freeToyamCost = targetImpressions * freeToyamCostPerImpression

    const savings = traditionalCost - freeToyamCost
    const roi = freeToyamCost > 0 ? traditionalCost / freeToyamCost : 0 // ROI as a multiplier

    setEstimatedSavings(Math.max(0, savings))
    setRoiMultiplier(roi)
  }, [currentAdSpend, targetImpressions, estimatedCostPerImpression, freeToyamCostPerImpression])

  return (
    <section ref={sectionRef} className="py-32 px-6 bg-gradient-to-br from-white to-blue-50">
      <div className="container mx-auto max-w-6xl text-center">
        <div
          className={`space-y-8 mb-20 transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <Badge className="bg-blue-100 text-blue-800 px-6 py-3 text-sm font-semibold mb-8 rounded-full">
            <Lightbulb className="mr-2 h-4 w-4" />
            Smart Investment
          </Badge>
          <h2 className="text-6xl md:text-7xl font-thin text-gray-900 mb-8 tracking-tight">Calculate your</h2>
          <h3 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-8">
            potential ROI
          </h3>
          <p className="text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto font-light">
            See how Free Toyam delivers unparalleled value and a higher return on your advertising investment compared
            to traditional methods.
          </p>
        </div>

        <Card
          className={`bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-gray-100 transition-all duration-1000 delay-300 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <CardContent className="space-y-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6 text-left">
                <h4 className="text-2xl font-bold text-gray-900">Your Campaign Inputs</h4>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="targetImpressions" className="text-gray-700">
                      Target Impressions (e.g., 1,000,000)
                    </Label>
                    <Input
                      id="targetImpressions"
                      type="number"
                      value={targetImpressions}
                      onChange={(e) => setTargetImpressions(Number(e.target.value))}
                      className="mt-2 bg-gray-50 border-gray-200 text-gray-900 h-12 text-lg rounded-xl"
                    />
                  </div>
                  <div>
                    <Label htmlFor="estimatedCostPerImpression" className="text-gray-700">
                      Estimated Traditional Ad Cost per Impression (INR)
                    </Label>
                    <Input
                      id="estimatedCostPerImpression"
                      type="number"
                      step="0.01"
                      value={estimatedCostPerImpression}
                      onChange={(e) => setEstimatedCostPerImpression(Number(e.target.value))}
                      className="mt-2 bg-gray-50 border-gray-200 text-gray-900 h-12 text-lg rounded-xl"
                    />
                  </div>
                  <div>
                    <Label htmlFor="freeToyamCostPerImpression" className="text-gray-700">
                      Free Toyam Cost per Impression (INR)
                    </Label>
                    <Input
                      id="freeToyamCostPerImpression"
                      type="number"
                      step="0.01"
                      value={freeToyamCostPerImpression}
                      onChange={(e) => setFreeToyamCostPerImpression(Number(e.target.value))}
                      className="mt-2 bg-gray-50 border-gray-200 text-gray-900 h-12 text-lg rounded-xl"
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-6 text-left">
                <h4 className="text-2xl font-bold text-gray-900">Your Estimated Impact</h4>
                <div className="grid grid-cols-1 gap-6">
                  <Card className="bg-blue-50 border-blue-200 shadow-md rounded-xl p-6">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-lg font-medium text-blue-800">Potential Savings</CardTitle>
                      <DollarSign className="h-6 w-6 text-blue-600" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-4xl font-bold text-blue-900">
                        ₹{estimatedSavings.toLocaleString("en-IN", { maximumFractionDigits: 0 })}
                      </div>
                      <p className="text-sm text-blue-700 mt-1">Compared to traditional advertising</p>
                    </CardContent>
                  </Card>

                  <Card className="bg-purple-50 border-purple-200 shadow-md rounded-xl p-6">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-lg font-medium text-purple-800">ROI Multiplier</CardTitle>
                      <TrendingUp className="h-6 w-6 text-purple-600" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-4xl font-bold text-purple-900">{roiMultiplier.toFixed(1)}x</div>
                      <p className="text-sm text-purple-700 mt-1">Your return on investment</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
            <p className="text-sm text-gray-500 mt-6">
              *These calculations are estimates based on industry averages and Free Toyam's proven efficiency. For a
              precise quote, please contact us.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
