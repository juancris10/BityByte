import { motion } from 'framer-motion'
import { Gift, ArrowRight } from 'lucide-react'

export default function PromoBanner() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-azul-marino relative overflow-hidden">
      {/* Subtle texture */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            'radial-gradient(circle at 20% 50%, #0283E7 0%, transparent 60%), radial-gradient(circle at 80% 20%, #FC7208 0%, transparent 50%)',
        }}
      />

      <div className="container-max relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {/* Badges */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border-2 border-naranja-ambar text-naranja-ambar font-bold text-sm">
              <Gift size={16} />
              OFERTA VIGENTE
            </span>
            <span className="inline-flex items-center px-3 py-2 rounded-full bg-naranja-ambar/15 border border-naranja-ambar/40 text-naranja-ambar/90 text-xs font-semibold tracking-wide">
              Hasta el 31 de julio
            </span>
          </div>

          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white mb-6 leading-tight">
            Nuestros clientes ya están creciendo.{' '}
            <span className="text-naranja-ambar">Ahora te ofrecemos algo especial.</span>
          </h2>

          <p className="text-blue-200 text-lg leading-relaxed max-w-2xl mx-auto mb-10">
            Cerrá tu proyecto con nosotros antes del 31 de julio y accedés a soporte y
            mantenimiento mensual{' '}
            <strong className="text-white">gratis durante los primeros 3 meses</strong>.
            Trabajamos con emprendedores, comercios, profesionales y organizaciones de todo tipo.
            Sin rodeos, sin letra chica.
          </p>

          <a
            href="#contacto"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-naranja-ambar text-white font-bold text-lg hover:bg-[#e26200] transition-colors shadow-2xl shadow-orange-900/40"
          >
            Contanos tu proyecto
            <ArrowRight size={20} />
          </a>

          <p className="mt-6 text-blue-300/60 text-xs">
            Respondemos todas las consultas. Sin compromiso.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
