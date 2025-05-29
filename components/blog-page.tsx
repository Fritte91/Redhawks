"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Calendar, User, Clock, ArrowRight, Search, Filter } from "lucide-react"
import Link from "next/link"

const allBlogPosts = [
  {
    id: 1,
    slug: "ancient-art-fire-grilled",
    title: "The Ancient Art of Fire-Grilled Perfection",
    excerpt:
      "Discover the time-honored techniques that give our burgers their distinctive smoky flavor and perfect char...",
    image: "/placeholder.svg?height=400&width=600",
    date: "2024-01-20",
    author: "Chef Marcus Redhawk",
    category: "Culinary Secrets",
    readTime: "5 min read",
    featured: true,
  },
  {
    id: 2,
    slug: "sourcing-sacred-ingredients",
    title: "Sourcing the Sacred: Our Ingredient Journey",
    excerpt:
      "From local farms to ancient spice routes, learn about our commitment to premium, ethically-sourced ingredients...",
    image: "/placeholder.svg?height=300&width=400",
    date: "2024-01-15",
    author: "Sarah Chen",
    category: "Sustainability",
    readTime: "3 min read",
    featured: false,
  },
  {
    id: 3,
    slug: "behind-scenes-warriors-kitchen",
    title: "Behind the Scenes: A Day in the Warrior's Kitchen",
    excerpt: "Take an exclusive look at the precision, passion, and artistry that goes into every dish we serve...",
    image: "/placeholder.svg?height=300&width=400",
    date: "2024-01-10",
    author: "Kitchen Team",
    category: "Behind the Scenes",
    readTime: "4 min read",
    featured: false,
  },
  {
    id: 4,
    slug: "autumn-warrior-collection",
    title: "New Seasonal Menu: Autumn Warrior Collection",
    excerpt:
      "Introducing our limited-time autumn menu featuring seasonal ingredients and bold new flavor combinations...",
    image: "/placeholder.svg?height=300&width=400",
    date: "2024-01-05",
    author: "Chef Marcus Redhawk",
    category: "Menu Updates",
    readTime: "2 min read",
    featured: false,
  },
  {
    id: 5,
    slug: "warriors-spice-blend-secret",
    title: "The Warrior's Spice Blend: A Secret Recipe Revealed",
    excerpt:
      "After years of requests, we're sharing the story behind our signature spice blend that makes every dish legendary...",
    image: "/placeholder.svg?height=300&width=400",
    date: "2024-01-01",
    author: "Chef Marcus Redhawk",
    category: "Recipes",
    readTime: "6 min read",
    featured: false,
  },
  {
    id: 6,
    slug: "community-warriors-local-farmers",
    title: "Community Warriors: Supporting Local Farmers",
    excerpt: "Meet the local farmers and suppliers who help us bring the freshest ingredients to your plate...",
    image: "/placeholder.svg?height=300&width=400",
    date: "2023-12-28",
    author: "Sarah Chen",
    category: "Community",
    readTime: "4 min read",
    featured: false,
  },
]

const categories = [
  "All",
  "Culinary Secrets",
  "Sustainability",
  "Behind the Scenes",
  "Menu Updates",
  "Recipes",
  "Community",
]

export default function BlogPage() {
  const [mounted, setMounted] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [searchTerm, setSearchTerm] = useState("")
  const [filteredPosts, setFilteredPosts] = useState(allBlogPosts)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    let filtered = allBlogPosts

    if (selectedCategory !== "All") {
      filtered = filtered.filter((post) => post.category === selectedCategory)
    }

    if (searchTerm) {
      filtered = filtered.filter(
        (post) =>
          post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
          post.author.toLowerCase().includes(searchTerm.toLowerCase()),
      )
    }

    setFilteredPosts(filtered)
  }, [selectedCategory, searchTerm])

  const featuredPost = allBlogPosts.find((post) => post.featured)
  const regularPosts = filteredPosts.filter((post) => !post.featured)

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-zinc-900 to-black">
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-b from-zinc-900 to-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 25% 25%, #f59e0b 0%, transparent 50%), 
                             radial-gradient(circle at 75% 75%, #dc2626 0%, transparent 50%)`,
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div
            className={`text-center transition-all duration-1000 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <Link
              href="/"
              className="inline-flex items-center text-amber-400 hover:text-amber-300 mb-6 transition-colors"
            >
              <ArrowRight className="w-4 h-4 mr-2 rotate-180" />
              Back to Home
            </Link>
            <Badge className="bg-amber-400/10 text-amber-400 border-amber-400/20 mb-6 px-4 py-2">
              WARRIOR'S CHRONICLES
            </Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
              Stories from the{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-red-500">Kitchen</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
              Dive deep into our culinary world with stories, recipes, and insights from our master chefs
            </p>

            {/* Search and Filter */}
            <div className="max-w-2xl mx-auto">
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <Input
                    placeholder="Search stories..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 bg-zinc-800/50 border-zinc-700 text-white placeholder-gray-400 focus:border-amber-400"
                  />
                </div>
                <Button
                  variant="outline"
                  className="border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-black sm:w-auto w-full"
                >
                  <Filter className="w-4 h-4 mr-2" />
                  Filter
                </Button>
              </div>

              {/* Category Pills */}
              <div className="flex flex-wrap justify-center gap-2 md:gap-3">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    size="sm"
                    className={`${
                      selectedCategory === category
                        ? "bg-gradient-to-r from-red-600 to-red-700 text-white"
                        : "border-zinc-600 text-gray-300 hover:border-amber-400 hover:text-amber-400"
                    } transition-all duration-300 text-xs md:text-sm`}
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && selectedCategory === "All" && !searchTerm && (
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="bg-gradient-to-r from-zinc-800 to-zinc-900 border-amber-400/20 backdrop-blur-sm overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative overflow-hidden">
                  <img
                    src={featuredPost.image || "/placeholder.svg"}
                    alt={featuredPost.title}
                    className="w-full h-64 md:h-80 lg:h-full object-cover transition-transform duration-700 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent" />
                  <Badge className="absolute top-4 md:top-6 left-4 md:left-6 bg-red-600 text-white">Featured</Badge>
                </div>
                <div className="p-6 md:p-8 lg:p-12 flex flex-col justify-center">
                  <Badge className="bg-amber-400/20 text-amber-400 border-amber-400/30 w-fit mb-4">
                    {featuredPost.category}
                  </Badge>
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight">
                    {featuredPost.title}
                  </h3>
                  <p className="text-gray-200 text-base md:text-lg mb-6 leading-relaxed">{featuredPost.excerpt}</p>
                  <div className="flex flex-wrap items-center gap-4 md:gap-6 text-sm text-gray-400 mb-6">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {new Date(featuredPost.date).toLocaleDateString("en-US", {
                        month: "long",
                        day: "numeric",
                        year: "numeric",
                      })}
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
                  <Link href={`/blog/${featuredPost.slug}`}>
                    <Button className="bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-black font-semibold w-fit">
                      Read Full Story
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </Card>
          </div>
        </section>
      )}

      {/* Blog Posts Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredPosts.length === 0 ? (
            <div className="text-center py-16">
              <h3 className="text-2xl font-bold text-white mb-4">No stories found</h3>
              <p className="text-gray-400">Try adjusting your search or filter criteria</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {regularPosts.map((post, index) => (
                <Card
                  key={post.id}
                  className="bg-gradient-to-b from-zinc-800 to-zinc-900 border-amber-400/20 hover:border-amber-400/50 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-amber-400/20"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      className="w-full h-48 object-cover transition-transform duration-700 hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <Badge className="absolute top-4 left-4 bg-black/60 text-white border-none backdrop-blur-sm text-xs">
                      {post.category}
                    </Badge>
                  </div>

                  <CardHeader className="pb-4">
                    <CardTitle className="text-lg md:text-xl text-white hover:text-amber-400 transition-colors leading-tight">
                      {post.title}
                    </CardTitle>
                    <div className="flex flex-wrap items-center gap-3 md:gap-4 text-xs md:text-sm text-gray-400">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {new Date(post.date).toLocaleDateString()}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {post.readTime}
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="pt-0">
                    <CardDescription className="text-gray-200 mb-4 leading-relaxed text-sm md:text-base">
                      {post.excerpt}
                    </CardDescription>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-xs md:text-sm text-gray-400">
                        <User className="w-3 h-3" />
                        {post.author}
                      </div>
                      <Link href={`/blog/${post.slug}`}>
                        <Button
                          variant="ghost"
                          className="text-amber-400 hover:text-amber-300 hover:bg-amber-400/10 p-2"
                        >
                          <ArrowRight className="w-4 h-4" />
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Back to Home */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Link href="/">
            <Button className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-6 md:px-8 py-3 md:py-4 text-base md:text-lg font-semibold transform hover:scale-105 transition-all duration-300">
              Back to Home
              <ArrowRight className="ml-2 w-4 md:w-5 h-4 md:h-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
