
import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import ServicesSection from "@/components/services-section"
import ClientsSection from "@/components/clients-section"
import WhyChooseUsSection from "@/components/why-choose-us-section"
import TestimonialsSection from "@/components/testimonials-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"
import FounderSection from "@/components/founder-section"
import MobileTestimonialsSection from "@/components/mobile-testimonials-section"
import { getHomePage } from "@/utils/contentful/home"

export default async function HomePage() {
  const data = await getHomePage()
 console.log(data);
 
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ClientsSection />
      <WhyChooseUsSection />
      <FounderSection about={data}/>
      <TestimonialsSection about={data}/>
      <MobileTestimonialsSection about={data}/>
      <ContactSection />
      <Footer />
    </div>
  )
}
