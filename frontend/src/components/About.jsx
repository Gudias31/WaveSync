import { InnovationIcon, PerformanceIcon, DesignIcon } from './Icons'

/* Copy sem "resultados mensuráveis": mensurar implica publicar a medição, e não
 * há número publicado. O que está aqui descreve como o trabalho é feito. */
const cards = [
  {
    icon: <InnovationIcon />,
    title: 'Tecnologia atual',
    description:
      'Stacks modernas — React, Vite, APIs em Python — escolhidas pelo que o projeto precisa, não por moda.',
  },
  {
    icon: <PerformanceIcon />,
    title: 'Performance como requisito',
    description:
      'Imagens otimizadas, carregamento sob demanda e Core Web Vitals verificados antes de publicar.',
  },
  {
    icon: <DesignIcon />,
    title: 'Design com sistema',
    description:
      'Tokens de cor, tipografia e espaçamento definidos no início, para que cada tela nova continue coerente.',
  },
]

function About() {
  return (
    <section id="sobre" className="section section--about" aria-labelledby="about-title">
      <div className="container about__layout">
        <header className="section__header about__intro reveal" data-reveal>
          <h2 id="about-title" className="section__title">
            Quem é a WaveSync
          </h2>
          <p className="section__lead">
            Somos um estúdio de desenvolvimento web. Trabalhamos em contato direto com quem decide,
            escrevemos o código do zero e entregamos o projeto documentado — do briefing ao deploy em
            produção.
          </p>
        </header>
        <div className="about__grid">
          {cards.map((card, index) => (
            <article
              key={card.title}
              className="glass-card about__card reveal"
              data-reveal
              style={{ '--i': index }}
            >
              <div className="about__icon card-icon" aria-hidden="true">
                {card.icon}
              </div>
              <h3>{card.title}</h3>
              <p>{card.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About
