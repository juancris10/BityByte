import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import WhyUs from './components/WhyUs'
import PromoBanner from './components/PromoBanner'
import HowWeWork from './components/HowWeWork'
import Team from './components/Team'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { MessageCircle } from 'lucide-react'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <WhyUs />
        <HowWeWork />
        <Team />
        <PromoBanner />
        <Contact />
      </main>
      <Footer />

      {/* Botón flotante de WhatsApp — siempre visible */}
      <a
        id="floating-whatsapp"
        href="https://wa.me/5493705249466"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar por WhatsApp"
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 px-4 py-3 bg-[#25D366] text-white rounded-full shadow-2xl shadow-green-900/30 hover:bg-[#1dba57] hover:scale-105 hover:shadow-green-900/50 transition-all duration-300"
      >
        <MessageCircle size={22} className="flex-shrink-0" />
        <span className="text-sm font-bold hidden sm:block">WhatsApp</span>
        {/* Pulso de atención */}
        <span className="absolute -top-1 -right-1 w-3 h-3 bg-naranja-ambar rounded-full animate-ping" />
        <span className="absolute -top-1 -right-1 w-3 h-3 bg-naranja-ambar rounded-full" />
      </a>
    </>
  )
}
