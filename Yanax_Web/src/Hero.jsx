import React, { useEffect, useRef, useState } from 'react'
import './Hero.css'

const TYPED_WORDS = ['Desarrollo Web', 'Software a Medida', 'Soluciones Digitales', 'Interfaces Limpias']

export default function Hero() {
  const [typedText, setTypedText] = useState('')
  const [wordIndex, setWordIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [charIndex, setCharIndex] = useState(0)
  const particlesRef = useRef(null)

  useEffect(() => {
    const currentWord = TYPED_WORDS[wordIndex]
    let timeout
    if (!isDeleting) {
      if (charIndex < currentWord.length) {
        timeout = setTimeout(() => { setTypedText(currentWord.slice(0, charIndex + 1)); setCharIndex(c => c + 1) }, 80)
      } else {
        timeout = setTimeout(() => setIsDeleting(true), 2000)
      }
    } else {
      if (charIndex > 0) {
        timeout = setTimeout(() => { setTypedText(currentWord.slice(0, charIndex - 1)); setCharIndex(c => c - 1) }, 45)
      } else {
        setIsDeleting(false)
        setWordIndex(i => (i + 1) % TYPED_WORDS.length)
      }
    }
    return () => clearTimeout(timeout)
  }, [charIndex, isDeleting, wordIndex])

  useEffect(() => {
    const canvas = particlesRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let animId

    const resize = () => { canvas.width = canvas.offsetWidth; canvas.height = canvas.offsetHeight }
    resize()
    window.addEventListener('resize', resize)

    const particles = Array.from({ length: 60 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.3 + 0.2,
      vx: (Math.random() - 0.5) * 0.28,
      vy: (Math.random() - 0.5) * 0.28,
      alpha: Math.random() * 0.5 + 0.08,
    }))

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      particles.forEach(p => {
        p.x += p.vx; p.y += p.vy
        if (p.x < 0) p.x = canvas.width
        if (p.x > canvas.width) p.x = 0
        if (p.y < 0) p.y = canvas.height
        if (p.y > canvas.height) p.y = 0
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(155, 77, 255, ${p.alpha})`
        ctx.fill()
      })
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 110) {
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.strokeStyle = `rgba(155, 77, 255, ${0.07 * (1 - dist / 110)})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        }
      }
      animId = requestAnimationFrame(draw)
    }
    draw()
    return () => { cancelAnimationFrame(animId); window.removeEventListener('resize', resize) }
  }, [])

  return (
    <section id="hero" className="hero">
      <canvas ref={particlesRef} className="hero__particles" aria-hidden="true" />
      <div className="hero__glow" aria-hidden="true" />

      <div className="container hero__content">
        <div className="hero__badge reveal">
          <span className="hero__badge-dot" />
          Disponible para nuevos proyectos
        </div>

        <h1 className="hero__headline reveal delay-1">
          Construimos la tecnología<br />
          <span className="hero__headline-accent">que tu negocio</span> necesita
        </h1>

        <div className="hero__typed-wrapper reveal delay-2">
          <span className="hero__typed-prefix">Especialistas en&nbsp;</span>
          <span className="hero__typed">
            {typedText}
            <span className="hero__cursor" aria-hidden="true">|</span>
          </span>
        </div>

        <p className="hero__sub reveal delay-3">
          Soluciones digitales construidas con código limpio, diseño minimalista
          y un enfoque real en los resultados. Sin plantillas. Sin relleno.
          Solo lo que tu proyecto necesita.
        </p>

        <div className="hero__actions reveal delay-4">
          <a href="https://wa.me/593987265163?text=Hola%2C%20quiero%20cotizar%20un%20proyecto%20con%20Yanax"
            target="_blank" rel="noopener noreferrer" className="btn-primary hero__btn-main">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Cotizar en WhatsApp
          </a>
          <a href="#portafolio" className="btn-ghost" onClick={(e) => { e.preventDefault(); document.querySelector('#portafolio')?.scrollIntoView({ behavior: 'smooth' }) }}>
            Ver proyectos
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M7 17L17 7M17 7H7M17 7v10"/>
            </svg>
          </a>
        </div>

        <div className="hero__stats reveal delay-5">
          <div className="hero__stat">
            <span className="hero__stat-number">100%</span>
            <span className="hero__stat-label">Código propio</span>
          </div>
          <div className="hero__stat-divider" />
          <div className="hero__stat">
            <span className="hero__stat-number">+10</span>
            <span className="hero__stat-label">Proyectos entregados</span>
          </div>
          <div className="hero__stat-divider" />
          <div className="hero__stat">
            <span className="hero__stat-number">24h</span>
            <span className="hero__stat-label">Tiempo de respuesta</span>
          </div>
        </div>
      </div>

      <div className="hero__scroll-hint" aria-hidden="true">
        <span>Scroll</span>
        <div className="hero__scroll-line" />
      </div>
    </section>
  )
}