import { useEffect } from 'react'

function isInViewport(el) {
  const rect = el.getBoundingClientRect()
  return rect.bottom > 0 && rect.top < (window.innerHeight || document.documentElement.clientHeight)
}

/**
 * Revela elementos [data-reveal] quando entram na viewport.
 *
 * No celular o CSS já deixa .reveal visível: o Safari iOS frequentemente não
 * dispara IntersectionObserver até o primeiro scroll, e esconder o conteúdo
 * até lá vira tela preta. Aqui só animamos em desktop, e mesmo assim
 * marcamos na hora o que já está na tela (sem esperar o callback).
 */
export function useReveal() {
  useEffect(() => {
    const elements = document.querySelectorAll('[data-reveal]:not(.is-visible)')
    if (!elements.length) return

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const isCoarsePointer = window.matchMedia('(hover: none) and (pointer: coarse)').matches

    if (prefersReducedMotion || isCoarsePointer || !('IntersectionObserver' in window)) {
      elements.forEach((el) => el.classList.add('is-visible'))
      return
    }

    const reveal = (el) => el.classList.add('is-visible')

    elements.forEach((el) => {
      if (isInViewport(el)) reveal(el)
    })

    const remaining = [...elements].filter((el) => !el.classList.contains('is-visible'))
    if (!remaining.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          reveal(entry.target)
          observer.unobserve(entry.target)
        })
      },
      { rootMargin: '80px 0px', threshold: 0 }
    )

    remaining.forEach((el) => observer.observe(el))

    const failsafe = window.setTimeout(() => {
      remaining.forEach((el) => reveal(el))
    }, 800)

    return () => {
      observer.disconnect()
      window.clearTimeout(failsafe)
    }
  }, [])
}
