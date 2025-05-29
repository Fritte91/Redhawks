"use client"

import React from "react"
import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Users, Utensils, Calendar, Package } from "lucide-react"

const cateringServices = [
  {
    icon: Users,
    title: "Private Events",
    description: "Let us cater your special occasions with our legendary burgers and kebabs",
    image: "/images/catering1.jpg",
    details:
      "Whether it's a birthday, anniversary, or corporate event, our team will create a custom menu that will impress your guests.",
  },
  {
    icon: Calendar,
    title: "Corporate Catering",
    description: "Elevate your business meetings and events with premium catering options",
    image: "/images/shack1.jpg",
    details: "From small team lunches to large company events, we offer flexible packages to meet your business needs.",
  },
  {
    icon: Utensils,
    title: "Food Truck Rental",
    description: "Bring the Redhawk's experience directly to your event with our mobile kitchen",
    image: "/images/redhawks2.jpg",
    details:
      "Our custom food truck brings the full Redhawk's experience to your location, with on-site cooking and service.",
  },
  {
    icon: Package,
    title: "Party Packages",
    description: "Pre-ordered packages for gatherings of all sizes, ready for pickup or delivery",
    image: "/images/shack2.jpg",
    details: "Choose from our selection of party packages designed to feed groups from 10 to 100 people.",
  },
]

export default function Catering() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeIndex, setActiveIndex] = useState(0)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % cateringServices.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section ref={ref} className="py-24 bg-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-amber-400/5 to-transparent" />
        <div className="absolute bottom-0 left-0 w-1/2 h-full bg-gradient-to-r from-red-600/5 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div
            className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <Badge className="bg-red-600/10 text-red-400 border-red-600/20 mb-6 px-4 py-2">CATERING SERVICES</Badge>
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Beyond The{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-red-500">Shack</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Bring the legendary taste of Redhawk's to your special events, corporate gatherings, and celebrations
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Image Section */}
          <div
            className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-400/20 to-red-600/20 rounded-3xl blur-2xl transform -rotate-3" />
              <img
                src={cateringServices[activeIndex].image || "/placeholder.svg"}
                alt={cateringServices[activeIndex].title}
                className="relative rounded-3xl shadow-2xl w-full h-64 md:h-96 object-cover transition-all duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent rounded-3xl" />

              {/* Active Service Badge */}
              <div className="absolute bottom-4 md:bottom-6 left-4 md:left-6 right-4 md:right-auto bg-black/80 backdrop-blur-sm text-white p-3 md:p-4 rounded-xl">
                <div className="flex items-center gap-3">
                  {React.createElement(cateringServices[activeIndex].icon, {
                    className: "w-5 md:w-6 h-5 md:h-6 text-amber-400 flex-shrink-0",
                  })}
                  <div>
                    <div className="font-bold text-sm md:text-base">{cateringServices[activeIndex].title}</div>
                    <div className="text-xs md:text-sm text-gray-300 hidden md:block">
                      {cateringServices[activeIndex].details}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Service Cards */}
          <div
            className={`space-y-4 md:space-y-6 transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
          >
            {cateringServices.map((service, index) => {
              const IconComponent = service.icon
              return (
                <Card
                  key={index}
                  className={`cursor-pointer transition-all duration-500 transform hover:scale-105 ${
                    index === activeIndex
                      ? "bg-gradient-to-r from-amber-400/10 to-red-600/10 border-amber-400/50 shadow-lg shadow-amber-400/20"
                      : "bg-gradient-to-b from-zinc-800 to-zinc-900 border-amber-400/20 hover:border-amber-400/40"
                  }`}
                  onClick={() => setActiveIndex(index)}
                >
                  <CardContent className="p-4 md:p-6">
                    <div className="flex items-start gap-3 md:gap-4">
                      <div
                        className={`p-2 md:p-3 rounded-xl flex-shrink-0 ${
                          index === activeIndex ? "bg-amber-400 text-black" : "bg-zinc-700 text-amber-400"
                        } transition-all duration-300`}
                      >
                        <IconComponent className="w-5 md:w-6 h-5 md:h-6" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3
                          className={`text-lg md:text-xl font-bold mb-2 ${
                            index === activeIndex ? "text-amber-400" : "text-white"
                          } transition-colors duration-300`}
                        >
                          {service.title}
                        </h3>
                        <p className="text-gray-200 leading-relaxed text-sm md:text-base">{service.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}

            <Button className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-semibold py-3 md:py-4 transform hover:scale-105 transition-all duration-300 mt-4 md:mt-6 text-sm md:text-base">
              Request Catering Quote
            </Button>
          </div>
        </div>

        {/* Progress Indicators */}
        <div className="flex justify-center mt-12 gap-3">
          {cateringServices.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === activeIndex ? "bg-amber-400 scale-125" : "bg-zinc-700 hover:bg-zinc-600"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
