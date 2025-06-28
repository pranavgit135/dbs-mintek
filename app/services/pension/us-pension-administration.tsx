"use client"

import { useState } from "react"
import {
  DollarSign,
  Shield,
  FileText,
  Users,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Settings,
  BarChart3,
  Clock,
  Award,
  Building2,
  ChevronDown,
  ChevronUp,
  Phone,
  Calculator,
  Database,
  Lock,
  Globe,
  Target,
  Briefcase,
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
      question: "What types of pension plans do you administer?",
      answer:
        "We specialize in comprehensive 401(k) plan administration, including traditional 401(k), Roth 401(k), Safe Harbor plans, and profit-sharing plans. Our services cover the entire backend administration for defined contribution plans with full compliance management.",
    },
    {
      question: "How long have you been managing US pension plans?",
      answer:
        "We have been managing US pension plan backend administration for over 13 years, serving a leading US West Coast client. Our extensive experience includes managing various 401(k) plans and staying current with evolving regulatory requirements.",
    },
    {
      question: "What compliance and regulatory services do you provide?",
      answer:
        "We ensure full compliance with ERISA, IRS regulations, DOL requirements, and annual testing including ADP/ACP testing, top-heavy testing, and 415 limit testing. We also handle Form 5500 preparation and filing, audit support, and regulatory correspondence.",
    },
    {
      question: "How do you ensure data security for sensitive pension information?",
      answer:
        "We implement bank-level security measures including 256-bit encryption, secure data transmission protocols, multi-factor authentication, regular security audits, and compliance with SOC 2 Type II standards to protect all participant and plan data.",
    },
    {
      question: "What participant services do you offer?",
      answer:
        "We provide comprehensive participant services including enrollment support, investment education, loan processing, hardship withdrawals, distribution processing, beneficiary services, and dedicated participant helpdesk support with multilingual capabilities.",
    },
    {
      question: "Can you integrate with existing payroll and HR systems?",
      answer:
        "Yes, we offer seamless integration with major payroll providers, HRIS systems, and recordkeeping platforms. Our API-based integrations ensure real-time data synchronization and automated workflows for efficient plan administration.",
    },
    {
      question: "What reporting and analytics capabilities do you provide?",
      answer:
        "We provide comprehensive reporting including participant statements, plan performance reports, compliance testing results, fiduciary reports, custom analytics dashboards, and real-time plan metrics to support informed decision-making.",
    },
  ]

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => (
        <Card key={index} className="border border-gray-200 hover:border-emerald-300 transition-colors">
          <CardHeader className="cursor-pointer hover:bg-gray-50 transition-colors" onClick={() => toggleFAQ(index)}>
            <div className="flex items-center justify-between">
              <CardTitle className="text-base sm:text-lg font-semibold text-gray-900 pr-4">{faq.question}</CardTitle>
              {openIndex === index ? (
                <ChevronUp className="w-5 h-5 text-emerald-600 flex-shrink-0" />
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

export default function USPensionAdministration() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-blue-50">
      <Header/>
      {/* Hero Section */}
      <section className="relative py-16 sm:py-20 lg:py-24 px-4 bg-gradient-to-r from-emerald-600 to-blue-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-6 sm:space-y-8">
              <div className="space-y-4">
                <Badge variant="secondary" className="bg-white/20 text-white border-white/30 text-sm">
                  13+ Years Experience
                </Badge>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
                  US Pension Plan
                  <span className="block text-emerald-200">Administration Services</span>
                </h1>
                <p className="text-lg sm:text-xl text-emerald-100 leading-relaxed">
                  Comprehensive backend administration for US pension plans with over 13 years of proven expertise.
                  Managing the entire 401(k) plan administration lifecycle for leading US West Coast clients with
                  precision and compliance excellence.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 sm:p-6">
                <div className="flex items-start gap-3">
                  <Award className="w-6 h-6 text-yellow-300 flex-shrink-0 mt-1" />
                  <div>
                    <div className="text-lg font-semibold mb-2 text-emerald-100">Trusted Partnership</div>
                    <div className="text-sm text-emerald-200">
                      Over 13 years of managing entire US pension plan backend administration for leading US West Coast
                      client, including comprehensive 401(k) plan management.
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-white text-emerald-600 hover:bg-gray-100 font-semibold">
                  <DollarSign className="w-5 h-5 mr-2" />
                  Get Started Today
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
                    <DollarSign className="w-8 h-8 mx-auto mb-2" />
                    <div className="text-sm font-medium">401(k) Plans</div>
                  </div>
                  <div className="bg-white/20 rounded-lg p-4 text-center">
                    <Shield className="w-8 h-8 mx-auto mb-2" />
                    <div className="text-sm font-medium">Compliance</div>
                  </div>
                  <div className="bg-white/20 rounded-lg p-4 text-center">
                    <FileText className="w-8 h-8 mx-auto mb-2" />
                    <div className="text-sm font-medium">Administration</div>
                  </div>
                  <div className="bg-white/20 rounded-lg p-4 text-center">
                    <Users className="w-8 h-8 mx-auto mb-2" />
                    <div className="text-sm font-medium">Participant Services</div>
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-sm text-emerald-200 mb-2">Comprehensive Solutions</div>
                  <div className="text-lg font-semibold">Backend • Compliance • Support</div>
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
              Complete Pension Plan Administration
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              From plan setup to ongoing administration, we manage every aspect of your US pension plans with meticulous
              attention to compliance, participant satisfaction, and operational efficiency.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6 sm:gap-8">
            <Card className="bg-gradient-to-br from-emerald-50 to-emerald-100 border-0 hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center">
                    <DollarSign className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-xl text-gray-900">401(k) Plan Management</CardTitle>
                    <Badge variant="secondary" className="bg-emerald-200 text-emerald-800 mt-1">
                      Core Service
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Comprehensive management of various 401(k) plans including traditional, Roth, Safe Harbor, and
                  profit-sharing plans with full backend administration and compliance oversight.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                    Traditional & Roth 401(k)
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                    Safe Harbor plans
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                    Profit-sharing administration
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-0 hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                    <Shield className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-xl text-gray-900">Compliance & Regulatory</CardTitle>
                    <Badge variant="secondary" className="bg-blue-200 text-blue-800 mt-1">
                      Risk Management
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Full compliance management with ERISA, IRS, and DOL regulations including annual testing, Form 5500
                  preparation, audit support, and regulatory correspondence handling.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                    ERISA compliance
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                    Annual testing (ADP/ACP)
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                    Form 5500 filing
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-indigo-50 to-indigo-100 border-0 hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-xl flex items-center justify-center">
                    <Users className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-xl text-gray-900">Participant Services</CardTitle>
                    <Badge variant="secondary" className="bg-indigo-200 text-indigo-800 mt-1">
                      Customer Support
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Comprehensive participant support including enrollment, education, loan processing, distributions, and
                  dedicated helpdesk services with multilingual support capabilities.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                    Enrollment support
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                    Investment education
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                    Loan & distribution processing
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Experience & Expertise */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 bg-gradient-to-r from-gray-50 to-emerald-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              13+ Years of Proven Expertise
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our extensive experience managing US pension plans for leading West Coast clients demonstrates our
              commitment to excellence and deep understanding of the retirement benefits landscape.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-16">
            <div className="space-y-6">
              <div className="space-y-4">
                <Badge variant="secondary" className="bg-emerald-100 text-emerald-700">
                  Long-term Partnership
                </Badge>
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">Trusted US West Coast Partnership</h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  For over 13 years, we have been the trusted backend administration partner for a leading US West Coast
                  client, managing their entire pension plan ecosystem with unwavering reliability and expertise.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <Clock className="w-4 h-4 text-emerald-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">13+ Years of Continuous Service</h4>
                    <p className="text-gray-600 text-sm">
                      Uninterrupted service delivery with consistent quality and reliability
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <Building2 className="w-4 h-4 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Leading US West Coast Client</h4>
                    <p className="text-gray-600 text-sm">
                      Serving major enterprise client with complex pension plan requirements
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <Target className="w-4 h-4 text-indigo-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Complete Backend Administration</h4>
                    <p className="text-gray-600 text-sm">
                      End-to-end management of all pension plan administrative functions
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <Briefcase className="w-4 h-4 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Various 401(k) Plan Types</h4>
                    <p className="text-gray-600 text-sm">Expertise across all 401(k) plan variations and structures</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-xl">
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Award className="w-10 h-10 text-white" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">Partnership Milestones</h4>
                <p className="text-gray-600 text-sm">Key achievements in our long-term client relationship</p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-emerald-50 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-emerald-600 mb-1">13+</div>
                  <div className="text-sm text-gray-600">Years Partnership</div>
                </div>
                <div className="bg-blue-50 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-blue-600 mb-1">100%</div>
                  <div className="text-sm text-gray-600">Compliance Rate</div>
                </div>
                <div className="bg-indigo-50 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-indigo-600 mb-1">24/7</div>
                  <div className="text-sm text-gray-600">Support Coverage</div>
                </div>
                <div className="bg-purple-50 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-purple-600 mb-1">99.9%</div>
                  <div className="text-sm text-gray-600">System Uptime</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advanced Services */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Administration Services
            </h2>
            <p className="text-lg text-gray-600">
              Full-spectrum pension plan administration covering every aspect of plan management, compliance, and
              participant services.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <Card className="bg-white hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Calculator className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-xl text-gray-900 mb-2">Plan Design & Setup</CardTitle>
                    <Badge variant="secondary" className="bg-emerald-100 text-emerald-700">
                      Foundation
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Expert plan design consultation, document preparation, and initial setup for new 401(k) plans with
                  optimal structure for client objectives and regulatory compliance.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                    Plan document drafting
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                    Investment platform setup
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                    Compliance framework
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Database className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-xl text-gray-900 mb-2">Recordkeeping Services</CardTitle>
                    <Badge variant="secondary" className="bg-blue-100 text-blue-700">
                      Data Management
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Comprehensive recordkeeping including participant account management, contribution processing,
                  investment tracking, and detailed reporting with real-time data accuracy.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                    Account management
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                    Contribution processing
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                    Investment reconciliation
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <FileText className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-xl text-gray-900 mb-2">Compliance Testing</CardTitle>
                    <Badge variant="secondary" className="bg-indigo-100 text-indigo-700">
                      Regulatory
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Annual compliance testing including ADP/ACP, top-heavy, and 415 limit testing with corrective action
                  implementation and regulatory filing support.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                    ADP/ACP testing
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                    Top-heavy testing
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                    415 limit testing
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Lock className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-xl text-gray-900 mb-2">Fiduciary Support</CardTitle>
                    <Badge variant="secondary" className="bg-purple-100 text-purple-700">
                      Risk Management
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Comprehensive fiduciary support including investment monitoring, fee benchmarking, fiduciary
                  education, and documentation to help minimize fiduciary liability.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                    Investment monitoring
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                    Fee benchmarking
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                    Fiduciary documentation
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-xl text-gray-900 mb-2">Distribution Processing</CardTitle>
                    <Badge variant="secondary" className="bg-green-100 text-green-700">
                      Participant Services
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Complete distribution processing including loans, hardship withdrawals, in-service distributions,
                  termination payouts, and required minimum distributions with tax compliance.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                    Loan processing
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                    Hardship withdrawals
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                    RMD calculations
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <BarChart3 className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-xl text-gray-900 mb-2">Reporting & Analytics</CardTitle>
                    <Badge variant="secondary" className="bg-orange-100 text-orange-700">
                      Business Intelligence
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Comprehensive reporting suite including participant statements, plan performance analytics, compliance
                  reports, and custom dashboards for informed decision-making.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                    Participant statements
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                    Performance analytics
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                    Custom dashboards
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Technology & Security */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 bg-gradient-to-r from-emerald-600 to-blue-700 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">Enterprise-Grade Technology & Security</h2>
            <p className="text-lg text-emerald-100 max-w-3xl mx-auto">
              State-of-the-art technology infrastructure with bank-level security measures to protect sensitive pension
              data and ensure seamless operations.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-4">
                <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                  Security & Technology
                </Badge>
                <h3 className="text-2xl sm:text-3xl font-bold">Bank-Level Security Standards</h3>
                <p className="text-emerald-100 text-lg leading-relaxed">
                  Our technology platform implements the highest security standards with 256-bit encryption,
                  multi-factor authentication, and SOC 2 Type II compliance to protect all participant and plan data.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                    <Lock className="w-4 h-4" />
                  </div>
                  <span className="text-emerald-100">256-bit encryption & secure data transmission</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                    <Shield className="w-4 h-4" />
                  </div>
                  <span className="text-emerald-100">SOC 2 Type II compliance & regular audits</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                    <Globe className="w-4 h-4" />
                  </div>
                  <span className="text-emerald-100">Multi-factor authentication & access controls</span>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Settings className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-bold mb-2">Technology Infrastructure</h4>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/20 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold mb-1">99.9%</div>
                  <div className="text-sm text-emerald-200">System Uptime</div>
                </div>
                <div className="bg-white/20 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold mb-1">24/7</div>
                  <div className="text-sm text-emerald-200">Monitoring</div>
                </div>
                <div className="bg-white/20 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold mb-1">256-bit</div>
                  <div className="text-sm text-emerald-200">Encryption</div>
                </div>
                <div className="bg-white/20 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold mb-1">SOC 2</div>
                  <div className="text-sm text-emerald-200">Compliant</div>
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
              Get answers to common questions about our US pension plan administration services.
            </p>
          </div>

          <FAQSection />
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 bg-gradient-to-r from-emerald-600 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="space-y-6 sm:space-y-8">
            <div className="space-y-4">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
                Ready to Partner with Pension Administration Experts?
              </h2>
              <p className="text-lg sm:text-xl text-emerald-100 max-w-2xl mx-auto leading-relaxed">
                Contact us for more details about our comprehensive US pension plan administration services. Let our 13+
                years of expertise work for your organization.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-emerald-600 hover:bg-gray-100 font-semibold px-8">
                <DollarSign className="w-5 h-5 mr-2" />
                Get Started Today
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10 font-semibold px-8"
              >
                <Phone className="w-5 h-5 mr-2" />
                Schedule Consultation
              </Button>
            </div>

            <div className="grid sm:grid-cols-3 gap-6 pt-8 border-t border-white/20">
              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Award className="w-6 h-6" />
                </div>
                <div className="font-semibold">13+ Years Experience</div>
                <div className="text-sm text-emerald-200">Proven track record</div>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Shield className="w-6 h-6" />
                </div>
                <div className="font-semibold">Full Compliance</div>
                <div className="text-sm text-emerald-200">ERISA & regulatory</div>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Users className="w-6 h-6" />
                </div>
                <div className="font-semibold">Complete Service</div>
                <div className="text-sm text-emerald-200">End-to-end administration</div>
              </div>
            </div>

            <div className="pt-6 border-t border-white/20">
              <p className="text-sm text-emerald-200">
                Ready to experience expert pension plan administration?{" "}
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
