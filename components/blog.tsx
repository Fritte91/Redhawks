"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, User, ArrowRight, Clock } from "lucide-react"
import Link from "next/link"
import { format } from "date-fns"

const blogPosts = [
  {
    title: "The Ancient Art of Fire-Grilled Perfection",
    excerpt:
      "Discover the time-honored techniques that give our burgers their distinctive smoky flavor and perfect char...",
    image: "/images/shack1.jpg",
    date: "2024-01-20",
    author: "Chef Marcus Redhawk",
    category: "Culinary Secrets",
    readTime: "5 min read",
    featured: true,
  },
  {
    title: "Sourcing the Sacred: Our Ingredient Journey",
    excerpt:
      "From local farms to ancient spice routes, learn about our commitment to premium, ethically-sourced ingredients...",
    image: "/images/shack2.jpg",
    date: "2024-01-15",
    author: "Sarah Chen",
    category: "Sustainability",
    readTime: "3 min read",
    featured: false,
  },
  {
    title: "Behind the Scenes: A Day in the Warrior's Kitchen",
    excerpt: "Take an exclusive look at the precision, passion, and artistry that goes into every dish we serve...",
    image: "/images/shack3.jpg",
    date: "2024-01-10",
    author: "Kitchen Team",
    category: "Behind the Scenes",
    readTime: "4 min read",
    featured: false,
  },
  {
    title: "New Seasonal Menu: Autumn Warrior Collection",
    excerpt:
      "Introducing our limited-time autumn menu featuring seasonal ingredients and bold new flavor combinations...",
    image: "/images/warrior1.jpg",
    date: "2024-01-05",
    author: "Chef Marcus Redhawk",
    category: "Menu Updates",
    readTime: "2 min read",
    featured: false,
  },
]

export default function Blog() {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

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

  const featuredPost = blogPosts.find((post) => post.featured)
  const regularPosts = blogPosts.filter((post) => !post.featured)

  return (
    <section id="blog" ref={ref} className="py-24 bg-gradient-to-b from-zinc-900 to-black relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(45deg, transparent 40%, #f59e0b 40%, #f59e0b 60%, transparent 60%),
                           linear-gradient(-45deg, transparent 40%, #dc2626 40%, #dc2626 60%, transparent 60%)`,
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div
            className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <Badge className="bg-amber-400/10 text-amber-400 border-amber-400/20 mb-6 px-4 py-2">
              WARRIOR'S CHRONICLES
            </Badge>
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Stories from the{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-red-500">Kitchen</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Dive deep into our culinary world with stories, recipes, and insights from our master chefs
            </p>
          </div>
        </div>

        {/* Featured Post */}
        {featuredPost && (
          <div
            className={`mb-16 transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <Card className="bg-gradient-to-r from-zinc-900/50 to-zinc-800/50 border-zinc-700/50 backdrop-blur-sm overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative overflow-hidden">
                  <img
                    src={featuredPost.image || "/placeholder.svg"}
                    alt={featuredPost.title}
                    className="w-full h-80 lg:h-full object-cover transition-transform duration-700 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent" />
                  <Badge className="absolute top-6 left-6 bg-red-600 text-white">Featured</Badge>
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <Badge className="bg-amber-400/20 text-amber-400 border-amber-400/30 w-fit mb-4">
                    {featuredPost.category}
                  </Badge>
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">{featuredPost.title}</h3>
                  <p className="text-gray-300 text-lg mb-6 leading-relaxed">{featuredPost.excerpt}</p>
                  <div className="flex items-center gap-6 text-sm text-gray-400 mb-6">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {format(new Date(featuredPost.date), "yyyy-MM-dd")}
                    </div>
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      {featuredPost.author}
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      {featuredPost.readTime}
                    </div>
                  </div>
                  <Button className="bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-black font-semibold w-fit">
                    Read Full Story
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        )}

        {/* Regular Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {regularPosts.map((post, index) => (
            <Card
              key={index}
              className={`bg-zinc-900/50 border-zinc-800 hover:border-amber-400/30 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-amber-400/10 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${(index + 1) * 200}ms` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  className="w-full h-48 object-cover transition-transform duration-700 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <Badge className="absolute top-4 left-4 bg-black/60 text-white border-none backdrop-blur-sm">
                  {post.category}
                </Badge>
              </div>

              <CardHeader className="pb-4">
                <CardTitle className="text-xl text-white hover:text-amber-400 transition-colors leading-tight">
                  {post.title}
                </CardTitle>
                <div className="flex items-center gap-4 text-sm text-gray-400">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {format(new Date(post.date), "yyyy-MM-dd")}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {post.readTime}
                  </div>
                </div>
              </CardHeader>

              <CardContent className="pt-0">
                <CardDescription className="text-gray-300 mb-4 leading-relaxed">{post.excerpt}</CardDescription>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <User className="w-3 h-3" />
                    {post.author}
                  </div>
                  <Button variant="ghost" className="text-amber-400 hover:text-amber-300 hover:bg-amber-400/10 p-2">
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <Link href="/blog">
            <Button className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-6 md:px-8 py-3 md:py-4 text-base md:text-lg font-semibold transform hover:scale-105 transition-all duration-300">
              View All Stories
              <ArrowRight className="ml-2 w-4 md:w-5 h-4 md:h-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
