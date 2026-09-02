import { useEffect, useRef, useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Process from './components/Process'
import Features from './components/Features'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Background from './components/Background'
import WhatsAppFab from './components/WhatsAppFab'
import { useReveal } from './hooks/useReveal'
import { useHashScroll } from './hooks/useHashScroll'

function App() {
  const [navOpen, setNavOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const sentinelRef = useRef(null)

  useReveal()
  useHashScroll()

  // Estado "rolou a página" a partir de um sentinela de 1px no topo, em vez de
  // um handler de scroll que rodava a cada frame escrevendo strings de
  // box-shadow direto no style inline do nav.
  useEffect(() => {
    const sentinel = sentinelRef.current
    if (!sentinel || !('IntersectionObserver' in window)) return

    const observer = new IntersectionObserver(
      ([entry]) => setScrolled(!entry.isIntersecting),
      { threshold: 1 }
    )
    observer.observe(sentinel)
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <a className="skip-link" href="#conteudo">
        Ir para o conteúdo
      </a>
      <Background />
      <Header navOpen={navOpen} setNavOpen={setNavOpen} scrolled={scrolled} />
      <main id="conteudo">
        <div ref={sentinelRef} id="topo" aria-hidden="true" style={{ height: 1 }}></div>
        <Hero />
        <About />
        <Services />
        <Process />
        <Features />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFab />
    </>
  )
}

export default App
