import Hero from "@/components/hero"
import FeaturedItems from "@/components/featured-items"
import Menu from "@/components/menu"
import About from "@/components/about"
import Catering from "@/components/catering"
import Gallery from "@/components/gallery"
import Testimonials from "@/components/testimonials"
import Blog from "@/components/blog"
import Contact from "@/components/contact"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <FeaturedItems />
      <About />
      <Menu />
      <Catering />
      <Gallery />
      <Testimonials />
      <Blog />
      <Contact />
    </main>
  )
}
