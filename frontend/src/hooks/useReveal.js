import { useEffect } from 'react'

/**
 * Revela elementos [data-reveal] quando entram na viewport.
 *
 * Observa o documento inteiro em vez de expor um ref por elemento: a página é
 * única, tudo renderiza no primeiro paint e `data-reveal` já está no JSX. Um
 * observer só, com cleanup — o código anterior, em App.jsx, nunca chamava
 * disconnect(), então sob StrictMode dois observers eram anexados a cada nó.
 *
 * O filtro `:not(.is-visible)` torna a chamada idempotente, então dá para
 * chamar de novo numa subárvore montada depois.
 */
export function useReveal() {
  useEffect(() => {
    const elements = document.querySelectorAll('[data-reveal]:not(.is-visible)')
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (prefersReducedMotion || !('IntersectionObserver' in window)) {
      elements.forEach((el) => el.classList.add('is-visible'))
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        })
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.12 }
    )

    elements.forEach((el) => observer.observe(el))

    // Disjuntor: se depois de 3s NADA foi revelado, o observer não está
    // funcionando neste ambiente e a página inteira ficaria invisível — o pior
    // modo de falha possível. Nesse caso mostra tudo de uma vez.
    // A condição "nada revelado" é de propósito: se um único elemento apareceu,
    // o observer está vivo e o resto vai aparecer no scroll, como planejado.
    const failsafe = window.setTimeout(() => {
      const revealed = document.querySelector('[data-reveal].is-visible')
      if (revealed) return
      elements.forEach((el) => el.classList.add('is-visible'))
    }, 3000)

    return () => {
      observer.disconnect()
      window.clearTimeout(failsafe)
    }
  }, [])
}
