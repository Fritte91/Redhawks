"use client"

import { useState, useEffect } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, User, Clock, ArrowLeft, Share2 } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"

// Mock blog post data - in a real app, this would come from a CMS or API
const blogPosts = {
  "ancient-art-fire-grilled": {
    id: 1,
    title: "The Ancient Art of Fire-Grilled Perfection",
    excerpt:
      "Discover the time-honored techniques that give our burgers their distinctive smoky flavor and perfect char...",
    content: `
      <p>Fire has been humanity's cooking companion for millennia, and at Redhawk's, we honor this ancient tradition with every burger we grill. Our approach to fire-grilling isn't just about cooking meat—it's about creating an experience that connects our guests to the primal satisfaction of flame-kissed food.</p>

      <h3>The Sacred Flame</h3>
      <p>Our grilling process begins long before the first patty hits the grates. We carefully select our wood—a blend of hickory and oak that imparts just the right amount of smokiness without overwhelming the natural flavors of our premium beef. The fire is built with intention, creating zones of varying heat that allow our grill masters to cook each burger to perfection.</p>

      <p>The secret lies in understanding the relationship between fire, metal, and meat. Our custom-built grills maintain consistent temperatures while allowing for the natural variations that give each burger its unique character. We never rush the process—good things take time, and great burgers take even longer.</p>

      <h3>The Warrior's Technique</h3>
      <p>Each of our grill masters undergoes extensive training in what we call the "Warrior's Technique"—a method passed down from our head chef that emphasizes patience, precision, and respect for the ingredients. The technique involves:</p>

      <ul>
        <li><strong>Temperature Control:</strong> Maintaining the perfect heat zones for different stages of cooking</li>
        <li><strong>Timing:</strong> Understanding when to flip, when to move, and when to let the fire do its work</li>
        <li><strong>Intuition:</strong> Reading the signs—the sizzle, the aroma, the visual cues that tell us when perfection is achieved</li>
      </ul>

      <h3>The Science Behind the Sear</h3>
      <p>What many don't realize is that the perfect sear isn't just about flavor—it's about creating a barrier that locks in the juices while developing the complex flavors that make our burgers legendary. The Maillard reaction, which occurs when proteins and sugars are exposed to high heat, creates hundreds of new flavor compounds that simply can't be replicated any other way.</p>

      <p>Our patties are formed by hand, never pressed or compacted, allowing the natural texture of the meat to shine through. When they hit our 500-degree grates, magic happens. The exterior caramelizes while the interior remains tender and juicy—a perfect balance that defines the Redhawk's experience.</p>

      <h3>Beyond the Burger</h3>
      <p>This same fire-grilling philosophy extends to everything we serve. Our kebabs benefit from the same careful attention to flame and timing, while our vegetables develop a smoky sweetness that complements our bold flavors perfectly.</p>

      <p>At Redhawk's, we believe that cooking with fire isn't just a method—it's a meditation, a connection to our ancestors, and a commitment to serving food that nourishes both body and soul. Every burger that leaves our kitchen carries with it the essence of this ancient art, refined through modern technique and served with warrior pride.</p>

      <p>Come taste the difference that fire makes. Come experience the ancient art of grilling, perfected for the modern palate.</p>
    `,
    image: "/placeholder.svg?height=600&width=1200",
    date: "2024-01-20",
    author: "Chef Marcus Redhawk",
    category: "Culinary Secrets",
    readTime: "5 min read",
    featured: true,
  },
  "sourcing-sacred-ingredients": {
    id: 2,
    title: "Sourcing the Sacred: Our Ingredient Journey",
    excerpt:
      "From local farms to ancient spice routes, learn about our commitment to premium, ethically-sourced ingredients...",
    content: `
      <p>At Redhawk's, we believe that extraordinary food begins with extraordinary ingredients. Our commitment to sourcing the finest, most ethically-produced ingredients takes us on a journey that spans continents and connects us with farmers, producers, and artisans who share our passion for quality.</p>

      <h3>Local Partnerships</h3>
      <p>Our journey begins close to home, with partnerships forged with local farmers who understand our commitment to quality. Our beef comes from grass-fed cattle raised on sustainable farms within 200 kilometers of our kitchen. These partnerships aren't just business relationships—they're collaborations built on mutual respect and shared values.</p>

      <p>We visit our partner farms regularly, not just to inspect the quality of our ingredients, but to understand the stories behind them. When you bite into a Redhawk's burger, you're tasting the dedication of farmers who wake before dawn to tend their herds, who rotate their pastures to maintain soil health, and who treat their animals with the respect they deserve.</p>

      <h3>The Spice Route</h3>
      <p>Our spice blends tell a different story—one that takes us across oceans to the markets of Istanbul, the saffron fields of Kashmir, and the pepper plantations of Kerala. Each spice in our signature blends is sourced directly from growers who have perfected their craft over generations.</p>

      <p>Take our warrior spice blend, for example. The cumin comes from a family farm in Rajasthan that has been growing the spice for over 300 years. The paprika is sourced from a cooperative in Hungary where the peppers are still dried using traditional methods. These aren't just ingredients—they're pieces of culinary history.</p>

      <h3>Sustainable Practices</h3>
      <p>Sustainability isn't just a buzzword for us—it's a core principle that guides every sourcing decision we make. We work exclusively with suppliers who demonstrate a commitment to environmental stewardship, fair labor practices, and community development.</p>

      <p>Our packaging is made from recycled materials, our delivery vehicles run on biofuel, and we've implemented a zero-waste policy in our kitchen. But sustainability goes beyond environmental concerns—it's about creating a food system that can nourish communities for generations to come.</p>

      <h3>Quality Over Quantity</h3>
      <p>In a world where bigger often seems better, we've chosen a different path. We'd rather serve fewer customers with exceptional ingredients than compromise on quality to serve more. This philosophy means that sometimes we have to say no to certain dishes when our preferred ingredients aren't available, but it also means that every meal we serve meets our exacting standards.</p>

      <p>Our commitment to quality extends to every aspect of our operation. From the artisanal cheeses aged in caves in the French countryside to the heritage tomatoes grown in volcanic soil, every ingredient has been chosen not just for its flavor, but for the story it tells and the values it represents.</p>

      <p>When you dine at Redhawk's, you're not just enjoying a meal—you're participating in a global network of passionate producers who believe, as we do, that food has the power to bring people together and create positive change in the world.</p>
    `,
    image: "/placeholder.svg?height=600&width=1200",
    date: "2024-01-15",
    author: "Sarah Chen",
    category: "Sustainability",
    readTime: "3 min read",
    featured: false,
  },
  // Add more blog posts as needed
}

interface BlogPostProps {
  slug: string
}

export default function BlogPost({ slug }: BlogPostProps) {
  const [mounted, setMounted] = useState(false)
  const router = useRouter()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  // Get the blog post data based on slug
  const post = blogPosts[slug as keyof typeof blogPosts]

  if (!post) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-black via-zinc-900 to-black flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Post Not Found</h1>
          <p className="text-gray-400 mb-8">The story you're looking for doesn't exist.</p>
          <Link href="/blog">
            <Button className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white">
              Back to Stories
            </Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-zinc-900 to-black">
      {/* Hero Section */}
      <section className="pt-24 pb-12 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 25% 25%, #f59e0b 0%, transparent 50%), 
                             radial-gradient(circle at 75% 75%, #dc2626 0%, transparent 50%)`,
            }}
          />
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="mb-8">
            <Link
              href="/blog"
              className="inline-flex items-center text-amber-400 hover:text-amber-300 mb-6 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Stories
            </Link>

            <Badge className="bg-amber-400/20 text-amber-400 border-amber-400/30 mb-4">{post.category}</Badge>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">{post.title}</h1>

            <div className="flex flex-wrap items-center gap-6 text-gray-400 mb-8">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {new Date(post.date).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </div>
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                {post.author}
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                {post.readTime}
              </div>
            </div>

            <div className="flex items-center gap-4">
              <Button
                variant="outline"
                size="sm"
                className="border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-black"
              >
                <Share2 className="w-4 h-4 mr-2" />
                Share
              </Button>
            </div>
          </div>

          {/* Featured Image */}
          <div className="relative overflow-hidden rounded-2xl mb-12">
            <img src={post.image || "/placeholder.svg"} alt={post.title} className="w-full h-64 md:h-96 object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-b from-zinc-800/50 to-zinc-900/50 border border-zinc-700/50 backdrop-blur-sm rounded-2xl p-8 md:p-12">
            <div
              className="prose prose-lg prose-invert max-w-none"
              style={{
                color: "#e4e4e7",
              }}
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>

          {/* Author Bio */}
          <div className="mt-12 bg-gradient-to-r from-zinc-800/50 to-zinc-900/50 border border-zinc-700/50 backdrop-blur-sm rounded-2xl p-8">
            <div className="flex items-start gap-6">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-black font-bold text-xl">
                  {post.author
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">{post.author}</h3>
                <p className="text-gray-300 leading-relaxed">
                  {post.author === "Chef Marcus Redhawk"
                    ? "Head Chef and founder of Redhawk's Burger & Kebab. With over 15 years of culinary experience, Marcus brings together traditional techniques with modern innovation to create unforgettable dining experiences."
                    : "Sustainability coordinator and ingredient sourcing specialist at Redhawk's. Sarah ensures that every ingredient meets our high standards for quality, ethics, and environmental responsibility."}
                </p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="mt-12 text-center">
            <Link href="/blog">
              <Button className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-8 py-4 text-lg font-semibold transform hover:scale-105 transition-all duration-300">
                Read More Stories
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
