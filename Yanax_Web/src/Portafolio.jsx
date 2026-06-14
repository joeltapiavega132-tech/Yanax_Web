import React, { useState } from 'react'
import './Portafolio.css'

const PROJECTS = [
  /*
  {
    id: 1,
    title: 'Catálogo Digital',
    category: 'E-commerce',
    desc: 'Catálogo web para negocio local con galería de productos, WhatsApp integrado y diseño mobile-first.',
    tech: ['React', 'CSS', 'WhatsApp API'],
    color: '#9B4DFF',
  },
  
  {
    id: 2,
    title: 'Landing Page Corporativa',
    category: 'Web',
    desc: 'Sitio de presentación para empresa con animaciones al scroll, formulario de contacto y SEO optimizado.',
    tech: ['React', 'Vite', 'Animaciones'],
    color: '#7B2FBE',
  },
  {
    id: 3,
    title: 'Sistema de Gestión',
    category: 'Software',
    desc: 'Panel administrativo a medida para control de inventario, clientes y reportes en tiempo real.',
    tech: ['React', 'Node.js', 'PostgreSQL'],
    color: '#5B1F8E',
  },
  */
]

export default function Portfolio() {
  const [hovered, setHovered] = useState(null)

  return (
    <section id="portafolio" className="section portfolio">
      <div className="container">
        <div className="portfolio__header">
          <span className="section-label reveal">Portafolio</span>
          <div className="portfolio__header-row">
            <h2 className="section-title reveal delay-1">
              Proyectos que <span className="portfolio__accent">hablan solos</span>
            </h2>
            <a href="https://wa.me/593987265163?text=Hola%2C%20quiero%20ver%20m%C3%A1s%20proyectos%20de%20Yanax"
              target="_blank" rel="noopener noreferrer"
              className="btn-ghost portfolio__all reveal delay-2">
              Ver todos
            </a>
          </div>
          <p className="section-subtitle reveal delay-2">
            Una muestra de lo que construimos. Cada proyecto, un problema real resuelto.
          </p>
        </div>

        <div className="portfolio__grid">
          {PROJECTS.map((p, i) => (
            <div
              key={p.id}
              className={`portfolio__card reveal delay-${i + 1}`}
              onMouseEnter={() => setHovered(p.id)}
              onMouseLeave={() => setHovered(null)}
            >
              {/* Mockup visual */}
              <div className="portfolio__mockup" style={{ '--card-color': p.color }}>
                <div className="portfolio__mockup-chrome">
                  <span /><span /><span />
                </div>
                <div className="portfolio__mockup-screen">
                  <div className="portfolio__mockup-nav" />
                  <div className="portfolio__mockup-hero" />
                  <div className="portfolio__mockup-rows">
                    <div /><div /><div />
                  </div>
                  <div className="portfolio__mockup-grid">
                    <div /><div /><div /><div />
                  </div>
                </div>
                <div className="portfolio__mockup-glow" />
              </div>

              {/* Info */}
              <div className="portfolio__card-info">
                <div className="portfolio__card-meta">
                  <span className="portfolio__card-cat">{p.category}</span>
                  <div className="portfolio__card-tech">
                    {p.tech.map(t => <span key={t}>{t}</span>)}
                  </div>
                </div>
                <h3 className="portfolio__card-title">{p.title}</h3>
                <p className="portfolio__card-desc">{p.desc}</p>
                <a href="https://wa.me/593987265163?text=Hola%2C%20quiero%20un%20proyecto%20similar"
                  target="_blank" rel="noopener noreferrer"
                  className="portfolio__card-link">
                  Quiero algo así
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M7 17L17 7M17 7H7M17 7v10"/>
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
