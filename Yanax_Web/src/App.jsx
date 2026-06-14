import React, { useEffect } from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import Services from './Services'
import Philosophy from './Philosophy'
import Portfolio from './Portafolio'
import Contact from './Contact'
import Footer from './Footer'
import { useRevealAll } from './useScrollReveal'
import './global.css'

export default function App() {
  useRevealAll()

  useEffect(() => {
    const handleMove = (e) => {
      const glow = document.querySelector('.cursor-glow')
      if (glow) {
        glow.style.left = e.clientX + 'px'
        glow.style.top = e.clientY + 'px'
      }
    }
    window.addEventListener('mousemove', handleMove)
    return () => window.removeEventListener('mousemove', handleMove)
  }, [])

  return (
    <>
      <div className="noise-overlay" aria-hidden="true" />
      <div className="cursor-glow" aria-hidden="true" />
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Philosophy />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
