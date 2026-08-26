/* Diferenciais.
 *
 * O lead antigo era comparativo ("Padrões que você esperaria de uma empresa de
 * tecnologia global"), o que convida a comparação em vez de descrever o que é
 * feito. Aqui cada item é uma prática concreta — e a de SEO técnico virou
 * literalmente verdade neste próprio site. */
const features = [
  {
    title: 'Design responsivo',
    description:
      'O layout se adapta de celular a monitor largo, sem cortar texto nem exigir rolagem horizontal.',
  },
  {
    title: 'Carregamento leve',
    description: 'Imagens dimensionadas, código dividido e cache configurado para redes lentas.',
  },
  {
    title: 'SEO técnico',
    description:
      'Estrutura semântica, metadados, dados estruturados e sitemap configurados no lançamento.',
  },
  {
    title: 'Segurança',
    description:
      'HTTPS, cabeçalhos de segurança, sanitização de entradas e segredos fora do repositório.',
  },
  {
    title: 'Comunicação direta',
    description:
      'Você fala com quem escreve o código, sem intermediários, com retorno sobre cada etapa.',
    full: true,
  },
]

function Features() {
  return (
    <section id="diferenciais" className="section section--features" aria-labelledby="features-title">
      <div className="container">
        <header className="section__header reveal" data-reveal>
          <h2 id="features-title" className="section__title">
            Por que nos escolher
          </h2>
          <p className="section__lead">
            Design responsivo, carregamento leve, SEO técnico, segurança e canal direto com quem programa.
          </p>
        </header>
        <ul className="features__list">
          {features.map((feature, index) => (
            <li
              key={feature.title}
              className={`glass-card feature-item reveal${feature.full ? ' feature-item--full' : ''}`}
              data-reveal
              style={{ '--i': index }}
            >
              <span className="feature-item__check" aria-hidden="true"></span>
              <div className="feature-item__text">
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
