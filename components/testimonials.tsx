"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Marcus Thompson",
    role: "Food Critic",
    company: "Culinary Weekly",
    rating: 5,
    text: "Redhawk's has redefined what a burger restaurant can be. The fusion of traditional techniques with modern innovation creates an unforgettable dining experience.",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    name: "Sarah Chen",
    role: "Executive Chef",
    company: "Metropolitan Bistro",
    rating: 5,
    text: "The attention to detail and quality of ingredients at Redhawk's is exceptional. Every dish tells a story and delivers on flavor.",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    name: "David Rodriguez",
    role: "Food Blogger",
    company: "Taste Adventures",
    rating: 5,
    text: "From the moment you walk in, you know you're in for something special. The warrior theme isn't just aesthetic—it's reflected in the bold, fearless flavors.",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    name: "Emily Watson",
    role: "Restaurant Owner",
    company: "Local Eats",
    rating: 5,
    text: "Redhawk's sets the standard for what modern dining should be. The combination of atmosphere, service, and incredible food is unmatched.",
    image: "/placeholder.svg?height=100&width=100",
  },
]

export default function Testimonials() {
  const [isVisible, setIsVisible] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
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
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section ref={ref} className="py-24 bg-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-red-600/5 via-transparent to-amber-400/5" />
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-amber-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 left-0 w-96 h-96 bg-red-600/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div
            className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <Badge className="bg-red-600/10 text-red-400 border-red-600/20 mb-6 px-4 py-2">TESTIMONIALS</Badge>
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
              What{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-red-500">Warriors</span>{" "}
              Say
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Hear from culinary experts and food enthusiasts who have experienced the Redhawk's difference
            </p>
          </div>
        </div>

        {/* Featured Testimonial */}
        <div
          className={`mb-16 transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <Card className="bg-gradient-to-r from-zinc-900/50 to-zinc-800/50 border-zinc-700/50 backdrop-blur-sm max-w-4xl mx-auto">
            <CardContent className="p-12">
              <div className="text-center">
                <Quote className="w-12 h-12 text-amber-400 mx-auto mb-6" />
                <blockquote className="text-2xl md:text-3xl text-white font-light leading-relaxed mb-8">
                  "{testimonials[currentIndex].text}"
                </blockquote>
                <div className="flex items-center justify-center gap-4">
                  <img
                    src={testimonials[currentIndex].image || "/placeholder.svg"}
                    alt={testimonials[currentIndex].name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-amber-400"
                  />
                  <div className="text-left">
                    <div className="text-white font-semibold text-lg">{testimonials[currentIndex].name}</div>
                    <div className="text-amber-400">{testimonials[currentIndex].role}</div>
                    <div className="text-gray-400 text-sm">{testimonials[currentIndex].company}</div>
                  </div>
                </div>
                <div className="flex justify-center gap-1 mt-4">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-amber-400 fill-current" />
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Testimonial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className={`bg-zinc-900/50 border-zinc-800 hover:border-amber-400/30 transition-all duration-500 transform hover:scale-105 cursor-pointer ${
                index === currentIndex ? "border-amber-400/50 shadow-lg shadow-amber-400/10" : ""
              } ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              style={{ transitionDelay: `${index * 150}ms` }}
              onClick={() => setCurrentIndex(index)}
            >
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <img
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="text-white font-semibold">{testimonial.name}</div>
                    <div className="text-gray-400 text-sm">{testimonial.role}</div>
                  </div>
                </div>
                <div className="flex gap-1 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-amber-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 text-sm leading-relaxed line-clamp-3">{testimonial.text}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center mt-12 gap-3">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex ? "bg-amber-400 scale-125" : "bg-zinc-700 hover:bg-zinc-600"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
