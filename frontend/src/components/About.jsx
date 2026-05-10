import { InnovationIcon, PerformanceIcon, DesignIcon } from './Icons'

function About() {
  return (
    <section id="sobre" className="section section--about" aria-labelledby="about-title">
      <div className="container">
        <header className="section__header reveal" data-reveal>
          <span className="section__label">Sobre a empresa</span>
          <h2 id="about-title" className="section__title">Quem é a WaveSync</h2>
          <p className="section__lead">
            Somos um estúdio de desenvolvimento web focado em produtos digitais que unem estética contemporânea,
            arquitetura sólida e resultados mensuráveis — do primeiro pixel ao deploy em produção.
          </p>
        </header>
        <div className="about__grid">
          <article className="glass-card about__card reveal" data-reveal>
            <div className="about__icon" aria-hidden="true">
              <InnovationIcon />
            </div>
            <h3>Inovação contínua</h3>
            <p>Exploramos stacks modernas, IA aplicada ao fluxo de trabalho e padrões que antecipam a próxima geração da web.</p>
          </article>
          <article className="glass-card about__card reveal" data-reveal>
            <div className="about__icon" aria-hidden="true">
              <PerformanceIcon />
            </div>
            <h3>Performance real</h3>
            <p>Tempo de carregamento, cache inteligente e assets otimizados para Core Web Vitals e conversão.</p>
          </article>
          <article className="glass-card about__card reveal" data-reveal>
            <div className="about__icon" aria-hidden="true">
              <DesignIcon />
            </div>
            <h3>Design profissional</h3>
            <p>Sistemas visuais coesos, tipografia refinada e motion discreto que comunicam autoridade de marca.</p>
          </article>
        </div>
      </div>
    </section>
  )
}

export default About
