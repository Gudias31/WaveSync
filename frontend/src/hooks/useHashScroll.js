import { useEffect } from 'react'

/**
 * Rola até a seção do #hash quando a página abre já com um fragmento na URL.
 *
 * Necessário porque a página é renderizada no cliente: quando o navegador tenta
 * resolver `/#processo`, o #root ainda está vazio e o alvo não existe, então ele
 * desiste e a pessoa cai no topo. Abrir um link compartilhado apontando para uma
 * seção simplesmente não funcionava.
 *
 * Duas decisões que valem registro:
 *
 * 1. Nada de requestAnimationFrame. rAF não dispara em aba de fundo, então um
 *    link aberto em nova aba nunca rolaria — e o efeito ficaria pendurado até a
 *    aba receber foco. O scroll acontece direto no efeito, quando o DOM já está
 *    montado e com layout.
 * 2. Uma segunda tentativa depois de document.fonts.ready. A fonte vem do Google
 *    Fonts com font-display: swap, e a troca muda a altura do texto: sem o
 *    reajuste, a página fica alguns pixels fora do lugar.
 *
 * O scroll é instantâneo de propósito — quem chega por link direto quer estar na
 * seção, não assistir a página deslizar. O scroll-margin-top das seções é
 * respeitado por scrollIntoView, então o título não fica embaixo do nav fixo.
 */
export function useHashScroll() {
  useEffect(() => {
    const { hash } = window.location
    if (!hash || hash === '#') return

    let id
    try {
      id = decodeURIComponent(hash.slice(1))
    } catch {
      return
    }

    const target = document.getElementById(id)
    if (!target) return

    const scrollToTarget = () => {
      target.scrollIntoView({ behavior: 'instant', block: 'start' })
    }

    scrollToTarget()

    // Reajusta quando a fonte carregar, caso a troca mude a altura do conteúdo
    // acima da seção. Ignora a falha: é um refinamento, não um requisito.
    let cancelled = false
    if (document.fonts?.ready) {
      document.fonts.ready.then(() => {
        if (!cancelled) scrollToTarget()
      }).catch(() => {})
    }

    return () => {
      cancelled = true
    }
  }, [])
}
