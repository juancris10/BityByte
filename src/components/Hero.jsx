import { motion } from 'framer-motion'
import { ArrowRight, ChevronDown, MessageCircle, Instagram } from 'lucide-react'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: 'easeOut' },
})

/* ── Fondo de circuito ─────────────────────────────────────── */
function CircuitBg() {
  return (
    <svg
      className="absolute inset-0 w-full h-full"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <pattern id="circuit" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
          <path d="M10 30 H30 M30 30 V10 M30 10 H50" stroke="#0283E7" strokeWidth="0.8" fill="none" />
          <circle cx="10" cy="30" r="2" fill="#0283E7" />
          <circle cx="50" cy="10" r="2" fill="#0283E7" />
          <path d="M50 50 H40 V40 H20" stroke="#0283E7" strokeWidth="0.8" fill="none" />
          <circle cx="20" cy="40" r="2" fill="#0283E7" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#circuit)" opacity="0.20" />
    </svg>
  )
}

/* ── Mockup del dashboard ───────────────────────────────────── */
function DashboardMockup() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 40, y: 10 }}
      animate={{ opacity: 1, x: 0, y: 0 }}
      transition={{ duration: 0.9, delay: 0.4, ease: 'easeOut' }}
      className="relative w-full max-w-lg mx-auto pb-8 pt-6"
    >


      {/* Marco con borde gradiente */}
      <div
        className="rounded-2xl p-[1.5px] shadow-2xl shadow-azul-electrico/20"
        style={{ background: 'linear-gradient(135deg, rgba(2,131,231,0.5) 0%, rgba(252,114,8,0.25) 100%)' }}
      >
        <div className="bg-[#06111f] rounded-[14px] overflow-hidden">
          {/* Barra de título */}
          <div className="flex items-center gap-1.5 px-4 py-3 bg-[#0d1e32]">
            <div className="w-3 h-3 rounded-full bg-red-400/70" />
            <div className="w-3 h-3 rounded-full bg-yellow-400/70" />
            <div className="w-3 h-3 rounded-full bg-green-400/70" />
            <div className="flex-1 mx-3 h-5 bg-white/8 rounded-full text-[10px] text-white/35 flex items-center px-3">
              app.bitbyte.com.ar
            </div>
          </div>
          {/* Contenido del dashboard */}
          <div className="p-5">
            {/* KPI cards */}
            <div className="grid grid-cols-3 gap-3 mb-4">
              {[
                { label: 'Ventas hoy', val: '128', color: 'text-green-400' },
                { label: 'Pedidos', val: '34', color: 'text-blue-300' },
                { label: 'Stock', val: '91%', color: 'text-naranja-ambar' },
              ].map((s) => (
                <div key={s.label} className="bg-white/5 rounded-lg p-3">
                  <p className="text-[10px] text-white/35 mb-1">{s.label}</p>
                  <p className={`text-lg font-bold font-display ${s.color}`}>{s.val}</p>
                </div>
              ))}
            </div>
            {/* Gráfico de barras */}
            <div className="bg-white/5 rounded-lg p-3 mb-3">
              <p className="text-[10px] text-white/35 mb-2">Actividad semanal</p>
              <div className="flex items-end gap-1.5 h-14">
                {[40, 65, 45, 80, 55, 90, 70].map((h, i) => (
                  <motion.div
                    key={i}
                    initial={{ height: 0 }}
                    animate={{ height: `${h}%` }}
                    transition={{ duration: 0.6, delay: 0.8 + i * 0.07 }}
                    className="flex-1 rounded-sm bg-azul-electrico/70"
                  />
                ))}
              </div>
            </div>
            {/* Tabla de pedidos */}
            <div className="space-y-1.5">
              {['Pedido #1042', 'Pedido #1041', 'Pedido #1040'].map((r, i) => (
                <div key={r} className="flex items-center justify-between bg-white/5 rounded px-3 py-1.5">
                  <span className="text-[10px] text-white/55">{r}</span>
                  <span className={`text-[10px] font-semibold ${i === 0 ? 'text-green-400' : 'text-white/30'}`}>
                    {i === 0 ? 'Nuevo' : 'Procesado'}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Badge verde — uptime */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 1.2 }}
        className="absolute -bottom-2 -left-2 sm:-left-5 bg-[#0d1e32] border border-white/10 rounded-xl shadow-xl px-4 py-3 flex items-center gap-2"
      >
        <div className="w-8 h-8 rounded-full bg-green-500/15 flex items-center justify-center flex-shrink-0">
          <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse" />
        </div>
        <div>
          <p className="text-[10px] text-white/35 leading-none">Sistema online</p>
          <p className="text-xs font-semibold text-white">99.9% uptime</p>
        </div>
      </motion.div>
    </motion.div>
  )
}



/* ── Hero principal ────────────────────────────────────────── */
export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-24 overflow-hidden bg-azul-marino">
      <CircuitBg />

      {/* Mesh de gradientes — profundidad de color */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 60% 60% at 15% 55%, rgba(2,131,231,0.18) 0%, transparent 70%),' +
            'radial-gradient(ellipse 40% 50% at 85% 25%, rgba(252,114,8,0.10) 0%, transparent 65%),' +
            'radial-gradient(ellipse 50% 40% at 70% 80%, rgba(2,131,231,0.08) 0%, transparent 60%)',
        }}
      />

      {/* Anillos decorativos concéntricos — lado derecho */}
      <div aria-hidden="true" className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/3 w-[560px] h-[560px] rounded-full border border-white/5 pointer-events-none" />
      <div aria-hidden="true" className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/4 w-[700px] h-[700px] rounded-full border border-white/[0.03] pointer-events-none" />



      <div className="container-max section-padding relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* ── Columna de texto ── */}
          <div>
            {/* Badge pill */}
            <motion.div {...fadeUp(0)}>
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/15 bg-white/5 text-blue-300 text-xs font-semibold mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-naranja-ambar animate-pulse" />
                Equipo tecnológico independiente · Argentina
              </span>
            </motion.div>

            {/* H1 con gradiente en la frase clave */}
            <motion.h1
              {...fadeUp(0.1)}
              className="font-display font-extrabold text-4xl sm:text-5xl lg:text-[3.25rem] leading-[1.1] text-white mb-6"
            >
              Tu negocio tiene desafíos.{' '}
              <span className="bg-gradient-to-r from-azul-electrico to-[#05A9F7] bg-clip-text text-transparent">
                La tecnología los resuelve.
              </span>
            </motion.h1>

            <motion.p
              {...fadeUp(0.2)}
              className="text-lg text-blue-200/70 leading-relaxed mb-8 max-w-xl"
            >
              Somos Bit&amp;Byte — un equipo de tres profesionales independientes asociados para
              brindar soluciones tecnológicas integrales a emprendedores, comercios,
              profesionales y organizaciones de todo tipo.
            </motion.p>

            {/* CTAs */}
            <motion.div {...fadeUp(0.3)} className="flex flex-col sm:flex-row gap-3">
              <a
                href="#contacto"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-naranja-ambar text-white font-semibold hover:bg-[#e26200] transition-colors shadow-lg shadow-orange-900/40"
              >
                Quiero empezar
                <ArrowRight size={18} />
              </a>
              <a
                href="#servicios"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg border-2 border-white/25 text-white font-semibold hover:bg-white/10 transition-colors"
              >
                Ver qué hacemos
              </a>
            </motion.div>

            {/* Quick contact strip */}
            <motion.div
              {...fadeUp(0.45)}
              className="flex flex-wrap items-center gap-x-6 gap-y-3 mt-8 pt-8 border-t border-white/10"
            >
              <a
                href="https://wa.me/5493705249466"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white/60 hover:text-white text-sm font-medium transition-colors"
              >
                <MessageCircle size={16} />
                WhatsApp directo
              </a>
              <span className="text-white/20 hidden sm:block">|</span>
              <a
                href="https://www.instagram.com/somosbitbyte/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white/60 hover:text-white text-sm font-medium transition-colors"
              >
                <Instagram size={16} />
                @somosbitbyte
              </a>
            </motion.div>
          </div>

          {/* ── Mockup ── */}
          <div>
            <DashboardMockup />
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/25"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ChevronDown size={20} />
        </motion.div>
      </motion.div>
    </section>
  )
}
