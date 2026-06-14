import { useEffect, useRef } from 'react'

export function useScrollReveal(options = {}) {
  const ref = useRef(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            if (options.once !== false) observer.unobserve(entry.target)
          } else if (options.once === false) {
            entry.target.classList.remove('visible')
          }
        })
      },
      { threshold: options.threshold || 0.12, rootMargin: options.rootMargin || '0px 0px -40px 0px' }
    )

    const targets = element.querySelectorAll('.reveal, .reveal-left, .reveal-right')
    if (element.classList.contains('reveal') || element.classList.contains('reveal-left') || element.classList.contains('reveal-right')) {
      observer.observe(element)
    }
    targets.forEach((t) => observer.observe(t))

    return () => observer.disconnect()
  }, [])

  return ref
}

export function useRevealAll() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    )

    const targets = document.querySelectorAll('.reveal, .reveal-left, .reveal-right')
    targets.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])
}