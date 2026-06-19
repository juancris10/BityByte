import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Send, CheckCircle2, AlertCircle, Loader2, MessageCircle } from 'lucide-react'
import emailjs from '@emailjs/browser'

const SERVICE_ID  = import.meta.env.VITE_EMAILJS_SERVICE_ID
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

export default function Contact() {
  const [form, setForm] = useState({ nombre: '', contacto: '', mensaje: '' })
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name:    form.nombre,
          from_contact: form.contacto,
          message:      form.mensaje,
          to_email:     'bitybyte.digital@gmail.com',
        },
        PUBLIC_KEY,
      )
      setStatus('success')
    } catch (err) {
      console.error('EmailJS error:', err)
      setStatus('error')
    }
  }

  const reset = () => {
    setStatus('idle')
    setForm({ nombre: '', contacto: '', mensaje: '' })
  }

  return (
    <section id="contacto" className="section-padding bg-gradient-to-b from-[#EFF6FF] to-white relative overflow-hidden">
      {/* Blobs decorativos */}
      <div aria-hidden="true" className="absolute top-0 right-0 w-80 h-80 bg-naranja-ambar/8 rounded-full blur-3xl pointer-events-none translate-x-1/3 -translate-y-1/3" />
      <div aria-hidden="true" className="absolute bottom-0 left-0 w-80 h-80 bg-azul-electrico/8 rounded-full blur-3xl pointer-events-none -translate-x-1/3 translate-y-1/3" />
      <div className="container-max relative z-10">
        <div className="max-w-2xl mx-auto">

          {/* Encabezado */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-10"
          >
            {/* Eyebrow de atención */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-naranja-ambar/10 border border-naranja-ambar/30 text-naranja-ambar text-xs font-bold mb-4 uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-naranja-ambar animate-pulse" />
              Respondemos en el día
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-azul-marino mb-3">
              ¿Cómo querés contactarnos?
            </h2>
            <p className="text-slate-500 text-lg">
              Elegí la vía que te resulte más cómoda. Te respondemos en el día.
            </p>
          </motion.div>

          {/* Botones directos de contacto — protagonistas */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="grid sm:grid-cols-2 gap-4 mb-10"
          >
            {/* WhatsApp */}
            <a
              id="contact-whatsapp"
              href="https://wa.me/5493705249466"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 p-5 rounded-2xl bg-[#25D366] hover:bg-[#1dba57] transition-colors shadow-lg shadow-green-200"
            >
              <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0">
                <MessageCircle size={26} className="text-white" />
              </div>
              <div>
                <p className="text-white font-bold text-base leading-tight">Escribirnos por WhatsApp</p>
                <p className="text-white/80 text-sm mt-0.5">+549 370 524-9466</p>
              </div>
            </a>

            {/* Email */}
            <a
              id="contact-email"
              href="mailto:bitybyte.digital@gmail.com"
              className="group flex items-center gap-4 p-5 rounded-2xl bg-azul-electrico hover:bg-[#0170c9] transition-colors shadow-lg shadow-blue-200"
            >
              <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0">
                <Mail size={26} className="text-white" />
              </div>
              <div>
                <p className="text-white font-bold text-base leading-tight">Enviarnos un email</p>
                <p className="text-white/80 text-sm mt-0.5">bitybyte.digital@gmail.com</p>
              </div>
            </a>
          </motion.div>

          {/* Divisor */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="flex items-center gap-4 mb-10"
          >
            <div className="flex-1 h-px bg-blue-200" />
            <span className="text-sm text-slate-400 font-medium whitespace-nowrap">o dejanos un mensaje acá</span>
            <div className="flex-1 h-px bg-blue-200" />
          </motion.div>

          {/* Formulario */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="bg-white rounded-2xl shadow-sm border border-blue-100 p-8"
          >
            {/* ÉXITO */}
            {status === 'success' && (
              <div className="flex flex-col items-center text-center py-8 gap-4">
                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
                  <CheckCircle2 size={32} className="text-green-500" />
                </div>
                <h3 className="font-display font-bold text-xl text-azul-marino">
                  ¡Mensaje enviado!
                </h3>
                <p className="text-slate-500">
                  Te respondemos a la brevedad por el medio que prefieras.
                </p>
                <button
                  onClick={reset}
                  className="text-azul-electrico text-sm font-medium hover:underline"
                >
                  Enviar otro mensaje
                </button>
              </div>
            )}

            {/* ERROR */}
            {status === 'error' && (
              <div className="flex flex-col items-center text-center py-8 gap-4">
                <div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center">
                  <AlertCircle size={32} className="text-red-500" />
                </div>
                <h3 className="font-display font-bold text-xl text-azul-marino">
                  Algo salió mal
                </h3>
                <p className="text-slate-500">
                  No se pudo enviar el mensaje. Usá WhatsApp o email directamente.
                </p>
                <button
                  onClick={reset}
                  className="text-azul-electrico text-sm font-medium hover:underline"
                >
                  Intentar de nuevo
                </button>
              </div>
            )}

            {/* FORMULARIO */}
            {(status === 'idle' || status === 'sending') && (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-texto-oscuro mb-1.5">
                    Nombre
                  </label>
                  <input
                    type="text"
                    name="nombre"
                    value={form.nombre}
                    onChange={handleChange}
                    required
                    disabled={status === 'sending'}
                    placeholder="Tu nombre o el de tu empresa"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 text-texto-oscuro placeholder-slate-300 focus:outline-none focus:ring-2 focus:ring-azul-electrico/30 focus:border-azul-electrico transition-colors disabled:opacity-60"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-texto-oscuro mb-1.5">
                    Email o WhatsApp
                  </label>
                  <input
                    type="text"
                    name="contacto"
                    value={form.contacto}
                    onChange={handleChange}
                    required
                    disabled={status === 'sending'}
                    placeholder="Para responderte rápido"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 text-texto-oscuro placeholder-slate-300 focus:outline-none focus:ring-2 focus:ring-azul-electrico/30 focus:border-azul-electrico transition-colors disabled:opacity-60"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-texto-oscuro mb-1.5">
                    ¿Qué necesitás?
                  </label>
                  <textarea
                    name="mensaje"
                    value={form.mensaje}
                    onChange={handleChange}
                    required
                    rows={4}
                    disabled={status === 'sending'}
                    placeholder="Contanos brevemente tu proyecto o el problema que querés resolver"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 text-texto-oscuro placeholder-slate-300 focus:outline-none focus:ring-2 focus:ring-azul-electrico/30 focus:border-azul-electrico transition-colors resize-none disabled:opacity-60"
                  />
                </div>
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-lg bg-naranja-ambar text-white font-bold text-base hover:bg-[#e26200] transition-colors shadow-lg shadow-orange-100 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {status === 'sending' ? (
                    <>
                      <Loader2 size={18} className="animate-spin" />
                      Enviando...
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      Enviar mensaje
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>

        </div>
      </div>
    </section>
  )
}
