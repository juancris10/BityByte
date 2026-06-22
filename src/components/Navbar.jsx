import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import Logo from './Logo'

const links = [
  { label: 'Servicios', href: '#servicios' },
  { label: '¿Por qué nosotros?', href: '#por-que-nosotros' },
  { label: 'Cómo trabajamos', href: '#como-trabajamos' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  useEffect(() => {
    const observers = links.map(({ href }) => {
      const el = document.getElementById(href.slice(1))
      if (!el) return null
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(href.slice(1)) },
        { rootMargin: '-80px 0px -65% 0px', threshold: 0 }
      )
      obs.observe(el)
      return obs
    })
    return () => observers.forEach((o) => o?.disconnect())
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-sm' : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      <div className="container-max flex items-center justify-between py-3 px-4 sm:px-6 lg:px-8">
        {/* Logo — tamaño responsivo optimizado para legibilidad */}
        <a href="#" className="flex items-center flex-shrink-0">
          <Logo className="h-12 md:h-14 lg:h-16 w-auto" />
        </a>

        {/* Desktop nav — visible desde lg (1024px) */}
        <nav className="hidden lg:flex items-center gap-7">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`text-sm font-medium transition-colors whitespace-nowrap ${
                activeSection === l.href.slice(1)
                  ? 'text-azul-electrico'
                  : 'text-texto-oscuro hover:text-azul-electrico'
              }`}
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* CTA desktop */}
        <a
          href="#contacto"
          className="hidden lg:inline-flex items-center px-4 py-2 rounded-lg bg-naranja-ambar text-white text-sm font-semibold hover:bg-orange-600 transition-colors shadow-sm shadow-orange-100 whitespace-nowrap"
        >
          Contactanos
        </a>

        {/* Hamburger — visible hasta lg */}
        <button
          className="lg:hidden text-texto-oscuro p-2 rounded-lg hover:bg-gray-100 transition-colors"
          onClick={() => setOpen(!open)}
          aria-label="Menú"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile / tablet menu */}
      {open && (
        <div className="lg:hidden bg-white border-t border-gray-100 px-4 py-5 flex flex-col gap-1">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-sm font-medium text-texto-oscuro hover:text-azul-electrico hover:bg-blue-50 transition-colors px-3 py-2.5 rounded-lg"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contacto"
            onClick={() => setOpen(false)}
            className="mt-3 flex items-center justify-center px-4 py-3 rounded-lg bg-naranja-ambar text-white text-sm font-bold hover:bg-orange-600 transition-colors"
          >
            Contactanos
          </a>
        </div>
      )}
    </header>
  )
}
