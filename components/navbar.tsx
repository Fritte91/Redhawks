"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled ? "bg-black/95 backdrop-blur-md shadow-2xl border-b border-zinc-800" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex items-center space-x-3 group">
            <img
              src="/images/shack22.png"
              alt="Redhawk's Logo"
              className="w-12 h-12 rounded-full object-cover shadow-lg group-hover:shadow-amber-400/25 transition-all duration-300"
            />
            <div>
              <span className="text-amber-400 font-bold text-xl tracking-wider">REDHAWK'S</span>
              <div className="text-gray-300 text-xs tracking-widest">BURGER & KEBAB</div>
            </div>
          </Link>

          <div className="hidden lg:flex items-center space-x-8">
            <Link
              href="#menu"
              className="text-gray-300 hover:text-amber-400 transition-colors duration-300 font-medium"
            >
              Menu
            </Link>
            <Link
              href="#about"
              className="text-gray-300 hover:text-amber-400 transition-colors duration-300 font-medium"
            >
              About
            </Link>
            <Link
              href="#gallery"
              className="text-gray-300 hover:text-amber-400 transition-colors duration-300 font-medium"
            >
              Gallery
            </Link>
            <Link
              href="#blog"
              className="text-gray-300 hover:text-amber-400 transition-colors duration-300 font-medium"
            >
              Stories
            </Link>
            <Link
              href="#contact"
              className="text-gray-300 hover:text-amber-400 transition-colors duration-300 font-medium"
            >
              Contact
            </Link>
            <Button className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-6 py-2 font-semibold transform hover:scale-105 transition-all duration-300">
              Meny
            </Button>
          </div>

          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:bg-zinc-800"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {isOpen && (
          <div className="lg:hidden bg-black/95 backdrop-blur-md border-t border-zinc-800">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link href="#menu" className="block px-3 py-3 text-gray-300 hover:text-amber-400 transition-colors">
                Menu
              </Link>
              <Link href="#about" className="block px-3 py-3 text-gray-300 hover:text-amber-400 transition-colors">
                About
              </Link>
              <Link href="#gallery" className="block px-3 py-3 text-gray-300 hover:text-amber-400 transition-colors">
                Gallery
              </Link>
              <Link href="#blog" className="block px-3 py-3 text-gray-300 hover:text-amber-400 transition-colors">
                Stories
              </Link>
              <Link href="#contact" className="block px-3 py-3 text-gray-300 hover:text-amber-400 transition-colors">
                Contact
              </Link>
              <Button className="w-full mt-4 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-semibold">
                Meny
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
