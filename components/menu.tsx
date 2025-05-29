"use client"

import { useState, useEffect, useRef } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Star, Flame, Award, Zap, Coffee } from "lucide-react"

const menuCategories = [
  {
    name: "Signature Burgers",
    icon: Award,
    items: [
      {
        name: "Warrior's Conquest",
        price: "฿269",
        description: "Wagyu beef, aged gruyere, truffle aioli, caramelized onions, arugula on brioche",
        ingredients: ["Wagyu Beef", "Aged Gruyere", "Truffle Aioli", "Caramelized Onions", "Arugula", "Brioche Bun"],
        badges: ["Premium", "Signature"],
        rating: 4.9,
        image: "/images/burger4.jpg",
        details:
          "Our flagship burger features premium wagyu beef sourced from select farms, topped with imported aged gruyere cheese that adds a nutty depth. The house-made truffle aioli provides an earthy luxury, while caramelized onions add sweetness. Served on a freshly baked brioche bun with peppery arugula for balance.",
      },
      {
        name: "Thunder Chief",
        price: "฿229",
        description: "Double smash patties, smoked cheddar, bacon jam, pickled jalapeños, chipotle mayo",
        ingredients: ["Double Beef Patties", "Smoked Cheddar", "Bacon Jam", "Pickled Jalapeños", "Chipotle Mayo"],
        badges: ["Spicy", "Popular"],
        rating: 4.8,
        image: "/images/burger5.jpg",
        details:
          "Two perfectly smashed beef patties create a caramelized crust, topped with melted smoked cheddar and our house-made bacon jam. The pickled jalapeños add heat and acidity, while the smoky chipotle mayo brings everything together. A burger that commands respect with every bite.",
      },
      {
        name: "Sacred Fire",
        price: "฿199",
        description: "Plant-based patty, cashew cheese, avocado, heritage tomatoes, hemp seed bun",
        ingredients: ["Plant Patty", "Cashew Cheese", "Avocado", "Heritage Tomatoes", "Hemp Seed Bun"],
        badges: ["Vegan", "Healthy"],
        rating: 4.7,
        image: "/images/burger6.jpg",
        details:
          "Our vegan masterpiece features a house-made plant patty of lentils, mushrooms, and ancient grains. Topped with creamy cashew cheese, fresh avocado, and juicy heritage tomatoes. Served on a protein-rich hemp seed bun that complements the earthy flavors of this guilt-free indulgence.",
      },
    ],
  },
  {
    name: "Artisan Kebabs",
    icon: Flame,
    items: [
      {
        name: "Eagle's Pride",
        price: "฿289",
        description: "Premium lamb, saffron marinade, grilled vegetables, tzatziki, warm naan",
        ingredients: ["Premium Lamb", "Saffron Marinade", "Grilled Vegetables", "Tzatziki", "Naan Bread"],
        badges: ["Premium", "Chef's Choice"],
        rating: 4.9,
        image: "/images/kebab1.jpg",
        details:
          "Tender cuts of premium lamb marinated in saffron-infused yogurt for 24 hours. Skewered with seasonal vegetables and grilled over open flames. Served with cooling tzatziki sauce and freshly baked naan bread. A royal feast worthy of its name.",
      },
      {
        name: "Phoenix Rising",
        price: "฿249",
        description: "Spiced chicken, pomegranate glaze, roasted peppers, garlic yogurt, basmati rice",
        ingredients: ["Spiced Chicken", "Pomegranate Glaze", "Roasted Peppers", "Garlic Yogurt", "Basmati Rice"],
        badges: ["Spicy", "Popular"],
        rating: 4.8,
        image: "/images/kebab2.jpg",
        details:
          "Succulent chicken thighs marinated in our secret blend of 15 spices, then grilled to perfection. Glazed with sweet-tart pomegranate reduction and served with flame-roasted peppers. Accompanied by cooling garlic yogurt and fragrant basmati rice. A dish that rises above the ordinary.",
      },
      {
        name: "Desert Storm",
        price: "฿219",
        description: "Beef kofta, harissa spice, grilled onions, tahini sauce, flatbread",
        ingredients: ["Beef Kofta", "Harissa Spice", "Grilled Onions", "Tahini Sauce", "Flatbread"],
        badges: ["Spicy", "Traditional"],
        rating: 4.6,
        image: "/images/kebab3.jpg",
        details:
          "Hand-rolled beef kofta seasoned with traditional Middle Eastern spices and fiery harissa. Grilled to perfection with caramelized onions and served with creamy tahini sauce and warm flatbread. A taste of the ancient spice routes.",
      },
    ],
  },
  {
    name: "Hot Dogs",
    icon: Zap,
    items: [
      {
        name: "Warrior's Fury",
        price: "฿159",
        description: "All-beef frank, spicy mustard, jalapeño relish, crispy onions, brioche bun",
        ingredients: ["All-Beef Frank", "Spicy Mustard", "Jalapeño Relish", "Crispy Onions", "Brioche Bun"],
        badges: ["Spicy", "Popular"],
        rating: 4.5,
        image: "/images/hotdog1.jpg",
        details:
          "Premium all-beef frankfurter grilled to perfection and topped with house-made spicy mustard and jalapeño relish. Finished with crispy fried onions for texture and served on a toasted brioche bun. Simple yet extraordinary.",
      },
      {
        name: "Chief's Classic",
        price: "฿139",
        description: "Premium beef frank, caramelized onions, yellow mustard, ketchup, sesame bun",
        ingredients: ["Premium Beef Frank", "Caramelized Onions", "Yellow Mustard", "Ketchup", "Sesame Bun"],
        badges: ["Classic", "Family Favorite"],
        rating: 4.4,
        image: "/images/hotdog2.jpg",
        details:
          "A timeless classic featuring our premium beef frankfurter with perfectly caramelized onions, yellow mustard, and ketchup on a soft sesame seed bun. Sometimes the traditional way is the best way.",
      },
      {
        name: "Smoke Signal",
        price: "฿179",
        description: "Smoked sausage, BBQ sauce, coleslaw, pickles, pretzel bun",
        ingredients: ["Smoked Sausage", "BBQ Sauce", "Coleslaw", "Pickles", "Pretzel Bun"],
        badges: ["Smoky", "Chef's Choice"],
        rating: 4.6,
        image: "/images/hotdog3.jpg",
        details:
          "House-smoked sausage with our signature BBQ sauce, topped with creamy coleslaw and tangy pickles. Served on a warm pretzel bun for the perfect combination of smoky, sweet, and tangy flavors.",
      },
    ],
  },
  {
    name: "Snacks & Drinks",
    icon: Coffee,
    items: [
      {
        name: "War Paint Fries",
        price: "฿89",
        description: "Hand-cut fries, warrior spice blend, garlic aioli, parmesan",
        ingredients: ["Hand-Cut Potatoes", "Warrior Spice", "Garlic Aioli", "Parmesan Cheese"],
        badges: ["Popular", "Shareable"],
        rating: 4.7,
        image: "/images/fries1.jpg",
        details:
          "Crispy hand-cut fries seasoned with our signature warrior spice blend and topped with freshly grated parmesan. Served with house-made garlic aioli for dipping. The perfect side for any meal.",
      },
      {
        name: "Thunder Wings",
        price: "฿149",
        description: "Buffalo wings, blue cheese dip, celery sticks, hot sauce",
        ingredients: ["Chicken Wings", "Buffalo Sauce", "Blue Cheese Dip", "Celery Sticks"],
        badges: ["Spicy", "Popular"],
        rating: 4.6,
        image: "/images/kebab1.jpg",
        details:
          "Crispy chicken wings tossed in our fiery buffalo sauce and served with cooling blue cheese dip and fresh celery sticks. Perfect for sharing or as a spicy appetizer.",
      },
      {
        name: "Warrior's Brew",
        price: "฿59",
        description: "House-blend coffee, cold brew, or traditional Thai iced tea",
        ingredients: ["Coffee Beans", "Cold Brew", "Thai Tea", "Ice", "Milk"],
        badges: ["Refreshing", "Local Favorite"],
        rating: 4.3,
        image: "/images/kebab2.jpg",
        details:
          "Choose from our house-blend coffee, smooth cold brew, or traditional Thai iced tea. Each drink is carefully crafted to complement our bold flavors and provide the perfect refreshment.",
      },
      {
        name: "Sacred Smoothie",
        price: "฿79",
        description: "Mango, pineapple, coconut milk, chia seeds, honey",
        ingredients: ["Fresh Mango", "Pineapple", "Coconut Milk", "Chia Seeds", "Honey"],
        badges: ["Healthy", "Vegan Option"],
        rating: 4.5,
        image: "/images/hotdog1.jpg",
        details:
          "A tropical blend of fresh mango and pineapple with creamy coconut milk, nutritious chia seeds, and a touch of honey. Available with plant-based milk for our vegan warriors.",
      },
    ],
  },
]

export default function Menu() {
  const [selectedCategory, setSelectedCategory] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const [expandedItem, setExpandedItem] = useState<number | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={ref} className="py-24 bg-gradient-to-b from-zinc-900 to-black relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 100px, #f59e0b 100px, #f59e0b 101px)`,
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div
            className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <Badge className="bg-amber-400/10 text-amber-400 border-amber-400/20 mb-6 px-4 py-2">
              CULINARY EXCELLENCE
            </Badge>
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-red-500">Menu</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Each dish is a masterpiece, crafted with the finest ingredients and inspired by ancient traditions
            </p>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex justify-center mb-16">
          <div className="bg-zinc-900/50 backdrop-blur-sm rounded-2xl p-2 border border-zinc-800 overflow-x-auto">
            <div className="flex gap-2 min-w-max">
              {menuCategories.map((category, index) => {
                const IconComponent = category.icon
                return (
                  <Button
                    key={index}
                    variant={selectedCategory === index ? "default" : "ghost"}
                    className={`px-4 md:px-6 py-3 md:py-4 rounded-xl transition-all duration-300 whitespace-nowrap ${
                      selectedCategory === index
                        ? "bg-gradient-to-r from-red-600 to-red-700 text-white shadow-lg"
                        : "text-gray-400 hover:text-white hover:bg-zinc-800"
                    }`}
                    onClick={() => setSelectedCategory(index)}
                  >
                    <IconComponent className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                    <span className="text-sm md:text-base">{category.name}</span>
                  </Button>
                )
              })}
            </div>
          </div>
        </div>

        {/* Menu Items */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {menuCategories[selectedCategory].items.map((item, index) => (
            <Card
              key={index}
              className={`bg-gradient-to-b from-zinc-800 to-zinc-900 border-amber-400/20 backdrop-blur-sm hover:border-amber-400/50 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-amber-400/20 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="relative overflow-hidden rounded-t-lg">
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={item.name}
                  className="w-full h-48 object-cover transition-transform duration-700 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute top-4 left-4 flex gap-2 flex-wrap">
                  {item.badges.map((badge, i) => (
                    <Badge
                      key={i}
                      className={`${
                        badge === "Premium"
                          ? "bg-amber-400 text-black border-amber-400"
                          : badge === "Signature"
                            ? "bg-purple-500 text-white border-purple-500"
                            : badge === "Spicy"
                              ? "bg-red-500 text-white border-red-500"
                              : badge === "Popular"
                                ? "bg-green-500 text-white border-green-500"
                                : badge === "Vegan"
                                  ? "bg-emerald-500 text-white border-emerald-500"
                                  : badge === "Healthy"
                                    ? "bg-blue-500 text-white border-blue-500"
                                    : badge === "Chef's Choice"
                                      ? "bg-orange-500 text-white border-orange-500"
                                      : badge === "Classic"
                                        ? "bg-indigo-500 text-white border-indigo-500"
                                        : badge === "Family Favorite"
                                          ? "bg-pink-500 text-white border-pink-500"
                                          : badge === "Smoky"
                                            ? "bg-gray-600 text-white border-gray-600"
                                            : badge === "Shareable"
                                              ? "bg-cyan-500 text-white border-cyan-500"
                                              : badge === "Refreshing"
                                                ? "bg-teal-500 text-white border-teal-500"
                                                : badge === "Local Favorite"
                                                  ? "bg-yellow-500 text-black border-yellow-500"
                                                  : badge === "Vegan Option"
                                                    ? "bg-lime-500 text-black border-lime-500"
                                                    : badge === "Traditional"
                                                      ? "bg-rose-500 text-white border-rose-500"
                                                      : "bg-zinc-700 text-white border-zinc-700"
                      } font-semibold text-xs`}
                    >
                      {badge}
                    </Badge>
                  ))}
                </div>
                <div className="absolute bottom-4 left-4 flex items-center gap-1">
                  <Star className="w-4 h-4 text-amber-400 fill-current" />
                  <span className="text-white font-semibold">{item.rating}</span>
                </div>
                <div className="absolute bottom-4 right-4">
                  <span className="text-2xl font-bold text-amber-400">{item.price}</span>
                </div>
              </div>

              <CardHeader className="pb-4">
                <CardTitle className="text-lg md:text-xl text-white">{item.name}</CardTitle>
                <CardDescription className="text-gray-200 leading-relaxed text-sm md:text-base">
                  {item.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="pt-0 px-4 md:px-6 pb-4 md:pb-6">
                <div className="space-y-4">
                  <div>
                    <h4 className="text-amber-400 font-semibold mb-3 text-sm">INGREDIENTS</h4>
                    <div className="flex flex-wrap gap-2">
                      {item.ingredients.map((ingredient, i) => (
                        <Badge
                          key={i}
                          variant="outline"
                          className="border-amber-400/30 text-gray-200 text-xs bg-amber-400/10 hover:bg-amber-400/20 transition-colors"
                        >
                          {ingredient}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <Button
                    className="w-full bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-black font-semibold transform hover:scale-105 transition-all duration-300"
                    onClick={(e) => {
                      e.stopPropagation()
                      setExpandedItem(expandedItem === index ? null : index)
                    }}
                  >
                    {expandedItem === index ? "Show Less" : "Read More"}
                  </Button>

                  {expandedItem === index && (
                    <div className="mt-4 pt-4 border-t border-zinc-700/50 text-gray-300 leading-relaxed animate-fade-in">
                      {item.details}
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
