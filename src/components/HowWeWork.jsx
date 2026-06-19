import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { MessageSquare, FileText, Code2, CheckCircle2 } from 'lucide-react'

const steps = [
  {
    icon: MessageSquare,
    num: '01',
    title: 'Primera consulta',
    desc: 'Nos presentás tu proyecto o problemática. Con una reunión o un mensaje es suficiente para empezar a entender qué necesitás.',
  },
  {
    icon: FileText,
    num: '02',
    title: 'Análisis y presupuesto',
    desc: 'Relevamos tu caso en detalle y elaboramos una propuesta clara: alcance, tiempos y costo. Sin letra chica ni sorpresas.',
  },
  {
    icon: Code2,
    num: '03',
    title: 'Desarrollo por etapas',
    desc: 'Construimos la solución de forma ordenada, con informes periódicos para que tengas visibilidad total del avance.',
  },
  {
    icon: CheckCircle2,
    num: '04',
    title: 'Entrega y soporte continuo',
    desc: 'El sistema entra en producción y el equipo sigue disponible para soporte, mantenimiento y cualquier evolución futura.',
  },
]

export default function HowWeWork() {
  const lineRef = useRef(null)
  const inView = useInView(lineRef, { once: true, margin: '-100px' })

  return (
    <section id="como-trabajamos" className="section-padding bg-[#071830] relative overflow-hidden">
      {/* Blobs decorativos de profundidad */}
      <div aria-hidden="true" className="absolute -top-40 -left-40 w-96 h-96 bg-azul-electrico/10 rounded-full blur-3xl pointer-events-none" />
      <div aria-hidden="true" className="absolute -bottom-40 -right-40 w-96 h-96 bg-azul-electrico/8 rounded-full blur-3xl pointer-events-none" />
      {/* Grid de puntos sutil */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />

      <div className="container-max relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-display font-bold text-3xl sm:text-4xl text-white text-center mb-16"
        >
          Así arrancamos juntos
        </motion.h2>

        {/* Desktop: horizontal timeline */}
        <div className="hidden lg:block relative" ref={lineRef}>
          {/* Connector line */}
          <div className="absolute top-7 left-[12.5%] right-[12.5%] h-px bg-white/10 overflow-hidden">
            <motion.div
              className="h-full bg-azul-electrico origin-left"
              initial={{ scaleX: 0 }}
              animate={inView ? { scaleX: 1 } : {}}
              transition={{ duration: 1.2, ease: 'easeInOut', delay: 0.3 }}
            />
          </div>

          <div className="grid grid-cols-4 gap-6">
            {steps.map((s, i) => (
              <motion.div
                key={s.num}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="flex flex-col items-center text-center"
              >
                {/* Icon circle */}
                <div className="relative z-10 w-14 h-14 rounded-full bg-azul-electrico flex items-center justify-center mb-5 shadow-lg shadow-azul-electrico/30">
                  <s.icon size={22} className="text-white" />
                </div>
                <span className="text-xs font-bold text-blue-400/60 tracking-widest mb-1">
                  {s.num}
                </span>
                <h3 className="font-display font-bold text-base text-white mb-2">{s.title}</h3>
                <p className="text-blue-200/70 text-sm leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile: vertical */}
        <div className="lg:hidden space-y-8">
          {steps.map((s, i) => (
            <motion.div
              key={s.num}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex gap-5"
            >
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-azul-electrico flex items-center justify-center shadow-md shadow-azul-electrico/30 flex-shrink-0">
                  <s.icon size={20} className="text-white" />
                </div>
                {i < steps.length - 1 && (
                  <div className="w-px flex-1 mt-2 bg-white/10 min-h-[2rem]" />
                )}
              </div>
              <div className="pb-4">
                <span className="text-xs font-bold text-blue-400/60 tracking-widest">
                  {s.num}
                </span>
                <h3 className="font-display font-bold text-base text-white mb-1">{s.title}</h3>
                <p className="text-blue-200/70 text-sm leading-relaxed">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
