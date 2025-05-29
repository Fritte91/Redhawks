"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Award, Clock, Heart } from "lucide-react"

const stats = [
  { icon: Users, value: "50K+", label: "Happy Warriors", color: "text-amber-400" },
  { icon: Award, value: "15+", label: "Culinary Awards", color: "text-red-400" },
  { icon: Clock, value: "8+", label: "Years of Excellence", color: "text-amber-400" },
  { icon: Heart, value: "100%", label: "Passion Driven", color: "text-red-400" },
]

export default function About() {
  const [isVisible, setIsVisible] = useState(false)
  const [counters, setCounters] = useState(stats.map(() => 0))
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          // Animate counters
          stats.forEach((stat, index) => {
            const target = Number.parseInt(stat.value.replace(/\D/g, ""))
            let current = 0
            const increment = target / 50
            const timer = setInterval(() => {
              current += increment
              if (current >= target) {
                current = target
                clearInterval(timer)
              }
              setCounters((prev) => {
                const newCounters = [...prev]
                newCounters[index] = Math.floor(current)
                return newCounters
              })
            }, 50)
          })
        }
      },
      { threshold: 0.3 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" ref={ref} className="py-24 bg-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-amber-400/5 via-transparent to-red-600/5" />
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-amber-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-red-600/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div
            className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
          >
            <Badge className="bg-red-600/10 text-red-400 border-red-600/20 mb-6 px-4 py-2">OUR HERITAGE</Badge>
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-8 leading-tight">
              Where{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-red-500">
                Ancient Wisdom
              </span>{" "}
              Meets Modern Cuisine
            </h2>
            <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
              <p>
                Born from the sacred fires of tradition and forged in the crucible of culinary innovation, Redhawk's
                represents more than just a restaurant—it's a testament to the enduring spirit of the warrior.
              </p>
              <p>
                Our master chefs blend time-honored techniques passed down through generations with contemporary
                culinary artistry, creating an experience that honors the past while embracing the future.
              </p>
              <p>
                Every ingredient is carefully sourced, every recipe meticulously crafted, and every dish served with the
                pride and passion that defines the warrior's way.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 mt-12">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon
                return (
                  <Card key={index} className="bg-zinc-900/50 border-zinc-800 backdrop-blur-sm">
                    <CardContent className="p-6 text-center">
                      <IconComponent className={`w-8 h-8 ${stat.color} mx-auto mb-3`} />
                      <div className={`text-3xl font-bold ${stat.color} mb-1`}>
                        {stat.value.includes("+")
                          ? `${counters[index]}+`
                          : stat.value.includes("%")
                            ? `${counters[index]}%`
                            : counters[index]}
                      </div>
                      <div className="text-gray-400 text-sm">{stat.label}</div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>

          {/* Image */}
          <div
            className={`transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-400/20 to-red-600/20 rounded-2xl blur-xl transform rotate-3" />
              <img
                src="/images/warrior1.jpg"
                alt="Chef preparing signature dish"
                className="relative rounded-2xl shadow-2xl w-full h-auto transform hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent rounded-2xl" />

              {/* Floating Badge */}
              <div className="absolute -bottom-6 -left-6 bg-gradient-to-r from-amber-400 to-amber-500 text-black p-6 rounded-2xl shadow-2xl transform rotate-3">
                <div className="text-2xl font-bold">Master Chef</div>
                <div className="text-sm opacity-80">Award Winner 2024</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
