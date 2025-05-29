import Link from "next/link"
import { Facebook, Instagram, Twitter, Youtube, MapPin, Phone, Mail, Clock } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-black to-zinc-900 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-amber-400 via-amber-500 to-amber-600 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-black font-bold text-xl">R</span>
              </div>
              <div>
                <span className="text-amber-400 font-bold text-xl tracking-wider">REDHAWK'S</span>
                <div className="text-gray-300 text-xs tracking-widest">BURGER & KEBAB</div>
              </div>
            </div>
            <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
              Where warrior spirit meets culinary excellence. Experience authentic flavors crafted with passion,
              tradition, and the finest ingredients from around the world.
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://www.facebook.com/profile.php?id=61570255837425"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-zinc-800 rounded-full text-gray-400 hover:text-amber-400 hover:bg-zinc-700 transition-all duration-300"
              >
                <Facebook className="w-5 h-5" />
              </Link>
              <Link
                href="#"
                className="p-3 bg-zinc-800 rounded-full text-gray-400 hover:text-amber-400 hover:bg-zinc-700 transition-all duration-300"
              >
                <Instagram className="w-5 h-5" />
              </Link>
              <Link
                href="#"
                className="p-3 bg-zinc-800 rounded-full text-gray-400 hover:text-amber-400 hover:bg-zinc-700 transition-all duration-300"
              >
                <Twitter className="w-5 h-5" />
              </Link>
              <Link
                href="#"
                className="p-3 bg-zinc-800 rounded-full text-gray-400 hover:text-amber-400 hover:bg-zinc-700 transition-all duration-300"
              >
                <Youtube className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#menu" className="text-gray-300 hover:text-amber-400 transition-colors duration-300">
                  Our Menu
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-gray-300 hover:text-amber-400 transition-colors duration-300">
                  Our Story
                </Link>
              </li>
              <li>
                <Link href="#gallery" className="text-gray-300 hover:text-amber-400 transition-colors duration-300">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="#blog" className="text-gray-300 hover:text-amber-400 transition-colors duration-300">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-amber-400 transition-colors duration-300">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-amber-400 transition-colors duration-300">
                  Private Events
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-amber-400 mt-1 flex-shrink-0" />
                <div className="text-gray-300">
                  <p>Soi 102 Nong Kae</p>
                  <p>Hua Hin District</p>
                  <p>Prachuap Khiri Khan 77110</p>
                  <Link
                    href="https://www.google.com/maps/place/RedHawks+Burger+%26+Kebab/@12.5454302,99.9547621,17z/data=!3m1!4b1!4m6!3m5!1s0x30fdab1f656658fd:0x895aeec57703c742!8m2!3d12.545425!4d99.957337!16s%2Fg%2F11vd70rzz8?entry=ttu&g_ep=EgoyMDI1MDUyNi4wIKXMDSoASAFQAw%3D%3D"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-2 px-3 py-1 bg-amber-400 text-black rounded-full text-xs font-semibold hover:bg-amber-500 transition-all duration-300"
                  >
                    View on Google Maps
                  </Link>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-amber-400 flex-shrink-0" />
                <span className="text-gray-300">0650124051</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-amber-400 flex-shrink-0" />
                <span className="text-gray-300">info@redhawks.com</span>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-amber-400 flex-shrink-0" />
                <span className="text-gray-300">Open every day 13:00–23:00</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-zinc-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Redhawk's Burger & Kebab. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <Link href="#" className="text-gray-400 hover:text-amber-400 transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-gray-400 hover:text-amber-400 transition-colors">
                Terms of Service
              </Link>
              <Link href="#" className="text-gray-400 hover:text-amber-400 transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
