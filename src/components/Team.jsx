import { motion } from 'framer-motion'

const members = [
  {
    initials: 'M',
    name: 'Martín',
    role: 'Interfaz & Seguridad',
    desc: 'Responsable de todo lo que el usuario ve e interactúa: el diseño, la experiencia de uso y la integración entre sistemas. También garantiza que los datos de la organización estén correctamente protegidos.',
    color: 'bg-azul-electrico',
  },
  {
    initials: 'J',
    name: 'Juan',
    role: 'Infraestructura & Backend',
    desc: 'Se encarga de que el sistema esté disponible y funcione de forma confiable. Administra los servidores, la red y la lógica interna de las aplicaciones. Si algo tiene que correr sin interrupciones, es su área.',
    color: 'bg-azul-marino',
  },
  {
    initials: 'L',
    name: 'Luciano',
    role: 'Análisis & Sistemas',
    desc: 'Traduce las necesidades del negocio en un plan técnico claro. Releva los requerimientos, diseña la arquitectura del sistema y documenta cada decisión. Es el puente entre lo que el cliente necesita y lo que el equipo construye.',
    color: 'bg-naranja-ambar',
  },
]

export default function Team() {
  return (
    <section className="section-padding bg-gris-claro">
      <div className="container-max">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-display font-bold text-3xl sm:text-4xl text-azul-marino text-center mb-4"
        >
          El equipo detrás de Bit&amp;Byte
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-slate-500 text-center text-lg mb-14 max-w-lg mx-auto leading-relaxed"
        >
          Tres especialistas, cada uno dueño de su área. Trabajamos juntos para que tu solución sea completa.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {members.map((m, i) => (
            <motion.div
              key={m.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="bg-white rounded-2xl p-6 text-center shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              {/* Avatar con color único por miembro */}
              <div className={`w-16 h-16 rounded-full ${m.color} flex items-center justify-center mx-auto mb-4 shadow-md`}>
                <span className="font-display font-bold text-2xl text-white">{m.initials}</span>
              </div>
              <h3 className="font-display font-bold text-lg text-azul-marino">{m.name}</h3>
              <p className="text-azul-electrico text-sm font-semibold mb-4">{m.role}</p>
              <p className="text-slate-500 text-sm leading-relaxed text-left">{m.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
