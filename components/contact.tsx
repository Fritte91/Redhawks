"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { MapPin, Phone, Clock, Mail, Check } from "lucide-react"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false)
  const [inquiryType, setInquiryType] = useState("general")
  const [submitted, setSubmitted] = useState(false)
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate form submission
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
    }, 3000)
  }

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
            <Badge className="bg-red-600/10 text-red-400 border-red-600/20 mb-6 px-4 py-2">GET IN TOUCH</Badge>
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Contact{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-red-500">
                Redhawk's
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Have questions about our menu, catering services, or want to provide feedback? We'd love to hear from you!
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16">
          {/* Contact Information */}
          <div
            className={`space-y-6 md:space-y-8 transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
          >
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 md:mb-6">Visit Our Shack</h3>
              <p className="text-gray-200 text-base md:text-lg leading-relaxed mb-6 md:mb-8">
                Located in the heart of the city, our burger & kebab shack offers the finest flavors inspired by Native
                American warrior traditions. Stop by for takeout or order for delivery!
              </p>
            </div>

            <div className="space-y-4 md:space-y-6">
              <Card className="bg-gradient-to-b from-zinc-800 to-zinc-900 border-amber-400/20 backdrop-blur-sm">
                <CardContent className="p-4 md:p-6">
                  <div className="flex items-start gap-3 md:gap-4">
                    <div className="p-2 md:p-3 bg-amber-400/20 rounded-xl flex-shrink-0">
                      <MapPin className="w-5 md:w-6 h-5 md:h-6 text-amber-400" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-2 text-sm md:text-base">Location</h4>
                      <p className="text-gray-200 text-sm md:text-base">
                        Soi 102 Nong Kae<br />
                        Hua Hin District<br />
                        Prachuap Khiri Khan 77110
                      </p>
                      <a
                        href="https://www.google.com/maps/place/RedHawks+Burger+%26+Kebab/@12.5454302,99.9547621,17z/data=!3m1!4b1!4m6!3m5!1s0x30fdab1f656658fd:0x895aeec57703c742!8m2!3d12.545425!4d99.957337!16s%2Fg%2F11vd70rzz8?entry=ttu&g_ep=EgoyMDI1MDUyNi4wIKXMDSoASAFQAw%3D%3D"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block mt-2 px-3 py-1 bg-amber-400 text-black rounded-full text-xs font-semibold hover:bg-amber-500 transition-all duration-300"
                      >
                        View on Google Maps
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-b from-zinc-800 to-zinc-900 border-amber-400/20 backdrop-blur-sm">
                <CardContent className="p-4 md:p-6">
                  <div className="flex items-start gap-3 md:gap-4">
                    <div className="p-2 md:p-3 bg-red-600/20 rounded-xl flex-shrink-0">
                      <Clock className="w-5 md:w-6 h-5 md:h-6 text-red-400" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-2 text-sm md:text-base">Hours</h4>
                      <div className="text-gray-200 space-y-1 text-sm md:text-base">
                        <p>Every day: 13:00 - 23:00</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Card className="bg-gradient-to-b from-zinc-800 to-zinc-900 border-amber-400/20 backdrop-blur-sm">
                  <CardContent className="p-4 md:p-6">
                    <div className="flex items-center gap-3">
                      <Phone className="w-4 md:w-5 h-4 md:h-5 text-amber-400 flex-shrink-0" />
                      <div>
                        <p className="text-white font-semibold text-sm md:text-base">Phone</p>
                        <p className="text-gray-200 text-sm md:text-base">0650124051</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-b from-zinc-800 to-zinc-900 border-amber-400/20 backdrop-blur-sm">
                  <CardContent className="p-4 md:p-6">
                    <div className="flex items-center gap-3">
                      <Mail className="w-4 md:w-5 h-4 md:h-5 text-red-400 flex-shrink-0" />
                      <div>
                        <p className="text-white font-semibold text-sm md:text-base">Email</p>
                        <p className="text-gray-200 text-sm md:text-base">info@redhawks.com</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div
            className={`transition-all duration-1000 delay-500 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
          >
            <Card className="bg-gradient-to-b from-zinc-800 to-zinc-900 border-amber-400/20 backdrop-blur-sm">
              <CardHeader className="p-4 md:p-6">
                <CardTitle className="text-xl md:text-2xl text-white">Send Us a Message</CardTitle>
                <CardDescription className="text-gray-200 text-sm md:text-base">
                  Questions, feedback, or catering inquiries? We're here to help!
                </CardDescription>
              </CardHeader>
              <CardContent className="p-4 md:p-6 pt-0">
                {submitted ? (
                  <div className="flex flex-col items-center justify-center py-8 text-center">
                    <div className="w-12 md:w-16 h-12 md:h-16 bg-green-500/20 rounded-full flex items-center justify-center mb-4">
                      <Check className="w-6 md:w-8 h-6 md:h-8 text-green-500" />
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-white mb-2">Message Sent!</h3>
                    <p className="text-gray-200 text-sm md:text-base">
                      Thank you for reaching out. We'll get back to you as soon as possible.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-200 mb-2">First Name</label>
                        <Input
                          placeholder="Enter your first name"
                          className="bg-zinc-700/50 border-amber-400/30 text-white placeholder-gray-400 focus:border-amber-400 text-sm md:text-base"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-200 mb-2">Last Name</label>
                        <Input
                          placeholder="Enter your last name"
                          className="bg-zinc-700/50 border-amber-400/30 text-white placeholder-gray-400 focus:border-amber-400 text-sm md:text-base"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-200 mb-2">Email</label>
                        <Input
                          type="email"
                          placeholder="your.email@example.com"
                          className="bg-zinc-700/50 border-amber-400/30 text-white placeholder-gray-400 focus:border-amber-400 text-sm md:text-base"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-200 mb-2">Phone</label>
                        <Input
                          type="tel"
                          placeholder="(555) 123-4567"
                          className="bg-zinc-700/50 border-amber-400/30 text-white placeholder-gray-400 focus:border-amber-400 text-sm md:text-base"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-200 mb-2">Inquiry Type</label>
                      <RadioGroup value={inquiryType} onValueChange={setInquiryType} className="flex flex-wrap gap-4">
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="general" id="general" className="text-amber-400" />
                          <Label htmlFor="general" className="text-gray-200 text-sm md:text-base">
                            General
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="catering" id="catering" className="text-amber-400" />
                          <Label htmlFor="catering" className="text-gray-200 text-sm md:text-base">
                            Catering
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="feedback" id="feedback" className="text-amber-400" />
                          <Label htmlFor="feedback" className="text-gray-200 text-sm md:text-base">
                            Feedback
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="other" id="other" className="text-amber-400" />
                          <Label htmlFor="other" className="text-gray-200 text-sm md:text-base">
                            Other
                          </Label>
                        </div>
                      </RadioGroup>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-200 mb-2">Message</label>
                      <Textarea
                        placeholder="How can we help you?"
                        rows={4}
                        className="bg-zinc-700/50 border-amber-400/30 text-white placeholder-gray-400 focus:border-amber-400 text-sm md:text-base"
                        required
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-semibold py-3 md:py-4 text-base md:text-lg transform hover:scale-105 transition-all duration-300"
                    >
                      Send Message
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
