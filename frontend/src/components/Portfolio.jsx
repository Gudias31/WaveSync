const projects = [
  {
    visualClass: 'portfolio-card__visual--a',
    tag: 'FinTech',
    title: 'Nimbus Pay',
    description: 'Portal de onboarding e dashboard analítico com tema escuro e fluxos guiados.'
  },
  {
    visualClass: 'portfolio-card__visual--b',
    tag: 'Health',
    title: 'Aura Clinic',
    description: 'Landing multilíngue com agendamento inteligente e integração a agenda médica.'
  },
  {
    visualClass: 'portfolio-card__visual--c',
    tag: 'SaaS',
    title: 'Vertex Ops',
    description: 'Sistema interno de workflows com permissões granulares e auditoria em tempo real.'
  },
  {
    visualClass: 'portfolio-card__visual--d',
    tag: 'E-commerce',
    title: 'Stratos Commerce',
    description: 'Vitrine headless com checkout otimizado e recomendações assistidas por IA.',
    wide: true
  }
]

function Portfolio() {
  return (
    <section id="portfolio" className="section section--portfolio" aria-labelledby="portfolio-title">
      <div className="container">
        <header className="section__header reveal" data-reveal>
          <span className="section__label">Portfólio</span>
          <h2 id="portfolio-title" className="section__title">Projetos em destaque</h2>
          <p className="section__lead">Seleção fictícia inspirada em casos reais — nomes e marcas são exemplificativos.</p>
        </header>
        <div className="portfolio__grid">
          {projects.map((project, index) => (
            <article 
              key={index} 
              className={`portfolio-card reveal ${project.wide ? 'portfolio-card--wide' : ''}`} 
              data-reveal
            >
              <div className={`portfolio-card__visual ${project.visualClass}`} aria-hidden="true"></div>
              <div className="portfolio-card__body glass-panel">
                <span className="portfolio-card__tag">{project.tag}</span>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Portfolio
