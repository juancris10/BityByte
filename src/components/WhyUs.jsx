import { motion } from 'framer-motion'
import { UserCheck, FileCheck2, Headphones } from 'lucide-react'

const reasons = [
  {
    icon: UserCheck,
    title: 'Hablás directo con quien lo construye',
    desc: 'No hay intermediarios, ejecutivos de cuenta ni call centers. El profesional que diseña y desarrolla tu solución es el mismo que te atiende. Menos malentendidos, más velocidad y más compromiso real.',
  },
  {
    icon: FileCheck2,
    title: 'Precio cerrado antes de arrancar',
    desc: 'Presentamos una propuesta detallada con alcance, tiempos y costo definidos desde el principio. Sin sorpresas a mitad de camino, sin costos que aparecen solos. Si algo cambia, lo acordamos juntos.',
  },
  {
    icon: Headphones,
    title: 'No desaparecemos al entregar',
    desc: 'La entrega del sistema es el inicio de la relación, no el final. Seguimos disponibles para soporte, ajustes y evolución del proyecto. Tu éxito sostenido es lo que sostiene nuestra reputación.',
  },
]

export default function WhyUs() {
  return (
    <section id="por-que-nosotros" className="section-padding bg-gris-claro relative overflow-hidden">
      {/* Dot grid texture */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, #0283E7 1.5px, transparent 1.5px)',
          backgroundSize: '28px 28px',
          opacity: 0.05,
        }}
      />
      <div className="container-max relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-azul-marino mb-4">
            ¿Por qué Bit&amp;Byte y no otro?
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            Tres garantías concretas que la mayoría no se anima a dar.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-3 gap-8">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col items-center text-center bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md hover:border-azul-electrico/20 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-2xl bg-azul-electrico flex items-center justify-center mb-5 shadow-md shadow-blue-200">
                <r.icon size={26} className="text-white" />
              </div>
              <h3 className="font-display font-bold text-lg text-azul-marino mb-3">{r.title}</h3>
              <p className="text-slate-500 leading-relaxed">{r.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
