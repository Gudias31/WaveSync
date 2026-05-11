import { useEffect, useState, useRef } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Features from './components/Features'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Background from './components/Background'

function App() {
  const [navOpen, setNavOpen] = useState(false)
  const mainRef = useRef(null)

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) return

    const revealElements = document.querySelectorAll('[data-reveal]')
    
    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-visible')
              observer.unobserve(entry.target)
            }
          })
        },
        { root: null, rootMargin: '0px 0px -8% 0px', threshold: 0.08 }
      )

      revealElements.forEach((el) => observer.observe(el))
    } else {
      revealElements.forEach((el) => el.classList.add('is-visible'))
    }
  }, [])

  return (
    <>
      <Background />
      <Header navOpen={navOpen} setNavOpen={setNavOpen} />
      <main ref={mainRef} id="topo">
        <Hero />
        <About />
        <Services />
        <Features />
        {/* <Portfolio /> */}
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
