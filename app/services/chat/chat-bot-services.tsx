"use client"

import { useState } from "react"
import {
  MessageSquare,
  Bot,
  Mic,
  CheckCircle,
  ArrowRight,
  Settings,
  BarChart3,
  Clock,
  Brain,
  Layers,
  ChevronDown,
  ChevronUp,
  Phone,
  TrendingUp,
  Headphones,
  Smartphone,
  Monitor,
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
      question: "What types of chatbots can you integrate with our existing systems?",
      answer:
        "We can integrate various types of chatbots including rule-based bots, AI-powered conversational bots, voice bots, and hybrid solutions. Our integration capabilities support popular platforms and can be customized to work with your existing CRM and communication systems.",
    },
    {
      question: "How do voice bots differ from traditional chatbots?",
      answer:
        "Voice bots use speech recognition and natural language processing to interact through voice commands, while traditional chatbots use text-based communication. Voice bots provide hands-free interaction, making them ideal for accessibility and multitasking scenarios.",
    },
    {
      question: "Can you design custom voice bots based on our specific requirements?",
      answer:
        "Yes, we design custom voice bots tailored to your specific business requirements, including industry-specific terminology, workflow integration, multi-language support, and custom voice personalities that align with your brand identity.",
    },
    {
      question: "What platforms do your chatbots support?",
      answer:
        "Our chatbots support multiple platforms including websites, mobile apps, WhatsApp, Facebook Messenger, Telegram, Slack, Microsoft Teams, and custom API integrations. We ensure seamless deployment across all your customer touchpoints.",
    },
    {
      question: "How do you ensure chatbot accuracy and performance?",
      answer:
        "We use advanced NLP algorithms, continuous machine learning, regular training data updates, performance monitoring, and A/B testing to ensure high accuracy. Our bots are continuously optimized based on real user interactions and feedback.",
    },
    {
      question: "What kind of analytics and reporting do you provide for bot interactions?",
      answer:
        "We provide comprehensive analytics including conversation flow analysis, user engagement metrics, resolution rates, response times, popular queries, user satisfaction scores, and detailed performance reports to help optimize bot effectiveness.",
    },
    {
      question: "How quickly can you deploy a chatbot or voice bot solution?",
      answer:
        "Deployment time varies based on complexity. Simple chatbots can be deployed in 1-2 weeks, while custom voice bots with advanced features may take 4-6 weeks. We provide detailed project timelines during the consultation phase.",
    },
  ]

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => (
        <Card key={index} className="border border-gray-200 hover:border-teal-300 transition-colors">
          <CardHeader className="cursor-pointer hover:bg-gray-50 transition-colors" onClick={() => toggleFAQ(index)}>
            <div className="flex items-center justify-between">
              <CardTitle className="text-base sm:text-lg font-semibold text-gray-900 pr-4">{faq.question}</CardTitle>
              {openIndex === index ? (
                <ChevronUp className="w-5 h-5 text-teal-600 flex-shrink-0" />
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

export default function ChatBotServices() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 to-cyan-50">
      <Header/>
      {/* Hero Section */}
      <section className="relative py-16 sm:py-20 lg:py-24 px-4 bg-gradient-to-r from-teal-600 to-cyan-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-6 sm:space-y-8">
              <div className="space-y-4">
                <Badge variant="secondary" className="bg-white/20 text-white border-white/30 text-sm">
                  AI-Powered Solutions
                </Badge>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
                  Chat, Chatbot &<span className="block text-teal-200">Voice Bot Services</span>
                </h1>
                <p className="text-lg sm:text-xl text-teal-100 leading-relaxed">
                  Transform customer interactions with intelligent chatbot integration and custom voice bot solutions
                  designed to meet your specific business requirements and enhance customer engagement.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 sm:p-6">
                <div className="flex items-start gap-3">
                  <Bot className="w-6 h-6 text-cyan-300 flex-shrink-0 mt-1" />
                  <div>
                    <div className="text-lg font-semibold mb-2 text-teal-100">Intelligent Automation</div>
                    <div className="text-sm text-teal-200">
                      Advanced chatbot integration with various bots and custom voice bot design based on client
                      requirements for seamless customer interactions.
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-white text-teal-600 hover:bg-gray-100 font-semibold">
                  <MessageSquare className="w-5 h-5 mr-2" />
                  Start Bot Integration
                </Button>
                <Button size="lg" variant="outline" className="border-white text-teal-600 hover:text-white hover:bg-white/10">
                  Explore Solutions
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8">
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-white/20 rounded-lg p-4 text-center">
                    <MessageSquare className="w-8 h-8 mx-auto mb-2" />
                    <div className="text-sm font-medium">Live Chat</div>
                  </div>
                  <div className="bg-white/20 rounded-lg p-4 text-center">
                    <Bot className="w-8 h-8 mx-auto mb-2" />
                    <div className="text-sm font-medium">AI Chatbots</div>
                  </div>
                  <div className="bg-white/20 rounded-lg p-4 text-center">
                    <Mic className="w-8 h-8 mx-auto mb-2" />
                    <div className="text-sm font-medium">Voice Bots</div>
                  </div>
                  <div className="bg-white/20 rounded-lg p-4 text-center">
                    <Brain className="w-8 h-8 mx-auto mb-2" />
                    <div className="text-sm font-medium">NLP Engine</div>
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-sm text-teal-200 mb-2">Intelligent Solutions</div>
                  <div className="text-lg font-semibold">24/7 • Multi-platform • Customizable</div>
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
              Intelligent Conversational Solutions
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Deploy proactive chat services on client websites and integrate advanced chatbots with various platforms
              to provide seamless customer interactions and support across all touchpoints.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6 sm:gap-8">
            <Card className="bg-gradient-to-br from-teal-50 to-teal-100 border-0 hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-teal-500 to-teal-600 rounded-xl flex items-center justify-center">
                    <MessageSquare className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-xl text-gray-900">Live Chat Integration</CardTitle>
                    <Badge variant="secondary" className="bg-teal-200 text-teal-800 mt-1">
                      Real-time Support
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Deploy proactive chat services on client websites for prospective and valued clients to interact with
                  agents for urgent requirement fulfillment and immediate support.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                    Website integration
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                    Proactive engagement
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                    Real-time agent interaction
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-cyan-50 to-cyan-100 border-0 hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-xl flex items-center justify-center">
                    <Bot className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-xl text-gray-900">AI Chatbot Integration</CardTitle>
                    <Badge variant="secondary" className="bg-cyan-200 text-cyan-800 mt-1">
                      Smart Automation
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Seamless integration with various chatbot platforms and AI engines to provide intelligent,
                  context-aware responses and automated customer service capabilities.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                    Multi-platform integration
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                    AI-powered responses
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                    Context-aware conversations
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-0 hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                    <Mic className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-xl text-gray-900">Custom Voice Bots</CardTitle>
                    <Badge variant="secondary" className="bg-blue-200 text-blue-800 mt-1">
                      Voice AI
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Design and develop custom voice bots based on specific client requirements, enabling hands-free
                  interactions and voice-driven customer service experiences.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                    Custom voice design
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                    Speech recognition
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                    Natural language processing
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Advanced Features */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 bg-gradient-to-r from-gray-50 to-teal-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Advanced Bot Integration Features
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive chatbot and voice bot solutions designed to enhance customer engagement and streamline
              business operations across multiple platforms.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <Card className="bg-white hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-teal-500 to-teal-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Layers className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-xl text-gray-900 mb-2">Multi-Platform Integration</CardTitle>
                    <Badge variant="secondary" className="bg-teal-100 text-teal-700">
                      Universal Compatibility
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Seamless integration with various bot platforms including WhatsApp, Facebook Messenger, Telegram,
                  Slack, and custom API integrations for comprehensive coverage.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                    Cross-platform deployment
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                    API integrations
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                    Unified management
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Brain className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-xl text-gray-900 mb-2">AI-Powered Intelligence</CardTitle>
                    <Badge variant="secondary" className="bg-cyan-100 text-cyan-700">
                      Machine Learning
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Advanced natural language processing and machine learning capabilities that enable bots to understand
                  context, learn from interactions, and provide intelligent responses.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                    Natural language understanding
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                    Contextual awareness
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                    Continuous learning
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mic className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-xl text-gray-900 mb-2">Voice Bot Technology</CardTitle>
                    <Badge variant="secondary" className="bg-blue-100 text-blue-700">
                      Speech AI
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Custom voice bot design with advanced speech recognition, text-to-speech capabilities, and natural
                  voice interactions tailored to your brand and customer needs.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                    Speech recognition
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                    Text-to-speech synthesis
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                    Custom voice personalities
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Settings className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-xl text-gray-900 mb-2">Custom Configuration</CardTitle>
                    <Badge variant="secondary" className="bg-green-100 text-green-700">
                      Tailored Solutions
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Fully customizable bot configurations based on specific client requirements, including workflow
                  design, response templates, and integration with existing business systems.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                    Custom workflows
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                    Business system integration
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                    Personalized responses
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <BarChart3 className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-xl text-gray-900 mb-2">Analytics & Insights</CardTitle>
                    <Badge variant="secondary" className="bg-purple-100 text-purple-700">
                      Performance Tracking
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Comprehensive analytics and reporting capabilities to track bot performance, user engagement,
                  conversation flows, and optimization opportunities for continuous improvement.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                    Conversation analytics
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                    Performance metrics
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                    Optimization insights
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-xl text-gray-900 mb-2">24/7 Availability</CardTitle>
                    <Badge variant="secondary" className="bg-orange-100 text-orange-700">
                      Always On
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Round-the-clock availability ensuring customers can interact with your business anytime, providing
                  instant responses and support even outside business hours.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                    24/7 customer support
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                    Instant responses
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                    Global time zone support
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
              Cutting-Edge Bot Technology Stack
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Powered by advanced AI, machine learning, and natural language processing technologies to deliver
              intelligent and engaging conversational experiences.
            </p>
          </div>

          <div className="bg-gradient-to-r from-teal-600 to-cyan-700 rounded-2xl p-6 sm:p-8 lg:p-12 text-white">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className="space-y-6">
                <div className="space-y-4">
                  <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                    AI Technology
                  </Badge>
                  <h3 className="text-2xl sm:text-3xl font-bold">Intelligent Conversational AI</h3>
                  <p className="text-teal-100 text-lg leading-relaxed">
                    Our advanced AI technology stack includes natural language processing, machine learning algorithms,
                    and speech recognition capabilities to create intelligent, context-aware conversational experiences.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                      <Brain className="w-4 h-4" />
                    </div>
                    <span className="text-teal-100">Natural Language Processing</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                      <Mic className="w-4 h-4" />
                    </div>
                    <span className="text-teal-100">Speech Recognition & Synthesis</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                      <TrendingUp className="w-4 h-4" />
                    </div>
                    <span className="text-teal-100">Machine Learning Optimization</span>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Bot className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-bold mb-2">Bot Performance Metrics</h4>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/20 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold mb-1">95%</div>
                    <div className="text-sm text-teal-200">Accuracy Rate</div>
                  </div>
                  <div className="bg-white/20 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold mb-1">{"< 2s"}</div>
                    <div className="text-sm text-teal-200">Response Time</div>
                  </div>
                  <div className="bg-white/20 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold mb-1">50+</div>
                    <div className="text-sm text-teal-200">Languages</div>
                  </div>
                  <div className="bg-white/20 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold mb-1">24/7</div>
                    <div className="text-sm text-teal-200">Availability</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Integration */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 bg-gradient-to-r from-gray-50 to-cyan-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Multi-Platform Bot Deployment
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Deploy your chatbots and voice bots across multiple platforms and channels to reach customers wherever
              they are and provide consistent experiences.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <MessageSquare className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">WhatsApp Business</h3>
              <p className="text-sm text-gray-600">
                Integrate with WhatsApp Business API for seamless customer communication
              </p>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Monitor className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Website Integration</h3>
              <p className="text-sm text-gray-600">
                Embed chatbots directly into your website for instant customer support
              </p>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Smartphone className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Mobile Apps</h3>
              <p className="text-sm text-gray-600">Native mobile app integration for iOS and Android applications</p>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Headphones className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Voice Assistants</h3>
              <p className="text-sm text-gray-600">
                Integration with Alexa, Google Assistant, and custom voice platforms
              </p>
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
              Get answers to common questions about our chatbot and voice bot services.
            </p>
          </div>

          <FAQSection />
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 bg-gradient-to-r from-teal-600 to-cyan-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="space-y-6 sm:space-y-8">
            <div className="space-y-4">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold">Ready to Deploy Intelligent Bot Solutions?</h2>
              <p className="text-lg sm:text-xl text-teal-100 max-w-2xl mx-auto leading-relaxed">
                Contact us for more details about our chatbot integration and custom voice bot design services. Let&apos;s
                transform your customer interactions with AI-powered solutions.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-teal-600 hover:bg-gray-100 font-semibold px-8">
                <MessageSquare className="w-5 h-5 mr-2" />
                Start Bot Integration
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-teal-600 hover:text-white hover:bg-white/10 font-semibold px-8"
              >
                <Phone className="w-5 h-5 mr-2" />
                Schedule Consultation
              </Button>
            </div>

            <div className="grid sm:grid-cols-3 gap-6 pt-8 border-t border-white/20">
              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Bot className="w-6 h-6" />
                </div>
                <div className="font-semibold">AI-Powered</div>
                <div className="text-sm text-teal-200">Intelligent automation</div>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Layers className="w-6 h-6" />
                </div>
                <div className="font-semibold">Multi-Platform</div>
                <div className="text-sm text-teal-200">Universal integration</div>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Settings className="w-6 h-6" />
                </div>
                <div className="font-semibold">Custom Design</div>
                <div className="text-sm text-teal-200">Tailored solutions</div>
              </div>
            </div>

            <div className="pt-6 border-t border-white/20">
              <p className="text-sm text-teal-200">
                Ready to enhance customer interactions with intelligent bots?{" "}
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
