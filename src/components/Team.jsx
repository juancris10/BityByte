import { motion } from 'framer-motion'

const members = [
  {
    initials: 'M',
    photo: '/team/Martin.webp',
    name: 'Martín',
    role: 'Interfaz & Seguridad',
    desc: 'Responsable de todo lo que el usuario ve e interactúa: el diseño, la experiencia de uso y la integración entre sistemas. También garantiza que los datos de la organización estén correctamente protegidos.',
    avatarBg: 'bg-azul-electrico',
    accentVia: 'via-azul-electrico/50',
    roleTx: 'text-azul-electrico',
    roleBg: 'bg-blue-50',
    hoverShadow: 'hover:shadow-blue-100/70',
  },
  {
    initials: 'J',
    photo: '/team/Juan.jpeg',
    name: 'Juan',
    role: 'Infraestructura & Backend',
    desc: 'Se encarga de que el sistema esté disponible y funcione de forma confiable. Administra los servidores, la red y la lógica interna de las aplicaciones. Si algo tiene que correr sin interrupciones, es su área.',
    avatarBg: 'bg-azul-marino',
    accentVia: 'via-azul-marino/50',
    roleTx: 'text-azul-marino',
    roleBg: 'bg-slate-100',
    hoverShadow: 'hover:shadow-slate-200/70',
  },
  {
    initials: 'L',
    photo: '/team/Luciano.jpeg',
    name: 'Luciano',
    role: 'Análisis & Sistemas',
    desc: 'Traduce las necesidades del negocio en un plan técnico claro. Releva los requerimientos, diseña la arquitectura del sistema y documenta cada decisión. Es el puente entre lo que el cliente necesita y lo que el equipo construye.',
    avatarBg: 'bg-naranja-ambar',
    accentVia: 'via-naranja-ambar/50',
    roleTx: 'text-naranja-ambar',
    roleBg: 'bg-orange-50',
    hoverShadow: 'hover:shadow-orange-100/70',
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
              className={`relative bg-white rounded-2xl p-6 text-center shadow-sm border border-gray-100 hover:shadow-xl ${m.hoverShadow} hover:border-gray-200 transition-all duration-300 overflow-hidden`}
            >
              {/* Línea de acento superior en color del miembro */}
              <div className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent ${m.accentVia} to-transparent`} />

              {/* Avatar */}
              {m.photo ? (
                <img
                  src={m.photo}
                  alt={m.name}
                  loading="lazy"
                  className="w-16 h-16 rounded-full object-cover object-top mx-auto mb-4 shadow-lg ring-2 ring-white"
                />
              ) : (
                <div className={`w-16 h-16 rounded-full ${m.avatarBg} flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                  <span className="font-display font-bold text-2xl text-white">{m.initials}</span>
                </div>
              )}

              <h3 className="font-display font-bold text-lg text-azul-marino mb-1">{m.name}</h3>

              {/* Role badge */}
              <span className={`inline-block px-2.5 py-1 rounded-full text-xs font-semibold ${m.roleBg} ${m.roleTx} mb-4`}>
                {m.role}
              </span>

              <p className="text-slate-500 text-sm leading-relaxed text-left">{m.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
