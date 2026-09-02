import { useEffect, useRef, useState } from 'react'
import { WhatsAppIcon } from './Icons'
import { trackConversion } from '../lib/analytics'
import { WHATSAPP_URL } from '../lib/contact'

/* Atalho permanente para o WhatsApp.
 *
 * Duas regras de exibição, para ele não competir com as CTAs que a página já
 * tem: só aparece depois que o hero sai da tela (lá o pedido de orçamento já
 * está em destaque) e some enquanto a seção de contato está visível (lá o
 * mesmo botão existe em tamanho real). Fora desses dois trechos a pessoa
 * ficava sem nenhuma ação à mão — era preciso rolar até o fim da página. */
function WhatsAppFab() {
  const [visible, setVisible] = useState(false)
  const heroOutRef = useRef(false)
  const contactInRef = useRef(false)

  useEffect(() => {
    const hero = document.querySelector('.hero')
    const contact = document.getElementById('contato')
    if (!('IntersectionObserver' in window)) return

    const sync = () => setVisible(heroOutRef.current && !contactInRef.current)

    const observers = []

    if (hero) {
      const heroObserver = new IntersectionObserver(
        ([entry]) => {
          heroOutRef.current = !entry.isIntersecting
          sync()
        },
        { threshold: 0 }
      )
      heroObserver.observe(hero)
      observers.push(heroObserver)
    } else {
      // Sem hero na página, o botão não tem por que esperar.
      heroOutRef.current = true
      sync()
    }

    if (contact) {
      const contactObserver = new IntersectionObserver(
        ([entry]) => {
          contactInRef.current = entry.isIntersecting
          sync()
        },
        { threshold: 0 }
      )
      contactObserver.observe(contact)
      observers.push(contactObserver)
    }

    return () => observers.forEach((observer) => observer.disconnect())
  }, [])

  return (
    <a
      href={WHATSAPP_URL}
      className={`wa-fab${visible ? ' is-visible' : ''}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-hidden={!visible}
      tabIndex={visible ? undefined : -1}
      onClick={() => trackConversion('whatsapp', 'botao_flutuante')}
    >
      <WhatsAppIcon size={26} />
      <span className="wa-fab__label">Solicitar orçamento</span>
    </a>
  )
}

export default WhatsAppFab
