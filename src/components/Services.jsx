import { motion } from 'framer-motion'
import { Monitor, Globe, Shield, Server, ClipboardList, Wrench } from 'lucide-react'

const services = [
  {
    icon: Monitor,
    title: 'Sistemas a medida',
    desc: 'Si tu operación depende de planillas, procesos manuales o herramientas que no se adaptan a tu negocio, desarrollamos el sistema que necesitás — exactamente como lo necesitás.',
  },
  {
    icon: Globe,
    title: 'Presencia digital profesional',
    desc: 'Tu empresa merece verse a la altura en internet. Diseñamos y desarrollamos sitios y aplicaciones web que generan confianza desde el primer clic.',
  },
  {
    icon: Shield,
    title: 'Seguridad de la información',
    desc: 'Los datos de tu empresa y de tus clientes son un activo crítico. Implementamos medidas de protección para que operes con tranquilidad y confianza.',
  },
  {
    icon: Server,
    title: 'Infraestructura y hosting',
    desc: 'Tu sistema disponible las 24 horas, sin interrupciones. Nos encargamos de la configuración, el despliegue y el monitoreo continuo del servidor.',
  },
  {
    icon: ClipboardList,
    title: 'Análisis y planificación',
    desc: 'Antes de desarrollar cualquier cosa, entendemos a fondo tu negocio. Relevamos tus necesidades, definimos el alcance y presentamos un plan claro con todo documentado.',
  },
  {
    icon: Wrench,
    title: 'Soporte y mantenimiento',
    desc: 'La entrega del sistema es el inicio de la relación, no el final. Brindamos soporte mensual, actualizaciones y respaldo continuo para que todo siga funcionando.',
  },
]

export default function Services() {
  return (
    <section id="servicios" className="section-padding bg-gradient-to-b from-white to-[#EBF4FF] relative overflow-hidden">
      {/* Decorative blurred circle top-right */}
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-azul-electrico/5 rounded-full blur-3xl pointer-events-none" />
      <div className="container-max relative z-10">
        <div className="text-center mb-14">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-display font-bold text-3xl sm:text-4xl text-azul-marino mb-4"
          >
            ¿Qué podemos resolver para vos?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-slate-500 text-lg max-w-xl mx-auto"
          >
            Acompañamos cada etapa de tu proyecto: desde el análisis inicial hasta el sistema en producción y más allá.
          </motion.p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative p-6 rounded-2xl border border-gray-100 hover:border-azul-electrico/30 hover:shadow-xl hover:shadow-blue-100/60 transition-all duration-300 bg-white overflow-hidden"
            >
              {/* Accent stripe */}
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-azul-electrico/40 to-transparent rounded-t-2xl" />
              <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-4 group-hover:bg-azul-electrico transition-colors duration-300">
                <s.icon
                  size={22}
                  className="text-azul-electrico group-hover:text-white transition-colors duration-300"
                />
              </div>
              <h3 className="font-display font-bold text-lg text-azul-marino mb-2">{s.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
