"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, Building, Users, Headphones } from "lucide-react"


const contactInfo = [
  {
    icon: Phone,
    title: "Call Us",
    details: ["+91 98765 43210", "+91 87654 32109"],
    description: "Speak directly with our experts",
    color: "blue",
  },
  {
    icon: Mail,
    title: "Email Us",
    details: ["info@dbsmintek.com", "sales@dbsmintek.com"],
    description: "Get detailed information via email",
    color: "green",
  },
  {
    icon: MapPin,
    title: "Visit Us",
    details: ["Mumbai Office", "Pune Office"],
    description: "Meet us at our locations",
    color: "purple",
  },
  {
    icon: Clock,
    title: "Business Hours",
    details: ["24/7 Support Available", "Mon-Sun: Always Open"],
    description: "We're here when you need us",
    color: "orange",
  },
]

const services = [
  "Inbound Call Center",
  "Outbound Call Center",
  "Customer Support",
  "Technical Support",
  "Sales & Lead Generation",
  "Email Support",
  "Chat Support",
  "Healthcare Services",
]

export default function ContactSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    //handle form data
    const res = await fetch('/api/send-email', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });
    console.log(formData)
    const result = await res.json();
    setStatus(result.success ? 'Email sent!' : result.error);
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setIsSubmitted(true)

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        service: "",
        message: "",
      })
    }, 3000)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <section
      ref={sectionRef}
      className="py-16 lg:py-24 bg-gradient-to-br from-blue-50 to-white relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-32 h-32 bg-blue-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-40 h-40 bg-green-500 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        {/* Header */}
        <div className={`text-center mb-16 ${isVisible ? "animate-fade-in" : "opacity-0"}`}>
          <Badge className="mb-4 px-4 py-2 text-sm text-white font-medium bg-blue-600 hover:bg-blue-700">GET IN TOUCH</Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Contact Us Today</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Ready to transform your customer service? Get in touch with our experts for a free consultation and discover
            how we can help your business grow.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Form */}
          <div className={`${isVisible ? "animate-fade-in-delay" : "opacity-0"}`}>
            <Card className="shadow-2xl border-0 bg-white/90 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <Send className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Send us a Message</h3>
                </div>

                {isSubmitted ? (
                  <div className="text-center py-8">
                    <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                    <h4 className="text-xl font-bold text-gray-900 mb-2">Thank You!</h4>
                    <p className="text-gray-600">
                      Your message has been sent successfully. We&apos;ll get back to you within 24 hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                        <Input
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full"
                          placeholder="Enter your full name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                        <Input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full"
                          placeholder="Enter your email"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                        <Input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          required
                          className="w-full"
                          placeholder="Enter your phone number"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Company Name</label>
                        <Input
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          className="w-full"
                          placeholder="Enter your company name"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Service Interested In</label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      >
                        <option value="">Select a service</option>
                        {services.map((service) => (
                          <option key={service} value={service}>
                            {service}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Message *</label>
                      <Textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={4}
                        className="w-full"
                        placeholder="Tell us about your requirements..."
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3"
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className={`space-y-8 ${isVisible ? "animate-fade-in-delay-2" : "opacity-0"}`}>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h3>
              <p className="text-gray-600 mb-8">
                We&apos;re here to help you find the perfect call center solution for your business. Reach out to us through
                any of the following channels.
              </p>
            </div>

            <div className="grid gap-6 lg:grid-cols-2 md:grid-cols-2">
              {contactInfo.map((info, index) => (
                <Card
                  key={index}
                  className="group hover:shadow-lg transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm"
                >
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div
                        className={`p-3 rounded-lg ${
                          info.color === "blue"
                            ? "bg-blue-100 text-blue-600"
                            : info.color === "green"
                              ? "bg-green-100 text-green-600"
                              : info.color === "purple"
                                ? "bg-purple-100 text-purple-600"
                                : "bg-orange-100 text-orange-600"
                        } group-hover:scale-110 transition-transform`}
                      >
                        <info.icon className="h-6 w-6" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 mb-1">{info.title}</h4>
                        <div className="space-y-1 mb-2">
                          {info.details.map((detail, idx) => (
                            <p key={idx} className="text-gray-700 font-medium">
                              {detail}
                            </p>
                          ))}
                        </div>
                        <p className="text-sm text-gray-500">{info.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Quick Stats */}
            <Card className="bg-gradient-to-r from-blue-600 to-green-600 text-white border-0">
              <CardContent className="p-6">
                <h4 className="font-bold text-lg mb-4">Why Choose DBS Mintek?</h4>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <Building className="h-8 w-8 mx-auto mb-2 opacity-80" />
                    <div className="text-2xl font-bold">500+</div>
                    <div className="text-sm opacity-80">Clients Served</div>
                  </div>
                  <div>
                    <Users className="h-8 w-8 mx-auto mb-2 opacity-80" />
                    <div className="text-2xl font-bold">24/7</div>
                    <div className="text-sm opacity-80">Support</div>
                  </div>
                  <div>
                    <Headphones className="h-8 w-8 mx-auto mb-2 opacity-80" />
                    <div className="text-2xl font-bold">99.9%</div>
                    <div className="text-sm opacity-80">Uptime</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
