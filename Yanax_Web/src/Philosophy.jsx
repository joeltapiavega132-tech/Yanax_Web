import React from 'react'
import './Philosophy.css'

const PILLARS = [
  {
    num: '01',
    title: 'Código Limpio',
    subtitle: 'Rendimiento puro',
    desc: 'Cada línea tiene un propósito. Arquitectura escalable, sin deuda técnica desde el día uno.',
  },
  {
    num: '02',
    title: 'Diseño Minimalista',
    subtitle: 'Estética premium',
    desc: 'Menos ruido, más intención. El diseño que no distrae, convierte. Cada elemento gana su lugar.',
  },
  {
    num: '03',
    title: 'Soluciones Reales',
    subtitle: 'Enfoque en resultados',
    desc: 'Asesoría directa, contratos formales, entregas puntuales. Tu problema exacto, resuelto con precisión.',
  },
]

export default function Philosophy() {
  return (
    <section id="filosofia" className="section philosophy">
      <div className="philosophy__bg" aria-hidden="true" />
      <div className="container">
        <div className="philosophy__inner">
          <div className="philosophy__left">
            <span className="section-label reveal">Nuestra filosofía</span>
            <h2 className="section-title reveal delay-1">
              Lo que nos hace<br />
              <span className="philosophy__accent">diferentes</span>
            </h2>
            <p className="section-subtitle reveal delay-2">
              No somos una agencia que usa plantillas. Somos un equipo que piensa
              antes de escribir una línea de código.
            </p>
            <a href="https://wa.me/593987265163?text=Hola%2C%20me%20interesa%20conocer%20m%C3%A1s%20sobre%20Yanax"
              target="_blank" rel="noopener noreferrer"
              className="btn-ghost philosophy__btn reveal delay-3">
              Conocer más
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
          </div>

          <div className="philosophy__right">
            {PILLARS.map((p, i) => (
              <div key={p.num} className={`philosophy__pillar reveal delay-${i + 2}`}>
                <span className="philosophy__pillar-num">{p.num}</span>
                <div className="philosophy__pillar-body">
                  <span className="philosophy__pillar-sub">{p.subtitle}</span>
                  <h3 className="philosophy__pillar-title">{p.title}</h3>
                  <p className="philosophy__pillar-desc">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}