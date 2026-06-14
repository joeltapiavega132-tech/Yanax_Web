import React from 'react'
import './Services.css'

const SERVICES = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="3" width="18" height="14" rx="2"/>
        <path d="M8 21h8M12 17v4"/>
        <path d="M7 8h10M7 11h6"/>
      </svg>
    ),
    title: 'Desarrollo Web',
    subtitle: 'Landing Pages & Sitios',
    desc: 'Páginas que convierten visitas en clientes. Optimizadas, rápidas y construidas a medida para cada negocio.',
    tag: 'React · Vite · CSS',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>
      </svg>
    ),
    title: 'Software a Medida',
    subtitle: 'Sistemas & Aplicaciones',
    desc: 'Desarrollamos el sistema exacto que tu operación necesita. Sin funciones de más, sin limitaciones de terceros.',
    tag: 'Full Stack · API · DB',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="3" width="20" height="14" rx="2"/>
        <path d="M8 21h8M12 17v4"/>
        <path d="M6 7h4v4H6zM14 7h4M14 11h4"/>
      </svg>
    ),
    title: 'Diseño UI/UX',
    subtitle: 'Interfaz & Experiencia',
    desc: 'Estructuras limpias y jerarquía visual clara. El diseño que hace que el usuario encuentre lo que busca sin pensar.',
    tag: 'Figma · Prototipado',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
      </svg>
    ),
    title: 'Catálogos Digitales',
    subtitle: 'E-commerce & Tiendas',
    desc: 'Catálogos web profesionales para negocios locales. Tus productos en línea, con una imagen que vende.',
    tag: 'E-commerce · CMS',
  },
]

export default function Services() {
  return (
    <section id="servicios" className="section services">
      <div className="container">
        <div className="services__header">
          <span className="section-label reveal">Lo que hacemos</span>
          <h2 className="section-title reveal delay-1">
            Servicios que <span className="services__title-accent">entregan resultados</span>
          </h2>
          <p className="section-subtitle reveal delay-2">
            Cada proyecto es distinto. Por eso trabajamos con asesoría directa,
            contratos formales y entregas puntuales.
          </p>
        </div>

        <div className="services__grid">
          {SERVICES.map((s, i) => (
            <div key={s.title} className={`services__card reveal delay-${i + 1}`}>
              <div className="services__card-icon">{s.icon}</div>
              <div className="services__card-body">
                <span className="services__card-sub">{s.subtitle}</span>
                <h3 className="services__card-title">{s.title}</h3>
                <p className="services__card-desc">{s.desc}</p>
              </div>
              <span className="services__card-tag">{s.tag}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}