"use client"

import { useState } from "react"
import {
  Phone,
  Clock,
  Globe,
  Users,
  Shield,
  Zap,
  CheckCircle,
  ArrowRight,
  Headphones,
  MessageSquare,
  Mail,
  Settings,
  TrendingUp,
  Award,
  ChevronDown,
  ChevronUp,
  Star,
  Target,
  DollarSign,
  BarChart3,
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
      question: "What are the service hours of your call center?",
      answer:
        "Our inbound call center operates from 8am to 8pm, providing 12 hours of dedicated customer support coverage. We also offer 24/7 monitoring and can customize operating hours based on your business requirements and customer base location.",
    },
    {
      question: "How many languages do you support?",
      answer:
        "We provide comprehensive support in 12 languages including English, Hindi, Marathi, and various regional languages. Our multilingual agents are trained to handle customer interactions professionally in their preferred language, ensuring better customer satisfaction and communication.",
    },
    {
      question: "What kind of clients do you work for?",
      answer:
        "We serve diverse industries including BFSI (Banking, Financial Services & Insurance), Telecom, AI Bot companies, micro financing companies, and realty aggregators. Our flexible solutions are designed to adapt to various business models and customer service requirements.",
    },
    {
      question: "Do you support any particular Live Chat software?",
      answer:
        "Yes, we specialize in Yellow.AI chatbots integration and support various live chat platforms. Our team can seamlessly integrate with your existing chat infrastructure or help you implement new chat solutions that align with your customer service strategy.",
    },
    {
      question: "What is your average response time?",
      answer:
        "We maintain industry-leading response times with average call pickup within 3 rings, email responses within 2 hours, and live chat responses within 30 seconds. Our lightning-speed response capability is powered by advanced ACD technology and well-trained agents.",
    },
    {
      question: "Can you handle seasonal volume fluctuations?",
      answer:
        "Our scalable infrastructure allows us to quickly ramp up or down based on your business needs. We can handle seasonal peaks, promotional campaigns, and unexpected volume spikes without compromising service quality.",
    },
  ]

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => (
        <Card key={index} className="border border-gray-200 hover:border-blue-300 transition-colors">
          <CardHeader className="cursor-pointer hover:bg-gray-50 transition-colors" onClick={() => toggleFAQ(index)}>
            <div className="flex items-center justify-between">
              <CardTitle className="text-base sm:text-lg font-semibold text-gray-900 pr-4">{faq.question}</CardTitle>
              {openIndex === index ? (
                <ChevronUp className="w-5 h-5 text-blue-600 flex-shrink-0" />
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

export default function InboundCallCenter() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Header/>
      {/* Hero Section */}
      <section className="relative py-16 sm:py-20 lg:py-24 px-4 bg-gradient-to-r from-blue-600 to-indigo-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-6 sm:space-y-8">
              <div className="space-y-4">
                <Badge variant="secondary" className="bg-white/20 text-white border-white/30 text-sm">
                  Enterprise-Grade Solutions
                </Badge>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
                  Inbound Call Center
                  <span className="block text-blue-200">Services</span>
                </h1>
                <p className="text-lg sm:text-xl text-blue-100 leading-relaxed">
                  Transform your customer service with our virtual call center solutions. Deliver enterprise-grade
                  inbound customer services that bring corporate-level support to businesses at an affordable cost.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 font-semibold">
                  <Phone className="w-5 h-5 mr-2" />
                  Get Started Today
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  Learn More
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>

              <div className="grid grid-cols-3 gap-4 pt-4">
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold">24/7</div>
                  <div className="text-sm text-blue-200">Monitoring</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold">12</div>
                  <div className="text-sm text-blue-200">Languages</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold">100%</div>
                  <div className="text-sm text-blue-200">Customizable</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8">
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-white/20 rounded-lg p-4 text-center">
                    <Phone className="w-8 h-8 mx-auto mb-2" />
                    <div className="text-sm font-medium">Voice Support</div>
                  </div>
                  <div className="bg-white/20 rounded-lg p-4 text-center">
                    <Mail className="w-8 h-8 mx-auto mb-2" />
                    <div className="text-sm font-medium">Email Support</div>
                  </div>
                  <div className="bg-white/20 rounded-lg p-4 text-center">
                    <MessageSquare className="w-8 h-8 mx-auto mb-2" />
                    <div className="text-sm font-medium">Live Chat</div>
                  </div>
                  <div className="bg-white/20 rounded-lg p-4 text-center">
                    <Settings className="w-8 h-8 mx-auto mb-2" />
                    <div className="text-sm font-medium">Custom IVR</div>
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-sm text-blue-200 mb-2">Trusted by</div>
                  <div className="text-lg font-semibold">BFSI • Telecom • Fintech • Real Estate</div>
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
              Comprehensive Inbound Solutions
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our inbound services are designed to provide businesses with a comprehensive solution for managing and
              routing customer interactions with enterprise-grade reliability.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <Card className="border-l-4 border-l-blue-500 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-blue-600" />
                  </div>
                  <CardTitle className="text-lg">Customer Service</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Professional customer service representatives handle inquiries, provide product information, and
                  ensure customer satisfaction across all touchpoints.
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-green-500 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <Shield className="w-6 h-6 text-green-600" />
                  </div>
                  <CardTitle className="text-lg">Complaint Resolution</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Dedicated complaint resolution specialists trained to handle customer concerns with empathy and
                  efficiency, turning negative experiences into positive outcomes.
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-purple-500 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                    <Headphones className="w-6 h-6 text-purple-600" />
                  </div>
                  <CardTitle className="text-lg">Technical Support</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Expert technical support agents provide troubleshooting assistance, product guidance, and technical
                  solutions to keep your customers satisfied.
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-orange-500 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-orange-600" />
                  </div>
                  <CardTitle className="text-lg">Lead Conversion</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Convert inbound leads into customers with our trained sales representatives who understand your
                  products and can guide prospects through the buying process.
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-red-500 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                    <Users className="w-6 h-6 text-red-600" />
                  </div>
                  <CardTitle className="text-lg">HR Support</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Dedicated HR support services for employee inquiries, benefits information, and internal customer
                  service needs.
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-indigo-500 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center">
                    <Globe className="w-6 h-6 text-indigo-600" />
                  </div>
                  <CardTitle className="text-lg">Travel Help Desk</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Specialized travel customer help desk services for booking assistance, itinerary changes, and
                  travel-related customer support.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* USP Points */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 bg-gradient-to-r from-gray-50 to-blue-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Inbound Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Experience the competitive advantages that set our inbound call center services apart from the rest.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
            <Card className="bg-white hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <DollarSign className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-xl text-gray-900 mb-2">No Capital Expenditure</CardTitle>
                    <Badge variant="secondary" className="bg-blue-100 text-blue-700">
                      Cost Effective
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Eliminate the need for expensive infrastructure investments or staff hiring. Our ready-to-deploy
                  solution provides immediate access to professional call center services without upfront costs.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                    No equipment or software purchases
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                    No recruitment and training costs
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                    Pay-as-you-use pricing model
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-xl text-gray-900 mb-2">24x7 Accessibility</CardTitle>
                    <Badge variant="secondary" className="bg-green-100 text-green-700">
                      Always Available
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Be accessible to your customers around the clock with our comprehensive monitoring and support
                  services. Never miss an important customer interaction again.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                    Round-the-clock monitoring
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                    Multi-channel support coverage
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                    Emergency escalation protocols
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Target className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-xl text-gray-900 mb-2">Lead Conversion</CardTitle>
                    <Badge variant="secondary" className="bg-purple-100 text-purple-700">
                      Revenue Growth
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Transform inbound leads into paying customers with our trained sales representatives who understand
                  your business and can effectively guide prospects through the conversion process.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                    Qualified lead handling
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                    Sales process optimization
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                    Conversion rate tracking
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Headphones className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-xl text-gray-900 mb-2">Technical Support</CardTitle>
                    <Badge variant="secondary" className="bg-orange-100 text-orange-700">
                      Expert Assistance
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Provide comprehensive technical support to your customers with our skilled technical representatives
                  who can troubleshoot issues and provide solutions effectively.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                    Multi-level technical expertise
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                    Product-specific training
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                    Issue resolution tracking
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Advanced Features */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Advanced Technology Features
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Powered by cutting-edge technology and customizable solutions designed to meet your specific business
              requirements.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-16">
            <div className="space-y-6">
              <div className="space-y-4">
                <Badge variant="secondary" className="bg-blue-100 text-blue-700">
                  Technology Stack
                </Badge>
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">Customizable IVR Systems</h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Our purely customizable IVR systems are tailored to your business needs, providing optimum results and
                  seamless customer experience with intelligent call routing.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <Settings className="w-4 h-4 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Intelligent Call Routing</h4>
                    <p className="text-gray-600 text-sm">
                      Automatic routing based on customer preferences and agent expertise
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <MessageSquare className="w-4 h-4 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Multi-Channel Integration</h4>
                    <p className="text-gray-600 text-sm">Seamless integration across voice, email, and chat channels</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <BarChart3 className="w-4 h-4 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Real-time Analytics</h4>
                    <p className="text-gray-600 text-sm">
                      Comprehensive reporting and analytics for performance optimization
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-6 sm:p-8">
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-white rounded-lg p-4 text-center shadow-sm">
                  <Phone className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                  <div className="text-sm font-medium text-gray-900">Toll-Free Numbers</div>
                  <div className="text-xs text-gray-600">Easy customer access</div>
                </div>
                <div className="bg-white rounded-lg p-4 text-center shadow-sm">
                  <Zap className="w-8 h-8 text-green-600 mx-auto mb-2" />
                  <div className="text-sm font-medium text-gray-900">ACD Technology</div>
                  <div className="text-xs text-gray-600">Advanced call distribution</div>
                </div>
                <div className="bg-white rounded-lg p-4 text-center shadow-sm">
                  <Globe className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                  <div className="text-sm font-medium text-gray-900">Multi-Language</div>
                  <div className="text-xs text-gray-600">12 language support</div>
                </div>
                <div className="bg-white rounded-lg p-4 text-center shadow-sm">
                  <Award className="w-8 h-8 text-orange-600 mx-auto mb-2" />
                  <div className="text-sm font-medium text-gray-900">Quality Assurance</div>
                  <div className="text-xs text-gray-600">Continuous monitoring</div>
                </div>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-sm">
                  <Star className="w-4 h-4 text-yellow-500" />
                  <span className="text-sm font-medium text-gray-900">Enterprise-Grade Infrastructure</span>
                </div>
              </div>
            </div>
          </div>

          {/* Benefits Section */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-6 sm:p-8 lg:p-12 text-white">
            <div className="text-center mb-8">
              <h3 className="text-2xl sm:text-3xl font-bold mb-4">Customer-First Framework</h3>
              <p className="text-blue-100 text-lg max-w-3xl mx-auto">
                Be seen as responsive and customer-centric by your entire international customer base with our proven
                inbound customer service methodology.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                <Users className="w-10 h-10 mx-auto mb-4 text-blue-200" />
                <h4 className="font-semibold mb-2">Customer Delight</h4>
                <p className="text-sm text-blue-100">Turn customers into loyal advocates through exceptional service</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                <TrendingUp className="w-10 h-10 mx-auto mb-4 text-blue-200" />
                <h4 className="font-semibold mb-2">Business Growth</h4>
                <p className="text-sm text-blue-100">
                  Transform satisfied customers into a growth engine for your business
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center sm:col-span-2 lg:col-span-1">
                <Shield className="w-10 h-10 mx-auto mb-4 text-blue-200" />
                <h4 className="font-semibold mb-2">Success Partnership</h4>
                <p className="text-sm text-blue-100">Help customers achieve success using your products and services</p>
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
              Get answers to common questions about our inbound call center services.
            </p>
          </div>

          <FAQSection />
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="space-y-6 sm:space-y-8">
            <div className="space-y-4">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
                Ready to Transform Your Customer Service?
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                Join hundreds of businesses that trust DBS MINTEK for their inbound call center needs. Get started with
                a free consultation today.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8">
                <Phone className="w-5 h-5 mr-2" />
                Start Free Consultation
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold px-8"
              >
                <Mail className="w-5 h-5 mr-2" />
                Request Quote
              </Button>
            </div>

            <div className="grid sm:grid-cols-3 gap-6 pt-8 border-t border-gray-200">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Clock className="w-6 h-6 text-blue-600" />
                </div>
                <div className="font-semibold text-gray-900">Quick Setup</div>
                <div className="text-sm text-gray-600">Get started in 24-48 hours</div>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Shield className="w-6 h-6 text-green-600" />
                </div>
                <div className="font-semibold text-gray-900">No Commitment</div>
                <div className="text-sm text-gray-600">Flexible terms and pricing</div>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Award className="w-6 h-6 text-purple-600" />
                </div>
                <div className="font-semibold text-gray-900">Proven Results</div>
                <div className="text-sm text-gray-600">15+ years of excellence</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  )
}
