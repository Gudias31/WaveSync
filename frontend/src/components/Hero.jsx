import { Layers, ArrowRight } from './Icons'

function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero__cloud hero__cloud--1" aria-hidden="true"></div>
      <div className="hero__cloud hero__cloud--2" aria-hidden="true"></div>
      <div className="hero__inner">
        <p className="hero__badge reveal" data-reveal>
          <Layers />
          Soluções web de alto nível
        </p>
        <h1 id="hero-title" className="hero__title reveal" data-reveal>
          <span className="hero__title-line">Construímos experiências</span>
          <span className="hero__title-accent">digitais que elevam marcas</span>
        </h1>
        <p className="hero__subtitle reveal" data-reveal>
          A WaveSync Technology entrega sites, landing pages e sistemas web com performance de classe mundial,
          design impecável e engenharia pensada para escalar o seu negócio.
        </p>
        <div className="hero__actions reveal" data-reveal>
          <a href="#contato" className="btn btn--primary">
            <span>Solicitar orçamento</span>
            <ArrowRight />
          </a>
          {/* <a href="#portfolio" className="btn btn--ghost">Ver trabalhos</a> */}
        </div>
        <dl className="hero__stats reveal" data-reveal>
          <div><dt>Latência</dt><dd>&lt;100ms*</dd></div>
          <div><dt>Core Web Vitals</dt><dd>Otimizado</dd></div>
          <div><dt>Suporte</dt><dd>24/7</dd></div>
        </dl>
        <p className="hero__footnote reveal" data-reveal>* Referência em stacks edge-ready e CDN.</p>
      </div>
    </section>
  )
}

export default Hero
