"use client"

import { useState, useEffect, useRef } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { MapPin, Phone, Clock, Mail, Calendar, Users } from "lucide-react"

export default function Reservation() {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={ref} className="py-24 bg-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-amber-400/5 via-transparent to-red-600/5" />
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-amber-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-red-600/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div
            className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <Badge className="bg-red-600/10 text-red-400 border-red-600/20 mb-6 px-4 py-2">RESERVE YOUR TABLE</Badge>
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Join the{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-red-500">
                Warrior's
              </span>{" "}
              Table
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Secure your place in our legendary dining hall and prepare for an unforgettable culinary journey
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div
            className={`space-y-8 transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
          >
            <div>
              <h3 className="text-3xl font-bold text-white mb-6">Visit Our Warrior's Den</h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                Located in the heart of the city, our restaurant offers an immersive dining experience that combines
                exceptional cuisine with an atmosphere steeped in warrior tradition.
              </p>
            </div>

            <div className="space-y-6">
              <Card className="bg-zinc-900/50 border-zinc-800 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-amber-400/20 rounded-xl">
                      <MapPin className="w-6 h-6 text-amber-400" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-2">Location</h4>
                      <p className="text-gray-300">
                        123 Warrior's Way
                        <br />
                        Downtown District
                        <br />
                        Metropolitan City, MC 12345
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-zinc-900/50 border-zinc-800 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-red-600/20 rounded-xl">
                      <Clock className="w-6 h-6 text-red-400" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-2">Hours</h4>
                      <div className="text-gray-300 space-y-1">
                        <p>Monday - Thursday: 5:00 PM - 11:00 PM</p>
                        <p>Friday - Saturday: 5:00 PM - 12:00 AM</p>
                        <p>Sunday: 4:00 PM - 10:00 PM</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card className="bg-zinc-900/50 border-zinc-800 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5 text-amber-400" />
                      <div>
                        <p className="text-white font-semibold">Phone</p>
                        <p className="text-gray-300">(555) 123-HAWK</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-zinc-900/50 border-zinc-800 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3">
                      <Mail className="w-5 h-5 text-red-400" />
                      <div>
                        <p className="text-white font-semibold">Email</p>
                        <p className="text-gray-300">reserve@redhawks.com</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          {/* Reservation Form */}
          <div
            className={`transition-all duration-1000 delay-500 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
          >
            <Card className="bg-gradient-to-b from-zinc-900/50 to-zinc-800/50 border-zinc-700/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl text-white">Make a Reservation</CardTitle>
                <CardDescription className="text-gray-300">
                  Reserve your table and prepare for an extraordinary dining experience
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">First Name</label>
                    <Input
                      placeholder="Enter your first name"
                      className="bg-zinc-800/50 border-zinc-700 text-white placeholder-gray-400 focus:border-amber-400"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Last Name</label>
                    <Input
                      placeholder="Enter your last name"
                      className="bg-zinc-800/50 border-zinc-700 text-white placeholder-gray-400 focus:border-amber-400"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                    <Input
                      type="email"
                      placeholder="your.email@example.com"
                      className="bg-zinc-800/50 border-zinc-700 text-white placeholder-gray-400 focus:border-amber-400"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Phone</label>
                    <Input
                      type="tel"
                      placeholder="(555) 123-4567"
                      className="bg-zinc-800/50 border-zinc-700 text-white placeholder-gray-400 focus:border-amber-400"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Date</label>
                    <div className="relative">
                      <Input type="date" className="bg-zinc-800/50 border-zinc-700 text-white focus:border-amber-400" />
                      <Calendar className="absolute right-3 top-3 w-4 h-4 text-gray-400 pointer-events-none" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Time</label>
                    <Input type="time" className="bg-zinc-800/50 border-zinc-700 text-white focus:border-amber-400" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Guests</label>
                    <div className="relative">
                      <Input
                        type="number"
                        min="1"
                        max="12"
                        placeholder="2"
                        className="bg-zinc-800/50 border-zinc-700 text-white placeholder-gray-400 focus:border-amber-400"
                      />
                      <Users className="absolute right-3 top-3 w-4 h-4 text-gray-400 pointer-events-none" />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Special Requests</label>
                  <Textarea
                    placeholder="Any dietary restrictions, special occasions, or seating preferences..."
                    rows={4}
                    className="bg-zinc-800/50 border-zinc-700 text-white placeholder-gray-400 focus:border-amber-400"
                  />
                </div>

                <Button className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-semibold py-4 text-lg transform hover:scale-105 transition-all duration-300">
                  Reserve Your Table
                </Button>

                <p className="text-sm text-gray-400 text-center">
                  Reservations are confirmed within 24 hours. For immediate assistance, please call us directly.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
