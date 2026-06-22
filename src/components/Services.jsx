import { motion } from 'framer-motion'
import { Monitor, Shield, Server, Wrench } from 'lucide-react'

const services = [
  {
    icon: Monitor,
    title: 'Sistemas a medida',
    desc: 'Si llevás el stock en Excel, las ventas en una libreta o usás tres programas que no se hablan entre sí, desarrollamos el sistema que los reemplaza — uno solo, hecho para tu operación.',
  },
  {
    icon: Shield,
    title: 'Tus datos, siempre protegidos',
    desc: 'Los datos de tus clientes — pagos, historial, información personal — son tu responsabilidad. Si se filtran o se pierden, el daño es tuyo. Auditamos y protegemos tu sistema para que eso no ocurra.',
  },
  {
    icon: Server,
    title: 'Tu sistema, funcionando sin pausas',
    desc: 'Si el sistema se cae un martes a las 11am, tu operación se detiene. Lo desplegamos en servidores confiables y lo monitoreamos para que esté disponible las 24 horas — sin que tengas que ocuparte de nada técnico.',
  },
  {
    icon: Wrench,
    title: 'Soporte y mantenimiento',
    desc: 'Algo se rompió, algo cambió en tu negocio o necesitás una función nueva. Respondemos en el día, hacemos los ajustes y mantenemos el sistema actualizado — mes a mes, sin contratos de por vida.',
  },
]

function ServiceCard({ s, i }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: i * 0.08 }}
      className="group relative p-6 rounded-2xl border border-gray-100 hover:border-azul-electrico/30 hover:shadow-xl hover:shadow-blue-100/60 transition-all duration-300 bg-white overflow-hidden"
    >
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
  )
}

export default function Services() {
  return (
    <section id="servicios" className="section-padding bg-gradient-to-b from-white to-[#EBF4FF] relative overflow-hidden">
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
            Problemas concretos, soluciones a medida. Sin desvíos ni tecnología innecesaria.
          </motion.p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {services.map((s, i) => (
            <ServiceCard key={s.title} s={s} i={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
