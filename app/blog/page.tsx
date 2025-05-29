import type { Metadata } from "next"
import BlogPage from "@/components/blog-page"

export const metadata: Metadata = {
  title: "Warrior's Chronicles - Redhawk's Burger & Kebab",
  description: "Discover stories, recipes, and insights from our master chefs and the heart of Redhawk's kitchen.",
}

export default function Blog() {
  return <BlogPage />
}
