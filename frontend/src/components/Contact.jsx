import { MailIcon, WhatsAppIcon } from './Icons'
import { trackConversion } from '../lib/analytics'

const WHATSAPP_URL =
  'https://wa.me/5511969360932?text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20um%20or%C3%A7amento%20com%20a%20WaveSync%20Technology.'
const EMAIL = 'contato@wavesynctech.com.br'

function Contact() {
  return (
    <section id="contato" className="section section--cta" aria-labelledby="cta-title">
      <div className="container">
        <div className="cta-banner glass-card-strong reveal" data-reveal>
          <div className="cta-banner__content">
            <h2 id="cta-title" className="cta-banner__title">
              Vamos conversar sobre o seu projeto
            </h2>
            <p className="cta-banner__text">
              Conte o objetivo do site, o prazo desejado e referências que você gosta. Respondemos com
              escopo, prazo e valor por escrito.
            </p>
            <p className="cta-banner__hint">Atendimento em português, de forma remota.</p>
          </div>
          <div className="cta-banner__actions">
            <a
              href={WHATSAPP_URL}
              className="btn btn--whatsapp"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackConversion('whatsapp')}
            >
              <WhatsAppIcon />
              <span>Falar no WhatsApp</span>
            </a>
            <a href={`mailto:${EMAIL}`} className="btn btn--email" onClick={() => trackConversion('email')}>
              <MailIcon />
              <span>{EMAIL}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
