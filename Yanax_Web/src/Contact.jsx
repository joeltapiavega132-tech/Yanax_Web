import React, { useState } from 'react'
import './Contact.css'

const CHANNELS = [
  {
    label: 'WhatsApp',
    value: '+593 987 265 163',
    href: 'https://wa.me/593987265163?text=Hola%2C%20quiero%20cotizar%20un%20proyecto%20con%20Yanax',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      </svg>
    ),
  },
  {
    label: 'Email',
    value: 'yanax.dev@gmail.com',
    href: 'mailto:yanax.dev@gmail.com',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="2" y="4" width="20" height="16" rx="2"/>
        <path d="M2 7l10 7 10-7"/>
      </svg>
    ),
  },
  {
    label: 'Instagram',
    value: '@yanax.dev',
    href: 'https://www.instagram.com/yanax.dev/',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="2" y="2" width="20" height="20" rx="5"/>
        <circle cx="12" cy="12" r="4"/>
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" strokeWidth="0"/>
      </svg>
    ),
  },
  {
    label: 'Facebook',
    value: 'Yanax dev',
    href: 'https://www.facebook.com/YanaxDev',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
      </svg>
    ),
  },
]

export default function Contact() {
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', msg: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    const url = `https://wa.me/593987265163?text=${encodeURIComponent(`Hola Yanax! Soy ${form.name} (${form.email}).\n\n${form.msg}`)}`
    window.open(url, '_blank')
    setSent(true)
    setTimeout(() => setSent(false), 4000)
  }

  return (
    <section id="contacto" className="section contact">
      <div className="contact__glow" aria-hidden="true" />
      <div className="container">
        <div className="contact__inner">
          <div className="contact__left">
            <span className="section-label reveal">Contacto</span>
            <h2 className="section-title reveal delay-1">
              Hablemos de<br />
              <span className="contact__accent">tu proyecto</span>
            </h2>
            <p className="section-subtitle reveal delay-2">
              ¿Tienes una idea? Cuéntanos qué necesitas y te respondemos
              en menos de 24 horas con un enfoque claro.
            </p>

            <div className="contact__channels">
              {CHANNELS.map((c, i) => (
                <a key={c.label} href={c.href} target="_blank" rel="noopener noreferrer"
                  className={`contact__channel reveal delay-${i + 2}`}>
                  <span className="contact__channel-icon">{c.icon}</span>
                  <span className="contact__channel-body">
                    <span className="contact__channel-label">{c.label}</span>
                    <span className="contact__channel-value">{c.value}</span>
                  </span>
                  <svg className="contact__channel-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M7 17L17 7M17 7H7M17 7v10"/>
                  </svg>
                </a>
              ))}
            </div>
          </div>

          <div className="contact__right reveal delay-3">
            <div className="contact__form-wrap">
              <h3 className="contact__form-title">Cuéntanos tu idea</h3>
              <p className="contact__form-sub">Te redirigiremos a WhatsApp con tu mensaje listo.</p>

              <form className="contact__form" onSubmit={handleSubmit}>
                <div className="contact__field">
                  <label htmlFor="c-name">Nombre</label>
                  <input id="c-name" type="text" placeholder="Tu nombre"
                    value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} required />
                </div>
                <div className="contact__field">
                  <label htmlFor="c-email">Email</label>
                  <input id="c-email" type="email" placeholder="tu@email.com"
                    value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))} required />
                </div>
                <div className="contact__field">
                  <label htmlFor="c-msg">Proyecto</label>
                  <textarea id="c-msg" rows="4" placeholder="Cuéntame qué necesitas..."
                    value={form.msg} onChange={e => setForm(f => ({ ...f, msg: e.target.value }))} required />
                </div>
                <button type="submit" className={`btn-primary contact__submit ${sent ? 'sent' : ''}`}>
                  {sent ? (
                    <>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M20 6L9 17l-5-5"/>
                      </svg>
                      Abriendo WhatsApp...
                    </>
                  ) : (
                    <>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                      </svg>
                      Enviar por WhatsApp
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}