const links = [
  { label: 'Servicios', href: '#servicios' },
  { label: '¿Por qué nosotros?', href: '#por-que-nosotros' },
  { label: 'Contacto', href: '#contacto' },
]

export default function Footer() {
  return (
    <footer className="bg-azul-marino text-white">
      <div className="container-max px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid sm:grid-cols-2 gap-10 mb-10">
          {/* Brand */}
          <div>
            {/* Logo de texto: "Byte" en naranja para diferenciarse del fondo navy */}
            <div className="mb-2">
              <span className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
                Bit&amp;
              </span>
              <span className="font-display font-extrabold text-3xl sm:text-4xl text-naranja-ambar tracking-tight">
                Byte
              </span>
            </div>
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-blue-300/50 mb-4">
              Tech Solutions
            </p>
            <p className="text-blue-200/70 text-sm leading-relaxed max-w-xs">
              Soluciones tecnológicas integrales para tu empresa.
            </p>
          </div>

          {/* Links */}
          <div className="sm:text-right">
            <p className="text-xs font-semibold text-blue-300/60 uppercase tracking-widest mb-4">
              Navegación
            </p>
            <nav className="flex sm:justify-end flex-wrap gap-x-6 gap-y-2">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="text-blue-200/70 hover:text-white text-sm transition-colors"
                >
                  {l.label}
                </a>
              ))}
            </nav>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-6 text-center text-blue-200/40 text-xs">
          © 2026 Bit&amp;Byte — Soluciones Tecnológicas Integrales. Argentina.
        </div>
      </div>
    </footer>
  )
}
