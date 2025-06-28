"use client"

import Header from "@/components/dropdown-header"
import { useState } from "react"
import {
  Phone,
  TrendingUp,
  Users,
  Target,
  BarChart3,
  Zap,
  CheckCircle,
  ArrowRight,
  Headphones,
  Mail,
  Settings,
  Shield,
  Award,
  ChevronDown,
  ChevronUp,
  Star,
  Clock,
  Database,
  PhoneCall,
  UserCheck,
  Building2,
} from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Footer from "@/components/footer"

interface FAQItem {
  question: string
  answer: string
}

function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs: FAQItem[] = [
    {
      question: "What is the difference between inbound and outbound services?",
      answer:
        "Inbound services handle incoming customer calls, emails, and chats for support and inquiries. Outbound services involve proactively contacting customers or prospects for telemarketing, lead generation, collections, and customer retention campaigns.",
    },
    {
      question: "What is the best way to reach Outbound Services?",
      answer:
        "You can reach our outbound services team by calling +91-838-005-5201, sending an email to info@dbsmintek.com, or filling out the contact form on our website at www.dbsmintek.com. Our team is available to discuss your specific requirements.",
    },
    {
      question: "What is the average time it takes to process and launch a campaign?",
      answer:
        "Campaign setup typically takes 3-5 business days depending on complexity. This includes CRM configuration, agent training, script development, and testing. We can design and implement campaigns on the fly as per customer needs.",
    },
    {
      question: "What are Outbound Services?",
      answer:
        "Outbound services involve proactively contacting customers or prospects through telemarketing, telesales, lead generation, collections, and customer retention campaigns. These services help businesses increase leads, sales, and maintain customer relationships.",
    },
    {
      question: "How can I contact Outbound Services for more information?",
      answer:
        "Contact us at +91-838-005-5201 or email info@dbsmintek.com. You can also visit our website at www.dbsmintek.com to learn more about our comprehensive outbound solutions and request a consultation.",
    },
    {
      question: "What does it mean to be an Outbound Services Representative?",
      answer:
        "Outbound service representatives proactively contact customers who have expressed interest in products or services. They follow up on inquiries, conduct sales calls, generate leads, and maintain customer relationships. Our representatives are trained subject matter experts in collections, lead generation, and customer retention.",
    },
    {
      question: "What are the most common outbound services you provide?",
      answer:
        "Our most common outbound services include telemarketing campaigns, lead generation, telesales, collections, customer retention calls, appointment setting, market research, and survey campaigns. We also provide hosted OBD solutions and CRM integration services.",
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

export default function OutboundServices() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
       <Header/>
      {/* Hero Section */}
      <section className="relative py-16 sm:py-20 lg:py-24 px-4 bg-gradient-to-r from-green-600 to-blue-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-6 sm:space-y-8">
              <div className="space-y-4">
                <Badge variant="secondary" className="bg-white/20 text-white border-white/30 text-sm">
                  Lead Generation & Sales
                </Badge>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
                  Outbound Telemarketing
                  <span className="block text-green-200">& Telesales Services</span>
                </h1>
                <p className="text-lg sm:text-xl text-green-100 leading-relaxed">
                  Connect with new customers and grow your business with our expert outbound services. Our experienced
                  telemarketers are subject matter experts in collections, lead generation, and customer retention.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 sm:p-6">
                <div className="text-lg sm:text-xl font-semibold mb-2 text-green-100">
                  "Outbound services are a great way to connect with new customers and grow your business."
                </div>
                <div className="text-sm text-green-200">- DBS MINTEK Expert Team</div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100 font-semibold">
                  <Phone className="w-5 h-5 mr-2" />
                  Start Campaign Today
                </Button>
                <Button size="lg" variant="outline" className="border-white hover:text-white text-green-600 hover:bg-white/10">
                  View Solutions
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8">
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-white/20 rounded-lg p-4 text-center">
                    <TrendingUp className="w-8 h-8 mx-auto mb-2" />
                    <div className="text-sm font-medium">Lead Generation</div>
                  </div>
                  <div className="bg-white/20 rounded-lg p-4 text-center">
                    <Target className="w-8 h-8 mx-auto mb-2" />
                    <div className="text-sm font-medium">Telesales</div>
                  </div>
                  <div className="bg-white/20 rounded-lg p-4 text-center">
                    <Users className="w-8 h-8 mx-auto mb-2" />
                    <div className="text-sm font-medium">Collections</div>
                  </div>
                  <div className="bg-white/20 rounded-lg p-4 text-center">
                    <UserCheck className="w-8 h-8 mx-auto mb-2" />
                    <div className="text-sm font-medium">Retention</div>
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-sm text-green-200 mb-2">Serving Industries</div>
                  <div className="text-lg font-semibold">Telecom • NBFC • BFSI • Collections</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Advantages */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Key Advantages of Our Outbound Services
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Discover how our outbound telemarketing services can transform your business growth and customer
              relationships.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6 sm:gap-8">
            <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-0 hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                    <TrendingUp className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-xl text-gray-900">Increased Leads</CardTitle>
                    <Badge variant="secondary" className="bg-blue-200 text-blue-800 mt-1">
                      Higher ROI
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Generate more qualified leads than traditional methods like online advertising or direct mail. Our
                  targeted approach ensures higher conversion rates and better ROI.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                    Targeted prospect identification
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                    Qualified lead generation
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                    Higher conversion rates
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-green-50 to-green-100 border-0 hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center">
                    <BarChart3 className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-xl text-gray-900">Improved Sales</CardTitle>
                    <Badge variant="secondary" className="bg-green-200 text-green-800 mt-1">
                      Revenue Growth
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Boost sales performance by increasing the number of qualified leads converted into customers. Our
                  expert sales representatives maximize your conversion potential.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                    Professional sales approach
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                    Objection handling expertise
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                    Closing techniques mastery
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-0 hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center">
                    <Users className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-xl text-gray-900">Better Retention</CardTitle>
                    <Badge variant="secondary" className="bg-purple-200 text-purple-800 mt-1">
                      Cost Effective
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Retain customers more effectively and cost-efficiently than acquiring new ones. Regular communication
                  through outbound calls improves customer satisfaction and loyalty.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                    Proactive customer engagement
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                    Relationship building focus
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                    Reduced churn rates
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Lead Management Solutions */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 bg-gradient-to-r from-gray-50 to-blue-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Lead Management Solutions
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              DBS MINTEK offers hosted OBD and customized CRM solutions for leading telecom players and #1 NBFC in India
              for collection processes.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-16">
            <div className="space-y-6">
              <div className="space-y-4">
                <Badge variant="secondary" className="bg-blue-100 text-blue-700">
                  Enterprise Solutions
                </Badge>
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">Advanced CRM & OBD Integration</h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Our solutions are highly customizable and tailored to match your specific requirements, helping
                  increase business efficiency with minimal training and support needed.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <Settings className="w-4 h-4 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Highly Customizable Solutions</h4>
                    <p className="text-gray-600 text-sm">
                      Tailored to match specific customer requirements and business processes
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <Zap className="w-4 h-4 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Easy to Use Interface</h4>
                    <p className="text-gray-600 text-sm">Minimal training required with intuitive user experience</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <BarChart3 className="w-4 h-4 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Real-time Visibility & Tracking</h4>
                    <p className="text-gray-600 text-sm">
                      Comprehensive tracking of sales and collection processes with live reporting
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <TrendingUp className="w-4 h-4 text-orange-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Business Efficiency Improvement</h4>
                    <p className="text-gray-600 text-sm">
                      Improved customer service, increased sales, and reduced collection cycle time
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-xl">
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-blue-50 rounded-lg p-4 text-center">
                  <Database className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                  <div className="text-sm font-medium text-gray-900">CRM Integration</div>
                  <div className="text-xs text-gray-600">7+ Years Experience</div>
                </div>
                <div className="bg-green-50 rounded-lg p-4 text-center">
                  <PhoneCall className="w-8 h-8 text-green-600 mx-auto mb-2" />
                  <div className="text-sm font-medium text-gray-900">Hosted OBD</div>
                  <div className="text-xs text-gray-600">Scalable Solution</div>
                </div>
                <div className="bg-purple-50 rounded-lg p-4 text-center">
                  <Building2 className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                  <div className="text-sm font-medium text-gray-900">Telecom CRM</div>
                  <div className="text-xs text-gray-600">Collection Process</div>
                </div>
                <div className="bg-orange-50 rounded-lg p-4 text-center">
                  <Award className="w-8 h-8 text-orange-600 mx-auto mb-2" />
                  <div className="text-sm font-medium text-gray-900">Blended Calls</div>
                  <div className="text-xs text-gray-600">Best of Both Worlds</div>
                </div>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-green-600 text-white rounded-full px-4 py-2">
                  <Star className="w-4 h-4" />
                  <span className="text-sm font-medium">Campaign Design On-The-Fly</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Features */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Service Features
            </h2>
            <p className="text-lg text-gray-600">
              Explore our full range of outbound services designed to maximize your business potential.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {/* Missed Call Services */}
            <Card className="border-l-4 border-l-blue-500 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-blue-600" />
                  </div>
                  <CardTitle className="text-lg">Missed Call Services</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  Innovative lead management service that captures missed calls and converts them into potential leads
                  with automated follow-up systems.
                </p>
                <ul className="space-y-1 text-xs text-gray-600">
                  <li>• Track missed calls with time/date stamps</li>
                  <li>• Route calls to appropriate departments</li>
                  <li>• Customizable voicemail systems</li>
                  <li>• Automated email notifications</li>
                </ul>
              </CardContent>
            </Card>

            {/* Lead Management */}
            <Card className="border-l-4 border-l-green-500 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <Target className="w-6 h-6 text-green-600" />
                  </div>
                  <CardTitle className="text-lg">Lead Management</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  Web-based software that organizes and tracks leads from generation to sale, providing comprehensive
                  performance reports.
                </p>
                <ul className="space-y-1 text-xs text-gray-600">
                  <li>• Track leads from start to finish</li>
                  <li>• Detailed lead performance reports</li>
                  <li>• Improved sales efficiency</li>
                  <li>• Organize by stage, activity, or source</li>
                </ul>
              </CardContent>
            </Card>

            {/* Hosted OBD */}
            <Card className="border-l-4 border-l-purple-500 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                    <PhoneCall className="w-6 h-6 text-purple-600" />
                  </div>
                  <CardTitle className="text-lg">Hosted OBD</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  Scalable, secure, and reliable hosted outbound dialing solution that's easy to use and affordable for
                  businesses of all sizes.
                </p>
                <ul className="space-y-1 text-xs text-gray-600">
                  <li>• Easy setup and deployment</li>
                  <li>• Affordable subscription model</li>
                  <li>• Scalable infrastructure</li>
                  <li>• State-of-the-art security</li>
                </ul>
              </CardContent>
            </Card>

            {/* CRM Integration */}
            <Card className="border-l-4 border-l-orange-500 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                    <Database className="w-6 h-6 text-orange-600" />
                  </div>
                  <CardTitle className="text-lg">CRM Integration</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  7+ years of experience providing CRM integration services to help businesses manage customer
                  relationships more effectively.
                </p>
                <ul className="space-y-1 text-xs text-gray-600">
                  <li>• Seamless system integration</li>
                  <li>• Enhanced customer management</li>
                  <li>• Increased sales effectiveness</li>
                  <li>• Proven track record</li>
                </ul>
              </CardContent>
            </Card>

            {/* Blended Calls */}
            <Card className="border-l-4 border-l-red-500 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                    <Headphones className="w-6 h-6 text-red-600" />
                  </div>
                  <CardTitle className="text-lg">Blended Calls</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  Best of both worlds combining cost-effectiveness of offshore operations with quality and customer
                  service of onshore centers.
                </p>
                <ul className="space-y-1 text-xs text-gray-600">
                  <li>• Cost-effective solutions</li>
                  <li>• High-quality service delivery</li>
                  <li>• World-class customer experience</li>
                  <li>• Real business value</li>
                </ul>
              </CardContent>
            </Card>

            {/* Telecom Collections */}
            <Card className="border-l-4 border-l-indigo-500 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center">
                    <Building2 className="w-6 h-6 text-indigo-600" />
                  </div>
                  <CardTitle className="text-lg">Telecom Collections</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  Customized CRM solution designed specifically for leading telecom players in India to manage their
                  collection processes efficiently.
                </p>
                <ul className="space-y-1 text-xs text-gray-600">
                  <li>• Automated workflow & notifications</li>
                  <li>• Customized dashboards & reports</li>
                  <li>• Secure customer portal</li>
                  <li>• Efficient collection management</li>
                </ul>
              </CardContent>
            </Card>
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
              We're here to help you with any questions about our outbound services.
            </p>
          </div>

          <FAQSection />
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 bg-gradient-to-r from-green-600 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="space-y-6 sm:space-y-8">
            <div className="space-y-4">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
                Ready to Boost Your Sales & Lead Generation?
              </h2>
              <p className="text-lg sm:text-xl text-green-100 max-w-2xl mx-auto leading-relaxed">
                Contact us today for more details about our comprehensive outbound services and discover how we can help
                grow your business.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100 font-semibold px-8">
                <Phone className="w-5 h-5 mr-2" />
                Call +91-838-005-5201
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-green-600 hover:text-white  hover:bg-white/10 font-semibold px-8"
              >
                <Mail className="w-5 h-5 mr-2" />
                Email info@dbsmintek.com
              </Button>
            </div>

            <div className="grid sm:grid-cols-3 gap-6 pt-8 border-t border-white/20">
              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Clock className="w-6 h-6" />
                </div>
                <div className="font-semibold">Quick Campaign Setup</div>
                <div className="text-sm text-green-200">3-5 business days</div>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Shield className="w-6 h-6" />
                </div>
                <div className="font-semibold">Expert Team</div>
                <div className="text-sm text-green-200">Subject matter experts</div>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Award className="w-6 h-6" />
                </div>
                <div className="font-semibold">Proven Results</div>
                <div className="text-sm text-green-200">Telecom & NBFC success</div>
              </div>
            </div>

            <div className="pt-6 border-t border-white/20">
              <p className="text-sm text-green-200">
                Visit our website:{" "}
                <a href="https://www.dbsmintek.com" className="text-white font-semibold hover:underline">
                  www.dbsmintek.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
    
  )
  
}
