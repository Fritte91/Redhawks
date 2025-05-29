import type { Metadata } from "next"
import BlogPost from "@/components/blog-post"

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  // In a real app, you'd fetch the post data here
  return {
    title: `Blog Post - Redhawk's Burger & Kebab`,
    description: "Read our latest story from the kitchen",
  }
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  return <BlogPost slug={params.slug} />
}
