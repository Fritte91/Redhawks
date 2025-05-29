"use client"

import React from "react"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Utensils, Clock, Users, Sparkles } from "lucide-react"

const experiences = [
  {
    icon: Utensils,
    title: "Open Kitchen",
    description: "Watch our master chefs craft your meal with precision and artistry",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    icon: Users,
    title: "Private Dining",
    description: "Intimate spaces for special occasions and corporate gatherings",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    icon: Clock,
    title: "Chef's Table",
    description: "An exclusive culinary journey with our head chef",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    icon: Sparkles,
    title: "Warrior's Lounge",
    description: "Premium bar experience with craft cocktails and rare spirits",
    image: "/placeholder.svg?height=400&width=600",
  },
]

export default function Experience() {
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
      setActiveIndex((prev) => (prev + 1) % experiences.length)
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
            <Badge className="bg-red-600/10 text-red-400 border-red-600/20 mb-6 px-4 py-2">DINING EXPERIENCE</Badge>
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Beyond{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-red-500">Ordinary</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Immerse yourself in an atmosphere where every detail is designed to elevate your dining experience
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image Section */}
          <div
            className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-400/20 to-red-600/20 rounded-3xl blur-2xl transform -rotate-3" />
              <img
                src={experiences[activeIndex].image || "/placeholder.svg"}
                alt={experiences[activeIndex].title}
                className="relative rounded-3xl shadow-2xl w-full h-96 object-cover transition-all duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent rounded-3xl" />

              {/* Active Experience Badge */}
              <div className="absolute bottom-6 left-6 bg-black/80 backdrop-blur-sm text-white p-4 rounded-xl">
                <div className="flex items-center gap-3">
                  {React.createElement(experiences[activeIndex].icon, { className: "w-6 h-6 text-amber-400" })}
                  <div>
                    <div className="font-bold">{experiences[activeIndex].title}</div>
                    <div className="text-sm text-gray-300">{experiences[activeIndex].description}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Experience Cards */}
          <div
            className={`space-y-6 transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
          >
            {experiences.map((experience, index) => {
              const IconComponent = experience.icon
              return (
                <Card
                  key={index}
                  className={`cursor-pointer transition-all duration-500 transform hover:scale-105 ${
                    index === activeIndex
                      ? "bg-gradient-to-r from-amber-400/10 to-red-600/10 border-amber-400/30 shadow-lg shadow-amber-400/10"
                      : "bg-zinc-900/50 border-zinc-800 hover:border-zinc-700"
                  }`}
                  onClick={() => setActiveIndex(index)}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div
                        className={`p-3 rounded-xl ${
                          index === activeIndex ? "bg-amber-400 text-black" : "bg-zinc-800 text-amber-400"
                        } transition-all duration-300`}
                      >
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <h3
                          className={`text-xl font-bold mb-2 ${
                            index === activeIndex ? "text-amber-400" : "text-white"
                          } transition-colors duration-300`}
                        >
                          {experience.title}
                        </h3>
                        <p className="text-gray-300 leading-relaxed">{experience.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>

        {/* Progress Indicators */}
        <div className="flex justify-center mt-12 gap-3">
          {experiences.map((_, index) => (
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
