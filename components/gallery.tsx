"use client"

import { useState, useEffect, useRef } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { X, ZoomIn } from "lucide-react"

const galleryImages = [
  { src: "/images/gallery1.jpg", alt: "Warrior's Feast Burger", category: "food", featured: true },
  { src: "/images/gallery2.jpg", alt: "Eagle's Pride Kebab", category: "food", featured: true },
  { src: "/images/gallery3.jpg", alt: "Restaurant Interior", category: "restaurant", featured: false },
  { src: "/images/gallery7.jpg", alt: "Open Kitchen", category: "restaurant", featured: true },
  { src: "/images/gallery8.jpg", alt: "Grilled Perfection", category: "food", featured: false },
  { src: "/images/gallery9.jpg", alt: "Chef at Work", category: "restaurant", featured: false },
  { src: "/images/redhawks1.jpg", alt: "Signature Cocktails", category: "drinks", featured: true },
  { src: "/images/redhawks2.jpg", alt: "Private Dining", category: "restaurant", featured: false },
  { src: "/images/shack1.jpg", alt: "Fresh Ingredients", category: "food", featured: false },
  { src: "/images/gallery10.jpg", alt: "Warrior's Lounge", category: "restaurant", featured: true },
  { src: "/images/shack3.jpg", alt: "Dessert Selection", category: "food", featured: false },
  { src: "/images/warrior1.jpg", alt: "Outdoor Terrace", category: "restaurant", featured: false },
]

const categories = [
  { name: "All", value: "all" },
  { name: "Food", value: "food" },
  { name: "Restaurant", value: "restaurant" },
  { name: "Drinks", value: "drinks" },
]

export default function Gallery() {
  const [filter, setFilter] = useState("all")
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  const filteredImages = filter === "all" ? galleryImages : galleryImages.filter((img) => img.category === filter)

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
    <section id="gallery" ref={ref} className="py-24 bg-gradient-to-b from-black to-zinc-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 80%, #f59e0b 0%, transparent 50%), 
                           radial-gradient(circle at 80% 20%, #dc2626 0%, transparent 50%),
                           radial-gradient(circle at 40% 40%, #f59e0b 0%, transparent 50%)`,
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div
            className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <Badge className="bg-amber-400/10 text-amber-400 border-amber-400/20 mb-6 px-4 py-2">VISUAL FEAST</Badge>
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-red-500">Gallery</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-12">
              Immerse yourself in the artistry of our culinary creations and the ambiance of our warrior's den
            </p>

            {/* Filter Buttons */}
            <div className="flex justify-center">
              <div className="bg-zinc-900/50 backdrop-blur-sm rounded-2xl p-2 border border-zinc-800">
                {categories.map((category) => (
                  <Button
                    key={category.value}
                    variant={filter === category.value ? "default" : "ghost"}
                    className={`px-6 py-3 rounded-xl transition-all duration-300 ${
                      filter === category.value
                        ? "bg-gradient-to-r from-amber-400 to-amber-500 text-black shadow-lg"
                        : "text-gray-400 hover:text-white hover:bg-zinc-800"
                    }`}
                    onClick={() => setFilter(category.value)}
                  >
                    {category.name}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredImages.map((image, index) => (
            <Card
              key={index}
              className={`overflow-hidden bg-zinc-900/50 border-zinc-800 hover:border-amber-400/30 transition-all duration-500 transform hover:scale-105 cursor-pointer group ${
                image.featured ? "md:col-span-2 md:row-span-2" : ""
              } ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              style={{ transitionDelay: `${index * 100}ms` }}
              onClick={() => setSelectedImage(index)}
            >
              <div className="relative overflow-hidden">
                <img
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  className={`w-full object-cover transition-transform duration-700 group-hover:scale-110 ${
                    image.featured ? "h-96" : "h-64"
                  }`}
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <ZoomIn className="w-8 h-8 text-white" />
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white font-semibold text-lg mb-2">{image.alt}</p>
                  <Badge
                    className={`${
                      image.category === "food"
                        ? "bg-amber-400/20 text-amber-400 border-amber-400/30"
                        : image.category === "restaurant"
                          ? "bg-red-600/20 text-red-400 border-red-600/30"
                          : "bg-blue-600/20 text-blue-400 border-blue-600/30"
                    } backdrop-blur-sm`}
                  >
                    {image.category}
                  </Badge>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage !== null && (
          <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="relative max-w-4xl max-h-full">
              <img
                src={filteredImages[selectedImage].src || "/placeholder.svg"}
                alt={filteredImages[selectedImage].alt}
                className="max-w-full max-h-full object-contain rounded-lg"
              />
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-4 right-4 text-white hover:bg-white/20"
                onClick={() => setSelectedImage(null)}
              >
                <X className="w-6 h-6" />
              </Button>
              <div className="absolute bottom-4 left-4 right-4 text-center">
                <p className="text-white text-xl font-semibold">{filteredImages[selectedImage].alt}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
