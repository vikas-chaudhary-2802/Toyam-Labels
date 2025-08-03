"use client"

import { useState, useEffect, useRef } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Leaf, Globe, Users, Recycle } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export function ImpactCalculator() {
  const [bottlesDistributed, setBottlesDistributed] = useState(100000) // Default number of bottles
  const [litersDistributed, setLitersDistributed] = useState(0)
  const [carbonSaved, setCarbonSaved] = useState(0)
  const [livesTouched, setLivesTouched] = useState(0)

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
    // Assuming 1 bottle = 0.5 liters
    const calculatedLiters = bottlesDistributed * 0.5
    // Assuming 1 bottle saves 0.02 kg of CO2 (placeholder for plastic waste reduction)
    const calculatedCarbonSaved = bottlesDistributed * 0.02
    // Assuming 1 bottle touches 1 life (simple direct impact)
    const calculatedLivesTouched = bottlesDistributed * 1

    setLitersDistributed(calculatedLiters)
    setCarbonSaved(calculatedCarbonSaved)
    setLivesTouched(calculatedLivesTouched)
  }, [bottlesDistributed])

  return (
    <section ref={sectionRef} className="py-32 px-6 bg-gradient-to-br from-black to-gray-900 text-white">
      <div className="container mx-auto max-w-6xl text-center">
        <div
          className={`space-y-8 mb-20 transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <Badge className="bg-white/10 text-white border-white/20 px-6 py-3 text-sm font-semibold mb-8 rounded-full backdrop-blur-xl">
            <Leaf className="mr-2 h-4 w-4" />
            ESG Contribution
          </Badge>
          <h2 className="text-6xl md:text-7xl font-thin mb-8 tracking-tight">Measure your</h2>
          <h3 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent mb-8">
            positive impact
          </h3>
          <p className="text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto font-light">
            Understand the environmental and social good your brand creates by partnering with Free Toyam.
          </p>
        </div>

        <Card
          className={`bg-white/5 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/10 transition-all duration-1000 delay-300 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <CardContent className="space-y-10">
            <div className="space-y-6 text-left">
              <h4 className="text-2xl font-bold text-white">Campaign Volume</h4>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="bottlesDistributed" className="text-gray-300">
                    Number of Bottles Distributed
                  </Label>
                  <Input
                    id="bottlesDistributed"
                    type="number"
                    value={bottlesDistributed}
                    onChange={(e) => setBottlesDistributed(Number(e.target.value))}
                    className="mt-2 bg-white/10 border-white/20 text-white placeholder:text-white/60 h-12 text-lg rounded-xl"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="bg-green-900/20 border border-green-500 shadow-md rounded-xl p-6 text-green-200">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-lg font-medium text-green-100">Water Distributed</CardTitle>
                  <Recycle className="h-6 w-6 text-green-400" />
                </CardHeader>
                <CardContent>
                  <div className="text-4xl font-bold text-white">
                    {litersDistributed.toLocaleString("en-IN", { maximumFractionDigits: 0 })} L
                  </div>
                  <p className="text-sm text-green-300 mt-1">Providing hydration to communities</p>
                </CardContent>
              </Card>

              <Card className="bg-blue-900/20 border border-blue-500 shadow-md rounded-xl p-6 text-blue-200">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-lg font-medium text-blue-100">Carbon Saved</CardTitle>
                  <Globe className="h-6 w-6 text-blue-400" />
                </CardHeader>
                <CardContent>
                  <div className="text-4xl font-bold text-white">
                    {carbonSaved.toLocaleString("en-IN", { maximumFractionDigits: 2 })} kg
                  </div>
                  <p className="text-sm text-blue-300 mt-1">Reducing environmental footprint</p>
                </CardContent>
              </Card>

              <Card className="bg-purple-900/20 border border-purple-500 shadow-md rounded-xl p-6 text-purple-200">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-lg font-medium text-purple-100">Lives Touched</CardTitle>
                  <Users className="h-6 w-6 text-purple-400" />
                </CardHeader>
                <CardContent>
                  <div className="text-4xl font-bold text-white">
                    {livesTouched.toLocaleString("en-IN", { maximumFractionDigits: 0 })}
                  </div>
                  <p className="text-sm text-purple-300 mt-1">Direct community impact</p>
                </CardContent>
              </Card>
            </div>
            <p className="text-sm text-gray-500 mt-6">
              *These calculations are estimates based on average impact metrics. Actual results may vary.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
