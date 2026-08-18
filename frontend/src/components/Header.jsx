import { useEffect, useRef } from 'react'
import { useHeaderHeight } from '../hooks/useHeaderHeight'

const links = [
  { href: '#sobre', label: 'Sobre' },
  { href: '#servicos', label: 'Serviços' },
  { href: '#processo', label: 'Processo' },
  { href: '#diferenciais', label: 'Diferenciais' },
]

function Header({ navOpen, setNavOpen, scrolled }) {
  const headerRef = useRef(null)
  const navRef = useRef(null)

  useHeaderHeight(headerRef)

  const closeNav = () => setNavOpen(false)

  // Fecha por Escape e por clique fora — listeners montados apenas enquanto o
  // menu está aberto, para não ficar escutando o documento à toa.
  useEffect(() => {
    if (!navOpen) return

    const onKeyDown = (e) => {
      if (e.key === 'Escape') closeNav()
    }

    const onPointerDown = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) closeNav()
    }

    document.addEventListener('keydown', onKeyDown)
    document.addEventListener('pointerdown', onPointerDown)
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.removeEventListener('pointerdown', onPointerDown)
    }
  }, [navOpen])

  // Trava o scroll do corpo enquanto o painel está aberto.
  useEffect(() => {
    if (!navOpen) return
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = previous
    }
  }, [navOpen])

  return (
    <header className="site-header" ref={headerRef}>
      <nav
        ref={navRef}
        className={`nav glass-nav${navOpen ? ' is-open' : ''}${scrolled ? ' is-scrolled' : ''}`}
        aria-label="Principal"
      >
        <a href="#topo" className="nav__brand" aria-label="WaveSync — início">
          <img
            src={`${import.meta.env.BASE_URL}logo.png`}
            alt=""
            className="nav__logo-img"
            width="128"
            height="108"
            fetchpriority="high"
          />
          <span className="nav__name" aria-hidden="true">
            WaveSync<span className="nav__dot">.</span>
          </span>
        </a>
        <button
          type="button"
          className="nav__toggle"
          aria-expanded={navOpen}
          aria-controls="nav-menu"
          aria-label={navOpen ? 'Fechar menu' : 'Abrir menu'}
          onClick={() => setNavOpen(!navOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <ul id="nav-menu" className="nav__links">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} onClick={closeNav}>
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a href="#contato" className="nav__cta" onClick={closeNav}>
              Contato
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
