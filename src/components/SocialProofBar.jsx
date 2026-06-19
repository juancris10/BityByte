const techs = [
  'React', 'Flask', 'VPS', 'SQL', 'REST APIs', 'Seguridad Web', 'Mercado Pago',
]

export default function SocialProofBar() {
  return (
    <section className="bg-blue-50 border-y border-blue-100 py-5">
      <div className="container-max px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-3">
          <span className="text-xs font-semibold text-azul-electrico/70 uppercase tracking-widest mr-2">
            Tecnologías que usamos
          </span>
          {techs.map((t) => (
            <span
              key={t}
              className="px-3 py-1 rounded-full bg-white border border-blue-200 text-azul-marino text-sm font-medium shadow-sm"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
