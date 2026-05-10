import { GlobeIcon, FileTextIcon, MonitorIcon, CpuIcon, WrenchIcon } from './Icons'

const services = [
  {
    icon: <GlobeIcon />,
    title: 'Desenvolvimento de Sites',
    description: 'Sites institucionais e corporativos com CMS headless, animações leves e infraestrutura escalável.'
  },
  {
    icon: <FileTextIcon />,
    title: 'Landing Pages',
    description: 'Páginas de alta conversão com testes A/B, formulários inteligentes e integração com CRM e analytics.'
  },
  {
    icon: <MonitorIcon />,
    title: 'Sistemas Web',
    description: 'Dashboards, portais e SaaS com APIs seguras, RBAC e observabilidade desde o primeiro sprint.'
  },
  {
    icon: <CpuIcon />,
    title: 'Automação com IA',
    description: 'Chatbots, assistentes internos e pipelines que reduzem trabalho manual sem sacrificar qualidade.'
  },
  {
    icon: <WrenchIcon />,
    title: 'Manutenção e Suporte',
    description: 'SLAs claros, monitoramento, atualizações de segurança e evolução contínua do produto após o go-live.',
    wide: true
  }
]

function Services() {
  return (
    <section id="servicos" className="section section--services" aria-labelledby="services-title">
      <div className="container">
        <header className="section__header reveal" data-reveal>
          <span className="section__label">Serviços</span>
          <h2 id="services-title" className="section__title">O que desenvolvemos</h2>
          <p className="section__lead">Escopo completo para presença digital e operações web — da estratégia ao suporte contínuo.</p>
        </header>
        <div className="services__grid">
          {services.map((service, index) => (
            <article 
              key={index} 
              className={`glass-card service-card reveal ${service.wide ? 'service-card--wide' : ''}`} 
              data-reveal
            >
              <span className="service-card__icon" aria-hidden="true">
                {service.icon}
              </span>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
