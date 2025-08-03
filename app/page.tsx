"use client"

import Button from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Target,
  ArrowRight,
  MapPin,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  Users,
  TrendingUp,
  Award,
  Globe,
  Zap,
  BarChart3,
  QrCode,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState, useEffect, useRef } from "react"
import { AppleHero } from "@/components/apple-hero"
import { AppleAnalytics } from "@/components/apple-analytics"
import { AppleMission } from "@/components/apple-mission"
import { EnterpriseTestimonials } from "@/components/enterprise-testimonials"
import { DistributionShowcase } from "@/components/distribution-showcase"
import { CustomPricing } from "@/components/custom-pricing"
import { ROICalculator } from "@/components/roi-calculator"
import { ImpactCalculator } from "@/components/impact-calculator" // New import
import { DesignPreview } from "@/components/design-preview" // New import
import { CampaignTrackerMockup } from "@/components/campaign-tracker-mockup" // New import

// Animated Counter Component
function AnimatedCounter({ end, duration = 2000, suffix = "" }: { end: number; duration?: number; suffix?: string }) {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [isVisible])

  useEffect(() => {
    if (!isVisible) return

    let startTime: number
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)
      setCount(Math.floor(progress * end))
      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }
    requestAnimationFrame(animate)
  }, [isVisible, end, duration])

  return (
    <div ref={ref} className="text-4xl font-bold">
      {count.toLocaleString()}
      {suffix}
    </div>
  )
}

export default function FreeToyamLanding() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const [businessEmail, setBusinessEmail] = useState("")
  const [companyName, setCompanyName] = useState("")
  const [contactNumber, setContactNumber] = useState("")

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setActiveSection(sectionId)
    }
  }

  const handleScheduleDemo = () => {
    const subject = encodeURIComponent("Enterprise Demo Request from Free Toyam Website")
    const body = encodeURIComponent(
      `My phone number: +91 9310935423\n` +
        `Business Email: ${businessEmail}\n` +
        `Company Name: ${companyName}\n` +
        `Contact Number (from form): ${contactNumber}`,
    )
    const mailtoLink = `mailto:freetoyam@gmail.com?subject=${subject}&body=${body}`
    window.open(mailtoLink, "_blank")
  }

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      {/* Apple-style CSS */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=SF+Pro+Display:wght@100;200;300;400;500;600;700;800;900&display=swap');
        
        * {
          font-family: 'SF Pro Display', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }
        
        .apple-blur {
          backdrop-filter: saturate(180%) blur(20px);
          background-color: rgba(255, 255, 255, 0.8);
        }
        
        .apple-shadow {
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
        }
      `}</style>

      {/* Apple-style Header */}
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          isScrolled ? "apple-blur apple-shadow border-b border-gray-200/50" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3 group cursor-pointer" onClick={() => scrollToSection("home")}>
              <div className="relative">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/final_logo-01-removebg-preview-eQElW5BeA3cTGW2oNzg0pFV2Sm15IY.png"
                  alt="Free Toyam Logo"
                  width={40}
                  height={40}
                  className="object-contain transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <span className="text-xl font-semibold text-gray-900 transition-colors duration-300 group-hover:text-blue-600">
                Free Toyam
              </span>
            </div>

            <nav className="hidden md:flex items-center space-x-8">
              {[
                { id: "home", label: "Home" },
                { id: "how-it-works", label: "Process" },
                // { id: "mission", label: "Mission" }, // Removed from navigation
                { id: "distribution", label: "Impact" },
                { id: "design-preview", label: "Design" }, // New
                { id: "pricing", label: "Pricing" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-gray-700 hover:text-black font-medium transition-all duration-300 py-2 px-4 rounded-lg hover:bg-gray-100/50 ${
                    activeSection === item.id ? "text-black bg-gray-100/50" : ""
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>

            <Button
              onClick={() => scrollToSection("partner")}
              className="bg-black text-white hover:bg-gray-800 rounded-full px-6 py-2 font-medium transition-all duration-300"
            >
              Partner With Us
            </Button>
          </div>
        </div>
      </header>

      {/* Apple Hero Section */}
      <section id="home">
        <AppleHero
          onPartnerClick={() => scrollToSection("partner")}
          onHowItWorksClick={() => window.open("https://www.instagram.com/freetoyam/", "_blank")} // Redirect to Instagram
        />
      </section>

      {/* Apple Analytics Section */}
      <section id="analytics">
        <AppleAnalytics />
      </section>

      {/* ROI Calculator Section */}
      <section id="roi-calculator">
        <ROICalculator />
      </section>

      {/* AI-Powered Impact Calculator Section */}
      <section id="impact-calculator">
        <ImpactCalculator />
      </section>

      {/* Apple-style How It Works */}
      <section id="how-it-works" className="py-32 px-6 bg-white">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-20">
            <Badge className="bg-gray-100 text-gray-800 px-6 py-3 text-sm font-semibold mb-8 rounded-full">
              Process Excellence
            </Badge>
            <h2 className="text-6xl md:text-7xl font-thin text-gray-900 mb-8 tracking-tight">Precision in</h2>
            <h3 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-8">
              every step
            </h3>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto font-light leading-relaxed">
              Our systematic approach ensures maximum ROI and brand impact through strategic planning, creative
              excellence, precision distribution, and comprehensive analytics.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Target,
                step: "01",
                title: "Strategic Planning",
                description: "AI-powered audience targeting and location optimization for maximum impact",
                color: "from-blue-500 to-blue-600",
              },
              {
                icon: Zap,
                step: "02",
                title: "Creative Production",
                description: "Professional design and premium printing on eco-friendly materials",
                color: "from-green-500 to-green-600",
              },
              {
                icon: MapPin,
                step: "03",
                title: "Precision Distribution",
                description: "Trained teams deploy at high-traffic strategic locations nationwide",
                color: "from-purple-500 to-purple-600",
              },
              {
                icon: BarChart3,
                step: "04",
                title: "Performance Analytics",
                description: "Real-time tracking with comprehensive ROI reporting and insights",
                color: "from-orange-500 to-orange-600",
              },
            ].map((item, index) => (
              <Card
                key={index}
                className="text-center p-8 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white border-0 shadow-lg group rounded-3xl"
              >
                <CardContent className="space-y-6">
                  <div className="text-6xl font-thin text-gray-300 mb-4">{item.step}</div>
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center mx-auto shadow-lg group-hover:scale-110 transition-transform duration-300`}
                  >
                    <item.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed font-light">{item.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Apple Mission Section */}
      <section id="mission">
        <AppleMission />
      </section>

      {/* Distribution Showcase */}
      <section id="distribution">
        <DistributionShowcase />
      </section>

      {/* Enterprise Testimonials */}
      <EnterpriseTestimonials />

      {/* Design Preview Section */}
      <section id="design-preview">
        <DesignPreview />
      </section>

      {/* Campaign Tracker Mockup Section */}
      <section id="campaign-tracker">
        <CampaignTrackerMockup />
      </section>

      {/* Gamified Consumer Engagement Section (Conceptual) */}
      <section id="gamification" className="py-32 px-6 bg-white">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="space-y-8">
            <Badge className="bg-blue-100 text-blue-800 px-6 py-3 text-sm font-semibold mb-8 rounded-full">
              <QrCode className="mr-2 h-4 w-4" />
              Engage & Reward
            </Badge>
            <h2 className="text-6xl md:text-7xl font-thin text-gray-900 mb-8 tracking-tight">Gamified</h2>
            <h3 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-8">
              consumer experience
            </h3>
            <p className="text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto font-light">
              Turn every bottle into an interactive touchpoint. QR codes unlock exclusive offers, engaging content, and
              social challenges, driving virality and brand loyalty.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
            <Card className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-gray-100">
              <CardContent className="space-y-4">
                <div className="p-4 bg-blue-100 rounded-2xl w-fit mx-auto mb-4">
                  <QrCode className="h-8 w-8 text-blue-600" />
                </div>
                <h4 className="text-2xl font-bold text-gray-900">Interactive QR Codes</h4>
                <p className="text-gray-700">
                  Each bottle features a unique QR code, leading consumers to exclusive offers, videos, and brand
                  experiences.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-gray-100">
              <CardContent className="space-y-4">
                <div className="p-4 bg-purple-100 rounded-2xl w-fit mx-auto mb-4">
                  <Users className="h-8 w-8 text-purple-600" />
                </div>
                <h4 className="text-2xl font-bold text-gray-900">Community & Rewards</h4>
                <p className="text-gray-700">
                  Engage consumers with leaderboards for recycling, referrals, and social sharing, fostering a vibrant
                  brand community.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Custom Pricing Section */}
      <section id="pricing">
        <CustomPricing />
      </section>

      {/* Apple-style Partnership Section */}
      <section
        id="partner"
        className="py-32 px-6 bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white relative overflow-hidden"
      >
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <div className="space-y-12">
            <div className="space-y-8">
              <Badge className="bg-white/10 text-white border-white/20 px-6 py-3 text-sm font-medium backdrop-blur-xl rounded-full">
                Enterprise Partnership
              </Badge>
              <h2 className="text-6xl md:text-7xl font-thin mb-8 tracking-tight">Ready to scale</h2>
              <h3 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-8">
                your impact?
              </h3>
              <p className="text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto font-light">
                Join industry leaders who trust Free Toyam for sustainable, high-impact advertising campaigns that
                deliver measurable results and positive community impact.
              </p>
            </div>

            <div className="max-w-md mx-auto bg-white/5 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/10">
              <div className="space-y-6">
                <div className="space-y-4">
                  <Input
                    type="email"
                    placeholder="Business email address"
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/60 h-14 text-lg rounded-2xl backdrop-blur-sm"
                    value={businessEmail}
                    onChange={(e) => setBusinessEmail(e.target.value)}
                  />
                  <Input
                    type="text"
                    placeholder="Company name"
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/60 h-14 text-lg rounded-2xl backdrop-blur-sm"
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                  />
                  <Input
                    type="tel"
                    placeholder="Contact number"
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/60 h-14 text-lg rounded-2xl backdrop-blur-sm"
                    value={contactNumber}
                    onChange={(e) => setContactNumber(e.target.value)}
                  />
                </div>
                <Button
                  size="lg"
                  className="w-full bg-white text-black hover:bg-gray-100 h-14 text-lg font-semibold shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 rounded-2xl"
                  onClick={handleScheduleDemo}
                >
                  Schedule Enterprise Demo
                  <ArrowRight className="ml-3 h-5 w-5" />
                </Button>
              </div>
              <p className="text-sm text-gray-400 mt-6 font-light">
                Enterprise-grade support • 24-hour response guarantee
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12">
              {[
                { icon: Users, value: "25+", label: "Enterprise Partners" },
                { icon: Globe, value: "50+", label: "Cities Covered" },
                { icon: Award, value: "95%", label: "Client Satisfaction" },
                { icon: TrendingUp, value: "300%", label: "Average ROI" },
              ].map((stat, index) => (
                <div key={index} className="text-center group">
                  <stat.icon className="h-8 w-8 mx-auto mb-3 text-gray-400 group-hover:scale-110 transition-transform duration-300" />
                  <div className="text-3xl font-bold group-hover:scale-110 transition-transform duration-300">
                    <AnimatedCounter end={Number.parseInt(stat.value)} suffix={stat.value.replace(/\d+/, "")} />
                  </div>
                  <div className="text-gray-400 text-sm font-light">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Apple-style Footer */}
      <footer className="bg-gray-50 text-gray-600 py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/final_logo-01-removebg-preview-eQElW5BeA3cTGW2oNzg0pFV2Sm15IY.png"
                  alt="Free Toyam Logo"
                  width={32}
                  height={32}
                  className="object-contain"
                />
                <span className="text-xl font-semibold text-gray-900">Free Toyam</span>
              </div>
              <p className="text-gray-600 leading-relaxed font-light">
                India's premier sustainable advertising platform, delivering measurable impact for enterprise brands
                through innovative community engagement.
              </p>
              <div className="flex space-x-4">
                <Link
                  href="https://instagram.com/freetoyam"
                  className="text-gray-400 hover:text-gray-600 transition-colors duration-300"
                  target="_blank"
                >
                  <Instagram className="h-5 w-5" />
                </Link>
                <Link
                  href="https://linkedin.com/company/free-toyam/"
                  className="text-gray-400 hover:text-gray-600 transition-colors duration-300"
                  target="_blank"
                >
                  <Linkedin className="h-5 w-5" />
                </Link>
              </div>
            </div>

            {[
              {
                title: "Solutions",
                links: [
                  { label: "Enterprise Campaigns", action: () => scrollToSection("partner") },
                  { label: "Analytics Dashboard", action: () => scrollToSection("analytics") },
                  { label: "Distribution Network", action: () => scrollToSection("distribution") },
                  { label: "ROI Calculator", action: () => scrollToSection("roi-calculator") },
                  { label: "Impact Calculator", action: () => scrollToSection("impact-calculator") }, // New
                  { label: "Design Preview", action: () => scrollToSection("design-preview") }, // New
                  { label: "Campaign Tracker", action: () => scrollToSection("campaign-tracker") }, // New
                  { label: "Gamification", action: () => scrollToSection("gamification") }, // New
                ],
              },
              {
                title: "Resources",
                links: [
                  { label: "Case Studies", href: "#" },
                  { label: "ROI Calculator", href: "#" },
                  { label: "API Documentation", href: "#" },
                  { label: "Support Center", href: "#" },
                ],
              },
              {
                title: "Contact",
                content: (
                  <div className="space-y-4 text-gray-600">
                    <div className="flex items-center space-x-3">
                      <Phone className="h-4 w-4" />
                      <Link href="tel:+919310354928" className="hover:text-gray-900 transition-colors duration-300">
                        +91 9310354928
                      </Link>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Mail className="h-4 w-4" />
                      <Link
                        href="mailto:enterprise@freetoyam.com"
                        className="hover:text-gray-900 transition-colors duration-300"
                      >
                        enterprise@freetoyam.com
                      </Link>
                    </div>
                  </div>
                ),
              },
            ].map((section, index) => (
              <div key={index}>
                <h3 className="font-semibold mb-6 text-gray-900">{section.title}</h3>
                {section.links ? (
                  <ul className="space-y-3 text-gray-600">
                    {section.links.map((link, linkIndex) => (
                      <li key={linkIndex}>
                        {link.action ? (
                          <button
                            onClick={link.action}
                            className="hover:text-gray-900 transition-colors duration-300 font-light"
                          >
                            {link.label}
                          </button>
                        ) : (
                          <Link
                            href={link.href || "#"}
                            className="hover:text-gray-900 transition-colors duration-300 font-light"
                          >
                            {link.label}
                          </Link>
                        )}
                      </li>
                    ))}
                  </ul>
                ) : (
                  section.content
                )}
              </div>
            ))}
          </div>

          <div className="border-t border-gray-200 pt-8 text-center text-gray-500">
            <p className="font-light">Made with 💧 in India • © 2024 Free Toyam. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
