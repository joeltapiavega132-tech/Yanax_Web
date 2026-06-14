import React, { useState, useEffect } from 'react'
import './Navbar.css'

const NAV_LINKS = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'Filosofía', href: '#filosofia' },
  { label: 'Portafolio', href: '#portafolio' },
  { label: 'Contacto', href: '#contacto' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (e, href) => {
    e.preventDefault()
    setMenuOpen(false)
    const target = document.querySelector(href)
    if (target) target.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="container navbar__inner">
        <a href="#hero" className="navbar__logo" onClick={(e) => handleNavClick(e, '#hero')}>
          {/* SVG isotipo inline para no depender de assets */}
          <svg className="navbar__logo-icon" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="40" height="40" rx="8" fill="url(#ng)" />
            <path d="M10 28 L20 12 L30 28" stroke="#F0EAD9" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
            <path d="M15 28 L20 20 L25 28" stroke="#9B4DFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
            <defs>
              <linearGradient id="ng" x1="0" y1="0" x2="40" y2="40">
                <stop offset="0%" stopColor="#1A0A2E"/>
                <stop offset="100%" stopColor="#09090F"/>
              </linearGradient>
            </defs>
          </svg>
          <span className="navbar__logo-text">YANAX</span>
        </a>

        <nav className="navbar__links">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className="navbar__link"
              onClick={(e) => handleNavClick(e, link.href)}>
              {link.label}
            </a>
          ))}
        </nav>

        <a href="https://wa.me/593987265163?text=Hola%2C%20quiero%20cotizar%20un%20proyecto%20con%20Yanax"
          target="_blank" rel="noopener noreferrer" className="btn-primary navbar__cta">
          Cotizar proyecto
        </a>

        <button className={`navbar__hamburger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          <span /><span /><span />
        </button>
      </div>

      <div className={`navbar__mobile ${menuOpen ? 'open' : ''}`}>
        {NAV_LINKS.map((link) => (
          <a key={link.href} href={link.href} className="navbar__mobile-link"
            onClick={(e) => handleNavClick(e, link.href)}>
            {link.label}
          </a>
        ))}
        <a href="https://wa.me/593987265163?text=Hola%2C%20quiero%20cotizar%20un%20proyecto"
          target="_blank" rel="noopener noreferrer" className="btn-primary"
          onClick={() => setMenuOpen(false)}>
          Cotizar proyecto
        </a>
      </div>
    </header>
  )
}