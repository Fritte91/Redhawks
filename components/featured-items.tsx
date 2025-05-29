"use client"

import { useState, useEffect, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, Flame, Award } from "lucide-react"

const featuredItems = [
  {
    name: "Warrior's Feast",
    price: "฿249",
    description: "Our signature double-stack masterpiece with aged wagyu beef, truffle aioli, and artisanal cheese",
    image: "/images/burger4.jpg",
    badges: ["Signature", "Premium"],
    rating: 4.9,
    icon: Award,
    details:
      "This legendary burger features two premium wagyu beef patties, each flame-grilled to perfection. Topped with aged cheddar, crispy bacon, caramelized onions, and our secret warrior sauce. Served with a side of hand-cut sweet potato fries dusted with our special spice blend.",
  },
  {
    name: "Thunder Eagle Kebab",
    price: "฿229",
    description: "Flame-grilled lamb marinated in sacred spices, served with saffron rice and grilled vegetables",
    image: "/images/burger5.jpg",
    badges: ["Spicy", "Chef's Choice"],
    rating: 4.8,
    icon: Flame,
    details:
      "Premium cuts of lamb marinated for 24 hours in our blend of 12 traditional spices. Skewered with bell peppers, onions, and tomatoes, then grilled over open flames. Served with aromatic saffron rice, grilled vegetables, and our house-made tzatziki sauce.",
  },
  {
    name: "Sacred Fire Burger",
    price: "฿199",
    description: "Plant-based patty with smoky chipotle sauce, avocado, and heritage tomatoes",
    image: "/images/burger6.jpg",
    badges: ["Vegan", "Healthy"],
    rating: 4.7,
    icon: Star,
    details:
      "Our plant-based masterpiece features a house-made patty of black beans, quinoa, and roasted vegetables. Topped with fresh avocado, heritage tomatoes, crisp lettuce, and our signature smoky chipotle sauce. Served on a toasted artisanal bun with a side of mixed greens.",
  },
]

export default function FeaturedItems() {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const [expandedCard, setExpandedCard] = useState<number | null>(null)

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

  return (
    <section ref={ref} className="py-24 bg-gradient-to-b from-zinc-900 to-black relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, #f59e0b 0%, transparent 50%), 
                           radial-gradient(circle at 75% 75%, #dc2626 0%, transparent 50%)`,
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div
            className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <Badge className="bg-amber-400/10 text-amber-400 border-amber-400/20 mb-4 px-4 py-2">
              SIGNATURE COLLECTION
            </Badge>
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Legendary{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-red-500">
                Creations
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Discover our most celebrated dishes, each crafted with passion and inspired by ancient traditions
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {featuredItems.map((item, index) => {
            const IconComponent = item.icon
            return (
              <Card
                key={index}
                className={`bg-gradient-to-b from-zinc-800 to-zinc-900 border-amber-400/20 backdrop-blur-sm hover:border-amber-400/50 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-amber-400/20 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={item.image || "/placeholder.svg"}
                    alt={item.name}
                    className="w-full h-64 object-cover transition-transform duration-700 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute top-4 left-4">
                    <IconComponent className="w-8 h-8 text-amber-400" />
                  </div>
                  <div className="absolute top-4 right-4 flex gap-2">
                    {item.badges.map((badge, i) => (
                      <Badge key={i} className="bg-black/60 text-white border-none backdrop-blur-sm">
                        {badge}
                      </Badge>
                    ))}
                  </div>
                  <div className="absolute bottom-4 left-4 flex items-center gap-1">
                    <Star className="w-4 h-4 text-amber-400 fill-current" />
                    <span className="text-white font-semibold">{item.rating}</span>
                  </div>
                </div>

                <CardContent className="p-6 md:p-8">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl md:text-2xl font-bold text-white">{item.name}</h3>
                    <span className="text-xl md:text-2xl font-bold text-amber-400">{item.price}</span>
                  </div>
                  <p className="text-gray-200 mb-6 leading-relaxed text-sm md:text-base">{item.description}</p>
                  <Button
                    className="w-full bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-black font-semibold py-3 transform hover:scale-105 transition-all duration-300"
                    onClick={(e) => {
                      e.stopPropagation()
                      setExpandedCard(expandedCard === index ? null : index)
                    }}
                  >
                    {expandedCard === index ? "Show Less" : "Read More"}
                  </Button>
                  {expandedCard === index && (
                    <div className="mt-4 pt-4 border-t border-amber-400/20 text-gray-200 leading-relaxed animate-fade-in text-sm md:text-base">
                      {item.details}
                    </div>
                  )}
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
