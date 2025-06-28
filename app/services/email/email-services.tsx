"use client"

import { useState } from "react"
import {
  Mail,
  Zap,
  Users,
  Globe,
  Shield,
  Target,
  CheckCircle,
  ArrowRight,
  Settings,
  BarChart3,
  Clock,
  Eye,
  Layers,
  ChevronDown,
  ChevronUp,
  Star,
  Award,
  Phone,
  Database,
  TrendingUp,
} from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Header from "@/components/dropdown-header"
import Footer from "@/components/footer"

interface FAQItem {
  question: string
  answer: string
}

function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs: FAQItem[] = [
    {
      question: "How do you integrate client emails with your distribution system?",
      answer:
        "We seamlessly integrate your existing email infrastructure with our distribution system, allowing multiple advisors to respond in real-time. This ensures faster response times and better customer service through coordinated team efforts.",
    },
    {
      question: "What makes your email service different from traditional providers?",
      answer:
        "Our email service goes beyond traditional communication by providing omnichannel engagement experiences, real-time advisor collaboration, and 360-degree customer interaction views across multiple touchpoints and platforms.",
    },
    {
      question: "How fast do you respond to client emails?",
      answer:
        "We respond at lightning speeds using our latest email management software with ACD technology. Our associates are trained to provide immediate responses to client enquiries, sales requests, and service requests.",
    },
    {
      question: "Can you handle multiple communication channels simultaneously?",
      answer:
        "Yes, we provide omnichannel engagement experiences that integrate email with other communication channels like voice, chat, and social media, giving agents a complete 360-degree view of customer interactions.",
    },
    {
      question: "What security measures do you have for email communications?",
      answer:
        "We implement state-of-the-art security measures including encryption, secure data transmission, access controls, and compliance with industry standards to protect all email communications and customer data.",
    },
    {
      question: "How do you ensure quality in email responses?",
      answer:
        "Our quality assurance process includes trained email specialists, standardized response templates, real-time monitoring, performance tracking, and continuous training to maintain high-quality customer communications.",
    },
    {
      question: "Can you customize email workflows for different business needs?",
      answer:
        "We customize email workflows, response templates, escalation procedures, and integration points based on your specific business requirements and customer service objectives.",
    },
  ]

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => (
        <Card key={index} className="border border-gray-200 hover:border-purple-300 transition-colors">
          <CardHeader className="cursor-pointer hover:bg-gray-50 transition-colors" onClick={() => toggleFAQ(index)}>
            <div className="flex items-center justify-between">
              <CardTitle className="text-base sm:text-lg font-semibold text-gray-900 pr-4">{faq.question}</CardTitle>
              {openIndex === index ? (
                <ChevronUp className="w-5 h-5 text-purple-600 flex-shrink-0" />
              ) : (
                <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
              )}
            </div>
          </CardHeader>
          {openIndex === index && (
            <CardContent className="pt-0">
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">{faq.answer}</p>
            </CardContent>
          )}
        </Card>
      ))}
    </div>
  )
}

export default function EmailServices() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50">
      <Header/>
      {/* Hero Section */}
      <section className="relative py-16 sm:py-20 lg:py-24 px-4 bg-gradient-to-r from-purple-600 to-blue-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-6 sm:space-y-8">
              <div className="space-y-4">
                <Badge variant="secondary" className="bg-white/20 text-white border-white/30 text-sm">
                  Lightning Speed Response
                </Badge>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
                  Professional Email
                  <span className="block text-purple-200">Services & Solutions</span>
                </h1>
                <p className="text-lg sm:text-xl text-purple-100 leading-relaxed">
                  We understand the importance of communication in the digital age. Get lightning-speed responses with
                  our advanced email management software and ACD technology for seamless customer engagement.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 sm:p-6">
                <div className="flex items-start gap-3">
                  <Zap className="w-6 h-6 text-yellow-300 flex-shrink-0 mt-1" />
                  <div>
                    <div className="text-lg font-semibold mb-2 text-purple-100">Lightning Speed Response</div>
                    <div className="text-sm text-purple-200">
                      Our associates respond using latest email management software with ACD technology for immediate
                      client enquiry handling.
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 font-semibold">
                  <Mail className="w-5 h-5 mr-2" />
                  Start Email Service
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  Learn More
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8">
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-white/20 rounded-lg p-4 text-center">
                    <Mail className="w-8 h-8 mx-auto mb-2" />
                    <div className="text-sm font-medium">Email Management</div>
                  </div>
                  <div className="bg-white/20 rounded-lg p-4 text-center">
                    <Zap className="w-8 h-8 mx-auto mb-2" />
                    <div className="text-sm font-medium">ACD Technology</div>
                  </div>
                  <div className="bg-white/20 rounded-lg p-4 text-center">
                    <Eye className="w-8 h-8 mx-auto mb-2" />
                    <div className="text-sm font-medium">360° View</div>
                  </div>
                  <div className="bg-white/20 rounded-lg p-4 text-center">
                    <Layers className="w-8 h-8 mx-auto mb-2" />
                    <div className="text-sm font-medium">Omnichannel</div>
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-sm text-purple-200 mb-2">Integrated Solutions</div>
                  <div className="text-lg font-semibold">Real-time • Multi-channel • Secure</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Email Service Providers That Get You
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our platform provides users with a reliable and secure way to communicate with anyone, anywhere in the
              world. We are constantly updating our features to ensure the best possible experience.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-16">
            <div className="space-y-6">
              <div className="space-y-4">
                <Badge variant="secondary" className="bg-purple-100 text-purple-700">
                  Digital Communication
                </Badge>
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">Reliable & Secure Email Communication</h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  We are committed to making our service the best it can be, providing you with a unique, multi-channel
                  engagement experience that helps you close more sales and maintain better customer relationships.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <Globe className="w-4 h-4 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Global Connectivity</h4>
                    <p className="text-gray-600 text-sm">
                      Connect with anyone, anywhere in the world with our reliable email infrastructure
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <Shield className="w-4 h-4 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Secure Communication</h4>
                    <p className="text-gray-600 text-sm">
                      State-of-the-art security measures protect all your email communications
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <TrendingUp className="w-4 h-4 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Continuous Innovation</h4>
                    <p className="text-gray-600 text-sm">
                      Constantly updating features to provide the best possible user experience
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-blue-100 rounded-2xl p-6 sm:p-8">
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-10 h-10 text-white" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">Advanced Email Platform</h4>
                <p className="text-gray-600 text-sm">
                  Cutting-edge technology for seamless email communication and management
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="bg-white rounded-lg p-3 text-center">
                  <Clock className="w-6 h-6 text-purple-600 mx-auto mb-1" />
                  <div className="text-xs font-medium text-gray-900">Real-time</div>
                </div>
                <div className="bg-white rounded-lg p-3 text-center">
                  <Database className="w-6 h-6 text-blue-600 mx-auto mb-1" />
                  <div className="text-xs font-medium text-gray-900">Integrated</div>
                </div>
                <div className="bg-white rounded-lg p-3 text-center">
                  <Award className="w-6 h-6 text-green-600 mx-auto mb-1" />
                  <div className="text-xs font-medium text-gray-900">Reliable</div>
                </div>
                <div className="bg-white rounded-lg p-3 text-center">
                  <Star className="w-6 h-6 text-orange-600 mx-auto mb-1" />
                  <div className="text-xs font-medium text-gray-900">Secure</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 bg-gradient-to-r from-gray-50 to-purple-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Advanced Email Service Features
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our mission is to create an engaging and effortless customer experience that helps you close more sales
              through multi-channel engagement.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <Card className="bg-white hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Users className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-xl text-gray-900 mb-2">Real-time Advisor Integration</CardTitle>
                    <Badge variant="secondary" className="bg-purple-100 text-purple-700">
                      Team Collaboration
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Integrate client emails to our distribution list for various advisors to respond in real-time,
                  ensuring faster response times and coordinated customer service.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                    Multiple advisor access
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                    Real-time collaboration
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                    Coordinated responses
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Zap className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-xl text-gray-900 mb-2">Lightning Speed Response</CardTitle>
                    <Badge variant="secondary" className="bg-blue-100 text-blue-700">
                      ACD Technology
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Respond at lightning speeds to client enquiries, sales requests, and service requests using our latest
                  email management software with ACD technology.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                    Instant response capability
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                    Advanced ACD technology
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                    Automated distribution
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Eye className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-xl text-gray-900 mb-2">360-Degree Customer View</CardTitle>
                    <Badge variant="secondary" className="bg-green-100 text-green-700">
                      Complete Visibility
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Provide agents with a complete 360-degree view of customer interactions across various touchpoints and
                  platforms for better service delivery.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                    Complete interaction history
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                    Multi-touchpoint tracking
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                    Unified customer profile
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Layers className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-xl text-gray-900 mb-2">Omnichannel Experience</CardTitle>
                    <Badge variant="secondary" className="bg-orange-100 text-orange-700">
                      Multi-Platform
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Extend omnichannel engagement experience across multiple platforms, keeping touchpoints separate for
                  agents while maintaining unified customer interaction views.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                    Multi-platform integration
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                    Seamless channel switching
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                    Unified experience delivery
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Target className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-xl text-gray-900 mb-2">Sales Process Enhancement</CardTitle>
                    <Badge variant="secondary" className="bg-red-100 text-red-700">
                      Revenue Growth
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Go beyond traditional sales processes to provide unique, multi-channel engagement experiences that
                  help close more sales and improve customer relationships.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                    Enhanced sales workflows
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                    Multi-channel engagement
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                    Improved conversion rates
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Settings className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-xl text-gray-900 mb-2">Latest Technology Integration</CardTitle>
                    <Badge variant="secondary" className="bg-indigo-100 text-indigo-700">
                      Advanced Tech
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Use the latest technologies to keep you connected with customers, no matter where they are or what
                  device they're using, ensuring consistent communication quality.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                    Cutting-edge technology
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                    Device-agnostic solutions
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                    Consistent connectivity
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Technology Showcase */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Advanced Email Management Technology
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Powered by cutting-edge ACD technology and latest email management software for superior performance and
              reliability.
            </p>
          </div>

          <div className="bg-gradient-to-r from-purple-600 to-blue-700 rounded-2xl p-6 sm:p-8 lg:p-12 text-white">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className="space-y-6">
                <div className="space-y-4">
                  <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                    ACD Technology
                  </Badge>
                  <h3 className="text-2xl sm:text-3xl font-bold">Lightning-Speed Email Management</h3>
                  <p className="text-purple-100 text-lg leading-relaxed">
                    Our associates respond using our latest email management software with ACD (Automatic Call
                    Distribution) technology, ensuring immediate handling of client enquiries, sales requests, and
                    service requests.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                      <Zap className="w-4 h-4" />
                    </div>
                    <span className="text-purple-100">Instant response capabilities</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                      <BarChart3 className="w-4 h-4" />
                    </div>
                    <span className="text-purple-100">Advanced distribution algorithms</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                      <Shield className="w-4 h-4" />
                    </div>
                    <span className="text-purple-100">Secure email processing</span>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Mail className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-bold mb-2">Email Processing Stats</h4>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/20 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold mb-1">{"< 30s"}</div>
                    <div className="text-sm text-purple-200">Response Time</div>
                  </div>
                  <div className="bg-white/20 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold mb-1">24/7</div>
                    <div className="text-sm text-purple-200">Availability</div>
                  </div>
                  <div className="bg-white/20 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold mb-1">99.9%</div>
                    <div className="text-sm text-purple-200">Uptime</div>
                  </div>
                  <div className="bg-white/20 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold mb-1">100%</div>
                    <div className="text-sm text-purple-200">Secure</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600">
              Get answers to common questions about our email services and solutions.
            </p>
          </div>

          <FAQSection />
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 bg-gradient-to-r from-purple-600 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="space-y-6 sm:space-y-8">
            <div className="space-y-4">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
                Ready to Transform Your Email Communication?
              </h2>
              <p className="text-lg sm:text-xl text-purple-100 max-w-2xl mx-auto leading-relaxed">
                Contact us for more details about our advanced email services and discover how we can enhance your
                customer communication experience.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 font-semibold px-8">
                <Mail className="w-5 h-5 mr-2" />
                Get Started Today
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-purple-600 hover:text-white hover:bg-white/10 font-semibold px-8"
              >
                <Phone className="w-5 h-5 mr-2" />
                Schedule Demo
              </Button>
            </div>

            <div className="grid sm:grid-cols-3 gap-6 pt-8 border-t border-white/20">
              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Zap className="w-6 h-6" />
                </div>
                <div className="font-semibold">Lightning Speed</div>
                <div className="text-sm text-purple-200">Instant response times</div>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Eye className="w-6 h-6" />
                </div>
                <div className="font-semibold">360° View</div>
                <div className="text-sm text-purple-200">Complete customer visibility</div>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Layers className="w-6 h-6" />
                </div>
                <div className="font-semibold">Omnichannel</div>
                <div className="text-sm text-purple-200">Multi-platform integration</div>
              </div>
            </div>

            <div className="pt-6 border-t border-white/20">
              <p className="text-sm text-purple-200">
                Ready to enhance your email communication?{" "}
                <span className="text-white font-semibold">Contact us for more details</span>
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  )
}
