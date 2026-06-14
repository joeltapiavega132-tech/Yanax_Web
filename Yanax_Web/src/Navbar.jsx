import React, { useState, useEffect } from 'react'
import './Navbar.css'
import logoIcon from './assets/Yanax_imagologotipo.png'

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
          <img src={logoIcon} alt="Yanax" className="navbar__logo-icon" />
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
