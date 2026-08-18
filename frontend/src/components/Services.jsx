import { GlobeIcon, FileTextIcon, MonitorIcon, CpuIcon, WrenchIcon } from './Icons'

/* A flag `wide` saiu: no grid de 6 colunas em lg, os dois últimos cards ocupam
 * 3 colunas cada por posição (:nth-child), então o layout não depende mais de
 * um marcador nos dados.
 *
 * "CMS headless" saiu de Desenvolvimento de Sites — não faz parte da entrega. */
const services = [
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
  {
    icon: <CpuIcon />,
    title: 'Automação com IA',
    description:
      'Chatbots, assistentes internos e pipelines que reduzem trabalho manual sem sacrificar qualidade.',
    meta: 'Inclui: integração com as ferramentas que você já usa',
  },
  {
    icon: <WrenchIcon />,
    title: 'Manutenção e Suporte',
    description:
      'SLAs claros, monitoramento, atualizações de segurança e evolução contínua do produto após o go-live.',
    meta: 'Inclui: canal direto com quem desenvolveu o projeto',
  },
]

function Services() {
  return (
    <section id="servicos" className="section section--services" aria-labelledby="services-title">
      <div className="container">
        <header className="section__header reveal" data-reveal>
          <span className="section__label">Serviços</span>
          <h2 id="services-title" className="section__title">
            O que desenvolvemos
          </h2>
          <p className="section__lead">
            Escopo completo para presença digital e operações web — da estratégia ao suporte contínuo.
          </p>
        </header>
        <div className="services__grid">
          {services.map((service, index) => (
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
      </div>
    </section>
  )
}

export default Services
