import { Layers, ArrowRight, CheckIcon } from './Icons'
import HeroVisual from './HeroVisual'

/* Substituem o bloco de estatísticas antigo ("Latência <100ms*", "Suporte
 * 24/7"). São compromissos que dependem só de como o trabalho é feito, então
 * podem ser verificados — diferente de uma métrica que precisava de nota de
 * rodapé se explicando. */
const commitments = [
  'Código próprio, sem construtor de sites',
  'Você recebe o código e os acessos',
  'Acompanhamento após o lançamento',
]

function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero__inner">
        <div className="hero__content">
          <p className="hero__badge">
            <Layers />
            Estúdio de desenvolvimento web
          </p>
          <h1 id="hero-title" className="hero__title">
            <span className="hero__title-line">Sites e sistemas web</span>
            <span className="hero__title-accent">feitos sob medida para a sua marca</span>
          </h1>
          <p className="hero__subtitle">
            Desenvolvemos sites institucionais, landing pages e sistemas sob medida — do briefing ao
            deploy, com código próprio, foco em performance e acompanhamento depois da entrega.
          </p>
          <div className="hero__actions">
            <a href="#contato" className="btn btn--primary">
              <span>Solicitar orçamento</span>
              <ArrowRight />
            </a>
            <a href="#processo" className="btn btn--secondary">
              <span>Ver como trabalhamos</span>
            </a>
          </div>
        </div>
        {/* Fora de .hero__content de propósito: no mobile ela empilha logo após
            as ações, antes da lista de compromissos — antes ficava por último,
            abaixo de um bloco só de texto. No desktop, grid-template-areas
            devolve a lista para a coluna 1, sob o conteúdo. */}
        <HeroVisual />
        <ul className="hero__commitments">
          {commitments.map((item) => (
            <li key={item} className="hero__commitment">
              <CheckIcon />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Hero
