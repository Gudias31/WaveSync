const features = [
  {
    title: 'Design responsivo',
    description: 'Layouts fluidos de mobile-first a ultra-wide, com componentes que se adaptam ao contexto.'
  },
  {
    title: 'Alta performance',
    description: 'Lazy-loading, code-splitting e edge caching para experiências rápidas em qualquer rede.'
  },
  {
    title: 'SEO otimizado',
    description: 'Schema markup, metadados e estrutura semântica alinhados às diretrizes dos principais buscadores.'
  },
  {
    title: 'Segurança',
    description: 'Cabeçalhos HTTP, sanitização, gestão de segredos e boas práticas OWASP desde o design.'
  },
  {
    title: 'Atendimento rápido',
    description: 'Canais diretos com o time técnico, ritmo ágil de entregas e transparência em cada milestone.',
    full: true
  }
]

function Features() {
  return (
    <section id="diferenciais" className="section section--features" aria-labelledby="features-title">
      <div className="container">
        <header className="section__header reveal" data-reveal>
          <span className="section__label">Diferenciais</span>
          <h2 id="features-title" className="section__title">Por que nos escolher</h2>
          <p className="section__lead">Padrões que você esperaria de uma empresa de tecnologia global — aplicados ao seu projeto.</p>
        </header>
        <ul className="features__list">
          {features.map((feature, index) => (
            <li 
              key={index} 
              className={`glass-card feature-item reveal ${feature.full ? 'feature-item--full' : ''}`} 
              data-reveal
            >
              <span className="feature-item__check" aria-hidden="true"></span>
              <div>
                <strong>{feature.title}</strong>
                <span>{feature.description}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Features
