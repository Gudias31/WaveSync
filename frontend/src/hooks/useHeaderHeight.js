import { useEffect } from 'react'

/**
 * Mede a altura real do header e publica em --header-h.
 *
 * Antes o valor era 92px escrito à mão, contra um header que mede 88px no
 * desktop e ~98px no celular — sobrava uma faixa morta embaixo do nav numa
 * largura e faltava espaço na outra. Como --header-h alimenta o padding-top do
 * main, o min-height do hero e o scroll-margin-top das seções, o erro aparecia
 * em três lugares ao mesmo tempo.
 *
 * @param {import('react').RefObject<HTMLElement>} ref elemento do header
 */
export function useHeaderHeight(ref) {
  useEffect(() => {
    const header = ref.current
    if (!header) return

    const apply = () => {
      document.documentElement.style.setProperty('--header-h', `${header.offsetHeight}px`)
    }

    apply()

    if (!('ResizeObserver' in window)) {
      window.addEventListener('resize', apply)
      return () => window.removeEventListener('resize', apply)
    }

    const observer = new ResizeObserver(apply)
    observer.observe(header)
    return () => observer.disconnect()
  }, [ref])
}
