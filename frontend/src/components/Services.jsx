import { GlobeIcon, FileTextIcon, MonitorIcon, CpuIcon, WrenchIcon } from './Icons'

/* "CMS headless" saiu de Desenvolvimento de Sites — não faz parte da entrega.
 *
 * Serviços divididos em núcleo (3) + também oferecemos (2): 5 cards de mesmo
 * peso visual forçavam autodiagnóstico antes do CTA. O núcleo é o que a
 * maioria dos visitantes procura; o resto continua visível, só não compete
 * de igual para igual com os três primeiros. */
const coreServices = [
  {
    icon: <GlobeIcon />,
    title: 'Desenvolvimento de Sites',
    description:
      'Sites institucionais e corporativos com estrutura semântica, animações leves e infraestrutura escalável.',
    meta: 'Inclui: domínio, HTTPS e analytics configurados',
  },
  {
    icon: <FileTextIcon />,
    title: 'Landing Pages',
    description:
      'Páginas de alta conversão com testes A/B, formulários inteligentes e integração com CRM e analytics.',
    meta: 'Inclui: acompanhamento de conversões',
  },
  {
    icon: <MonitorIcon />,
    title: 'Sistemas Web',
    description:
      'Dashboards, portais e SaaS com APIs seguras, RBAC e observabilidade desde o primeiro sprint.',
    meta: 'Inclui: ambiente de homologação',
  },
]

const alsoServices = [
  {
    icon: <CpuIcon />,
    title: 'Automação com IA',
    description:
      'Chatbots, assistentes internos e pipelines que reduzem trabalho manual sem sacrificar qualidade.',
  },
  {
    icon: <WrenchIcon />,
    title: 'Manutenção e Suporte',
    description:
      'SLAs claros, monitoramento, atualizações de segurança e evolução contínua do produto após o go-live.',
  },
]

function Services() {
  return (
    <section id="servicos" className="section section--services" aria-labelledby="services-title">
      <div className="container">
        <header className="section__header reveal" data-reveal>
          <h2 id="services-title" className="section__title">
            O que desenvolvemos
          </h2>
          <p className="section__lead">
            Escopo completo para presença digital e operações web — da estratégia ao suporte contínuo.
          </p>
        </header>
        <div className="services__grid">
          {coreServices.map((service, index) => (
            <article
              key={service.title}
              className="glass-card service-card reveal"
              data-reveal
              style={{ '--i': index }}
            >
              <span className="service-card__icon card-icon" aria-hidden="true">
                {service.icon}
              </span>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <p className="service-card__meta">{service.meta}</p>
            </article>
          ))}
        </div>
        <div className="services__also">
          <p className="services__also-label">Também oferecemos</p>
          <div className="services__also-grid">
            {alsoServices.map((service, index) => (
              <article
                key={service.title}
                className="glass-card service-card service-card--compact reveal"
                data-reveal
                style={{ '--i': index + 3 }}
              >
                <span className="service-card__icon card-icon" aria-hidden="true">
                  {service.icon}
                </span>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
