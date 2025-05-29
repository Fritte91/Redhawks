"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Play, ArrowRight } from "lucide-react"

export default function Hero() {
  const [mounted, setMounted] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      image: "/images/burger3.jpg",
      title: "Legendary Flavors",
      subtitle: "Born from Fire & Tradition",
    },
    {
      image: "/images/burger2.jpg",
      title: "Warrior's Feast",
      subtitle: "Where Every Bite Tells a Story",
    },
    {
      image: "/images/burger1.jpg",
      title: "Sacred Recipes",
      subtitle: "Passed Down Through Generations",
    },
  ]

  useEffect(() => {
    setMounted(true)
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [slides.length])

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
            style={{
              backgroundImage: `url(${slide.image})`,
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
        </div>
      ))}

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-amber-400 rounded-full animate-pulse opacity-60" />
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-red-500 rounded-full animate-ping opacity-40" />
        <div className="absolute bottom-1/3 left-1/5 w-3 h-3 bg-amber-300 rounded-full animate-bounce opacity-30" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl">
            <div
              className={`transition-all duration-1000 delay-300 ${
                mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              {/* Brand Logo */}
              

              <h2 className="text-6xl md:text-8xl font-bold text-white mb-6 leading-tight">
                {slides[currentSlide].title}
              </h2>
              <p className="text-2xl md:text-3xl text-amber-400 mb-8 font-light">{slides[currentSlide].subtitle}</p>
              <p className="text-xl text-gray-300 mb-12 max-w-2xl leading-relaxed">
                Experience the perfect fusion of Native American heritage and contemporary culinary artistry. Every dish
                is a journey through flavor, tradition, and innovation.
              </p>

              <div className="flex flex-col sm:flex-row gap-6">
                <a href="#menu">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-8 py-4 text-lg font-semibold shadow-2xl transform hover:scale-105 transition-all duration-300"
                  >
                    Explore Menu
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </a>
                <a href="/blog">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-black px-8 py-4 text-lg font-semibold backdrop-blur-sm bg-black/20 transform hover:scale-105 transition-all duration-300"
                  >
                    <Play className="mr-2 w-5 h-5" />
                    Watch Story
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? "bg-amber-400 scale-125" : "bg-white/30 hover:bg-white/50"
            }`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 right-8 text-white/60 animate-bounce">
        <div className="flex flex-col items-center">
          <span className="text-sm mb-2 rotate-90 origin-center">SCROLL</span>
          <div className="w-px h-12 bg-gradient-to-b from-white/60 to-transparent" />
        </div>
      </div>
    </section>
  )
}
